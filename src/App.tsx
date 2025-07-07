import "./App.css";
import Card from "./components/Card/Card";
import Greeting from "./components/Greeting/Greeting";
import ThankYou from "./components/ThankYou/ThankYou";
import catPicture from "./assets/b.jpg";
import Goodbye from "./components/Goodbye/Goodbye";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  // 1.Создайте компонент, который бы возвращал div
  // внутри которого находится следующая информацияЖ
  // "Thank you for using our services!"
  // назовите компонент ThankYou
  // Отобразите его рядом с Greeting

  // 2. Создайте компонент с картинкой Card
  // пусть там будет тег img внутри контейнера div
  // пусть ссылка на картинку передается при помощи пропса url

  const name = "Alex";
  return (
    <>
      <ProfileCard
        avatar={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrxOTdBgCXwbUydQIy_30TzwBYJ6wrUhF78A&s"
        }
        name={"Cote Alex"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <Greeting name={name} />

      {/* <Greeting name={"Max"} age={18} /> */}
      <Goodbye />
      <ThankYou />
      <Card
        url={
          "https://madcats.ru/wp-content/uploads/2018/08/8586A23F-E3F0-4C40-98F7-2117F097AD39.jpeg"
        }
        alt="Cat img"
      />
      <img src="/a.jpg" alt="asd" />
      <img src={catPicture} alt="asd" style={{ width: "300px" }} />
    </>
  );
}

export default App;
