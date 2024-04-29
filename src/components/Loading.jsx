import React from "react";
import { Oval } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex items-center justify-center  h-full">
      <Oval color="gray" secondaryColor="red" height={40} width={40} />
    </div>
  );
}

export default Loading;
