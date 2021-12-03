import { Card } from "@material-ui/core";
import GridInfo from "./infoComponents/GridInfo";
import InfoAppBar from "./infoComponents/InfoAppBar";
import { infoProject } from "./infoUtilities/Info";

const InfoProject = () => {
    return (
        <>
            <InfoAppBar
                name={infoProject.nameProject}
                shortName={infoProject.shortName}
            />
            <Card style={{ borderRadius: 20 }}>
                <GridInfo />
            </Card>
        </>
    );
};

export default InfoProject;
