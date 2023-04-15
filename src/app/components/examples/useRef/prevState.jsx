import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherStatesetOt] = useState("false");
    const toggleOtherState = () => {
        setOtherStatesetOt((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev state {prevState.current} </p>
            <p>current state {otherState} </p>
            <button className="btn btn-success" onClick={toggleOtherState}>
                Жмякни
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
