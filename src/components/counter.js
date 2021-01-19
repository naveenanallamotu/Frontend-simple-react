import React,{Component} from 'react';

class Counter extends Component{

  state = {number1: 0,number2: 0,result:0, oper: null}


  updateItem = (e) => {
    e.preventDefault();
  this.setState({number1:e.target.value});
}
updateItem2 = (e) => {
  e.preventDefault();
this.setState({number2:e.target.value});
}

 GetSelectedValue =() =>{
  let e = document.getElementById("operation");
  let op = e.options[e.selectedIndex].value;
  this.setState({oper:op});
  this.operationer(op);
}

operationer =(op) =>{
  let res =0;
  switch(op){
    case 'sum':
      res =Number(this.state.number1) + Number(this.state.number2);
      break;
    case 'multiply':
      res =Number(this.state.number1) * Number(this.state.number2);
      break;
    case 'divison':
      res =Number(this.state.number1) / Number(this.state.number2);
      break;
    case 'substarct':
      res =Number(this.state.number1) - Number(this.state.number2);
      break;
    default :
      res = (this.state.number1) + (this.state.number2);

  }
   this.setState({result:res})
}

  render(){
    return    <div className="body">
  Number1:<input className="form" onChange ={this.updateItem}></input><br/>
  Number2:<input className="form" onChange ={this.updateItem2}></input><br/>
<label for="operation" > Choose a Operation: </label>
<select name="operation" id="operation" className="form" >
  <option value="sum">sum</option>
  <option value="multiply">multiply</option>
  <option value="divison">divison</option>
  <option value="substarct">substact</option>
</select> <br/>
  <button onClick={this.GetSelectedValue} className ="button"> submit </button> 
  <div className = "result">{this.state.result} </div>
        </div>
  }
} 

export default Counter;