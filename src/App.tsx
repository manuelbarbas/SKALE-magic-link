import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Magic } from 'magic-sdk';
import { ethers } from "ethers";
import Web3 from "web3";


const customNodeOptions_nebula = {
  rpcUrl: 'https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet',
  chainId: 37084624
}

async function LoginAndSendGas() {
  try {
    let magic;

    magic = new Magic('pk_live_ED9787D6A6839903', { 
      network: customNodeOptions_nebula,
    });

   // const provider = new ethers.BrowserProvider(magic.rpcProvider);
   const web3 = new Web3(magic.rpcProvider);


    await magic.auth.loginWithMagicLink({ email: 'manuel@skalelabs.com'});

    const account = await web3.eth.getAccounts();

    console.log(account);

    const txnParams = {
      from: account[0],
      to: "0x8d18146ae92a42b7fc3D8511CBc54a1addaE81e0",
      value: web3.utils.toWei('0.000001', "ether"),
      gasLimit: 510000,
      gasPrice: 100000
  };
  
  web3.eth
      .sendTransaction(txnParams)
      .on("transactionHash", (hash) => {
          console.log("Transaction hash:", hash);
      })
      .then((receipt) => {
          console.log("Transaction receipt:", receipt);
      })
      .catch((error) => {
          console.error(error);
      });

   /* const signer = await provider.getSigner();

    console.log("ADDRESS SIGNER "  + signer.address)

    const signerBalance =  await provider.getBalance(signer.address); 
    console.log("sFUEL Balance " + ethers.formatEther(signerBalance) + " sFUEL");
  

    const txnParams = {
      to: "0x8d18146ae92a42b7fc3D8511CBc54a1addaE81e0",
      value: ethers.parseUnits('0.000001', 'ether'),
      gasLimit: ethers.parseUnits('0.0001', 'gwei'),
      gasPrice: ethers.parseUnits('0.0001', 'gwei'),
    };

    const tx = await signer.sendTransaction(txnParams);

    console.log("TX HASH " + tx.hash)

    const signerBalance_ =  await provider.getBalance(signer.address); 
    console.log("UPDATED sFUEL Balance " + ethers.formatEther(signerBalance_) + " sFUEL");*/

} catch(err) {
  console.log(err);
}
}

function App() {


  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => LoginAndSendGas()}>Login</button>
      </header>
    </div>
  );
}

export default App;
