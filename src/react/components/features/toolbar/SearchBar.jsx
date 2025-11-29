import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ value, onChange }) {
  return (
    <div className="toolbar__searchbar">
      <div className="form-outline">
        <input
          type="search"
          id="searchbar"
          className="form-control"
          placeholder="ex: Declan Rice"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <label
          htmlFor="searchbar"
          className="form-label"
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="me-2"
            aria-hidden="true"
          />
          Search player
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
