import SearchBar from "./SearchBar";
import SortPlayers from "./SortPlayers";

function Toolbar() {
	return (
		<section className="toolbar">
			<form className="form-container">
				<SearchBar />
				<SortPlayers />
			</form>
		</section>
	);
}

export default Toolbar;
