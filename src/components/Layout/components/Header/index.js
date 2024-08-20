import { faCircleXmark, faSpider, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";

import style from "./Header.module.scss";
import images from "../../../../assets/images/";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>

        <img src={images.logo} alt="tiktok" />

        <div className={cx("search")}>
          <input placeholder="search account and video" spellCheck={false} />

          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
