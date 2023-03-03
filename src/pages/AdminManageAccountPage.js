import Brand from '../layouts/Brand';
import MenuItemRight from '../layouts/MenuItemRight';
import { HomeLogo, SearchIcon, ArrowLeft, ArrowRight } from '../images';
import { useState } from 'react';
import UserList from '../components/admin/UserList';
import useSearch from '../hooks/useSearch';

export default function AdminManageAccountPage() {
  const [search, setSearch] = useState('');
  // const {} = useSearch();

  const handleSearch = () => {
    setSearch(search);
  };

  return (
    <>
      <div>
        <div className=" top-0 left-0 right-0 bg-black h-[100px] ">
          <div className="flex justify-center">
            <div className=" h-[70px] w-full flex">
              <Brand />
            </div>
            <div className=" h-[100px]  w-full ">
              <div className="flex items-center flex-row justify-end gap-3 mr-10 mt-8">
                <MenuItemRight>
                  <div className="flex flex-row">
                    <SearchIcon />
                    <input
                      className="border-2 border-white bg-black text-white"
                      onChange={handleSearch}
                    />
                  </div>
                </MenuItemRight>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  w-screen h-screen">
          <div className="pt-10 w-[230px] pl-5 bg-zinc-800">
            <div>
              <div className="flex flex-row gap-3">
                <div className="fill-white ">
                  <HomeLogo />
                </div>
                <p className="text-white mt-2">Home</p>
              </div>
              <div className="pl-11">
                <p className="text-white mt-2">Users</p>
                <p className="text-white mt-2">Movies</p>
              </div>
            </div>
            <div className="text-white mt-4">
              <p>Log out</p>
            </div>
          </div>
          <div className="bg-neutral-500 flex flex-grow flex-col">
            <div className="flex flex-row justify-between">
              <p className="text-white mt-2 ml-2">Users</p>
            </div>
            <div className="flex flex-col mt-10">
              <div>
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className=" bg-neutral-500 font-medium ">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            Id
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Username
                          </th>
                          <th scope="col" className="px-6 py-4">
                            E-mail
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-4"></th>
                          <th scope="col" className="px-6 py-4"></th>
                        </tr>
                      </thead>
                      <UserList />
                    </table>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center mt-14">
                <div className="fill-white">
                  <ArrowLeft />
                </div>
                <div className="flex flex-row gap-4 mt-1">
                  <p className="text-white ">1</p>
                  <p className="text-white ">...</p>
                </div>
                <div className="fill-white">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
