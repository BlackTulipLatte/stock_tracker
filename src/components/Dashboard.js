import React from 'react';
import {useState} from 'react'
import { mockCompanyDetails } from "../constants/mock";
import Header from "./Header";
import Details from "./Details"
import Overview from './Overview';
import Chart from './Chart';
import Search from './Search';
const Dashboard = () => {
  const [stock, setStock] = useState([]);
  const [quote, setQuote] = useState([]);

  const updateStock = async (stock) => {
    setStock(stock);
  }

  const updateQuote = async (stock) => {
    setQuote(stock);
  }

  return (

    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand bg-neutral-100">
      <div className="col-span-1 md:col-span-2 xl-col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stock.name} stockCallback={updateStock} quoteCallback={updateQuote}/>
      </div>
      <div className="md:col-span-2 row-span-4">
        <Chart />
      </div>
      <div>
        <Overview symbol= {stock.name}
        price={quote.c} 
        change={quote.d} 
        changePercent={quote.dp} 
        currency={stock.currency} />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={stock}/>
      </div>
    </div>
  );
}

export default Dashboard;