import React from "react";
import SectionTopText from "../../../../components/shared/SectionTopText";
import Heading2 from "../../../../components/shared/Heading2";
import Paragraph1 from "../../../../components/shared/Paragraph1";

const SectionTop = ({
  text,
  hText,
  pText,
  hClasses,
  pClasses,
  textClasses,
}) => {
  return (
    <div>
      <SectionTopText
        text={text}
        classes={`${textClasses} inline-block m-auto text-center mb-[16px]`}
      />

      <Heading2 classes={`${hClasses}`} text={hText} />

      <Paragraph1
        classes={`${pClasses} w-full md:w-[450px] m-auto mt-[16px]`}
        text={pText}
      />
    </div>
  );
};

export default SectionTop;
