import React, { Component } from 'react'

class PhoneInfo extends Component {

    handleRemove = () =>{
        const{info, onRemove} = this.props;
        onRemove(info.id);
    }

    render() {
        // 비구조 할당 
        const {name, phone}= this.props.info;

        const style={
            border: '1px solid black', 
            padding: '8xp',
            margin: '8px'
        };

        return (
            <div style={style}> 
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>delete</button>
            </div>
        );
    }
}

export default PhoneInfo


// 각 전화정보를 보여주는 컴포넌트 