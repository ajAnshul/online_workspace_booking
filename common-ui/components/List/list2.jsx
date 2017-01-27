import React from 'react';
const styles={
marginLeft:0,
marginBottom:10,
marginTop:10
};
export default class List2 extends React.Component{
constructor(props) {
    super(props);
    this.state = {data:props.datalist};
  }
  componentDidMount() {

  }
  render(){
  var check = this.props.change;
    return(
    <div id="content" >
      <div className="list">
          <h3 className="name">{this.state.data.wName}</h3>
        <p className="details"> Private Office &nbsp; &nbsp; <b className="avail">{this.state.data.availability}</b>
        <button type="button" className="btn btn-primary toggleButton" onClick={check}  value={this.state.data.id} data-dismiss="modal">{this.state.data.inst}</button>
        <button style={styles} type="button" className="buttonModal btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">view details</button>

        </p>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <p><b>Hourly Rates:</b> {this.state.data.hourlyRates} {this.state.data.wName}.</p>
                <p><b>Daily Rates:</b> {this.state.data.dailyRates}.</p>
                <p><b>Monthly Rates:</b> {this.state.data.monthlyRates}.</p>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Submit</button>
              </div>
            </div>

          </div>
      </div>
      </div>
    </div>
    );
  }
}
