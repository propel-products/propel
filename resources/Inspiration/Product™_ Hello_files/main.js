

function isInViewport(elementId){

	element = document.getElementById(elementId);
	if (element == null) { return false;}
     let rect = element.getBoundingClientRect();
     let viewPortBottom = window.innerHeight || document.documentElement.clientHeight;
     result = false
     if ((rect.top >= 0 && rect.top < viewPortBottom) || (rect.top < 0 && rect.bottom > 60)) { result = true }
     return result;

   }

function toggleLogoColor() {
	services_module = document.getElementById("services_module");
	contact_module = document.getElementById("contact_module");
	logo_header = document.getElementById("logo_header");
	if (services_module != null) {
    	let rect = services_module.getBoundingClientRect();
     	if ((rect.top < 60 && rect.bottom > 60)) { 
     		if (logo_header.classList.contains("whitebg"))  {
     			logo_header.classList.remove("whitebg");
				logo_header.classList.add("blackbg");
			}
			return;
		}
	}

	if (contact_module != null) {
		let rect = contact_module.getBoundingClientRect();
		if (rect.top < -55) {
			if (logo_header.classList.contains("whitebg"))  {
     			logo_header.classList.remove("whitebg");
				logo_header.classList.add("blackbg");
			}
			return;
		}
	}

	if (window.innerWidth < 801) {
		insights_modules = document.getElementById("insights_modules");
		let rect = insights_modules.getBoundingClientRect();
		if (rect.top < 60 && rect.bottom > 60) {
			if (logo_header.classList.contains("whitebg"))  {
     			logo_header.classList.remove("whitebg");
				logo_header.classList.add("blackbg");
			}
			return;
		}
	}
	
	if (logo_header.classList.contains("blackbg")) {
		logo_header.classList.add("whitebg");
		logo_header.classList.remove("blackbg");
	}
}

function setSticky(stickyStatus) {
	if (navigator.userAgent.includes("Chrome")) { return;}
	if (stickyStatus == true) {
		document.getElementById("work_module").classList.add("position_sticky_on");
		document.getElementById("work_module").classList.remove("position_sticky_off");
		document.getElementById("case_study_module1").classList.add("position_sticky_on");
		document.getElementById("case_study_module1").classList.remove("position_sticky_off");
		document.getElementById("case_study_module2").classList.add("position_sticky_on");
		document.getElementById("case_study_module2").classList.remove("position_sticky_off");
		document.getElementById("case_study_module3").classList.add("position_sticky_on");
		document.getElementById("case_study_module3").classList.remove("position_sticky_off");
	}
	else {
		document.getElementById("work_module").classList.remove("position_sticky_on");
		document.getElementById("work_module").classList.add("position_sticky_off");
		document.getElementById("case_study_module1").classList.remove("position_sticky_on");
		document.getElementById("case_study_module1").classList.add("position_sticky_off");
		document.getElementById("case_study_module2").classList.remove("position_sticky_on");
		document.getElementById("case_study_module2").classList.add("position_sticky_off");
		document.getElementById("case_study_module3").classList.remove("position_sticky_on");
		document.getElementById("case_study_module3").classList.add("position_sticky_off");
	}
}

function closePanels() {
	document.getElementById('approach_panel').classList.remove('on');
	document.getElementById('case_study_panel1').classList.remove('on');
	document.getElementById('case_study_panel2').classList.remove('on');
	document.getElementById('case_study_panel3').classList.remove('on');
	document.getElementById('grayout').classList.remove('on');
	document.getElementById('submitted_modal').classList.remove('on');
}

function openPanel(panel) {
	document.getElementById(panel).classList.add('on');
	document.getElementById('grayout').classList.add('on');
}

document.getElementById('approach_link').addEventListener('click', e => { openPanel('approach_panel')});
document.getElementById('case_study_link1').addEventListener('click', e => { openPanel('case_study_panel1')});
document.getElementById('case_study_link2').addEventListener('click', e => { openPanel('case_study_panel2')});
document.getElementById('case_study_link3').addEventListener('click', e => { openPanel('case_study_panel3')});

document.getElementById('logo_post').addEventListener('click', e => { openPanel('case_study_panel1')});
document.getElementById('logo_better').addEventListener('click', e => { openPanel('case_study_panel2')});
document.getElementById('logo_chubb').addEventListener('click', e => { openPanel('case_study_panel3')});

document.getElementById('logo_post2').addEventListener('click', e => { openPanel('case_study_panel1')});
document.getElementById('logo_better2').addEventListener('click', e => { openPanel('case_study_panel2')});
document.getElementById('logo_chubb2').addEventListener('click', e => { openPanel('case_study_panel3')});

document.getElementById('approach_panel_close').addEventListener('click', e => { closePanels()});
document.getElementById('approach_panel_close_icon').addEventListener('click', e => { closePanels()});
document.getElementById('case_study_panel_close1').addEventListener('click', e => { closePanels()});
document.getElementById('case_study_panel_close_icon1').addEventListener('click', e => { closePanels()});
document.getElementById('case_study_panel_close2').addEventListener('click', e => { closePanels()});
document.getElementById('case_study_panel_close_icon2').addEventListener('click', e => { closePanels()});
document.getElementById('case_study_panel_close3').addEventListener('click', e => { closePanels()});
document.getElementById('case_study_panel_close_icon3').addEventListener('click', e => { closePanels()});

document.getElementById('grayout').addEventListener('click', e => { closePanels()});
document.getElementById('submitted_modal_close').addEventListener('click', e => { closePanels()});
document.getElementById('submitted_modal').addEventListener('click', e => { closePanels()});

var mobileMenuOpen = false;

function mainMenuClick(name) {
	var panel = '#' + name.toLowerCase();
	if (name == "Work") {	
		setSticky(false);
	}
	if (window.innerWidth > 550) {
		window.location.href = panel;

	} else if (mobileMenuOpen) {
		mobileMenuClick(name);	
	} else {
		document.getElementById('menu_mobile').style.animation = "fadeInAnimation .75s forwards";
		document.getElementById('logo_header').classList.add('menuopen');
		document.getElementById("menu_" + name + "_text").innerHTML = "Close";
		document.getElementById("menu_" + name + "_close").classList.remove('hidden');
		document.getElementById("menu_" + name + "_hamburger").classList.add('hidden');
		mobileMenuOpen = true;
	}
}

function resetMobileMenuButton() {
	document.getElementById("menu_Home_close").classList.add('hidden');
	document.getElementById("menu_Work_close").classList.add('hidden');
	document.getElementById("menu_Services_close").classList.add('hidden');
	document.getElementById("menu_Products_close").classList.add('hidden');
	document.getElementById("menu_Insights_close").classList.add('hidden');
	document.getElementById("menu_Contact_close").classList.add('hidden');
	document.getElementById("menu_Home_text").innerHTML = "Home";
	document.getElementById("menu_Work_text").innerHTML = "Work";
	document.getElementById("menu_Services_text").innerHTML = "Services";
	document.getElementById("menu_Products_text").innerHTML = "Products";
	document.getElementById("menu_Insights_text").innerHTML = "Insights";
	document.getElementById("menu_Contact_text").innerHTML = "Contact";
	document.getElementById("menu_Home_hamburger").classList.remove('hidden');
	document.getElementById("menu_Work_hamburger").classList.remove('hidden');
	document.getElementById("menu_Services_hamburger").classList.remove('hidden');
	document.getElementById("menu_Products_hamburger").classList.remove('hidden');
	document.getElementById("menu_Insights_hamburger").classList.remove('hidden');
	document.getElementById("menu_Contact_hamburger").classList.remove('hidden');
}

function mobileMenuClick(name) {
	var panel = '#' + name.toLowerCase();
	if (name == "Work") {	
		setSticky(false);
	}
	document.getElementById('menu_mobile').style.animation = "fadeOutAnimation .75s forwards";
	document.getElementById('logo_header').classList.remove('menuopen');
	mobileMenuOpen = false;
	window.location.href = panel;
	resetMobileMenuButton();
/*	document.getElementById("menu_" + name + "_text").innerHTML = name;
	document.getElementById("menu_" + name + "_close").classList.add('hidden');
	document.getElementById("menu_" + name + "_hamburger").classList.remove('hidden');*/
}


function fixMenu() {
	if (window.innerWidth > 550) 
	{
		if (mobileMenuOpen) {
			mobileMenuOpen = false;
			document.getElementById('menu_mobile').style.animation = "fadeOutAnimation .75s forwards";
			document.getElementById('logo_header').classList.remove('menuopen');
		}	
		resetMobileMenuButton();
	}
}

window.addEventListener("resize", e => { fixMenu(); toggleLogoColor(); });

function expandService(service) {
	if (window.innerWidth > 550) { return;}
	if (document.getElementById(service + "_text").classList.contains("on")) {
		document.getElementById(service + "_text").classList.remove("on");
		document.getElementById(service + "_arrow").innerHTML = '&#9660;';
	} else {
		document.getElementById(service + "_text").classList.add("on");
		document.getElementById(service + "_arrow").innerHTML = '&#9650;';
	}
}

document.getElementById('menu_mobile_home_div').addEventListener('click', e => { mobileMenuClick("Home");});
document.getElementById('menu_mobile_work_div').addEventListener('click', e => { mobileMenuClick("Work");});
document.getElementById('menu_mobile_services_div').addEventListener('click', e => { mobileMenuClick("Services"); });
document.getElementById('menu_mobile_products_div').addEventListener('click', e => { mobileMenuClick("Products"); });
document.getElementById('menu_mobile_insights_div').addEventListener('click', e => { mobileMenuClick("Insights"); });
document.getElementById('menu_mobile_contact_div').addEventListener('click', e => { mobileMenuClick("Contact"); });

document.getElementById('menu_home_div').addEventListener('click', e => { mainMenuClick("Home")});
document.getElementById('menu_work_div').addEventListener('click', e => { mainMenuClick("Work")});
document.getElementById('menu_services_div').addEventListener('click', e => { mainMenuClick("Services")});
document.getElementById('menu_products_div').addEventListener('click', e => { mainMenuClick("Products")});
document.getElementById('menu_insights_div').addEventListener('click', e => { mainMenuClick("Insights")});
document.getElementById('menu_contact_div').addEventListener('click', e => { mainMenuClick("Contact")});

document.getElementById("logo_header").addEventListener('click', e => { if (mobileMenuOpen) {mobileMenuClick("Home");} else { window.location.href="#home"}});

document.getElementById("services_creative").addEventListener('click', e => { expandService("services_creative");});
document.getElementById("services_social").addEventListener('click', e => { expandService("services_social");});
document.getElementById("services_digital").addEventListener('click', e => { expandService("services_digital");});
document.getElementById("services_performance").addEventListener('click', e => { expandService("services_performance");});
document.getElementById("services_capabilities").addEventListener('click', e => { expandService("services_capabilities");});




function highlightNavItem(elementName) {
	if (elementName == "home") {
		document.getElementById("menu_home_div").classList.add("menu_item_selected");
		document.getElementById("menu_home_div").classList.remove("menu_item");

		document.getElementById("menu_work_div").classList.remove("menu_item_selected");
		document.getElementById("menu_work_div").classList.add("menu_item");

		document.getElementById("menu_services_div").classList.remove("menu_item_selected");
		document.getElementById("menu_services_div").classList.add("menu_item");

		document.getElementById("menu_products_div").classList.remove("menu_item_selected");
		document.getElementById("menu_products_div").classList.add("menu_item");

		document.getElementById("menu_insights_div").classList.remove("menu_item_selected");
		document.getElementById("menu_insights_div").classList.add("menu_item");

		document.getElementById("menu_contact_div").classList.remove("menu_item_selected");
		document.getElementById("menu_contact_div").classList.add("menu_item");
	} else if (elementName == "work") {
		document.getElementById("menu_home_div").classList.remove("menu_item_selected");
		document.getElementById("menu_work_div").classList.add("menu_item_selected");
		document.getElementById("menu_services_div").classList.remove("menu_item_selected");
		document.getElementById("menu_products_div").classList.remove("menu_item_selected");
		document.getElementById("menu_insights_div").classList.remove("menu_item_selected");
		document.getElementById("menu_contact_div").classList.remove("menu_item_selected");
		document.getElementById("menu_home_div").classList.add("menu_item");
		document.getElementById("menu_work_div").classList.remove("menu_item");
		document.getElementById("menu_services_div").classList.add("menu_item");
		document.getElementById("menu_products_div").classList.add("menu_item");
		document.getElementById("menu_insights_div").classList.add("menu_item");
		document.getElementById("menu_contact_div").classList.add("menu_item");
	} else if (elementName == "services") {
		document.getElementById("menu_home_div").classList.remove("menu_item_selected");
		document.getElementById("menu_work_div").classList.remove("menu_item_selected");
		document.getElementById("menu_services_div").classList.add("menu_item_selected");
		document.getElementById("menu_products_div").classList.remove("menu_item_selected");
		document.getElementById("menu_insights_div").classList.remove("menu_item_selected");
		document.getElementById("menu_contact_div").classList.remove("menu_item_selected");
		document.getElementById("menu_home_div").classList.add("menu_item");
		document.getElementById("menu_work_div").classList.add("menu_item");
		document.getElementById("menu_services_div").classList.remove("menu_item");
		document.getElementById("menu_products_div").classList.add("menu_item");
		document.getElementById("menu_insights_div").classList.add("menu_item");
		document.getElementById("menu_contact_div").classList.add("menu_item");
	} else if (elementName == "products") {
		document.getElementById("menu_home_div").classList.remove("menu_item_selected");
		document.getElementById("menu_work_div").classList.remove("menu_item_selected");
		document.getElementById("menu_services_div").classList.remove("menu_item_selected");
		document.getElementById("menu_products_div").classList.add("menu_item_selected");
		document.getElementById("menu_insights_div").classList.remove("menu_item_selected");
		document.getElementById("menu_contact_div").classList.remove("menu_item_selected");
		document.getElementById("menu_home_div").classList.add("menu_item");
		document.getElementById("menu_work_div").classList.add("menu_item");
		document.getElementById("menu_services_div").classList.add("menu_item");
		document.getElementById("menu_products_div").classList.remove("menu_item");
		document.getElementById("menu_insights_div").classList.add("menu_item");
		document.getElementById("menu_contact_div").classList.add("menu_item");
	} else if (elementName == "insights") {
		document.getElementById("menu_home_div").classList.remove("menu_item_selected");
		document.getElementById("menu_work_div").classList.remove("menu_item_selected");
		document.getElementById("menu_services_div").classList.remove("menu_item_selected");
		document.getElementById("menu_products_div").classList.remove("menu_item_selected");
		document.getElementById("menu_insights_div").classList.add("menu_item_selected");
		document.getElementById("menu_contact_div").classList.remove("menu_item_selected");
		document.getElementById("menu_home_div").classList.add("menu_item");
		document.getElementById("menu_work_div").classList.add("menu_item");
		document.getElementById("menu_services_div").classList.add("menu_item");
		document.getElementById("menu_products_div").classList.add("menu_item");
		document.getElementById("menu_insights_div").classList.remove("menu_item");
		document.getElementById("menu_contact_div").classList.add("menu_item");
	} else if (elementName == "contact") {
		document.getElementById("menu_home_div").classList.remove("menu_item_selected");
		document.getElementById("menu_work_div").classList.remove("menu_item_selected");
		document.getElementById("menu_services_div").classList.remove("menu_item_selected");
		document.getElementById("menu_products_div").classList.remove("menu_item_selected");
		document.getElementById("menu_insights_div").classList.remove("menu_item_selected");
		document.getElementById("menu_contact_div").classList.add("menu_item_selected");
		document.getElementById("menu_home_div").classList.add("menu_item");
		document.getElementById("menu_work_div").classList.add("menu_item");
		document.getElementById("menu_services_div").classList.add("menu_item");
		document.getElementById("menu_products_div").classList.add("menu_item");
		document.getElementById("menu_insights_div").classList.add("menu_item");
		document.getElementById("menu_contact_div").classList.remove("menu_item");
	}
}

function adjustProductsHeight() {
	 let viewPortBottom = window.innerHeight || document.documentElement.clientHeight;
	 if (viewPortBottom < 600) {
	 	if (document.getElementById("work_module").classList.contains("work_module_height")) {
	 		document.getElementById("work_module").classList.remove("work_module_height");
	 		document.getElementById("work_module").classList.add("work_module_height_smallscreen");
	 	} else if (document.getElementById("work_module").classList.contains("work_module_height_smallscreen")) {
	 		document.getElementById("work_module").classList.add("work_module_height");
	 		document.getElementById("work_module").classList.remove("work_module_height_smallscreen");
	 	}
	 }
}

document.body.addEventListener('scroll', (event) => {
	
	home_visible = isInViewport("home_module");
	work_visible = isInViewport("work_module");
	case_study1_visible = isInViewport("case_study_module1");
	case_study2_visible = isInViewport("case_study_module2");
	case_study3_visible = isInViewport("case_study_module3");
	services_visible = isInViewport("services_module");
	products_visible = isInViewport("products_module");
	insights_visible = isInViewport("insights_module");
	contact_visible = isInViewport("contact_module");

	toggleLogoColor(); 		

	if (home_visible) {
		highlightNavItem("home");
		return;
	} 

	if (services_visible) {
		highlightNavItem("services");
		return;
	}

	if (products_visible) {
		highlightNavItem("products");
		adjustProductsHeight();
		return;
	}

	if (insights_visible) {
		highlightNavItem("insights");
		return;
	}

	if (contact_visible) {
		highlightNavItem("contact");
		return;
	}

	if (work_visible || case_study1_visible || case_study2_visible || case_study3_visible) {
		highlightNavItem("work");
		setSticky(true);
		return;
	}
    
});


/* video controls */


	// Video
	var video = document.getElementById("video1");

	// Buttons
	var playButton = document.getElementById("play");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");

	// Sliders
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");

// Event listener for the play/pause button
	if(typeof(playButton) != 'undefined' && playButton != null){
	
	playButton.addEventListener("click", function() {
		video.muted = false;
		video.volume = 0.5;
		video.currentTime = 0;
		video.play();
		playButton.classList.add('hidden');
		video.classList.add('cursor-pointer');
	});
}

if(typeof(video) != 'undefined' && video != null){
	video.addEventListener('click', function() {
		if (playButton.classList.contains('hidden')) {
			video.muted = true;
			playButton.classList.remove('hidden');
			video.classList.remove('cursor-pointer');
		} 
	});
}

if(typeof(fullScreenButton) != 'undefined' && fullScreenButton!= null){
	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
		
		video.muted = false;
		video.volume = 0.5;
		video.currentTime = 0;
		
		if (video.webkitEnterFullscreen) {
			video.webkitEnterFullscreen(); // Chrome and Safari
		}
		else if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} 

	if (video.paused == true) {
		video.play();
		}
	},false);


	
	// fullscreen play from button only - ensure closing it stops video
	// redundant with stuff below?
	video.addEventListener('fullscreenchange', function() {
	 if (!document.fullscreenElement) {
  	    video.pause();
  	  } 
	});

	document.addEventListener("fullscreenchange", function () {
	    if (!document.fullscreen) {
		video.muted = true;
		}
	}, false);
	document.addEventListener("mozfullscreenchange", function () {
	    if (!document.mozFullScreen) {
		video.muted = true;
		}
	}, false);
	document.addEventListener("webkitfullscreenchange", function () {
	    if (!document.webkitIsFullScreen) {
		video.muted = true;
		}
	}, false);
}


var fromPanel = false;

document.addEventListener('click', function (event) {

	
	if (event.target.className.includes('slider_nav')) {
		if (event.target.dataset.slideraction == 'next') {
			nextSlide(event.target.dataset.slidercount);
		} 
		if (event.target.dataset.slideraction == 'prev') {
			prevSlide(event.target.dataset.slidercount);
		} 
	}
	
	if (event.target.id == "full-screen") {
		fromPanel = true;
		video.muted = false;
		video.volume = 0.5;
		video.currentTime = 0;
		
		if (video.webkitEnterFullscreen) {
			video.webkitEnterFullscreen(); // Chrome and Safari
		}
		else if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} 

	if (video.paused == true) {
		video.play();
		}
	}
	else {
		fromPanel = false;
	}
	
}, false);

function openSubscribedModal() {
	document.getElementById('submitted_modal').classList.add('on');
	document.getElementById('email_input').value = "";
}

function doNothing() { return;}

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  if (formData == null) { return; }
  if (document.getElementById('email_input').value == "") { return;}
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => openSubscribedModal())
   .catch((error) => doNothing());
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

