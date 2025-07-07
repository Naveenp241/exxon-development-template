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
import { HeadingElement } from "../components/HeadingElement/HeadingElement";
import FuelsCard from "../components/FuelsCard/FuelsCard";
import { SurfacedItem } from "../components/SurfacedItem/SurfacedItem";
import "./css/lubesHomePageTemplate.css"

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "lubesHome-stream",
    filter: {
      entityTypes: ["ce_lubesHomePage"],
    },
    // Specifies the exact data that each generated document will contain.
    // This data is passed in directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "description", // ✅ Included to prevent undefined error
      "c_headingElement",
      "c_fuelCard",
      "c_surfacedItem",
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
    title: document.name ?? "Lubricants HomePage",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description ??
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

interface FuelsCardData {
  image: {
    url?: string;
    alternateText?: string;
    height?: number;
    width?: number;
  };
  title: {
    elementType?: string;
    title: string;
  };
  description: string;
  linkText: string;
  linkUrl: string;
}

interface SurfacedItemData {
  surfacedItemType: "card" | "credit-card";
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

const LubesHomePageTemplate: Template<TemplateRenderProps> = ({ document }) => {
  const {
    c_headingElement,
    c_fuelCard,
    c_surfacedItem,
  } = document;

  return (
    <>
      <Header
        enableMegaMenu
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
      />

      <div className="px-10 mt-8 h1-wrapper text-[40px]">
        <HeadingElement
          elementType={c_headingElement?.elementType}
          title={c_headingElement?.title}
        />
      </div>

      <div className="px-8 mt-4 w-full">
        {c_fuelCard && (
          <div className="mb-8 w-full">
            <ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {c_fuelCard.map((ele: FuelsCardData, index: number) => (
                <li key={index} className="w-full fuelCard-wrapper">
                  <FuelsCard
                    imageUrl={ele.image?.url || ""}
                    description={ele.description}
                    linkText={ele.linkText}
                    linkUrl={ele.linkUrl}
                    title={ele.title.title}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="px-8 w-full surfacedItem-container">
        {c_surfacedItem && (
          <div className="mb-8">
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {c_surfacedItem.map((ele: SurfacedItemData, index: number) => (
                <li key={index}>
                  <SurfacedItem
                    description={ele.description}
                    imageSrc={ele.imageSrc?.url || ""}
                    href={ele.href}
                    linkLabel={ele.linkLabel}
                    surfacedItemType={ele.surfacedItemType}
                    title={ele.title ?? "Untitled"}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default LubesHomePageTemplate;
