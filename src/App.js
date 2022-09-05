import { useEffect , useState  } from "react";
import './App.css'
function App() {
  const [setValue1  , getValue1 ] = useState('')
  const [setValue2  , getValue2 ] = useState('')
  const [data , getData] = useState([])
  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log(`${setValue1} : ${setValue2}`)
    HandleFilter(setValue1 ,setValue2)
    getValue1('')
    getValue2('')
  }
  useEffect(()=>{
    fetch('http://localhost:3000/product')
    .then(res => res.json())
    .then(pot => {
      getData(pot)
    })
  },[])
  const HandleFilter = (price1 , price2) => {
    const a = +price1 
    const b = +price2
    console.log(a,b)
  }
  return <div className="App">
    <form onSubmit={HandleSubmit}>
      <input placeholder="Từ ...." value={setValue1} name="input1" onChange={(e) => {getValue1(e.target.value)}}/>
      <input placeholder="đến ...." value={setValue2} name="input2" onChange={(e) => {getValue2(e.target.value)}}/>
      <input type='submit'  />
    </form>
    <div>
      <ul>
        {
          data.map((each,index) => {
            return <li key={index} style ={{marginBottom : '20px'}}>
              <h2>{each.title}</h2>
              <p>{each.price}</p>
            </li>
          })
        }
      </ul>
    </div>
  </div>;
}

export default App;
