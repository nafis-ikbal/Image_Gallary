import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Input({ value, onChange }) {

  return(
    <div className="bg-white py-2 px-4 rounded-l-2xl">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl opacity-75"/>
      
      <input 
        type="text" 
        placeholder="search for images..."
        className="p-2 outline-0 text-xl tracking-wide"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}