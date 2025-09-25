export default function SearchButton({handleClick}) {
  return (
    <>
      <button className="bg-teal-500 px-4 rounded-r-2xl text-2xl tracking-wider font-medium
        cursor-pointer" onClick={handleClick}>
        Search
      </button>
    </>
  );
}