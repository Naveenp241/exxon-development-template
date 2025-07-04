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
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import Carousel from "../components/Carousel/Carousel";
import SingleFeature from "../components/SingleFeature/SingleFeature";
import StockTicker from "../components/StockTicker/StockTicker";
import { HeadingElement } from "../components/HeadingElement/HeadingElement";
import { SurfacedItem } from "../components/SurfacedItem/SurfacedItem";
import { Heading } from "../components/Heading/Heading";
import FuelsCard from "../components/FuelsCard/FuelsCard";
import NearByStation from "../components/NearByStations/NearByStation";
import { Image } from "../components/Image/Image";
import Paragraph from "../components/Paragraph/Paragraph";
import Divider from "../components/Divider/Divider";
import { sharedHeadTags } from "../utils/sharedHeadTags";
import "./css/mobilCustomHome.css";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "corporate",
    filter: {
      entityTypes: ["ce_exxonCorporate"],
    },
    // Specifies the exact data that each generated document will contain.
    // This data is passed in directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "c_carousel",
      "c_customAccordion",
      "c_customSingleFeature",
      "c_customStockTicker",
      "c_headingElement",
      "c_surfacedItem",
      "title",
      "c_customTitledesc",
      "c_fuelCard",
      "c_nearByStation",
      "c_customImage",
      "c_paragraph",
      "c_latestNews",
      "c_divider",
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
    title: document.name || "Exxon Fuel Page",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      ...sharedHeadTags,
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

interface SurfacedItemData {
  surfacedItemType: "card" | "credit-card";
  description: string;
  href: string;
  imageSrc: {
    url?: string;
  };
  linkLabel: string;
  title: string;
}

interface FuelCardData {
  image: {
    url?: string;
  };
  title: {
    elementType: string;
    title: string;
  };
  description: string;
  linkText: string;
  linkUrl: string;
}

interface ImageData {
  src: {
    url: string;
  };
  alt: string;
  className: string;
  width: number | string;
  height: number | string;
  caption: string;
}

interface ParagraphData {
  content: string;
}

interface LatestNewsData {
  title: string;
  description: string;
}

const Corporate: Template<TemplateRenderProps> = ({
  // relativePrefixToRoot,
  document,
  // __meta,
}) => {
  const {
    // name,
    // slug,
    c_carousel,
    c_customSingleFeature,
    c_customStockTicker,
    c_headingElement,
    c_surfacedItem,
    title,
    c_customTitledesc,
    c_fuelCard,
    c_nearByStation,
    c_customImage,
    c_paragraph,
    c_latestNews,
    c_divider,
  } = document;

  return (
    <div className="corporate-homepage">
      <Header
        enableMegaMenu
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
        variant="hero"
      />
      {
        <Carousel
          dotsVariant={c_carousel.dotsVariant}
          options={{
            align: "start",
            loop: c_carousel.loop,
          }}
          slides={c_carousel.slides}
          slidesToShow={Number(c_carousel.numberOfSlidesToShow)}
          floatContent={c_carousel.floatContent}
        />
      }

      {
        <StockTicker
          stockTickerTitle={c_customStockTicker.stockTickerTitle}
          elementType={c_customStockTicker.elementType}
          stockTickerPrice={c_customStockTicker.stockTickerPrice}
          stockTickerPriceChange={c_customStockTicker.stockTickerPriceChange}
          stockTickerTime={c_customStockTicker.stockTickerTime}
          stockTickerDate={c_customStockTicker.stockTickerDate}
        />
      }

      {
        <SingleFeature
          featureBgImage={c_customSingleFeature.featureBgImage.url}
          featureContent={c_customSingleFeature.featureContent}
          featureButtonText={c_customSingleFeature.featureButtonText}
          featureButtonLink={c_customSingleFeature.featureButtonLink}
          featureTheme={c_customSingleFeature.featureTheme}
        />
      }

      <div className="trendingTopics-wrapper py-20 flex">
        <div className="trendingTopics-left ml-28">
          <div className="trendingTopics-title mb-12 text-5xl font-light">
            {
              <HeadingElement
                elementType={c_headingElement.elementType}
                title={c_headingElement.title}
              />
            }
          </div>
          <div className="trendingTopics-content max-w-4xl">
            {c_surfacedItem && (
              <ul className="grid grid-cols-2 gap-6">
                {c_surfacedItem
                  .slice(0, 4)
                  .map((ele: SurfacedItemData, index: number) => (
                    <li key={index}>
                      <SurfacedItem
                        imageSrc={ele.imageSrc?.url ?? ""}
                        surfacedItemType={ele.surfacedItemType}
                        title={ele.title}
                        description=""
                        href=""
                        linkLabel=""
                      />
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
        <div className="trendingTopics-right ml-28 px-5">
          <div className="latestNews-title mb-12">
            <p className="mb-5"> {title}</p>
          </div>
          <div className="latestNews-content">
            {c_latestNews && (
              <div role="list">
                {c_latestNews.map((ele: LatestNewsData, index: number) => (
                  <div role="listitem" key={index}>
                    <div
                      className="pt-[30px] pb-[30px]"
                      style={{
                        paddingTop: index === 0 ? "0px" : "30px",
                        paddingBottom:
                          index === c_latestNews.length - 1 ? "0px" : "30px",
                      }}
                    >
                      <Heading
                        title={ele.title}
                        description={ele.description}
                      />
                    </div>
                    {index !== c_latestNews.length - 1 && (
                      <Divider
                        width={c_divider.width}
                        color={c_divider.color}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="highlightContent-container flex">
        <div className="highlightContent-wrapper bg-gray-200 py-20">
          <div className="highlightContent-header mx-24">
            <Heading
              title={c_customTitledesc.title}
              description={c_customTitledesc.description}
            />
          </div>
          <div className="highlightContent-content mx-24">
            {c_fuelCard && (
              <ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {c_fuelCard.map((ele: FuelCardData, index: number) => (
                  <li key={index}>
                    <FuelsCard
                      imageUrl={ele.image?.url || ""}
                      title={ele.title.title ?? "Untitled"}
                      description={ele.description}
                      linkText={ele.linkText || ""}
                      linkUrl={ele.linkUrl || ""}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="nearByStation-wrapper">
        <NearByStation
          variant={c_nearByStation.variant}
          imageLink=""
          accountBgImage={c_nearByStation.accountBgImage.url}
          accountTitle={c_nearByStation.accountTitle}
          accountDescription={c_nearByStation.accountDescription}
          accountButtonText={c_nearByStation.accountButtonText}
          accountButtonLink={c_nearByStation.accountButtonLink}
        />
      </div>

      <div className="desktopView">
        <div className="image-container bg-gray-100 flex">
          <div className="image-wrapper py-20 mt-10 mx-28">
            {c_customImage && (
              <ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {c_customImage.map((ele: ImageData, index: number) => (
                  <li key={index}>
                    <Image
                      src={ele.src.url}
                      caption={ele.caption || ""}
                      width={ele.width}
                      height={ele.height}
                      className={ele.className || ""}
                      alt={ele.alt || ""}
                    />
                  </li>
                ))}
              </ul>
            )}

            <div className="paragraph-columns flex gap-40">
              <div className="column-1 flex flex-col">
                {c_paragraph
                  .slice(0, 6)
                  .map((para: ParagraphData, idx: number) => (
                    <Paragraph key={`col1-${idx}`} paragraph={para.content} />
                  ))}
              </div>

              <div className="column-2 flex flex-col pb-4 ml-[60px]">
                {c_paragraph
                  .slice(6, 11)
                  .map((para: ParagraphData, idx: number) => (
                    <Paragraph key={`col2-${idx}`} paragraph={para.content} />
                  ))}
              </div>

              <div className="column-3 flex flex-col pb-4 ml-[94px]">
                {c_paragraph
                  .slice(11, 15)
                  .map((para: ParagraphData, idx: number) => (
                    <Paragraph key={`col3-${idx}`} paragraph={para.content} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobileView">
        <div className="image-container bg-gray-100 flex flex-col md:flex-row">
          {c_customImage &&
            c_customImage.map((ele: ImageData, index: number) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-start mb-8"
              >
                <div className="image-wrapper md:mr-10">
                  <Image
                    src={ele.src.url}
                    caption={ele.caption || ""}
                    width={ele.width}
                    height={ele.height}
                    className={ele.className || ""}
                    alt={ele.alt || ""}
                  />
                </div>

                <div className="paragraph-column flex flex-col mt-4 md:mt-0">
                  {(() => {
                    if (index === 0) {
                      return c_paragraph
                        .slice(0, 6)
                        .map((para: ParagraphData, idx: number) => (
                          <Paragraph
                            key={`col1-${idx}`}
                            paragraph={para.content}
                          />
                        ));
                    } else if (index === 1) {
                      return c_paragraph
                        .slice(6, 11)
                        .map((para: ParagraphData, idx: number) => (
                          <Paragraph
                            key={`col2-${idx}`}
                            paragraph={para.content}
                          />
                        ));
                    } else if (index === 2) {
                      return c_paragraph
                        .slice(11, 15)
                        .map((para: ParagraphData, idx: number) => (
                          <Paragraph
                            key={`col3-${idx}`}
                            paragraph={para.content}
                          />
                        ));
                    }
                    return null;
                  })()}
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Corporate;
