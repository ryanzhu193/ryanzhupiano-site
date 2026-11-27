# Website for Ryan Zhu, classical pianist

This repository is the professional website for Ryan Zhu (ryanzhupiano.com), published with GitHub Pages. The site is a few plain files in the top folder: one HTML file per page (`index.html`, `recordings.html`, `about.html`, `performances.html`, `repertoire.html`, `media-kit.html`, `contact.html`), shared `style.css` and `site.js`, and the media kit PDFs. Never delete the `CNAME` file; it connects the domain.

## About Ryan (read this first)
Ryan is a classical pianist, not a coder. Assume no technical background.
- Explain what you are doing in plain language, and define any technical term the first time you use it.
- When something needs action from Ryan (merging changes, DNS, form setup), give detailed, numbered, tap-by-tap steps. Say what he should see on screen when it works, and what to do if it looks different.
- Do not ask Ryan to write code or type commands. Do the technical work yourself.
- Ryan is usually on his phone. Lead with the answer and keep routine replies short.

## Site purpose
1. Concert and booking inquiries
2. Recordings and videos
3. Media kit and concert-organizing materials for presenters

## Design direction
Warm, editorial, sophisticated: cream and tan palette, large light serif headings, small quiet body text, dark pill buttons, a full-screen home page photo (`hero-piano.jpg`, credited "photo: Matthew Andrews") with the name over its faded lower edge, and a clean inquiry form. It must read well on a phone. Keep the existing look when making changes.

## Rules
- Each menu item is its own page. The menu is a three-line button (labeled "Menu" for screen readers) that opens a full-screen panel: a dark warm gradient circle grows out from the button (animated with transform only, for smoothness), and small all-capital items sit at the top right under the button, with a light caramel colour that wipes across the word from right to left on hover. It lists, in this order, Home, About, Performances, Repertoire, Recordings, Media Kit (capital K), and Contact. When adding a page, add it to the menu on every page. Keep all files in the top folder (no subfolders) so Ryan can upload from his phone.
- Never invent biography, repertoire, awards, dates, or quotes. Use [bracketed placeholders] until Ryan supplies real content.
- The booking form uses a Formspree-style endpoint, because GitHub Pages cannot process forms. Do not replace it with a form that needs a server.
- Every page loads `style.css?v=...` and `site.js?v=...`. Whenever you change `style.css` or `site.js`, update that version label on every page (use the date plus a letter, e.g. `20261127b`) so browsers fetch the new file right away.
- Proofread all copy. Keep the site accessible (readable contrast, labeled form fields, visible keyboard focus) and responsive.

## How updates go live
1. Make changes on a new branch. Never push straight to the main branch.
2. Tell Ryan in one or two sentences what changed, and show him what the page looks like (a screenshot if possible).
3. Open a pull request (a proposed change Ryan can review) and give him the link.
4. Ryan either merges it himself, or asks Claude to merge it (for example, "merge it" or "merge for me"). That request is standing permission: Claude merges the pull request itself, then confirms it is merged. Only merge when Ryan asks, never on Claude's own initiative. GitHub Pages then republishes the site, usually within a couple of minutes.
