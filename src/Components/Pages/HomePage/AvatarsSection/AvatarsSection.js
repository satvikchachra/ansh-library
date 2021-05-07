import Avatar from "../../../MediaAndIcons/Avatar/Avatar";
const AvatarSection = () => {
  return (
    <div className="AvatarSection">
      <div className="AvatarSection__Heading">Avatars</div>

      <div className="AvatarSection__Avatars">
        <Avatar src="https://bit.ly/dan-abramov" name="Dan" size="sm" />
        <Avatar src="https://bit.ly/dan-abramov" name="Mia" size="md" />
        <Avatar src="https://bit.ly/dan-abramov" name="Rock" size="lg" />
        <Avatar src="https://bit.ly/dan-abramov" name="Rock" size="xl" />
      </div>

      <div className="AvatarSection__Avatars">
        <Avatar
          src="https://bit.ly/dan-abramov"
          name="Dan"
          size="sm"
          activityStatus="info"
        />
        <Avatar
          src="https://bit.ly/dan-abramov"
          name="Mia"
          size="md"
          activityStatus="warning"
        />
        <Avatar
          src="https://bit.ly/dan-abramov"
          name="Rock"
          size="lg"
          activityStatus="danger"
        />
        <Avatar
          src="https://bit.ly/dan-abramov"
          name="Rock"
          size="xl"
          activityStatus="success"
        />
      </div>
    </div>
  );
};

export default AvatarSection;
