import { Carousel_002 } from "@/components/ui/skiper-ui/skiper48";

// Using the carousel component with custom images
const CustomCarousel = ({ className }) => {
  const images = [
    {
      src: "/profile-pic-2.png",
      alt: "Description 1",
    },
    {
      src: "/profile-pic-1.jpg",
      alt: "Description 2",
    },
    {
      src: "/profile-pic-3.png",
      alt: "Description 2",
    },
    {
      src: "/profile-pic-4.png",
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
