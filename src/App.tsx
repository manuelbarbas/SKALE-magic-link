import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Magic } from 'magic-sdk';
import { ethers } from "ethers";


const customNodeOptions_chaos = {
  rpcUrl: 'https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix',
  chainId: 1351057110
}

const customNodeOptions_nebula = {
  rpcUrl: 'https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird',
  chainId: 503129905
}


const customNodeOptions_polygon = {
  rpcUrl: 'https://polygon-mumbai.infura.io/v3/d3fc3c62fac246f885f4f6af21497f2e',
  chainId: 80001
}


async function Test() {
  try {
    let magic;

    magic = new Magic('pk_live_ED9787D6A6839903', { 
      network: customNodeOptions_nebula,
    });

  await magic.auth.loginWithMagicLink({ email: 'manuel@skalelabs.com', showUI:false });

  const accounts = await magic.wallet.connectWithUI();

  console.log(accounts);


} catch(err) {
  console.log(err);
}
}

function App() {



  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => Test()}>Login</button>
      </header>
    </div>
  );
}

export default App;
