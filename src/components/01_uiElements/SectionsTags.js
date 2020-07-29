import React, { Fragment } from "react";

import SectionTag from "./SectionTag"

const SectionsTags = () => {
  return (
    <div className="sections-tags">
      <div className="sections-tags_mobil">
        <SectionTag title='جميع الاقسام' />
      </div>
      <div className="hide-mobile">
        <SectionTag title='قسم الخرافات' />
        <SectionTag title='قسم التعريفات' />
        <SectionTag title='قسم الاساسيات' />
        <SectionTag title='قسم العبادات' />
      </div>
    </div>
  );
};

export default SectionsTags;
