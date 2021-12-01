import { Card, Container} from "@material-ui/core";
import GridInfo from "./infoComponents/GridInfo";
import InfoAppBar from './infoComponents/InfoAppBar';
import {infoProject} from './infoUtilities/Info'

const InfoProject = () => {
  return (
    <Container>
      <InfoAppBar name={infoProject.nameProject} shortName={infoProject.shortName}/>
      <Card>
          <GridInfo/>
      </Card>
    </Container>
  );
};

export default InfoProject;
