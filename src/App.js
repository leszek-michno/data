import { useEffect, useState } from "react";
import "./App.css";

const data = [
  { id: 1, title: "Wiadomość nr 1", body: "Zawartośc wiadomości nr 1..." },
  { id: 2, title: "Wiadomość nr 2", body: "Zawartośc wiadomości nr 2..." },
  { id: 3, title: "Wiadomość nr 3", body: "Zawartośc wiadomości nr 3..." },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość nr ${index}`,
    body: `Zawartośc wiadomości nr ${index}...`,
  });
}, 5000);

const App = () => {
  const [comments, setComments] = useState([...data]);

  const getData = () => {
    if (comments.length !== data.length) {
      setComments([...data]);
    }
  };
  useEffect(() => {
    setInterval(getData, 2000);
  }, [getData]);

  const com = comments.map((comment) => (
    <div key={comment.id}>
      <h4>{comment.title}</h4>
      <div>{comment.body}</div>
    </div>
  ));

  return <div>{com.reverse()}</div>;
};

export default App;
