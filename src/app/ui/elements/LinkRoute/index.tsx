import { ReactElement } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

interface LinkRouteProps {
  route: string;
  text: string;
  
}

export const LinkRoute = ({ route, text }: LinkRouteProps): ReactElement => {

  return (
    <Link to={route}>
      {text}
    </Link>
  );
};
