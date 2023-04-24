/*import logo from './logo.svg';*/
import './App.css';
import { Card } from './Card/card';

function App() {
  return (
    <div className="App">
      <div className="first">
      <Card
        img="https://i.ibb.co/FVZr1NN/Urgent-1118.jpg"
        imgalt='IMG20221005102131-modified.png'
        designation="Mechanical Engineer"
        name="Divyansh"
        description="Skilled Mechanical Engineers have 4+ years of experience designing and maintaining tools, industrial processing systems, and equipment.1 They have solid command of technologies, tools"

      />
      <Card
        img="https://i.ibb.co/5WWyQJm/IMG20191013100155.jpg"
        imgalt='IMG20221005102131-modified.png'
        designation="Product Manager"
        name="Shreyansh"
        description="Result-orientated product team leader with 5 years of experience covering project and product management including developing, implementing and supporting complex infrastructure"

      />
      <Card
        img="https://i.ibb.co/QCMtH54/IMG20191018154222.jpg"
        imgalt='IMG20221005102131-modified.png'
        designation="Electrical Engineer"
        name="Prakash"
        description="Excellent knowledge of the installation and maintenance of electrical systems and equipment
        Understanding of all the applications of electrical engineering"

      />
      </div>
    </div>
  );
}

export default App;
