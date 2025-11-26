
function SortPlayers({ value, onChange }) {
  const sortOptions = [
    { id: 'default', label: 'Default order' },
    { id: 'name', label: 'Name (A–Z)' },
    { id: 'name-revert', label: 'Name (Z–A)' },
    { id: 'team', label: 'Team (A–Z)' },
    { id: 'team-revert', label: 'Team (Z–A)' },
    { id: 'date',  label: 'Date (new)' },
    { id: 'date-revert',  label: 'Date (old)' }
  ];
  
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
