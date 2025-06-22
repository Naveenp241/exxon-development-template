import { Template, TemplateRenderProps } from "@yext/pages";
import Banner from "../components/Banner";
import Breadcrumbs from "../components/Breadcrumbs";
import DirectoryStateGrid from "../components/DirectoryStateGrid";
import PageLayout from "../components/PageLayout";
import "../index.css";

const State: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
  __meta,
}) => {
  const {
    name,
    description,
    c_addressRegionDisplayName,
    dm_directoryParents,
    dm_directoryChildren,
  } = document;

  return (
    <>
      <PageLayout templateData={{ __meta, document }}>
        <Banner
          name={c_addressRegionDisplayName ? c_addressRegionDisplayName : name}
        />
        <div className="centered-container">
          <Breadcrumbs
            breadcrumbs={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
          />
          <DirectoryStateGrid
            name={
              c_addressRegionDisplayName ? c_addressRegionDisplayName : name
            }
            description={description}
            directoryChildren={dm_directoryChildren}
            relativePrefixToRoot={relativePrefixToRoot}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default State;
