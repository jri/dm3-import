function dm3_import() {

    this.init = function() {
        $("#special_select").append($("<option>").text("Import..."))
    }

    this.handle_special_command = function(command) {
        if (command == "Import...") {
            do_import()
        }
    }



    /************************************************************************************************/
    /**************************************** Custom Methods ****************************************/
    /************************************************************************************************/



    function do_import() {
        var doc = current_doc
        if (doc._attachments) {
            for (var attach in doc._attachments) {
                try {
                    var docs = JSON.parse(db.openAttachment(doc._id, attach))
                    log("Importing " + attach + " (" + docs.length + " documents)")
                    if (docs) {
                        import_documents(docs)
                    } else {
                        alert("Error while importing:\n" + attach + " can't be read")
                    }
                } catch (e) {
                    alert("Error while importing " + attach + ".\nProbably invalid JSON.\n" + JSON.stringify(e))
                }
            }
        }
    }

    function import_documents(documents) {
        for (var i = 0; i < documents.length; i++) {
            var doc = documents[i]
            if (doc && doc.type == "Topic") {
                log("..... " + (i + 1) + ". " + doc.topic_type + " \"" + topic_label(doc) + "\"")
                save_document(doc)
            } else if (doc && doc.type == "Relation") {
                log("..... " + (i + 1) + ". " + doc.rel_type)
                save_document(doc)
            } else {
                log("..... " + (i + 1) + ". ### WARNING: skipping invalid document")
            }
        }
        log("Import complete")
    }
}
