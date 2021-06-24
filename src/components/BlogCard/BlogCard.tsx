import React from "react";
import { Blog } from "../../constants";
import "./BlogCard.scss";

const BlogCard: React.FC<{ blog: Blog }> = (props) => (
  <a href={props.blog.link} target="blank">
    <div className="BlogCard flex-column justify-end items-center rounded-lg space-y-3">
      <div
        style={{
          backgroundImage: `url("${props.blog.banner}`,
        }}
        className={"rounded-lg header-image"}
      ></div>
      <div className={"h-3/5 text-sm font-semibold truncate"}>
        {props.blog.title}
      </div>
      <div
        className={
          "w-full flex-row-reverse justify-start items-center text-xs text-gray-darker"
        }
      >
        <p className={"text-xs text-gray-darker w-full text-right"}>
          {props.blog.date}
        </p>
      </div>
    </div>
  </a>
);

export default BlogCard;
