import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const renderCaunt = useRef(0);
    const [otherState, setOtherStatesetOt] = useState(false);
    const toggleOtherState = () => {
        setOtherStatesetOt(!otherState);
    };
    useEffect(() => {
        renderCaunt.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>render caunt {renderCaunt.current} </p>
            <button className="btn btn-success" onClick={toggleOtherState}>
                Жмякни
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
