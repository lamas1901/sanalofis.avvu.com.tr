import { BrowserRouter as Router } from 'react-router-dom';
import Messenger from './Messenger';

export default (props) => {
  return (
    <Router>
      <Messenger/>
    </Router>
  );
}