import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0 // 고정 값 할당
  };

  constructor(props) {
    super(props);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    // 각 메소드에서 사용하는 this 가 constructor 내부의 this다 라는 것을 명시
  }
  // 값 증가 메소드
  handleIncrease() {
    this.setState({
      number: this.state.number + 1
    });
  }
  //값 감소 메소드
  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        {/* 버튼이 클릭 됐을 때 메소드 적용 되도록 이벤트 설정해준다  */}
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
