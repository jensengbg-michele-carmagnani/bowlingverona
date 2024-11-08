"use strict";
exports.__esModule = true;
var react_1 = require("react");
var About_mobile_vector_png_1 = require("@/public/assets/shape_image/About-mobile-vector.png");
var About_desk_vector_png_1 = require("@/public/assets/shape_image/About-desk-vector.png");
var birthday_image_png_1 = require("@/public/assets/shape_image/birthday-image.png");
var useScreenWidth_1 = require("@/lib/useScreenWidth");
var InfoParty = function (props) {
    var screenSize = useScreenWidth_1["default"]();
    var isXs = screenSize === "xs";
    return (react_1["default"].createElement("div", { className: "relative bg-no-repeat bg-center bg-contain w-screen min-h-[800px] font-[Rajdhani]", style: {
            backgroundImage: "url(" + (isXs ? About_mobile_vector_png_1["default"] === null || About_mobile_vector_png_1["default"] === void 0 ? void 0 : About_mobile_vector_png_1["default"].src : About_desk_vector_png_1["default"] === null || About_desk_vector_png_1["default"] === void 0 ? void 0 : About_desk_vector_png_1["default"].src) + ")"
        } },
        react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Image, { src: birthday_image_png_1["default"] })),
            react_1["default"].createElement("div", null))));
};
exports["default"] = InfoParty;
