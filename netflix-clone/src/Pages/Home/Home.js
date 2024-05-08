import React from "react";
import Header from "../../componets/header/Header";
import Footer from "../../componets/footer/Footer";
import RowList from "../../componets/Rows/RowList/RowList";
import Banner from "../../componets/Banner/Banner";

const  Home=()=> {
  return (
    <>
      <Header />
     
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}

export default Home;
