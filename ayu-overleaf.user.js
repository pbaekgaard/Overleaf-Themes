// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-05-07
// @description  try to take over the world!
// @author       You
// @match        *.moodle.aau.dk/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aau.dk
// @grant    GM_addStyle
// ==/UserScript==


GM_addStyle ( `
:root {
--bg-color: #0f1419;
--accent-color: #ff8f40;
}

:focus-visible {
	outline: none !important;
}
.fc-button-primary:not(:disabled):active:focus, .fc-button-primary:not(:disabled).fc-button-active:focus {
	-webkit-box-shadow: none;
	box-shadow: none;
	background-color: var(--accent-color) !important;
	color: var(--bg-color) !important;
}
.fc-button-primary:not(:disabled):active, .fc-button-primary:not(:disabled).fc-button-active {
	color: var(--bg-color) !important;
	background: var(--accent-color) !important;
	border: none !important;
}
.fc-button-primary:disabled {
	color: var(--bg-color) !important;
	background-color: var(--accent-color) !important;
	border-color: #2C3E50;
}
body.theme-dark {
	color: #c7c7c7;
	background-color: var(--bg-color);
}
.theme-dark .card {
	background-color: var(--bg-color);
	border: 1px solid #2E3134;
}
.theme-dark .search-input-group .search-input {
	background-color: var(--bg-color);
	color: #aeb3b8;
}
.theme-dark .btn-secondary, .theme-dark .collapseexpand, .theme-dark .actions p a, .actions p .theme-dark a, .theme-dark .backlink a, .backlink .theme-dark a, .theme-dark #page-admin-grade-edit-letter-index .main-content .mdl-align a, #page-admin-grade-edit-letter-index .main-content .mdl-align .theme-dark a, .theme-dark .moreless-toggler, .theme-dark .search-results .result-context-info a, .search-results .result-context-info .theme-dark a, .theme-dark .tool_dataprivacy-expand-all, .theme-dark .edit-link a, .edit-link .theme-dark a, .theme-dark #core-cache-rescan-definitions a, #core-cache-rescan-definitions .theme-dark a, .theme-dark .continuebutton a, .continuebutton .theme-dark a, .theme-dark .tour-actions > ul > li > a, .theme-dark .gradereport_history_usp .usp-search input[type="submit"], .gradereport_history_usp .usp-search .theme-dark input[type="submit"], .theme-dark .comment-area .fd a[id*="post"], .comment-area .fd .theme-dark a[id*="post"], .theme-dark .allcoursegrades a, .allcoursegrades .theme-dark a, .theme-dark .addlinks a, .addlinks .theme-dark a, .theme-dark #page-grade-grading-manage .actions .action, #page-grade-grading-manage .actions .theme-dark .action, .theme-dark .gradingform_rubric.editor .addlevel input, .gradingform_rubric.editor .addlevel .theme-dark input, .theme-dark .path-tag .tagarea .controls .exclusivemode, .path-tag .tagarea .controls .theme-dark .exclusivemode, .theme-dark .notesgroup p a, .notesgroup p .theme-dark a, .theme-dark #page-report-progress-index .progress-actions a, #page-report-progress-index .progress-actions .theme-dark a, .theme-dark .path-mod-glossary .printicon, .path-mod-glossary .theme-dark .printicon, .theme-dark .rui-form-element-group a, .rui-form-element-group .theme-dark a, .theme-dark .mod_quiz-prev-nav, .theme-dark .categorypagingbarcontainer .paging a, .categorypagingbarcontainer .paging .theme-dark a, .theme-dark .page_split_join, .theme-dark .path-mod-wiki .printicon, .path-mod-wiki .theme-dark .printicon, .theme-dark .path-auth-oauth2 .main-content h2 + a, .path-auth-oauth2 .main-content .theme-dark h2 + a, .theme-dark #page-mod-forum-index .subscription .helplink:nth-of-type(2) a, #page-mod-forum-index .subscription .helplink:nth-of-type(2) .theme-dark a, .theme-dark .rui-contentbank-view-btns .btn, .rui-contentbank-view-btns .theme-dark .btn, .theme-dark .chart-table-expand a, .chart-table-expand .theme-dark a, .theme-dark .export-actions a, .export-actions .theme-dark a, .theme-dark .modal-footer a:not(.btn-primary), .modal-footer .theme-dark a:not(.btn-primary), .theme-dark .commentlink a, .commentlink .theme-dark a, .theme-dark .itemnav a, .itemnav .theme-dark a, .theme-dark .que .comment a, .que .comment .theme-dark a, .theme-dark .btn-inverse, .theme-dark .pick.template, .theme-dark .action.remove, .theme-dark .helpdoclink a, .helpdoclink .theme-dark a, .theme-dark .path-mod-attendance .attbtn a, .path-mod-attendance .attbtn .theme-dark a, .theme-dark #feedback_dragarea .dropdown-btn, #feedback_dragarea .theme-dark .dropdown-btn, .theme-dark .section-collapsemenu, .theme-dark .pagenumber .dropdown-btn, .pagenumber .theme-dark .dropdown-btn, .theme-dark .path-mod-booking #gotop, .path-mod-booking .theme-dark #gotop, .theme-dark .path-mod-booking #goenrol, .path-mod-booking .theme-dark #goenrol, .theme-dark .path-mod-booking #searchButton, .path-mod-booking .theme-dark #searchButton, .theme-dark .path-mod-booking #buttonclear, .path-mod-booking .theme-dark #buttonclear, .theme-dark .ajax-contact-button, .theme-dark #message-user-button, .theme-dark [data-action="showcount"], .theme-dark .realtimequiz_editicons a, .realtimequiz_editicons .theme-dark a, .theme-dark .printdiscussion input, .printdiscussion .theme-dark input, .theme-dark #page .hsuforum-tools a, #page .hsuforum-tools .theme-dark a, .theme-dark .oublog-post-links a, .oublog-post-links .theme-dark a, .theme-dark .ouwiki_nav_index a, .ouwiki_nav_index .theme-dark a, .theme-dark .ouw_byheading a, .ouw_byheading .theme-dark a, .theme-dark #ouwiki_indexlinks a, #ouwiki_indexlinks .theme-dark a, .theme-dark .addcomponent {
	background-color: var(--bg-color);
	color: #E8EAED;
}
.theme-dark .rui-topbar-btn {
	background-color: var(--bg-color);
	color: #aeb3b8;
}
.theme-dark .drawer-right-toggle .btn {
	background-color: #121215;
	background: var(--bg-color);
	color: #8b8a8a;
}
.theme-dark .rui-sidebar-abtn .rui-drawer-badge {
	background-color: var(--accent-color);
	color: var(--bg-color);
}
.theme-dark .rui-course-card {
	background-color: var(--bg-color);
	border-color: var(--bg-color);
}
.custom-switch.custom-control--xs .custom-control-input:checked ~ .custom-control-label::before {
	border-color: var(--accent-color);
}
.custom-switch .custom-control-input:checked ~ .custom-control-label::before {
	background-color: var(--accent-color);
}
.theme-dark .mycourses-filter .custom-switch.custom-control--xs .custom-control-label::after {
	background-color: var(--bg-color);
}
.theme-dark .rui-sidebar-nav-item-link.active .rui-sidebar-nav-icon, .theme-dark .rui-sidebar-nav-item-link:hover .rui-sidebar-nav-icon {
	color: var(--bg-color) !important;
}
.rui-course-card-img-top {
	background-image: url('https://www.moodle.aau.dk/pluginfile.php/1/theme_space/defaultcourseimg/1746455501/AAU_image_is_coming_bg.png');
	/* filter: brightness 100%; */
	background-color: color-mix(in srgb, var(--bg-color) 80%, #FFF 50%);
	background-blend-mode: multiply;
}
.theme-dark .rui-course-cat-badge {
	background-color: var(--bg-color);
	color: #aeb3b8;
}
.theme-dark .editmode-switch-form {
	background-color: var(--bg-color);
}
.theme-dark .custom-control--xs .custom-control-label {
	color: var(--accent-color);
}
.theme-dark .custom-control-label::before {
	border-color: var(--accent-color);
}
.custom-switch .custom-control-label::after {
	top: calc(0.125rem + 2px);
	left: calc(-2.6875rem + 4px);
	width: calc(1.25rem - 8px);
	height: calc(1.25rem - 8px);
	background-color: var(--accent-color);
	border-radius: 58px;
	transition: transform 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
}

.theme-dark #nav-drawer {
	background-color: var(--bg-color) !important;
}

.theme-dark .rui-topbar-wrapper {
	background-color: var(--bg-color) !important;
	color: #E8EAED;
	border-color: #2E3134;
}
.theme-dark .rui-flatnavigation-box {
	background-color: var(--bg-color);
}

.theme-dark .rui-sidebar-mycourses {
	background-color: var(--bg-color);
}
.theme-dark #nav-drawer .search-input-group .search-input {
	background-color: var(--bg-color);
	color: #ababab;
}

.theme-dark .rui-sidebar-nav-item-link.active, .theme-dark .rui-sidebar-nav-item-link:hover {
	background-color: var(--accent-color);
	color: var(--bg-color);
}
.theme-dark .nav-drawer-btn[aria-expanded="true"] .nav-drawer-btn--opened, .theme-dark .nav-drawer-btn[aria-expanded="true"] div:hover {
	color: var(--bg-color);
	background-color: var(--accent-color);
}

.content-item-container.unread {
	background-color: var(--accent-color);
	color: var(--bg-color);
}
.theme-dark .content-item-container .context-link {
	color: var(--bg-color);
}
.content-item-container.notification .content-item-body .notification-image {
	display: inline-flex;
	width: 30px;
	height: 30px;
	background-color: var(--accent-color);
	border-radius: 5px;
}
.rui-unreadcount:not(.hidden) {
	position: absolute;
	padding: 4px;
	top: 0;
	right: 0;
	min-width: 16px;
	height: 16px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: var(--accent-color);
	color: var(--bg-color);
	border-radius: 16px;
	font-size: 10px;
	font-weight: 500;
}
.fc-unthemed td.fc-today {
	background: color-mix(in srgb, var(--bg-color) 100%, var(--accent-color) 15%) !important;
}
.fc-now-indicator {
	position: absolute;
	border: 0 solid var(--accent-color) !important;
}
.fc-button-group > .fc-button:not(:last-child) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	background: color-mix(in srgb, var(--bg-color) 100%, var(--accent-color) 15%);
	border: none !important;
}
.fc-button-group > .fc-button:not(:first-child) {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	background: color-mix(in srgb, var(--bg-color) 100%, var(--accent-color) 15%);
	border: none !important;
}
.fc-button-primary:disabled {
	color: #fff;
	background-color: #2C3E50;
	border-color: #2C3E50;
	background: color-mix(in srgb, var(--bg-color) 100%, var(--accent-color) 15%);
	border: none !important;
}
` );