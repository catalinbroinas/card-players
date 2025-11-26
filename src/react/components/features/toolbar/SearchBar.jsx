
function SearchBar({ value, onChange }) {
  return (
    <div className="toolbar__searchbar">
      <div className="form-outline">
        <input
          type="text"
          id="searchbar"
          className="form-control"
          placeholder="Search players"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <label
          htmlFor="searchbar"
          className="form-label"
        >Search players</label>
      </div>
    </div>
  );
}

export default SearchBar;
