import sortOptions from "../../../data/sortOptions";

function SortPlayers({ value, onChange }) {
  return (
    <div className="toolbar__select">
      <label
        htmlFor="sort-players"
        className="form-legend m-0"
      >Sort by</label>

      <select
        id="sort-players"
        className="form-outline form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {sortOptions.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortPlayers;
