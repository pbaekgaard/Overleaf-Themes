// ==UserScript==
// @name         Overleaf Catppuccin Theme
// @namespace    http://tampermonkey.net/
// @version      2024-12-19
// @description  try to take over the world!
// @author       pbaekgaard
// @match        https://www.overleaf.com/project/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=overleaf.com
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

(function() {
    'use strict';

    let editorMode = true;

    // Function to check and click the appropriate button
    function setupKeyListener() {
        document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.altKey && event.key === 'y') {
                if (!editorMode) {
                    const codeButton = Array.from(document.querySelectorAll("button > span > span"))
                        .find(e => e.textContent === "code");
                    if (codeButton) {
                        codeButton.parentElement.parentElement.click();
                        editorMode = true;
                    }
                } else {
                    const pdfButton = Array.from(document.querySelectorAll("button > span > span"))
                        .find(e => e.textContent === "picture_as_pdf");
                    if (pdfButton) {
                        pdfButton.parentElement.parentElement.click();
                        editorMode = false;
                    }
                }
            }
        });
    }

    // Watch for changes in the DOM
    const observer = new MutationObserver((mutations, obs) => {
        const targetElement = document.querySelector("button > span > span");
        if (targetElement) {
            setupKeyListener();
            obs.disconnect(); // Stop observing once the element is found
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();


GM_addStyle ( `
.btn-full-height {
 border-right: 0px;
}

.toolbar.toolbar-header {
 border-right: 0px !important;
}

body.slext-loaded .toolbar.toolbar-header .btn-full-height {
 border-right: 0px !important;
}

body.slext-loaded .btn.btn-primary {
	color: #21283e;
}

.dropdown-menu.show > li * {
	color: #fff;
}

.pdf {
	background-color: #21283e;
}

:root {
  --editor-toolbar-bg: #21283e;
  --bs-dropdown-bg: #21283e;
  --bs-dropdown-header-color: #fff;
}

.dropdown-menu {
  background-color: #21283e;
}


.outline-container {
   background-color: #21283e;
}

.outline-body {
   background-color: #21283e;
}



.cm-editor {
background-color: #21283e;
}

.ͼm .cm-gutters {
 background-color: #21283e
}

.cm-gutterElement.cm-activeLineGutter {
 color: #a3d692;
 background-color: #2f3a4c;
}

.ͼm .cm-activeLine {
 background-color: #2f3a4c;
}

.switch-to-editor-btn, .switch-to-pdf-btn, .switch-to-editor-btn:hover, .switch-to-pdf-btn:hover {
 background-color: #a3d692;
}

.ol-cm-change.ol-cm-change-c {
  background-color: #aed69280
}

body.slext-loaded .btn.btn-primary {
  border: 0px;
}

.dropdown-item.active {
 color: #a3d692;
background-color: #2f3a4c;
}

.chat .new-message textarea {
background-color: #2f3a4c;
color: #fff;
}

.file-tree ul.file-tree-list li .entity > .entity-name > button.item-name-button {
 color:#d3d4d8;
}

.file-tree:not(.multi-selected) ul.file-tree-list li.selected > .entity > .entity-name > button > span {
color: #21283e;
}

.dropdown-menu.show.dropdown-menu-end > li > button > div > span {
 color: #fff;
}

.dropdown-header {
  color: #fff;
}

.dropdown-menu.show.dropdown-menu-end {
transform: translate(180px, 34px) !important;
}

.rp-entry-comment {
	border-color: #a3d692;
}

.review-panel .rp-entry-list-react {
	background-color: #21283e;
}


.rp-state-current-file-expanded .rp-entry {
	background-color: #22293e;
}

.rp-comment-input {
	background-color: #2f3a4c;
	border: solid 1px #888;
	color: #fff;
}

.rp-nav-item-active {
	border-top: 3px solid #a2d591;
	color: #a2d591;
}

.rp-nav {
	background-color: #2f3a4c;
}

.custom-toggler:hover {
	background-color: #a3d692;
}

.rp-comment-content {
	color: #fff;
}

.rp-entry-metadata {
	color: #8d939d;
}

.rp-comment-actions > button {
	color: #a3d692 !important;
}

.rp-state-current-file-expanded .rp-entry {
	background-color: #21283e;
}

.rp-entry-user {
	color: #a3d692 !important;
}

.review-panel-toolbar {
	background-color: #2f3a4c;
	border-bottom: 0px;
	display: none;
	flex-basis: 32px;
	flex-shrink: 0;
	position: relative;
	text-align: center;
	z-index: 3;
}

.review-panel {
	background-color: #dadfed;
	border-left: solid 0 #2f3a4c;
	box-sizing: content-box;
	color: #6b7797;
	flex-shrink: 0;
	font-family: var(--bs-font-sans-serif);
	font-size: var(--rp-base-font-size);
	line-height: 1.5;
	position: relative;
	z-index: 6;
}

.resolved-comments-toggle {
	background-color: #a3d692;
	border: solid 1px var(--rp-border-grey);
	border-radius: var(--border-radius-base);
	color: #2f3a4c;
	display: block;
	font-size: var(--font-size-02);
	height: 22px;
	line-height: 1.4;
	padding: 0;
	width: 22px;
}

.toggle-switch-label {
	color: var(--content-secondary);
	color: #d3d4d8;
}

.toggle-switch {
	background-color: #2f3a4c;
}

.toggle-switch-input:checked + .toggle-switch-label {
	background-color: #a3d692;
	color: #2f3a4c;
}

.toolbar-pdf-left .compile-button-group {
	background-color: #a3d692;
	border-bottom-left-radius: 0;
	border-top-left-radius: 0;
	height: 28px;
}

.project-list-upload-project-modal-uppy-dashboard .uppy-Root .uppy-Dashboard-AddFiles-title .toolbar-pdf-left .dropdown > button[disabled].uppy-Dashboard-browse, .toolbar-pdf-left .dropdown > .btn[disabled], .toolbar-pdf-left .dropdown > .btn[disabled]:active, .toolbar-pdf-left .project-list-upload-project-modal-uppy-dashboard .uppy-Root .uppy-Dashboard-AddFiles-title .dropdown > button[disabled].uppy-Dashboard-browse {
	background-color: #a3d692;
	color: var(--bs-btn-color);
	opacity: 1;
}
.tok-comment {
	color: #a3d692 !important;
}

.pdfjs-page-number-input input {
	color: #fff;
	background-color: #2f3a4c !important;
}

.cm-gutters {
	background-color: #21283e !important;
}

.ide-react-editor-panel {
	background-color: #21283e !important;
}

.loading-panel {
	background-color: #22293e;
}

.loading {
	color: #fff;
}

.loading-screen {
 background-color :#22293e;
}

.loading-screen .loading-screen-label {
	color: #fff;
}

body {
	background-color: #000;
	color: var(--bs-body-color);
}

.rp-state-current-file-expanded .rp-entry {
	border-top: 1px solid #a3d692 !important;
	border-bottom: 1px solid #a3d692 !important;
	border-right: 1px solid #a3d692 !important;
}

.rp-add-comment-btn:focus, .rp-add-comment-btn:hover, .rp-bulk-actions-btn:focus, .rp-bulk-actions-btn:hover, .rp-entry-button:focus, .rp-entry-button {
	background-color: #2f3a4c;
	color: #a3d692;
}


.rp-add-comment-btn:focus, .rp-add-comment-btn:hover, .rp-bulk-actions-btn:focus, .rp-bulk-actions-btn:hover, .rp-entry-button:focus, .rp-entry-button:hover {
	background-color: #a3d692;
	color: #21283e;
}

[disabled].rp-add-comment-btn, [disabled].rp-add-comment-btn:focus, [disabled].rp-add-comment-btn:hover, [disabled].rp-bulk-actions-btn, [disabled].rp-bulk-actions-btn:focus, [disabled].rp-bulk-actions-btn:hover, [disabled].rp-entry-button, [disabled].rp-entry-button:focus, [disabled].rp-entry-button:hover {
	background-color: #21283e;
	color: #d3d4d8;
}

.rp-state-current-file .rp-entry-callout-comment, .rp-state-current-file .rp-entry-callout-comment::after {
	border-color: #a3d692;
}

.d-inline-grid.btn.btn-secondary.btn-sm {
	background-color: #a3d692;
}

.compile-button-group.dropdown.btn-group > button {
  	background-color: #a3d692;
}

.spinner-container  >span {
    color: #22293e;
}

#layout-dropdown-btn:hover {
	background-color: var(--accentColor);
}
.cm-vim-panel.cm-panel {
	background-color: #21283e;
}
#layout-dropdown-btn {
	background-color: var(--backgroundColor);
}
.cm-vim-panel.cm-panel input {
	color: #fff;
}




#layout-dropdown-btn:hover {
  	color: var(--backgroundColor) !important;
	fill: var(--accentColorActive);
	stroke: var(--accentColorActive);
}

#layout-dropdown-btn {
	background-color: var(--buttonColorHover);
	color: var(--accentColorHover) !important;
}

.btn.btn-full-height:hover {
	background-color: var(--accentColor) !important;
	color: var(--backgroundColor) !important;
}

.btn.btn-full-height.active:hover {
	background-color: var(--backgroundColor) !important;
	color: var(--accentColor) !important;
}

.btn.btn-full-height.active {
	background-color: var(--accentColor) !important;
	color: var(--backgroundColor) !important;
}

body.slext-loaded .toolbar.toolbar-header .btn-full-height:not(:active):hover {
	background-color: var(--buttonColorHover);
	color: var(--backgroundColor);
}


.online-user.online-user-multi {
	color: var(--accentColor);
}

.toolbar-pdf-left .compile-button-group > * {
	color: var(--backgroundColor) !important;
}

.synctex-controls > * {
	color: var(--backgroundColor) !important;
}

.synctex-controls > :hover, .toolbar-pdf-left .compile-button-group > :hover  {
	background-color: #2f3a4c !important;
	color: var(--accentColor) !important;
}
.selected > .entity > div > div > button > span {
	color: var(--backgroundColor) !important;
}

.selected > .entity > div > * {
	color: var(--backgroundColor) !important;
}

#review-panel-overview {
	background-color: var(--backgroundColor) !important;
}

.rp-comment-loaded {
	background-color: var(--backgroundColor) !important;
}
.rp-overview-file-header {
	background-color: #2f3a4c !important;
}

.rp-state-overview .rp-entry {
	border-bottom: solid 2px var(--accentColor);
	border-radius: 0;
	cursor: pointer;
	background-color: var(--backgroundColor) !important;
}
.rp-comment-reply {
	border: none;
}

.rp-overview-file-header {
	background-color: var(--rp-bg-dim-blue);
	border-bottom: none !important;
	border-top: none !important;
	cursor: pointer;
	font-weight: var(--rp-semibold-weight);
	margin-top: var(--spacing-05);
	padding: var(--spacing-01) var(--spacing-03);
	text-align: center;
}

.fixed-size-document.jzzuclc.idc0_350 {
	background-color: #21283e;
}

.loading-screen .loading-screen-brand::after {
	background: url('/images/overleaf-o-7052183c04d0611b79e2.svg') no-repeat bottom/100%;
	bottom: 0;
	content: "";
	height: inherit;
	left: 0;
	position: absolute;
	right: 0;
	transition: height .5s;
	/* color: #000; */
	filter: brightness(0) saturate(100%) invert(86%) sepia(16%) saturate(745%) hue-rotate(57deg) brightness(92%) contrast(90%);
}

.loading-screen {
	background-color: #21283e;
}

.loading-screen .loading-screen-brand {
	background: url(/images/overleaf-o-grey-f7605837650fa8d6aab8.svg) no-repeat bottom/100%;
	height: 0;
	padding-top: 115.3846153846%;
	position: relative;
	fill: #2f3a4c !important;
	color: #2f3a4c !important;
}

` );