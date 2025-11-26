import SearchBar from "./SearchBar";
import SortPlayers from "./SortPlayers";
import DisplayPlayers from "./DisplayPlayers";

function Toolbar({
  filterStatus,
  onFilterChange,
  sortStatus,
  onSortChange,
  searchQuery,
  onSearchChange
}) {
	return (
		<section className="toolbar">
			<form className="toolbar__form">
				<SearchBar
          value={searchQuery}
          onChange={onSearchChange}
        />
				<div className="toolbar__row">
					<SortPlayers
            value={sortStatus}
            onChange={onSortChange}
          />
					<DisplayPlayers
						value={filterStatus}
            onChange={onFilterChange}
					/>
				</div>
			</form>
		</section>
	);
}

export default Toolbar;
