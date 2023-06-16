import classes from "./MobileMenu.module.scss";
import { ReactComponent as MenuCloseIcon } from "../assets/icon-menu-close.svg";

type Props = {
  menuStrings: string[];
  onClose: () => void;
};

export const MobileMenu = (props: Props) => {
  let menuItems = props.menuStrings.map((elem, idx) => (
    <div className={classes.menuButton} key={idx}>
      <a href="#">{elem}</a>
    </div>
  ));

  return (
    <div className={classes.container}>
      <div className={classes.topBar}>
        <MenuCloseIcon onClick={() => props.onClose()} />
      </div>
      <div className={classes.menuItems}>{menuItems}</div>
    </div>
  );
};
