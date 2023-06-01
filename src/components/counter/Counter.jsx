import './Counter.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

export default function Counter({ value }) {
  const [counter, setCounter] = useState(value);

  const handleAddOne = () => {
    setCounter(counter + 1);
  };

  const handleRemoveOne = () => {
    setCounter((counter) => (counter <= 0 ? setCounter(0) : counter - 1));
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <div className='container'>
        <div className='container__counter'>
          <h2 className='container__counter__title'>Counter</h2>
          <h2 className='container__counter__subtitle'>{counter}</h2>

          <div className='container__counter__button-group'>
            <div className='container__counter__button-group__button'>
              <Button colorScheme='teal' onClick={handleAddOne}>
                +1
              </Button>
            </div>
            <div className='container__counter__button-group__button'>
              <Button colorScheme='teal' onClick={handleRemoveOne}>
                -1
              </Button>
            </div>
            <div className='container__counter__button-group__button'>
              <Button colorScheme='red' onClick={handleReset}>
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  value: 0,
};
