export const logout=()=>async(dispatch)=>{
    try {
        localStorage.clear();
        dispatch({type:LOGOUT})
        console.log("logout success")
    } catch (error) {
        console.log("error", error)
    }
}