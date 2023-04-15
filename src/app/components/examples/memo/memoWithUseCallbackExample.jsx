import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render butten");
    });
    return (
        <button className="btn btn-success mx-2" onClick={onLogOut}>
            LogOut
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevProps, nextProps) {
    if (prevProps.onLogOut !== nextProps.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-success mx-2"
                onClick={() => {
                    setState(!state);
                }}
            >
                initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
