import "./App.css";
import Card from "./components/Card/Card";
import Greeting from "./components/Greeting/Greeting";
import ThankYou from "./components/ThankYou/ThankYou";
import catPicture from "./assets/b.jpg";
import Goodbye from "./components/Goodbye/Goodbye";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Counter from "./components/Counter/Counter";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
import SpaceMissionForm from './components/SpaceMissionForm/SpaceMissionForm'

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
  const user = {
        avatar:"https://thumbs.dreamstime.com/b/d-cat-avatar-online-games-web-account-avatar-generated-ai-d-cat-avatar-online-games-web-account-avatar-generated-ai-268992881.jpg",
        name:"Cote John",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        
  };
  return (
    
    <>
      <SpaceMissionForm />
      <WeightCalculator />
      <Counter />
      <PersonalGreeting />
      <ProfileCard avatar={user.avatar} name={user.name} description={user.description} />

      {/* <Greeting name={name} /> */}

      {/* <ProfileCard
        avatar={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrxOTdBgCXwbUydQIy_30TzwBYJ6wrUhF78A&s"
        }
        name={"Cote Alex"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      /> */}
      
      {/* <Greeting name={"Max"} age={18} /> */}
      {/* <Goodbye />
      <ThankYou />
      <Card
        url={
          "https://madcats.ru/wp-content/uploads/2018/08/8586A23F-E3F0-4C40-98F7-2117F097AD39.jpeg"
        }
        alt="Cat img"
      /> */}

      <img src="/a.jpg" alt="asd" style={{ width: "200px" }}/>
      <img src={catPicture} alt="asd" style={{ width: "300px" }} />
    </>
  );
}

export default App;
