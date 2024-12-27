"use client"
import React from "react";
import ReactCookieBot from "react-cookiebot";
import PropTypes from "prop-types";

const domainGroupId = process.env.NEXT_PUBLIC_COOKIE_BOT_DOMAIN_GROUP;

const CookieBot = () => {
  if (!domainGroupId) {
    console.error("CookieBot domainGroupId is not defined");
    return null;
  }

  return (
    <>
      <ReactCookieBot domainGroupId={domainGroupId} />
    </>
  );
};

CookieBot.propTypes = {
  domainGroupId: PropTypes.string.isRequired,
};

export default CookieBot;
