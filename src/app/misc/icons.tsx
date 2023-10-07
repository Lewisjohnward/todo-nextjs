import { RiMenuLine } from "react-icons/ri";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineCheckCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

const InboxIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="nonzero">
        <path
          d="M10 14.5a2 2 0 1 0 4 0h5.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18v-3.5H10z"
          opacity="0.1"
        ></path>
        <path d="M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246a2 2 0 0 1 .06.485V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485l2.06-8.246A2 2 0 0 1 8.061 4zm0 1a1 1 0 0 0-.97.757L5.03 14.004a1 1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a1 1 0 0 0-.03-.242l-2.06-8.247A1 1 0 0 0 15.94 5H8.061zM12 17.25A2.75 2.75 0 0 1 9.295 15H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 0 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 1 1 0 1h-2.295A2.75 2.75 0 0 1 12 17.25z"></path>
      </g>
    </svg>
  );
};

export {
  InboxIcon,
  RiMenuLine,
  AiOutlineHome,
  AiOutlineSearch,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineCheckCircle,
  AiOutlineQuestionCircle,
};
