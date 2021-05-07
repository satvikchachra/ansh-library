import Toast from "../../../Feedback/Toast/Toast";
import { toastArray } from "../../../data";

const ToastsSection = () => {
  return (
    <div className="ToastSection">
      <div className="ToastSection__Heading">Toasts</div>
      <div className="ToastSection__Toasts">
        <Toast
          toastList={toastArray}
          autoDelete={true}
          dismissTime={2000}
          position="bottom-right"
        />
      </div>
    </div>
  );
};

export default ToastsSection;
