import React from 'react'
import Link from 'gatsby-link'
import Skill from '../components/Skills/skill'
import Info from '../components/Info'

const skills = [
  {id: 0, icon: "fab fa-react fa-6x", name: "React", description: "I use React at work and some others projects like this website.", projects: []},
  {id: 1, icon: "fab fa-react fa-6x", name: "React-Native", description: "I use React-Native on a personal project, a mobile app for IOS and Android.", projects: [{name: "bzaar", url: ""}]},
  {id: 2, icon: "fab fa-js-square fa-6x", name: "Javascript", description: "I usually program javascript, mainly ecmascript 6.", projects: [{name: "bzaar", url: ""}]},
  {id: 3, icon: "fab fa-phoenix-framework fa-6x", name: "Elixir & Phoenix", description: "I am using elixir and phoenix on a personal project, a REST API.", projects: [{name: "bzaar-api", url: ""}]},
  {id: 4, icon: "fas fa-coffee fa-6x", name: "Java", description: "I usually program in Java so much, and sometimes a little scala.", projects: [{name: "", url: ""}]},
  {id: 5, icon: "fab fa-docker fa-6x", name: "Docker", description: "When I was working with DevOps I prepared some docker images and performed them on servers and local machines.", projects: [{name: "", url: ""}]},
];

const informations = [
  {id: 0, icon:"fas fa-address-card fa-2x", title: "Contact", description: "I'm available at dap1995@gmail.com"},
  {id: 1, icon:"fas fa-user fa-2x", title: "Personal", description: "I am 22 years old. Single. I am a creative person."},
  {id: 2, icon:"fas fa-briefcase fa-2x", title: "Career", description: "I worked 3 years like IT Infrastruture Analyst/DevOps, and currently I am working 1 year like Software Developer"},
]
console.log(informations.length);

const IndexPage = () => (
  <div>
    <div>
    <h1>About me</h1>
    <ul className="info-container">
    { informations && informations.map(info => 
      <li><Info  className="info" key={`info-${info.id}`} {...info} /></li>
    )}
    </ul>
    </div>
    <h2>Main Skills</h2>
    <div className="skills">
      { skills && skills.map(skill => 
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
