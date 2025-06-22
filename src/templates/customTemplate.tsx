import {
    GetHeadConfig,
    GetPath,
    GetRedirects,
    HeadConfig,
    Template,
    TemplateConfig,
    TemplateProps,
    TemplateRenderProps,
    TransformProps,
} from "@yext/pages";
import "../index.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { SurfacedItem } from "../components/SurfacedItem/SurfacedItem";
import NearByStation from "../components/NearByStations/NearByStation";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
    stream: {
        $id: "custom-stream",
        filter: {
            entityTypes: ["ce_exxonCustomType"],
            // entityIds: ['ce_exxonCustomType']
        },
        // Specifies the exact data that each generated document will contain.
        // This data is passed in directly as props to the default exported function.
        fields: [
            "id",
            "uid",
            "meta",
            "name",
            "slug",
        ],
        localization: {
            locales: ["en"],
        },
    },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `exxon/${document.slug}`; // or use brand, type, etc.
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

export interface NavItem {
    name: string;
    slug: string;
}

const ExxonCustomTemplate: Template<TemplateRenderProps> = ({
    relativePrefixToRoot,
    document,
    __meta,
}) => {
    const {
        name,
    } = document;

    return (
        <>
            <h1>Custom template</h1>
            <Header
                enableMegaMenu
                onCreateAccount={() => {}}
                onLogin={() => {}}
                onLogout={() => {}}
            />
            <div className="px-4">
                <Hero
                    buttonLink="#"
                    buttonName="Find a station"
                    content="Whether you’re looking for premium or regular Mobil™ or Exxon™ gas, diesel fuel or a convenience store, our station finder makes it easy to find a nearby station."
                    fontColor="dark"
                    heroType="fuels-hero"
                    //   backgroundImage={Fuels}
                />

                <div className="flex justify-around">
                    {[1, 2, 3, 4].map((_, i) => (
                        <SurfacedItem
                        key={i}
                        description="Members earn 6¢/gallon in points on every Synergy Supreme+™ premium fuel purchase, every day, as a replacement for Premium status."
                        imageSrc="https://www.exxon.com/-/media/project/wep/exxon/exxon-retail-us/premiumretirement-module/premiumretirement-module-fs-xs.webp"
                        links={[
                            {
                            href: '/en/rewards-program',
                            label: 'Details'
                            }
                        ]}
                        surfacedItemType="card"
                        title="Go premium and earn 6¢ in points per gallon"
                        />
                    ))}
                </div>

                <div className="px-4">
                    <NearByStation
                        accountButtonLink="#"
                        accountButtonText="Go to accounts"
                        accountDescription="Log in to your Exxon Mobil FleetPro℠, BusinessPro™ or Smart Card™ account, or check your gift card balance."
                        accountTitle="Manage your accounts"
                        faqButtonLink="#"
                        faqButtonText="View FAQs"
                        faqDescription="Get answers to your questions on the Exxon Mobil Rewards+ program, our app, products and more."
                        faqDisclaimer="*For select Exxon Mobil Rewards+ members only. Earn the points (10 points per gallon)..."
                        faqTitle="Frequently Asked Questions"
                        heroButtonLink="#"
                        heroButtonText="Find a station"
                        heroDescription="Whether you're looking for premium or regular gas, diesel or a convenience store, our station finder makes it easy to find a nearby station."
                        heroImage="https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/149080-50059/options/keepaspectratio/sr-header-02-8192-x-1708-short-banner-2880-x-600"
                        heroTitle="Find an Exxon<sup>®</sup> or Mobil<sup>®</sup> station near me"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ExxonCustomTemplate;
