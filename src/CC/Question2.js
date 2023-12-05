
import React, { Component } from 'react'
import Button from '@mui/material/Button';
export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={count:0};
  }
  handleDecrement = ()=> 
    {
        
            if(this.state.count>0)
            {
                return (
                   this.setState(prevState =>({count:prevState.count-1}))
                )
            }
            else{
                return(this.setState(prevState => ({count:prevState.count=0})))
            }
        
    }
    handleIncrement = () =>{
        this.setState(prevState => ( {count: prevState.count+1}));
    }
  render() {
    return (
      <div>
      <center>
      <table>
      <tbody>
      <tr><h1>Name = {this.props.name}</h1></tr>
      <tr><h1>Age = {this.state.count}</h1></tr>
      <tr>
      <td><Button onClick={this.handleIncrement}
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      sx={{ mt: 3, mb: 2 }}
    > Getting Older</Button></td>
      <td><Button onClick={this.handleDecrement} type="submit"
      fullWidth
      variant="contained"
      color="primary"
      sx={{ mt: 3, mb: 2 }}>Make Younger</Button></td></tr></tbody>
      </table>
      </center></div>
    )
  }
}