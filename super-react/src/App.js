import React, { Component } from 'react'
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    information: [],
  }
  handleCreate = (data) => {
    const{information} = this.state;
    //console.log(data);
    // concat이라는 내장함수 : 
    //기존 배열 수정하지 않고 새로운 배열 만들어서 
    //그 배열에다가 데이터를 집어넣어서 
    //그 배열을 기존에 있던 배열에 넣어주는 작업을 한다. 
    this.setState({
      information : information.concat({  
        //data가 추가될 때 마다 id가 1씩 증가
        ...data,
        id: this.id++
      })
    });

  }

  handleRemove = (id) =>{
    const {information} = this.state;
      this.setState({
        information : information.filter(info => info.id !== id)
      })
  }
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList 
          data = {this.state.information}
          onRemove={this.handleRemove} />
      </div>
    )
  }
}

export default App


// Object.assign 
/*
첫번째 인자값 : 타겟 오브젝트 
두번째 : 소스 오브젝트
소스 오브젝트는 타겟 오브젝트에 병합된다?
리턴값으로는 타겟 오브젝트를 반환
*/