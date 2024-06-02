import React, { useState } from "react";
import ColorPicker from "./shared/ColorPicker";

const ColorPickerButton = ({color, setColor}) =>{
    const [isColorPickerShown, setIsColorPickerShown] = useState(false);

    return (
        <div>
            <button className="" onClick={() => {setIsColorPickerShown(!isColorPickerShown)}}>Color Select Button Example</button>
            { isColorPickerShown && <ColorPicker onClick={() => {setIsColorPickerShown(!setIsColorPickerShown)}} color={color} setColor={setColor}></ColorPicker> }
        </div>
    )
}

export default ColorPickerButton
