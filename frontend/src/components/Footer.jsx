const links = [
    {
        name: 'company',
        url: '/company'
    },

    {
        name: 'offices',
        url: '/offices'
    },

    {
        name: 'products',
        url: '/products'
    },

    {
        name: 'about',
        url: '/about'
    }
]


const Footer = () => {
    return (
        <div className=" h-[30vh] bg-slate-200 mt-4 ">
            <div className="md:w-[85%] md:m-auto px-5 my-5 flex text-center flex-col items-center justify-center h-full">
            <h2 className=" font-bold text-3xl">FashionWare</h2>
            <p className=" py-4">copyright&copy;2024</p>
            <div className=" flex items-center justify-between gap-4 ">
                  {links.map((link) => (
                      <p>{link.name}</p>
                  ))}
            </div>
            </div>
          
        
        </div>
    )
}


export default Footer