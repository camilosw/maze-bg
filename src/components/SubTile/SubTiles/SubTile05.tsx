import cn from './SubTiles.module.css';

export const SubTile05 = () => {
  return (
    <>
      <rect x="0" y="33" width="100" height="33" className={cn.path} />
      <rect x="33" y="0" width="33" height="100" className={cn.path} />
      <path
        d="M 0,33 h 100 m 0,33 h -100 M 33,0 v 33 m 33,0 v -33 M 33,100 v -33 m 33,0 v 33"
        className={cn.pathBorder}
      />
    </>
  );
};
