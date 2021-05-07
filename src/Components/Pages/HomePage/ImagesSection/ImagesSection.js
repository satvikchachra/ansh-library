import Image from "../../../MediaAndIcons/Image/Image";

const ImagesSection = () => {
  return (
    <div className="ImageSection">
      <div className="ImageSection__Heading">Images</div>

      <div className="ImageSection__Images">
        <Image
          src="https://bit.ly/dan-abramov"
          alt="danny"
          boxSize="100px"
          isResponsive
        />
        <Image
          src="https://bit.ly/dan-abramov"
          alt="danny"
          boxSize="100px"
          borderRadius="full"
          isResponsive
        />
      </div>
    </div>
  );
};

export default ImagesSection;
