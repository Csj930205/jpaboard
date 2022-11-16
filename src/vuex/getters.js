export default {
    getUserId: state => state.userId,
    getErrorState: state => state.errorstate,
    getIsAuth: state => state.isAuth,
    loggedIn(state) {
        return !!state.user
    }
}
