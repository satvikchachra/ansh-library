import Card from "../../../Cards/Card";
import DummyImg from "../../../dummyImg.png";

const CardsSection = () => {
  return (
    <div className="CardsSection">
      <div className="CardsSection__Heading">Cards</div>

      <div className="CardsSection__Cards">
        <Card
          title="Title"
          subTitle="Sub-Title"
          description="My description"
          isShadow={true}
        />
        <Card
          title="Title"
          subTitle="Sub-Title"
          description="My description"
          badge="Discount"
          isShadow={true}
        />
        <Card
          title="Title"
          subTitle="Sub-Title"
          description="My description"
          badge="Discount"
          isDismissable={true}
          isShadow={true}
        />
      </div>

      <div className="CardsSection__Cards">
        <Card
          image={DummyImg}
          title="Title"
          subTitle="Sub-Title"
          description="My description"
          isShadow={true}
        />
        <Card
          image={DummyImg}
          title="Title"
          subTitle="Sub-Title"
          description="My description"
          badge="Discount"
          isShadow={true}
        />
        <Card
          image={DummyImg}
          title="Title"
          subTitle="Sub-Title"
          description="My description"
          badge="Discount"
          isDismissable={true}
          isShadow={true}
        />
      </div>
    </div>
  );
};

export default CardsSection;
