import PageLayout from "../components/PageLayout";
import Banner from "../components/Banner";
import DirectoryRootGrid from "../components/DirectoryRootGrid";
import Favicon from "../assets/images/yext-favicon.ico";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";

export const config: TemplateConfig = {
  stream: {
    $id: "root-stream",
    filter: {
      entityTypes: ["ce_root"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      // These fields will be used in Module 5 of the Hitchhikers Pages Track: https://hitchhikers.yext.com/tracks/pages-development/pgs605-create-directory/01-yext-directory-manager/
      // "dm_directoryChildren.name",
      // "dm_directoryChildren.slug",
      // "dm_directoryChildren.c_addressRegionDisplayName",
      // "dm_directoryChildren.dm_childEntityIds",
    ],
    localization: {
      locales: ["en"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = () => {
  return "exxon-corporate";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Home Page",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description:
            "This is a description for the Turtlehead Tacos directory home page.",
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: Favicon,
        },
      },
    ],
  };
};

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
