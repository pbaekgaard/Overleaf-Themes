// ==UserScript==
// @name         Overleaf Ayu Theme
// @namespace    http://tampermonkey.net/
// @version      2024-12-19
// @description  try to take over the world!
// @author       pbaekgaard
// @match        https://www.overleaf.com/project/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=overleaf.com
// @grant    GM_addStyle
// ==/UserScript==
(function() {
    'use strict';

    let editorMode = false;
    let splitView = true;

    // Function to check and click the appropriate button
    function setupKeyListener() {
        document.addEventListener('keydown', function(event) {
            // Toggle between PDF and Editor mode (Ctrl+Alt+Y)
            if (event.ctrlKey && event.altKey && event.key == "y") {
                if(splitView) {
                 // Press the layout button and then the editor only button
                    const layoutBtn = document.querySelector("#layout-dropdown-btn");
                    console.log(layoutBtn);
                    layoutBtn.click();
                    const layoutEditorOnlyBtn = document.querySelector("div.layout-dropdown ul a.dropdown-item:nth-child(2)");
                    layoutEditorOnlyBtn.click();
                    splitView = false;
                    editorMode = true;
                    console.log(`State: \nsplitView: ${splitView}\nEditorMode: ${editorMode}`);
                } else if (!editorMode) {
                 // Press the Editor Button
                    const editorBtn = document.querySelector(".toolbar-pdf-right > button:nth-child(2)");
                    editorBtn.click();
                    splitView = false;
                    editorMode = true;
                    console.log(`State: \nsplitView: ${splitView}\nEditorMode: ${editorMode}`);
                } else {
                    const pdfBtn = document.querySelector("button.btn-secondary:nth-child(3)");
                    pdfBtn.click();
                    editorMode = false;
                    console.log(`State: \nsplitView: ${splitView}\nEditorMode: ${editorMode}`);
                  // Press the PDF Button
                }
            }

            if (event.ctrlKey && event.altKey && event.key == "s") {
                if(!splitView) {
                console.log("Set Split view");
                const layoutBtn = document.querySelector("#layout-dropdown-btn");
                console.log(layoutBtn);
                layoutBtn.click();
                const splitBtn = document.querySelector("div.layout-dropdown ul a.dropdown-item:nth-child(1)");
                splitBtn.click();
                splitView = true;
                console.log(`State: \nsplitView: ${splitView}\nEditorMode: ${editorMode}`);
                } else {

                 // Press the layout button and then the editor only button
                    const layoutBtn = document.querySelector("#layout-dropdown-btn");
                    console.log(layoutBtn);
                    layoutBtn.click();
                    const layoutEditorOnlyBtn = document.querySelector("div.layout-dropdown ul a.dropdown-item:nth-child(2)");
                    layoutEditorOnlyBtn.click();
                    splitView = false;
                    editorMode = true;
                    console.log(`State: \nsplitView: ${splitView}\nEditorMode: ${editorMode}`);
                }
            }
            // Toggle to Editor mode if splitview is enabled on Ctrl+Alt+Y too.
            // Toggle to SplitView mode (Ctrl+Alt+S)
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


:root {
  --bg-color: #0f1419 !important;
  --bg-color-secondary: color-mix(in srgb, var(--bg-color) 92%, white 8%);
  --accentColor: #ffcc66 !important;
  --cursorColor: #f29718;
  --toolbar-header-btn-border-color: var(--bg-color);
  --accentColorSecondary: #ffcc66;
  --textColor: #afb5c0 !important;
  --editorTextColor: #fff;
  --lineChanged: #ffcc6680;
  --editorActiveLine: var(--bg-color);

  --editor-toolbar-bg: var(--bg-color);
  --bs-dropdown-bg: var(--bg-color);
  --bs-dropdown-header-color: var(--textColor);
  --actionColor: var(--accentColor) !important;
  --link-ui: var(--accentColor) !important;
  --backgroundColor: var(--bg-color) !important;
  --headerColor: var(--bg-color) !important;
  --file-tree-item-selected-bg: var(--accentColor) !important;
  --bs-nav-link-color: var(--accentColor) !important;
  --outline-bg-color: var(--bg-color-secondary);
  --toolbar-filetree-bg-color: var(--bg-color-secondary);
  --editor-resizer-bg-color: var(--bg-color-secondary);
  --outline-border-color: var(--bg-color-secondary);
  --toolbar-border-color: var(--bg-color-secondary);
}


* {
--review-panel-bg-color: var(--bg-color);
--panel-heading-color: var(--editorActiveLine);
--review-panel-border-color: var(--panel-heading-color);
--review-panel-button-hover-bg-color: var(--accentColor);
--review-panel-footer-bg-color: var(--panel-heading-color);
--bg-accent-01: var(--accentColor);
--review-panel-color: var(--textColor);
--collapsible-file-header-bg-color: var(--panel-heading-color);
}

.loading-panel {
	background-color: var(--backgroundColor);
}

.cm-fat-cursor {
    background-color: var(--cursorColor) !important;
}

.review-mode-switcher:focus .review-mode-switcher-toggle-button.editing, .review-mode-switcher:hover .review-mode-switcher-toggle-button.editing {
	background-color: var(--review-panel-border-color);
}
.dropdown-item, .dropdown-item:active, .dropdown-item:visited {
	color: var(--review-panel-color);
}

.review-panel-entry {
	background-color: var(--backgroundColor);
	border: 1px solid var(--lineChanged);
	border-radius: var(--border-radius-base);
	margin-left: var(--spacing-02);
	padding: var(--spacing-04);
	width: calc(100% - var(--spacing-04));
	z-index: 1;
}


.file-tree ul.file-tree-list li .entity-name:hover::before {
	background-color: var(--lineChanged);
	content: " ";
	left: -9999px;
	position: absolute;
	width: 9999px;
}

.file-tree ul.file-tree-list li .entity-name:hover {
	background-color: var(--lineChanged);
}

.outline-header-expand-collapse-btn {
	align-items: center;
	background-color: transparent;
	border: 0;
	box-shadow: none;
	color: var(--outline-content-color);
	display: flex;
	flex: 1 0 100%;
	font-size: inherit;
	padding: 0 var(--spacing-03) 0 0;
	text-align: left;
	vertical-align: inherit;
	white-space: nowrap;
}

.dropdown-item:focus, .dropdown-item:hover {
	background-color: var(--bs-dropdown-link-hover-bg);
	color: var(--textColor);
}

.review-mode-switcher-toggle-button.editing {
	background-color: var(--review-panel-border-color);
	color: var(--accentColor);
}
.review-panel-comment-input {
	background-color: var(--panel-heading-color);
	border: solid 1px var(--neutral-60);
	border-radius: var(--border-radius-base);
	color: var(--accentColor);
	font-size: var(--rp-base-font-size);
	height: 25px;
	max-height: 400px;
	min-height: 25px;
	overflow-x: hidden;
	padding: 2px var(--spacing-03);
	resize: vertical;
	width: 100%;
}

.review-panel-entry.review-panel-entry-comment.review-panel-entry-loaded {
	border: 1px solid var(--accentColorSecondary);
    background-color: var(--review-panel-bg-color);
}

.review-panel-footer .review-panel-tab-active {
	border-top: solid 3px var(--bg-accent-01);
	color: var(--review-panel-color);
}

.review-panel-resolved-comments-toggle-reviewer-role {
	align-items: center;
	background-color: transparent;
	border: none;
	border-radius: 100%;
	color: var(--accentColor);
	display: flex;
	padding: var(--spacing-01);
}


.review-panel-resolved-comments-toggle-reviewer-role:focus, .review-panel-resolved-comments-toggle-reviewer-role:hover {
	background-color: var(--review-panel-button-hover-bg-color);
    color: var(--panel-heading-color);
}

.panel-heading {
	align-items: center;
	color: var(--accentColor);
	background-color: var(--panel-heading-color);
	display: flex;
	gap: 2px;
	padding: var(--spacing-03) var(--spacing-02);
}



.btn-full-height {
 border-right: 0px;
}

.d-flex.gap-2.align-items-center.dropdown-item {
	color: var(--textColor);
}




.left-menu {
	background-color: var(--backgroundColor);
	bottom: 0;
	font-size: var(--font-size-02);
	overflow: hidden auto;
	position: absolute;
	top: 0;
	transition: left .5s ease-in-out;
	width: 340px;
	z-index: 100;
}

.btn-link.text-left.dropdown-menu-button.dropdown-item {
	color: var(--textColor);
}


.toolbar.toolbar-header {
 border-right: 0px !important;
}

.dropdown-menu.show > li * {
	color: var(--textColor);
}

.pdf {
	background-color: var(--bg-color);
}


.fixed-size-document {
	background-color: var(--bg-color) !important;
}

.left-menu ul.nav .left-menu-button:active .material-symbols, .left-menu ul.nav .left-menu-button:hover .material-symbols {
	color: var(--backgroundColor);
}

div.review-panel-entry-actions > div.show.dropdown > ul.dropdown-menu.show.dropdown-menu-end {
	transform: translate(0px, 26px) !important;
}

div.review-panel-entry-actions > div.show.dropdown > ul.dropdown-menu.show.dropdown-menu-end > li > button > div {
color: var(--accentColor) !important;
}

.left-menu ul.nav .left-menu-button .material-symbols {
	color: var(--accentColor);
	margin-right: var(--spacing-04);
}

.review-panel-new .review-panel-overview-file-entry-count {
	background-color: var(--toolbar-btn-hover-bg-color);
	border-radius: var(--border-radius-base);
	margin-left: auto;
	padding: var(--spacing-01) var(--spacing-02);
    color: var(--accentColor);
}

.review-panel-new .review-panel-overfile-divider {
	border-bottom: 1px solid var(--accentColor);
	margin: var(--spacing-01) 0;
}

.left-menu .left-menu-setting .form-select {
	border: 1px solid var(--accentColor);
	background-color: var(--backgroundColor);
	color: var(--textColor);
	appearance: button;
}

.review-panel-new .review-panel-entry {
	background-color: var(--editorActiveLine);
	border: 1px solid var(--accentColorSecondary);
	border-radius: var(--border-radius-base);
	margin-left: var(--spacing-02);
	padding: var(--spacing-04);
	width: calc(100% - var(--spacing-04));
	z-index: 1;
}

.form-group.left-menu-setting:focus-within > label {
	color: var(--backgroundColor);
}

.left-menu ul.nav-downloads li a {
	color: var(--accentColor);
	text-decoration: none;
}

.left-menu ul.nav a .material-symbols {
	color: var(--accentColor);
}

.left-menu ul.nav a:active, .left-menu ul.nav a:focus, .left-menu ul.nav a:hover {
	background-color: var(--accentColor);
	color: var(--backgroundColor);
}

.left-menu ul.nav a:active .material-symbols, .left-menu ul.nav a:focus .material-symbols, .left-menu ul.nav a:hover .material-symbols {
	color: var(--backgroundColor);
}

.left-menu ul.nav .left-menu-button:active, .left-menu ul.nav .left-menu-button:hover {
	background-color: var(--accentColor);
	color: var(--backgroundColor);
}

.left-menu form.settings label {
	color: var(--accentColor);
	flex: 1 0 50%;
	font-weight: 400;
	margin-bottom: 0;
	padding-right: var(--spacing-03);
	white-space: nowrap;
}

#left-menu > h4 {
	color: var(--accentColor);
	font-weight: bold;
	font-style: oblique;
}

.left-menu .left-menu-setting:focus-within, .left-menu .left-menu-setting:hover {
	background-color: var(--accentColor);
	color: var(--backgroundColor);
}

.left-menu .left-menu-setting:focus-within, .left-menu .left-menu-setting:hover > label {
	color: var(--backgroundColor);
}

.dropdown-menu {
  background-color: var(--bg-color);
}
.list-unstyled.file-tree-list {
	background-color: var(--backgroundColor) !important;
}

.file-tree:not(.multi-selected) ul.file-tree-list li.selected > .entity > .entity-name {
	background-color: var(--accentColor) !important;
	color: var(--file-tree-item-selected-color);
	font-weight: 700;
	padding-right: var(--spacing-09);
}

.dropdown-item:focus:not(.active), .dropdown-item:hover:not(.active) {
	background-color: var(--toolbar-btn-hover-bg-color);
	cursor: pointer;
	text-decoration: none;
}
.chat .messages {
	background-color: var(--backgroundColor);
	inset: 0;
	bottom: 80px;
	overflow-x: hidden;
	position: absolute;
}

.chat .new-message {
	background-color: var(--backgroundColor);
	border-top: 0px;
	height: 80px;
	padding: calc(var(--line-height-03)/4);
	top: auto;
}

.review-panel-new .review-panel-header {
	background-color: var(--backgroundColor);
	border-bottom: 1px solid var(--toolbar-btn-hover-bg-color);
	display: flex;
	flex-direction: column;
	height: var(--review-panel-header-height);
	justify-content: center;
	position: sticky;
	text-align: center;
	top: 0;
	width: var(--review-panel-width);
	z-index: 4;
	border-top: 1px solid var(--toolbar-btn-hover-bg-color);
}
.review-panel-new .review-panel-inner {
	color: var(--accentColor);
	font-family: var(--bs-font-sans-serif);
	font-size: var(--font-size-01);
	line-height: 1.5;
}

.review-panel-new .track-changes-menu-button {
	align-items: center;
	background: none;
	border: none;
	display: flex;
	font-size: var(--font-size-02);
	gap: var(--spacing-02);
	padding: 0;
	color: var(--accentColor);
}

.review-panel-new .review-panel-resolved-comments-toggle {
	align-items: center;
	background-color: var(--toolbar-btn-hover-bg-color);
	border: solid 1px var(--accentColor);
	border-radius: var(--border-radius-base);
	color: var(--accentColor);
	display: flex;
	font-size: var(--font-size-02);
	height: 22px;
	justify-content: center;
	line-height: 1.4;
	padding: 0;
	width: 22px;
}

.badge.bg-warning {
	--bs-badge-color: var(--backgroundColor);
	background-color: var(--accentColor) !important;
}

.review-panel-new .review-panel-footer {
	background-color: var(--backgroundColor);
	border-top: 1px solid var(--toolbar-btn-hover-bg-color);
	bottom: 0;
	display: flex;
	height: 60px;
	position: fixed;
	width: var(--review-panel-width);
	z-index: 2;
}

.review-panel-new .review-panel-inner {
	background-color: var(--backgroundColor);
	border-left: 1px solid var(--toolbar-btn-hover-bg-color);
	box-sizing: content-box;
	color: var(--content-primary);
	flex-shrink: 0;
	font-family: var(--bs-font-sans-serif);
	font-size: var(--font-size-01);
	line-height: 1.5;
	min-height: var(--review-panel-height);
	width: var(--review-panel-width);
	z-index: 6;
}

.review-panel-new .review-panel-entry {
	background-color: var(--editorActiveLine);
	border: 1px solid var(--accentColorSecondary);
	border-radius: var(--border-radius-base);
	margin-left: var(--spacing-02);
	padding: var(--spacing-04);
	width: calc(100% - var(--spacing-04));
	z-index: 1;
}

.review-panel-new .review-panel-footer .review-panel-tab-active {
	border-top: solid 3px var(--accentColor) !important;
	color: var(--accentColor) !important;
}
.review-panel-new .review-panel-footer .review-panel-tab:focus, .review-panel-new .review-panel-footer .review-panel-tab:hover {
	color: var(--accentColor);
	text-decoration: none;
}

.review-panel-new .review-panel-entry.review-panel-entry-highlighted, .review-panel-new .review-panel-entry.review-panel-entry-selected {
	border: 1px solid var(--accentColor);
	box-shadow: 0 4px 12px 0 rgba(30,37,48,.12),0 2px 4px rgba(30,37,48,.08);
	margin-left: var(--spacing-01);
}

.review-panel-new .review-panel-entry {
	background-color: var(--editorActiveLine);
	border: 1px solid var(--neutral-20);
	border-radius: var(--border-radius-base);
	margin-left: var(--spacing-02);
	padding: var(--spacing-04);
	width: calc(100% - var(--spacing-04));
	z-index: 1;
}

.review-panel-new .review-panel-add-comment-cancel-button {
	background-color: transparent;
	color: var(--accentColor);
}

.review-panel-new .review-panel-add-comment-cancel-button:focus, .review-panel-new .review-panel-add-comment-cancel-button:hover {
	background-color: var(--accentColor);
	color: var(--backgroundColor);
}

.d-inline-grid.btn.btn-primary.btn-sm {
	background-color: var(--accentColor);
	color: var(--backgroundColor);
}

.d-inline-grid.btn.btn-primary.btn-sm:hover {
	background-color: rgb(127, 198, 103);
	color: var(--backgroundColor);
}

.review-panel-new .review-panel-entry-header .review-panel-entry-user {
	color: var(--accentColor);
	font-size: 110%;
}

.review-panel-new .review-panel-entry-header .review-panel-entry-time {
	color: rgba(112, 145, 101, 1);
}

.review-panel-new .review-panel-comment-body {
	color: var(--textColor);
	font-size: var(--font-size-02);
	overflow-wrap: anywhere;
	white-space: pre-wrap;
}


.review-panel-new .review-panel-comment-input {
	background-color: var(--backgroundColor);
	border: solid 1px rgb(77, 106, 67);
	border-radius: var(--border-radius-base);
	color: var(--textColor);
	font-size: var(--rp-base-font-size);
	height: 25px;
	max-height: 400px;
	min-height: 25px;
	overflow-x: hidden;
	padding: 2px var(--spacing-03);
	resize: none;
	width: 100%;
}

.review-panel-new .review-panel-heading .review-panel-label {
	flex: 1;
	font-size: var(--font-size-02);
	font-weight: 700;
	margin: 0;
	text-align: start;
	color: var(--accentColor);
}

.modal-content .modal-header .modal-title {
	font-size: var(--font-size-05);
	line-height: var(--line-height-04);
	line-height: 35px;
	color: var(--accentColor);
}

.modal-content {
	background-clip: padding-box;
	background-color: var(--backgroundColor);
	border: var(--bs-modal-border-width) solid var(--accentColor);
	border-radius: var(--bs-modal-border-radius);
	color: var(--accentColor);
	display: flex;
	flex-direction: column;
	outline: 0;
	pointer-events: auto;
	position: relative;
	width: 100%;
}

.modal-body-share .public-access-level.public-access-level-notice {
	background-color: var(--accentColor);
	border-bottom: none;
	margin-top: var(--spacing-07);
	padding-top: var(--spacing-07);
	color: var(--backgroundColor);
	margin-bottom: var(--spacing-07);
}

.modal-footer {
	align-items: center;
	background-color: var(--bs-modal-footer-bg);
	border-bottom-left-radius: var(--bs-modal-inner-border-radius);
	border-bottom-right-radius: var(--bs-modal-inner-border-radius);
	border-top: var(--bs-modal-footer-border-width) solid var(--accentColor);
	display: flex;
	flex-shrink: 0;
	flex-wrap: wrap;
	justify-content: flex-end;
	padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)*.5);
}

.d-inline-grid.btn.btn-secondary:hover {
	color: var(--backgroundColor);
	background-color: rgba(111, 143, 100, 1);
	border: none;
}

.d-inline-grid.btn.btn-secondary {
	color: var(--backgroundColor);
	background-color: var(--accentColor);
	border: none;
}

.modal-body-share .project-invite:hover, .modal-body-share .project-member:hover {
	background-color: var(--accentColor);
	color: var(--backgroundColor);
}

.modal-body-share .project-invite, .modal-body-share .public-access-level {
	border-bottom: 1px solid var(--accentColor);
	font-size: var(--font-size-02);
	padding: calc(var(--line-height-03)/2) 0;
	/* flex: 0 0 auto !important; */
	width: 100%;
	margin: 0 !important;
	justify-content: space-between;
	padding-right: 0;
	padding-left: 0;
	border-top: 1px solid var(--accentColor);
}


.modal-header {
	align-items: center;
	border-bottom: var(--bs-modal-header-border-width) solid var(--accentColor);
	border-top-left-radius: var(--bs-modal-inner-border-radius);
	border-top-right-radius: var(--bs-modal-inner-border-radius);
	display: flex;
	flex-shrink: 0;
	padding: var(--bs-modal-header-padding);
}

.project-list-upload-project-modal-uppy-dashboard .uppy-Root .uppy-Dashboard-AddFiles-title .review-panel-new .review-panel-entry-header .review-panel-entry-actions button.uppy-Dashboard-browse, .review-panel-new .review-panel-entry-header .review-panel-entry-actions .btn, .review-panel-new .review-panel-entry-header .review-panel-entry-actions .project-list-upload-project-modal-uppy-dashboard .uppy-Root .uppy-Dashboard-AddFiles-title button.uppy-Dashboard-browse {
	background-color: transparent;
	border-width: 0;
	height: 24px;
	padding: 0;
	width: 24px;
	color: var(--accentColor);
}

.project-list-upload-project-modal-uppy-dashboard .uppy-Root .uppy-Dashboard-AddFiles-title .review-panel-new .review-panel-entry-header .review-panel-entry-actions button.uppy-Dashboard-browse:focus, .project-list-upload-project-modal-uppy-dashboard .uppy-Root .uppy-Dashboard-AddFiles-title .review-panel-new .review-panel-entry-header .review-panel-entry-actions button.uppy-Dashboard-browse:hover, .review-panel-new .review-panel-entry-header .review-panel-entry-actions .btn:focus, .review-panel-new .review-panel-entry-header .review-panel-entry-actions .btn:hover, .review-panel-new .review-panel-entry-header .review-panel-entry-actions .project-list-upload-project-modal-uppy-dashboard .uppy-Root .uppy-Dashboard-AddFiles-title button.uppy-Dashboard-browse:focus, .review-panel-new .review-panel-entry-header .review-panel-entry-actions .project-list-upload-project-modal-uppy-dashboard .uppy-Root .uppy-Dashboard-AddFiles-title button.uppy-Dashboard-browse:hover {
	background-color: var(--accentColor);
	color: var(--backgroundColor);
}


.ol-cm-changed-line {
	background-color: rgba(0, 0, 0, 0.03);
	color: var(--textColor);
}

.cm-line {
	display: block;
	padding: 0 2px 0 6px;
	color: var(--editorTextColor);
}

.ol-cm-addition-marker {
	padding-top: var(--half-leading);
	padding-bottom: var(--half-leading);
	background-color: var(--accentColor) !important;
	color: var(--backgroundColor) !important;
}

.review-panel-add-comment-textarea {
	background-color: var(--backgroundColor);
	border: none;
	text-decoration: none;
	color: var(--textColor);
	resize: none !important;
    outline: none !important;
}


.selected > div > * {
	color: var(--backgroundColor) !important;
}

li.selected > div > div > .badge-tag {
	color: var(--accentColor);
	font-size: var(--font-size-02);
	line-height: var(--line-height-02);
	padding: 0;
	background-color: var(--backgroundColor) !important;
}

.badge-tag {
	color: var(--backgroundColor);
	font-size: var(--font-size-02);
	line-height: var(--line-height-02);
	padding: 0;
	background-color: var(--accentColor) !important;
}

.info-badge {
	color: var(--accentColor);
	background-color: var(--backgroundColor);
}

.history-all-versions-container {
	background-color: var(--backgroundColor);
}

.history-react .history-version-change-action, .history-react .history-version-day, .history-react .history-version-metadata-users, .history-react .history-version-origin, .history-react .history-version-saved-by {
	color: var(--accentColor);
	background-color: var(--backgroundColor);
}

.history-react .history-version-details.history-version-selected {
	background-color: var(--toolbar-btn-hover-bg-color);
	border-left: var(--spacing-02) solid var(--accentColor);
	padding-left: calc(var(--history-change-list-padding) - var(--spacing-02));
}

.history-version-main-details > * {
	color: grey !important;
}

.history-react .history-version-details.history-version-selectable:hover {
	background-color: var(--toolbar-btn-hover-bg-color);
	border-left: var(--spacing-02) solid var(--accentColor);
}

div.history-version-selected > div.history-version-main-details > ol > li > div, div.history-version-selected > div.history-version-main-details > .history-version-metadata-users {
	background-color: var(--toolbar-btn-hover-bg-color) !important;
}

div.history-version-selectable:hover > div.history-version-main-details > ol > li > div, div.history-version-selectable:hover > div.history-version-main-details > .history-version-metadata-users {
	background-color: var(--toolbar-btn-hover-bg-color);
}

.ide-react-editor-sidebar {
	background-color: var(--backgroundColor);
	color: var(--content-secondary-dark);
	height: 100%;
}


.history-react .history-version-change-doc {
	color: var(--accentColor);
	overflow-wrap: anywhere;
	white-space: pre-wrap;
	font-weight: bolder;
}

.history-react .history-version-change-action, .history-react .history-version-day, .history-react .history-version-metadata-users, .history-react .history-version-origin, .history-react .history-version-saved-by {
	color: var(--toolbar-btn-hover-bg-color)\);
	background-color: var(--backgroundColor);
}


.cm-activeLine {
	background: var(--editorActiveLine) !important;
}

.outline-container {
   background-color: var(--bg-color);
}

.outline-body {
   background-color: var(--bg-color);
}

.toolbar-header {
  background-color: var(--backgroundColor) !important;
}

.btn.btn-full-height.active:hover {
	background-color: var(--toolbar-btn-hover-bg-color) !important;
	color: var(--accentColor) !important;
}

.toolbar a.btn-full-height.active, .toolbar a.btn-full-height:active, .toolbar button.btn-full-height.active, .toolbar button.btn-full-height:active {
	background-color: var(--accentColor);
	box-shadow: none;
	color: var(--backgroundColor) !important;
}
.btn.btn-full-height {
	color: var(--accentColor) !important;
}

.cm-editor {
background-color: var(--bg-color);
}

.ͼm .cm-gutters {
 background-color: var(--bg-color)
}

.cm-gutterElement.cm-activeLineGutter {
 color: var(--accentColor);
 background-color: var(--editorActiveLine);
}

.ͼm .cm-activeLine {
 background-color: var(--editorActiveLine);
}

.switch-to-editor-btn, .switch-to-pdf-btn, .switch-to-editor-btn:hover, .switch-to-pdf-btn:hover {
 background-color: var(--accentColor);
}

.ol-cm-change.ol-cm-change-c {
  background-color: var(--lineChanged);
}


.dropdown-item.active {
 color: var(--accentColor);
background-color: var(--editorActiveLine);
}

.chat .new-message textarea {
background-color: var(--editorActiveLine);
color: var(--textColor);
}

.file-tree ul.file-tree-list li .entity > .entity-name > button.item-name-button {
 color:#d3d4d8;
}

.file-tree:not(.multi-selected) ul.file-tree-list li.selected > .entity > .entity-name > button > span {
color: var(--bg-color);
}

.dropdown-menu.show.dropdown-menu-end > li > button > div > span {
 color: var(--textColor);
}

.dropdown-header {
  color: var(--textColor);
}

.dropdown-menu.show.dropdown-menu-end {
transform: translate(180px, 34px) !important;
}

.rp-entry-comment {
	border-color: var(--accentColor);
}

.review-panel .rp-entry-list-react {
	background-color: var(--bg-color);
}


.rp-state-current-file-expanded .rp-entry {
	background-color: #22293e;
}

.rp-comment-input {
	background-color: var(--editorActiveLine);
	border: solid 1px #888;
	color: var(--textColor);
}

.rp-nav-item-active {
	border-top: 3px solid #a2d591;
	color: #a2d591;
}

.rp-nav {
	background-color: var(--editorActiveLine);
}

.custom-toggler:hover {
	background-color: var(--accentColor);
}

.rp-comment-content {
	color: var(--textColor);
}

.rp-entry-metadata {
	color: #8d939d;
}

.rp-comment-actions > button {
	color: var(--accentColor) !important;
}

.rp-state-current-file-expanded .rp-entry {
	background-color: var(--bg-color);
}

.rp-entry-user {
	color: var(--accentColor) !important;
}

.review-panel-toolbar {
	background-color: var(--editorActiveLine);
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
	border-left: solid 0 var(--editorActiveLine);
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
	background-color: var(--accentColor);
	border: solid 1px var(--rp-border-grey);
	border-radius: var(--border-radius-base);
	color: var(--editorActiveLine);
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
	background-color: var(--editorActiveLine);
}

.toggle-switch-input:checked + .toggle-switch-label {
	background-color: var(--accentColor);
	color: var(--editorActiveLine);
}

.toolbar-pdf-left .compile-button-group {
	background-color: var(--accentColor);
	border-bottom-left-radius: 0;
	border-top-left-radius: 0;
	height: 28px;
}

.project-list-upload-project-modal-uppy-dashboard .uppy-Root .uppy-Dashboard-AddFiles-title .toolbar-pdf-left .dropdown > button[disabled].uppy-Dashboard-browse, .toolbar-pdf-left .dropdown > .btn[disabled], .toolbar-pdf-left .dropdown > .btn[disabled]:active, .toolbar-pdf-left .project-list-upload-project-modal-uppy-dashboard .uppy-Root .uppy-Dashboard-AddFiles-title .dropdown > button[disabled].uppy-Dashboard-browse {
	background-color: var(--accentColor);
	color: var(--bs-btn-color);
	opacity: 1;
}
.tok-comment {
	color: var(--accentColor) !important;
}

.pdfjs-page-number-input input {
	color: var(--textColor);
	background-color: var(--editorActiveLine) !important;
}

.cm-gutters {
	background-color: var(--bg-color) !important;
}

.ide-react-editor-panel {
	background-color: var(--bg-color) !important;
}

.loading-panel {
	background-color: #22293e;
}

.loading {
	color: var(--textColor);
}

.loading-screen {
 background-color :#22293e;
}

.loading-screen .loading-screen-label {
	color: var(--textColor);
}

body {
	background-color: #000;
	color: var(--bs-body-color);
}

.rp-state-current-file-expanded .rp-entry {
	border-top: 1px solid var(--accentColor) !important;
	border-bottom: 1px solid var(--accentColor) !important;
	border-right: 1px solid var(--accentColor) !important;
}

.rp-add-comment-btn:focus, .rp-add-comment-btn:hover, .rp-bulk-actions-btn:focus, .rp-bulk-actions-btn:hover, .rp-entry-button:focus, .rp-entry-button {
	background-color: var(--editorActiveLine);
	color: var(--accentColor);
}


.rp-add-comment-btn:focus, .rp-add-comment-btn:hover, .rp-bulk-actions-btn:focus, .rp-bulk-actions-btn:hover, .rp-entry-button:focus, .rp-entry-button:hover {
	background-color: var(--accentColor);
	color: var(--bg-color);
}

[disabled].rp-add-comment-btn, [disabled].rp-add-comment-btn:focus, [disabled].rp-add-comment-btn:hover, [disabled].rp-bulk-actions-btn, [disabled].rp-bulk-actions-btn:focus, [disabled].rp-bulk-actions-btn:hover, [disabled].rp-entry-button, [disabled].rp-entry-button:focus, [disabled].rp-entry-button:hover {
	background-color: var(--bg-color);
	color: #d3d4d8;
}

.rp-state-current-file .rp-entry-callout-comment, .rp-state-current-file .rp-entry-callout-comment::after {
	border-color: var(--accentColor);
}

.d-inline-grid.btn.btn-secondary.btn-sm {
	background-color: var(--accentColor);
}

.compile-button-group.dropdown.btn-group > button {
  	background-color: var(--accentColor);
}

.spinner-container  >span {
    color: #22293e;
}

#layout-dropdown-btn:hover {
	background-color: var(--accentColor);
}
.cm-vim-panel.cm-panel {
	background-color: var(--bg-color);
}
#layout-dropdown-btn {
	background-color: var(--backgroundColor);
}
.cm-vim-panel.cm-panel input {
	color: var(--textColor);
}



#layout-dropdown-btn:hover {
  	color: var(--accentColor) !important;
    background-color: var(--backgroundColor) !important;
	fill: var(--accentColorActive);
	stroke: var(--accentColorActive);
}

#layout-dropdown-btn {
	background-color: var(--accentColor);
	color: var(--backgroundColor) !important;
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
	background-color: var(--editorActiveLine) !important;
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
	background-color: var(--editorActiveLine) !important;
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
	background-color: var(--bg-color);
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
    filter: brightness(0) invert(1);


}

.loading-screen {
	background-color: var(--bg-color);
}

.loading-screen .loading-screen-brand {
	background: url(/images/overleaf-o-grey-f7605837650fa8d6aab8.svg) no-repeat bottom/100%;
	height: 0;
	padding-top: 115.3846153846%;
	position: relative;
	fill: var(--editorActiveLine) !important;
	color: var(--editorActiveLine) !important;
}

.review-panel-entry.review-panel-entry-comment.review-panel-entry-loaded {
	border: 1px solid var(--lineChanged);
}
.review-panel-new .review-panel-entry.review-panel-entry-highlighted, .review-panel-new .review-panel-entry.review-panel-entry-selected {
	border: 1px solid var(--accentColor);
	box-shadow: 0 4px 12px 0 rgba(30,37,48,.12),0 2px 4px rgba(30,37,48,.08);
	margin-left: var(--spacing-01);
}


` );
