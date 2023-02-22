import Brand from '../layouts/Brand';
import MenuItemRight from '../layouts/MenuItemRight';
import { HomeLogo, SearchIcon } from '../images';

export default function AdminManageAccountPage() {
  return (
    <>
      <div>
        <div className=" top-0 left-0 right-0 bg-black h-[100px] ">
          <div className="flex justify-center">
            <div className=" h-[70px] w-full flex">
              <Brand />
            </div>
            <div className=" h-[100px]  w-full ">
              <div className="flex items-center justify-end gap-3 mr-10 mt-8">
                <MenuItemRight>
                  <SearchIcon />
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
            <p className="text-white mt-2 ml-2">Transactions</p>
            <div class="flex flex-col ">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-max py-2 mx-16 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                      <thead class="border-b bg-neutral-500 font-medium ">
                        <tr>
                          <th scope="col" class="px-6 py-4"></th>
                          <th scope="col" class="px-6 py-4">
                            First
                          </th>
                          <th scope="col" class="px-6 py-4">
                            Last
                          </th>
                          <th scope="col" class="px-6 py-4">
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b bg-neutral-400 ">
                          <td class="whitespace-nowrap px-6 py-4 font-medium"></td>
                          <td class="whitespace-nowrap px-6 py-4">Mark</td>
                          <td class="whitespace-nowrap px-6 py-4">Otto</td>
                          <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                        </tr>
                        <tr class="border-b bg-neutral-500  ">
                          <td class="whitespace-nowrap px-6 py-4 font-medium"></td>
                          <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                          <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                          <td class="whitespace-nowrap px-6 py-4">@fat</td>
                        </tr>
                        <tr class="border-b bg-neutral-400  ">
                          <td class="whitespace-nowrap px-6 py-4 font-medium"></td>
                          <td
                            colspan="2"
                            class="whitespace-nowrap px-6 py-4 text-center"
                          >
                            Larry the Bird
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
