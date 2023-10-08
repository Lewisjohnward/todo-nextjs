import { RiMenuLine } from "react-icons/ri";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineCheckCircle,
  AiOutlineQuestionCircle,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const InboxIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fillRule="nonzero">
        <path
          d="M10 14.5a2 2 0 1 0 4 0h5.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18v-3.5H10z"
          opacity="0.1"
        ></path>
        <path d="M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246a2 2 0 0 1 .06.485V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485l2.06-8.246A2 2 0 0 1 8.061 4zm0 1a1 1 0 0 0-.97.757L5.03 14.004a1 1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a1 1 0 0 0-.03-.242l-2.06-8.247A1 1 0 0 0 15.94 5H8.061zM12 17.25A2.75 2.75 0 0 1 9.295 15H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 0 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 1 1 0 1h-2.295A2.75 2.75 0 0 1 12 17.25z"></path>
      </g>
    </svg>
  );
};

const TodayIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
          opacity=".1"
        ></path>
        <path
          fillRule="nonzero"
          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
        ></path>
        <text
          fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
          fontSize="9"
          transform="translate(4 2)"
          fontWeight="500"
        >
          <tspan x="8" y="15" textAnchor="middle">
            07
          </tspan>
        </text>
      </g>
    </svg>
  );
};

const UpcomingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="currentColor" fillRule="nonzero">
        <path
          d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
          opacity="0.1"
        ></path>
        <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path>
      </g>
    </svg>
  );
};

const FiltersAndLabelsIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 6.5A1.5 1.5 0 0 1 14.5 5h3A1.5 1.5 0 0 1 19 6.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 13 9.5v-3zM6.5 13A1.5 1.5 0 0 0 5 14.5v3A1.5 1.5 0 0 0 6.5 19h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 9.5 13h-3zm8 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm-8-8A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"
        clipRule="evenodd"
        opacity="0.1"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 6h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 13 6.5v3a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 19 9.5v-3A1.5 1.5 0 0 0 17.5 5h-3zm-8 9h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zm-1.5.5A1.5 1.5 0 0 1 6.5 13h3a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 9.5 19h-3A1.5 1.5 0 0 1 5 17.5v-3zm9.5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3zM6.5 6h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export {
  InboxIcon,
  TodayIcon,
  UpcomingIcon,
  FiltersAndLabelsIcon,
  RiMenuLine,
  AiOutlineHome,
  AiOutlineSearch,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineCheckCircle,
  AiOutlineQuestionCircle,
  AiOutlineEllipsis,
  BsChevronDown,
};
