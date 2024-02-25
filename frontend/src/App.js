import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import FirstPage from "./FirstPage";
import ProductPage from "./Component/Screen/Products/productPage";
import AboutPage from "./Component/Screen/About/About";
import SignIn from "./Component/Screen/Credential/SignIn"
import SignUp1 from "./Component/Screen/Credential/SignUp";
import ProductView2 from "./Component/Screen/Products/productView" 
import CartDisplay from "./Component/Screen/Cart/CartDisplay";
function App() {
  return (

    <PrimeReactProvider>
     <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={ <FirstPage />} />
        <Route path="/product"  element={ <ProductPage />} />
        <Route path="/about"  element={ <AboutPage />} />
        <Route path="/login"  element={ <SignIn />} />
        <Route path="/signup"  element={ <SignUp1 />} />
        <Route path="/productview"  element={ <ProductView2 />} />
        <Route path="/cartdisplay"  element={ <CartDisplay />} />
      </Routes>
       
      </BrowserRouter>
    </div>
</PrimeReactProvider>
   
  );
}

export default App;
