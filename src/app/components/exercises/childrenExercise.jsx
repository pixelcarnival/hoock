import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <GettingNumberingOrder>
                <Component />
                <Component />
                <Component />
            </GettingNumberingOrder>
        </CollapseWrapper>
    );
};

const GettingNumberingOrder = ({ children }) => {
    const arreyNumber = React.Children.toArray(children);
    console.log(arreyNumber);
    return React.Children.map(arreyNumber, (child) =>
        React.cloneElement(child, {
            ...child.props,
            number: +child.key.replace(".", "") + 1
        })
    );
};

GettingNumberingOrder.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const Component = ({ number }) => {
    return <div> Компонент списка {number}</div>;
};

Component.propTypes = {
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
