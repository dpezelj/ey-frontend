import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { articlesList } from "./common/articles";
import { contactUsTitle, galleryTitle, heroTitle } from "./common/constants";
import { CookiesBanner } from "./components/CookiesBanner";
import { ContactUsSection } from "./sections/ContactUsSection";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { ImagesSection } from "./sections/ImagesSection";
import { ImageWithTextSection } from "./sections/ImageWithTextSection";
import { MainTitleSection } from "./sections/MainTitleSection";

const MainTitleSectionWrapper = styled(Box)(({ theme }) => ({
  paddingTop: "112px",
  paddingBottom: "100px",

  [theme?.breakpoints.down("md")]: {
    padding: "40px 0",
  },
}));

export const App = () => {
  const [cookies] = useCookies(["allow_cookies"]);
  const [isBanner, setIsBanner] = useState(false);

  useEffect(() => {
    Object.keys(cookies).length === 0 || cookies.allow_cookies === false
      ? setIsBanner(true)
      : setIsBanner(false);
  }, [cookies]);

  return (
    <>
      <HeroSection />
      <MainTitleSectionWrapper>
        <MainTitleSection title={heroTitle} />
      </MainTitleSectionWrapper>

      {articlesList.map((item) => (
        <ImageWithTextSection
          title={item.title}
          image={item.imgSrc}
          description={item.description}
          isImageRight={item.isImageRight}
          key={item.title}
        />
      ))}

      <Box sx={{ py: "74px", background: "#fff" }}>
        <MainTitleSection title={galleryTitle} />
      </Box>

      <GallerySection />
      <ImagesSection />

      <Box sx={{ py: "74px" }}>
        <MainTitleSection title={contactUsTitle} />
      </Box>
      <ContactUsSection />
      <CookiesBanner isBanner={isBanner} setIsBanner={setIsBanner} />
      <FooterSection />
    </>
  );
};
