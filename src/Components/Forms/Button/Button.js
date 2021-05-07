const Button = ({
  label,
  btnClassName,
  handleClick,
  link,
  leftIcon,
  rightIcon,
  float
}) => {
  if (link === undefined) {
    return (
      <div>
        <button
          className={
            float === undefined
              ? btnClassName
              : `${btnClassName} ansh-btn__float`
          }
          onClick={handleClick}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="ansh-btn__leftIcon">{leftIcon}</div>
            <div className="ansh-btn__label">{label}</div>
            <div className="ansh-btn__rightIcon">{rightIcon}</div>
          </div>
        </button>
      </div>
    );
  } else {
    return (
      <a href={link} className="ansh-btn__link">
        <button
          className={
            float === undefined
              ? btnClassName
              : `${btnClassName} ansh-btn__float`
          }
          onClick={handleClick}
        >
          <div className="ansh-btn_textAndIconContainer">
            <div className="ansh-btn__leftIcon">{leftIcon}</div>
            <div className="ansh-btn__label">{label}</div>
            <div className="ansh-btn__rightIcon">{rightIcon}</div>
          </div>
        </button>
      </a>
    );
  }
};

export default Button;
