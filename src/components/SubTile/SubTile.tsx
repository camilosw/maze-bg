import { HatchPattern } from './HatchPattern';

import { SubTile00 } from './SubTiles/SubTile00';
import { SubTile01 } from './SubTiles/SubTile01';
import { SubTile02 } from './SubTiles/SubTile02';
import { SubTile03 } from './SubTiles/SubTile03';
import { SubTile04 } from './SubTiles/SubTile04';
import { SubTile05 } from './SubTiles/SubTile05';

const subTiles = [
  SubTile00,
  SubTile01,
  SubTile02,
  SubTile03,
  SubTile04,
  SubTile05,
];

type Props = {
  id: number;
  tilePosition: number;
};

export const SubTile = ({ id, tilePosition }: Props) => {
  const SelectedSubTile = subTiles[id];

  if (!SelectedSubTile) throw new Error(`Invalid id: ${id}`);
  if (tilePosition < 0 || tilePosition > 3)
    throw new Error(`Invalid tilePosition: ${tilePosition}`);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className="iconify iconify--logos"
      width="37mm"
      height="37mm"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 100 100"
    >
      <HatchPattern />
      <g
        transform={`translate(50, 50) rotate(${
          tilePosition * 90
        }) translate(-50,-50)`}
      >
        <SelectedSubTile />
      </g>
    </svg>
  );
};
