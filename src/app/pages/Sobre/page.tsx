import './page.scss'

export default function Page() {  

  return (
    <div className= 'aboutContainer'>
    <h1>Sobre nós</h1>
    <p>
      Essa aplicação web foi desenvolvida num domingo, por isso o nome 'Domingo Flix', 
      trata-se de um website de filmes, desenvolvido com:
    </p>
    <ul className = 'list'>
      <li><a href="https://react.dev" target='_blank'  rel="noopener noreferrer">React</a></li>
      <li><a href="https://www.typescriptlang.org/" target='_blank'  rel="noopener noreferrer">Typescript</a></li>
      <li><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Nextjs</a></li>
      <li><a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass</a></li>
    </ul>
    <div className= 'subContainer'>
      <h2>Developed By</h2>
      <ul className = 'list'>
        <li><a href="https://www.instagram.com/rennanimael/" target="_blank" rel="noopener noreferrer">Imael Lima</a></li>
        <li>Glauber</li>
      </ul>
    </div>
  </div>
  );
}


