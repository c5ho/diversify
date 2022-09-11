import './App.css';
import Questions from './Database/Questions';

function App() {
  return (
    <div>
      {Questions.map((Questions, i) => {
      return (
        <div>
          <div className='box'>
            {Questions.q}
          </div>
          <input className='input' />
        </div>

      );
    })};
    </div>
    );
};

export default App;
