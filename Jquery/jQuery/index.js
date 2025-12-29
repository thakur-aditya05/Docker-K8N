$(document).ready(function () {
  // 1. Datepicker
  $("#date").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    changeMonth: true,
    changeYear: true,
    minDate: new Date(2016, 1, 5),
    maxDate: new Date(2023, 1, 6),
    numberOfMonths: 2
  });

  // 2. Tooltip
  $("#tool").tooltip({
    track: true,
    content: "This is the place for Name",
    show: { effect: "pulsate", duration: 2000 },
    hide: { effect: "explode", duration: 2000 }
  });

  // 3. Accordion
  $("#div1").accordion({
    collapsible: true,
    icons: {
      header: "ui-icon-caret-1-s",
      activeHeader: "ui-icon-caret-1-n"
    },
    animate: 2000,
    event: "mouseover"
  });

  // 4. Dialog
  $("#btn1").click(function () {
    $("#dialog").dialog("open");
  });

  $("#dialog").dialog({
    title: "Title using property",
    draggable: false,
    resizable: false,
    closeOnEscape: false,
    modal: true,
    autoOpen: false
  });
});