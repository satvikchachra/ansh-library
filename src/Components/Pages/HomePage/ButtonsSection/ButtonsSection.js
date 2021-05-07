import Button from "../../../Forms/Button/Button";
import { RiAlertFill } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";

const ButtonSection = () => {
  return (
    <div className="ButtonSection">
      <div className="ButtonSection__Heading">Buttons</div>

      <div className="ButtonSection__Buttons">
        <Button
          label="Primary Button"
          btnClassName="ansh-btn ansh-btn__primary"
        />

        <Button
          label="Secondary Button"
          btnClassName="ansh-btn ansh-btn__secondary"
        />

        <Button
          label="Link Button"
          link="https://www.google.com/"
          btnClassName="ansh-btn ansh-btn__primary"
        />

        <Button
          label="Left Icon Button"
          btnClassName="ansh-btn ansh-btn__warning"
          leftIcon={<RiAlertFill />}
        />

        <Button
          label="Right Icon Button"
          btnClassName="ansh-btn ansh-btn__success"
          rightIcon={<AiFillCheckCircle />}
        />

        <Button
          label="Floating Button"
          link="https://www.google.com/"
          btnClassName="ansh-btn ansh-btn__primary"
          float={true}
        />
      </div>
    </div>
  );
};

export default ButtonSection;
