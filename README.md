
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

5.  Check if installation was successful: visit DeepaMehta 3 in your webbrowser (resp. press reload):  
    <http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html>  
    If you see the *Import...* command in the *Special* menu (upper right corner) everything is OK.


Usage
-----

1.  Create a topic (of any type) and attach the JSON formatted text files you want to import to it.

2.  Choose *Import...* from the special menu (upper right corner).  
    The import process starts immediately and requires no further interaction.

3.  Reveal the imported topics, e.g. by a "Time" search.


Updating
--------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3

2.  Update DeepaMehta 3 Import Plugin:
        couchapp vendor update dm3-import

3.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db


Version History
---------------

**v0.3** -- Mar 6, 2010

* Compatible with DeepaMehta 3 v0.3

**v0.2** -- Dec 1, 2009

* Basic functionality
* Requires DeepaMehta 3 v0.2


------------
Jörg Richter  
Mar 6, 2009
