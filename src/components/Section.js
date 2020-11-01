import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = function(props) {
  return (
    <section className={`section section_${props.name}`}>
      <h2 className="section__title">{props.title}</h2>
      {props.children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.object
}

export default Section;
