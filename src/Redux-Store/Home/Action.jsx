
import { AUTH, CATEGORY, EMAIL, ENDCATEGORY, ERROR, GETUserDATA, GET_ANIME, GET_AWARDWINNING, GET_BOLLYWOOD, GET_DOCUSERIESSHOWS, GET_HOLLYWOOD, GET_HORRORTVSHOWS, GET_INDIANTVSHOWS, Get_MOVIES, GET_ROMANCETVSHOWS, Get_TVSHOWS, LOADING, MAINITEM, PASSWORD, SEARCH, SEARCHDATA, SIGNIN_ERROR, SIGNIN_LOADING} from "./ActionTypes"
export const get_loading = () => {
    return {
        type: LOADING
    }
}
export const get_error = () => {
    return {
        type: ERROR
    }
}
export const get_signin_loading = (data) => {
    return {
        type: SIGNIN_LOADING,
        payload:data
    }
}
export const get_signin_error = (data) => {
    return {
        type: SIGNIN_ERROR,
        payload:data
    }
}

export const get_indian_tvshows = (data) => {
    return {
        type: GET_INDIANTVSHOWS,
        payload: data
    }
}
export const get_romance_tvshows = (data) => {
    return {
        type: GET_ROMANCETVSHOWS,
        payload: data
    }
}
export const get_horror_tvshows = (data) => {
    return {
        type: GET_HORRORTVSHOWS,
        payload: data
    }
}
export const get_docuseries_tvshows = (data) => {
    return {
        type: GET_DOCUSERIESSHOWS,
        payload: data
    }
}
export const get_anime = (data) => {
    return {
        type: GET_ANIME,
        payload: data
    }
}
export const get_bollywood = (data) => {
    return {
        type: GET_BOLLYWOOD,
        payload: data
    }
}
export const get_hollywood = (data) => {
    return {
        type: GET_HOLLYWOOD,
        payload: data
    }
}
export const get_awardwinning = (data) => {
    return {
        type: GET_AWARDWINNING,
        payload: data
    }
}
export const get_tvshows = (data) => {
    return {
        type: Get_TVSHOWS,
        payload: data
    }
}
export const get_movies = (data) => {
    return {
        type: Get_MOVIES,
        payload: data
    }
}

export const get_email = (email) => {
    return {
        type: EMAIL,
        payload: email
    }
}
export const get_password = (password) => {
    return {
        type: PASSWORD,
        payload: password
    }
}
export const get_userData = (data) => {
    return {
        type: GETUserDATA,
        payload: data
    }
}
export const auth = (data) => {
    return {
        type: AUTH,
        payload: data
    }
}
export const main_item = (data) => {
    return {
        type: MAINITEM,
        payload: data
    }
}
export const category_item = (data) => {
    return {
        type: CATEGORY,
        payload: data
    }
}
export const end_category_item = (data) => {
    return {
        type: ENDCATEGORY,
        payload: data
    }
}
export const search = (data) => {
    return {
        type: SEARCH,
        payload: data
    }
}
export const search_data = (data) => {
    return {
        type: SEARCHDATA,
        payload: data
    }
}