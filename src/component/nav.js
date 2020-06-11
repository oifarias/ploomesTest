import React from 'react'


class nav extends React.Component {
    
    render(){
return(
<div class="mx-auto"> 
  <ul class="nav nav-tabs mx-auto" >
  <li class="nav-item mx-auto">
<a class="nav-link text "  href="/home">Pagina Inicial</a>
  </li>
  <li class="nav-item mx-auto">
    <a class="nav-link" href="/new-client">Novo Cliente</a>
  </li>
  <li class="nav-item mx-auto">
    <a class="nav-link" href="/negotiation">Nova Negociação</a>
  </li>
  <li class="nav-ite mmx-auto">
    <a class="nav-link" href="/new-task">Nova Tarefa</a>
  </li>
  <li class="nav-item mx-auto">
    <a class="nav-link" href="/new-value">Novo Valor</a>
  </li>
  <li class="nav-item mx-auto">
    <a class="nav-link" href="/finish-Task">Finalizar Tarefa</a>
  </li>
  <li class="nav-item mx-auto">
    <a class="nav-link" href="/win">Ganhar Negociação </a>
  </li>
  <li class="nav-item mx-auto">
    <a class="nav-link" href="/history">Histórico </a>
  </li>
</ul>
</div>
    );
    }
    }
    
    export default nav