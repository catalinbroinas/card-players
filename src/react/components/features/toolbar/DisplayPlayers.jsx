
function DisplayPlayers({ value, onChange }) {
  const displayOptions = [
    { id: 'all', label: 'All' },
    { id: 'new', label: 'New' },
    { id: 'update', label: 'Update' }
  ];

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
        {displayOptions.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DisplayPlayers;
