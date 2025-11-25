import PlayerCard from "./PlayerCard";
import declanRice from "../../../../assets/images/players/rice.webp";

function PlayerList() {
  const players = [
    {
      id: crypto.randomUUID(),
      imageUrl: declanRice,
      name: "Declan Rice",
      team: "Arsenal",
      createdAt: "2025-11-04",
      updatedAt: null
    },
    {
      id: crypto.randomUUID(),
      imageUrl: declanRice,
      name: "Declan Rice",
      team: "Arsenal",
      createdAt: "2025-11-04",
      updatedAt: "2025-11-20"
    }
  ];

  return (
    <section className="player-list">
      {players.map(player => (
        <PlayerCard key={player.id} {...player} />
      ))}
    </section>
  );
}

export default PlayerList;
