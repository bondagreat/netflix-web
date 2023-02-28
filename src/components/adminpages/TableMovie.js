import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

export function TableMovie() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="bg-neutral-600 text-lg text-neutral-400 ">
                <tr className="text-center">
                  <th scope="col" className="px-6 py-4 w-20">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Movie
                  </th>
                  <th scope="col" className="px-6 py-4 w-96">
                    Movie name
                  </th>
                  <th scope="col" className="px-6 py-4 w-40">
                    Length
                  </th>
                  <th scope="col" className="px-6 py-4 w-40">
                    Genres
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center">
                  <td className="whitespace-nowrap px-6 py-4 ">1</td>
                  <td className="whitespace-nowrap px-6 py-1 w-40">
                    <div>
                      <img src={img1} className="rounded-lg" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Movie1</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4"></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center">
                  <td className="whitespace-nowrap px-6 py-4 ">1</td>
                  <td className="whitespace-nowrap px-6 py-1 w-40">
                    <div>
                      <img src={img2} className="rounded-lg" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Movie2</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4"></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center">
                  <td className="whitespace-nowrap px-6 py-4 ">1</td>
                  <td className="whitespace-nowrap px-6 py-1 w-40">
                    <div>
                      <img src={img3} className="rounded-lg" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Movie3</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4"></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center">
                  <td className="whitespace-nowrap px-6 py-4 ">1</td>
                  <td className="whitespace-nowrap px-6 py-1 w-40">
                    <div>
                      <img src={img1} className="rounded-lg" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Movie3</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4"></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center">
                  <td className="whitespace-nowrap px-6 py-4 ">1</td>
                  <td className="whitespace-nowrap px-6 py-1 w-40">
                    <div>
                      <img src={img2} className="rounded-lg" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Movie3</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4"></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center">
                  <td className="whitespace-nowrap px-6 py-4 ">1</td>
                  <td className="whitespace-nowrap px-6 py-1 w-40">
                    <div>
                      <img src={img3} className="rounded-lg" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Movie1</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4"></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center">
                  <td className="whitespace-nowrap px-6 py-4 ">1</td>
                  <td className="whitespace-nowrap px-6 py-1 w-40">
                    <div>
                      <img src={img1} className="rounded-lg" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Movie2</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4"></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center">
                  <td className="whitespace-nowrap px-6 py-4 ">1</td>
                  <td className="whitespace-nowrap px-6 py-1 w-40">
                    <div>
                      <img src={img2} className="rounded-lg" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Movie3</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4"></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center">
                  <td className="whitespace-nowrap px-6 py-4 ">1</td>
                  <td className="whitespace-nowrap px-6 py-1 w-40">
                    <div>
                      <img src={img1} className="rounded-lg" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Movie3</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4"></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-opacity-30 text-center">
                  <td className="whitespace-nowrap px-6 py-4 ">1</td>
                  <td className="whitespace-nowrap px-6 py-1 w-40">
                    <div>
                      <img src={img2} className="rounded-lg" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Movie3</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col">
    //   <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    //     <div className=" min-w-full py-2 sm:px-6 lg:px-8">
    //       <div className="overflow-hidden">
    //         <table className="min-w-full text-center text-sm font-light">
    //           <thead className="border-b bg-neutral-400 font-medium dark:border-neutral-500 dark:text-neutral-800">
    //             <tr>
    //               <th scope="col" className=" px-6 py-4">
    //                 id
    //               </th>
    //               <th scope="col" className=" px-6 py-4">
    //                 Movie
    //               </th>
    //               <th scope="col" className=" px-6 py-4">
    //                 Movie name
    //               </th>
    //               <th scope="col" className=" px-6 py-4">
    //                 Length
    //               </th>
    //               <th scope="col" className=" px-6 py-4">
    //                 Genres
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr className="border-b dark:border-neutral-500">
    //               <td className="whitespace-nowrap  px-6 py-4 font-medium">
    //                 1
    //               </td>
    //               <td className=" px-6 py-4 w-44">
    //                 <img src={img2} className="" />
    //               </td>
    //               <td className="whitespace-nowrap  px-6 py-4">Otto</td>
    //               <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
    //             </tr>
    //             <tr className="border-b dark:border-neutral-500">
    //               <td className="whitespace-nowrap  px-6 py-4 font-medium">
    //                 2
    //               </td>
    //               <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
    //               <td className="whitespace-nowrap  px-6 py-4">Thornton</td>
    //               <td className="whitespace-nowrap  px-6 py-4">@fat</td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
