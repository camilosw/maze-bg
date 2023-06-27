import cn from './SubTiles.module.css';

export const SubTile00 = () => {
  return (
    <>
      <rect x="0" y="33" width="100" height="67" className={cn.path} />
      <rect x="33" y="0" width="67" height="100" className={cn.path} />
      <path d="M 0,33 h 33 v -33" className={cn.pathBorder} />
    </>
  );
};
