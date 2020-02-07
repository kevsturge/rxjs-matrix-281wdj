
const drop = (x: number, y: number) => ({ x, y, d: [], remove: false });
const random = (max: number) => Math.floor(Math.random() * Math.floor(max));
const randomChar = () => String.fromCharCode(random(128));

export const markForRemoval = matrix =>
  matrix.forEach(drop => drop.remove = drop.remove
    ? true
    : drop.d.length > 20);
export const updateDrops = matrix =>
  matrix.forEach(drop => drop.d = drop.remove
    ? drop.d.slice(1).map(randomChar)
    : [
      randomChar(),
      ...drop.d.map(randomChar)
    ]);
export const updateMatrix = matrix => [
  ...matrix,
  drop(random(window.innerHeight) / 4, random(window.innerWidth))
];