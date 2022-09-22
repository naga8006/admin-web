import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import'./Chart.scss'


const data = [
  {name: 'January',Total: 2770,},  
  {name: 'febuary',Total:1210,},
  {name: 'march',Total: 1000,},  
  {name: 'april',Total:900,},
  {name: 'may',Total: 600,},
  {name: 'June',Total: 300,},
];
 
function Chart({aspect,title}) {
  return (
    <div className='chart'>
      <div className='title'>{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#7451f8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
   
  </defs>
  <XAxis dataKey="name" stroke='grey'/>
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" className='chartgrid' />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
      </ResponsiveContainer>
  </div>
  )
}

export default Chart