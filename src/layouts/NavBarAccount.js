import Brand from './Brand';

import MenuRight from './MenuRight';

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-black/90 h-[80px] z-30">
      <div className="flex justify-center">
        <div className=" h-[70px] w-full flex">
          <Brand />
        </div>
        <div className=" h-[70px]  w-full ">
          <MenuRight />
        </div>
      </div>
    </div>
  );
}
