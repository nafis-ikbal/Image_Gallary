export default function ShowMoreButton({onMore}) {
  return (
    <>
      <button className="bg-teal-500 p-3 sm:p-4 rounded-4xl text-base sm:text-xl tracking-wider font-medium
        cursor-pointer" onClick={onMore}>
        Show More Images
      </button>
    </>
  );
}