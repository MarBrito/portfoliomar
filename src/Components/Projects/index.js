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
    name: "How to implement smooth scrolling in React",
    link: "https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react-pt",
    image:
      "https://images.prismic.io/digitalocean/0b619d51-a723-4748-997f-39ed5697a540_intro-to-cloud.jpg?auto=compress,format",
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
          <a href={link} target="_blank" rel="noreferrer noopener">
            <li className="item-list-projects">
              <img src={image} alt="" width={190} height={190} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
