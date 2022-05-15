import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_error, get_loading, get_romance_tvshows } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const RomanceTvShows = () => {
    const {romanceShows} = useSelector((state) => ({
        romanceShows:state.romance_tv,
        loading:state.loading,
        error:state.error

    }))
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(get_loading())
        fetch("https://netflix-dbclone.herokuapp.com/tvshows?category=Romance")
            .then((res) => res.json())
            .then((res) => dispatch(get_romance_tvshows(res)))
            .catch((err) =>{
                console.log(err)
                dispatch(get_error())
            })
    }, [])

    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Romantic Tv Shows</h3>
            <div className={styles.rowImages}>
                {romanceShows.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}
