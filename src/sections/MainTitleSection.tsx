import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const MainTitleSectionWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  maxWidth: "100vw",
});

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "58px",
  lineHeight: "68px",
  letterSpacing: "0.257778px",

  [theme?.breakpoints.down("md")]: {
    textAlign: "center",
    fontSize: "48px",
    lineHeight: "53px",
  },
}));

type MainTitleSectionProps = {
  title: string;
};
export const MainTitleSection = ({ title }: MainTitleSectionProps) => {
  return (
    <MainTitleSectionWrapper>
      <Title>{title}</Title>
    </MainTitleSectionWrapper>
  );
};
