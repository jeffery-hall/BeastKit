/**********************************************************************************************************************************
/**
/** Locate and set working comps
/**
/*********************************************************************************************************************************/


var proj = app.project;

var ProjComps = {

    set_comps: function() {
	
	for (var i = 1; i <= proj.items.length; i++) {
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Master Control") {
		this.color_ctrl = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Time Database") {
		this.time_db = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "EPL Right submaster 8 sec") {
		this.epl_r_8_sub = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "EPL R TALENT") {
		this.epl_r_talent = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Hero Logo master") {
		this.hero_logo = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Hero Logo master 4secs") {
		this.hero_logo4s = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "EPL Right submaster 10 sec") {
		this.epl_r_10_sub = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "EPL Right submaster 6 sec") {
		this.epl_r_6_sub = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "EPL Right submaster 5 sec") {
		this.epl_r_5_sub = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "EPL Full Cast submaster") {
		this.epl_full_sub = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Hero Logo master Reverse") {
		this.hero_logo_rev = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "EPL FULL TALENT") {
		this.epl_full_talent = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "EPL Left submaster") {
		this.epl_l_sub = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "EPL Right copy") {
		this.epl_copy_right = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "EPL Left copy") {
		this.epl_copy_left = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "EPL L TALENT") {
		this.epl_l_talent = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Time Database Left") {
		this.time_db_left = proj.items[i];
	    }


	    // Opens
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Open Front Callout master") {
		this.opn_call = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Show Title A sub") {
		this.title_a = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Show Title B sub") {
		this.title_b = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Callout sub") {
		this.call = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Open master") {
		this.opn_master = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Open master 3 Sec") {
		this.opn_master_3s = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Open master 4 Sec") {
		this.opn_master_4s = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Open Logo master") {
		this.opn_logo_master = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Open Logo Trans master") {
		this.opn_logo_trans_master = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Open Trans master") {
		this.opn_trans_master = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Intro") {
		this.opn_intro = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Intro trans") {
		this.opn_intro_trans = proj.items[i];
	    }


	    if (proj.items[i] instanceof FootageItem && proj.items[i].name == "Hero Logo BG") {
		this.hero_logo_bg = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "BMP Talent submaster") {
		this.bmp_tal_sub = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Bump Talent MSG") {
		this.bmp_tal_msg = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "TALENT - Front") {
		this.bmp_talent_front = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "TALENT - Back") {
		this.bmp_talent_back = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Bump Transition") {
		this.bmp_trans = proj.items[i];
	    }
	    // Lower Third comps
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Show Title element") {
		this.l3d_title = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Tune-in element") {
		this.l3d_tunein = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "L3D No Open-Close Anim master") {
		this.l3d_master = proj.items[i];
	    }
	    // Bug comps
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Color Wave sub master") {
		this.color_wave = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Bug Master") {
		this.bug_master = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Bug Right Side") {
		this.bug_right_master = proj.items[i];
	    }
	    // Transisition comps
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Dot Color") {
		this.dot_color = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Logo Color") {
		this.logo_color = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Transition1 Color-Color") {
		this.trans1_color = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Transition1 Color-Gray") {
		this.trans1_gray = proj.items[i];
	    }
	    // Billboard comps
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "White BG sub") {
		this.color_corner = proj.items[i];
	    }
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "Gray BG sub") {
		this.gray_corner = proj.items[i];
	    }

	    // Specials
	    if (proj.items[i] instanceof CompItem && proj.items[i].name == "WHC Bump MSG") {
		this.whc_bmp_msg = proj.items[i];
	    }

	    // Get talent folders
	    if (proj.items[i] instanceof FolderItem && proj.items[i].name == "Talent Containers" && proj.items[i].parentFolder.name == "EPL Right") {
		this.epl_r_tal_container = proj.items[i];
	    }
	}
    }
};


ProjComps.set_comps();

alert("Testing project comps object:\nEPL R Talent comp:  " + ProjComps.epl_r_talent.name.toString());
