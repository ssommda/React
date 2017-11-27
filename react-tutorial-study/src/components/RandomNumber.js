import React from 'react';

class RandomNumber extends React.Component {

    updateNumber(){
        let value = Math.round(Math.random()*100);
        this.props.onUpdate(value); //function 형태의 prop
    }

    constructor(props){
        super(props); //React.Component 의 생성자 메소드 상속
        this.updateNumber = this.updateNumber.bind(this); //update 메소드에서 this.props 에 접근 할 수 있도록 binding
    }

    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1> //prop
                <button onClick = { this.updateNumber }>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;
