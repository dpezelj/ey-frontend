import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { footerItems } from "../common/footer";

const FooterSectionWrapper = styled("footer")({
  background: "#1D1D1D",
  color: "#fff",
  padding: "80px 0px",
});

const FooterItemsWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "space-around",
  width: "100%",
  paddingBottom: "40px",

  [theme?.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const FooterItemTitle = styled(Typography)({
  paddingBottom: "50px",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "36px",
  textAlign: "center",
  letterSpacing: "1.08px",
  textTransform: "uppercase",
});

const Item = styled(Box)(({ theme }) => ({
  paddingBottom: "40px",
  [theme?.breakpoints.up("md")]: {
    paddingBottom: "0",
  },
}));

const FooterItem = styled(Typography)({
  fontStyle: "normal",
  fontWeight: 200,
  fontSize: "18px",
  lineHeight: "36px",
  textAlign: "center",
  letterSpacing: "0.08px",
  cursor: "pointer",
});

const FooterCopyrightText = styled(Typography)({
  maxWidth: "920px",
  textAlign: "center",
});

export const FooterSection = () => {
  return (
    <FooterSectionWrapper>
      <Container maxWidth={false} sx={{ maxWidth: "1110px" }}>
        <Stack alignItems={"center"}>
          <FooterItemsWrapper>
            {footerItems.map((item) => (
              <Item alignItems={"center"} key={item.itemName}>
                <FooterItemTitle>{item.itemName}</FooterItemTitle>
                {item.subItems.map((item) => (
                  <FooterItem key={item}>{item}</FooterItem>
                ))}
              </Item>
            ))}
          </FooterItemsWrapper>
          <FooterCopyrightText>
            Copyright is a legal right, existing in many countries, that grants
            the creator of an original work exclusive rights to determine
            whether, and under what conditions, this original work may be used
            by others.
          </FooterCopyrightText>
        </Stack>
      </Container>
    </FooterSectionWrapper>
  );
};
