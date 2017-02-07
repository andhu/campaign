import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { authActions, getAuth } from 'core/auth';
import Header from 'views/components/header';
import { Container, Grid, Sidebar, Segment, Progress, Menu, Rail, Icon } from 'semantic-ui-react';

class App extends Component {
  super(){
  }

  state = { visible: true };
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render(){
    const { visible } = this.state;
  return (
    <Grid centered columns={1}  verticalAlign={!this.props.authenticated ?'middle':null} style={{height:100+'%'}}>
      <Grid.Column>
        {this.props.authenticated ?
          <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical>
             <Header authenticated={this.props.authenticated} signOut={this.props.signOut} />
          </Sidebar>
          <Sidebar.Pusher>
            <Container fluid>

              <Container as={Rail} internal position='left' textAlign='left'>
                <Icon name='align justify' onClick={this.toggleVisibility} size='big' bordered circular/>
              </Container>
              <Progress percent={60} attached="top" color="teal" indicating />
              <main>{this.props.children}</main>
            </Container>
          </Sidebar.Pusher>
          </Sidebar.Pushable>
          :
          <main>{this.props.children}</main>
        }
      </Grid.Column>
    </Grid>
  );
}

  
}

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  signOut: PropTypes.func.isRequired
};

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


