import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from '../images';
import MenuFooter from './MenuFooter';

export default function NavBarFooter() {
  return (
    <div className="bg-black h-300px] mt-56 p-2">
      <div className="w-3/4 m-auto">
        <div className="flex gap-5 pt-3 px-5">
          <button>
            <FacebookLogo />
          </button>
          <button>
            <InstagramLogo />
          </button>
          <button>
            <TwitterLogo />
          </button>
          <button>
            <YoutubeLogo />
          </button>
        </div>
        <div>
          <MenuFooter />
        </div>
      </div>
    </div>
  );
}
