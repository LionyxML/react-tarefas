import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Fechar' : 'Adicionar'}
        onClick={onAdd}
        />
    </header>
  )
}

Header.defaultProps = {
  title: 'Gerenciador de Tarefas'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,     // Para garantir o tipo a ser passado, isRequired para o warning virar erro
}


// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
