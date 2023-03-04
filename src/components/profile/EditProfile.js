import { useState, useEffect } from 'react';
import { EditIcon } from '../../images';
import CreateProfileLock from './CreateProfileLock';
import EditProfileLock from './EditProfileLock';
import DeleteProfileLock from './DeleteProfileLock';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../redux/profileSlice';
import * as profileApi from '../../apis/profile-api';
import useLoading from '../../hooks/useLoading';
import { updateProfile } from '../../redux/authSlice';
import defaultProfile from '../../assets/blank.png';

export default function EditProfile() {
  const [img, setImg] = useState(null);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.state.id;
  const idx = location.state.idx;
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();

  const authUserProfiles = useSelector((state) => state.auth.user.Profiles);

  const currentProfile = useSelector((state) => state.user.currentProfile);

  useEffect(() => {
    if (authUserProfiles?.filter((el) => el.id === id).length === 1) {
      dispatch(fetchProfile(id));
    } else {
      navigate('/profiles');
    }
  }, []);

  useEffect(() => {
    setName(currentProfile?.name);
    return () => {
      setName('');
      window.history.replaceState({}, document.title);
    };
  }, [currentProfile?.name]);

  const handlePreviewImg = (e) => {
    setImg(e.target.files[0]);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      startLoading();
      const formData = new FormData();
      if (name !== currentProfile?.name) {
        const newName = { id: id, name: name };
        formData.append('input', JSON.stringify(newName));
      }
      if (img) {
        formData.append('photo', img);
      }
      const res = await profileApi.editProfile(formData);
      dispatch(
        updateProfile({ arrayIdx: idx, newProfile: res.data.updatedProfile })
      );
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
      navigate('/profiles/manage');
    }
  };

  return (
    <>
      <div className="h-screen bg-black flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex mb-4 ">
            <h1 className="text-white text-5xl ">Edit Profile</h1>
          </div>
          <hr />
          <div className="flex flex-row gap-4 mt-4">
            <div className="relative">
              <img
                className="w-[100px] h-[100px] rounded-md"
                src={
                  img
                    ? URL.createObjectURL(img)
                    : currentProfile?.profileImg
                    ? currentProfile?.profileImg
                    : defaultProfile
                }
                alt="1"
              />
              <button
                className="fill-white w-7 h-7 absolute top-16 left-2 bg-black rounded-xl"
                onClick={() => document.getElementById('imgInput').click()}
              >
                <EditIcon />
              </button>
              <input
                type="file"
                id="imgInput"
                className="hidden"
                onChange={handlePreviewImg}
              />
            </div>
            <div className="">
              <div className="flex flex-col">
                <p className="text-white text-xs">Name:</p>
                <input
                  className="bg-gray-500 w-72 h-8"
                  value={name}
                  onChange={handleChangeName}
                />
              </div>
              <hr className="mt-12" />
              <div className="flex justify-center flex-col mt-7">
                <div className="flex gap-2">
                  <p className="text-white text-xs">Profile Lock</p>
                  <span className="text-xs">
                    {currentProfile?.pin ? 'On' : 'Off'}
                  </span>
                </div>
                <div className="flex gap-4">
                  {currentProfile?.pin ? (
                    <EditProfileLock />
                  ) : (
                    <CreateProfileLock />
                  )}
                  {currentProfile?.pin && <DeleteProfileLock />}
                </div>
              </div>

              <div className="mt-10"></div>
            </div>
          </div>
          <hr />
          <div className="mt-7 flex justify-around ">
            <button
              onClick={handleSubmit}
              className="text-black bg-white px-6 hover:bg-red-600 hover:text-white"
            >
              Save
            </button>
            <button
              // onClick={() => {
              //   window.history.replaceState({}, document.title);
              // }}
              className="border-2 border-gray-500 px-4 text-gray-500 py-1 hover:border-white hover:text-white"
            >
              <Link to={'/profiles/manage'}>Cancel</Link>
            </button>
            <button className="border-2 border-gray-500 text-gray-500 px-4 hover:border-white hover:text-white">
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
