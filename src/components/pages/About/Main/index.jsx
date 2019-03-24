import React, {Component} from "react";
import react from "../../../../assets/react.png";
import aws from "../../../../assets/aws.png";
import django from "../../../../assets/django.png";
import git from "../../../../assets/git.png";
import github from "../../../../assets/github.png";
import postman from "../../../../assets/postman.png";
import sass from "../../../../assets/sass.png";
import vscode from "../../../../assets/vscode.png";
import vue from "../../../../assets/vue.png";
import profile from "../../../../assets/profile.jpeg";

import "./index.scss";
class About extends Component {
  render() {
    return (
      <>
        <div className="about">
          <div className="intro">
            <h2>Profile</h2>
            <div className="info_about_me">
              <div className="info_column">
                <div className="profile_pic">
                  <img src={profile} alt="" />
                </div>
                <p>Name: Reo Ishiyama</p>
                <p>Birthday: 1997/7/27</p>
                <p>Language: 日本語,英語</p>
                <p>Strength: 超ポジティブ </p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills_titile">
          <h2>Skills&Tools</h2>
        </div>
        <div className="skills">
          <div className="skill-icon">
            <img src={vscode} alt="" />
          </div>
          <div className="skill-icon">
            <img src={sass} alt="" />
          </div>
          <div className="skill-icon">
            <img src={vue} alt="" />
          </div>
          <div className="skill-icon">
            <img src={git} alt="" />
          </div>
          <div className="skill-icon">
            <img src={github} alt="" />
          </div>
          <div className="skill-icon">
            <img src={react} alt="" />
          </div>
          <div className="skill-icon">
            <img src={django} alt="" />
          </div>
          <div className="skill-icon">
            <img src={aws} alt="" />
          </div>
          <div className="skill-icon">
            <img src={postman} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default About;
