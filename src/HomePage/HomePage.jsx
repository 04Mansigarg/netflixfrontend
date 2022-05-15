import React from "react";
import { IndianTvShows } from "./IndianTvShows";
import styles from "./HomePage.module.css";
import { HorrorTvShows } from "./HorrorTvShows";
import { RomanceTvShows } from "./RomanceTvShows";
import { DocuseriesTvShows } from "./DocuseriesTvShows";
import { Anime } from "./Anime";
import { Bollywood } from "./Bollywood";
import { Hollywood } from "./Hollywood";
import { AwardWinning } from "./AwardWinning";
import { MainFooter } from "./MainFooter";
import { Banner } from "./Banner";
import Navbar from "../component/Navbar";

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Banner />
      <IndianTvShows />
      <HorrorTvShows />
      <RomanceTvShows />
      <DocuseriesTvShows />
      <Anime />
      <AwardWinning />
      <Bollywood />
      <Hollywood />

      <MainFooter />
    </div>
  );
};
