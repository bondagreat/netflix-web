export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full px-3 py-2 bg-my-white border border-my-orange rounded-3xl placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600"
      />
      {error && <div className="text-red-400 text-xs">{error}</div>}
    </>
  );
}
