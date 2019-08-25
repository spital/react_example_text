import React from 'react';
export default class HideableText extends React.Component {
constructor (props) {
super(props);
this.state = {
 isHidden: false,
 }
}
toggleIsHidden (){
this.setState((currentState) => ({
 isHidden: !currentState.isHidden,
 }));
}

render(){
 return (
 <div>
 Click <button onClick={()=>this.toggleIsHidden()}>here to toggle</button>
 >>> {!this.state.isHidden && this.props.text}
 </div>
 );
}
}
