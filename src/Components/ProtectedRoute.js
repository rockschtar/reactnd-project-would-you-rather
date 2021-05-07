import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
      return (
        rest.authenticateUser
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
      );
  }}/>
);

function mapStateToProps({ authenticateUser }) {
    return {
        authenticateUser,
    };
}

export default connect(mapStateToProps)(ProtectedRoute);