import React from 'react'
import { Banner } from './Banner'
import { Item } from './Item'
import Navbar from './Navbar'
import {MainFooter} from "../HomePage/MainFooter"

export const ItemComponent = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <Navbar />
            <Banner />
            <Item />
            <MainFooter/>
        </div>
    )
}
