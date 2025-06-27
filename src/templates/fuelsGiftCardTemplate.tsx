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
import CardBlock from "../components/CardBlock/CardBlock";
import { SurfacedItem } from "../components/SurfacedItem/SurfacedItem";
import Paragraph from "../components/Paragraph/Paragraph";
import { Heading } from "../components/Heading/Heading";
import { HeadingElement } from "../components/HeadingElement/HeadingElement";
import Accordion from "../components/Accordion/Accordion";
import "./css/fuelsGiftCardTemplate.css";

export const config: TemplateConfig = {
  stream: {
    $id: "giftcard-stream",
    filter: {
      entityTypes: ["ce_giftCard"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "description",
      "c_cardBlock",
      "c_customSurfacedItem",
      "c_customTitledesc",
      "c_headingElement",
      "c_customAccordion",
      "c_4colSurfacedItem",
      "c_paragraph",
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

interface DescriptionContent {
  content?: string;
  listItems?: string[];
  ctaText?: string;
  ctaTextURL?: string;
  hyperlinkForText?: string;
  textOfHyperlink: string;
}

interface SurfacedItemData {
  surfacedItemType: "card" | "credit-card";
  description: DescriptionContent[];
  href: string;
  imageSrc: {
    url?: string;
  };
  linkLabel: string;
  title: string;
}

interface FourColSurfacedItemData {
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

const FuelsGiftCardTemplate: Template<TemplateRenderProps> = ({ document }) => {
  const {
    c_cardBlock,
    c_customSurfacedItem,
    c_customTitledesc,
    c_headingElement,
    c_customAccordion,
    c_4colSurfacedItem,
    c_paragraph,
    c_testMegaMenu,
  } = document;

  // console.log(c_customAccordion);

  const menuItems = transformMenuData(c_testMegaMenu ?? []);

  const accordionItems = c_customAccordion.map((item: any) => ({
    id: Number(item.id),
    title: item.title?.replace(/^"|"$/g, ""),
    paragraph: item.description?.replace(/^"|"$/g, ""),
  }));

  console.log(c_customSurfacedItem);

  return (
    <>
      <Header
        enableMegaMenu
        navLinks={menuItems}
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
      />

      {/* Card Block */}

      <div className="px-8 mt-8 w-full cardBlock-wrapper">
        {c_cardBlock && (
          <CardBlock
            imageUrl={c_cardBlock.imageUrl?.url ?? ""}
            title={c_cardBlock.title}
            description={c_cardBlock.description}
            buttonText={c_cardBlock.buttonText}
            buttonLink={c_cardBlock.buttonLink}
          />
        )}
      </div>

      {/* 2 column Surfaced Item */}

      <div className="px-8 w-full surfacedItem-wrapper">
        {c_customSurfacedItem && (
          <ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {c_customSurfacedItem.map(
              (ele: SurfacedItemData, index: number) => (
                <li key={index}>
                  <SurfacedItem
                    descriptionNode={
                      <>
                        {ele.description.map((desc: DescriptionContent, i) => (
                          <Paragraph
                            key={i}
                            paragraph={desc?.content ?? ""}
                            listItems={
                              desc.listItems && desc.listItems.length > 0
                                ? desc.listItems
                                : undefined
                            }
                            inlineTextLink={desc.textOfHyperlink}
                            inlineTextLinkURL={desc.hyperlinkForText}
                            ctaText={desc?.ctaText}
                            ctaTextURL={desc?.ctaTextURL}
                          />
                        ))}
                      </>
                    }
                    imageSrc={ele.imageSrc?.url || ""}
                    href={ele.href}
                    linkLabel={ele.linkLabel}
                    surfacedItemType={ele.surfacedItemType}
                    title={ele.title ?? "Untitled"}
                  />
                </li>
              )
            )}
          </ul>
        )}
      </div>

      {/* Heading */}

      <div className="px-3 heading-wrapper">
        <Heading
          title={c_customTitledesc.title}
          description={c_customTitledesc.description}
        />
      </div>

      {/* Accordion */}

      <div className="px-8 w-full">
        {/* Accordion Heading */}
        <HeadingElement
          title={c_headingElement.title}
          elementType={c_headingElement.elementType}
          className={"headingElement-Wrapper"}
        />
        
        {/* Accordion Items*/}
        {accordionItems.length > 0 && <Accordion items={accordionItems} />}
      </div>

      {/* 4 Column Surfaced Items */}

        <div className="px-4">
         {c_4colSurfacedItem && (
        <ul
          className={`
                    grid gap-4 my-8
                    ${
                      c_4colSurfacedItem?.length >= 4
                        ? "xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
                        : c_4colSurfacedItem?.length === 3
                          ? "xl:grid-cols-4 md:grid-cols-2 grid-cols-1"
                          : c_4colSurfacedItem?.length === 2
                            ? "md:grid-cols-2 grid-cols-1"
                            : "grid-cols-1"
                    }
                  `}
        >
          {c_4colSurfacedItem.map((ele: FourColSurfacedItemData, i: number) => (
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
        </div>
     

      {/* Page Content Paragraphs */}
      <div className="px-8">
      {c_paragraph && (
        <div className="page-info mb-16">
          {c_paragraph?.map((ele: ParagraphProps, index: number) => (
            <Paragraph
              key={index}
              paragraph={ele?.content}
              inlineTextLink={ele?.hyperlinkForText}
              inlineTextLinkURL={ele?.textOfHyperlink}
              classname="info-text"
            />
          ))}
        </div>
      )}
      </div>
      

      <Footer />
    </>
  );
};

export default FuelsGiftCardTemplate;
