import Toolbar from "../features/toolbar/Toolbar";
import PlayerList from "../features/players/PlayerList";

function MainContent() {
  return (
    <section className="main-content">
      <Toolbar />
      <PlayerList />
    </section>
  );
}

export default MainContent;
