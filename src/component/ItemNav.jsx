import React from "react";
import styles from "../component/Style/Navbar2.module.css";
import GenreBtn from "./GenreBtn";
import GridViewIcon from "@mui/icons-material/GridView";
import TocIcon from "@mui/icons-material/Toc";
import { useSelector } from "react-redux";

export const ItemNav = () => {
    const mainItem = useSelector((state) => state.mainItem)
    const category = useSelector((state) => state.categoryItem)
    console.log(category)
    return (
        <>
            <div className={styles.nav2}>
                <span className={styles.leftContainer}>
                    <h1>{category} :</h1>
                    <span style={{ fontSize: "30px", margin: "5px" }}>{mainItem}</span>
                    <span style={{ marginLeft: "5px" }}>
                        <GenreBtn />
                    </span>
                </span>
                <span className={styles.rightContainer}>
                    <TocIcon />

                    <GridViewIcon />
                </span>
            </div>
        </>
    );
};
