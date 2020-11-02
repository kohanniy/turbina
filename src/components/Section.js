import React from 'react';

const Section = function(props) {
  return (
    <section className={`section section_type_${props.name}`}>
      <h2 className="section__title">{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
