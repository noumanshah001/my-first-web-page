import logo from './logo.svg';
import './App.css';
import student from './Images/student.webp';
import arrow from './Images/download.png';

function App() {
  return (
    <div class="flex-container">
      <h1 className='heading '>Leaders Of The Future</h1>
     <button className='btn'>Register Now</button>
     
    
    <div class="parallelogram"></div>
    <div className='img'>
    <img className ="img" src={student} alt="new/src/imgstudent.webp"></img>
    <div className='img2'>
    <img className='img2' src={arrow} alt="new/src/Images/download.png"></img>
    </div>
     </div>
    </div>
    
  );
}

export default App;
