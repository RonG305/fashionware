import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ShoeCard = () => {
    return (
        
        <div className=" bg-purple-800 rounded w-full md:h-[60vh] p-4 md:flex items-center justify-center ">
            <div className=" md:w-1/2">
                <h3 className=" font-bold md:text-4xl text-3xl my-2">Stride in Style</h3>
                <h3
                    className=" md:text-3xl font-bold text-white "
                > Discover Top Sneaker Picks for Unmatched Comfort and Trendsetting Looks!</h3>
                <button className=" rounded-md bg-[#73295f] px-3 py-1 text-white mt-3">shop now</button>
            </div>

            <div>
                <img src="../../public/images/Jordan4.png" alt="" />
            </div>
        </div>
        
    )
}

const MenTrouserCard = () => {
    return (
        <div className=" bg-orange-400 rounded w-full md:h-[60vh] p-4 md:flex items-center justify-center ">
        <div className=" md:w-1/2">
            <h3 className=" font-bold md:text-4xl text-3xl my-2">Power Your Style</h3>
            <h3
                className=" md:text-3xl font-bold text-white "
            >
            Dominate Every Look with Cutting-Edge Men's Fashion Essentials!</h3>
            <button className=" rounded-md bg-[#73295f] px-3 py-1 text-white mt-3">shop now</button>
        </div>

        <div>
            <img src="../../public/images/trouser6.png" alt="" />
        </div>
    </div>
    )
}


const WomenTrouserCard = () => {
    return (
        <div className=" bg-blue-300 rounded w-full md:h-[60vh] p-4 md:flex items-center justify-center ">
            <div className=" md:w-1/2">
                <h3 className=" font-bold md:text-4xl text-3xl my-2">Flaunt Your Style</h3>
                <h3
                    className=" md:text-3xl font-bold text-white "
                >Embrace Comfort and Chic with the Perfect Women's Trousers Collection!</h3>
                <button className=" rounded-md bg-[#73295f] px-3 py-1 text-white mt-3">shop now</button>
            </div>

            <div>
                <img src="../../public/images/women.png" alt="" />
            </div>
        </div>
    )
}


const MenShirtCard = () => {
    return (
        <div className=" bg-[#C0C0C0] rounded w-full md:h-[60vh] p-4 md:flex items-center justify-center ">
            <div className=" md:w-1/2">
                <h3 className=" font-bold md:text-4xl text-3xl my-2">Master Casual Cool</h3>
                <h3
                    className=" md:text-3xl font-bold text-white "
                >  Elevate Your Wardrobe with Essential Shirts for Every Occasion!</h3>
                <button className=" rounded-md bg-[#73295f] px-3 py-1 text-white mt-3">shop now</button>
            </div>

            <div>
                <img src="../../public/images/shirt2.png" alt="" />
            </div>
        </div>
    )
}


const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }


    return (
        <div>
            <div className=" md:w-[85%] md:m-auto px-2">
                <Slider {...settings}>
                    <div>
                        <ShoeCard />
                    </div>
                    <div>
                        <MenTrouserCard />
                    </div>
                    <div>
                        <WomenTrouserCard />
                    </div>
                    <div>
                        <MenShirtCard />
                    </div>
                </Slider>
            </div>
           
        </div>
    )
}


export default Hero