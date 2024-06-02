import React from "react";

import '../../styles/colorpicker.css';

const ColorPicker = ({color, setColor}) => {
    const colorData = [
        { id: 1, name: 'Blue',   value: '#0000FF' },
        { id: 2, name: 'Red',    value: '#FF0000' },
        { id: 3, name: 'Yellow', value: '#FAFA33' },
        { id: 4, name: 'Green',  value: '#00FF00' },
        { id: 5, name: 'Orange', value: '#FFBF00' },
        { id: 6, name: 'Purple', value: '#800080' },

        { id: 7,  name: 'Cyan',         value: '#00FFFF' },
        { id: 8,  name: 'Salmon',       value: '#FA8072' },
        { id: 9,  name: 'Khaki',        value: '#F0E68C' },
        { id: 10, name: 'Olive Drab',   value: '#6B8E23' },
        { id: 11, name: 'Coral',        value: '#FF7F50' },
        { id: 12, name: 'Fuchsia',      value: '#FF00FF' },

        { id: 13, name: 'Light Cyan',   value: '#E0FFFF' },
        { id: 14, name: 'Light Salmon', value: '#FFA07A' },
        { id: 15, name: 'Light Yellow', value: '#FFFFE0' },
        { id: 16, name: 'Light Green',  value: '#90EE90' },
        { id: 17, name: 'Light Orange', value: '#FFCC00' },
        { id: 18, name: 'Lavender',     value: '#E6E6FA' },

        { id: 19, name: 'Turquoise',    value: '#40E0D0' },
        { id: 20, name: 'Crimson',      value: '#DC143C' },
        { id: 21, name: 'Gold',         value: '#FFD700' },
        { id: 22, name: 'Sea Green',    value: '#2E8B57' },
        { id: 23, name: 'Orange Juice', value: '#FFA500' },
        { id: 24, name: 'Blue Violet',  value: '#8A2BE2' },

        { id: 25, name: 'Navy',             value: '#000080' },
        { id: 26, name: 'Dark Red',         value: '#8B0000' },
        { id: 27, name: 'Dark Khaki',       value: '#BDB76B' },
        { id: 28, name: 'Dark Olive Green', value: '#556B2F' },
        { id: 23, name: 'Dark Orange',      value: '#FF8C00' },
        { id: 30, name: 'Indigo',           value: '#4B0082' },
    ];

    const rows = [];
    for (let i = 0; i < colorData.length; i += 6) {
        rows.push(colorData.slice(i, i + 6));
    }

    let selectedColor = color;

    const setColorPickerColor = (color) => {
        selectedColor = color;
        setColor(color);
    }

    return (
        <>
            <table border="1">
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className={"colorPickerCell " + (selectedColor === cell.value ? "active" : "")} style={{'backgroundColor': cell.value}} onClick={() => setColorPickerColor(cell.value)}>
                                    {cell.name} {selectedColor === cell.value && <div>{cell.value}</div>}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ColorPicker
