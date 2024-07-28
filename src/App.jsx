import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
// import Loader from "./Components/Loader/Loader";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Home/Home";

// const Shop = lazy(()=> import('./Components/Shop/Shop'));
// const Home = lazy(()=> import('./Components/Home/Home'));

function App() {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
