import React, { useState } from "react";
import ColorPicker from "./components/shared/ColorPicker";
import ColorPickerButton from "./components/ColorPickerButton";

import "./styles/global.css";

const App = () => {
    const [color, setColor] = useState("#FF0000");

    return (
        <>
            <h1>
                Welcome to the React Color Picker Demo!
            </h1>

            <h3>
                Here you will find some examples using the color picker component I made with React.
            </h3>

            <div className="row">
                <h3>Color Picked:</h3> 
                <h3 style={{'backgroundColor': color}}>{color}</h3>
            </div>

            <div className="row">
                <div className="box" aria-label="Color Picker minimal example">
                    <ColorPicker color={color} setColor={setColor}></ColorPicker>
                </div>

                <div className="box" aria-label="Color Picker button toggle example">
                    <ColorPickerButton color={color} setColor={setColor}></ColorPickerButton>
                </div>

                <div className="box" aria-label="Color Picker hover right example">
                    <div className="hover">
                        TAKE HOVER (over this)
                        <span className="hovertext"><ColorPicker color={color} setColor={setColor}></ColorPicker></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
