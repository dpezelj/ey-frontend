import { styled } from "@mui/system";

const HeroImageWrapper = styled("div")({
  maxWwidth: "100vw",
  aspectRatio: "1440/418",
});

const HeroImage = styled("img")({
  background: "url('images/headline_image.jpg') no-repeat center/cover",
  width: "100%",
  height: "100%",
  minHeight: "200px",
  border: "0",
});

export const HeroSection = () => {
  return (
    <HeroImageWrapper>
      <HeroImage />
    </HeroImageWrapper>
  );
};
