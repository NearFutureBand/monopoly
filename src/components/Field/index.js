import { Object } from '../Object';
import './styles.scss';
import { CELL_MIN_WIDTH } from '../../constants';

const Field = () => {
  return (
    <div className="field" style={{ minWidth: CELL_MIN_WIDTH * 11 }}>
      <div className="upper-row">
        {[20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((cell) => {
          return <Object _id={cell} key={cell} />;
        })}
      </div>
      <div className="middle-row">
        <div className="left-column">
          {[11, 12, 13, 14, 15, 16, 17, 18, 19].reverse().map((cell) => {
            return <Object _id={cell} key={cell} />;
          })}
        </div>
        <div className="center-space"></div>
        <div className="right-column">
          {[31, 32, 33, 34, 35, 36, 37, 38, 39].map((cell) => {
            return <Object _id={cell} key={cell} />;
          })}
        </div>
      </div>
      <div className="bottom-row">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse().map((cell) => {
          return <Object _id={cell} key={cell} />;
        })}
      </div>
    </div>
  );
};

export { Field };
