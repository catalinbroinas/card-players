
function SortPlayers() {
  return (
    <div className="toolbar__select">
      <label
        htmlFor="sort-players"
        className="form-legend m-0"
      >Sort by</label>

      <select
        id="sort-players"
        className="form-outline form-select"
      >
        <option value="name">Name</option>
        <option value="team">Team</option>
        <option value="age">Age</option>
      </select>
    </div>
  );
}

export default SortPlayers;
