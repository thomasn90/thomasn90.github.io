import React from "react";

export function AboutPage() {
  return (
    <div>
      <div className="title-text middle about-title-adjust">About</div>
      <div className="about-text-overall-box middle about-education-adjust ">
        <div className="title-text about-titles-adjust">Education</div>
        <div className="regular-text about-text-box">
          I am a senior at the{" "}
          <span className="green">University of California, Berkeley</span> with
          a major in <span className="green">Data Science</span> and a minor in{" "}
          <span className="green">Computer Science</span>. I am a lifelong
          learner and I’m always looking to challenge myself both academically
          and personally.
        </div>
      </div>
      <div className="about-text-overall-box middle about-engineering-adjust ">
        <div className="title-text about-titles-adjust">Engineering</div>
        <div className="regular-text about-text-box">
          My experience at UC Berkeley’s Data Science and Computer Science
          program has given me invaluable experience. I’ve completed school
          projects in{" "}
          <span className="green">Python, Java, C, Scheme, and SQL</span>. I’m
          also experienced with libraries such as{" "}
          <span className="green">
            NumPy, Pandas, Seaborn, Sckit-Learn, and Matplotlib
          </span>{" "}
          and have used these extensively in Data Science courses. Additionally,
          I enjoy front end development with{" "}
          <span className="green">
            ReactJS, Javascript, Typescript, CSS, and HTML
          </span>
          .
        </div>
      </div>
      <div className="about-text-overall-box middle about-volunteering-adjust ">
        <div className="title-text about-titles-adjust">Volunteering</div>
        <div className="regular-text about-text-box">
          Voluneering holds a special place in my heart and I’ve made sure to
          volunteer extensively throughout my college experience. At UC
          Berkeley, I’ve participated in voluteering events such as{" "}
          <span className="green">
            Spaghetti for Seniors, Clean Up at the Berkeley Marina, Prisoner’s
            Literature Project, and Free Photo Berkeley
          </span>
          .
        </div>
      </div>
      <div className="about-text-overall-box middle about-hobbies-adjust empty-footer">
        <div className="title-text about-titles-adjust">Hobbies</div>
        <div className="regular-text about-text-box">
          In my free time, I enjoy playing{" "}
          <span className="green">Badminton</span>, mixing music on
          <span className="green"> GarageBand</span>, and{" "}
          <span className="green">Gaming</span>. On top of that, I love to read
          and write. Some of my favorite childhood books include the Rick
          Riordan series! I have a <span className="green bold">PASSION</span>{" "}
          to create and am looking forward to building more{" "}
          <span className="green">projects </span>
          and <span className="green">applications</span> in the future.
        </div>
      </div>
      <div className="empty-box"></div>
    </div>
  );
}
