import { React } from "react";
import  home_ellpise  from "../../../src/images/home_ellipse.svg";
// import home_ellpise from "../../../src/images/home_ellpise.svg";

export function HomePage() {
  return (
    <div className="home-adjustments">
      <div className="home-page-box">
        <div className="home-page-text-box absolute">
          <div className="hello-world-text pt3">Hello, World</div>
          <hr className="left"></hr>
          <div className="home-summary-text pt3">
            My name is Thomas Nguyen, and I'm a senior at UC Berkeley and I'm
            studying Computer Science and Data Science.
          </div>
          <div className="home-summary-text py3">
            I am currently looking for a Fall 2021 New Grad Software Engineer
            position.
          </div>
          <div className="home-summary-text">Email: thomasn90@berkeley.edu</div>
        </div>
        <div className="home-profile absolute">
        <img src={home_ellpise} alt="Profile Picture" />{" "}

        </div>

      </div>
    </div>
  );
}
