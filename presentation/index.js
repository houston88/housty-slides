// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fit,
  Fill
} from "spectacle";

// Import theme
// import createTheme from "spectacle/lib/themes/default";
import { theme } from "spectacle-theme-solarized-dark";

import preloader from "spectacle/lib//utils/preloader";

// Require CSS
require("normalize.css");

// const theme = createTheme({
//   primary: "white",
//   secondary: "#1F2022",
//   tertiary: "#03A9FC",
//   quaternary: "#CECECE"
// }, {
//   primary: "Montserrat",
//   secondary: "Helvetica"
// });

const images = {
  fuegoDrawer: require("../assets/portfolio/taxCollabCompFuegoShell2.gif"),
  stageCollapse: require("../assets/portfolio/stageCollapse.gif"),
  introAnimLinkTp: require("../assets/portfolio/assocAnim.gif"),
  leftNavAnim: require("../assets/portfolio/animatedMenuIcon.gif"),
  addHome: require("../assets/portfolio/addHomeAndroid.png"),
  androidIcon: require("../assets/portfolio/androidIcon.png"),
  progressPieCharts: require("../assets/portfolio/progressPieCharts.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide", "fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Houston's UI Gallery
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Just a bunch of random examples of recent and past work.
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Some of the latter slides go way way back... I'm old okay!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">React Drawer Component</Heading>
          <Image src={images.fuegoDrawer.replace("/", "")} margin="0px auto 40px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Details Layout and Transitions</Heading>
          <Image src={images.stageCollapse.replace("/", "")} margin="0px auto 40px" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Page Load and Welcome</Heading>
          <Image src={images.introAnimLinkTp.replace("/", "")} margin="0px auto 40px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">SVG Animation and Layout</Heading>
          <Image src={images.leftNavAnim.replace("/", "")} margin="0px auto 40px" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Progressive Web Apps</Heading>
          <Image src={images.addHome.replace("/", "")} width="35%" margin="6px" display="inline" />
          <Image src={images.androidIcon.replace("/", "")} width="35%" margin="6px" display="inline" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Highcharts Data Viz</Heading>
          <Image src={images.progressPieCharts.replace("/", "")} height="75vh" height="75vh" margin="0px auto" />
        </Slide>
        {/* <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide> */}
      </Deck>
    );
  }
}
