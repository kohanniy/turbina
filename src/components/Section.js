import React from 'react';

const Section = function({name, title, children}) {
  return (
    <section className={`section section_type_${name}`}>
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
