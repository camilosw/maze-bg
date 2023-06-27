import { SubTile } from '../SubTile';
import cn from './Tile.module.css';

export const Tile = () => {
  return (
    <div className={cn.tile}>
      <div className={cn.row}>
        <SubTile id={1} tilePosition={0} />
        <SubTile id={2} tilePosition={1} />
      </div>
      <div className={cn.row}>
        <SubTile id={3} tilePosition={3} />
        <SubTile id={4} tilePosition={2} />
      </div>
      <div className={cn.horizontalLine} />
      <div className={cn.verticalLine} />
    </div>
  );
};
