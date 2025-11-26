
export function filterPlayers(players, displayOption) {
  if (!players?.length) return [];

  if (displayOption === 'all') return players;

  return players.filter((player) =>
    displayOption === 'new'
      ? player.updatedAt == null
      : player.updatedAt != null
  );
}
