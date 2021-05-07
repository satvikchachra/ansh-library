import { v4 } from "uuid";
import { useState, useEffect } from "react";
import Button from "../../Forms/Button/Button";
import { toastArray } from "../../data";
const Toast = ({ toastList, position, autoDelete, dismissTime }) => {
  const [list, setList] = useState([]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    setList([...list]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, dismissTime);

    return () => clearInterval(interval);
  }, [toastList, deleteToast, autoDelete, dismissTime, list]);

  const showToast = (type) => {
    const toast = toastArray.find((e) => e.typeOfToast === type);
    setList([toast, ...list]);
  };

  return (
    <div>
      <div className="ansh-toast-btns-container">
        {toastList.map(({ id, typeOfToast }) => (
          <Button
            key={id}
            label={typeOfToast}
            btnClassName={`ansh-btn ansh-btn__${typeOfToast}`}
            handleClick={() => showToast(typeOfToast)}
          />
        ))}
      </div>

      <div className={`ansh-toast__container ${position}`}>
        {list.length > 0
          ? list.map(
              ({ id, title, description, typeOfToast, toastIconLogo }) => (
                <div key={v4()} className={`ansh-toast ${typeOfToast}`}>
                  <Button
                    label="X"
                    btnClassName={`ansh-btn ansh-btn__${typeOfToast}`}
                    handleClick={() => deleteToast(id)}
                  />

                  <div className="ansh-toast__logo">{toastIconLogo}</div>

                  <div>
                    <p className="ansh-toast__title">{title}</p>
                    <p className="ansh-toast__description">{description}</p>
                  </div>
                </div>
              )
            )
          : null}
      </div>
    </div>
  );
};

export default Toast;
