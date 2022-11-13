import React from "react";
import { IDays } from "../../../constants/days"
import useStyles from "./DaysItem.styles";
import { useTranslation } from "react-i18next";

const DaysItem: React.FC<IDays> = ({ id, name }) => {
  const css = useStyles();
  const [date, setDate] = React.useState<boolean>(false);
  return (
    <div onClick={() => setDate(!date)} key={id} className={date ? css.circleAc : css.circle}>
      {name}
    </div>
  )
}

export default DaysItem;