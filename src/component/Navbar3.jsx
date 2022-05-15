import React from "react";
import styles from "../component/Style/Navbar2.module.css";
import GenreBtn from "./GenreBtn";
import GridViewIcon from "@mui/icons-material/GridView";
import TocIcon from "@mui/icons-material/Toc";

const Navbar3 = () => {
    return (
        <>
            <div className={styles.nav2}>
                <span className={styles.leftContainer}>
                    <h1>Movies</h1>
                    <span>
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

export default Navbar3;