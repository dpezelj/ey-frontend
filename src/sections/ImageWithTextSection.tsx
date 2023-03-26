import { AnimationOnScroll } from "react-animation-on-scroll";
import ReactHtmlParser from "react-html-parser";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ImageWithTextSectionWrapper = styled(Box)({
  display: "flex",
  maxWidth: "100vw",
  justifyContent: "center",
});

const ImageWithTextWrapper = styled(Box)({
  maxWidth: "1110px",
  paddingBottom: "75px",
  paddingLeft: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  alignItems: "center",
});

const ContentStack = styled(Stack)(({ theme }) => ({
  alignItems: "start",
  gap: "30px",

  [theme?.breakpoints.down("xl")]: {
    padding: "0 15px",
  },

  [theme?.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "0 15px",
  },
}));

const ImageWrapper = styled(Box)({
  aspectRatio: "1/1",
  maxWidth: "445px",
});

const Image = styled("img")({
  width: "100%",
  height: "100%",
  cursor: "pointer",
});

const ArticleTitle = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  lineHeight: "42px",
  letterSpacing: "0.16px",
  color: "#2B2B2B",

  [theme?.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const ArticleDescription = styled(Typography)({
  fontSize: "20px",
  lineHeight: "30px",
  letterSpacing: "0.0888889px",
  color: "#2B2B2B",
  maxWidth: "620px",
});

type ImageWithTextSectionProps = {
  title: string;
  image: string;
  description: string;
  isImageRight: boolean;
};

export const ImageWithTextSection = ({
  title,
  image,
  description,
  isImageRight,
}: ImageWithTextSectionProps) => {
  return (
    <ImageWithTextSectionWrapper>
      <ImageWithTextWrapper>
        <ContentStack direction={isImageRight ? "row-reverse" : "row"}>
          <ImageWrapper>
            <AnimationOnScroll animateIn="animate__fadeIn" duration={1.5}>
              <Image src={image} />
            </AnimationOnScroll>
          </ImageWrapper>

          <Stack>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleDescription>
              {ReactHtmlParser(description)}
            </ArticleDescription>
          </Stack>
        </ContentStack>
      </ImageWithTextWrapper>
    </ImageWithTextSectionWrapper>
  );
};
