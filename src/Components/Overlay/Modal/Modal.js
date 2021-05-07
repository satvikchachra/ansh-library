import { useState } from "react";
import Button from "../../Forms/Button/Button";

const Modal = ({ title, description, secondaryAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  let styleObj = { display: "none" };
  if (isOpen) {
    styleObj = { display: "block" };
  } else {
    styleObj = { display: "none" };
  }

  const showModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <Button
          label="Open Modal"
          btnClassName={`ansh-btn ansh-btn__primary`}
          handleClick={showModal}
        />
      </div>

      <div className="ansh-modal__wrapper" style={styleObj}>
        <div className="ansh-modal__container">
          <div className="ansh-modal__header">
            <p className="ansh-modal__title">{title}</p>

            <button className="ansh-btn__transparent" onClick={closeModal}>
              X
            </button>
          </div>

          <p className="ansh-modal__description">{description}</p>

          <div className="ansh-modal__footer">
            {secondaryAction && (
              <Button
                label="Action"
                btnClassName={`ansh-btn ansh-btn__info`}
                handleClick={secondaryAction}
              />
            )}
            <Button
              label="Close"
              btnClassName={`ansh-btn ansh-btn__danger`}
              handleClick={closeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
