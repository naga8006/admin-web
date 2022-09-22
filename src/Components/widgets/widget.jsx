import './widget.scss'
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


function Widget ({ type }) {

  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {

    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "see all user",
        icon: <PersonIcon className='icon' style={{color:"blue"}}/>,
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "view all orders",
        icon: <ShoppingCartIcon className='icon'  style={{color:"whitesmoke"}}/>,
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "view net earnings",
        icon: <CurrencyExchangeIcon className='icon' style={{color:"purple"}} />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "view details",
        icon: <AccountBalanceWalletIcon className='icon' style={{color:"red"}} />,
      };
      break;
    default:
      break;
  };


  return (
    <div className="widget">
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"}{amount}</span>
        <span className='link'>{data.link}</span>

      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardControlKeyIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}
export default Widget;