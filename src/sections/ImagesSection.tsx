import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ImagesSectionWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  maxWidth: "100vw",
  background: "#fff",
});

const ImagesWrapper = styled(Box)({
  maxWidth: "1110px",
  paddingBottom: "100px",
  paddingLeft: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  justifyContent: "center",
});

const ImageWrapper = styled(Box)(({ theme }) => ({
  aspectRatio: "1/1",
  maxWidth: "255px",

  [theme?.breakpoints.down("sm")]: {
    maxWidth: "160px",
    padding: "0 15px",
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  cursor: "pointer",

  ":hover": {
    transform: "scale(1.2)",
    transition: "1s ease-out",
  },
});

const imagesList = ["1", "2", "3", "4", "5", "6", "7", "8"];

export const ImagesSection = () => {
  return (
    <ImagesSectionWrapper>
      <ImagesWrapper>
        {imagesList.map((item) => (
          <ImageWrapper key={item}>
            <Image src={`images/cats/img_${item}.png`} />
          </ImageWrapper>
        ))}
      </ImagesWrapper>
    </ImagesSectionWrapper>
  );
};
