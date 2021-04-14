import { Fragment } from 'react';
import spinner from './loading.gif';

const Spinner = () => (
  <>
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: '200px', display: 'block', margin: 'auto' }}
    />
  </>
);

export default Spinner;
