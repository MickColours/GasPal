import React, {useState, useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import '../App.css'
import GaugeChart from 'react-gauge-chart'
import Axios from 'axios';
const name = "coolguy03"

const Home = () => {
  const addr = "http://localhost:5000/usercars/" + name
  const [a, setVal] = useState("");
  const [c, setFuel] = useState([]);
  
  useEffect(() => {
    Axios.get(addr).then((response) => 
    {
      setFuel(response.data.map(item=>item.current_fuel));
    });
  }, []);
  
  return (
    <><div>
      <br></br>
      <br></br>
      <GaugeChart className="gauge"
        nrOfLevels={10}
        colors={["red", "black"]}
        arcWidth={0.3}
        percent={c / 100}
        textColor='#730000'
        arcPadding={0.02}
        style={{ width: '70%'}}
        animDelay={200} />
      <br></br>
      <br></br>
      
      <h2 className="gastext">Enter Current Fuel:</h2>
      <div className="gasvalue">
        <TextField
          value={a}
          label="Your Current Fuel %"
          onChange={(e) => {
            setVal(e.target.value);
          } } />
      </div>
      <button className="confirmBtn" style={{ height: 40, width: 200 }} onClick={() => setFuel(a)}>Confirm</button>
    </div><button className="fillUpbtn" style={{ height: 40, width: 200 }} onClick={() => setFuel(100)}>Fill Up</button></>
    
  );
};
  
export default Home;