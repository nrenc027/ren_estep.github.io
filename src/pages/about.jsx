import React from "react";
import "./styles.scss";

export default () => {
  document.title = "All about Ren Estep: Creator Of Things";
  return (
    <section className="AboutPage" aria-label="About Section">
      <div className="AboutPage__card">
        <h1 className="AboutPage__card-title">About Me!</h1>
        <article>
          <p className="AboutPage__card-text">
            I am a software engineer that hails from Dayton, OH. I have recieved
            a masters and batcherlors in Fine Arts focusing on photography and
            4D media. I'm enthusiastic about learning and creative
            problem-solving. In my free time I enjoy running, drawing, creating,
            and watching Asian dramas and anime.
          </p>
          <p className="AboutPage__card-text">
            I am a co-founder of Imagine Dat, a data vis enthusiasts, with my
            co-worker and friend Milu Franz.
          </p>
        </article>
        <a
          className="AboutPage__card-link"
          href="https://www.imagine-dat.com"
          target="blank"
        >
          Find out more about Imgine Dat!
        </a>
      </div>
    </section>
  );
};
