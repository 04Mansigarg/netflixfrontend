
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_anime } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const Anime = () => {
    const {anime} = useSelector((state) => ({
        anime:state.anime,
        loading:state.loading,
        error:state.error

    }))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("https://netflix-dbclone.herokuapp.com/movies?category=Anime")
            .then((res) => res.json())
            .then((res) => dispatch(get_anime(res)))
            .catch((err) => {
                console.log(err)
            })
    }, [])
 
    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Anime</h3>
            <div className={styles.rowImages}>
                {anime.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}
