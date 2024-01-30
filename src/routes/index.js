import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const routes = [{
        path: '/',
        page: HomePage,
        isShowHeader: true
    },

    {
        path: '/login',
        page: SignInPage,
        isShowHeader: false

    },

    {
        path: '/register',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '*',
        page: NotFoundPage,

    }


]