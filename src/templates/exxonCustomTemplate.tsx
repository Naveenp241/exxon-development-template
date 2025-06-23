import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { SurfacedItem } from "../components/SurfacedItem/SurfacedItem";
import NearByStation from "../components/NearByStations/NearByStation";
import { HeadingElement } from "../components/HeadingElement/HeadingElement";
import Paragraph from "../components/Paragraph/Paragraph";
import { Button } from "../components/Button/Button";
import Divider from "../components/Divider/Divider";

import "./css/exxonCustomTemplate.css";

export const config: TemplateConfig = {
  stream: {
    $id: "fuels-stream",
    filter: {
      entityTypes: ["ce_exxonCustomType"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "description", // ✅ Included to prevent undefined error
      "c_herocmp",
      "c_surfacedItem",
      "c_4colSurfacedItem",
      "c_nearByStation",
      "c_nearByStationWithContent",
      "c_stationNearMeInfo",
      "c_fAQInfoBanner",
      "c_pageContent",
      "c_testMegaMenu",
    ],
    localization: {
      locales: ["en"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? `${document.id}`;
};

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.locale}/${document.id}`];
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name ?? "Exxon Page",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content:
            document?.description ??
            "Explore Exxon stations, fuel services, and nearby locations.",
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

interface ParagraphProps {
  content: string;
  hyperlinkForText?: string;
  textOfHyperlink?: string;
  listItems?: string[];
  ctaText?: string;
  ctaTextURL?: string;
  showArrow?: boolean;
  classname?: string;
  ariaHidden?: boolean;
}

interface MenuProps {
  title: string;
  path: string;
  items?: MenuProps[];
}

const transformMenuData = (data: any[]): MenuProps[] => {
  return data?.map((level1: any) => ({
    title: level1.level1Label?.label ?? "",
    path: level1.level1Label?.addURL ?? "#",
    items:
      level1.sublevel2?.map((level2: any) => ({
        title: level2.level2Label?.label ?? "",
        path: level2.level2Label?.addURL ?? "#",
        items:
          level2.sublevel3?.map((level3: any) => ({
            title: level3.level3Label?.label ?? "",
            path: level3.level3Label?.addURL ?? "#",
          })) ?? [],
      })) ?? [],
  }));
};

const ExxonCustomTemplate: Template<TemplateRenderProps> = ({ document }) => {
  const {
    c_herocmp,
    c_surfacedItem,
    c_4colSurfacedItem,
    c_nearByStation,
    c_nearByStationWithContent,
    c_stationNearMeInfo,
    c_fAQInfoBanner,
    c_pageContent,
    c_testMegaMenu,
  } = document;

  const menuItems = transformMenuData(c_testMegaMenu ?? []);

  return (
    <>
      <Header
        enableMegaMenu
        navLinks={menuItems}
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
      />

      <Hero
        buttonIconType="no-icon"
        buttonLink={c_herocmp?.cTALink ?? "#"}
        buttonName={c_herocmp?.cTALabel ?? "Explore"}
        content={c_herocmp?.description}
        fontColor="light"
        heroType={c_herocmp?.heroType ?? "fuels-hero"}
        backgroundImage={c_herocmp?.backgroundImage?.url ?? ""}
        backgroundGradient={
          c_herocmp?.backgroundGradient ??
          "linear-gradient(to right, transparent, #000)"
        }
      />

      <div className="px-8 mt-8 w-full">
        {/* Surfaced Items */}
        {c_surfacedItem && (
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-8">
            {c_surfacedItem.map((ele: SurfacedItemData, i: number) => (
              <li key={i}>
                <SurfacedItem
                  description={ele.description}
                  imageSrc={ele.imageSrc?.url ?? ""}
                  href={ele.href}
                  linkLabel={ele.linkLabel}
                  surfacedItemType={ele.surfacedItemType}
                  title={ele.title ?? "Untitled"}
                />
              </li>
            ))}
          </ul>
        )}

        <Divider className="my-4" color="rgba(0, 0, 0, 0.1)" width={1} />

        {/* 4 Column Surfaced Items */}
        {c_4colSurfacedItem && (
          <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-8">
            {c_4colSurfacedItem.map((ele: SurfacedItemData, i: number) => (
              <li key={i}>
                <SurfacedItem
                  description={ele.description}
                  imageSrc={ele.imageSrc?.url ?? ""}
                  href={ele.href}
                  linkLabel={ele.linkLabel}
                  surfacedItemType={ele.surfacedItemType}
                  title={ele.title ?? "Untitled"}
                />
              </li>
            ))}
          </ul>
        )}

        {/* Nearby Station */}
        <NearByStation
          accountBgImage={c_nearByStation?.accountBgImage?.url}
          accountButtonLink=""
          accountButtonText=""
          accountDescription=""
          accountTitle=""
          imageLink={c_nearByStation?.imageLink}
          variant={c_nearByStation?.variant}
        />

        {/* Station Info Banner */}
        <div className="grid grid-cols-12 my-8">
          <div className="md:col-span-9 col-span-full">
            <HeadingElement
              elementType="h2"
              title={c_stationNearMeInfo?.title ?? "Gas Stations Near Me"}
              className="text-3xl mb-2"
            />
            <Paragraph paragraph={c_stationNearMeInfo?.description} />
          </div>
          <div className="md:col-span-3 col-span-6 md:pl-8 mt-4 md:mt-0">
            <Button
              label={c_stationNearMeInfo?.cTAName ?? "Learn More"}
              backgroundColor="#fff"
              className="w-full mb-4 text-base cta-blueBg-white justify-center"
              href={c_stationNearMeInfo?.cTALink ?? "#"}
              iconType="no-icon"
              primary
              size="large"
              type="button"
            />
          </div>
        </div>

        {/* Second Nearby Station Component */}
        <NearByStation
          accountBgImage={c_nearByStationWithContent?.accountBgImage?.url}
          accountButtonLink={c_nearByStationWithContent?.accountButtonLink}
          accountButtonText={c_nearByStationWithContent?.accountButtonText}
          accountDescription={c_nearByStationWithContent?.accountDescription}
          accountTitle={c_nearByStationWithContent?.accountTitle}
          imageLink={c_nearByStationWithContent?.imageLink}
          variant={c_nearByStationWithContent?.variant}
        />

        {/* FAQ Info Banner */}
        <div className="grid grid-cols-12 my-8">
          <div className="md:col-span-9 col-span-full">
            <HeadingElement
              elementType="h2"
              title={c_fAQInfoBanner?.title ?? "FAQs"}
              className="text-3xl mb-2"
            />
            <Paragraph paragraph={c_fAQInfoBanner?.description} />
          </div>
          <div className="md:col-span-3 col-span-6 md:pl-8 mt-4 md:mt-0">
            <Button
              label={c_fAQInfoBanner?.cTAName ?? "Read More"}
              backgroundColor="#fff"
              className="w-full mb-4 text-base cta-blueBg-white justify-center"
              href={c_fAQInfoBanner?.cTALink ?? "#"}
              iconType="no-icon"
              primary
              size="large"
              type="button"
            />
          </div>
        </div>

        {/* Page Content Paragraphs */}
        <div className="page-info mb-16">
          {c_pageContent?.map((ele: ParagraphProps, index: number) => (
            <Paragraph
              key={index}
              paragraph={ele?.content}
              inlineTextLink={ele?.hyperlinkForText}
              inlineTextLinkURL={ele?.textOfHyperlink}
              classname="info-text"
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ExxonCustomTemplate;
