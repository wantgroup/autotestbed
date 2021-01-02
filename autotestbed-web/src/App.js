import './App.css';
import "antd/dist/antd.css";
import From from './comonents/From/Index';
import {Switch, Route, Redirect} from "react-router-dom";
import {adminRoutes} from "./routes"

function App() {
  return (
  <From>
    <Switch>
      {adminRoutes.map(routr=>{
        return(
          <Route key={routr.path} path={routr.path}
            render={routeProps=>{
              return <routr.component {...routeProps}/>;
            }}
          />
        );
      })}
      <Redirect to="/err"/>
    </Switch>
  </From>
  );
}

export default App;
