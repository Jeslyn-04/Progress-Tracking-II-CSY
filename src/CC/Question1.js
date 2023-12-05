import React, { Component } from 'react'
import Button from '@mui/material/Button';

export default class task extends Component {
    constructor(props){
        super(props);
        this.state={count:0};
    }
    handleIncrement=()=>{
        this.setState(prevState=>{
                return{
                    count:prevState.count+1
                }
            }
        );
    }
  render() {
    return (
        <>
          <div> <p>Count:{this.state.count}</p>
          <Button variant="contained" color="success" onClick={this.handleIncrement}>
           Increment
          </Button>
          </div>
        </>
    )
  }
}

