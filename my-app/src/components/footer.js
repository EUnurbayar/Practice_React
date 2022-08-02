import React, {Component} from "react";

class Footer extends Component{
    
    // createAlert(){
    //     alert('hello. You clicked');
    // }

    changed(){
        console.log('changed')
    }
    
    render(){
        return (
            <div>
                <h2 onClick={this.props.myalert}>{this.props.trademark}</h2>
                <input onChange={this.changed} type="text" />
            </div>
        )
    }
}


export default Footer;