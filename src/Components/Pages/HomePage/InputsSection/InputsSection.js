import Input from "../../../Forms/Input/Input";
const InputsSection = () => {
  return (
    <div className="InputsSection">
      <div className="InputsSection__Heading">Input Element</div>
      <div className="InputsSection__Inputs">
        <Input width="150px" />
        <Input width="270px" />
      </div>
      <div className="InputsSection__Inputs">
        <Input width="270px" type="success" />
        <Input width="270px" type="danger" />
        <Input width="270px" type="info" />
        <Input width="270px" type="warning" />
      </div>
    </div>
  );
};
export default InputsSection;
