import { Card, Grid, Typography, Icon } from "@material-ui/core";
import InfoSimple from "./InfoSimple";
import InfoList from "./InfoList";

const CardOne = ({ info, rol, iconName, isList }) => {
  return (
    <Card style={{ backgroundColor: "#F3F5F9" }}>
      {!isList ? (
        <InfoSimple info={info} rol={rol} iconName={iconName} />
      ) : (
        <InfoList info={info} rol={rol} iconName={iconName}/>
      )}
    </Card>
  );
};

export default CardOne;
