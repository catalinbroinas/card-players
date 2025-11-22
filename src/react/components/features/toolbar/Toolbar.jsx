import SearchBar from "./SearchBar";
import SortPlayers from "./SortPlayers";
import DisplayPlayers from "./DisplayPlayers";

function Toolbar() {
	return (
		<section className="toolbar">
			<form className="form-container">
				<SearchBar />
				<SortPlayers />
				<DisplayPlayers />
			</form>
		</section>
	);
}

export default Toolbar;
