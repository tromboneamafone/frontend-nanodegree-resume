bio = {
    "name": "Robert Bevly",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(972) 310-9391",
        "email": "robertbevly@gmail.com",
        "github": "tromboneamafone",
        "twitter": "@RobertBevly",
        "location": "Denton, TX",
        "blog": "NONE",
    },
    "welcomeMessage": "welcome to my online resume",
    "skills": [
        "Python",
        "Web Development",
        "IT",
    ],
    "biopic": "images/me.jpg",
    "display": function display() {
        // Display name and role in header:
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#header").prepend(formattedName + formattedRole);
        $("#topContacts").append(formattedMobile + formattedEmail +
                             formattedGithub + formattedTwitter + formattedLocation);
        $("#header").append(formattedBiopic + formattedWelcomeMessage);

        // check if there are any skills in bio object and append
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    },
};

work = {
    "jobs": [
        {
            "employer": "USMC",
            "title": "Sergeant",
            "dates": "April 18, 2006 - April 17, 2010",
            "description": "Tropospheric Scatter Radio Multi-channel Equipment Operator",
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

education = {
    "schools": [
        {
            "name": "North Lake College",
            "location": "Irving, TX, US",
            "degree": "Core Curriculum",
            "majors": "None",
            "dates": "2004-2005",
            "url": "http://www.northlakecollege.edu"
        },
        {
            "name": "University of North Texas",
            "location": "Denton, TX, US",
            "degree": "BS",
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
    ],
    "display": function display() {
        $("#education").append(HTMLschoolStart);
        for (school in education.schools) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree +
                                              formattedSchoolDates + formattedSchoolLocation +
                                              formattedSchoolMajor);
        }
        for (course in education.onlineCourses) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(HTMLonlineClasses + formattedOnlineTitle + formattedOnlineSchool +
                                              formattedOnlineDates + formattedOnlineUrl);
        }
    }
}

// Log click locations:
$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

// Display 'internationalize' button:
$("#main").append(internationalizeButton);

// Run display functions for each JSON object:
work.display();
projects.display();
bio.display();
education.display();

// Display Google Maps with locations:
$("#mapDiv").append(googleMap);
