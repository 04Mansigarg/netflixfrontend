import React from "react";
import styles from "../component/Style/Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth, search } from "../Redux-Store/Home/Action";
import DropDownMenu from "./DropDown"

const Navbar = () => {
  const search_item = useSelector(state => state.search_item)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  return (
    <>
      <div className={styles.nav}>
        <span className={styles.span1}>
          <ul>
            <li
              onClick={() => {
                navigate("../homepage");
              }}
            >
              <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" className={styles.logoimg} />
            </li>
            <li
              onClick={() => {
                navigate("../homepage");
              }}
              className={styles.menuItems}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("../tvshows");
              }}
              className={styles.menuItems}
            >
              TV Shows
            </li>
            <li
              onClick={() => {
                navigate("../movies");
              }}
              className={styles.menuItems}
            >
              Movies
            </li>
            <li className={styles.menuItems}>New & Popular</li>
            <li className={styles.menuItems}>My List</li>
          </ul>
        </span>
        <DropDownMenu/>
        <span className={styles.span2}>
          <ul>
            <li>
              <SearchIcon onClick={() => {
                navigate(`/search/${search_item}`)
                dispatch(search(""))
              }} />
            </li>
            <li>
              <input className={styles.searchBar} type="text" placeholder="Titles, people, genres" value={search_item} onChange={(e) => dispatch(search(e.currentTarget.value))} />
            </li>
            <li>
              <div className={styles.notifContainer}>
                <NotificationsIcon className={styles.notifBell} />
                <div className={styles.notifDD}>
                  <img
                    src="https://assets.nflxext.com/us/email/gem/comingsoon/csInapp_112x63.png"
                    alt=""
                  />
                  <span>
                    <p>Netflix Lookahead</p>
                    <p>Explore what's coming soon.</p>
                    <p className={styles.daysAgo}>2 days ago</p>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.avatarMenuContainer}>
                <img
                  src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUCZYfPbupvQjzSa3egePk8TFNDy2A_w15DEAq50IqW8MYmOtmbWwN4Txem7mgNYEMPJ1BY6uasiIJQ8JeFO3EU.png?r=b97"
                  alt=""
                  className={styles.avatarimg}
                />
                <div className={styles.avatarDD}>
                  <div>
                    <span>
                      <img
                        src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                        alt=""
                        className={styles.icons}
                      />
                    </span>
                    <span className={styles.names}> Ram</span>
                  </div>
                  <div>
                    <span>
                      <img
                        src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYnnca7HCf0z4YHtIK5R8MIGCeMyodAsxBYSBmMkYHqjSw46VWWyNQirfwxT-CkbxPkp-G84Wu-iOMwGG-r9QAs.png?r=f71"
                        alt=""
                        className={styles.icons}
                      />
                    </span>
                    <span className={styles.names}> Shyam</span>
                  </div>
                  <div>
                    <span>
                      <img
                        src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXrmj4H9RUyDiO28L-KJxDGc9oDijd4jnl5RyCkiWMPB6xFxiVdRiKdOcNjG8kn4A3idJRTGAzuBuQ__c6yl1m0.png?r=fcc"
                        alt=""
                        className={styles.icons}
                      />
                    </span>
                    <span className={styles.names}> Tukaram</span>
                  </div>
                  <div>
                    <span>
                      <img
                        src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSeeteIa0VRNjiIWgkaD5K6WolibL612PYn_dUdqFSmJjx6VfdOVh-n6WGQ4Gu3d_PXJXcyDq18qae17Q1FZOLg.png?r=5cf"
                        alt=""
                        className={styles.icons}
                      />
                    </span>
                    <span className={styles.names}> Kids</span>
                  </div>
                  <div>
                    <span>
                      <EditIcon large className={styles.icons} />
                    </span>
                    <span className={styles.names}>Manage Profiles</span>
                  </div>
                  <hr />
                  <div>
                    <span>
                      <AccountCircleIcon className={styles.icons} />
                    </span>
                    <span className={styles.names}>Account</span>
                  </div>
                  <div>
                    <span>
                      <HelpOutlineIcon className={styles.icons} />
                    </span>
                    <span className={styles.names}>Help Centre</span>
                  </div>
                  <hr />
                  <div
                    onClick={() => {
                      navigate("/");
                      dispatch(auth(false))
                    }}
                    className={styles.signout}
                  >
                    Sign out of Netflix
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};

export default Navbar;
