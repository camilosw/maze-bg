import cn from './CutPattern.module.css';

type Props = {
  rows: number;
  columns: number;
  elementWidth: number; // width in mm
  elementHeight: number; // height in mm
  children: React.ReactNode;
  debug?: boolean;
};

export const CutPattern = ({
  rows,
  columns,
  elementWidth,
  elementHeight,
  children,
  debug = false,
}: Props) => {
  const totalWidth = columns * elementWidth;
  const totalHeight = rows * elementHeight;
  const cutAreaWidth = 10;

  let path = '';

  for (let i = 0; i <= rows; i++) {
    path += `M 0,${cutAreaWidth + elementHeight * i} h ${
      totalWidth * cutAreaWidth * 2
    } `;
  }
  for (let i = 0; i <= columns; i++) {
    path += `M ${cutAreaWidth + elementWidth * i},0 v ${
      totalHeight * cutAreaWidth * 2
    } `;
  }

  return (
    <div
      style={{
        width: `${totalWidth + cutAreaWidth * 2}mm`,
        height: `${totalHeight + cutAreaWidth * 2}mm`,
        position: 'relative',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        className={cn.cutArea}
        width={`${totalWidth + cutAreaWidth * 2}mm`}
        height={`${totalHeight + cutAreaWidth * 2}mm`}
        preserveAspectRatio="xMidYMid meet"
        viewBox={`0 0 ${totalWidth + cutAreaWidth * 2} ${
          totalHeight + cutAreaWidth * 2
        }`}
      >
        <path d={path} className={cn.pathCut} />
        {!debug && (
          <rect
            x={`${cutAreaWidth * 0.75}`}
            y={`${cutAreaWidth * 0.75}`}
            width={`${totalWidth + cutAreaWidth * 0.5}`}
            height={`${totalHeight + cutAreaWidth * 0.5}`}
            className={cn.path}
          />
        )}
      </svg>
      <div style={{ padding: `${cutAreaWidth}mm` }}>{children}</div>
    </div>
  );
};
