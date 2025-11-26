import { useState } from "react";
import Toolbar from "../features/toolbar/Toolbar";
import PlayerList from "../features/players/PlayerList";
import players from "../../../js/data/players";
import { filterPlayers } from "../../utils/playerUtils";

function MainContent() {
  // States
  const [filterStatus, setFilterStatus] = useState('all');

  // Processing
  const filteredPlayers = filterPlayers(players, filterStatus);

  return (
    <section className="main-content">
      <Toolbar
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
      />
      <PlayerList players={filteredPlayers} />
    </section>
  );
}

export default MainContent;
