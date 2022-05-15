
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import {get_indian_tvshows} from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const IndianTvShows = () => {
    const {indianShows} = useSelector((state) => ({
        indianShows:state.indian_tv,
        loading:state.loading,
        error:state.error

    }))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("https://netflix-dbclone.herokuapp.com/tvshows?category=Indian")
            .then((res) => res.json())
            .then((res) => dispatch(get_indian_tvshows(res)))
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Indian Tv Shows</h3>
            <div className={styles.rowImages}>
                {indianShows.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}

