import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_movies } from '../Redux-Store/Home/Action'
import styles from "../HomePage/HomePage.module.css"
import PopUp from '../components/PopUp'


export const AllMovies = () => {
    const {movies} = useSelector((state) => ({
        movies:state.movies,
        loading:state.loading,
        error:state.error

    }))
    const dispatch = useDispatch()
    React.useEffect(() => {
        fetch("https://netflix-dbclone.herokuapp.com/movies")
            .then((res) => res.json())
            .then((res) => dispatch(get_movies(res)))
            .catch((err) => {
                console.log(err)
            })
    }, [])

    
    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Movies</h3>
            <div className={styles.rowImages}>
                {movies.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}
