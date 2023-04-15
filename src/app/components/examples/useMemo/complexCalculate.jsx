import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("Factoria");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "success" : "danger";

    useEffect(() => {
        console.log("render button color");
    }, [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>Value {value}</p>
                <p> Результат: {fact}</p>
                <button
                    className="btn btn-success mx-2"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-success mx-2"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    Dicrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider />
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Change Color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
