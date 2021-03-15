import React, { useState } from 'react'
import './colorBox.scss'

const getRandomColor = () => {
  const colorList = ['deeppink', 'green', 'violet', 'red', 'blue']
  const indexColor = Math.floor(Math.random() * 5)
  return colorList[indexColor]
}

function ColorBox() {

  const [color, setColor] = useState(() => localStorage.getItem('boxColor') || 'deeppink')

  const changeColor = () => {
    const newColor = getRandomColor()
    setColor(newColor)

    localStorage.setItem('boxColor', newColor)
  }

  return (
    <div
      className="color-box"
      style={{ background: color }}
      onClick={changeColor}
    >
    </div>
  )
}

export default ColorBox
