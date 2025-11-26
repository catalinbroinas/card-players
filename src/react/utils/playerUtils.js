
export function filterPlayers(players, displayOption) {
  if (!players?.length) return [];

  if (displayOption === 'all') return players;

  return players.filter((player) =>
    displayOption === 'new'
      ? player.updatedAt == null
      : player.updatedAt != null
  );
}

export function sortPlayers(players, sortOption) {
  if (!players?.length) return [];

  if (sortOption === 'default') return players;

  const sortedPlayers = [...players].sort((a, b) => {
    switch (sortOption) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'name-revert':
        return b.name.localeCompare(a.name);
      case 'team':
        return a.team.localeCompare(b.team);
      case 'team-revert':
        return b.team.localeCompare(a.team);
      default:
        return;
    }
  });

  return sortedPlayers;
}
