work = {
    "jobs": [
        {
            "employer": "USMC",
            "title": "Sergeant",
            "dates": "April 18, 2006 - April 17, 2010",
            "description": "MUX radio operator",
            "location": "Okinawa, Japan & San Diego, California"
        },
        {
            "employer": "ENRG Consultants",
            "title": "IT",
            "dates": "May 16, 2012 - Today 2015",
            "description": "IT guy and general programmer",
            "location": "Farmers Branch, Texas"
        }
    ]
}

projects = {
    "projects": [
        {
            "title": "website mockup",
            "dates": "2014",
            "description": "given a PDF, create a website mockup",
            "images": [

            ]
        }
    ]
}

bio = {
    "name": "Robert Bevly",
    "role": "Web Development",
    "welcomeMessage": "welcome to my portfolio/resume",
    "contactInfo": [
        {
            "mobile": "(972) 310-9391",
            "email": "robertbevly@gmail.com",
            "github": "tromboneamafone",
            "location": "Denton, TX, US"
        }
    ],
    "age": 29,
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

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
}

for (i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
}

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
}
