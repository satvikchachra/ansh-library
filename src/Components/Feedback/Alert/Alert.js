import { alertArray } from "../../data";

const Alert = ({ index, type, title, description }) => {
  const alertArrayItem = alertArray.find(({ alertType }) => alertType === type);

  const getClassName = `ansh-alert ansh-alert__${type}`;

  console.log(index);
  return (
    <div className={getClassName}>
      <div className="ansh-alert__icon">{alertArrayItem.alertIconLogo}</div>
      <div className="ansh-alert__title">{title}</div>
      <div className="ansh-alert__desc">{description}</div>
    </div>
  );
};

export default Alert;
