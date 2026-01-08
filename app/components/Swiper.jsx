import { Carousel_002 } from "@/components/ui/skiper-ui/skiper48";

// Using the carousel component with custom images
const CustomCarousel = ({ className }) => {
  const images = [
    {
      src: "/port-item1.jpg",
      alt: "Description 1",
    },
    {
      src: "/port-item2.jpg",
      alt: "Description 2",
    },
    {
      src: "/port-item1.jpg",
      alt: "Description 2",
    },
    {
      src: "/port-item2.jpg",
      alt: "Description 1",
    },
  ];

  return (
    <Carousel_002
      images={images}
      showPagination={false}
      showNavigation={false}
      loop={true}
      autoplay={false}
      spaceBetween={40}
    />
  );
};
export default CustomCarousel;
