import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Navbar from "../component/Navbar";
import Navbar3 from "../component/Navbar3";
import { useNavigate } from "react-router-dom";
import styles from "../HomePage/Banner.module.css"

export const MoviesBanner = () => {
  const navigate = useNavigate()
  const [obj, setObj] = React.useState({
    id: 1,
    title: "Panipat : The Great Betrayal",
    category: "Bollywood",
    bannerPic:
      "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQ25sbcXndX5Mn93hJ2mnQS81972TBoTVo1xJhMCs7SPh9H2VKtEDIWEOH9DfNJ1TuoRNfFxAaAKrndOJEWna_oqFTYc.webp?r=1d4",
    namePic:
      "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABaiBEtZppLB3RDCapQ314ODZ0gNEus-9ja_eYTxO5NWC0j07gMZbvn45rStaK2fKe7DrSq9AP1cNAnQrfnSoQOPFOm1Of_dS3jx-.webp?r=644",
    description:
      "In 18th-century India, a Maratha commander leads his army in preparation for a fierce battle against Afghan invaders in this film based on real events.",
    match: 93,
    certificate: "U/A 16+",
    duration: "2h 50m",
    year: 2019,
    cast: ["Arjun Kapoor", "Sanjay Dutt", "Kriti Sanon", "more"],
    genres: [
      "Military Movies",
      "Movies Based on Real Life",
      "Hindi-Language Movies",
    ],
    quality: ["Emotional", "Exciting", "Romantic"],
  });

  React.useEffect(() => {
    let id = 2;
    setInterval(() => {
      fetch(`http://localhost:8000/bannermovies/${id}`)
        .then((res) => res.json())
        .then((res) => setObj(res))
        .catch((err) => console.log(err));
      if (id >= 4) {
        id = 1;
      } else {
        id++;
      }
    }, 5000);
  }, []);

  return (
    <div
      className={styles.bannerDiv}
      style={{ backgroundImage: `url("${obj.bannerPic}")` }}
    >
      <Navbar />
      <Navbar3 />
      <div className={styles.imgDiv}>
        <img
          src={`${obj.namePic}`}
          alt=""
        />

        <h3
          className={styles.bannerHeading3}
        >
          {obj.description}
        </h3>
        <div
          className={styles.buttonDiv}
        >
          <button
            onClick={() => navigate("/player")}
            className={styles.playButton}>

            {" "}
            <div>
            <PlayCircleFilledIcon sx={{ fontSize: "22px" }} />{" "}
            <span style={{ marginTop: "-2em" }}>Play</span>
          </div>
        </button>
        <button className={styles.moreButton}
        >
          More Info
        </button>
      </div>
    </div>
    </div >
  );
};
