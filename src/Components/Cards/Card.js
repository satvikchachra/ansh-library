import { useState } from "react";
import Button from "../Forms/Button/Button";
import { AiFillCloseCircle } from "react-icons/ai";

const Card = ({
  image,
  title,
  subTitle,
  description,
  badge,
  isDismissable,
  isShadow,
  horizontalWidth
}) => {
  const [isClosed, setIsClosed] = useState(false);

  const closeCard = () => {
    setIsClosed(true);
  };

  if (!isClosed) {
    return (
      <div className="ansh-card__wrapper">
        <div
          className={
            isShadow
              ? `ansh-card__container ansh-card__containerShadow`
              : `ansh-card__container`
          }
        >
          {badge === undefined ? null : (
            <div className="ansh-card__badge">{badge}</div>
          )}

          {isDismissable === true ? (
            <div className="ansh-card__closeBtn">
              <button className="ansh-card__CloseBtnX" onClick={closeCard}>
                <AiFillCloseCircle size="1.5em" />
              </button>
            </div>
          ) : null}

          <div className="ansh-card__image">
            {image === undefined ? (
              <div className="ansh-card__dummyEmptyDiv"></div>
            ) : (
              <img src={image} alt="card-pic" width="286px" height="180px" />
            )}
          </div>

          <div className="ansh-card__body">
            <div className="ansh-card__title">{title}</div>
            <div className="ansh-card__subtTitle">{subTitle}</div>

            <div className="ansh-card__description">{description}</div>
          </div>

          <div className="ansh-card__footer">
            <Button
              label="Do something"
              btnClassName="ansh-btn ansh-btn__primary"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Card;
