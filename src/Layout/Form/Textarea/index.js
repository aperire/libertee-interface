import React from "react";
import TextareaWrapper from "./Textarea.style";

const Textarea = ({ ...props }) => {
  return (
    <TextareaWrapper>
      <textarea {...props} />
    </TextareaWrapper>
  );
};

export default Textarea;
