import './styles.scss';
import { CELL_MIN_HEIGHT, CELL_MIN_WIDTH } from '../../constants';
import { useMemo } from 'react';

const Object = ({ _id }) => {
  const isCorner = useMemo(() => {
    return _id % 10 === 0;
  }, [_id]);

  const isLeftOrRightColumn = useMemo(() => {
    return (_id > 10 && _id < 20) || (_id > 30 && _id < 40);
  }, [_id]);

  const styles = {
    minHeight: isCorner ? CELL_MIN_HEIGHT : undefined,
    minWidth: isCorner || isLeftOrRightColumn ? CELL_MIN_WIDTH : undefined,
  };

  return (
    <div id={_id} className="cell" style={styles}>
      {_id}
    </div>
  );
};

export { Object };
