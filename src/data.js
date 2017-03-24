
/**********************************************************************************************************************************
/**
/** Data
/**
/*********************************************************************************************************************************/

var Shows = {
  "BBD": { title: ["BLUE BLOODS"],                         color: [] },
  "BRN": { title: ["BURN NOTICE"],                         color: [] },
  "CRM": { title: ["CRIMINAL MINDS"],                      color: [] },
  "CSB": { title: ["CRIMINAL MINDS", "SUSPECT BEHAVIOR"],  color: [] },
  "GHW": { title: ["GHOST WHISPERER"],                     color: [] },
  "LWO": { title: ["LAW & ORDER"],                         color: [] },
  "LAO": { title: ["LAW & ORDER", "CRIMINAL INTENT"],      color: [] },
  "SVU": { title: ["LAW & ORDER", "SPECIAL VICTIMS UNIT"], color: [] },
  "LEV": { title: ["LEVERAGE"],                            color: [] },
  "LST": { title: ["THE LISTENER"],                        color: [] },
  "PSY": { title: ["PSYCH"],                               color: [] },
  "RBL": { title: ["ROOKIE BLUE"],                         color: [] },
  "SVH": { title: ["SAVING HOPE"],                         color: [] },
  "WHC": { title: ["WHITE COLLAR"],                        color: [] },

  
  set_colors: function() {
    for (var key in this) {
      if (typeof this[key] != "function") {
	this[key].color[0] = ProjComps.color_ctrl.layer(key).property("Effects").property("Light").property("Color").value;
	this[key].color[1] = ProjComps.color_ctrl.layer(key).property("Effects").property("Mid").property("Color").value;
	this[key].color[2] = ProjComps.color_ctrl.layer(key).property("Effects").property("Dark").property("Color").value;
      }
    }
  },


  get_colors: function(show) {
    // Returns an arrary of the color set for the given show
    return this[show].color;
  },


  get_multiline_title: function(show) {
    var working_title = this[show].title[0].split(" ");
    if (working_title.length == 1) {
      return working_title[0].toString();
    } else if (working_title.length == 2) {
      return working_title[0].toString() + "\n" + working_title[1].toString();
    } else if (working_title.length == 3) {
      return working_title[0].toString() + " " + working_title[1].toString() + "\n" + working_title[2];
    } else return "Error: problem with title.";
  },


  get_oneline_title: function(show) {
    var working_title = this[show].title;
    if (working_title.length == 1) {
      return working_title[0].toString();
    } else {
      working_title = working_title[0].toString() + ": " + working_title[1];
      return working_title;
    }
  },


  get_subtitle: function(show) {
    var subtitle = this[show].title;
    if (subtitle.length > 1) {
      return subtitle[1].toString();
    } else return "";
  }
};



Shows.set_colors();

/*
//////////  Tests
 */

// alert(Shows["SVU"].title);
// alert("Test color data:\n" + Shows.get_colors("BBD"));
// alert("Test multiline title:\n" + Shows.get_multiline_title("SVH"));
// alert("Test multiline title:\n" + Shows.get_multiline_title("SVU"));
// alert("Test one line title:\n" + Shows.get_oneline_title("CRM"));
// alert("Test subtitle:\n" + Shows.get_subtitle("LAO"));

//////////  End Tests


var days = [
  ["Next",          "NEX"],
  ["Monday",        "MON"],
  ["Tuesday",       "TUE"],
  ["Wednesday",     "WED"],
  ["Thursday",      "THU"],
  ["Friday",        "FRI"],
  ["Saturday",      "SAT"],
  ["Sunday",        "SUN"],
  ["Today",         "TOD"],
  ["Tonight",       "TON"],
  ["Tomorrow",      "TOM"],
  ["Weekdays",      "WKD"],
  ["Weeknights",    "WKN"],
  ["Keep Watching", "KEP"],  
  ["All Day",        "AD"],
];


var Month = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  days: [],

  days_init: function() {
    var days = new Array();
    for (var i = 1; i <= 31; i++) {
      days.push(i);
    }
    this.days = days;
  },

  set_days_of_the_month: function(m, ui_group) {
    // TODO
    var max = 31;

    switch (true) {
    case (m == 2) :
      max = 28;
      break;
      // Month rules
    case ( (m % 2 == 0 && m <= 7) || (m % 2 == 1 && m > 7 && m < 13) ) :
      max = 30;
      break;
      default : max = 31;
    }
  }
};

month.days_init();



var time = [
  "Select Time",
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00"
];

// Default time
var master_time_txt = "5/4c PM";

// Lots of duplication here.  Let's see what can be done about that.
var show_classifier = ["Show Classifier", "Season", "Premiere", "Premieres", "Season Premiere", "Original Series", "All Day", "All-New",
                        "Marathon", "Back to Back", "Thanksgiving Marathon", "New Year's Eve Marathon", "New Year's Day Marathon"];

var show_classifier_abrv = ["S", "PRE", "PRS", "SPR", "ORG", "AD", "AN", "MAR", "BTB", "THG", "NYE", "NYD"];

var tunein_classifier = ["Tune-in Classifier", "Season", "Premiere", "Premieres", "Season Premiere", "Next", "Original Series", "All Day", "All-New",
                        "Marathon", "Back to Back", "Thanksgiving Marathon", "New Year's Eve Marathon", "New Year's Day Marathon"];

var tunein_classifier_abrv = ["S", "PRE", "PRS", "SPR", "NEX", "ORG", "AD", "AN", "MAR", "BTB", "THG", "NYE", "NYD"];
var bmb_msg_abrv = ["S", "PRE", "SPR", "NEX", "ORG", "AD", "AN", "BTB", "KEEP", "AEP", "SLP", "RISE"];


