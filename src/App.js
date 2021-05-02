import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([

      {
        id: 1,
        text: 'Comprar comida para os gatos',
        day: '5 de Junho às 18:30',
        reminder: true,
      },
      {
        id: 2,
        text: 'Reunião na escola',
        day: '10 de Dezembro às 14:00',
        reminder: true,
      },
      {
        id: 3,
        text: 'Mercado',
        day: '22 de Dezembro às 17:00',
        reminder: false,
      }
  ])

  return (
    <div className="container">
        <Header />
        <Tasks tasks={tasks} />
    </div>

  );
}

export default App;
