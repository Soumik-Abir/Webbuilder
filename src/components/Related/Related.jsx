import React, { useEffect, useState } from "react";
import TextElement from "../TextElement/TextElement";
import RelatedCard from "../RelatedCard/RelatedCard";
import productImage from "../../assets/Product.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Related = () => {
  const relatedDeals = [
    {
      title: "Webbuilder 1",
      description: "Computer Modern classic with wix support",
      price: "$39.96",
      originalPrice: "$49.96",
      discount: "20% Off",
    },
    {
      title: "Webbuilder 2",
      description: "Computer Modern classic with wix support",
      price: "$39.96",
      originalPrice: "$49.96",
      discount: "15% Off",
    },
    {
      title: "Webbuilder 3",
      description: "Computer Modern classic with wix support",
      price: "$39.96",
      originalPrice: "$49.96",
      discount: "10% Off",
    },
    {
      title: "Webbuilder 4",
      description: "Computer Modern classic with wix support",
      price: "$39.96",
      originalPrice: "$49.96",
      discount: "10% Off",
    },
    {
      title: "Webbuilder 5",
      description: "Computer Modern classic with wix support",
      price: "$39.96",
      originalPrice: "$49.96",
      discount: "10% Off",
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const [sliderKey, setSliderKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newIsSmallScreen = window.innerWidth < 640;
      if (newIsSmallScreen !== isSmallScreen) {
        setIsSmallScreen(newIsSmallScreen);
        setSliderKey((prevKey) => prevKey + 1);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="m-8 p-8">
      <TextElement
        text="Related deals you might like for"
        className="text-3xl text-gray-800 md:text-4xl w-full md:w-2/4 mb-4 md:mb-0"
        disableHover={true}
      />
      <div className="flex justify-center mt-4">
        <div style={{ maxWidth: "800px", width: "100%" }}>
          <Slider key={sliderKey} {...sliderSettings}>
            {relatedDeals.map((deal, index) => (
              <RelatedCard
                key={index}
                productImage={productImage}
                discount={deal.discount}
                title={deal.title}
                description={deal.description}
                price={deal.price}
                originalPrice={deal.originalPrice}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Related;
