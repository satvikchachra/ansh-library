import { AiFillHeart } from "react-icons/ai";
import Button from "../Forms/Button/Button";
const SideBar = ({ navLinksList, navBtnLinksList }) => {
  return (
    <div className="ansh-sidebar-container">
      <ul className="ansh-sidebar-linkList">
        {navLinksList.map(({ id, text, link }) => (
          <li key={id}>
            <a className="ansh-sidebar-link" href={link}>
              {text}
            </a>
          </li>
        ))}
        {navBtnLinksList.map(({ id, label, link }) => (
          <li key={id}>
            <a className="ansh-sidebar-btnLink" href={link}>
              {/* <button className="ansh-btn ansh-btn__primary ansh-nav-btn">
                {label}
              </button> */}
              <Button
                label={label}
                // link="/"
                btnClassName="ansh-btn ansh-btn__secondary ansh-nav-btn"
                leftIcon={<AiFillHeart color="#E53E3E" />}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
