import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { Authenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsExports);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Authenticator.Provider>
    <App />
  </Authenticator.Provider>
  </BrowserRouter>,
  rootElement
);
