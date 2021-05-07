import Alert from "../../../Feedback/Alert/Alert";
import { alertArray } from "../../../data";

const AlertSection = () => {
  return (
    <div className="AlertSection">
      <div className="AlertSection__Heading">Alerts</div>

      <div className="AlertSection__Alerts">
        {alertArray.map(({ alertID, alertIconLogo, alertType }) => (
          <Alert
            key={alertID}
            type={alertType}
            title="My title"
            description="my description"
          />
        ))}
      </div>
    </div>
  );
};

export default AlertSection;
