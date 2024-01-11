import { categoriesData } from "../assets/categoriesData/categoryData"

const Categories = () => {
    return (
        <div className="md:w-[85%] md:m-auto px-2 my-5">
            <h3 className=" font-bold md:text-3xl text-2xl my-4">Categories</h3>
            <div className=" flex items-center justify-between  md:gap-2 gap-1 relative">
                {categoriesData.map((category, index) => (
                    <div className=" w-1/4">
                    <img src={category.imgUrl} alt="card image" key={index} />
                    <p className=" font-bold">{category.categoryName}</p>
                    </div>
                ))}
                
            </div>
           
        </div>
    )
}


export default Categories