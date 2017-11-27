import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber'; //자식 컴포넌트 import

class App extends React.Component {

    constructor(props){
      super(props); //부모 객체 호출

      //초기 상태 설정
      this.state = {
        value: Math.round(Math.random()*100)
      };

      this.updateValue = this.updateValue.bind(this); //updateValue() 메소드에서 this.setState 에 접근 할 수 있도록 bind
    }

    updateValue(randomValue){
      this.setState({
        value: randomValue // state 변경, setState({key: value}) 메소드
      });
    }

    render(){
        return  (
            <div>
                <Header title = { this.props.headerTitle }/>
                <Content title = { this.props.contentTitle }
                         body = { this.props.contentBody }/>
                <RandomNumber number = { this.state.value }
                              onUpdate = { this.updateValue }/> //RandomNumber 컴포넌트를 사용
            </div>
        );
    }
}

App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
};

//모듈 정의
export default App;
