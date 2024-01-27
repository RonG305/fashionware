const TopProductsCard = ({product}) => {

    
   
    return (
        <div>
            <div className=" rounded-md bg-slate-200  p-4  ">
                <img src="/images/Jordan4.png" alt="jordan 4" />

                <div className=" flex items-center justify-between">
                    <div>
                    <p className=" line-clamp-2">productDescription</p>
                    <p className=" font-bold">Kshs productPrice</p>
                    </div>
                    
                    <button className=" bg-orange-400 rounded-md px-5 py-1 font-bold text-white">Buy</button>
                </div>
                
            </div>

        </div>
    )
}

export default TopProductsCard