import Dataset from "layouts/tables";
import Metabolites from "layouts/metabolites";
import ProteinInteraction from "layouts/proteinInteraction";
import TPM from "layouts/TPM";
import KnowledgeGraph from "layouts/knowledgeGrpah";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dataset",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Dataset />,
  },
  {
    type: "collapse",
    name: "Knowledge Graph",
    key: "knowledge",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/knowledge",
    component: <KnowledgeGraph />,
  },
  {
    type: "collapse",
    name: "Protein Protein Interactions",
    key: "proteinInteraction",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/proteinInteraction",
    component: <ProteinInteraction />,
  },
  {
    type: "collapse",
    name: "Metabolites",
    key: "metabolites",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/metabolites",
    component: <Metabolites />,
  },
  {
    type: "collapse",
    name: "Transcripts per Million",
    key: "transcriptspermillion",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/transcriptspermillion",
    component: <TPM />,
  },
];

export default routes;
