// Write your Color component here

import { useState } from 'react'


const Color = ({color, setSelectedColor, curColor}) => {
  const applyColor = curColor === color? color + " selected" : color;
  return (
    <div
    className={applyColor}
    onClick={() => setSelectedColor(color)} 
    >
    </div>
  )
}
const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} curColor={selectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor} curColor={selectedColor}/>
        <Color color="orange" setSelectedColor={setSelectedColor} curColor={selectedColor}/>
      </div>
    </div>
  );
};
export default App;