function changeOwner()
{
    var DialogOption = new Xrm.DialogOptions;
    DialogOption.width = 600; DialogOption.height = 550;
    Xrm.Internal.openDialog("/WebResources/xrm_dialog.htm", DialogOption, null, null, changeOwnerCallback);
}

function changeOwnerCallback(returnValue) {
    if (returnValue != null) {
		
		// If need to return multiple values;
	    var returnValues = returnValue.split(':');
        var ownerId = returnValues[0];
        var ownerName = returnValues[1];
		// Perform Actions on return values
		setLookup("ownerid", ownerId, ownerName, "systemuser");
    }
}

function setLookup(fieldName, lookupId, lookupName, entityName) 
	{
		var lookupData = new Array();
		var lookupItem = new Object();
		lookupItem.id = lookupId;
		lookupItem.name = lookupName;
		lookupItem.entityType = entityName;
		lookupData[0] = lookupItem;
		Xrm.Page.getAttribute(fieldName).setValue(lookupData);
}
