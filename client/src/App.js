import React from 'react';
import './App.css';
import axios from 'axios';
// import Web3 from 'web3';

function App() {

  // useEffect(() => {
    
  // }, []);

  // const connect_metamask = () => {
  //   if (window.ethereum) {
  //     window.ethereum.request({method:'eth_requestAccounts'}).then(res => {
  //       console.log("Connected Account address: "+ res[0]);
  //     }).catch(err => {
  //       console.log(err);
  //     });
  //     // window.ethereum.on("accountschanged", function(account) {
  //     //   console.log("Current Selected Account: "+ account);
  //     // });
  //   } else {
  //     alert("install metamask extension!!");
  //   }
  // };

  function on_led(p) {
    axios.get(`http://localhost:5000/ledon?pin=${p}`).then((res) => {
      console.log("Satus", res.data);
    });
  }

  function off_led(p) {
    axios.get(`http://localhost:5000/ledoff?pin=${p}`).then((res) => {
      console.log("Satus", res.data);
    });
  }

  return (
    <div className="App">
      <button onClick={() => on_led(9)}>ON LED 1</button>
      <button onClick={() => off_led(9)}>OFF LED 1</button>
      <button onClick={() => on_led(6)}>ON LED 2</button>
      <button onClick={() => off_led(6)}>OFF LED 2</button>
      {/* <button onClick={connect_metamask}>Connect</button> */}
    </div>
  );
}

export default App;