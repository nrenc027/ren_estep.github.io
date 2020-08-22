import React from "react";
import "./styles.scss";

export default () => {
  document.title = "The Resume of Ren Estep: Creator Of Things";

  return (
    <section className="ResumePage" aria-label="Resume Section">
      <div className="ResumePage__card">
        <h1 className="ResumePage__card-title">
          I've Got Skills.
          {/* Education */}
        </h1>
        <span>
          <article>
            <h2 className="ResumePage__card-head">Learn-ed</h2>
            <dl className="ResumePage__card-text">
              <dt>Web Cert</dt>
              <dd>2018 - FreeCodeCamp</dd>
              <dt>MFA</dt>
              <dd>2012 - University of Tennessee</dd>
              <dt>BFA</dt>
              <dd>2008 - Wright State University</dd>
            </dl>
            <h2 className="ResumePage__card-text">
              (́ง◉◞౪◟◉‵)ง
              {/* Skills */}
            </h2>
          </article>
          <article></article>
        </span>
      </div>
    </section>
  );
};
