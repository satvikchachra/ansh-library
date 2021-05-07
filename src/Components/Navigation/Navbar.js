import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { AiFillHeart } from "react-icons/ai";
import Button from "../Forms/Button/Button";

const Navbar = ({ brandLogo, brandName, navLinksList, navBtnLinksList }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevStatus) => !prevStatus);
  };

  return (
    <div>
      <nav className="ansh-nav">
        <div className="ansh-nav-brand">
          <div className="ansh-nav-hamburger" onClick={() => toggleNav()}>
            {!isNavOpen ? <FaBars /> : <FaTimes />}
          </div>
          <div className="ansh-nav-brandLogo">{brandLogo}</div>
          <div className="ansh-nav-brandName">{brandName}</div>
        </div>
        <ul
          className={
            !isNavOpen
              ? "ansh-nav-linkList"
              : "ansh-nav-linkList ansh-nav-linkList__active"
          }
        >
          {navLinksList.map(({ id, text, link }) => (
            <li key={id}>
              <a className="ansh-nav-link" href={link}>
                {text}
              </a>
            </li>
          ))}
        </ul>
        <ul
          className={
            !isNavOpen
              ? "ansh-nav-btnLinkList"
              : "ansh-nav-btnLinkList ansh-nav-btnLinkList__active"
          }
        >
          {navBtnLinksList.map(({ id, label, link }) => (
            <li key={id}>
              <a className="ansh-nav-btnLink" href={link}>
                <Button
                  label={label}
                  btnClassName="ansh-btn ansh-btn__secondary ansh-nav-btn"
                  leftIcon={<AiFillHeart color="#E53E3E" />}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {isNavOpen && (
        <Sidebar
          navLinksList={navLinksList}
          navBtnLinksList={navBtnLinksList}
        />
      )}
    </div>
  );
};
export default Navbar;
