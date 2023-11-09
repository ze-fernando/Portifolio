import React, { useState, useEffect } from 'react';
import './static/style.css';
import zeca from './static/zeca.jpg'
import wpp from './static/whatsapp.png';
import linke from './static/linkedin.png';
import git from './static/github.png';

function lang(lang) {
  switch (lang) {
    case "C#":
      return <img alt='C#' src='https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white'/>;
    case "JavaScript":
      return <img alt='JavaScript' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'/>;
    case "Python":
      return <img alt='Python' src='https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white'/>;
    case "Java":
      return <img alt='Java' src='https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white'/>;
    case "C":
      return <img alt='C' src='https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white'/>;
    case "CSS":
      return <img alt='CSS3' src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'/>;
    case "SQL":
      return <img alt='SQL' src='https://img.shields.io/badge/SQL-07405E?style=for-the-badge&Color=white'/>;
    default:
      break;
  }
}

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ze-fernando/repos')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
  <div className='body'>
    <div className="boxTitle">
        <h1>Olá, eu sou Fernando</h1>
      <p>Sou um programador Back-end</p>
    </div>
    <div className="containerMain">
      <div className="box1">
        Inovar é <br/> solucionar!
      </div>
      <div className="box2">
        <h2 className="title">Skills</h2>
        <img className="tag" align='center' alt='C' src='https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white'/>
        <img className="tag" align='center' alt='C#' src='https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white'/>
        <img className="tag" align='center' alt='Python' src='https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white'/>
        <img className="tag" align='center' alt='Java' src='https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white'/>
        <img className="tag" align='center' alt='JavaScript' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'/>
        <img className="tag" align='center' alt='MongoDB' src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'/>
        <img className="tag" align='center' alt='SQLite3' src='https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white'/>
        <img className="tag" align='center' alt='MySQL' src='https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white'/>
        <img className="tag" align='center' alt='PostgreSQL' src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'/>
        <img className="tag" align='center' alt='Docker' src='https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white'/>
        <img className="tag" align='center' alt='Git' src='https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white'/>
      </div>
    </div>
    <h2 className="title">Sobre mim</h2>
    <div className='about'>
      <div className="foto">
        <img src={zeca} alt="joseF"/>
      </div>
      <div className="text">
        <p>José Fernando é um programador back-end, nascido em 2003 em Feira de Santana-BA, e apaixonado por tecnologia,
           "sempre gostei de filmes com hackers e programadores, mesmo criança sem saber o que era aqueles códigos já imaginava que queria ser igual no futuro",
            começou sua jornada com 16 anos após decidir ser um hacker ético profissional, mas encontrou a si na programação, 
            desenvolver soluções, tirar as ideias da cabeça, pensar fora da caixa, utilizar logica para resolver problemas, é quando segundo suas palavras 
            "me sinto eu mesmo", a paixão por aprender e o anseio que tem por desafios só somaram em sua carreira, atualmente sua linguagem principal é o C#, porém 
            aprecia toda e qualquer tecnologia, acredita que todas podem ser utilizadas segundo o seu proposito e que um bom arsenal de ferramentas não é composto por um martelo e 
            uma chave de fenda.</p>
      </div>
    </div>

    <h2 className="title">Projetos</h2>
    <div className="containerProjects1">
    {data.map(rep =>{
      if (rep.language !== null){
        return(          
          <a href={rep.html_url} target="_blank" rel="noreferrer">
            <div className="divProj">
              <h1>{rep.name}</h1>
              <p>{rep.description}</p>
              <div className="boximg">
                {lang(rep.language)}          
              </div>
            </div>
          </a>  
        )
      }
      })}
    </div>

    <h2 className="title">Contate-me via Email</h2>
    <div className="containerContact">
      <input type="text" className='subject' placeholder='Assunto'/>
      <textarea  type="text" className='bodymail' rows="5" placeholder='Mensagem'/>

      <h2>Ou se preferir</h2>
      <a href="https://wa.me/?text=Olá%20vim%20pelo%20seu%20portifólio%20podemos%20converar?!" target="_blank" rel="noreferrer">
        <div className='divIcon'>
          <img src={wpp} alt="wpp" className="icon"/>
          Whatsapp
        </div>
      </a> 
      <a href="https://linkedin.com/in/jf-libarino" target="_blank" rel="noreferrer">
        <div className='divIcon'>
          <img src={linke} alt="linkedin" className="icon"/>
          Linkedin
        </div>
      </a> 
      <a href="https://github.com/ze-fernando" target="_blank" rel="noreferrer">
         <div className='divIcon'>
          <img src={git} alt="github" className="icon"/>
          Github
        </div>
      </a>     
    </div>

  </div>
  );
}

export default App;
