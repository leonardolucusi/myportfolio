import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="main-grid">
      <div className="grid-1">
        <div className="parent-div-grid-1">
          <div>Hi,</div>
          <div>I'm Leo,</div>
          <div>Front-End Developer.</div>
        </div>
      </div>

      <div className="grid-2">
        <div className="parent-div-grid-2">
          <div className="text-1-grid-2">Hi! I'm <span className="text-1-Leo-grid-2">Leonardo Lucusi</span>.</div>
          <div className="text-2-grid-2">
            I've been passionate about technology and programming since I was 13
            years old. I am self-taught, flexible and always looking to acquire
            new knowledge and stay connected with the best practices and
            technologies in the market.
          </div>
        </div>
      </div>

      <div className="grid-3">
        <div className="parent-div-grid-3">
          <div className="design-div-grid-3">
            <div className="parent-text-width-design-grid-3">
              <div className="text-title-grid-3">Designer</div> I value simple
              content structure, clean design patterns and thoughtful
              interactions
            </div>
            <div>
              <div className="text-title-grid-3">Things I enjoy designing:</div>
              Logos
            </div>
            <div>
              <div className="text-title-grid-3">Design Tools:</div> Figma
              FontAwesome AdobePhotoshop Aseprite
            </div>
          </div>
          <div className="front-div-grid-3">
            <div className="parent-text-width-design-grid-3">
              <div className="text-title-grid-3">Frontend Developer</div> I like
              to code things from scratch and enjoy bringing ideas to life in
              the browser
            </div>
            <div>
              <div className="text-title-grid-3">Languages I speak:</div> HTML,
              CSS, Sass, Git, JS
            </div>
            <div>
              <div className="text-title-grid-3 text-title-DevTools-grid-3-fix">
                Dev Tools:
              </div>
              VSCode Github Bootstrap Terminal
            </div>
          </div>
        </div>
      </div>

      <div className="grid-4">
        <div className="parent-div-grid-4">
          <div className="text-title-1-grid-4">
            <div>My Projects</div>
            <a target="_blank" href="https://github.com/leonardolucusi">
              <img
                className="img-github"
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
              />
            </a>
          </div>
          <div className="projects-style-grid-4">
            COMING SOON
            <a href="#">
              <img src="" />
            </a>
          </div>
          <div className="projects-style-grid-4">
            COMING SOON
            <a href="#">
              <img src="" />
            </a>
          </div>
          <div className="projects-style-grid-4">
            COMING SOON
            <a href="#">
              <img src="" />
            </a>
          </div>
          <div className="projects-style-grid-4">
            COMING SOON
            <a href="#">
              <img src="" />
            </a>
          </div>
          <div className="projects-style-grid-4">
            COMING SOON
            <a href="#">
              <img src="" />
            </a>
          </div>
          <div className="projects-style-grid-4">
            COMING SOON
            <a href="#">
              <img src="" />
            </a>
          </div>
        </div>
      </div>
      <div className="grid-5">
        <div className="parent-div-grid-5">
          <div><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=leonardolucusi&theme=blue-green"/></div>
        </div>
      </div>
      <div className="grid-6">6</div>
      <div className="grid-7">7</div>
    </div>
  );
}

