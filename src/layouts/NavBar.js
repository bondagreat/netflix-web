import Brand from './Brand';
import Menu from './Menu';
import MenuRight from './MenuRight';
import { useState, useEffect } from 'React';

export default function NavBar() {
  const [isEdit, setEdit] = useState(true);

  useEffect(() => {
    if (window.location.pathname == '/editAccount') {
      setEdit(false);
    } else {
      setEdit(true);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-b from-black h-[80px] z-30 `">
      <div className="flex justify-center">
        <div className=" h-[70px] w-full flex">
          <Brand />
          {isEdit ? <Menu /> : <></>}
        </div>
        <div className=" h-[70px]  w-full ">
          <MenuRight />
        </div>
      </div>
    </div>
  );
}
