import React from 'react'
import Link from 'gatsby-link'
import Skill from '../components/Skills/skill'

const data = [
  {id: 0, icon: "fab fa-react fa-6x", name: "React", description: "I use React at work and some others projects like this website.", projects: []},
  {id: 1, icon: "fab fa-react fa-6x", name: "React-Native", description: "I use React-Native on a personal project, a mobile app for IOS and Android.", projects: [{name: "bzaar", url: ""}]},
  {id: 2, icon: "fab fa-js-square fa-6x", name: "Javascript", description: "I usually program javascript, mainly ecmascript 6.", projects: [{name: "bzaar", url: ""}]},
  {id: 3, icon: "fab fa-phoenix-framework fa-6x", name: "Elixir & Phoenix", description: "I am using elixir and phoenix on a personal project, a REST API.", projects: [{name: "bzaar-api", url: ""}]},
  {id: 4, icon: "fas fa-coffee fa-6x", name: "Java", description: "I usually program in Java so much, and sometimes a little scala.", projects: [{name: "", url: ""}]},
  {id: 5, icon: "fab fa-docker fa-6x", name: "Docker", description: "When I was working with DevOps I prepared some docker images and performed them on servers and local machines.", projects: [{name: "", url: ""}]},
];

const IndexPage = () => (
  <div>
    <div>
    <h1>About me</h1>
    
    </div>
    <h2>Main Skills</h2>
    <div className="skills">
      { data && data.map(skill => 
        <Skill
          key={`skill-${skill.id}`}
          {...skill}
        />
      )}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
