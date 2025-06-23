import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  // TransformProps,
} from "@yext/pages";
import "../index.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";

import { HeadingElement } from "../components/HeadingElement/HeadingElement";
import { TopicContainer } from "../components/TopicContainer/TopicContainer";

import Divider from "../components/Divider/Divider";
import "./css/mobilTemplate.css";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "mobil-stream",
    filter: {
      entityTypes: ["ce_mobilCustom"],
    },
    // Specifies the exact data that each generated document will contain.
    // This data is passed in directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "c_herocmp",
      "c_divider",
      "c_topicContainer",
      "c_headingElement",
      "title",
      "c_businessTopicContainer",
    ],
    localization: {
      locales: ["en"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  const { slug } = document;

  return slug ? slug : `${document.id.toString()}`;
};

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.locale}/${document.id.toString()}`];
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
        },
      },
    ],
  };
};

interface TopicContainerData {
  columnType: "column-1" | "column-2";
  mediaType: "image" | "text";
  mediaOrder?: "media" | "content";
  image: {
    url?: string;
    alternateText?: string;
    height?: number;
    width?: number;
  };
  contentbackgroundColor?: string;
  contentHeading?: string;
  content?: string;
  linkLabel?: string;
  linkHref?: string;
  enableShare?: boolean;
}

const MobilTemplate: Template<TemplateRenderProps> = ({
  // relativePrefixToRoot,
  document,
  // __meta,
}) => {
  const {
    // slug,
    c_herocmp,
    c_divider,
    c_topicContainer,
    c_headingElement,
    title,
    c_businessTopicContainer,
  } = document;

  return (
    <>
      <Header
        enableMegaMenu
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
      />

      <div className="hero-container px-8 pt-8">
        <Hero
          buttonIconType="no-icon"
          buttonLink={c_herocmp?.cTALink || "#"}
          buttonName={c_herocmp?.cTALabel}
          content={c_herocmp?.description}
          title={c_herocmp?.title}
          fontColor="light"
          heroType={c_herocmp?.heroType || "corporate-main"}
          backgroundImage={c_herocmp?.backgroundImage?.url}
          backgroundGradient={
            c_herocmp?.backgroundGradient ||
            "linear-gradient(to right, transparent, #fff)"
          }
        />
      </div>

      <div className="divider-wrapper">
        <Divider className={c_divider?.className} color="#0e469b" width={c_divider?.width} />
      </div>

      <div className="personal-vehicles-content-wrapper px-8">
        <div className="h1-wrapper text-[50px]">
          <HeadingElement
            elementType={c_headingElement?.elementType}
            title={c_headingElement?.title}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 my-12 ">
          {c_topicContainer &&
            c_topicContainer?.map((data: TopicContainerData, index: number) => {

              return (
                <div key={index} className="topic-container-wrapper mb-8">
                  <TopicContainer
                    columnType={data?.columnType}
                    media={data?.mediaType}
                    mediaOrder={data?.mediaOrder}
                    imageSrc={data?.image?.url || ""}
                    contentbackgroundColor={data?.contentbackgroundColor}
                    content={data?.content}
                    contentHeading={data?.contentHeading}
                    linkLabel={data?.linkLabel}
                    linkHref={data?.linkHref}
                    enableShare={data?.enableShare}
                  />
                </div>
              );
            })}
        </div>
      </div>

      <div className="divider-wrapper">
        <Divider className={c_divider?.className} color="#0e469b" width={c_divider.width} />
      </div>

      <div className="business-content-wrapper px-8">
        <div className="h2-wrapper text-[40px]">
          <HeadingElement elementType={"h3"} title={title} />
        </div>

        <div className="grid grid-cols-1 gap-4 my-12 ">
          {c_businessTopicContainer &&
            c_businessTopicContainer?.map(
              (data: TopicContainerData, index: number) => {

                return (
                  <div key={index} className="topic-container-wrapper mb-8">
                    <TopicContainer
                      columnType={data?.columnType}
                      media={data?.mediaType}
                      mediaOrder={data?.mediaOrder}
                      imageSrc={data?.image?.url || ""}
                      contentbackgroundColor={data?.contentbackgroundColor}
                      content={data?.content}
                      contentHeading={data?.contentHeading}
                      linkLabel={data?.linkLabel}
                      linkHref={data?.linkHref}
                      enableShare={data?.enableShare}
                    />
                  </div>
                );
              }
            )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MobilTemplate;
