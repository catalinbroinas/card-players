import { useState } from "react";
import Toolbar from "../features/toolbar/Toolbar";
import PlayerList from "../features/players/PlayerList";
import players from "../../../js/data/players";
import displayOptions from "../../data/displayOptions";
import sortOptions from "../../data/sortOptions";
import { filterPlayers, sortPlayers, searchPlayers } from "../../utils/playerUtils";

function MainContent() {
  // States
  const [filterStatus, setFilterStatus] = useState(displayOptions[0].id);
  const [sortStatus, setSortStatus] = useState(sortOptions[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  // Processing
  const filteredPlayers = filterPlayers(players, filterStatus);
  const sortedPlayers = sortPlayers(filteredPlayers, sortStatus);
  const searchedPlayers = searchPlayers(sortedPlayers, searchQuery);

  return (
    <section className="main-content">
      <Toolbar
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
        sortStatus={sortStatus}
        onSortChange={setSortStatus}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <PlayerList players={searchedPlayers} />
    </section>
  );
}

export default MainContent;
