//When does this run?
//Supplied by Russell?

// function showHide() {

//     var vent_marketinglistdivision =Xrm.Page.getAttribute("vent_marketinglistdivision").getValue();
    
//     if (vent_marketinglistdivision == 693450003) {
//     Xrm.Page.ui.tabs.get("tabAssociate").sections.get("VPIT").setVisible(true);
//     Xrm.Page.ui.tabs.get("tabAssociate").sections.get("VTST").setVisible(false);
//     }
    
//     else if (vent_marketinglistdivision == 693450005) {
//     Xrm.Page.ui.tabs.get("tabAssociate").sections.get("VTST").setVisible(true);
//     Xrm.Page.ui.tabs.get("tabAssociate").sections.get("VPIT").setVisible(false);
//     }
    
//     }

    // supplied by 
    // https://www.tutorialfunda.com/dynamics-365/hide-show-tab-dynamics-365-crm-javascript/


// function TickerChange() {
//     if(Xrm.Page.getAttribute("tickersymbol").getValue() == null) {
//         Xrm.Page.ui.tabs.get("urstab").setVisible(false);
//     }
//     else {
//         Xrm.Page.ui.tabs.get("urstab").setVisible(true);
//     }
// }

//psuedocode
// onchange
// if tabName == dropDownValue {
//     tab.tabName.setVisible(true);
// } else {
//     tab.tabName.setVisible(false);
// }

// test script
function TickerChange() {
    if(Xrm.Page.getAttribute("tickersymbol").getValue() == null || Xrm.Page.getAttribute("tickersymbol").getValue() != urstab) {
        Xrm.Page.ui.tabs.get("urstab").setVisible(false);
    }
    else {
        Xrm.Page.ui.tabs.get("urstab").setVisible(true);
    }
}

