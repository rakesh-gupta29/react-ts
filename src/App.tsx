
// import { getData } from "./services/store.js"
import Card from "./components/card"
import { useEffect  , useState } from "react"
function App() {
  const [ data, setData ] = useState ( []  )
  useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data =await  res.json();
        setData ( data )
     }
     fetchData()
  }, [])
  return (
   <div className="flex flex-wrap gap-3 items-center justify-center max-w-7xl mx-auto md:w-11/12 my-24">
    {data.map((i, index ) => {
      return <Card data={ i } key={ index } /> 
    })}
   </div>
  )
}

export default App
