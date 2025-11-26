
function DisplayPlayers({ value, onChange }) {
  const selectOptions = ['All', 'New', 'Update'];

  return (
    <div className="toolbar__select">
      <label
        htmlFor="display-players"
        className="form-legend m-0"
      >Display by</label>

      <select
        id="display-players"
        className="form-outline form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {selectOptions.map((item) => (
          <option key={item} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DisplayPlayers;
