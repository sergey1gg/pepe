import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MAIN from "./pages/MAIN";
import { useEffect } from "react";
import Payment from "./pages/Payment";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import AdminPanel from "./pages/Admin";


 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import Succespay from "./components/Succespay";
 
// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

const chains = [mainnet]
const projectId = '23a7130db1e12c9559c5fb93418c627e'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

  return (
    <>
    <WagmiConfig config={wagmiConfig}>
    <Routes>
      <Route path="/" element={<MAIN />} />
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/admin" element={<AdminPanel/>}/>
      <Route path="/success" element={<Succespay/>}/>
    </Routes>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </WagmiConfig>
    </>
  );
}
export default App;
