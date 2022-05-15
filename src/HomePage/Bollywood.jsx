
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_bollywood, get_error, get_loading } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const Bollywood = () => {
    const { bollywood} = useSelector((state) => ({
        bollywood: state.bollywood,
        loading: state.loading,
        error: state.error

    }))
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(get_loading())
        fetch("https://netflix-dbclone.herokuapp.com/movies?category=Bollywood")
            .then((res) => res.json())
            .then((res) => dispatch(get_bollywood(res)))
            .catch((err) => {
                console.log(err)
                dispatch(get_error())
            })
    }, [])

        return (
            <div className={styles.mainRow}>
                <h3 className={styles.mainHeading}>Bollywood</h3>
                <div className={styles.rowImages}>
                    {bollywood.map(items => {
                        return <PopUp key={items.id} items={items} />
                    })}
                </div>
            </div>
        )

}
