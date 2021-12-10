import React from "react";
import classNames from "classnames";
import { Image as BuilderImage } from "@builder.io/react";
import { Builder } from "@builder.io/react";

export type FeaturedCategoryProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "heading"
> & {
  heading: string;
  paragraph?: string;
  link: string;
  linkText: string;
  featuredImage: JSX.Element;
  position: "left" | "right";
};

export const FeaturedCategoryBlock = ({
  heading,
  paragraph,
  link,
  featuredImage,
  position = "left",
  className,
  linkText,
  ...props
}: FeaturedCategoryProps) => {
  return (
    <div
      className={classNames(
        className,
        `w-full h-[31.25rem] md:justify-between relative flex rounded-2xl md:rounded-3xl overflow-hidden bg-red-900 text-white`,
        {
          "flex-col md:flex-row": position === "left",
          "flex-col-reverse md:flex-row-reverse": position === "right",
        }
      )}
      {...props}
    >
      <div
        className={classNames(
          className,
          `h-[50%] sm:h-[55%] md:h-[105%] w-[105%] md:w-[50%] xl:w-[45%] md:-mt-4 relative border-opacity-80 overflow-hidden border-red-300`,
          {
            "rounded-br-4xl border-b-15 -mr-4 md:border-b-0 md:rounded-br-none border-r-15 md:border-t-15 md:rounded-tr-5xl":
              position == "left",
            "border-t-15 border-r-15 md:border-r-0 md:border-t-15 md:border-l-15 rounded-tr-4xl md:rounded-tr-none md:rounded-tl-5xl":
              position == "right",
          }
        )}
      >
        {featuredImage && (
          <a href={link} tabIndex={-1}>
            <figure
              className={classNames("w-full object-fit-cover-child h-full")}
            >
              <BuilderImage image={featuredImage} className="w-full h-full" />
            </figure>
          </a>
        )}
      </div>
      <div className="w-full md:w-[50%] xl:w-[55%] px-4 sm:px-8 lg:px-10 h-[50%] sm:h-[45%] md:h-full">
        <div className="flex flex-col max-w-xl m-auto h-full justify-center">
          <h2 className="font-display text-inherit text-2xl md:text-4xl font-semibold">
            <a href={link} tabIndex={-1}>
              {heading}
            </a>
          </h2>
          {paragraph && (
            <p className="text-sm md:text-base mt-2">{paragraph}</p>
          )}
          {link && linkText && (
            <a
              href={link}
              className="underline flex items-center text-base md:text-lg font-display font-semibold mt-2 sm:mt-6 link-arrow-hover h-6 hover:no-underline"
            >
              {linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategoryBlock;
