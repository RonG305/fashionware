import { headerLinks } from "../../public/headerLinks"

const Header = () => {
    const headerstyles = {
        h3: 'font-bold text-3xl'
    }
    return (
        <div className=" bg-gray-100 py-4">
            <div className=" flex items-center justify-between md:w-[80%]  m-auto">
                <div>
                    <h3 className={headerstyles.h3}>FashionWare</h3>
                </div>
                <div className=" flex gap-3">
                    {headerLinks.map((link) => (
                        <p>{link.name}</p>
                    ))}
                </div>
            </div>
            
            
        </div>
    )
}


export default Header