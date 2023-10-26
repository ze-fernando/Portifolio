import './static/style.css';

function App() {
  return (
  <div className='body'>
    <div className="boxTitle">
        <h1>Olá, eu sou 
          <a href="https://github.com/ze-fernando" target="_blank" rel="noreferrer"> Fernando
          </a>
        </h1>
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
        <img className="tag" align='center' alt='Java' src='https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white'/>
        <img className="tag" align='center' alt='Python' src='https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white'/>
        <img className="tag" align='center' alt='Typescript' src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'/>
        <img className="tag" align='center' alt='MongoDB' src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'/>
        <img className="tag" align='center' alt='SQLite3' src='https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white'/>
        <img className="tag" align='center' alt='MySQL' src='https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white'/>
        <img className="tag" align='center' alt='PostgreSQL' src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'/>
        <img className="tag" align='center' alt='Docker' src='https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white'/>
        <img className="tag" align='center' alt='Git' src='https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white'/>
      </div>
    </div>
      <h2 className="title">Projects</h2>
    <div className="containerProjects1">
      <a href="https://github.com/ze-fernando/TodoApp-Django" target="_blank" rel="noreferrer">
        <div className="divProj">
          <h1>Todo app - Django</h1>
            <div className="boximg">
              <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
              <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django"/>
              <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"/>
            </div>
          <p>Todo list feito em Django, utilizei para este projeto o banco de dados padrão do django o SQLite3, 
            e pude compreender como funciona um banco de dados, bem como as autenticações e cadastro são feitas.</p>
        </div>
      </a>
      
      <a href="https://github.com/ze-fernando/node-API" target="_blank" rel="noreferrer">
        <div className="divProj">
          <h1>JWT - Node</h1>
            <div className="boximg">
              <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node"/>
              <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express"/>
              <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
              <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
            </div>
          <p>Api feita em NodeJS, neste projeto utilizei o Express.js para construir minha API de
            autenticação, pude trabalhar com Docker-compose, JWT, autorizações, encripitação no
          banco de dados e comparações de hash.
          </p>
      </div>
      </a>

      <a href="https://github.com/ze-fernando/EmailSender-csharp" target="_blank" rel="noreferrer">
        <div className="divProj">
          <h1>Email sender - .Net</h1>
          <div className="boximg">
            <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#"/>
            <img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" alt=".Net"/>
          </div>
            <p>Api para envio de emails utilizando C# e dotnet, pude compreender ao fazer este projeto, o processo de criação, construção e manuntenção de Api's 
              utlizando a platafoma .Net, bem como a estrutura do projeto apiweb e arquitetura no C#</p>
      </div>
      </a>

      <a href="https://github.com/ze-fernando/LibraryAPI-spring" target="_blank" rel="noreferrer">
        <div className="divProj">
          <h1>Library API - Spring</h1>
          <div className="boximg">
            <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"  alt="Java"/>
            <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"  alt="Spring"/>
            <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
            <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
          </div>
            <p>Uma api para um sistema de biblioteca, onde pude aprender os conceitos do JPA, aprimorar meus conhecimentos 
            em banco de dados e relacionar tabelas com chave estrangeira, utilizei Docker para meu DB, e Spring Boot para construir a Api</p>
      </div>
      </a>

      <a href="https://github.com/ze-fernando/sorting-algorithm" target="_blank" rel="noreferrer">
        <div className="divProj">
          <h1>Sorting Algorithm</h1>
          <div className="boximg">
            <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C-lang"/>
          </div>
          <p>Algoritmo de ordenação de listas, projeto feito em C-lang, onde pude praticar minha logica de programação e compreender o processo do famoso 
              metodo "Sort()", neste projeto fui capaz ter uma base do funcionamento deste algoritimo tão utilizado no nosso dia a dia.</p>
        </div>
      </a>
    </div>


    <div className="containerProjects1">
      <a href="https://github.com/ze-fernando/loanSystem-Spring" target="_blank" rel="noreferrer">
        <div className="divProj">
          <h1>Loan Api - Spring</h1>
            <div className="boximg">
              <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"  alt="Java"/>
              <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"  alt="Spring"/>
            </div>
          <p>Neste projeto de Api, pude trabalhar a organização das regras de negócios, bem como sua importância em projetos reais,
            pode avaliar a necessidade do problema e implementar da maneira que solucionasse, introduzi testes unitários e aprendi os seus fundamentos e sua importância.
          </p>
        </div>
      </a>
      
      <a href="https://github.com/ze-fernando/FlaskSimpleAPI" target="_blank" rel="noreferrer">
        <div className="divProj">
          <h1>Api Crud - Flask</h1>
            <div className="boximg">
              <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
              <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask"/>
            </div>
          <p>Nesta ApiRest feita em python, utilizei o framework flask, e nela pude compreender o processo de integração a um banco de dados, e os principios basicos 
            do CRUD (Create, Read, Update, Delete), pude compreender e aprender também o processo de deploy de uma ApiRest e a documentação Swagger.
          </p>
      </div>
      </a>

      <a href="https://github.com/ze-fernando/EmailSender-csharp" target="_blank" rel="noreferrer">
        <div className="divProj">
          <h1>Email sender - .Net</h1>
          <div className="boximg">
            <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#"/>
            <img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" alt=".Net"/>
          </div>
            <p>Api para envio de emails utilizando C# e dotnet, pude compreender ao fazer este projeto, o processo de criação, construção e manuntenção de Api's 
              utlizando a platafoma .Net, bem como a estrutura do projeto apiweb e arquitetura no C#</p>
      </div>
      </a>

      <a href="https://github.com/ze-fernando/LibraryAPI-spring" target="_blank" rel="noreferrer">
        <div className="divProj">
          <h1>Library API - Spring</h1>
          <div className="boximg">
            <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"  alt="Java"/>
            <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"  alt="Spring"/>
            <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
            <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
          </div>
            <p>Uma api para um sistema de biblioteca, onde pude aprender os conceitos do JPA, aprimorar meus conhecimentos 
            em banco de dados e relacionar tabelas com chave estrangeira, utilizei Docker para meu DB, e Spring Boot para construir a Api</p>
      </div>
      </a>

      <a href="https://github.com/ze-fernando/sorting-algorithm" target="_blank" rel="noreferrer">
        <div className="divProj">
          <h1>Sorting Algorithm</h1>
          <div className="boximg">
            <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C-lang"/>
          </div>
          <p>Algoritmo de ordenação de listas, projeto feito em C-lang, onde pude praticar minha logica de programação e compreender o processo do famoso 
              metodo "Sort()", neste projeto fui capaz ter uma base do funcionamento deste algoritimo tão utilizado no nosso dia a dia.</p>
        </div>
      </a>
    </div>
  </div>
  );
}

export default App;
