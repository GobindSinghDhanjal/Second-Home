import { CircularProgress } from "@mui/material";
import React from "react";

function LoadingProgress() {
  return (
    <div className="m-md-7 p-md-7 pt-7 pb-7 text-center">
      <CircularProgress />
    </div>
  );
}

export default LoadingProgress;
