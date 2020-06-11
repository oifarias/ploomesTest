import React from 'react';
import '../../master.css'
import Heander from '../../component/header';
import Nav from '../../component/nav';
function History(){
    return (
      <div className="App" >
      <Heander></Heander>
      <Nav></Nav>
<form className="form">
  <div class="form-group">
    <label for="txtname">Para adicionar uma nova Tarefa complete os campos abaixo:</label>
    <input type="text" class="form-control" id="Title" placeholder="Titulo da Tarefa"/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="Description" placeholder="Descrição"/>
  </div>
  <div class="form-group">
    <input type="data" class="form-control" id="DateTime" placeholder="Data"/>
  </div>
  <div class="form-group">
    <input type="int" class="form-control" id="ContactId" placeholder="Contato Id"/>
  </div>
  <label for="OtherProperties">Outras Propriedades</label>
  <div class="form-group"id ="OtherProperties">
    <input type="string" class="form-control" id="FieldKey" placeholder="Chave do Campo"/>
    <label for="OtherProperties">  </label>
    <input type="string" class="form-control"  id="StringValue" placeholder="texto exemplo"/>
  </div>
</form>
  </div>    
    );

  };
  export default History;