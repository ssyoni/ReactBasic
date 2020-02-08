import React, { Component } from 'react'

class PhoneForm extends Component {


    state = {
        name : '',
        phone: ''
    }

    //  변경 이벤트 발생하면 state 변경 
    // e : 이벤트 객체 
    // e.target : 이벤트 타겟 = input
    handlerChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value 
        })
    }
// 
    handleSubmit = (e) => {
        e.preventDefault(); 
        // dnjsfo
        this.props.onCreate(this.state);
        // this.props.onCreate({
        //     name : this.state.name,
        //     phone : this.state.phone
        // })

        //input값 초기화 
        this.setState({
            name :'',
            phone:''
        })
    }

    render() {
        return (
           <form onSubmit={this.handleSubmit}>
                <input placeholder="이름" 
                        onChange={this.handlerChange} 
                        value = {this.state.name} 
                        name="name"/>
                <input placeholder="전화번호" 
                        onChange={this.handlerChange} 
                        value={this.state.phone} 
                        name="phone"/>

                <button type="submit">등록</button>
                
           </form>   
        )
    }
}

export default PhoneForm
