
function DisplayPlayers() {
  return (
    <div className="toolbar__select">
      <label
        htmlFor="display-players"
        className="form-legend m-0"
      >Display by</label>

      <select
        id="display-players"
        className="form-outline form-select"
      >
        <option value="name">All</option>
        <option value="team">New</option>
        <option value="age">Update</option>
      </select>
    </div>
  );
}

export default DisplayPlayers;
