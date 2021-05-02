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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ?
          { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
        <Header />
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
            'Não há mais tarefas nessa lista!'
        )}
    </div>

  );
}

export default App;
