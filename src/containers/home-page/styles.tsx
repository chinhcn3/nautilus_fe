import {createGlobalStyles} from 'goober/global';

export const HomePageStyles = createGlobalStyles`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}

/* Custom CSS */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #111;
}

html,
body {
  box-sizing: border-box;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: #111;
  transition: all 0.2s ease;
}

a:hover {
  color: #4b40d4;
}

ul {
  list-style-type: none;
}

.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.container:before,
.container:after,
.row:before,
.row:after {
  content: " ";
  display: table;
}

.gutter-24px {
  margin-left: -12px;
  margin-right: -12px;
}

.container:after,
.row:after {
  clear: both;
}

[class*="col-"] {
  width: 100%;
  float: left;
  min-height: 1px;
}

.col {
  padding-left: 12px;
  padding-right: 12px;
}

/* Making it Responsive using CSS Media Rules*/

@media screen and (min-width: 320px) {
  .col-wd-1 {
    width: 8.33333%;
  }
  .col-wd-2 {
    width: 16.66667%;
  }
  .col-wd-3 {
    width: 25%;
  }
  .col-wd-4 {
    width: 33.33333%;
  }
  .col-wd-5 {
    width: 41.66667%;
  }
  .col-wd-6 {
    width: 50%;
  }
  .col-wd-7 {
    width: 58.33333%;
  }
  .col-wd-8 {
    width: 66.66667%;
  }
  .col-wd-9 {
    width: 75%;
  }
  .col-wd-10 {
    width: 83.33333%;
  }
  .col-wd-11 {
    width: 91.66667%;
  }
  .col-wd-12 {
    width: 100%;
  }
}

@media screen and (min-width: 640px) {
  .col-md-1 {
    width: 8.33333%;
  }
  .col-md-2 {
    width: 16.66667%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-4 {
    width: 33.33333%;
  }
  .col-md-5 {
    width: 41.66667%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-7 {
    width: 58.33333%;
  }
  .col-md-8 {
    width: 66.66667%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-10 {
    width: 83.33333%;
  }
  .col-md-11 {
    width: 91.66667%;
  }
  .col-md-12 {
    width: 100%;
  }
}

@media screen and (min-width: 960px) {
  .col-sm-1 {
    width: 8.33333%;
  }
  .col-sm-2 {
    width: 16.66667%;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-4 {
    width: 33.33333%;
  }
  .col-sm-5 {
    width: 41.66667%;
  }
  .col-sm-6 {
    width: 50%;
  }
  .col-sm-7 {
    width: 58.33333%;
  }
  .col-sm-8 {
    width: 66.66667%;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-10 {
    width: 83.33333%;
  }
  .col-sm-11 {
    width: 91.66667%;
  }
  .col-sm-12 {
    width: 100%;
  }
}

.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-between {
  justify-content: space-between;
}

.font-weight-bold {
  font-weight: 600;
}

.d-block {
  display: block;
}

.w-100 {
  width: 100%;
}

.img-fluid {
  max-width: 100%;
  display: block;
}

.img-circle {
  border-radius: 100%;
}

button {
  background-color: transparent;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Style home page */

header {
  padding: 0 40px;
  border-bottom: 1px solid #dedede;
}

header .header-left {
  margin-right: 24px;
}

header .header-left img {
  margin-top: 3px;
}

header .main-menu ul li {
  padding: 22px 16px;
  font-weight: 600;
}

header .main-menu ul li a:hover,
header .main-menu ul li a.active {
  color: #4b40d4;
}

.btn-write {
  width: 176px;
  flex-shrink: 0;
  height: 40px;
  line-height: 40px;
  background-color: #4b40d4;
  display: block;
  color: #fff;
  border-radius: 25px;
  transition: all 0.2s ease;
}

.btn-login {
  text-transform: uppercase;
  font-weight: 500;
}

.btn-notification {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid #dedede;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
}

.btn-notification:hover {
  opacity: 0.85;
}

.header-avatar {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.header-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-info {
  position: relative;
}

.notification-popup,
.popup-login {
  border-radius: 4px;
  border: 1px solid #dedede;
  background-color: #fff;
  position: absolute;
  width: 400px;
  top: 55px;
  right: 45px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.notification-popup-content {
  min-height: 120px;
  padding: 24px 0;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
}

.notification-popup-content.has-content {
  min-height: 360px;
}

.notification-empty {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.notification-empty span {
  color: #aeaeae;
  font-size: 14px;
  margin-top: 5px;
}

.notification-popup-header,
.notification-popup-footer {
  padding: 11px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.notification-popup-footer {
  padding: 13px 16px;
  justify-content: center;
}

.notification-popup-header button,
.notification-popup-footer button {
  color: #4b40d4;
}

.popup-login {
  top: 45px;
  right: 0;
  font-size: 14px;
  padding-top: 32px;
}

.popup-login .text-header,
.popup-login .btn-group {
  padding: 0 32px;
}

.popup-login .text-header span {
  color: #aeaeae;
  font-size: 14px;
}

.popup-login .text-header a {
  font-size: 14px;
  color: #4b40d4;
  margin-top: 8px;
}

.popup-login .text-header .decor {
  width: 1px;
  height: 16px;
  display: inline-block;
  margin: 0 8px;
  background-color: #aeaeae;
  margin-top: 8px;
}

.popup-login .btn-group {
  margin-top: 24px;
}

.popup-login .list-benifit {
  background-color: rgba(75, 64, 212, 0.3);
  padding: 32px;
  color: #111;
  margin-top: 32px;
  border-radius: 0 0 4px 4px;
}

.popup-login .list-benifit span {
  color: #111;
}

.popup-login .list-benifit p {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 8px;
  flex-shrink: 0;
}

.popup-login .list-benifit p span {
  color: #4b40d4;
  margin-right: 5px;
  font-weight: 500;
  flex-shrink: 0;
  font-size: 14px;
}

.popup-login .list-benifit p.long-text {
  display: block;
  transform: translateY(-4px);
}

.popup-login .list-benifit p.long-text img {
  transform: translateY(7px);
}

.popup-login .list-benifit p img {
  margin-right: 8px;
}

.popup-login .btn-group a {
  display: flex;
  align-items: center;
  border: 1px solid #dedede;
  border-radius: 4px;
  width: 100%;
  height: 48px;
  justify-content: center;
  color: #111;
}

.popup-login .btn-group a + a {
  margin-top: 10px;
}

.popup-login .btn-group img {
  margin-right: 8px;
}

.btn-write:hover,
.btn-login:hover {
  opacity: 0.85;
}

.search-box {
  width: 100%;
  position: relative;
  display: flex;
  border: 1px solid #dedede;
  border-radius: 25px;
  padding: 0px 16px;
  margin: 0 16px;
}

.search-input {
  width: 100%;
  border-right: none;
  outline: none;
  font-size: 16px;
  border: 0;
}
.search-button {
  text-align: center;
  height: 40px;
  width: 40px;
  outline: none;
  cursor: pointer;
  background: none;
  border-radius: 25px;
}

.btn-login {
  font-weight: 500;
  color: #4b40d4;
  display: block;
}

.header-info {
  flex-shrink: 0;
}

footer {
  background-color: #1c1b2a;
  color: #fff;
  padding: 40px 0;
  margin-top: 50px;
}

footer p {
  color: #fff;
  margin-top: 16px;
}

footer .footer-left ul {
  display: flex;
  margin-top: 40px;
}

footer .footer-left ul li {
  margin-right: 32px;
  position: relative;
}

footer .footer-left ul li a:hover {
  opacity: 0.7;
}

footer .footer-left ul li:before {
  position: absolute;
  display: block;
  content: "";
  width: 2px;
  height: 18px;
  background-color: #fff;
  top: 12px;
  left: -15px;
}

footer .footer-left ul li:last-child {
  margin-right: 0;
}

footer .footer-left ul li:first-child::before {
  display: none;
}

.footer-right {
  display: flex;
}

.footer-right h3 {
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.footer-right a {
  color: #fff;
  margin-bottom: 16px;
  display: inline-block;
}

.footer-right a:hover {
  opacity: 0.7;
}

.heading {
  position: relative;
  width: 100%;
  margin-bottom: 24px;
}

.heading::after {
  position: absolute;
  width: 100%;
  background-color: #4b40d4;
  height: 4px;
  content: "";
  top: 20px;
  z-index: 1;
}

.heading h2 {
  font-family: "Anton", sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  position: relative;
  z-index: 2;
  background-color: white;
  padding-right: 24px;
  flex-shrink: 0;
}

.heading .view-more {
  color: #4b40d4;
  background-color: white;
  position: relative;
  z-index: 2;
  padding-left: 24px;
  flex-shrink: 0;
}

.heading .view-more span {
  color: #4b40d4;
  margin-right: 8px;
  font-weight: 500;
}

/* News card component */
.news-card {
  margin-bottom: 24px;
}

.news-card .icon-sale {
  transform: translateY(3px);
  margin-right: 8px;
}
.news-card-img img {
  border-radius: 8px;
}

.news-card-meta {
  margin-top: 16px;
}

.news-card-meta span {
  color: #4b40d4;
  font-weight: 500;
}

.news-card-meta span + span {
  margin-left: 20px;
  color: #aeaeae;
  position: relative;
}

.news-card-meta span + span::before {
  margin-left: 20px;
  background: #aeaeae;
  width: 4px;
  height: 4px;
  position: absolute;
  left: -33px;
  top: 9px;
  border-radius: 100%;
  content: "";
  display: block;
}

.news-card-title a {
  font-size: 20px;
  margin: 16px 0 24px;
}

.news-card-big .news-card-title a {
  margin: 16px 0;
  font-size: 32px;
}

.news-card-desc {
  font-size: 18px;
  margin-bottom: 16px;
  line-height: 24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* From which line on to truncate */
  overflow: hidden;
}

.news-card-info img {
  width: 40px;
  height: 40px;
}

.news-card-info span {
  margin-left: 8px;
}

.news-card-comment {
  margin-left: 32px;
  position: relative;
}

.news-card-comment::before {
  position: absolute;
  left: -16px;
  top: -2px;
  background-color: #aeaeae;
  height: 30px;
  width: 1px;
  content: "";
}

.news-card-comment img {
  width: 24px;
  height: 24px;
}

.news-card-comment span {
  margin-left: 8px;
}

.news-card-outstanding {
  background-color: #4b40d4;
}

.news-card-outstanding .news-card-title a {
  font-size: 32px;
}

.news-card-outstanding .news-card-body {
  color: #fff;
}

.news-card-outstanding .news-card-desc {
  -webkit-line-clamp: 5;
}

.news-card-outstanding .news-card-img {
  margin-right: -12px;
}

.news-card-outstanding .news-card-img img {
  border-radius: 8px 0 0 8px;
}

.news-card-outstanding .news-card-body {
  color: white;
  padding: 32px;
}

.news-card-outstanding .news-card-meta span,
.news-card-outstanding .news-card-title a,
.news-card-outstanding .news-card-desc,
.news-card-outstanding .news-card-info span {
  color: #fff;
}

.outstanding {
  background-color: rgba(75, 64, 212, 0.3);
  padding: 40px 0 16px;
  margin: 16px 0 40px;
}

.outstanding h2,
.outstanding .view-more {
  background-color: transparent;
}

.outstanding hr {
  width: 100%;
  height: 4px;
  background-color: #4b40d4;
  border: 0;
  margin-top: 20px;
}

.outstanding .heading::after {
  display: none;
}

.funs .grid {
  display: flex;
  flex: 0 0 180px;
  overflow-x: scroll;
}

.carousel-wrap {
  position: relative;
}

.carousel-wrap .carousel-item:last-child {
  margin-right: 0;
}

.carousel-container {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
}

.funs-content .carousel-container {
  flex: 0 0 180px;
}

.funs-content {
  position: relative;
}

.carousel-wrap .btn-next,
.carousel-wrap .btn-prev {
  position: absolute;
  right: -20px;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border-radius: 100%;
  border: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 48px;
  height: 48px;
}

.carousel-wrap .btn-prev {
  left: -20px;
}

.funs-content button:hover {
  opacity: 0.85;
}

.funs-content button img {
  width: 100%;
  height: 100%;
  display: block;
}

.carousel-item {
  position: relative;
  height: 100%;
  display: block;
  min-height: 320px;
  min-width: 180px;
  margin-right: 24px;
}

.sales .carousel-item {
  min-height: unset;
  min-width: 25%;
}

.funs-content .carousel-item h5 {
  color: #fff;
  display: -webkit-box;
  max-width: 180px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 14px;
  margin: 0 16px 16px;
  font-weight: 400;
}

.funs-content .carousel-item:first-child {
  border: 2px dashed #4b40d4;
  border-radius: 4px;
  display: block;
}

.funs-content .carousel-item:last-child {
  margin-right: 0;
}

.funs-content .carousel-item .avatar {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 16px;
  left: 16px;
}

.funs-content .carousel-item a {
  color: white;
  font-size: 14px;
  position: absolute;
  padding: 16px;
  bottom: 0;
  left: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* From which line on to truncate */
  overflow: hidden;
}

.funs-content .carousel-item:first-child .add-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-height: 100%;
  width: 100%;
}

.funs-content .carousel-item:first-child .add-icon span {
  display: block;
  color: #4b40d4;
  margin-top: 16px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 8px;
}

.funs-content .carousel-item:first-child .avatar {
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
}

.funs-content .carousel-item .img-thumb {
  border-radius: 4px;
}

.lucky-content {
  background-color: #4b40d4;
  color: #fff;
  padding: 32px;
  border-radius: 0 0 8px 8px;
}

.lucky-content span {
  color: white;
}

.lucky-content h4 {
  color: white;
  font-size: 32px;
  margin: 8px 0 16px;
  font-weight: bold;
}

.lucky-content p {
  color: white;
  font-size: 18px;
}

.lucky-content img {
  margin-right: 16px;
}

.lucky-content .content-right .join {
  background-color: #fff;
  font-size: 18px;
  color: #4b40d4;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  padding: 16px 20px;
  border-radius: 4px;
}

.lucky-content .content-right .condition {
  font-size: 18px;
  color: #fff;
  display: block;
  text-decoration: underline;
  text-align: center;
  margin-top: 16px;
}

.lucky-right {
  background-color: rgba(75, 64, 212, 0.3);
  border-radius: 8px;
  padding: 16px;
  margin-right: 12px;
  margin-left: 12px;
}

.lucky-item {
  margin-top: 16px;
}

.lucky-item .img-thumb {
  min-width: 177px;
  border-radius: 4px;
  margin-right: 16px;
}

.lucky-item .text {
  font-size: 18px;
  font-weight: bold;
}

.top-news,
.top-banner,
.lucky,
.popular,
.review-outstanding,
.sales,
.review-outstanding-left .viewmore,
.popular-banner,
.review-latest,
.home-videos {
  margin-top: 40px;
}

.popular-left .news-card-img,
.review-outstanding-content .news-card-img {
  min-width: 480px;
  margin-right: 16px;
}

.review-outstanding-left .viewmore button {
  width: 180px;
  height: 56px;
  background-color: #4b40d4;
  color: #fff;
  border-radius: 4px;
}

.popular-left .news-card {
  margin-top: 48px;
}

.popular-left .news-card-meta {
  margin-top: 0;
}

.popular-left .news-card-body {
  display: flex;
  flex-direction: column;
}

.popular-left .news-card-info {
  margin-top: auto;
}

.popular-left .news-card-desc {
  -webkit-line-clamp: 3;
}

.popular-topic h4 {
  font-size: 32px;
  font-family: "Anton", sans-serif;
  text-transform: uppercase;
}

.popular-topic {
  border: 1px solid #dedede;
  padding: 24px;
  border-radius: 4px;
}

.popular-topic .viewmore a {
  color: #4b40d4;
  font-weight: 500;
}

.popular-topic .viewmore img {
  margin-left: 8px;
}

.popular-topic li {
  margin-top: 24px;
}

.review-latest .carousel-item {
  min-width: 33.33%;
}

.home-videos-right {
  background-color: rgba(75, 64, 212, 0.5);
  margin-left: -12px;
  margin-right: 12px;
  padding: 16px 0;
  max-height: 595px;
  overflow-y: scroll;
  /* overflow: hidden; */
}

.home-videos-right .lucky-item {
  transition: all 0.2s ease;
  border-right: 4px solid transparent;
  padding: 16px;
  margin-top: 0;
}

.home-videos-right .lucky-item img {
  max-height: 100px;
  object-fit: cover;
}

.home-videos-right .lucky-item:hover {
  background-color: rgba(75, 64, 212, 0.1);
  border-color: #4b40d4;
}

.home-videos-right .lucky-item:first-child {
  margin-top: 0;
}

.video-img {
  position: relative;
}

.video-left h3,
.video-img span {
  position: absolute;
  left: 32px;
  bottom: 32px;
  z-index: 2;
  cursor: pointer;
}

.video-left h3 {
  left: 148px;
}

.video-img h3 > a {
  font-size: 32px;
  color: #fff;
}

.review-outstanding-left {
  margin-top: 16px;
}

.review-outstanding-right .news-card {
  padding-bottom: 16px;
  border-bottom: 1px solid #dedede;
  margin-bottom: 0;
  margin-top: 24px;
}

.review-outstanding-right .viewmore a {
  margin-top: 24px;
}

.sale {
  margin-top: 24px;
}

.footer-topic,
.footer-links,
.footer-about {
  min-width: 250px;
  margin-right: 24px;
}

.footer-about ul + ul {
  display: none;
}

.popular-topic ul li:last-child .viewmore {
  display: none;
}

/* Responsive */

/* viewport <= 1440px */
@media screen and (max-width: 1441px) {
  .container {
    max-width: 1320px;
  }

  .header {
    padding: 0 30px;
  }

  .lucky-content h4 {
    font-size: 24px;
  }

  .btn-write {
    width: 140px;
  }

  .search-box {
    max-width: 200px;
  }

  .btn-login,
  .btn-write,
  .news-card-meta span,
  .news-card-info span {
    font-size: 14px;
  }

  .news-card-desc {
    font-size: 16px;
  }

  .news-card-meta span + span::before {
    top: 7px;
  }

  header .main-menu ul li {
    padding: 20px 10px;
  }

  .search-box {
    margin: 0 8px;
  }

  .btn-notification {
    margin-right: 8px;
  }

  .home-videos-right {
    max-height: 490px;
  }

  .news-card-outstanding .news-card-title a {
    font-size: 24px;
  }

  .lucky-item .img-thumb {
    min-width: 145px;
    margin-right: 12px;
    max-width: 145px;
  }

  .review-latest .carousel-item {
    min-width: 32%;
  }
}

/* viewport <= 1200px */
@media screen and (max-width: 1200px) {
  * {
    font-size: 15px;
  }
  .container {
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
  .header-content {
    flex-direction: column;
    padding: 30px 0;
  }

  .home-videos-right {
    max-height: 426px;
  }

  .footer-topic,
  .footer-links,
  .footer-about {
    min-width: 200px;
    margin-right: 24px;
  }

  .news-card-outstanding .news-card-title a {
    font-size: 22px;
  }

  .news-card-outstanding .news-card-desc {
    -webkit-line-clamp: 3;
    font-size: 16px;
  }
}

/* viewport <= 820px */
@media screen and (max-width: 821px) {
  * {
    font-size: 14px;
  }

  .news-card {
    display: flex;
  }

  .news-card-big,
  .news-card-outstanding {
    display: block;
  }

  .review-latest .news-card {
    flex-direction: column;
  }

  .news-card-body {
    margin-left: 16px;
  }

  .lucky-content {
    flex-direction: column;
    align-items: center;
  }

  .popular-left .news-card-img,
  .review-outstanding-content .news-card-img {
    min-width: 320px;
  }

  .popular-topic ul {
    display: flex;
    flex: 0 0 50%;
    flex-wrap: wrap;
  }

  .popular-banner,
  .ad-banner {
    display: none;
  }

  .video-img h3 > a {
    display: none;
  }

  .video-left h3,
  .video-img span {
    left: 50%;
    top: 50%;
    bottom: unset;
    transform: translate(-50%, -50%);
  }

  .home-videos-right {
    margin-left: 12px;
  }

  .review-outstanding .row {
    display: flex;
    flex-direction: column-reverse;
  }
}

/* viewport <= 575px */
@media screen and (max-width: 576px) {
  .container {
    padding-left: 8px;
    padding-right: 8px;
  }

  .main-menu {
    display: none;
  }

  .header {
    padding: 0 8px;
  }

  .header-content {
    padding: 16px 0;
    /* flex-direction: row; */
  }

  .search-box {
    /* max-width: 40px; */
  }

  .notification-popup,
  .popup-login {
    width: calc(100vw - 16px);
    right: 0;
    z-index: 10;
    /* display: none; */
  }

  .top-banner {
    margin-top: 0;
    margin-left: -8px;
    margin-right: -8px;
  }

  .news-card-body {
    margin-left: 8px;
  }

  .popular-left .news-card-img,
  .review-outstanding-content .news-card-img {
    margin-right: 0;
  }

  .popular-left .news-card {
    margin-top: 40px;
  }

  .popular {
    margin-top: 0;
  }

  .popular-content .news-card-desc {
    display: none;
  }

  .news-card-big .news-card-img img {
    width: 100%;
    max-height: 220px;
    object-fit: cover;
  }

  .news-card-title a {
    font-size: 16px;
    margin: 16px 0;
  }

  .top-news .news-card {
    margin-bottom: 24px;
  }

  .top-news-right .news-card-meta,
  .news-card-outstanding .news-card-meta,
  .outstanding .news-card-meta {
    margin-top: 0;
  }

  .top-news-right .news-card-img img,
  .outstanding-list .news-card-img img,
  .popular-content .news-card-img img {
    max-width: 120px;
    object-fit: cover;
  }

  .popular-left .news-card-img,
  .review-outstanding-content .news-card-img {
    min-width: 120px;
  }

  .news-card-big .news-card-title a {
    font-size: 20px;
  }

  .news-card-big .news-card-body,
  .news-card-outstanding .news-card-body {
    margin-left: 0;
  }

  .news-card-info img {
    width: 24px;
    height: 24px;
  }

  .btn-login,
  .btn-write,
  .news-card-meta span,
  .news-card-info span {
    font-size: 12px;
  }

  .news-card-comment::before {
    height: 24px;
    top: 0;
  }

  .heading h2 {
    font-size: 28px;
  }

  .outstanding hr {
    margin-top: 15px;
  }

  .outstanding {
    padding: 24px 0 16px;
    margin-top: 0;
  }

  .news-card-outstanding .news-card-body {
    padding: 16px;
  }

  .news-card-outstanding .news-card-title a {
    font-size: 20px;
  }

  .news-card-outstanding .news-card-desc {
    -webkit-line-clamp: 5;
    font-size: 16px;
  }

  .carousel-item {
    margin-right: 8px;
    min-height: 200px;
    min-width: 112px;
  }

  .funs-content .carousel-item img {
    width: 100%;
  }

  .funs-content .carousel-item:first-child .add-icon span {
    margin-top: 24px;
  }

  .heading::after {
    top: 14px;
  }

  .carousel-wrap .btn-next,
  .carousel-wrap .btn-prev {
    width: 40px;
    height: 40px;
  }

  .carousel-wrap .btn-next img,
  .carousel-wrap .btn-prev img {
    width: 100%;
  }

  .carousel-wrap .btn-next {
    right: -5px;
  }

  .carousel-wrap .btn-prev {
    left: -5px;
  }

  .lucky-content {
    padding: 16px;
  }

  .lucky-content h4 {
    font-size: 20px;
  }

  .lucky-content p {
    font-size: 16px;
  }

  .lucky-content .content-right .join {
    width: 100%;
    margin-top: 16px;
    text-align: center;
  }

  .lucky-content .content-right {
    width: 100%;
  }

  .lucky-right {
    margin-top: 16px;
  }

  .lucky-right .img-thumb {
    display: none;
  }

  .lucky-item .text {
    color: #4b40d4;
  }

  .popular-topic li {
    flex: 0 0 47%;
    margin-right: 16px;
  }

  .popular-topic li:nth-child(even) {
    margin-right: 0;
  }

  .viewmore-wrap .viewmore {
    display: none;
  }

  .popular-topic li:not(:last-child) img {
    min-height: 90px;
    object-fit: cover;
  }

  .review-latest .carousel-item,
  .sales .carousel-item {
    min-width: 280px;
  }

  .home-videos-right {
    max-height: 520px;
  }

  .review-list .news-card {
    flex-direction: column;
  }

  .popular-topic {
    padding: 16px;
  }

  .review-list .news-card-img img {
    width: 100%;
  }

  .review-outstanding-content .news-card-img img {
    max-width: 120px;
    object-fit: cover;
  }

  .review-outstanding-right .viewmore a {
    margin-top: 16px;
  }

  .review-outstanding-content .news-card-desc {
    display: none;
  }

  .review-outstanding-content .news-card-meta {
    margin-top: 0;
  }

  .review-outstanding-left .viewmore button {
    width: 140px;
    height: 48px;
  }

  .sales .carousel-item .news-card {
    flex-direction: column;
  }

  .popular-topic ul li:last-child .viewmore {
    display: flex;
    margin-top: 30px;
  }

  footer {
    margin-top: 30px;
    padding: 16px 8px;
  }

  footer .footer-left ul {
    margin-top: 20px;
    margin-bottom: 32px;
  }

  .footer-about ul + ul {
    display: block;
    margin-top: 16px;
  }

  .footer-links {
    display: none;
  }
}

/* Style detail page */
`;
