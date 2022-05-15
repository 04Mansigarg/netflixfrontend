import React from 'react'
import { Anime } from '../HomePage/Anime'
import { AwardWinning } from '../HomePage/AwardWinning'
import { Bollywood } from '../HomePage/Bollywood'
import { Hollywood } from '../HomePage/Hollywood'
import { AllMovies } from './AllMovies'
import styles from "../HomePage/HomePage.module.css"
import { MainFooter } from '../HomePage/MainFooter'
import { MoviesBanner } from './MoviesBanner'

export const Movies = () => {
    return (
        <div className={styles.tvShows}>
            <MoviesBanner />
            <AllMovies />
            <AwardWinning />
            <Hollywood />
            <Bollywood />
            <Anime />
            <MainFooter />
        </div>
    )
}
