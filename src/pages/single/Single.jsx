import Chart from '../../Components/charts/Chart'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Single.scss'
import Tablenew from '../../Components/table/Table'

function Single() {
  return (
    <div className='single'>
      <Sidebar/>
<div className="singlecontainer">
  <Navbar/>
  <div className="top">
    <div className="left">
      <div className='editbutton'>Edit</div>
      <h1 className="title">Information :</h1>
      <div className="item">
      <img src="https://media.wired.com/photos/59266af7f3e2356fd80092e0/master/w_2560%2Cc_limit/KongTA.jpg" alt="" className='itemimg' />
      <div className="details">
        <h1 className='itemtitle'> Nr Nag </h1>
        <div className="detailitem">
          <span className='itemkey'>email :</span>
          <span className='itemvalue'>naga@gamil.com</span>
        </div>
        <div className="detailitem">
          <span className='itemkey'>phone :</span>
          <span className='itemvalue'>87638766872</span>
        </div>
        <div className="detailitem">
          <span className='itemkey'>address :</span>
          <span className='itemvalue'>11,iit colony chennai-100,tamil nadu</span>
        </div>
        <div className="detailitem">
          <span className='itemkey'>country :</span>
          <span className='itemvalue'>India</span>
        </div>
        </div>
        </div>
    </div>
    <div className="right">
      <Chart title="user spending lastc(6 months)" aspect={3/1} className="newchart" />
    </div>
  </div>
  <div className="bottom">
    <h1>last transaction</h1>
    <Tablenew/>
  </div>
</div>
    </div>
  )
}

export default Single