import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Services from "../pages/Services/Services";
import Information from "../pages/Information/Information";
import Contacts from "../pages/Contacts/Contacts";
import Company from '../pages/Company/Company';
import Banner from "../components/Banner/Banner";
import CatalogBanner from "../components/CatalogBanner/CatalogBanner";
import { elementsCatalogBanner } from "../api/elementsCatalogBanner";
import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home Banner={Banner} CatalogBanner={CatalogBanner} />} />
        <Route path="/company" element={<Company/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/information" element={<Information />} />
        <Route path="/catalog" element={<Catalog Banner={Banner} CatalogBanner={CatalogBanner}/>} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
