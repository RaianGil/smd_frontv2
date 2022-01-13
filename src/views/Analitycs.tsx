import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: ['BTC', 'USDT'],
    datasets: [
        {
            label: '# of Votes',
            data: [356.21,600.5],
            backgroundColor: [
                'rgba(255, 255, 255, 0.8)',
                'rgba(255, 255, 255, 0.2)'
            ],
            borderWidth: 1,
        }
    ]

}

const Analitycs = () => (
    
    <div className="p-2">
        <div className="col-md-12 row">
            <div className="col-md-4">
                <h3 className='text-white'>Total Money</h3>
            </div>
            <div className="col-md-4">
                <h3 className='text-white'>Total Money</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 w-list">
                <div className="row">
                    <label htmlFor="" className='bg-light col-md-2'>BTC</label>
                    <label htmlFor="" className='text-white col-md-4 ps-1'>0.68</label>
                    <label htmlFor="" className='bg-success col-md-4 text-white'>+0.002</label>
                </div>
                <div className="row">
                    <label htmlFor="" className='bg-light col-md-2'>USDT</label>
                    <label htmlFor="" className='text-white ps-1 col-md-4'>356.21</label>
                    <label htmlFor="" className='bg-danger text-white col-md-4'>-60.244</label>
                </div>
                <div className="row">
                    <label htmlFor="" className='bg-light col-md-2'>Total</label>
                    <label htmlFor="" className='bg-primary text-white ps-1 col-md-8'>356.21</label>
                </div>
            </div>
            <div className="col-md-7">
                <Doughnut data={data} className='hp-1'/>
            </div>
        </div>
    </div>
)

export default Analitycs