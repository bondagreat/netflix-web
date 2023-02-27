import { InfoIcon, PlayIconButton } from '../../images';

export function ButtonHomepage() {
  return (
    <>
      <div className="flex gap-3">
        <button
          className="
          px-6
          py-1
          bg-white
          text-black
          font-medium
          text-lg
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-opacity-50 hover:shadow-lg
           active:ring-2 ring-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <PlayIconButton />
          play
        </button>
        <button
          className="
          px-6
          py-1
          bg-gray-500
          bg-opacity-50
          text-white
          font-medium
          text-lg
          leading-tight
          rounded
          shadow-md
          hover:bg-opacity-30 hover:shadow-lg
            active:ring-2 ring-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
          gap-2
        "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <InfoIcon />
          More Info
        </button>
      </div>
    </>
  );
}
