import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component {

    //data가 안넘어오면  Cannot read property 'map' of undefined 에러남 
    static defaultProps ={
        data:[]
    }

    render() {
        const {data, onRemove} = this.props;
        const list = data.map(
            // key 컴포넌트를 여러개 렌더링 하게 될 때 고유값을 지정해주면서 업데이트 성능을 최적화해준다.
            info => (
            <PhoneInfo 
                onRemove={onRemove} 
                info={info} 
                key={info.id}/>
                )
            // info 들을 가지고 PhoneInfo 컴포넌트러 변환을 해준 것이다. 그대로 사용하면 됨. 
        );

        return (
            <div>     
                {list}
            </div>
        )
    }
}

export default PhoneInfoList
