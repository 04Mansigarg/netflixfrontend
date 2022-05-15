
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import { get_error, get_hollywood, get_loading } from '../Redux-Store/Home/Action'
import styles from "./HomePage.module.css"

export const Hollywood = () => {
    const {hollywood} = useSelector((state) => ({
        hollywood:state.hollywood,
        loading:state.loading,
        error:state.error

    }))
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(get_loading())
        fetch("https://netflix-dbclone.herokuapp.com/movies?category=Hollywood")
            .then((res) => res.json())
            .then((res) => dispatch(get_hollywood(res)))
            .catch((err) => {
                console.log(err)
                dispatch(get_error())
                })
    }, [])


    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>Hollywood</h3>
            <div className={styles.rowImages}>
                {hollywood.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )

}
