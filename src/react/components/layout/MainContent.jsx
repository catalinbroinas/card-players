import Toolbar from "../features/toolbar/Toolbar";
import PlayerList from "../features/players/PlayerList";
import players from "../../../js/data/players";

function MainContent() {
  return (
    <section className="main-content">
      <Toolbar />
      <PlayerList players={players} />
    </section>
  );
}

export default MainContent;
