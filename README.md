
DeepaMehta 3 Import Plugin
==========================

Creates topics and relations from a JSON formatted input file.


Requirements
------------

* A DeepaMehta 3 installation  
  <http://github.com/jri/deepamehta3>


Installation
------------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3

2.  Download DeepaMehta 3 Import Plugin:
        couchapp vendor install git://github.com/jri/dm3-import.git

3.  Activate the plugin by adding one line to DeepaMehta's `_attachments/javascript/plugins.js`:
        add_plugin("vendor/dm3-import/script/dm3_import.js")

4.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db


Usage
-----

1.  Visit DeepaMehta 3 in your webbrowser (resp. press reload):
        http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html

2.  Create a topic (of any type) and attach the JSON formatted text files you want to import to it.

3.  Choose "Import..." from the special menu (right hand side of the upper toolbar).  
    The import process starts immediately and requires no further interaction.

4.  Reveal the imported topics, e.g. by a "Time" search.


Version History
---------------

`v0.2` -- Dec  1, 2009 -- Basic functionality. Requires DeepaMehta 3 v0.2


------------
Jörg Richter  
Dec 1, 2009
