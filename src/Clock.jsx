import React, {Component} from 'react';
import './App.css';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state={
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
        }
    }
    componentWillMount(){
      this.getTimeUntil(this.props.deadline)
    }
    componentDidMount(){
      setInterval(()=> this.getTimeUntil(this.props.deadline),1000);
    }
    getTimeUntil(deadline){
      let months=["Ocak", "Subak", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos","Eylül", "Ekim","Kasım","Aralık"];
      let paramDay=deadline.split(' ');
      let time= Date.parse(new Date(Number.parseInt(paramDay[2],10),
            months.indexOf(paramDay[1]),
            Number.parseInt(paramDay[0],10))) - Date.parse(new Date());
      let seconds= Math.floor((time/1000)%60);
      let minutes= Math.floor((time/1000/60)%60);
      let hours=Math.floor(time/(1000*60*60)%24);
      let days=Math.floor(time/(1000*60*60*24));
      this.setState({days,hours,minutes,seconds})
    }
    leadingZero(num){
      return num < 10 ? '0' + num:num;
    }
    render(){
        return(
          <div>
            <div className="Clock-days">{this.leadingZero(this.state.days)} Gun</div>
            <div className="Clock-hours">{this.leadingZero(this.state.hours)} Saat</div>
            <div className="Clock-minutes">{this.leadingZero(this.state.minutes)} Dakika</div>
            <div className="Clock-seconds">{this.leadingZero(this.state.seconds)} Saniye</div>
          </div>

        )

    }

}
export default Clock;
