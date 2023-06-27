export const HatchPattern = () => {
  return (
    <>
      <defs>
        <pattern
          id="diagonalHatch"
          patternUnits="userSpaceOnUse"
          width="4"
          height="8"
          patternTransform="rotate(-45 0 0)"
        >
          <path d="M 0,0 l 4,0" stroke="#000000" stroke-width=".25" />
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        stroke="#000000"
        stroke-width="0"
        fill="url(#diagonalHatch)"
      />
    </>
  );
};
