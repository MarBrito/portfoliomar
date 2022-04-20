import "./styles.css"

const data = [
    {
      id: "1",
      name: "Como começar um projeto de programação sem saber todas as tecnologias?",
      link: "https://programathor.com.br/blog/como-comecar-um-projeto-de-programacao/",
      image:
        "https://programathor.com.br/blog/wp-content/uploads/2018/06/fto-676x451.jpg",
      
    },
    {
      id: "2",
      name: "Top 5 projetos de programação para colocar o seu conhecimento em prática (Parte 2)",
      link: "https://programathor.com.br/blog/top-projetos-de-programacao/",
      image:
        "https://programathor.com.br/blog/wp-content/uploads/2018/05/projetos-de-programa%C3%A7%C3%A3o-676x451.jpg",
    },
    {
      id: "3",
      name: "Projeto — Grupo de Programação",
      link: "https://medium.com/ieee-uff/projeto-grupo-de-programa%C3%A7%C3%A3o-a36d8e16acb2",
      image:
        "https://miro.medium.com/max/720/1*d7ZpBjpigfPKQ4r2NOFxTQ.jpeg",
    },
    {
      id: "4",
      name: "Mais 80 ideias para Aprender a Programar (incluindo gerar renda com Anúncios)",
      link: "https://www.youtube.com/watch?v=H4CCPaYLTWg",
      image:
        "https://i.ytimg.com/vi/H4CCPaYLTWg/maxresdefault.jpg",
    },
    
  ];

export default function Projects(){
  return (
    <div className="content-projects" id="projects">
      <h1 className="title-project">Projetos</h1>
      <ul className="list-projects">
        {data.map(({ image, name, link }) => (
          <a href={link}>
            <li className="item-list-projects">
              <img src ={image} alt="" width={350} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>  
    </div>
  );
}