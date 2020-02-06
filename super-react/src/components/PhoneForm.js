import React, { Component } from 'react'

class PhoneForm extends Component {

    state = {
        name : ''
    }

    //  변경 이벤트 발생하면 state 변경 
    // e : 이벤트 객체 
    // e.target : 이벤트 타겟 = input
    handlerChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    render() {
        return (
           <form>
                <input placeholder="이름" onChange={this.handlerChange} value = {this.state.name}/>
                {this.state.name}
           </form>               
         
        )
    }
}

export default PhoneForm
