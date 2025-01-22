import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-500 p-4 rounded-2xl mb-4' >Tailwind Test</h1>
     
        <Card userName = "Chai" btnText = "Give Me"/>
        <Card userName = "Coffee"/>
    </>
  )
}

export default App
