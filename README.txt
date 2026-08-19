EPORTFOLIO — SETUP & HOSTING GUIDE
====================================

WHAT'S IN THIS FOLDER
----------------------
index.html      Home page
about.html      About page
skills.html     Skills page (datasheet-style table)
projects.html   Projects / artefacts page
contact.html    Contact page
style.css       All styling (shared by every page)
script.js       Mobile menu toggle
assets/         Put your photos, CV PDF, and project images here

BEFORE YOU SUBMIT — REPLACE THE PLACEHOLDERS
----------------------------------------------
Search each HTML file for:
  [Your Name]        -> your actual name (appears in <title> tags and headings)
  YOUR.NAME           -> your name/initials in the nav logo
  you@example.com     -> your real email
  yourprofile / yourusername -> your real LinkedIn/GitHub handles
  "Add project photo" -> replace <div class="media-placeholder"> blocks with
                          real <img src="assets/yourphoto.jpg" alt="..."> tags
  U1 / U2 / U3 project text -> your real project titles, descriptions, links

To add a real image, replace a placeholder block like this:
  <div class="media-placeholder">...</div>
with:
  <img src="assets/your-image.jpg" alt="Describe the image">

Also proofread everything — the writing mechanics mark matters.


HOW TO GET A WORKING LINK (choose ONE option)
------------------------------------------------

OPTION A — GitHub Pages (free, most reliable, recommended)
1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository, e.g. named "eportfolio" (make it Public).
3. Upload all the files in this folder to that repository
   (drag-and-drop works on github.com — click "Add file" > "Upload files").
4. Go to the repo's Settings > Pages.
5. Under "Branch", select "main" and folder "/ (root)", then Save.
6. Wait 1-2 minutes. Your live link will appear at the top of that page,
   in the form: https://yourusername.github.io/eportfolio/
7. Submit that link.

OPTION B — Netlify Drop (free, fastest, no account needed for a quick test)
1. Go to https://app.netlify.com/drop
2. Drag this entire folder into the browser window.
3. Netlify gives you an instant live link (e.g. https://random-name.netlify.app).
4. (Optional) Create a free account to keep the site live permanently and
   rename the URL.

OPTION C — Any web host you already have
Just upload all files (keeping the same folder structure, especially the
assets/ folder) to your hosting provider's root/public directory, and
index.html will load automatically at your domain.


TESTING LOCALLY BEFORE YOU UPLOAD
------------------------------------
Just double-click index.html to open it in your browser. Click through all
nav links to make sure everything works before you upload anywhere.


CHECKLIST AGAINST THE MARKING CRITERIA
------------------------------------------
[ ] Creativity/design   - palette & type feel intentional, not a stock template
[ ] Content             - all placeholder text replaced with your real story
[ ] Images/graphics     - real photos/diagrams added to media-placeholder spots
[ ] Layout              - check on both desktop and phone widths
[ ] Navigation          - click every link on every page, confirm none are broken
[ ] Artefacts           - real project reports/links/repos added to Projects page
[ ] Writing mechanics   - proofread every page start to finish
