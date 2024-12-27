import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    
    const INIT_URL = "https://images.unsplash.com/photo-1516900557549-41557d405adf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwY2l0eSUyMGltYWdlfGVufDB8fDB8fHww";
    const HOT_URl="https://plus.unsplash.com/premium_photo-1673638836583-7c16d2e34dae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1669972086277-7e8630710f6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMGNpdHl8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbiUyMGNpdHl8ZW58MHx8MHx8fDA%3D";
    return(
        <div className='InfoBox'>
          
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL : info.temp > 15 ? HOT_URl : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature: {info.temp}&deg;C</div>
          <div>Humidity: {info.humidity}</div>
          <div>Min Temperatur: {info.tempMin}&deg;C</div>
          <div>Max Temperature :{info.tempMax}&deg;C</div>
            <p>
                The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C
            </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
)}