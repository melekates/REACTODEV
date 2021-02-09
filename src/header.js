import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
            <div class="conteiner offset-md-4">
          <a class="navbar-brand" href="/Anasayfa">
            {this.props.headerLinks[0]}
          </a>
          <a class="navbar-brand" href="/Hakkımda">
          {this.props.headerLinks[1]}
          </a>
          <a class="navbar-brand" href="/İçerik">
          {this.props.headerLinks[2]}
          </a>
          </div>
        </nav>        
      </div>
    );
  }
}
