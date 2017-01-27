
import React from 'react';
import List2 from './list2.jsx';


export default class List extends React.Component {

  change2(i){
    console.log("now from list "+i);
  }
  render(){
  var changeFun = this.props.change;
    return (
    <div>
    {this.props.data.map((datalist,i) =>(
      <List2 key={i} datalist={datalist} change={changeFun} />
    ))};
    </div>
    );
  }
}
