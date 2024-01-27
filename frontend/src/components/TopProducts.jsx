import React from 'react'
import { topProducts } from '../assets/TopProductsData'
import TopProductsCard from './TopProductsCard'




const TopProducts = () => {
  return (
    <div className='md:w-[85%] md:m-auto px-2 my-5 '>
        <h3 className=" font-bold md:text-3xl text-2xl my-4">Top Products</h3>
        <div className='md:grid grid-cols-4 gap-1'>
          {topProducts.map((product, index) => (
            <div key={index}>
                <div className=" rounded-md bg-slate-200  p-4  ">
                <img src={product.imageUrl} alt={product.productName} />

                <div className=" flex items-center justify-between">
                    <div>
                    <p className=" line-clamp-2">{product.productDescription}</p>
                    <p className=" font-bold">Kshs {product.productPrice}</p>
                    </div>
                    
                    <button className=" bg-orange-400 rounded-md px-5 py-1 font-bold text-white">Buy</button>
                </div>
                
            </div>
            </div>
          ))}
        </div>
        
        
    </div>
  )
}


export default TopProducts