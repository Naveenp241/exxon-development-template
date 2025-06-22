import { Template, TemplateRenderProps } from "@yext/pages";
import Banner from "../components/Banner";
import Breadcrumbs from "../components/Breadcrumbs";
import DirectoryCityGrid from "../components/DirectoryCityGrid";
import PageLayout from "../components/PageLayout";
import "../index.css";

const City: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
  __meta,
}) => {
  const { name, description, dm_directoryParents, dm_directoryChildren } =
    document;

  return (
    <>
      <PageLayout templateData={{ __meta, document }}>
        <Banner name={name} />
        <div className="centered-container">
          <Breadcrumbs
            breadcrumbs={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
          />
          <DirectoryCityGrid
            name={name}
            description={description}
            directoryChildren={dm_directoryChildren}
            relativePrefixToRoot={relativePrefixToRoot}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default City;
