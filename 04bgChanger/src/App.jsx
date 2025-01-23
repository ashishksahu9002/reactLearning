import { useState } from "react"


function App() {
  
  const [color, setColor] = useState("gray")

  return (
    <>
      <div className="w-full h-screen duration-200 " style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-full px-3 py-2">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "red"}}
            onClick={() => setColor("red")} >Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "green"}}
            onClick={() => setColor("green")} >Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "gray"}}
            onClick={() => setColor("gray")} >Gray</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "black"}}
            onClick={() => setColor("black")} >Black</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "olive"}}
            onClick={() => setColor("olive")} >Olive</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "purple"}}
            onClick={() => setColor("purple")} >Purple</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "blue"}}
            onClick={() => setColor("blue")} >Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

// for style double curly braces is needed
// The on click method in React expects a function reference
// You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax