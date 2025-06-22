import { Template, TemplateRenderProps } from "@yext/pages";
import Banner from "../components/Banner";
import Card from "../components/Card";
import PageLayout from "../components/PageLayout";
import "../index.css";
import { ExternalImage } from "../types/ExternalImage";

const Static: Template<ExternalImageRenderData> = ({
  externalImage,
  __meta,
  document,
}) => {
  return (
    <>
      <PageLayout templateData={{ __meta, document }}>
        <Banner name={"Turtlehead Tacos"} />
        <div className="centered-container">
          <div className="section space-y-14 px-10">
            <Card {...externalImage} />
          </div>
        </div>
      </PageLayout>
    </>
  );
};
type ExternalImageRenderData = TemplateRenderProps & {
  externalImage: ExternalImage;
};

export default Static;
