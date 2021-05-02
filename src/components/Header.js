import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {  //Pode desestruturar com {{ title }} e usar {title} direto
  const onClick = () => {
    console.log('Click')
  }
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color='green' text='Adicionar' onClick={onClick}/>
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
