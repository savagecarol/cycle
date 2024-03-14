import Slider from "react-slick";

const CustomCarousel = ({ slides }) => {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    
    return (
        <div className="mx-32 slider-container mt-4">
            <Slider {...settings}> 
                {slides.map((s, index) => (
                    <div key={index} className=" rounded-lg overflow-hidden"> 
                    <img 
    src={s["url"]} 
    alt={`Slide ${index}`}  
    className="h-96 w-full object-cover object-center  rounded-lg "
/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CustomCarousel;
