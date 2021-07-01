import React from 'react'
import Radium from 'radium'
import classes from './Car.css'



class Car extends React.Component {

  componentWillReceiveProps( nextProps ) {
    console.log( 'c resiveProps', 'nextProps___', nextProps, 'end' );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log ( 'c should', 'nextProps___',  nextProps, 'nextState____', nextState, 'end' )
    return true;
  }

  componentWillUpdate( nextProps, nextState ) {
    console.log( 'c willUpdate', 'nextProps___', nextProps,'nextState_____',  nextState, 'end' );
  }

  componentDidUpdate() {
     console.log( 'c didUpdate');
  }




  render() {
    const inputClasses = [classes.input]

  if (this.props.name !== '') {
    inputClasses.push(classes.green)
  } else {
    inputClasses.push(classes.red)
  }

  if (this.props.name.length > 4) {
    inputClasses.push(classes.bold)
  }

  // if(Math.random() > 0.7 ) {
  //   throw new Error('Car error');
  // }


  const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
      cursor: 'pointer'
    }
  }

  return (
    <div className={classes.Car} style={style}>
      <h3>Сar name: {this.props.name}</h3>
      <p>Year: <strong>{this.props.year}</strong></p>
      <input
        type="text"
        onChange={this.props.onChangeName}
        value={this.props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={this.props.onDelete}>Delete</button>
    </div>
  )
  }
}

export default Radium(Car)