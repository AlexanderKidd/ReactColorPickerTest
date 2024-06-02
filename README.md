# ReactColorPickerTest
Color Picker in React for a code interview. Written by Alexander Kidd

## Set Up/Design

I wanted to avoid making a CRA to show I knew the basic structure of a React app, and I don't believe CRA has LTS React anyway (*requirement*). Here is how I set up the project:

1. Node project initialization

2. Install Babel and Webpack and configure respective config files in root

3. Install webpack HTML index file handler

4. Install React and React DOM

5. Create public/index.html and src/App.js and index.js as starting points

6. Add scripts to run webpack dev server

## How To Build

1. Make sure you have LTS of React installed (6/2/24: v18.3.1)

2. Run `npm i` to install necessary modules

3. Run `npm run start` to start the web development server and see the test demo

4. To bundle this whole test demo into one HTML and JS file in `dist` folder, run `npm run build`

## How To Integrate Color Picker Elsewhere

The ColorPicker.js file in `src/components/shared` along with the accompanying `src/styles/colorpicker.css` can pretty much be dropped in to any project.

This component assumes a color value will be in the main React state object, most likely on a parent component but Redux could also be used for a common store of color picker values.

It's also highly expandable in that you can add colors to the `colorData` array in the ColorPicker component.

## Changelog

v1.0 Initial verison of color picker demo, shows how to use in various HTML elements.