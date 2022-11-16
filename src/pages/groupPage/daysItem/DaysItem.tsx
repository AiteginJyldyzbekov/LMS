import React from 'react';
import { useTranslation } from 'react-i18next';
import { IDays } from '../../../types/types';
import useStyles from './DaysItem.styles';

const DaysItem: React.FC<IDays> = ({ id, name }) => {
  const css = useStyles();
  const { t } = useTranslation();
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
        {t(name)}
      </button>
    </div>
  );
};

export default DaysItem;
