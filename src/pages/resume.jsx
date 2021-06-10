import React from "react";
import "./styles.scss";

const ResumePage =() => {
  document.title = "The Resume of Ren Estep: Creator Of Things";

  return (
    <section className="ResumePage" aria-label="Resume Section">
      <div className="ResumePage__card">
        <h1 className="ResumePage__card-title">
          I've Got Skills.
        </h1>
        <span className="ResumePage__card-skills" tabindex="0">
          <article>
            <h2 className="ResumePage__card-head">
              I'm Learn-ed <br />
              with a sense of humor
            </h2>
            <dl className="ResumePage__card-text">
              <dt>Web Dev Cert</dt>
              <dd>2018 : FreeCodeCamp</dd>
              <dt>MFA</dt>
              <dd>2012 : University of Tennessee</dd>
              <dt>BFA</dt>
              <dd>2008 : Wright State University</dd>
            </dl>
            <h2 className="ResumePage__card-head">I've got experience</h2>
            <dl className="ResumePage__card-text">
              <dt>Software Engineer</dt>
              <dd>2017 - present : Mile Two</dd>
              <dt>Frontend Developer and Designer</dt>
              <dd>2017 : MRS Electronic</dd>
              <dt>Manager of Marketing And Creative Services</dt>
              <dd>2016 - 2017 : MRS Electronic</dd>
            </dl>
          </article>
          <article>
            <h2 className="ResumePage__card-head">Practiced Technologies </h2>
            <dl className="ResumePage__card-text">
              <dt>Javascript Frameworks and Libraries</dt>
              <dd>React</dd>
              <dd>Vue</dd>
              <dd>Node</dd>
              <dd>d3</dd>
              <dt>CSS Preprocessors</dt>
              <dd>Sass</dd>
              <dt>Other</dt>
              <dd>Git version control</dd>
              <dd>Python</dd>
            </dl>
          </article>
        </span>
      </div>
    </section>
  );
};

export default ResumePage;
