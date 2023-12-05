import React, { Component } from 'react'

export default class task extends Component {
    constructor(props){
        super(props);
        this.state={count:0};
    }
    Decrement=()=>{
        this.setState(prevState=>{
            if(prevState.count>0){
                return{
                    count:prevState.count-1
                }
            }
            else{
                return{
                    count:0
                }
            }
        });
    }
    Increment=()=>{
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
        <table>
         <tbody>
         <tr><td><img src={this.props.imgUrl} alt={this.props.item} height="100%" width="100%"></img></td>
         <td>
         <h3>{this.props.item}</h3>
         </td>
         <td>
         <button onClick={this.handleDecrement}>-</button>
          {this.state.count}
         <button onClick={this.handleIncrement}>+</button>
         </td>
         <td><button onClick={this.handleCart}>Add to Cart</button></td>
         </tr>
         </tbody>
        </table>
        </>
    )
  }
}
