import React from 'react'
import { ClipboardListIcon } from '@heroicons/react/outline'
import Header from '../components/Header'
import LineChart from "../components/chart/LineChart"
import { Pie } from 'react-chartjs-2'
import PieChart from '../components/chart/PieChart'
type Props = {}

const dashboard = (props: Props) => {
    const labels = ['January','February','March', 'April','May','June','July','August','September','October']
    const labels1 = ['Monthly Subscribers',"Yearly Subscriber","On Trial"]
  return (
    <div>
        <Header/>
        <div className='max-w-7xl mx-auto'>
         <div className='my-4 grid grid-cols-12 gap-4 '>
            <div className={`h-32 w-full shadow-lg bg-emerald-400 bg-opacity-80 rounded lg:col-span-3 col-span-4 cursor-pointer flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all ease-out`}>
                    <div className=''>
                        <ClipboardListIcon className='h-8 w-8 '/>
                    </div>
                    <div className='text-2xl font-semibold'>1000</div>
                    <div>Total subscribers</div>
            </div>
            <div className={`h-32 w-full shadow-lg bg-teal-400 bg-opacity-80 rounded lg:col-span-3 col-span-4 cursor-pointer flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all ease-out`}>
                    <div className=''>
                        <ClipboardListIcon className='h-8 w-8 '/>
                    </div>
                    <div className='text-2xl font-semibold'>62</div>
                    <div>Total Movies</div>
            </div>
            <div className={`h-32 w-full shadow-lg bg-rose-400 bg-opacity-80 rounded lg:col-span-3 col-span-4 cursor-pointer flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all ease-out`}>
                    <div className=''>
                        <ClipboardListIcon className='h-8 w-8 '/>
                    </div>
                    <div className='text-2xl font-semibold'>120,000$</div>
                    <div>Total Revenue</div>
            </div>
            <div className={`h-32 w-full shadow-lg bg-orange-400 bg-opacity-80 rounded lg:col-span-3 col-span-4 cursor-pointer flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all ease-out`}>
                    <div className=''>
                        <ClipboardListIcon className='h-8 w-8 '/>
                    </div>
                    <div className='text-2xl font-semibold'>10%</div>
                    <div>Yearly Growth</div>
            </div>
        </div>
        <div className='shadow-lg px-4'>
            <div className="grid grid-cols-12">
                <div className='col-span-8'>
                    <p className="font-semibold text-lg">Profits throught the years:</p>
                    <LineChart labels={labels}/>
                </div>
                <div className="col-span-4">
                    <PieChart labels={labels1}/>
                </div>
            </div>

        </div>

        </div>


    </div>
  )
}

export default dashboard