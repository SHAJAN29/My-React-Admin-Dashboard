import { Box, Card, CardContent, Typography } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export function Card1({title,value,icon,color1}){

return(
<Card className="card" 
sx={{ 
  display: 'flex',
alignItems:"center", 
justifyContent: "space-between",
 width:"300px",
 borderLeft:`3px solid ${color1}`,
 marginLeft:"20px", boxShadow: "0px 2px 15px -6px rgba(0,0,0,0.75)"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography color={color1}   variant="subtitle1"sx={{fontSize:"10px",fontWeight:"bold",textTransform:"uppercase"}} >
            {title}
          </Typography>
          <Typography sx={{fontSize:"19px",fontWeight:"bold"}}  color="text.secondary" >
            {value}
          </Typography>
        </CardContent>
    
      </Box>

{icon}    

</Card>

)












}
