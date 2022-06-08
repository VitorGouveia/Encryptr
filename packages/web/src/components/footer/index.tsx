import { memo } from "react";

import { Link } from "../link";
import { Button } from "../button";

import styles from "./styles.module.scss";

const Figma = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33325 3.66671C3.33325 3.04787 3.57908 2.45438 4.01667 2.01679C4.45425 1.57921 5.04775 1.33337 5.66659 1.33337H7.99992V6.00004H5.66659C5.04775 6.00004 4.45425 5.75421 4.01667 5.31662C3.57908 4.87904 3.33325 4.28555 3.33325 3.66671Z"
        stroke="#AFBDD9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.33337H10.3333C10.6398 1.33337 10.9432 1.39373 11.2263 1.51099C11.5094 1.62825 11.7666 1.80012 11.9832 2.01679C12.1999 2.23346 12.3718 2.49069 12.4891 2.77378C12.6063 3.05687 12.6667 3.36029 12.6667 3.66671C12.6667 3.97313 12.6063 4.27654 12.4891 4.55964C12.3718 4.84273 12.1999 5.09995 11.9832 5.31662C11.7666 5.53329 11.5094 5.70517 11.2263 5.82243C10.9432 5.93969 10.6398 6.00004 10.3333 6.00004H8V1.33337Z"
        stroke="#AFBDD9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8.33333C8 8.02692 8.06035 7.7235 8.17761 7.44041C8.29488 7.15731 8.46675 6.90009 8.68342 6.68342C8.90009 6.46675 9.15731 6.29488 9.44041 6.17761C9.7235 6.06035 10.0269 6 10.3333 6C10.6398 6 10.9432 6.06035 11.2263 6.17761C11.5094 6.29488 11.7666 6.46675 11.9832 6.68342C12.1999 6.90009 12.3718 7.15731 12.4891 7.44041C12.6063 7.7235 12.6667 8.02692 12.6667 8.33333C12.6667 8.63975 12.6063 8.94317 12.4891 9.22626C12.3718 9.50935 12.1999 9.76658 11.9832 9.98325C11.7666 10.1999 11.5094 10.3718 11.2263 10.4891C10.9432 10.6063 10.6398 10.6667 10.3333 10.6667C10.0269 10.6667 9.7235 10.6063 9.44041 10.4891C9.15731 10.3718 8.90009 10.1999 8.68342 9.98325C8.46675 9.76658 8.29488 9.50935 8.17761 9.22626C8.06035 8.94317 8 8.63975 8 8.33333V8.33333Z"
        stroke="#AFBDD9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33325 13C3.33325 12.3811 3.57908 11.7876 4.01667 11.35C4.45425 10.9125 5.04775 10.6666 5.66659 10.6666H7.99992V13C7.99992 13.6188 7.75409 14.2123 7.3165 14.6499C6.87892 15.0875 6.28542 15.3333 5.66659 15.3333C5.04775 15.3333 4.45425 15.0875 4.01667 14.6499C3.57908 14.2123 3.33325 13.6188 3.33325 13Z"
        stroke="#AFBDD9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33325 8.33333C3.33325 7.71449 3.57908 7.121 4.01667 6.68342C4.45425 6.24583 5.04775 6 5.66659 6H7.99992V10.6667H5.66659C5.04775 10.6667 4.45425 10.4208 4.01667 9.98325C3.57908 9.54566 3.33325 8.95217 3.33325 8.33333Z"
        stroke="#AFBDD9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Notion = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.99834 2.84735C3.49342 3.24959 3.67915 3.2189 4.60886 3.15687L13.3735 2.63059C13.5594 2.63059 13.4048 2.44515 13.3428 2.41433L11.8872 1.36203C11.6083 1.14549 11.2367 0.897509 10.5245 0.959544L2.03769 1.57854C1.72818 1.60923 1.66636 1.76399 1.78962 1.88803L2.99834 2.84735ZM3.52455 4.88995V14.1119C3.52455 14.6075 3.77222 14.7929 4.32965 14.7622L13.962 14.2049C14.5197 14.1742 14.5818 13.8333 14.5818 13.4307V4.27067C14.5818 3.86872 14.4272 3.65196 14.0858 3.6829L4.01992 4.27067C3.64843 4.30189 3.52452 4.48772 3.52452 4.88995H3.52455ZM13.0336 5.38463C13.0953 5.66343 13.0336 5.94197 12.7542 5.97332L12.2901 6.06579V12.874C11.8872 13.0906 11.5156 13.2144 11.206 13.2144C10.7102 13.2144 10.5861 13.0595 10.2147 12.5956L7.17895 7.82982V12.4409L8.1396 12.6576C8.1396 12.6576 8.1396 13.2144 7.36455 13.2144L5.22795 13.3383C5.16588 13.2144 5.22795 12.9052 5.44468 12.8432L6.00224 12.6887V6.59204L5.2281 6.53C5.16601 6.25121 5.32064 5.84922 5.75457 5.81803L8.04665 5.66352L11.206 10.4914V6.22052L10.4005 6.12808C10.3386 5.78725 10.5861 5.53977 10.8958 5.50908L13.0336 5.38463ZM1.32513 0.743034L10.1528 0.0929389C11.2368 -3.46377e-05 11.5157 0.0622504 12.1971 0.55718L15.015 2.53775C15.4799 2.87833 15.6349 2.97105 15.6349 3.34232V14.2049C15.6349 14.8857 15.3869 15.2883 14.5199 15.3499L4.26831 15.9689C3.61743 16 3.30766 15.9072 2.9668 15.4737L0.891667 12.7813C0.519867 12.2857 0.365234 11.9149 0.365234 11.4812V1.82577C0.365234 1.26906 0.61331 0.804661 1.32513 0.743034V0.743034Z"
        fill="#AFBDD9"
      />
    </svg>
  );
};

export const Github = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_23_526)">
      <path
        d="M10.9334 15.6178V13.0378C10.9584 12.7199 10.9155 12.4004 10.8074 12.1004C10.6994 11.8004 10.5287 11.5268 10.3068 11.2978C12.4001 11.0645 14.6001 10.2712 14.6001 6.63117C14.5999 5.70039 14.2419 4.8053 13.6001 4.13117C13.904 3.31684 13.8825 2.41674 13.5401 1.61784C13.5401 1.61784 12.7534 1.3845 10.9334 2.6045C9.40544 2.19039 7.79476 2.19039 6.26676 2.6045C4.44676 1.3845 3.6601 1.61784 3.6601 1.61784C3.31768 2.41674 3.29619 3.31684 3.6001 4.13117C2.95352 4.8103 2.59511 5.71348 2.6001 6.65117C2.6001 10.2645 4.8001 11.0578 6.89343 11.3178C6.6741 11.5445 6.50494 11.8148 6.39697 12.1111C6.289 12.4075 6.24464 12.7232 6.26676 13.0378V15.6178M6.26676 13.6178C2.93343 14.6178 2.93343 11.9512 1.6001 11.6178L6.26676 13.6178Z"
        stroke="#AFBDD9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_23_526">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Storybook = () => (
  <svg
    width="13"
    height="16"
    viewBox="0 0 13 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_98_1669)">
      <mask
        id="mask0_98_1669"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="13"
        height="16"
      >
        <path
          d="M0.655082 14.7122L0.160487 1.53345C0.144152 1.09821 0.47788 0.729349 0.91258 0.70218L12.122 0.0015905C12.5645 -0.026064 12.9456 0.310212 12.9733 0.752685C12.9743 0.769356 12.9748 0.786055 12.9748 0.802758V15.1633C12.9748 15.6067 12.6154 15.966 12.1721 15.966C12.1601 15.966 12.1481 15.9658 12.1361 15.9652L1.42123 15.484C1.00393 15.4653 0.670748 15.1296 0.655082 14.7122Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_98_1669)">
        <path
          d="M0.655082 14.7122L0.160487 1.53345C0.144152 1.09821 0.47788 0.729349 0.91258 0.70218L12.122 0.0015905C12.5645 -0.026064 12.9456 0.310212 12.9733 0.752685C12.9743 0.769356 12.9748 0.786055 12.9748 0.802758V15.1633C12.9748 15.6067 12.6154 15.966 12.1721 15.966C12.1601 15.966 12.1481 15.9658 12.1361 15.9652L1.42123 15.484C1.00393 15.4653 0.670748 15.1296 0.655082 14.7122Z"
          fill="#AFBDD9"
        />
        <path
          d="M9.62285 1.96248L9.69942 0.120952L11.2388 0L11.3051 1.89911C11.3074 1.9652 11.2557 2.02065 11.1896 2.02296C11.1613 2.02395 11.1336 2.01487 11.1114 1.99735L10.5177 1.5297L9.81486 2.06286C9.76217 2.10283 9.68706 2.09251 9.64709 2.03982C9.63027 2.01765 9.6217 1.9903 9.62285 1.96248ZM7.65412 6.01782C7.65412 6.33013 9.75779 6.18045 10.0402 5.96107C10.0402 3.83432 8.89902 2.71675 6.80936 2.71675C4.71969 2.71675 3.54889 3.85171 3.54889 5.55415C3.54889 8.51924 7.55037 8.57599 7.55037 10.1933C7.55037 10.6473 7.32807 10.9169 6.839 10.9169C6.20172 10.9169 5.94978 10.5914 5.97942 9.4848C5.97942 9.24474 3.54889 9.1699 3.47479 9.4848C3.28609 12.1665 4.95682 12.94 6.86864 12.94C8.72118 12.94 10.1736 11.9525 10.1736 10.1649C10.1736 6.98704 6.1128 7.07217 6.1128 5.49741C6.1128 4.85899 6.58705 4.77387 6.86864 4.77387C7.16505 4.77387 7.69858 4.82611 7.65412 6.01782Z"
          fill="#4D69A3"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_98_1669">
        <rect
          width="12.8401"
          height="16"
          fill="white"
          transform="translate(0.159912)"
        />
      </clipPath>
    </defs>
  </svg>
);

type Link = {
  icon: React.ReactNode;
  href: string;
  global: boolean;
};

const links: Link[] = [
  {
    icon: <Figma />,
    href: "https://www.figma.com/file/plTBuSRfWC5Nwq289A8OYW/Encryptr?node-id=0%3A1",
    global: true,
  },
  {
    icon: <Notion />,
    href: "https://vitorgouveia.notion.site/Encryptr-e357c4dc44d240beb21d4418c689d79a",
    global: true,
  },
  {
    icon: <Github />,
    href: "https://github.com/VitorGouveia/Encryptr",
    global: true,
  },
  {
    icon: <Storybook />,
    href: "/Encryptr/storybook",
    global: true,
  },
];

export const Footer: React.FC = memo(() => {
  return (
    <footer className={styles.footer}>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} global={link.global}>
              <Button variant="outlined">{link.icon}</Button>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
});
