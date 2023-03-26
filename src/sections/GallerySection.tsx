import { Carousel } from "react-responsive-carousel";
import { styled } from "@mui/system";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = ["images/dog.png", "images/dog.png", "images/dog.png"];

const GallerySectionWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  padding: "0 0 150px 0",
  background: "white",
});

const CarouselWrapper = styled("div")({
  maxWidth: "1440px",
});

const PrevButton = styled("button")({
  position: "absolute",
  width: "70px",
  height: "50px",
  bottom: "-6rem",
  left: "30%",
  border: "none",
  background: "url('images/arrow-left.svg') no-repeat",
  cursor: "pointer",
});

const NextButton = styled("button")({
  position: "absolute",
  width: "70px",
  height: "50px",
  bottom: "-6rem",
  right: "30%",
  border: "none",
  background: "url('images/arrow-right.svg') no-repeat",
  cursor: "pointer",
});

const ImageWrapper = styled("div")({
  marginRight: "30px",
});

export const GallerySection = () => {
  return (
    <GallerySectionWrapper>
      <CarouselWrapper>
        <Carousel
          autoFocus
          autoPlay={false}
          centerMode
          selectedItem={1}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={true}
          centerSlidePercentage={50}
          renderArrowNext={(clickHandler) => (
            <NextButton onClick={clickHandler} />
          )}
          renderArrowPrev={(clickHandler) => (
            <PrevButton onClick={clickHandler} />
          )}
        >
          {images.map((item) => (
            <ImageWrapper key={item}>
              <img alt="" src={item} />
            </ImageWrapper>
          ))}
        </Carousel>
      </CarouselWrapper>
    </GallerySectionWrapper>
  );
};
