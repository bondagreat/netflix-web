<<<<<<< HEAD
import netflixBgPic from '../assets/images/netflixBg.jpeg';
import LoginForm from '../features/auth/LoginForm';
import { NetFlixLogo } from '../images';
import Brand from '../layouts/Brand';
import NavBarFooter from '../layouts/NavBarFooter';
=======
import LoginForm from '../components/login/LoginForm';
>>>>>>> origin/dev

export default function LoginPage() {
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/e251261f-cc87-497a-8672-194e306e76bc/TH-en-20230213-popsignuptwoweeks-perspective_alpha_website_small.jpg')]  w-full h-screen bg-center bg-cover bg-dunes ">
      {/* <div className="bg-black/50 h-screen w-screen flex justify-center"> */}
      <div className="flex flex-row bg-black/50">
        <div className="h-[10vh]  flex bg-black/50 justify-between mx-10">
          <NetFlixLogo />
        </div>
      </div>
      <div className="bg-black/50 h-90 w-screen flex justify-center">
        <LoginForm />
      </div>
      <NavBarFooter />
    </div>
  );
}
