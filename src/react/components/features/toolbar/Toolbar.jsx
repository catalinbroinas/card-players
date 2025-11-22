import SearchBar from "./SearchBar";
import SortPlayers from "./SortPlayers";
import DisplayPlayers from "./DisplayPlayers";

function Toolbar() {
	return (
		<section className="toolbar">
			<form className="toolbar__form">
				<SearchBar />
				<div className="toolbar__row">
					<SortPlayers />
					<DisplayPlayers />
				</div>
			</form>
		</section>
	);
}

export default Toolbar;
