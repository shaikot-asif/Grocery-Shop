import React from "react";
import { lineSpinner } from "ldrs";

lineSpinner.register();

// Default values shown

const Loading = () => {
  return (
    <div>
      <l-line-spinner
        size="40"
        stroke="3"
        speed="1"
        color="black"
      ></l-line-spinner>
    </div>
  );
};

export default Loading;
