import { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <div className="fas fa-info-circle">
          {'  '}
          {alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;
