import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { get_error, get_loading, search_data } from '../Redux-Store/Home/Action'
import styles from "../HomePage/HomePage.module.css"
import PopUp from '../components/PopUp'
import { padding } from '@mui/system'
import { CircularProgress } from '@mui/material'

export const Search = () => {
    let { q } = useParams()
    const { searchData, loading, error } = useSelector((state) => ({
        searchData: state.searchData,
        loading: state.loading,
        error: state.error

    }))
    console.log(searchData)
    const dispatch = useDispatch()
    const getdata = () => {
        dispatch(get_loading())
        if (q === "Indian" || q === "Romance" || q === "Horror" || q === "Docuseries") {
            fetch(`https://netflix-dbclone.herokuapp.com/tvshows?category=${q}`)
                .then(res => res.json())
                .then((res) => dispatch(search_data(res)))
                .catch((err) => {
                    console.log(err)
                    dispatch(get_error())
                })
        }
        else if (q === "Anime" || q === "Bollywood" || q === "Hollywood" || q === "AwardWinning") {
            fetch(`https://netflix-dbclone.herokuapp.com/movies?category=${q}`)
                .then(res => res.json())
                .then((res) => dispatch(search_data(res)))
                .catch((err) => {
                    console.log(err)
                    dispatch(get_error())
                })
        }

    }
    React.useEffect(() => {
        getdata()
    }, [])
    if (loading) return <div style={{ width: "100px", margin: "auto" }}> <CircularProgress /></div>
    else if (error) return <h1>Something Went Wrong</h1>
    else
        return (
            <div className={styles.mainRow} style={{ marginTop: "4em", padding: "1em" }}>
                <h2 className={styles.mainHeading}>Explore Titles related to : {q}</h2>
                <div className={styles.rowImages}>
                    {searchData.map(items => {
                        return <PopUp key={items.id} items={items} />
                    })}
                </div>
            </div>
        )
}
