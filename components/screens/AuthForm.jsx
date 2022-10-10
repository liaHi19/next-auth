import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";

import { Typography, Box } from "@mui/material";
import { registerSchema, loginSchema } from "../../helpers/authSchema";
import { useDialog } from "../../context/DialogContext";
import { registerUser } from "../../axios/auth-functions";

import FormContainer from "../ui/FormContainer";
import Input from "../ui/Input";
import ShowPassword from "../ui/elements/ShowPassword";
import MainButton from "../ui/MainButton";

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isLogin, handleAuth } = useDialog();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(isLogin ? loginSchema : registerSchema),
  });

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    const { email, password } = data;
    delete data.confirmPassword;
    isLogin
      ? await signIn("credentials", { redirect: false, email, password })
      : await registerUser(data);

    reset();
  };
  return (
    <FormContainer>
      <Box
        component="form"
        sx={{ width: "100%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          {`${isLogin ? "Login" : "Register"} to the Next Auth`}
        </Typography>
        {!isLogin && (
          <>
            <Input
              name="firstName"
              {...register("firstName")}
              label="First Name"
              errorText={errors?.firstName?.message}
            />
            <Input
              name="lastName"
              {...register("lastName")}
              label="Last Name"
              errorText={errors?.lastName?.message}
            />
          </>
        )}
        <Input
          name="email"
          {...register("email")}
          label="Email"
          type="email"
          errorText={errors?.email?.message}
        />
        <Input
          name="password"
          {...register("password")}
          label="Password"
          type={showPassword ? "text" : "password"}
          errorText={errors?.password?.message}
          InputProps={{
            endAdornment: (
              <ShowPassword
                password={showPassword}
                onClick={handleShowPassword}
              />
            ),
          }}
        />
        {!isLogin && (
          <Input
            name="confirmPassword"
            {...register("confirmPassword")}
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            errorText={errors?.confirmPassword?.message}
            InputProps={{
              endAdornment: (
                <ShowPassword
                  password={showConfirmPassword}
                  onClick={handleShowConfirmPassword}
                />
              ),
            }}
          />
        )}
        <Box
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
        >
          <MainButton
            type="submit"
            disabled={!isDirty || !isValid}
            sx={{
              color: "purple",
              transition: "0.3s ease-in-out",
              "&:hover": {
                color: "indigo",
              },
            }}
          >{`${isLogin ? "Login" : "Register"}`}</MainButton>
        </Box>
      </Box>
      <Box
        onClick={handleAuth}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          sx={{
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            margin: "10px auto",
            padding: "0px 5px 5px",
            color: "indigo",
            transition: "0.3s ease-in-out",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: "0px",
              left: "0px",
              right: "0px",
              height: "2px",
              backgroundColor: "indigo",
            },

            "&:hover": { color: "purple" },
            "&:hover:after": {
              transition: "0.3s ease-in-out",
              backgroundColor: "purple",
            },
          }}
          variant="body1"
        >{`${
          isLogin ? "Don't have an account?" : "Have an account already?"
        }`}</Typography>
      </Box>
    </FormContainer>
  );
};

export default AuthForm;
