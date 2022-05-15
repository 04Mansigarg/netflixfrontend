import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./Style/GenreBtn.module.css";
import { category, category1 } from "./category";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { category_item, end_category_item, main_item } from "../Redux-Store/Home/Action";

const GenreBtn = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (item) => {
    dispatch(main_item(item))
    dispatch(category_item("Tv Shows"))
    dispatch(end_category_item("tvshows"))
    navigate("/item")


  }
  const handleChange1 = (item) => {
    dispatch(main_item(item))
    dispatch(category_item("Movies"))
    dispatch(end_category_item("movies"))
    navigate("/item")


  }
  return (
    <div className={styles.genreComp}>
      <button className={styles.btn}>
        Genres <ArrowDropDownIcon className={styles.genereIcon} />
      </button>

      <div className={styles.DD}>
        <span>
          <ul>
            {
              category.map((item, index) => (
                <li onClick={() => handleChange(item)}>{item}</li>
              ))
            }
          </ul>
        </span>
        <span>
          <ul>
            {
              category1.map((item, index) => (
                <li onClick={() => handleChange1(item)}>{item}</li>
              ))
            }
          </ul>
        </span>
        <span>
          <ul>
            <li>Sci-Fi & Fantasy</li>
            <li>Crime</li>
            <li>Kids</li>
            <li>Hindi</li>
            <li>Malyalam</li>
            <li>Fantasy</li>
            <li>Independent</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default GenreBtn