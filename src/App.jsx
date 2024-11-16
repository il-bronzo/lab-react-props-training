import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard 
      surname = 'Doe' name ='John' gender = 'male' height = {178} 
      birth = "14-07-2000" picture = "https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard 
      surname = 'Delores' name ='Obrien' gender = 'female' height = {172} 
      birth = "1992-07-14" picture = "https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <br></br>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
