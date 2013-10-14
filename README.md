# MODE Evaluation | Mattr Test
Demo available at http://demo.tannerhodges.com/mattr-test/

Notes: 
- Database information is in the includes/ directory.
- DB info ought to be stored in db-config.php. A sample file has been provided in db-config-sample.php.
- db-init.zip contains a SQL dump of the initial database setup. 

Goal
----
Build a fully responsive page from a PSD design in the most accurate way possible. 

Key Components
---------------------
- Responsive development
- Basic JS methods
- Basic PHP/MySQL execution
- Browser testing techniques

Implemented Features
---------------------
- Signup form with basic validation that stores email addresses in a MySQL database using AJAX and prints back confirmation to the user
- Sticky nav that slides in and out as the user scrolls
- Tyepkit Fonts
- Basic image rollovers
- Lightbox

Future Improvements
-------------------
- Column widths are defined by nth-child(). In order for this to work properly in IE versions 8 and below, separate CSS classes ought to be defined and added via jQuery's nth-child function. 
- The hero section's background needs to be updated for cross-browser compatability. IE 8, for example, does not display the background correctly. 
- Image replacement ought to be utilized, especially for logo images. E.g, the page's h1 ought to only include "Mattr", which would then be replaced with the appropriate logo image.
- Sprites ought to be utilized, especially for the app feature images. This would also make image rollovers much easier by toggling hover classes rather than updating the img src attribute.