import { useState, useEffect } from "react"
import './App.css';

function App() {

  const [DATA, setDATA] = useState([])

  useEffect(() => {
    getDATA()
  }, [])

  // simulating fetch from server
  const getDATA = () => {
    const data = require("./DATA.json")
    setDATA(data)
  }

  const getSubData = (data) => {
    return (
      data.map(object => {
        return (
          <section key={object.id}>
            <p>id:{object.id}</p>
            <h1>Site Name:{object.name}</h1>
            <a target="_blank" rel="noreferrer" href={`https://${object.url}`}>Site Url: {object.name}</a>
              {object.subData && getSubData(object.subData)}
          </section>
        )
      })
    )
  }

  return (
    <div className="App">
      {DATA.length && getSubData(DATA)}
    </div>
  );
}

export default App;
