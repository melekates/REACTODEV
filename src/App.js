import { Component } from "react";
import { Header } from "./header";
import { UserCard } from "./userCard";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Bu kısma bir şeyler yazınız.",
    };
    this.handleChange = this.handleChange.bind(this);
    this.metin = "Yazdıklarınız burada görünecek.";
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    const headerLinks = ["Anasayfa", "Hakkımda", "İçerik"];
    if (
      this.state.value === "Bu kısma bir şeyler yazınız." ||
      this.state.value === ""
    ) {
      return (
        <div className="content">
          <Header headerLinks={headerLinks}></Header>
          <div class="container">
            <textarea class="form-control" value={this.state.value} onChange={this.handleChange} />
          </div>
           <UserCard metin="Yazdıklarınız burada gösterilecek."></UserCard>      
        </div>    
      );
    } else {
      return (
        <div className="content">
          <Header headerLinks={headerLinks}></Header>
          <div class="container">
            <textarea class="form-control" value={this.state.value} onChange={this.handleChange} />
          </div>
           <UserCard metin={this.state.value}></UserCard>     
        </div>    
      );
      
    }

   
  }
}
export default App;
