import { useState } from "react";
import Toolbar from "../features/toolbar/Toolbar";
import PlayerList from "../features/players/PlayerList";
import players from "../../../js/data/players";
import { filterPlayers, sortPlayers } from "../../utils/playerUtils";

function MainContent() {
  // States
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortStatus, setSortStatus] = useState('default');

  // Processing
  const filteredPlayers = filterPlayers(players, filterStatus);
  const sortedPlayers = sortPlayers(filteredPlayers, sortStatus);

  return (
    <section className="main-content">
      <Toolbar
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
        sortStatus={sortStatus}
        onSortChange={setSortStatus}
      />
      <PlayerList players={sortedPlayers} />
    </section>
  );
}

export default MainContent;
