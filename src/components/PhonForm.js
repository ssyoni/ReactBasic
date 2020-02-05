import React, { Component } from 'react';

class PhonForm extends Component {

    state = {
        name :'',
        phone: '',
    }
    //변견 이벤트가 발생할 때 사용할 함수 
    //e.target. : input
    // .value : input이 가지고있는 값으로 state를 변경해준다 
    handleChange = (e) => {
        this.setState({
            // input의 name값이 변경되면 e.target.name으로 들어와서 state의 name값이 수정되고 
            // phone값이 수정되면 state의 phone이 수정된다.
            [e.target.name] : e.target.value
        })
    }

    //여러개의 input을 관리하기 위해서는 name값을 설정해주어야 한다. 
    render() {
        return (
        <form>
            <input 
                name="name"
                placeholder="이름" 
                onChange={this.handleChange} 
                value={this.state.name} />
            <input 
                name="phone"
                placeholder="전화번호" 
                onChange={this.handleChange}
                value={this.state.phone}/>

                <div>
                {this.state.name} {this.state.phone}
                </div>
        </form>
        );
    }
}

export default PhonForm;