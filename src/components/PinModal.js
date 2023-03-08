import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { XIcon } from '../images';
import { fetchProfile } from '../redux/profileSlice';

export const PinModal = ({
  setModal,
  userId,
  choseUser = {},
  onPinCorrect,
}) => {
  const fromRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isError, setIsError] = useState(false);
  const [inPin, setInPin] = useState({});
  const handleClickClose = () => {
    setModal(false);
    setIsError(false);
    setInPin({});
    setFocusedIndex(0);
  };

  const comparePin = (obj1, obj2) => {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  };
  useEffect(() => {
    if (inPin[3]) {
      if (comparePin(choseUser, inPin)) {
        setModal(false);
        onPinCorrect();
        navigate('/browse');
      } else {
        setIsError(true);
      }
    }
  }, [inPin]);
  const handleChangePin = (e) => {
    setFocusedIndex(e.target.name);
    if (e.key == 'Backspace') {
      if (focusedIndex > 0) {
        const nextIndex = focusedIndex - 1;
        inputRef[nextIndex].current.focus();
        setFocusedIndex(nextIndex);
      }
    } else {
      if (focusedIndex == 3) {
        const nextIndex = 0;
        inputRef[nextIndex].current.focus();
        setFocusedIndex(nextIndex);
        fromRef.current.reset();
      } else {
        const nextIndex = 1 * focusedIndex + 1;
        inputRef[nextIndex].current.focus();
        setFocusedIndex(nextIndex);
      }
    }
    setInPin({ ...inPin, [e.target.name]: e.key });
  };
  return (
    <div className="bg-black w-full h-screen z-10 flex justify-center absolute top-0.5 left-0.5">
      <button
        className="z-10 absolute left-[900px] top-11"
        onClick={handleClickClose}
      >
        <XIcon />
      </button>

      <div className="flex-col w-8/12 self-center text-center">
        <p className="mb-4 text-lg">Profile Lock is Currently on.</p>
        {isError ? (
          <h1 className="text-yellow-400 text-4xl font-semibold ">
            Oops, wrong PIN.Please try again.
          </h1>
        ) : (
          <h1 className="text-white text-3xl font-semibold">
            Enter your PIN to access this profile.
          </h1>
        )}
        <br />
        <div className="flex h-40 justify-center items-center outline-none">
          <form ref={fromRef}>
            <input
              className="hidepassword text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none -webkit-text-security-disc focus:border-white focus:ring-0"
              style={{ MozAppearance: 'none' }}
              maxLength="1"
              name="0"
              type="password"
              ref={inputRef[0]}
              onKeyUp={handleChangePin}
            ></input>
            <input
              className="hidepassword text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none -webkit-text-security-disc focus:border-white focus:ring-0"
              style={{ MozAppearance: 'none' }}
              maxLength="1"
              name="1"
              type="password"
              ref={inputRef[1]}
              onKeyUp={handleChangePin}
            ></input>
            <input
              className="hidepassword text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none -webkit-text-security-disc focus:border-white focus:ring-0"
              style={{ MozAppearance: 'none' }}
              maxLength="1"
              name="2"
              type="password"
              ref={inputRef[2]}
              onKeyUp={handleChangePin}
            ></input>
            <input
              className="hidepassword text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none -webkit-text-security-disc focus:border-white focus:ring-0"
              style={{ MozAppearance: 'none' }}
              maxLength="1"
              name="3"
              type="password"
              ref={inputRef[3]}
              onKeyUp={handleChangePin}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};
