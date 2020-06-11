import React, { Component } from 'react';
import '../../master.css'
import Heander from '../../component/header';
import Nav from '../../component/nav';

export class Client extends Component {
  constructor(props){
    super(props)
    this.newclientpost = this.newclientpost.bind(this);
    this.completPhoneNumber	=this.completPhoneNumber.bind(this)
    this.complettypeId=this.complettypeId.bind(this)
    this.completnumer=this.completnumer.bind(this)
    this.completCompanyId=this.completCompanyId.bind(this)
    this.completNe=this.completNe.bind(this)
    this.completpID=this.completpID.bind(this)
    this.completZip=this.completZip.bind(this)
    this.completname=this.completname.bind(this)
    this.state = {
    response:'',
    name:'',
    Neighborhood:'',
    ZipCode:0,
    OriginId:0,
    CompanyId:'',
    StreetAddressNumber:'',
    TypeId:0,
    Phones:[
      {
        PhoneNumber:'',
        TypeId: 0,
        CountryId: 0
    }
    ],
    OtherProperties:[
      {
          FieldKey: '',
          StringValue: ''
      },
      {
          FieldKey: '',
          IntegerValue: 2
      }
  ]
    }
   
  }
  completname(event) {
    this.setState({name: event.target.value});
  }
  completZip(event) {
    this.setState({ZipCode: event.target.value});
  }
  completpID(event) {
    this.setState({OriginId: event.target.value});
  } 
  completNe(event) {
    this.setState({Neighborhood: event.target.value});
  } 
completCompanyId(event) {
  this.setState({CompanyId: event.target.value});
} 
completnumer(event) {
  this.setState({StreetAddressNumber: event.target.value});
} 
complettypeId(event) {
  this.setState({typeId: event.target.value});
} 
completPhoneNumber(event) {
  this.setState({PhoneNumber: event.target.value});
} 

  newclientpost(){
  fetch('https://api2.ploomes.com/Contacts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Key':'A84F4A8B3CD3B4D2416347A78CDFCBA27E8A28D903F277C37A08F2D4430D787453D5FC9CAB4E2B6C4F7FD47DDB928BE3F6D741B9C09C8CD8ED875AAE0BFF5B8C'
  },
  body: JSON.stringify({
    Name: this.state.name,
    Neighborhood: this.state.Neighborhood,
    ZipCode: this.state.ZipCode,
    OriginId: this.state.OriginId,
    CompanyId: this.state.CompanyId,
    StreetAddressNumber: this.state.StreetAddressNumber,
    TypeId: this.state.TypeId,
    Phones: [
        {
            PhoneNumber: this.state.Phones.PhoneNumber,
            TypeId: this.state.Phones.TypeId,
            CountryId:this.state.Phones.CountryId
        }
    ],
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
  alert('Cliente criado com sucesso' );
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
    <label>Para adicionar um cliente complete os campos abaixo:</label>
   <input
    id="name"
    type="text"
    value={this.state.name}
    class="form-control"
    placeholder="Nome"
    onChange={this.completname}/> 
  </div>
  <div class="form-group">
    <input type="text" 
    class="form-control" 
    id="Neighborhood" 
    placeholder="Bairro" 
    value= {this.state.Neighborhood}
    onChange={this.completNe}/> 
  </div>
  <div class="form-group">
<input type="text" class="form-control" id="ZipCode" placeholder="CEP" value={this.state.ZipCode}  
onChange={this.completZip}/>
  </div>
  <div class="form-group">
<input type="int" class="form-control" id="OriginId" placeholder="Id Original"
value={this.state.OriginId} 
onChange={this.completpID}/>
  </div>
  <div class="form-group">
    <input type="int" class="form-control" id="CompanyId" placeholder="ID da Empresa" 
    value={this.state.CompanyId } 
    onChange={this.completCompanyId}/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="StreetAddressNumber" placeholder="Numero endereço" 
    value={this.state.StreetAddressNumber} onChange={this.completnumer}/>
  </div>
  <div class="form-group">
    <input type="int" class="form-control" id="typeId" placeholder="Tipo" value={this.state.typeId} onChange={this.complettypeId}/>
  </div>
  <div class="form-group">
    <input type="string" class="form-control" id="PhoneNumber" placeholder="Telefone (XX) XXXX-XXXX"
     value={this.state.PhoneNumber } onChange={this.completPhoneNumber}/>
  </div>
  <label for="OtherProperties">Outras Propriedades</label>
  <div class="form-group"id ="OtherProperties">
    <input type="string" class="form-control" id="FieldKey" placeholder="Chave do Campo" value={this.state.FieldKey}/>
    <label for="OtherProperties">  </label>
    <input type="string" class="form-control"  id="StringValue" placeholder="texto exemplo" value={this.state.StringValue }/>
  </div>
  <button class="btn btn-primary btn" type="button" onClick={this.newclientpost.bind(this)}>Criar </button>
</form>
  </div>    
    );
  }
}
export default Client;