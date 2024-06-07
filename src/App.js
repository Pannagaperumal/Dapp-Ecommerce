import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Product from "./components/Product";

// ABIs
import Dappazon from "./abis/Dappazon.json";

// Config
import config from "./config.json";

function App() {
  const [account, setAccount] = useState(null)
  const [provider, setProvider]= useState(null)
  const [dappazon,setDappzon]= useState(null)
  const [electronics,setElectronics]= useState(null)
  const [clothing,setClothing]= useState(null)
  const [toys,setToys]= useState(null)

  const[item,setItem] = useState({})
  const[toggle,setToggle] = useState(true)


  const togglePop = (item) =>{
    setItem(item)
    toggle ? setToggle(false): setToggle(true)
  }






  const loadblockchaindata = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)

    // const network = await provider.getNetwork()

    const dappazon = new ethers.Contract(config['31337'].dappazon.address, Dappazon, provider)
    setDappzon(dappazon)

    //list items
    const items=[]

    for (var i=0;i<9;i++){
      const item = await dappazon.items(i+1)
      items.push(item)
    }
    const electronics = items.filter((item)=> item.category ==='electronics')
    const clothing = items.filter((item)=> item.category ==='clothing')
    const toys = items.filter((item)=> item.category ==='toys')
    setElectronics(electronics)
    setClothing(clothing)
    setToys(toys)
  };


  useEffect(() => {
    loadblockchaindata();
  },[]);
  return (
    <div>
      <Navigation account={account} setAccount={setAccount}>


      </Navigation>
      <h2>DappazonBest Sellers</h2>

        {electronics && clothing && toys &&(
          <>
        <Section title={"Clothing & Jewelery"} items={clothing} togglePop={togglePop}  />
        <Section title={"Electronics & Gadgets"} items={electronics} togglePop={togglePop}  />
        <Section title={"Toys & Gaming"} items={toys} togglePop={togglePop}  />
        </>
      )}
      
      {toggle &&(
        
        <Product item={item}  provider={provider} account={account} dappazon={dappazon} togglePop={togglePop} />
      )}
    </div>
  );
}

export default App;
