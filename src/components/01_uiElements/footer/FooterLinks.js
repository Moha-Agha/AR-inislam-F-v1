import React from "react";

const FooterLinks = ({ extraClass = " ", listTitle = " ", listItems = [{ title: '', link: '' }] }) => {
  return (
    <div className={"footer-links" + " " + extraClass}>
      <div className="footer-links_title">
        {listTitle}
      </div>
      <ul>
        {listItems.map((item, key) => {
          return (
            <li key={key}><a href={item.link}>{item.title}</a></li>
          )
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
