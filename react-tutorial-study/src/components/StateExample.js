import React from 'react';

class StateExample extends React.Component {

   //state 초기값 설정
   constructor(props) {
      super(props);

      this.state = {
         header: "Header Initial state",
         content: "Content Initial State"
     };
   }

   //state 업데이트
   updateHeader(text){
       this.setState({
           header: "Header has changed",
           content: "Content has changed"
       });
   }

   //state 렌더
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <button onClick={this.updateHeader.bind(this)}>Update</button>
         </div>
      );
   }
}

export default StateExample;
