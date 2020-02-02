# react-basic
리액트 기초 
<br><br><br>

> <h3>Model vs view</h3>

모델과 뷰는 양방향 바인딩 변화이다. 모델이 변하면 뷰가 변하고, 뷰가 변하면 모델이 변한다. 

이는 유지보수 작업의 비효율을 초래한다. 

이 때 변화(Mutation)하지 않고 데이터가 변하면 view를 날리고 새로 작성한다면?  

but, 브라우저는 DOM기반으로 작성되기 때문에 페이지가 그때그때 바뀐다면 성능이 매우 떨어진다. 




<br><br>



> <h3>React</h3>

: 가상의 DOM에 랜더링 해서 변화가 필효한 곳만 update!  
 유지보수와 확장성이 좋아진다 !
 
 <img width="1442" alt="스크린샷 2020-01-27 오후 12 39 47" src="https://user-images.githubusercontent.com/48245776/73149442-c2143400-4104-11ea-9135-7e7390e6da0b.png">
 
 이해를 돕기위한 영상 : [React and the Virtual Dom](https://www.youtube.com/watch?v=muc2ZF0QIO4)
 
 
 
 <br><br><br>


> WebPack 과 babel

* webpack : 의존성을 분석해 여러개의 모듈을 하나로 묶어주는 역할 
* babel : 다양한 브라우저 환경에 맞춰 최신 코드로 변환해주는 코드 변환기.

 <br><br><br>
 
> <h3>JSX란</h3>

javascript + XML 이다. 자바스크립트의 확장 문법. 자바스크립트에서 마크업 코드를 작성할 수 있게 된다. 

뿐만 아니라 변수나 프로퍼티 바인딩 기능도 제공한다.

JSX에서 지켜야 할 규칙
1) 모든 태그들은 전부 닫아줘야 한다. 
2) 두 개 이상의 element들은 무조건 하나의 element로 감싸져 있어야 한다. -> v.16에서 도입된 fragment를 사용하면 불필요하게 <div>태그로 감싸줄 필요가 없어진다. 
 
<br><br>

* ***jsx에서 style 적용하기***

기존의 자바스크립트에서는 문자열 형태로 스타일을 적용할 수 있었다.  

```js
<div style="background-color:white; padding:16px; color:green; font-size:16px">안녕하세요!<div>
```

리액트에서는 객체 형태로 적용된다. 각 요소들은 카멜케이스를 사용해야 한다. 

```js
class App extends Component {
  render() {
    const style = {
      backgroundColor : 'black',
      padding: '16px',
      color: 'green',
      fontSize: '3px'
    };
    return <div style = {style}>안녕하세요!</div>;
  };
}
```

App.css 파일을 만들어서 적용해보자 

```js
import React, { Component } from 'react';
import './App.css';    // css파일 불러오기 

class App extends Component {
  render() {
    return <div className="App">아녕하세요!</div>;  
  }
}
export default App;
```

리액트에서는 클래스 이름을 '''className''' 로 명시해줘야 한다. (그냥 class라고 해도 문제는 없음.)

<br><br>

> <h3>props 와 state</h3>

리액트에서 데이터를 다룰 때 사용되는 개념 

* props : 부모컴포넌트에서 자식컴포넌트로 값을 넘겨줄 때 사용된다. 

***MyName.js*** (자식 컴포넌트)
```js
import React, {Component} from 'react';

class MyName extends Component {
  render(){
    return(
      <div>
        안녕하세요, 제 이름은 <b>{this.props.name}</b>입니다. 
      </div>
    )
  }
}

export default MyName;
```
props를 넘겨 받을 때 'this.props' 로 받는다. 

***App.js*** (부모 컴포넌트)
```js
import React, { Component } from 'react';
import './App.css';    
import MyName from './MyName'   // 자식컴포넌트인 MyName.js에서 MyName를 import.

class App extends Component {
  render() {
    return (
      <MyName name = "리액트"/>
    );
  }
}
export default App;
```

만약에 name 밸류가 주어지지 않는다면 디폴트 밸류를 지정할 수 있다. 

컴포넌트 안에 static으로 티폴트 props를 설정하는 방법과 , 컴포넌트 밖에서 설정하는 방법이 있다. 


***컴포넌트 안에서***
```js
class MyName extends Component {

  static defaultProps = {     // 기본값 설정 
    name : '기본이름'
  }
  
   render(){
    return(
      <div>
        안녕하세요, 제 이름은 <b>{this.props.name}</b>입니다. 
      </div>
    )
  }
}
```

***컴포넌트 밖에서***
```js
import React, {Component} from 'react';

class MyName extends Component {
  render(){
    return(
      <div>
        안녕하세요, 제 이름은 <b>{this.props.name}</b>입니다. 
      </div>
    )
  }
}

MyName.defaultProps = {
  name : 'tmddus'
};
export default MyName;
```
<br/>
class형 컴포넌트를 함수형 컴포넌트로 바꿔보자. 

```js
import React from 'react';

const MyName = ({name}) => {
  return <div>안녕하세요! 제 이름은 {name} 입니다. </div>
}

MyName.defaultProps = {
  name : 'tmddus'
};
export default MyName;
```
함수형 컴포넌트를 사용하게 되면 코드의 상단에서 컴포넌트를 불러오지 않아도 된다. 

함수형 컴포넌트는 초기 마운트 속도가 미세하게 더 빠르다. 메모리 자원도 덜 사용함. 값을 받아와서 보여주기만 하는 용도의 컴포넌트일 경우 함수형으로 만들어야 나중에 컴포넌트 수가 많아졌을때 더욱 효율적일 수 있다. 

<br/><br/>

* state : 컴포넌트 자기 자신이 내부에서 변경할 수 있다. 변화가 필요할 경우 컴포넌트의 내장함수인 'setState' 함수를 사용한다. state가 바뀔 때마다 re-rendering 된다. 

<br/>

***Counter.js***
```js
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0 // 고정 값 할당
  };

  // 값 증가 메소드
  handleIncrease = () => {
    // number 값 update
    // bad case
    //this.state.number = thos.state.number + 1
    this.setState({
      number: this.state.number + 1
    });
  };
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
```

state 를 사용할 땐 this.setState 함수 사용해준다.

만약 **arrows function**이 아니라 기본 함수형으로 메소드를 생성해준다면 **this** 를 인식하지 못한다. 

```js
 handleIncrease(){
    this.setState({
      number: this.state.number + 1
    });
  };
```

**TypeError: Cannot read property 'setState' of undefined**

자바스크립트에서 this를 사용하려면 constructor 안에서 super(props) 를 명시해줘야 한다. 

Component를 extends 했기 때문에 컴포넌트가 가지고있는 생성함수를 먼저 호출해주어야 한다. ([왜 super(props)를 사용해야하는가?](https://velog.io/@honeysuckle/%EB%B2%88%EC%97%AD-Dan-Abramov-%EC%99%9C-superprops-%EB%A5%BC-%EC%9E%91%EC%84%B1%ED%95%B4%EC%95%BC-%ED%95%98%EB%8A%94%EA%B0%80))


```js
constructor(props){
    super(props);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    // 각 메소드에서 사용하는 this 가 constructor 내부의 this다 라는 것을 명시 
  }
```

<br/><br/>

> <h3>LifeCycle API</h3>

컴포넌트의 생성, 삭제 등의 모든 생명주기를 관리하는 API 

![image](https://user-images.githubusercontent.com/48245776/73604752-16be2000-45d9-11ea-8a49-62ee189a9164.png)

* **Mounting** : 컴포넌트가 브라우저에 나타나는 것 
  * ***constructor*** : 컴포넌트가 만들어지는 과정에서 가장 먼저 
실행되는 함수 (state 초기 설정, 컴포넌트 만들어지기 이전 선행작업이 있는 경우)
  * ***getDeriveStateFromProps*** : 만약에 props로 받는 값을 state로 동기화 시키고 싶을 때 
  * ***render*** : 어떤 DOM을 만들게 될지, 내부 태그들에 어떤 값을 전달해 줄지를 정의 
  * ***componentDidMount*** : 컴포넌트가 브라우저에 나타나게 된 시점에 뭘 할건지 명시해준다. 브라우저 상에 나타나게 된 이후에 호출됨. 외부 라이브러리를 사용 or 네트워크 요청 or API요청을 할 때 여기서 처리하게 된다. 


* **Updating** : 컴포넌트의 props나 state가 바뀌었을 때 
  * ***shouldComponentUpdate*** : 컴포넌트 update 성능을 최적화하고 싶을때. 기본적으로 부모 컴포넌트가 렌더링되면 자식도 렌더함수 호출된다. 버추얼 돔에 렌더링 되는 작업에서도 성능을 아끼고 싶을 때 사용. true or false를 반환한다. true -> render / false -> stop 할 수 있다. 
  * ***getSnapshotBeforeUpdate*** : 렌더링 결과물이 브라우저에 반영되기 직전에 호출되는 함수. 스크롤위치나 돔의크기를 사전작업하고자 할 때.
  * ***componentDidUpdate*** : update뒤에 호출되는 함수. state변경 후에 이전상태, 지금의 상태를 비교할 수 있다. 


* **Unmounting** : 컴포넌트가 브라우저에서 사라질 때 
  * ***componentWillUnmount*** : 컴포넌트가 사라지는 과정에 호출되는 함수 


