import React, { Component } from 'react';
import '../../master.css'
import Heander from '../../component/header';
import Nav from '../../component/nav';


export class NewTask extends Component {
  constructor(props){
    super(props)
    this.newtaskpost = this.newtaskpost.bind(this);
    this.completDateTime	=this.completDateTime.bind(this)
    this.completDescription=this.completDescription.bind(this)
    this.completContactId=this.completContactId.bind(this)
    this.completTitle=this.completTitle.bind(this)
    this.completStringValue=this.completStringValue.bind(this)
    this.completkey=this.completkey.bind(this)
    this.state = {
      Title: '',
      Description: '',
      DateTime: '',
      ContactId: '',
      OtherProperties: [
        {
         FieldKey: '',
         StringValue: ''
        },
        {
            FieldKey: '{fieldKey}',
            IntegerValue: '2'
        }
      ]
  }
   
  }
  completTitle(event) {
    this.setState({Title: event.target.value});
  }
  completDescription(event) {
    this.setState({Description: event.target.value});
  }
  completDateTime(event) {
    this.setState({DateTime: event.target.value});
  } 
  completContactId(event) {
    this.setState({ContactId: event.target.value});
  } 
  completkey(event) {
    this.setState({FieldKey: event.target.value});
  } 
  completStringValue(event) {
    this.setState({StringValue: event.target.value});
  } 

  newtaskpost(){
  fetch('https://api2.ploomes.com/Tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Key':'A84F4A8B3CD3B4D2416347A78CDFCBA27E8A28D903F277C37A08F2D4430D787453D5FC9CAB4E2B6C4F7FD47DDB928BE3F6D741B9C09C8CD8ED875AAE0BFF5B8C'
  },
  body: JSON.stringify({
    Title:this.state.Title,
    ContactId: this.state.ContactId,
    Amount: this.state.Amount,
    StageId: this.state.StageId,
    OtherProperties: [
      {
          FieldKey: "{"+this.state.OtherProperties.FieldKey+ "}",
          StringValue: this.state.OtherProperties.StringValue
      },
      {
          FieldKey: '{fieldKey}',
          IntegerValue: '2'
      }
  ]
})
}).then((response) => {
  alert('Tarefa criada com sucesso');
    return response;
});

  }
  render(){
    return(
<div className="App" >
    <Heander></Heander>
        <Nav></Nav>
<form className="form">
  <div class="form-group">
    <label for="txtname">Para adicionar uma Tarefa complete os campos abaixo:</label>
    <input type="text" class="form-control" id="Title" placeholder="Titulo da Tarefa" onChange={this.completTitle} value={this.state.Title}/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="Description" placeholder="Descrição" onChange={this.completDescription} value={this.state.Description}/>
  </div>
  <div class="form-group">
    <input type="DateTime" class="form-control" id="DateTime" placeholder="Data" onChange={this.completDateTime} value={this.state.DateTime}/>
  </div>
  <div class="form-group">
    <input type="int" class="form-control" id="ContactId" placeholder="Contato Id" onChange={this.completContactId} value={this.state.ContactId} />
  </div>
  <label for="OtherProperties">Outras Propriedades</label>
  <div class="form-group"id ="OtherProperties">
    <input type="string" class="form-control" id="FieldKey" placeholder="Chave do Campo" onChange={this.completkey} value={this.state.FieldKey} />
    <label for="OtherProperties">  </label>
    <input type="string" class="form-control"  id="StringValue" placeholder="texto exemplo" onChange={this.completStringValue} value={this.state.StringValue}/>
  </div>
  <button class="btn btn-primary btn" type="button" onClick={this.newtaskpost.bind(this)}>Criar </button>
</form>
  </div> 
    );
  }
}
export default NewTask;