
import React from 'react'
import Navbar from '../component/Navbar'
import { AwardWinning } from '../HomePage/AwardWinning'
import { DocuseriesTvShows } from '../HomePage/DocuseriesTvShows'
import { MainFooter } from '../HomePage/MainFooter'
import { Search } from './Search'

export const SearchComponent = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <Navbar />
            <Search />
            <AwardWinning />
            <DocuseriesTvShows />
            <MainFooter />
        </div>
    )
}
