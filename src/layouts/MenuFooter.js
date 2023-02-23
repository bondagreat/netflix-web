export default function MenuFooter() {
  return (
    <>
      <div className="text-sm">
        <div className="flex mt-5 text-gray-500 justify-start ">
          <div className="flex-1 ">
            <button className="hover:underline">Audio Description</button>
          </div>
          <div className="flex-1">
            <button className="hover:underline">Help Center</button>
          </div>
          <div className="flex-1">
            <button className="hover:underline">Gift Cards</button>
          </div>
          <div className="flex-1">
            <button className="hover:underline">Media Center</button>
          </div>
        </div>
        <div className="flex mt-5 text-gray-500 justify-start ">
          <div className="flex-1">
            <button className="hover:underline">Investor Relations</button>
          </div>
          <div className="flex-1">
            <button className="hover:underline">Jobs</button>
          </div>
          <div className="flex-1">
            <button className="hover:underline">Terms of Use</button>
          </div>
          <div className="flex-1">
            <button className="hover:underline">Privacy</button>
          </div>
        </div>
        <div className="flex mt-5 text-gray-500 justify-start ">
          <div className="flex-1">
            <button className="hover:underline">Legal Notices</button>
          </div>
          <div className="flex-1">
            <button className="hover:underline">Cookies Proferences</button>
          </div>
          <div className="flex-1">
            <button className="hover:underline">Corporate Information</button>
          </div>
          <div className="flex-1">
            <button className="hover:underline">Contact Us</button>
          </div>
        </div>
        <div className=" mt-6 text-gray-500  ">
          <button
            type="button"
            className="inline-block px-2 py-2 border-2 border-gray-500 text-gray-500 hover:text-white font-medium text-xs leading-tight uppercase  hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Service Code
          </button>
          <div className="mt-5">@1997-2023 Netflix, Inc.</div>
        </div>
      </div>
    </>
  );
}
