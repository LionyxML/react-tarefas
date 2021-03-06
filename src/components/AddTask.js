import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Por favor, digite uma tarefa!')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Atividade</label>
        <input type="text" placeholder="Adicionar Tarefa" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Dia e Hora</label>
        <input type="text" placeholder="Adicionar Dia e Hora" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label>Lembrar</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type="submit" value="Salvar Tarefa" className="btn btn-block"/>
    </form>
  )
}

export default AddTask
