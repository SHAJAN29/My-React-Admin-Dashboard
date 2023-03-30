import { useState } from "react";
import { Chart as Chartjs } from "chart.js/auto";
import "./App.css";
import { Bar, Line } from "react-chartjs-2";
import { Flochart } from "./components/Flochart";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { Opacity } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import IconButton from "@mui/material/IconButton";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { color } from "@mui/system";
import { Card1 } from "./Card";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import TableChartIcon from "@mui/icons-material/TableChart";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import styled from "@emotion/styled";
import { light } from "@mui/material/styles/createPalette";

function App() {
  // const labels = Utils.months({count: 7});
  const labels = ["jan", "feb", "mar", "api"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 5000, 10000],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        // tension:
      },
    ],
  };

  // const BorderLinearProgress = styled(LinearProgress)(({  }) => ({
  //   height: 15,
  //   borderRadius: 5,

  const [colors, setColors] = useState([
    { color: "primary", colorCode: "#4e73df" },
    { color: "Success", colorCode: "#1cc88a" },
    { color: "Info", colorCode: "#36b9cc" },
    { color: "Warning", colorCode: "#f6c23e" },
    { color: "error", colorCode: "#e74a3b" },
    { color: "Secondary", colorCode: "#858796" },
    { color: "Light", colorCode: "#f8f9fc" },
    { color: "Dark", colorCode: "#5a5c69" },
  ]);
  // }));
  return (
    <div className="App">
      <div className="rightSideContent">
        <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
          <IconButton>😍</IconButton>
          sb admin
        </Typography>

        <hr />
        <Typography variant="h5">
          <Button
            variant="text"
            sx={{
              color: "#fff",
              margin: " 15px 0",
              fontSize: "15px",
              textTransform: "capitalize",
            }}
            startIcon={<SpeedIcon />}
          >
            DashBoard
          </Button>
        </Typography>
        <hr />
        <Typography
          variant="subtitle2"
          sx={{ textTransform: "uppercase", opacity: "0.8", margin: " 20px 0" }}
        >
          interface
        </Typography>

        <Typography variant="h5">
          <Button
            variant="text"
            sx={{
              color: "#fff",
              marginBottom: "20px",
              fontSize: "15px",
              textTransform: "capitalize",
            }}
            startIcon={<SettingsIcon />}
          >
            components
          </Button>
        </Typography>

        <Typography variant="h5">
          <Button
            variant="text"
            sx={{
              color: "#fff",
              marginBottom: "20px",
              fontSize: "15px",
              textTransform: "capitalize",
            }}
            startIcon={<BuildIcon />}
          >
            utilities
          </Button>
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{ textTransform: "uppercase", opacity: "0.8", margin: " 20px 0" }}
        >
          <hr />
          addons
        </Typography>
        <Typography variant="h5">
          <Button
            variant="text"
            sx={{
              color: "#fff",
              marginBottom: "20px",
              fontSize: "15px",
              textTransform: "capitalize",
            }}
            startIcon={<FolderIcon />}
          >
            pages
          </Button>
        </Typography>

        <Typography variant="h5">
          <Button
            variant="text"
            sx={{
              color: "#fff",
              marginBottom: "20px",
              fontSize: "15px",
              textTransform: "capitalize",
            }}
            startIcon={<DonutLargeIcon />}
          >
            charts
          </Button>
        </Typography>

        <Typography variant="h5">
          <Button
            variant="text"
            sx={{
              color: "#fff",
              marginBottom: "20px",
              fontSize: "15px",
              textTransform: "capitalize",
            }}
            startIcon={<TableChartIcon />}
          >
            tables
          </Button>
        </Typography>

        <hr />
      </div>

      {/*---------------------------- {leftSideContent} -------------------*/}

      <div className="leftSideContent">
        {/*------------------------- navebar ---------------------------------*/}
        <div className="navebar">
          <TextField
            id="outlined-basic"
            sx={{
              marginTop: "2px",
              border: "none",
              outline: "none",
              Opacity: "0.5",
            }}
            size="small"
            label="Search for..."
            variant="outlined"
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: " 0% 7% 7% 0%",

              marginLeft: "-5px",
              marginTop: "2px",
            }}
            className="searchButton"
            size="large"
          >
            <SearchOutlinedIcon />
          </Button>
          {/*------------------------- navebar >navSidebar---------------------------------*/}
          <div className="navSidebar">
            <Badge badgeContent={"3+"} color="error">
              <IconButton aria-label="delete">
                <MailIcon sx={{ color: "#d1d3e2" }} />
              </IconButton>
            </Badge>

            <Badge badgeContent={"1"} color="error" sx={{ marginX: "30px" }}>
              <IconButton aria-label="delete">
                <NotificationsIcon sx={{ color: "#d1d3e2" }} />
              </IconButton>
            </Badge>
          </div>
          {/*------------------------- navebar >preofilePicture---------------------------------*/}

          <div className="preofilePicture">
            <Badge>
              <p className="para">M.Shajan</p>
              <Avatar
                sx={{ cursor: "pointer" }}
                alt="Travis Howard"
                src="src/components/download (1).jfif"
              />
            </Badge>
          </div>
        </div>
        <div className="leftSideContentData">
          <Typography
            variant="h6"
            sx={{
              textTransform: "capitalize",
              fontWeight: "bold",
              color: "text.secondary",
              margin: "20px 0",
            }}
          >
            Dashboard
          </Typography>
          <div className="priceCards">
            <Card1
              color1={"#1976d2"}
              title={"EARNINGS(ANNUAL)"}
              value={"$215,000"}
              icon={
                <CalendarTodayIcon
                  sx={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#d1d3e2",
                    marginX: "12px",
                  }}
                />
              }
            />
            <Card1
              color1={"green"}
              title={"EARNINGS(ANNUAL)"}
              value={"$215,000"}
              icon={
                <AttachMoneyIcon
                  sx={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#d1d3e2",
                    marginX: "12px",
                  }}
                />
              }
            />
            <Card1
              color1={"teal"}
              title={"TASKS"}
              value={"50%"}
              icon={
                <ListAltIcon
                  sx={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#d1d3e2",
                    marginX: "12px",
                  }}
                />
              }
            />

            <Card1
              color1={"#ffd600"}
              title={"pending requests"}
              value={"18"}
              icon={
                <QuestionAnswerIcon
                  sx={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#d1d3e2",
                    marginX: "12px",
                  }}
                />
              }
            />
          </div>

          <div className="charts">
            <div className="flowLeft">
              <Card sx={{ maxWidth: "auto", height: "auto" }}>
                <CardHeader
                  sx={{ color: "#1976d2", backgroundColor: "#e4e5e9" }}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Earinngs Overview"
                />
                <Line data={data} />
              </Card>
            </div>
            <div className="flowRight">
              <Flochart />
            </div>
          </div>

          {/* ----------------------------progressBar============================== */}

          <div className="progressBar">
            <Card
              sx={{
                maxWidth: "800px",
                height: "550px",

                boxShadow: "0px 2px 15px -6px rgba(0,0,0,0.75)",
              }}
            >
              <CardHeader
                sx={{
                  color: "#1976d2",
                  backgroundColor: "#e4e5e9",
                  display: "flex",
                }}
                title="Projects"
              />
              <Box sx={{ padding: "20px" }} className="prograssdiv">
                <Typography
                  sx={{
                    marginTop: "30px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Server Migration <span>20%</span>
                </Typography>
                <div className="box1">
                  <div className="box1Inside"></div>
                </div>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                  Sales Tracking <span>40%</span>
                </Typography>
                <div className="box1">
                  <div className="box1InsideYel"></div>
                </div>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                  Customer Database <span>60%</span>
                </Typography>
                <div className="box1">
                  <div className="box1InsideBlue"></div>
                </div>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                  Payment Details <span>80%</span>
                </Typography>
                <div className="box1">
                  <div className="box1Insideteal"></div>
                </div>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                  Account Setup <span>100%</span>
                </Typography>
                <div className="box1">
                  <div className="box1Insidegreen"></div>
                </div>
              </Box>
            </Card>
            <Card
              sx={{
                maxWidth: "800px",
                height: "550px",
                boxShadow: "0px 2px 15px -6px rgba(0,0,0,0.75)",
              }}
            >
              <CardHeader
                sx={{
                  color: "#1976d2",
                  backgroundColor: "#e4e5e9",
                  display: "flex",
                }}
                title="Illustrutions"
              />
              <Box sx={{ height: "400px", width: "780px" }} className="svgTag">
                <img
                  src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                  alt=""
                />
              </Box>
              <Box sx={{ padding: "0 30px" }}>
                <Typography variant="subtitle">
                  Add some quality, svg illustrations to your project courtesy
                  of unDraw, a constantly updated collection of beautiful svg
                  images that you can use completely free and without
                  attribution!
                </Typography>
                <br />
                <br />
                <Link href="http://google.com">
                  Browse Illustrations on unDraw →
                </Link>
              </Box>
            </Card>
          </div>

          {/* ----------------------------colorBox============================== */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2em",
            }}
            className="colorBox"
          >
            <Box className="colorcode">
              {colors.map((ele, index) => (
                <ColorBox key={index} data={ele} />
              ))}
            </Box>

            <Box className="aprochPannel">
              <Card
                sx={{
                  maxWidth: "50rem",
                  height: "220px",
                  boxShadow: "0px 2px 15px -6px rgba(0,0,0,0.75)",
                }}
              >
                <CardHeader
                  sx={{
                    color: "#1976d2",
                    backgroundColor: "#e4e5e9",
                    display: "flex",
                  }}
                  title="Development Approch"
                />
                <Box sx={{ padding: "30px" }}>
                  <Typography variant="subtitle">
                    SB Admin 2 makes extensive use of Bootstrap 4 utility
                    classes in order to reduce CSS bloat and poor page
                    performance. Custom CSS classes are used to create custom
                    components and custom utility classes.
                  </Typography>

                  <br />
                  <br />
                  <Typography variant="subtitle">
                    Before working with this theme, you should become familiar
                    with the Bootstrap framework, especially the utility
                    classes.
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;

function ColorBox({ data }) {
  const { color, colorCode } = data;

  return (
    <Box
      sx={{
        padding: "20px",
        width: "350px",
        height: "100px",
        backgroundColor: colorCode,
      }}
    >
      <Typography
        sx={{ textTransform: "capitalize" }}
        variant="h5"
        color={color === "Light" ? "#000000" : "#fff"}
      >
        {color}
      </Typography>
      <Typography
        sx={{ fontSize: "12px" }}
        color={color === "Light" ? "#000000" : "#fff"}
      >
        {colorCode}
      </Typography>
    </Box>
  );
}
