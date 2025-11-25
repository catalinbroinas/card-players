import PlayerCard from "./PlayerCard";
import players from "../../../../js/data/players";

function PlayerList() {
  return (
    <section className="player-list">
      {players.map(player => (
        <PlayerCard key={player.id} {...player} />
      ))}
    </section>
  );
}

export default PlayerList;
