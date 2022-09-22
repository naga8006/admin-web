import React from 'react';
import './home.scss'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Widget  from '../../Components/widgets/widget';
import Feature from '../../Components/Features/Feature';
import Chart from '../../Components/charts/Chart';
import Table from'../../Components/table/Table';


export default function Home() {
  return (
      <div className='home'>
        <Sidebar/>
        <div className='homecontainer'>
        <Navbar/>
        <div className='widgets'>
          <Widget type='user'/>
          <Widget type='order'/>
          <Widget type='earnings'/>
          <Widget type='balance'/>
        </div>
        <div className='charts'>
          <Feature/>
          <Chart title='Last 6 months (Revenue)' aspect={2/1}/>
        </div>

        <div className="listcontainer">
          <div className="listtitle">Lastest Transactions</div>
          <Table/>
        </div>
        </div>

    </div>
)
}
