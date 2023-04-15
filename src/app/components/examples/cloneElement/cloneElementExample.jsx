import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import TextFileld from "../../common/form/textField";

const CloneElementExample = () => {
    const filed = <TextFileld label="email" name="email" />;
    const handleChange = (target) => {
        console.log("change", target);
    };

    return (
        <CardWrapper>
            <SmallTitle>Привер</SmallTitle>
            {filed}
            {React.cloneElement(filed, {
                onChange: handleChange,
                label: "Clone email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
