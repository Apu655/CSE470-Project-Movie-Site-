import React from 'react'
import Header from '../components/Header'

type Props = {}

const products = (props: Props) => {
  return (
    <div>
        <Header/>
        <div className="max-w-7xl mx-auto grid grid-cols-3">
            <div className="col-span-1">
                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <span className="text-gray-400 mr-3 uppercase text-xs">JAMBO</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Monthly Subscription</p>
                        <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$Free</p>
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg></div>
                        </div>
                    </div>
                    </a>
                    <div className="p-2 text-gray-600 font-thin text-sm">
                        <p>1. See movies for 30 days only</p>
                        <p>2. 1 Screens at the a time</p>
                        <p>3. No Notifications</p>

                    </div>
                    <button className="bg-red-500 rounded p-4 w-full">Purchase</button>
                </div>
            </div>

            <div>
                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <span className="text-gray-400 mr-3 uppercase text-xs">JAMBO</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Monthly Subscription</p>
                        <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29</p>
                        </del>
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg></div>
                        </div>
                    </div>
                    </a>
                    <div className="p-2 text-gray-600 font-thin text-sm">
                        <p>1. See Unlimited Movies</p>
                        <p>2. 5 Screens at the same time</p>
                        <p>3. Latest movie updates and notifications</p>
                    </div>
                    <button className="bg-red-500 rounded p-4 w-full">Purchase</button>
                </div>
            </div>

            <div>
                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <span className="text-gray-400 mr-3 uppercase text-xs">JAMBO</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Yeary Subscription</p>
                        <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                        </del>
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg></div>
                        </div>
                    </div>
                    </a>
                    <div className="p-2 text-gray-600 font-thin text-sm">
                        <p>1. See Unlimited Movies throughout the year</p>
                        <p>2. 5 Screens at the same time</p>
                        <p>3. Latest movie updates and notifications</p>
                    </div>
                    <button className="bg-red-500 rounded p-4 w-full">Purchase</button>
                </div>
            </div>
        
         </div>
    </div>
  )
}

export default products