import PlayerCard from "./PlayerCard";

function PlayerList({ players }) {
  return (
    <section className="player-list">
      {players.map(player => (
        <PlayerCard key={player.id} {...player} />
      ))}
    </section>
  );
}

export default PlayerList;
