import imageUrl from "./playerImages";

const players = [
  {
    id: crypto.randomUUID(),
    imageUrl: imageUrl.rice,
    name: "Declan Rice",
    team: "Arsenal",
    createdAt: "2025-11-04",
    updatedAt: null
  },
  {
    id: crypto.randomUUID(),
    imageUrl: imageUrl.haaland,
    name: "Erling Haaland",
    team: "Manchester City",
    createdAt: "2025-11-04",
    updatedAt: "2025-11-20"
  },
  {
    id: crypto.randomUUID(),
    imageUrl: imageUrl.salah,
    name: "Mohamed Salah",
    team: "Liverpool",
    createdAt: "2024-12-12",
    updatedAt: "2025-10-03"
  },
  {
    id: crypto.randomUUID(),
    imageUrl: imageUrl.emiliano,
    name: "Emiliano Martinez",
    team: "Aston Villa",
    createdAt: "2025-11-02",
    updatedAt: null
  }
];

export default players;
