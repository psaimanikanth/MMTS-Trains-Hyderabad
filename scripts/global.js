var MMTSServiceURL = "/MMTSTimingService.svc";     //MMTSServiceURL

//loading image for all mobile folder pages
var loading = function() {
    // add the overlay with loading image to the page
    var over = '<div id="overlay">' +
            '<img id="loading" src="/m/images/loading4.gif">' +
            '</div>';
    $(over).appendTo('body');
};

//validations in FindTrains.htm page
function validateFromToStations() {
    var isMistake = true;
    if ($("#ddlfromstation").val() == -1) {
        isMistake = false;
        alert("Please select From station");        
        return false;
    }
    if ($("#ddltostation").val() == -1) {
        isMistake = false;
        alert("Please select To station");        
        return false;
    }
    if ($("#ddlfromstation").val() == $("#ddltostation").val()) {
        isMistake = false;
        alert("From and To stations should not be same.");
        return false;
    }
    var starttimes = $("#ddlstarttime option:selected").text();
    var stoptimes = $("#ddlstoptime option:selected").text();
    var firsttime = starttimes.split(":");
    var secondtime = stoptimes.split(":");
    if (firsttime[0] > secondtime[0]) {
        isMistake = false;
        alert("select Time from lower to higher value.");
        return false;
    }
    return isMistake;
}
