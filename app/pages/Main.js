import React from 'react';
import { connect } from "react-redux";

import { Container } from 'react-grid-system';

// --------------Setup for Material-Ui -----------------------------
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// -----------------------------------------------------------------

// Themes
import angryTheme from '../themes/angry';
import happyTheme from '../themes/happy';
import sadTheme from '../themes/sad';
import disgustedTheme from '../themes/disgusted';
import surprisedTheme from '../themes/surprised';
import calmTheme from '../themes/calm';
import unknownTheme from '../themes/unknown';

// Components
import NavBar from './components/Navbar';

// @connect((store) => {
//   console.log("store", store)
//   return {
//     theme: store.emotion.theme
//   };
// })
export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: ''
    }
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    var newTheme = this.state.theme === happyTheme ? angryTheme : happyTheme;
    this.setState({
      theme: newTheme
    });
  }

  componentDidMount() {
      var ival = setInterval(this.changeTheme, 5000);
      this.setState({ival: ival});
  }

  componentWillUnmount() {
    clearInterval(this.state.ival);
  }

  // selectTheme(theme) {
  //   const theme = 'happy';
  //   switch (theme) {
  //     case 'angry':
  //       return angryTheme;
  //       break;
  //     case 'happy':
  //       return happyTheme;
  //       break;
  //     default:
  //       return unknownTheme;
  //   }
  // }

  // const { theme } from this.props;
  // const selectedTheme = selectTheme(theme);
  render() {
    return (
      // <MuiThemeProvider>
      <MuiThemeProvider muiTheme={getMuiTheme(this.state.theme)}>
        <div>
            <NavBar />
            <Container>
              {this.props.children}
            </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}
