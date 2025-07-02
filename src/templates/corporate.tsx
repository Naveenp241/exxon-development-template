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
import Divider from "../components/Divider/Divider";
import Accordion from "../components/Accordion/Accordion";
import { HeadingElement } from "../components/HeadingElement/HeadingElement";
import SingleFeature from "../components/SingleFeature/SingleFeature";
import StockTicker from "../components/StockTicker/StockTicker";
import './css/mobilCustomHome.css';

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
    stream: {
        $id: "corporate",
        filter: {
            entityTypes: ["ce_exxonCorporate"]
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
            "c_headingElement",
            "c_customAccordion",
            "c_customSingleFeature",
            "c_customStockTicker"
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
        title: document.name || "Exxon Fuel Page",
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

type RawAccordionData = {
  id: string;
  title: string;
  locations: {
    title: string;
    categories: {
      label: string;
      languages: {
        label: string;
        addURL: string;
      }[];
    }[];
  }[];
};


const Corporate: Template<TemplateRenderProps> = ({
    // relativePrefixToRoot,
    document
    // __meta,
}) => {
    const {
        // name,
        // slug,
        c_carousel,
        c_headingElement,
        c_customAccordion,
        c_customSingleFeature,
        c_customStockTicker
    } = document;

    console.log("c_carousel ", c_carousel)
    console.log("c_headingElement ", c_headingElement)
    console.log("c_customAccordion ", c_customAccordion)
    console.log("c_customSingleFeature", c_customSingleFeature);
    console.log("c_customStockTicker", c_customStockTicker);
    
    

    const formattedAccordionItems = (c_customAccordion as RawAccordionData[]).map((region) => ({
        id: region.id,
        title: region.title,
        locations: region.locations.map((location) => ({
            title: location.title,
            categories: location.categories.map((category) => ({
            label: category.label,
            languages: category.languages.map((lang) => ({
                languageLabel: lang.label,
                languageLink: lang.addURL,
            })),
            })),
        })),
    }));


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
                        align: 'start',
                        loop: c_carousel.loop
                    }}
                    slides={c_carousel.slides}
                    slidesToShow={Number(c_carousel.numberOfSlidesToShow)}
                    floatContent={c_carousel.floatContent}
                />
            }

            <div className="stockTicker-wrapper">
                <StockTicker 
                    stockTickerTitle = {c_customStockTicker.stockTickerTitle}
                    elementType = {c_customStockTicker.elementType}
                    stockTickerPrice = {c_customStockTicker.stockTickerPrice}
                    stockTickerPriceChange = {c_customStockTicker.stockTickerPriceChange}
                    stockTickerTime = {c_customStockTicker.stockTickerTime}
                    stockTickerDate = {c_customStockTicker.stockTickerDate}
                />
            </div>

            <div className="singleFeature-wrapper mb-12">
                <SingleFeature 
                    featureBgImage = {c_customSingleFeature.featureBgImage.url}
                    featureContent =  {c_customSingleFeature.featureContent}
                    featureButtonText = {c_customSingleFeature.featureButtonText}
                    featureButtonLink = {c_customSingleFeature.featureButtonLink}
                    featureTheme = {c_customSingleFeature.featureTheme}
                />
            </div>

            <div className="divider-wrapper">
                <Divider color="#0e469b" width={10} className="mb-8" />
            </div>

            <div className="px-12 mb-16">
                <HeadingElement elementType={c_headingElement.elementType} title={c_headingElement.title} className={c_headingElement.className} />

                <Accordion items={formattedAccordionItems} accordionInactiveIcon="faAngleDown" accordionActiveIcon="faAngleUp" />
            </div>

            

            <Footer />
        </div>
    );
};

export default Corporate;
