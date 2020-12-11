import { React } from "react";
import { Experience } from "../experience";
import rcreator from "../../../src/images/rcreator.svg";
import datastory from "../../../src/images/datastory.png";
import wispr from "../../../src/images/wispr.png";
import pacman from "../../../src/images/pacman.svg";
import gitlet from "../../../src/images/gitlet.svg";

const RCreator = {
  name: "RCreator",
  date: "June 2020 - November 2020",
  text:
    "RCreator is a platform meant to simplify the process of hosting, managing, and judging contests.  On this project, I used AWS Cognito to authentify users, but mostly focused on the front-end web development using ReactTs, Typescript, Javascript, CSS, and HTML.  My team and I interviewed for YCombinator W2021!",
  img: rcreator,
};
const DataStory = {
  name: "Data Story",
  date: "August 2020 - December 2020",
  text:
    "Data Story is a data science consulting club at UC Berkeley.  My team and I used Python, Pandas, NumPy, etc. to create a prediction model over 1000+ data points.  We created several RandomForestRegressor models, clustered our merged data sets, and developed risk groups based on the observed data.",
  img: datastory,
};
const Wispr = {
  name: "Wispr",
  date: "November 2020",
  text:
    "Wispr is an online chat application built using ReactJS and hosted on Firebase.  It stores user chat messages using Firebase’s Firestore and authenticates using Firebase auth.  Additionally, it checks for profanity and automatically bans users who used profanity.",
  img: wispr,
};
const Pacman = {
  name: "Multi-Agent Search (Pacman)",
  date: "February 2020",
  text:
    "Multi-Agent Search is one of the projects assigned in UC Berkeley’s class on Artificial Intelligence.  Using Python, I implemented different AI algorithms such as minimax,  expectimax, and alpha-beta pruning.  These algorithms were used to dictate the decision making of Pacman and the ghosts.",
  img: pacman,
};
const Gitlet = {
  name: "Gitlet",
  date: "November 2019",
  text:
    "Gitlet is a miniature git version control system in Java.  It was the final project of UC Berkeley’s class on Data Structures.  I utilized hashmaps to store user commits, branches, and current changes.  Additionally, this project is capable of merging branches and viewing user history of backup branches.",
  img: gitlet,
};

export function ProjectsPage() {
  return (
    <div>
      <div className="title-text middle about-title-adjust">Projects</div>
      <div className="proj-rcreator-adjust middle ">
        <div className="proj-bottom-padding">
          <Experience {...RCreator} />
        </div>
        <div className="proj-bottom-padding">
          <Experience {...DataStory} />
        </div>
        <div className="proj-bottom-padding">
          <Experience {...Wispr} />
        </div>
        <div className="proj-bottom-padding">
          <Experience {...Pacman} />
        </div>
        <div className="proj-bottom-padding">
          <Experience {...Gitlet} />
        </div>
      </div>
    </div>
  );
}
