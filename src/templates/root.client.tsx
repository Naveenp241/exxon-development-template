import { Template, TemplateRenderProps } from "@yext/pages";
import Banner from "../components/Banner";
import DirectoryRootGrid from "../components/DirectoryRootGrid";
import PageLayout from "../components/PageLayout";
import "../index.css";

const Index: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
  __meta,
}) => {
  const { dm_directoryChildren } = document;

  return (
    <>
      <PageLayout templateData={{ __meta, document }}>
        <Banner name={"Turtlehead Tacos"} />
        <div className="centered-container">
          <div className="section space-y-14 px-10">
            <DirectoryRootGrid
              name={"Turtlehead Tacos"}
              directoryChildren={dm_directoryChildren}
              relativePrefixToRoot={relativePrefixToRoot}
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Index;
