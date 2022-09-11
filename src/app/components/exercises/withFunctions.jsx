import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    const isAuth = Boolean(localStorage.getItem("auth"));
    return (
        <>
            <CardWrapper>
                <Component
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                    isAuth={isAuth}
                />
            </CardWrapper>
        </>
    );
};

export default withFunctions;
