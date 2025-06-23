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
import './css/mobilCustomHome.css';

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
    stream: {
        $id: "home-mobil-stream",
        filter: {
            entityTypes: ["ce_mobilCustomEntity"]
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
            "c_customAccordion"
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


const MobilCustomHome: Template<TemplateRenderProps> = ({
    // relativePrefixToRoot,
    document
    // __meta,
}) => {
    const {
        // name,
        // slug,
        c_carousel,
        c_headingElement,
        c_customAccordion
    } = document;

    console.log("c_carousel ", c_carousel)
    console.log("c_headingElement ", c_headingElement)
    console.log("c_customAccordion ", c_customAccordion)

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
        <div className="mobil-homepage">
            <Header
                enableMegaMenu
                onCreateAccount={() => {}}
                onLogin={() => {}}
                onLogout={() => {}}
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

export default MobilCustomHome;
