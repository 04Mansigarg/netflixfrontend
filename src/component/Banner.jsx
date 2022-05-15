import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useNavigate } from "react-router-dom";
import { ItemNav } from "./ItemNav";
import styles from "../HomePage/Banner.module.css"

export const Banner = () => {
  const navigate = useNavigate()
  const [obj, setObj] = React.useState({
    id: 1,
    title: "Little Things",
    category: "Indian",
    bannerPic:
      "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQUAolj0aWIPvIeX_b3hWZgv02JOY81yERK3NHg6QukX90NzDXbcygmZr4zIuAiP96SKYj1mRg3CgIjRP_6TaEoUu1V8.webp?r=749",
    namePic:
      "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWeNM_pjzgOMs-v3bIM-BPEaEpNPcZf8wplU0KiAJTyxu4pbT5oJatLztRwjoN29vKTDnk0Ushvnxb8fEHxMtA_V3BB-BnO2WYPvRQZBSImK0bcAMXL12rf81zNfqGnpOMUm06KTJHNN2xHZ_dLnGjwXvOSlcjGlseNaq-rUsfM7nw.webp?r=5f9",
    description:
      "A cohabiting couple in their 20s navigate the ups and downs of work, modern-day relationships and finding themselves in contemporary Mumbai.",
    match: 94,
    certificate: "U/A 16+",
    seasons: 4,
    year: 2021,
    cast: ["Dhruv Sehgal", "Mithila Palkar"],
    genres: [
      "Romantic TV Dramas",
      "Romantic TV Comedies",
      "Hindi-Language TV Shows",
    ],
    quality: ["Intimate", "Romantic"],
  });

  React.useEffect(() => {
    let id = 2;
    setInterval(() => {
      fetch(`https://netflix-dbclone.herokuapp.com/bannertvshows/${id}`)
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
    <div className={styles.bannerDiv}
      style={{backgroundImage: `url("${obj.bannerPic}")` }}
    >
      <ItemNav />
      <div className={styles.imgDiv} >
        <img
          src={`${obj.namePic}`}
         
          alt=""
        />

        <h3 className={styles.bannerHeading3}>
          {obj.description}
        </h3>
        <div className={styles.buttonDiv}
        >
          <button
            onClick={() => navigate("/player")} className={styles.playButton}>
            {" "}
            <div>
              <PlayCircleFilledIcon sx={{ fontSize: "22px" }} />{" "}
              <span style={{ marginTop: "-2em" }}>Play</span>
            </div>
          </button>
          <button className={styles.moreButton}>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
