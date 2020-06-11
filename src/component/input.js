import React from 'react'


class input extends React.Component {
    
    render(){
return(
    <input
    id="name"
    type="text"
    value={this.state.name}
    class="form-control"
    placeholder="Nome"
    onChange={this.complet}/>
)}
}
    
export default input