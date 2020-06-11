import React, { Component } from 'react';
import Heander from '../../component/header';
import {Link} from 'react-router-dom'
import '../../master.css'

export class Key extends Component {
  constructor(){
    super()
    this.state = {
    activeKey: false,
    key:''
    }
  }

  postkey(e){
     this.setState({
       key:e.target.value
      })
    
  }

  render(){
    return(
      <div className="App" >
      <Heander></Heander>
      <div className="App-body">
      <form>
        <div class="form-group">
          <label for="keyapi">Senha</label>
         <input type="text" class="form-control" id="keyapi"/>
      <Link to = '/home'> 
         <button class="btn btn-lg btn-primary btn-block" type="submit" 
         onClick="">Entrar</button>
        </Link>
         </div>
      </form>
    </div>
    </div>  
    );
  }
}
export default Key;