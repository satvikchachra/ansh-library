const Avatar = ({ name, src, size, activityStatus }) => {
  const getAvatarClassName = `ansh-avatar ${size}`;

  const getActivityClassName = `ansh-avatar-activity ansh-avatar-activity__${size} ansh-avatar-activity__${activityStatus}`;

  return (
    <div className={getAvatarClassName}>
      <img className={`ansh-avatar__img ${size}`} src={src} alt={name} />
      {activityStatus ? <div className={getActivityClassName}></div> : null}
    </div>
  );
};

export default Avatar;
