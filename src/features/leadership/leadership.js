import { React } from "react";
import { Experience } from "../experience";
import calbadminton from "../../../src/images/calbadminton.svg";
import apo from "../../../src/images/apo.png";

const CalBadminton = {
  name: "Cal Badminton",
  date: "Social Chair | May 2019 - May 2020",
  text:
    "As an avid badminton athlete, I wanted to give back to the club at Cal Badminton who helped me grow so much throughout my college experience.  My co-social chair and I planned weekly socials, four retreats, and two banquets.  It was a lot of fun to creatively think of social activities for the club to do!",
  img: calbadminton,
};
const APO = {
  name: "Alpha Phi Omega",
  date: "Webmaster, Fellowship VP Assistant | Aug 2019 - Aug 2020",
  text:
    "Alpha Phi Omega is the premiere service co-ed fraternity at UC Berkeley.  As Webmaster, I maintained an event management website for 100+ members to sign up for volunteering events, keep track of hours, and more! As Fellowship VP Assistant, I helped bring to life social activities, banquets, and retreats.",
  img: apo,
};

export function LeadershipPage() {
  return (
    <div>
      <div className="title-text middle about-title-adjust">Leadership</div>
      <div className="proj-rcreator-adjust middle ">
        <div className="proj-bottom-padding">
          <Experience {...CalBadminton} />
        </div>
        <div className="proj-bottom-padding">
          <Experience {...APO} />
        </div>
      </div>
    </div>
  );
}
