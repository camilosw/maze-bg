import { SubTile } from '../SubTile';
import cn from './Tile.module.css';

type Props = {
  ids: number[];
};

export const Tile = ({ ids }: Props) => {
  if (ids.length !== 4) throw new Error('Tile must have 4 ids');

  return (
    <div className={cn.tile}>
      <div className={cn.row}>
        <SubTile id={ids[0]} tilePosition={0} />
        <SubTile id={ids[1]} tilePosition={1} />
      </div>
      <div className={cn.row}>
        <SubTile id={ids[3]} tilePosition={3} />
        <SubTile id={ids[2]} tilePosition={2} />
      </div>
      <div className={cn.horizontalLine} />
      <div className={cn.verticalLine} />
    </div>
  );
};
