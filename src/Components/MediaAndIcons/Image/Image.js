const Image = ({ src, alt, boxSize, borderRadius, isResponsive }) => {
  let getClassName =
    borderRadius === "full" ? "ansh-image circle" : "ansh-image";

  if (isResponsive) getClassName += " ansh-image__responsive";

  return (
    <img
      className={getClassName}
      src={src}
      alt={alt}
      height={boxSize}
      width={boxSize}
    />
  );
};

export default Image;
