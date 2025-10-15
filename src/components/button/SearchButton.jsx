export default function SearchButton({handleClick}) {
  return (
    <>
      <button className="bg-teal-500 px-3 sm:px-4 rounded-r-4xl text-lg sm:text-2xl tracking-wider font-medium
        cursor-pointer whitespace-nowrap" onClick={handleClick}>
        Search
      </button>
    </>
  );
}