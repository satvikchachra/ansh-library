const Grid2 = ({ colorLeft, colorRight }) => {
  return (
    <div className="ansh-grid-2">
      <div
        style={{ backgroundColor: colorLeft ? colorLeft : null }}
        className="ansh-grid-2__left"
      ></div>
      <div
        style={{ backgroundColor: colorRight ? colorRight : null }}
        className="ansh-grid-2__right"
      ></div>
    </div>
  );
};

export default Grid2;
