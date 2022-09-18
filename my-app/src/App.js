import logo from './logo.svg';
import { useEffect,useState } from 'react';

import './App.css';
function App() {
  const[user,setUser]=useState({})
  function handleCallbackResponse(response){
    console.log("Encoded JTW ID token: "+ response.credential);
  setUser(response.credential);
   
  }
  function handelSignout(event){
    setUser({})
  }
  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id:"987564272348-nss3ru666302r7aokl1pe8i2ratddgqr.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
  google.accounts.id.renderButton(
  document.getElementById("signInDiv"),
  {theme:"outline",size:"xx-large" }
  );
  },[]);

  return (
    <div className="App">
      <div id="signInDiv">
       
        
      </div>
    </div>
  );
}

export default App;
