import { useEffect, useState } from "react";
import Paragraph from "../Paragraph/Paragraph";
import "./Accordion.css";
import { Icon } from "../Icon/Icon";
import { HeadingElement } from "../HeadingElement/HeadingElement";

export interface AccordionItem {
  id: string;
  title: string;
  paragraph?: string;
  inlineTextLink?: string;
  inlineTextLinkURL?: string;
  locations?: locationSubCategory[];
}

interface locationSubCategory {
  title?: string;
  categories?: KeyValue[];
}
interface KeyValue {
  label?: string;
  languages?: languages[];
}

interface languages {
  languageLabel?: string;
  languageLink?: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  accordionInactiveIcon?: string;
  accordionActiveIcon?: string;
}
const Accordion: React.FC<AccordionProps> = ({ items, accordionInactiveIcon = "faPlus", accordionActiveIcon="faMinus" }) => {
  const [showId, setShowId] = useState<string | null>(null);
  const [accordionState, setAccordionState] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const activeEl = document.activeElement;
      if (
        activeEl &&
        activeEl.classList.contains("accordion__item-icon") &&
        event.key === "Enter"
      ) {
        event.preventDefault();

        const parentItem = activeEl.closest(".accordion__item");
        if (parentItem) {
          const id = parentItem.getAttribute("data-id");
          if (id) {
            setShowId((prev) => (prev === id ? null : id));
            setAccordionState((prev) => !prev);
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClick = (id: string) => {
    setShowId((prev) => (prev === id ? null : id));
    setAccordionState(!accordionState);
  };

  return (
    <div className="accordion w-full mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          data-id={item.id}
          className={`accordion__item w-full mt-[5px] first:mt-0 ${
            showId === item.id
              ? "accordion__item--expanded bg-white border border-[#ebebeb] border-l-[6px] border-l-[#00a3e0]"
              : "bg-[#ebebeb]"
          }`}
        >
          <a
            tabIndex={0}
            className="accordion__item-title w-full flex cursor-pointer relative"
            onClick={() => {
              handleClick(item.id);
            }}
          >
            <HeadingElement
              elementType = 'h4'
              title={item.title}
              className="font-semibold text-[#2b2626] pt-[16px] pb-[16px] pl-[16px]"
            />
            <span
              className={`accordion__item-icon ml-auto w-6 h-6 flex items-center justify-center rounded-full border-2 absolute top-4 right-3 ${
                showId === item.id
                  ? "bg-white text-[#d6331a] border-[#d6331a]"
                  : "bg-white text-[#00a3e0] border-[#00a3e0]"
              }`}
              tabIndex={0}
              role="button"
              aria-pressed={showId === item.id}
            >
              {showId === item.id ? (
                <Icon icon={accordionActiveIcon} />
              ) : (
                <Icon icon={accordionInactiveIcon} />
              )}
            </span>
          </a>

          <div
            className={`accordion__item-content-wrapper ${
              showId === item.id ? "accordion__item--expanded" : ""
            }`}
          >
            <div className="accordion__item-content text-base font-normal text-[#2b2626]">
              {item.inlineTextLink ? (
                <Paragraph
                  classname="!m-0"
                  paragraph={item?.paragraph || ''}
                  inlineTextLink={item.inlineTextLink}
                  inlineTextLinkURL={item.inlineTextLinkURL}
                  ariaHidden={accordionState}
                />
              ) : (
                <Paragraph classname="!m-0" paragraph={item?.paragraph || ''} />
              )}

              <ul className="accordion__locations-wrapper grid grid-cols-4 gap-2">
                {item.locations?.map((ele, index) => (
                  <li className="accordion__locations--li-item" key={index}>
                    <button
                      type="button"
                      className={`location-title ${activeIndex === index ? 'font-bold' : 'font-normal'} p-4`}
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                      {ele.title}
                    </button>

                    <div
                      className={`locations-content pl-4 ml-8 transition-all overflow-hidden duration-300 ease-in-out ${
                        activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {ele.categories?.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="locations-subcategories">
                          <span> {category.label} </span>
                          <div>
                            {
                              category.languages?.map((language, langIndex) => (
                                <a key={langIndex} href={language.languageLink}>{language.languageLabel}</a>
                              ))
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
