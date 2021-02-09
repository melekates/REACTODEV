import React from "react";

export class UserCard extends React.Component
{
  
    render(){
        return(
            <div class="container">
            <textarea class="form-control" value={this.props.metin} disabled="true"/>
           </div>
        )
    }

}