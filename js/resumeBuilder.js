work = {
    "jobs": [
        {
            "employer": "USMC",
            "title": "Sergeant",
            "dates": "April 18, 2006 - April 17, 2010",
            "description": "MUX radio operator",
            "location": "Okinawa, Japan"
        },
        {
            "employer": "ENRG Consultants",
            "title": "IT",
            "dates": "May 16, 2012 - Today 2015",
            "description": "IT guy and general programmer",
            "location": "Farmers Branch, Texas"
        }
    ],
    "display": function displayWork() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
        }
    }
}

projects = {
    "project": [
        {
            "title": "website mockup",
            "dates": "2014",
            "description": "given a PDF, create a website mockup",
            "images": [
                "images/fry.jpg",
            ]
        }
    ],
    "display": function display() {
        // use .append to add all projects info to the projects section
        $("#projects").append(HTMLprojectStart);
        for (project in projects.project) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
            var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].images);
            $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
        }
    }
}

bio = {
    "name": "Robert Bevly",
    "role": "Web Development",
    "welcomeMessage": "welcome to my portfolio/resume",
    "contacts": {
            "mobile": "(972) 310-9391",
            "email": "robertbevly@gmail.com",
            "github": "tromboneamafone",
            "twitter": "@RobertBevly",
            "location": "Denton, TX"
        },
    "skills": [
        "Python",
        "Web Development",
        "IT"
    ]
};

education = {
    "schools": [
        {
            "name": "University of North Texas",
            "location": "Denton, TX, US",
            "degree": "Computer Science",
            "majors": "Computer Science",
            "dates": "2010-2014",
            "url": "http://www.unt.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "December 2015 - ????",
            "url": "https://www.udacity.com/nanodegrees"
        }
    ]
}

$("#main").append(work["position"]);
$("#main").append(education.name);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        locationArray.append(work_obj.jobs[job].location);
    }
    return locationArray;
}

$("#main").append(internationalizeButton);

function inName(name) {
    var formattedName = name.trim().split(" ");
    formattedName[0][1] = formattedName[0][1].toUpperCase();
    formattedName[1] = formattedName[1].toUpperCase();
    return formattedName.join(" ");
}

work.display();
projects.display();
$("#mapDiv").append(googleMap);
