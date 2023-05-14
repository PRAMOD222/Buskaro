import React from 'react'
import { useState } from 'react';


const trackBus = () => {
  let routeArr = []
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [route, setroute] = useState("test");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [service, setservice] = useState();


  const searchBus = async () => {
    let routes = await fetch('http://localhost:3000/api/routes')
    let routejson = await routes.json()
    let obj = routejson.allroute;
    for (let i = 0; i < obj.length; i++) {
      routeArr[i] = obj[i].aroute;
      // console.log(obj[i].aroute);
    }
    console.log(routeArr);

    if (routeArr.includes(route.toLowerCase())) {
      setservice(true)
    }
    else {
      setservice(false)
    }
  }
  const gpsloc = async () => {
    let loc = await fetch('http://192.168.227.153/',{ mode: 'no-cors'})
    console.log(loc);
    
  }
  const onChangeRoute = (e) => {
    setroute(e.target.value)
  }
  return (
    <div>
      <h1 className='text-center font-bold text-2xl'>Track Your Bus</h1>

      <div className="flex justify-center mt-5">
        <input onChange={onChangeRoute} placeholder='Enter your Route' type="text" id="name" name="name" className=" mx-3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <button onClick={searchBus} className="text-white mx-3 bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Search</button>
      </div>
      <div className='flex justify-center'>
        {(!service && service != null) && <div className="text-red-700 text-sm mt-3">
          Sorry! This route is not available yet
        </div>}

        {service == null && <div className="text-blue-700 text-sm mt-3">
          Enter a route
        </div>}

        {(service && service != null) && <div className="text-green-700 text-sm mt-3">
          Yay! This route is available
        </div>}
      </div>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Time Table</h1>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">From</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">TO</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Time</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3"></td>
            <td className="px-4 py-3">Kolhapur</td>
            <td className="px-4 py-3">02:00 PM</td>
            <td className="px-4 py-3 text-lg text-gray-900">90 ₹</td>
            <td className="w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">Gadhinglaj</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">Kolhapur</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">02:30 PM</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">90 ₹</td>
            <td className="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">Gadhinglaj</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">Kolhapur</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">03:00 PM</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">90 ₹</td>
            <td className="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Gadhinglaj</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Kolhapur</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">03:30 PM</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">90 ₹</td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <a className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">Payment Options
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Next</button>
    </div>
  </div>
</section>

    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default trackBus

