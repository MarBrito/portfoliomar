import "./styles.css";

const data = [
  {
    id: "1",
    name: "How to start a programming project without knowing all the technologies?",
    link: "https://programathor.com.br/blog/como-comecar-um-projeto-de-programacao/",
    image:
      "https://programathor.com.br/blog/wp-content/uploads/2018/06/fto-676x451.jpg",
  },
  {
    id: "2",
    name: "Top 5 coding projects to put your knowledge into practice (Part 2)",
    link: "https://programathor.com.br/blog/top-projetos-de-programacao/",
    image:
      "https://programathor.com.br/blog/wp-content/uploads/2018/05/projetos-de-programa%C3%A7%C3%A3o-676x451.jpg",
  },
  {
    id: "3",
    name: "Project — Programming Group",
    link: "https://medium.com/ieee-uff/projeto-grupo-de-programa%C3%A7%C3%A3o-a36d8e16acb2",
    image: "https://miro.medium.com/max/720/1*d7ZpBjpigfPKQ4r2NOFxTQ.jpeg",
  },
  {
    id: "4",
    name: "80 More Ideas for Learning to Code (Including Ad Revenue)",
    link: "https://www.youtube.com/watch?v=H4CCPaYLTWg",
    image: "https://i.ytimg.com/vi/H4CCPaYLTWg/maxresdefault.jpg",
  },
];

export default function Projects() {
  return (
    <div className="content-projects" id="projects">
      <h1 className="title-project">PROJECTS</h1>
      <ul className="list-projects">
        {data.map(({ image, name, link }) => (
          <a href={link}>
            <li className="item-list-projects">
              <img src={image} alt="" width={200} height={200} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
