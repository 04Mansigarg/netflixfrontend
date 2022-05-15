
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUp from '../components/PopUp'
import styles from "../HomePage/HomePage.module.css"
import { get_error, get_loading } from '../Redux-Store/Home/Action'

export const Item = () => {
    const [data, setData] = React.useState([])
    
    const {mainItem,endItem} = useSelector((state) => ({
        mainItem:state.mainItem,
        loading:state.loading,
        error:state.error,
        endItem: state.endCategoryItem

    }))
    const dispatch = useDispatch()
    console.log(mainItem)
    React.useEffect(() => {
        dispatch(get_loading())
        fetch(`https://netflix-dbclone.herokuapp.com/${endItem}?category=${mainItem}`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => {console.log(err)
            dispatch(get_error())})
    }, [])
   
    return (
        <div className={styles.mainRow}>
            <h3 className={styles.mainHeading}>{mainItem}</h3>
            <div className={styles.rowImages}>
                {data.map(items => {
                    return <PopUp key={items.id} items={items} />
                })}
            </div>
        </div>
    )
}
