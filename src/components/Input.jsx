import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Input({ value, onChange }) {

  return(
    <div className="bg-white py-2 px-4 rounded-l-4xl flex-1 flex items-center">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg sm:text-xl opacity-75"/>
      
      <input 
        type="text" 
        placeholder="search for images..."
        className="p-2 outline-0 text-base sm:text-xl tracking-wide flex-1"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}