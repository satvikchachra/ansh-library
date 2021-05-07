import { typesArray } from "../../data";

const Input = ({ type, width }) => {
  // regular, success, danger, search

  const determineIcon = (inputType) => {
    let icon = <></>;
    const findIcon = typesArray.find(({ typeName }) => typeName === inputType);

    if (findIcon != null) {
      icon = findIcon.typeIconLogo;
    }
    return icon;
  };

  const displayInputIcon = determineIcon(type);

  return (
    <div className="ansh-input__container" style={{ width }}>
      <div>
        <input
          type="text"
          className={`ansh-input ansh-input__${type}`}
          style={{ width }}
        />
      </div>
      <div className="ansh-input__icon">{displayInputIcon}</div>
    </div>
  );
};

export default Input;
