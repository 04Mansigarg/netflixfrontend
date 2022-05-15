import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_awardwinning, get_error, get_loading } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const AwardWinning = () => {

    const { awardwinning} = useSelector((state) => ({
        awardwinning: state.awardwinning,
        loading: state.loading,
        error: state.error

    }))
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(get_loading())
        fetch("https://netflix-dbclone.herokuapp.com/movies?category=AwardWinning")
            .then((res) => res.json())
            .then((res) => dispatch(get_awardwinning(res)))
            .catch((err) => {
                dispatch(get_error())
                console.log(err)
            })
    }, [])
   

        return (
            <div className={styles.mainRow}>
                <h3 className={styles.mainHeading}>Award Winning</h3>
                <div className={styles.rowImages}>
                    {awardwinning.map(items => {
                        return <PopUp key={items.id} items={items} />
                    })}
                </div>
            </div>
        )
}
