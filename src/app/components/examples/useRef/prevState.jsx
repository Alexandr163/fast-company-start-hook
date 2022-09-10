import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setotherState] = useState("false");
    const toggleOtherState = () => {
        setotherState(prevState => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev state: {prevState.current}</p>
            <p>current stste: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                кнопка
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
