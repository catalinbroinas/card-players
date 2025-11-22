import SearchBar from "./SearchBar";
import SortPlayers from "./SortPlayers";
import DisplayPlayers from "./DisplayPlayers";

function Toolbar() {
	return (
		<section className="toolbar">
			<form className="toolbar__form">
				<SearchBar />
				<SortPlayers />
				<DisplayPlayers />
			</form>
		</section>
	);
}

export default Toolbar;
