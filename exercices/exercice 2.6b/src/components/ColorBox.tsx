import "./ColorBox.css";
import { useState } from "react";

const colors = ["red", "blue", "green", "purple", "yellow"];

const ColorBox = () => {
    const [curentColorBox, setCurrentColorBox] = useState(0);

    return (
        <div
        className="color-box"
        style={{backgroundColor: colors[curentColorBox]}}
        >
            <button className="color-box_button"
            onClick={() => {setCurrentColorBox((curentColorBox + 1) % colors.length); }}>
                {colors[(curentColorBox + 1) % colors.length]}
            </button>
            <h3>{colors[curentColorBox]}</h3>
        </div>
    );
};

export default ColorBox;