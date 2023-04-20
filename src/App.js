
import './App.css';
import { Invitation } from './invitation/invitation';

function App() {
  return (
    <div>
       <Invitation
       subject="Birthday party Invitation"
       email="jaGdish@gmail.com"
       host="jaGdish"
       topic="birthday party"
       friends="Ritu , Saurabh , Kartik"
       venue="Green field Avenue"

       />
      
    </div>
  );
}

export default App;
