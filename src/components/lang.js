import '../static/style.css';

export default function lang(lang) {
    switch (lang) {
      case "C#":
        return <img className="iconProj" alt='C#' src='https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white'/>;
      case "JavaScript":
        return <img className="iconProj" alt='JavaScript' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'/>;
      case "Python":
        return <img className="iconProj" alt='Python' src='https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white'/>;
      case "Java":
        return <img className="iconProj" alt='Java' src='https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white'/>;
      case "C":
        return <img className="iconProj" alt='C' src='https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white'/>;
      case "CSS":
        return <img className="iconProj" alt='CSS3' src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'/>;
      case "SQL":
        return <img className="iconProj" alt='SQL' src='https://img.shields.io/badge/SQL-07405E?style=for-the-badge&Color=white'/>;
      default:
        break;
    }
  };