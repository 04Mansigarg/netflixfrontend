
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_docuseries_tvshows, get_error, get_loading } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const DocuseriesTvShows = () => {
    
    const {docuseriesShows} = useSelector((state) => ({
        docuseriesShows:state.docuseries_tv,
        loading:state.loading,
        error:state.error

    }))
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(get_loading())
        fetch("https://netflix-dbclone.herokuapp.com/tvshows?category=Docuseries")
            .then((res) => res.json())
            .then((res) => dispatch(get_docuseries_tvshows(res)))
            .catch((err) =>
            {
             console.log(err)
            dispatch(get_error())
            }
            )
    }, [])

    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Docuseries</h3>
            <div className={styles.rowImages}>
                {docuseriesShows.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}
