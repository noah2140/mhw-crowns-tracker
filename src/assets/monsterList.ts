import { Monster } from '../types/monster';

const BASE_URL = process.env.PUBLIC_URL || '';

export const initialMonsters: Monster[] = [
  { id: 1, name: 'Great Jagras', icon: `${BASE_URL}/large/greatJagras.png`, baseGame: true, endemic: false, required: true },
  { id: 2, name: 'Kulu-Ya-Ku', icon: `${BASE_URL}/large/kulu.png`, baseGame: true, endemic: false, required: true },
  { id: 3, name: 'Pukei-Pukei', icon: `${BASE_URL}/large/pukei.png`, baseGame: true, endemic: false, required: true },
  { id: 4, name: 'Barroth', icon: `${BASE_URL}/large/barroth.png`, baseGame: true, endemic: false, required: true },
  { id: 5, name: 'Jyuratodus', icon: `${BASE_URL}/large/jyuratodus.png`, baseGame: true, endemic: false, required: true },
  { id: 6, name: 'Tobi-Kadachi', icon: `${BASE_URL}/large/tobi.png`, baseGame: true, endemic: false, required: true },
  { id: 7, name: 'Anjanath', icon: `${BASE_URL}/large/anjanath.png`, baseGame: true, endemic: false, required: true },
  { id: 8, name: 'Rathian', icon: `${BASE_URL}/large/rathian.png`, baseGame: true, endemic: false, required: true },
  { id: 9, name: 'Tzitzi-Ya-Ku', icon: `${BASE_URL}/large/tzitzi.png`, baseGame: true, endemic: false, required: true },
  { id: 10, name: 'Paolumu', icon: `${BASE_URL}/large/paolumu.png`, baseGame: true, endemic: false, required: true },
  { id: 11, name: 'Great Girros', icon: `${BASE_URL}/large/greatGirros.png`, baseGame: true, endemic: false, required: true },
  { id: 12, name: 'Radobaan', icon: `${BASE_URL}/large/radobaan.png`, baseGame: true, endemic: false, required: true },
  { id: 13, name: 'Legiana', icon: `${BASE_URL}/large/legiana.png`, baseGame: true, endemic: false, required: true },
  { id: 14, name: 'Odogaron', icon: `${BASE_URL}/large/odogaron.png`, baseGame: true, endemic: false, required: true },
  { id: 15, name: 'Rathalos', icon: `${BASE_URL}/large/rathalos.png`, baseGame: true, endemic: false, required: true },
  { id: 16, name: 'Diablos', icon: `${BASE_URL}/large/diablos.png`, baseGame: true, endemic: false, required: true },
  { id: 17, name: 'Kirin', icon: `${BASE_URL}/large/kirin.png`, baseGame: true, endemic: false, required: true },
  { id: 18, name: 'Dodogama', icon: `${BASE_URL}/large/dodogama.png`, baseGame: true, endemic: false, required: true },
  { id: 19, name: 'Pink Rathian', icon: `${BASE_URL}/large/pinkRathian.png`, baseGame: true, endemic: false, required: true },
  { id: 20, name: 'Bazelgeuse', icon: `${BASE_URL}/large/bazelgeuse.png`, baseGame: true, endemic: false, required: true },
  { id: 21, name: 'Deviljho', icon: `${BASE_URL}/large/deviljho.png`, baseGame: false, endemic: false, required: true },
  { id: 22, name: 'Lavasioth', icon: `${BASE_URL}/large/lavasioth.png`, baseGame: true, endemic: false, required: true },
  { id: 23, name: 'Uragaan', icon: `${BASE_URL}/large/uragaan.png`, baseGame: true, endemic: false, required: true },
  { id: 24, name: 'Azure Rathalos', icon: `${BASE_URL}/large/azureRathalos.png`, baseGame: true, endemic: false, required: true },
  { id: 25, name: 'Black Diablos', icon: `${BASE_URL}/large/blackDiablos.png`, baseGame: true, endemic: false, required: true },
  { id: 26, name: 'Nergigante', icon: `${BASE_URL}/large/nergigante.png`, baseGame: true, endemic: false, required: true },
  { id: 27, name: 'Teostra', icon: `${BASE_URL}/large/teostra.png`, baseGame: true, endemic: false, required: true },
  { id: 28, name: 'Lunastra', icon: `${BASE_URL}/large/lunastra.png`, baseGame: false, endemic: false, required: true },
  { id: 29, name: 'Kushala Daora', icon: `${BASE_URL}/large/kushala.png`, baseGame: true, endemic: false, required: true },
  { id: 30, name: 'Vaal Hazak', icon: `${BASE_URL}/large/vaal.png`, baseGame: true, endemic: false, required: true },
  { id: 31, name: 'Beotodus', icon: `${BASE_URL}/large/beotodus.png`, baseGame: false, endemic: false, required: true },
  { id: 32, name: 'Banbaro', icon: `${BASE_URL}/large/banbaro.png`, baseGame: false, endemic: false, required: true },
  { id: 33, name: 'Viper Tobi-Kadachi', icon: `${BASE_URL}/large/viperTobi.png`, baseGame: false, endemic: false, required: true },
  { id: 34, name: 'Nightshade Paolumu', icon: `${BASE_URL}/large/nightshadePaolumu.png`, baseGame: false, endemic: false, required: true },
  { id: 35, name: 'Coral Pukei-Pukei', icon: `${BASE_URL}/large/coralPukei.png`, baseGame: false, endemic: false, required: true },
  { id: 36, name: 'Barioth', icon: `${BASE_URL}/large/barioth.png`, baseGame: false, endemic: false, required: true },
  { id: 37, name: 'Nargacuga', icon: `${BASE_URL}/large/nargacuga.png`, baseGame: false, endemic: false, required: true },
  { id: 38, name: 'Glavenus', icon: `${BASE_URL}/large/glavenus.png`, baseGame: false, endemic: false, required: true },
  { id: 39, name: 'Tigrex', icon: `${BASE_URL}/large/tigrex.png`, baseGame: false, endemic: false, required: true },
  { id: 40, name: 'Brachydios', icon: `${BASE_URL}/large/brachydios.png`, baseGame: false, endemic: false, required: true },
  { id: 41, name: 'Shrieking Legiana', icon: `${BASE_URL}/large/shriekingLegiana.png`, baseGame: false, endemic: false, required: true },
  { id: 42, name: 'Fulgur Anjanath', icon: `${BASE_URL}/large/fulgurAnjanath.png`, baseGame: false, endemic: false, required: true },
  { id: 43, name: 'Acidic Glavenus', icon: `${BASE_URL}/large/acidicGlavenus.png`, baseGame: false, endemic: false, required: true },
  { id: 44, name: 'Ebony Odogaron', icon: `${BASE_URL}/large/ebonyOdogaron.png`, baseGame: false, endemic: false, required: true },
  { id: 45, name: 'Velkhana', icon: `${BASE_URL}/large/velkhana.png`, baseGame: false, endemic: false, required: true },
  { id: 46, name: 'Seething Bazelgeuse', icon: `${BASE_URL}/large/seethingBazelgeuse.png`, baseGame: false, endemic: false, required: true },
  { id: 47, name: 'Blackveil Vaal Hazak', icon: `${BASE_URL}/large/blackveilVaal.png`, baseGame: false, endemic: false, required: true },
  { id: 48, name: 'Namielle', icon: `${BASE_URL}/large/namielle.png`, baseGame: false, endemic: false, required: true },
  { id: 49, name: 'Savage Deviljho', icon: `${BASE_URL}/large/savageDeviljho.png`, baseGame: false, endemic: false, required: true },
  { id: 50, name: 'Ruiner Nergigante', icon: `${BASE_URL}/large/ruinerNergigante.png`, baseGame: false, endemic: false, required: true },
  { id: 51, name: 'Zinogre', icon: `${BASE_URL}/large/zinogre.png`, baseGame: false, endemic: false, required: true },
  { id: 52, name: 'Yian Garuga', icon: `${BASE_URL}/large/yianGaruga.png`, baseGame: false, endemic: false, required: true },
  { id: 53, name: 'Scarred Yian Garuga', icon: `${BASE_URL}/large/scarredYian.png`, baseGame: false, endemic: false, required: true },
  { id: 54, name: 'Brute Tigrex', icon: `${BASE_URL}/large/bruteTigrex.png`, baseGame: false, endemic: false, required: true },
  { id: 55, name: 'Gold Rathian', icon: `${BASE_URL}/large/goldRathian.png`, baseGame: false, endemic: false, required: true },
  { id: 56, name: 'Silver Rathalos', icon: `${BASE_URL}/large/silverRathalos.png`, baseGame: false, endemic: false, required: true },
];

