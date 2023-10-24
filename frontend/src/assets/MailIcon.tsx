import { FC, SVGAttributes } from "react";

const MainIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      viewBox="0 0 66 52"
      {...props}
    >
      <path d="M9 27v18h48V9H9v18zm34.1-6.2c-5.2 4.8-9.7 8.7-10.1 8.7-.4 0-4.9-3.9-10.1-8.7L13.5 12h39l-9.4 8.8zM18.7 33.7 12 40.5v-27l6.7 6.8 6.8 6.7-6.8 6.7zM54 27.2v13.3l-6.7-6.7-6.8-6.8 6.5-6.5c3.5-3.6 6.6-6.5 6.7-6.5.2 0 .3 6 .3 13.2zm-18.2 4.6 2.7-2.6 7 6.4 7 6.3h-39l7-6.3 7-6.4 2.8 2.6 2.7 2.6 2.8-2.6z" />
    </svg>
  );
};

export default MainIcon;
