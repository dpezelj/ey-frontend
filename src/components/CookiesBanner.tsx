import { useCookies } from "react-cookie";
import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CookiesBannerWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  right: 0,
  margin: "0 2rem 2rem 0",
  width: "25rem",
  height: "auto",
  background: "#ededed",
  animation: "dialogAnim .5s ease-out forwards",

  [theme?.breakpoints.down("sm")]: {
    margin: 0,
    width: "100%",
  },
}));

const CookiesBannerContainer = styled(Stack)({
  padding: "2rem",
});

const BannerTitle = styled(Typography)({
  fontSize: "20px",
});

const BannerBody = styled(Typography)({
  fontSize: "16px",
});

const BannerControl = styled(Stack)(({ theme }) => ({
  flexDirection: "row",

  [theme?.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "1rem",
  },
}));

type CookiesBannerProps = {
  isBanner: boolean;
  setIsBanner(state: boolean): void;
};

export const CookiesBanner = ({
  isBanner,
  setIsBanner,
}: CookiesBannerProps) => {
  const [cookies, setCookie] = useCookies(["allow_cookies"]);

  const handleAcceptCookie = () => {
    setCookie("allow_cookies", true);
    setIsBanner(false);
  };

  const handleDeclineCookie = () => {
    setCookie("allow_cookies", false);
    setIsBanner(false);
  };

  return (
    <CookiesBannerWrapper sx={{ display: isBanner ? "flex" : "none" }}>
      <CookiesBannerContainer gap={2}>
        <BannerTitle>We use Cookies!</BannerTitle>
        <BannerBody>
          Cats have been domesticated for around 4,000 years. While they were
          once valued for their hunting abilities, they are now valued for their
          companionship and loving behaviour.
        </BannerBody>
        <BannerControl flexDirection={"row"} justifyContent={"space-between"}>
          <Button variant={"outlined"} onClick={handleAcceptCookie}>
            Accept Cookies
          </Button>
          <Button variant={"outlined"} onClick={handleDeclineCookie}>
            Decline Cookies
          </Button>
        </BannerControl>
      </CookiesBannerContainer>
    </CookiesBannerWrapper>
  );
};
