import React from 'react';
import { IDays } from '../../../constants/days';
import useStyles from './DaysItem.styles';

const DaysItem: React.FC<IDays> = ({ id, name }) => {
  const css = useStyles();
  const [date, setDate] = React.useState<boolean>(false);
  const handleCollapse = () => {
    setDate(!date);
  };
  return (
    <div key={id}>
      <button
        type="button"
        onClick={handleCollapse}
        className={date ? css.circleAc : css.circle}
      >
        {name}
      </button>
    </div>
  );
};

export default DaysItem;
