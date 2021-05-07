import { v4 } from "uuid";
import { IoAlertCircleSharp } from "react-icons/io5";
import { RiAlertFill } from "react-icons/ri";
import {
  AiFillInfoCircle,
  AiFillCheckCircle,
  AiOutlineSearch
} from "react-icons/ai";

export const typesArray = [
  {
    typeID: v4(),
    typeIconLogo: <AiOutlineSearch color="#F56565" size="1rem" />,
    typeName: "search"
  },
  {
    typeID: v4(),
    typeIconLogo: <IoAlertCircleSharp color="#E53E3E" size="1.1rem" />,
    typeName: "danger"
  },
  {
    typeID: v4(),
    typeIconLogo: <RiAlertFill color="#ED8936" size="1rem" />,
    typeName: "warning"
  },

  {
    typeID: v4(),
    typeIconLogo: <AiFillInfoCircle color="#38B2AC" size="1rem" />,
    typeName: "info"
  },

  {
    typeID: v4(),
    typeIconLogo: <AiFillCheckCircle color="#48BB78" size="1rem" />,
    typeName: "success"
  }
];

export const alertArray = [
  {
    alertID: v4(),
    alertIconLogo: <IoAlertCircleSharp color="#F56565" size="40px" />,
    alertType: "danger"
  },
  {
    alertID: v4(),
    alertIconLogo: <RiAlertFill color="#ED8936" size="40px" />,
    alertType: "warning"
  },

  {
    alertID: v4(),
    alertIconLogo: <AiFillInfoCircle color="#3182CE" size="40px" />,
    alertType: "info"
  },

  {
    alertID: v4(),
    alertIconLogo: <AiFillCheckCircle color="#38A169" size="40px" />,
    alertType: "success"
  }
];

export const toastArray = [
  {
    id: v4(),
    typeOfToast: "success",
    toastIconLogo: <AiFillCheckCircle color="#fff" size="40px" />,
    title: "Success",
    description: "This is a success toast component"
  },

  {
    id: v4(),
    typeOfToast: "danger",
    toastIconLogo: <IoAlertCircleSharp color="#fff" size="40px" />,
    title: "Danger",
    description: "This is a danger toast component"
  },

  {
    id: v4(),
    typeOfToast: "info",
    toastIconLogo: <AiFillInfoCircle color="#fff" size="40px" />,
    title: "Info",
    description: "This is a info toast component"
  },

  {
    id: v4(),
    typeOfToast: "warning",
    toastIconLogo: <RiAlertFill color="#fff" size="40px" />,
    title: "Warning",
    description: "This is a warning toast component"
  }

  // {
  //   id: v4(),
  //   typeOfToast: "default",
  //   title: "",
  //   description: ""
  // }
];

export const navbarLinksList = [
  {
    id: v4(),
    text: "Page ABC",
    link: "/"
  },

  {
    id: v4(),
    text: "Page DEF",
    link: "/"
  },

  {
    id: v4(),
    text: "Page GHI",
    link: "/"
  }
];

export const navbarButtonWithLinksList = [
  {
    id: v4(),
    label: "Sponsor",
    link: "/"
  }

  // {
  //   id: v4(),
  //   label: "Log In",
  //   link: "https://www.google.com"
  // }
];
