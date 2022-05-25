
import { CATEGORY, EMAIL, ENDCATEGORY, ERROR, GETUserDATA, GET_ANIME, GET_AWARDWINNING, GET_BOLLYWOOD, GET_DOCUSERIESSHOWS, GET_HOLLYWOOD, GET_HORRORTVSHOWS, GET_INDIANTVSHOWS, Get_MOVIES, GET_ROMANCETVSHOWS, Get_TVSHOWS, LOADING, MAINITEM, PASSWORD, SEARCH, SEARCHDATA, SIGNIN_ERROR, SIGNIN_LOADING, USERLOGIN, USERLOGOUT } from "./ActionTypes"

const getValue = (key) => {
    try {
        const value = localStorage.getItem(key)
        const parsedValue = JSON.parse(value)
        return parsedValue
    }
    catch(e) {
        return e.message
    }
}
const init = {
    loading: false,
    error: false,
    signin_loading: false,
    signin_error: false,
    indian_tv: [],
    horror_tv: [],
    romance_tv: [],
    docuseries_tv: [],
    anime: [],
    bollywood: [],
    hollywood: [],
    awardwinning: [],
    tv_shows: [],
    movies: [],
    email: "",
    password: "",
    userData: [],
    auth: {
        isUserLoggedIn: getValue("token")? true : false,
        token: getValue("token")
    },
    mainItem: "",
    categoryItem: "",
    endCategoryItem: "",
    search_item: "",
    searchData: []


}

export const reducer = (state = init, { type, payload }) => {

    switch (type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case SIGNIN_LOADING:
            return {
                ...state,
                signin_loading: payload

            }
        case SIGNIN_ERROR:
            return {
                ...state,
                signin_error: payload
            }
        case GET_INDIANTVSHOWS:
            return {
                ...state,
                loading: false,
                indian_tv: payload
            }
        case GET_ROMANCETVSHOWS:
            return {
                ...state,
                loading: false,
                romance_tv: payload
            }
        case GET_HORRORTVSHOWS:
            return {
                ...state,
                loading: false,
                horror_tv: payload
            }
        case GET_DOCUSERIESSHOWS:
            return {
                ...state,
                loading: false,
                docuseries_tv: payload
            }
        case GET_ANIME:
            return {
                ...state,
                loading: false,
                anime: payload
            }
        case GET_AWARDWINNING:
            return {
                ...state,
                loading: false,
                awardwinning: payload
            }
        case GET_BOLLYWOOD:
            return {
                ...state,
                loading: false,
                bollywood: payload
            }
        case GET_HOLLYWOOD:
            return {
                ...state,
                loading: false,
                hollywood: payload
            }
        case Get_TVSHOWS:
            return {
                ...state,
                loading: false,
                tv_shows: payload
            }
        case Get_MOVIES:
            return {
                ...state,
                loading: false,
                movies: payload
            }
        case EMAIL:
            return {
                ...state,
                loading: false,
                email: payload
            }
        case PASSWORD:
            return {
                ...state,
                loading: false,
                password: payload
            }
        case GETUserDATA:
            return {
                ...state,
                loading: false,
                userData: payload
            }
        case USERLOGIN:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    isUserLoggedIn: true,
                    token: payload

                }
            }
        case USERLOGOUT:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    isUserLoggedIn: false,
                    token: ""

                }
            }
        case MAINITEM:
            return {
                ...state,
                loading: false,
                mainItem: payload
            }
        case CATEGORY:
            return {
                ...state,
                categoryItem: payload
            }
        case ENDCATEGORY:
            return {
                ...state,
                endCategoryItem: payload
            }
        case SEARCH:
            return {
                ...state,
                loading: false,
                search_item: payload
            }
        case SEARCHDATA:
            return {
                ...state,
                loading: false,
                searchData: payload
            }
        default: return state


    }

}

