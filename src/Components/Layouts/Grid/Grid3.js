const Grid3 = ({ colorLeft, colorMiddle, colorRight }) => {
  console.log(colorLeft, colorMiddle, colorRight);
  return (
    <div className="ansh-grid-3">
      <div
        style={{ backgroundColor: colorLeft ? colorLeft : null }}
        className="ansh-grid-3__left"
      />
      <div
        style={{
          backgroundColor: colorMiddle ? colorMiddle : null
        }}
        className="ansh-grid-3__middle"
      />
      <div
        style={{ backgroundColor: colorRight ? colorRight : null }}
        className="ansh-grid-3__right"
      />
    </div>
  );
};

export default Grid3;
