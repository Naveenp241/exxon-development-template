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
import { SurfacedItem } from "../components/SurfacedItem/SurfacedItem";
import NearByStation from "../components/NearByStations/NearByStation";
import { HeadingElement } from "../components/HeadingElement/HeadingElement";
import Paragraph from "../components/Paragraph/Paragraph";
import { Button } from "../components/Button/Button";
import Divider from "../components/Divider/Divider";
import './css/exxonCustomTemplate.css';

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
    stream: {
        $id: "fuels-stream",
        filter: {
            entityTypes: ["ce_exxonCustomType"]
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
            "c_surfacedItem",
            "c_4colSurfacedItem",
            "c_nearByStation",
            "c_nearByStationWithContent",
            "c_stationNearMeInfo",
            "c_fAQInfoBanner",
            "c_pageContent",
            "c_testMegaMenu"
        ],
        localization: {
            locales: ["en"],
        },
    },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
    const { slug } = document;

    return slug
        ? slug
        : `${document.id.toString()}`;
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

interface SurfacedItemData {
    surfacedItemType: 'card' | 'credit-card';
    description: string;
    href: string;
    imageSrc: {
        url?: string;
        alternateText?: string;
        height?: number;
        width?: number;
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
    title: level1.level1Label.label,
    path: level1.level1Label.addURL,
    items: level1.sublevel2?.map((level2: any) => ({
      title: level2.level2Label.label,
      path: level2.level2Label.addURL,
      items: level2.sublevel3?.map((level3: any) => ({
        title: level3.level3Label.label,
        path: level3.level3Label.addURL,
      })) || [],
    })) || [],
  }));
};


const ExxonCustomTemplate: Template<TemplateRenderProps> = ({
    // relativePrefixToRoot,
    document,
    // __meta,
}) => {
    const {
        // name,
        c_herocmp,
        c_surfacedItem,
        c_4colSurfacedItem,
        c_nearByStation,
        c_nearByStationWithContent,
        c_stationNearMeInfo,
        c_fAQInfoBanner,
        c_pageContent,
        c_testMegaMenu
    } = document;

    const menuItems = transformMenuData(c_testMegaMenu);

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
                buttonLink={c_herocmp?.cTALink || '#'}
                buttonName={c_herocmp?.cTALabel || 'Link'}
                content={c_herocmp?.description}
                fontColor="light"
                heroType={c_herocmp?.heroType || 'fuels-hero'}
                backgroundImage={c_herocmp?.backgroundImage?.url || ''}
                backgroundGradient={c_herocmp?.backgroundGradient || "linear-gradient(to right, transparent, #000)"}
            />
            <div className="px-8 mt-8 w-full">
                {
                    c_surfacedItem && 
                    <div className="mb-8">
                        <ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            {c_surfacedItem?.map((ele: SurfacedItemData, index: number) => (
                                <li key={index}>
                                    <SurfacedItem
                                        description={ele.description}
                                        imageSrc={ele.imageSrc?.url || ""}
                                        href={ele.href}
                                        linkLabel={ele.linkLabel}
                                        surfacedItemType={ele.surfacedItemType}
                                        title={ele.title}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                }

                <Divider
                    className="my-4"
                    color="rgba(0, 0, 0, 0.1)"
                    width={1}
                />

                <div className="flex justify-around my-8">
                    <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {c_4colSurfacedItem?.map((ele: SurfacedItemData, index: number) => (
                            <li key={index}>
                                <SurfacedItem
                                    description={ele.description}
                                    imageSrc={ele.imageSrc?.url || ""}
                                    href={ele.href}
                                    linkLabel={ele.linkLabel}
                                    surfacedItemType={ele.surfacedItemType}
                                    title={ele.title}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <NearByStation
                    accountBgImage={c_nearByStation?.accountBgImage.url}
                    accountButtonLink=""
                    accountButtonText=""
                    accountDescription=""
                    accountTitle=""
                    imageLink={c_nearByStation?.imageLink}
                    variant={c_nearByStation?.variant}
                />

                <div className="grid grid-cols-12 md:my-8 my-5">
                    <div className="md:col-span-9 col-span-full">
                        <HeadingElement elementType="h2" title={c_stationNearMeInfo.title} className="text-3xl mb-2" />
                        <Paragraph paragraph={c_stationNearMeInfo.description} />
                    </div>
                    <div className="md:col-span-3 col-span-6 md:pl-8 md:mt-0 mt-4 pl-0">
                        <Button
                            label={c_stationNearMeInfo.cTAName}
                            backgroundColor="#fff"
                            className="w-full mb-4 text-base cta-blueBg-white justify-center"
                            href={c_stationNearMeInfo.cTALink}
                            iconType="no-icon"
                            primary
                            size="large"
                            type="button"
                        />
                    </div>
                </div>

                <NearByStation
                    accountBgImage={c_nearByStationWithContent?.accountBgImage.url}
                    accountButtonLink={c_nearByStationWithContent?.accountButtonLink}
                    accountButtonText={c_nearByStationWithContent?.accountButtonText}
                    accountDescription={c_nearByStationWithContent?.accountDescription}
                    accountTitle={c_nearByStationWithContent?.accountTitle}
                    imageLink={c_nearByStationWithContent?.imageLink}
                    variant={c_nearByStationWithContent?.variant}
                />

                <div className="grid grid-cols-12 md:my-8 my-5">
                    <div className="md:col-span-9 col-span-full">
                        <HeadingElement elementType="h2" title={c_fAQInfoBanner?.title} className="text-3xl mb-2" />
                        <Paragraph paragraph={c_fAQInfoBanner?.description} />
                    </div>
                    <div className="md:col-span-3 col-span-6 md:pl-8 md:mt-0 mt-4 pl-0">
                        <Button
                            label={c_fAQInfoBanner?.cTAName}
                            backgroundColor="#fff"
                            className="w-full mb-4 text-base cta-blueBg-white justify-center"
                            href={c_fAQInfoBanner?.cTALink}
                            iconType="no-icon"
                            primary
                            size="large"
                            type="button"
                        />
                    </div>
                </div>

                <div className="page-info mb-16">
                {
                    c_pageContent?.map((ele: ParagraphProps, index: number) => (
                        <Paragraph 
                            paragraph={ele?.content}  
                            inlineTextLink={ele?.hyperlinkForText}
                            inlineTextLinkURL={ele?.textOfHyperlink}
                            classname="info-text"
                            key={index}
                        />
                    ))
                }
                </div>          
            </div>
            <Footer />
        </>
    );
};

export default ExxonCustomTemplate;
