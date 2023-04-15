import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const newBlock = useRef();

    const handleClick = () => {
        newBlock.current.innerText = "Text";
        newBlock.current.style.width = "150px";
        newBlock.current.style.height = "80px";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={newBlock}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded mb-3"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>

            <button className="btn btn-success mx-3" onClick={handleClick}>
                Изменить
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
