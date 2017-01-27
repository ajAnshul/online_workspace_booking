import React from 'react';
import List from '../List/list.jsx';
export default class Sneed extends React.Component {
constructor(props) {
  super(props);
  this.state = {
  list:[]
  };
}
change(e){
e.preventDefault();
  console.log("got booking request nwo"+e.target.value);
  var temp = this.state.list;
  var i = e.target.value;
  if(temp[i].availability == "Available"){
  temp[i].availability = "Booked";
  temp[i].inst = "Booked";
  }
  else{
    temp[i].availability = "Available";
    temp[i].inst = "Book Now"
  }

  this.setState(this.state.list:temp);
}
componentDidMount() {
      console.log('Component DID MOUNT!');
      $.ajax({
      url: 'http://localhost:3000/getWorkspaces',
      dataType:'json',
      success: function(data){
      console.log('got success---------------------');
      console.log(JSON.stringify(data));
      this.setState({list:data})
      console.log('------------------------'+data+'----------------------');
      }.bind(this),
      error:function(err){
    console.log(err);
    console.log('error');
  }
})
   }
render(){
  return(
  <div>
    <center><h2>Online Workspace Booking</h2></center>
    <List data={this.state.list} change={this.change.bind(this)} />
  </div>
  );
}

}
