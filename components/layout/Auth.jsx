import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { CircularProgress, Box } from "@mui/material";

const Auth = ({ children }) => {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth");
    },
  });

  if (status === "loading") {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          direction: "column",
          minHeight: "calc(100vh - 130px)",
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return children;
};

export default Auth;
