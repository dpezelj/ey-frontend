import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import { styled } from "@mui/system";

import { contactUsSendButton } from "../common/constants";
import {
  animalsList,
  emailRules,
  nameRules,
  selectRules,
} from "../common/form";
import { ContactUsModal } from "../components/ContactUsModal";

const ContactUsSectionWrapper = styled(Box)({
  display: "flex",
  maxWidth: "100vw",
  justifyContent: "center",
});

const ContactUsWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "1110px",
  width: "100%",
  paddingBottom: "75px",
  paddingLeft: 0,
  display: "flex",
  gap: "30px",
  justifyContent: "space-between",
  flexDirection: "row",

  [theme?.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
    gap: "60px",
  },
}));

const Image = styled("img")({
  width: "100%",
});

const FormWrapper = styled(Stack)({
  maxWidth: "400px",
  width: "90dvw",
});

const ImageWrapper = styled(Stack)({
  flex: 1,
});

const FormContainer = styled(Stack)({
  flex: 1,
  alignItems: "center",
});

export const ContactUsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", selectAnimal: "" },
    mode: "onChange",
  });

  const onSubmitHandler: SubmitHandler<any> = () => {
    if (Object.keys(errors).length === 0) {
      setIsModalOpen(true);
    }
  };

  return (
    <ContactUsSectionWrapper>
      <ContactUsWrapper>
        <ImageWrapper>
          <Image src="images/contact_us.svg" />
        </ImageWrapper>
        <FormContainer>
          <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmitHandler)}
            autoComplete="off"
          >
            <FormWrapper gap={2}>
              <Controller
                name="name"
                control={control}
                rules={nameRules}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    value={value}
                    variant="outlined"
                    label="Name"
                    type="text"
                    onChange={onChange}
                    helperText={errors.name?.message || " "}
                    error={!!errors.name}
                    sx={{ input: { color: "#000" } }}
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                rules={emailRules}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    value={value}
                    variant="outlined"
                    label="E-mail"
                    type="email"
                    onChange={onChange}
                    helperText={errors.email?.message || " "}
                    error={!!errors.email}
                    sx={{ input: { color: "#000" } }}
                  />
                )}
              />

              <Controller
                name="selectAnimal"
                control={control}
                rules={selectRules}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    select
                    label="Select"
                    defaultValue=""
                    onChange={onChange}
                    value={value}
                    helperText={errors.selectAnimal?.message || " "}
                    error={!!errors.selectAnimal}
                  >
                    {animalsList.map((animal) => (
                      <MenuItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />

              <Button type={"submit"} variant={"outlined"}>
                {contactUsSendButton}
              </Button>
            </FormWrapper>
          </Box>
        </FormContainer>
      </ContactUsWrapper>
      <ContactUsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </ContactUsSectionWrapper>
  );
};
