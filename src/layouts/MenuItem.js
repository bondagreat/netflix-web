export default function MenuItem({ children, active }) {
  return (
    <button
      className={`${
        active
          ? "text-white text-sm"
          : "text-gray-400 hover:text-gray-500"
      }`}
    >
      {children}
    </button>
  );
}
