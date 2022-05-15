import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RecommendIcon from "@mui/icons-material/Recommend";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import React from "react";
import styles from "../css/PopUp.module.css";
import { useNavigate } from "react-router-dom";


const PopUp = ({ items }) => {
  const [hover, setHover] = React.useState(false)
  const navigate = useNavigate();
  return (
    hover ? <div onMouseLeave={() => setHover(false)} className={styles.popup_container}>
      <img  src={items.thumbnail} alt="" />
      <div className={styles.row1}>
        <span>
          <PlayCircleFilledIcon sx={{ fontSize: "1.5em" }}
            onClick={() => {
              navigate("../player");
            }}
          />
          <AddCircleOutlineIcon sx={{ fontSize: "1.5em" }} />
          <RecommendIcon sx={{ fontSize: "1.5em" }} />
        </span>
        <span>
          <ExpandCircleDownIcon sx={{ fontSize: "1.5em" }} />
        </span>
      </div>
      <div className={styles.row2}>
        <span className={styles.match}>{items.match}% Match</span>
        <span className={styles.cert}>{items.certificate}</span>
        <span>{items.duration===undefined ? `${items.seasons} Season ` : items.seasons
        ===undefined? `${items.duration} Duration` : <div></div>}</span>
      </div>
      <div className={styles.row3}>
        <span>{items.quality[0]}</span>
        <span>•</span>
        <span>{items.quality[1]}</span>
        <span>•</span>
        <span>{items.quality[2]}</span>
      </div>
    </div> : <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.rowImage} key={items.id}>
      <img className={styles.itemImg} src={items.thumbnail} alt="" />
    </div>
  );
};

export default PopUp;

