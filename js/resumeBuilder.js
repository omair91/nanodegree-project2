var bio = {
    "name": "Omair Shamshir",
    "role": "Web Developer",
    "contacts": {
        "email": "omairshamshir@gmail.com",
        "github": "omairshamshir",
        "location": "lahore",
        "mobile": "03224115465",
        "twitter": "No Account"
    },
    "bioPic": "images/fry.jpg",
    "welcomeMessage": "Welcome to my profile",
    "skills": ['python', 'HTML', 'CSS', 'JS'],

    "display": function () {
    var name_header = HTMLheaderName.replace("%data%", bio.name);
    var role_header = HTMLheaderRole.replace("%data%", bio.role);
    var bio_pic = HTMLbioPic.replace("%data%", bio.bioPic);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var locations = HTMLlocation.replace("%data%", bio.contacts.location);
    var git = HTMLgithub.replace("%data%", bio.contacts.github);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var msg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    
    $("#header").prepend(role_header);
    $("#header").prepend(name_header);
    $("#header").append(bio_pic);
    $("#header").append(msg);
    
    $("#topContacts").append(locations + mobile + git + email + twitter);
    $("#footerContacts").append(locations + mobile + git + email + twitter);
    
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
        var skill_rendered = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(skill_rendered);
    }
}

};

var work = {
    "jobs": [
        {
            "title": 'software engineer',
            "description": 'I have been working in Arbisoft for past three years as software engineer. I have worked on several python projects',
            "employer": 'Arbisoft',
            "dates": '2012 - Present',
            "location": "Paris"
        }
    ],

    "display": function () {
    for (w in work["jobs"]) {
        $("#workExperience").append(HTMLworkStart);
        var employer_title = HTMLworkEmployer.replace("%data%", work["jobs"][w]['employer']) + HTMLworkTitle.replace("%data%", work["jobs"][w]['title']);
        var desc = HTMLworkDescription.replace("%data%", work["jobs"][w]['description']);
        var date = HTMLworkDates.replace("%data%", work["jobs"][w]['dates']);
        var location = HTMLworkLocation.replace("%data%", work["jobs"][w]['location']);

        $(".work-entry:last").append(employer_title);
        $(".work-entry:last").append(date);
        $(".work-entry:last").append(location);
        $(".work-entry:last").append(desc);
        $(".work-entry:last").append(HTMLline);        
    }
}
};


var education = {
    "schools": [{
        "school": "UET",
        "year": 2012,
        "location": "Lahore",
        "degree": "BSc",
        "major": "Electrical"

    },
        {
            "school": "PCS",
            "year": 2008,
            "location": "Islamabad",
            "degree": "FSc",
            "major": "Engineering"
        }

    ],

    "Onlinecourses": [{
        "title": "Introduction to programming",
        "url": "https://www.udacity.com/course/cs101",
        "school": "udacity",
        "dates": 2014
    }

    ],

    "display": function(){
    for(var school in education.schools){
        $("#education").append(HTMLschoolStart);
        var school_rendered = HTMLschoolName.replace("%data%", education.schools[school].school);
        var degree_rendered = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var school_degree = school_rendered +  degree_rendered;        
        var dates_rendered = HTMLschoolDates.replace("%data%", education.schools[school].year);
        var location_rendered = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var major_rendered = HTMLschoolMajor.replace("%data%", education.schools[school].major);

        $(".education-entry:last").append(school_degree);
        $(".education-entry:last").append(dates_rendered);
        $(".education-entry:last").append(location_rendered);
        $(".education-entry:last").append(major_rendered);
        $(".education-entry:last").append(HTMLline);

    }
    
    if (education.Onlinecourses.length > 0){
        $("#education").append(HTMLonlineClasses);
        for(var course in education.Onlinecourses){
            $("#education").append(HTMLschoolStart);
            var title = HTMLonlineTitle.replace("%data%", education.Onlinecourses[course].title);
            var school = HTMLonlineTitle.replace("%data%", education.Onlinecourses[course].school);
            var title_school = title + school;
            var dates = HTMLonlineDates.replace("%data%", education.Onlinecourses[course].dates);
            var url = HTMLonlineURL.replace("%data%", education.Onlinecourses[course].url);

            $(".education-entry:last").append(title_school);
            $(".education-entry:last").append(dates);
            $(".education-entry:last").append(url);
        }
    }
}

};


var projects = {
    "projects": [{
        "title": "sample project 1",
        "dates": 2014,
        "description": "My first project in udacity nano degree program , creating the portfolio",
        "images": ["images/proj.png"]
    }
    ],
    "display": function () {
    for (p in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace("%data%", projects.projects[p]['title']);
        var dates = HTMLprojectDates.replace("%data%", projects.projects[p]['dates']);
        var desc = HTMLprojectDescription.replace("%data%", projects.projects[p]['description']);

        $(".project-entry:last").append(title);
        $(".project-entry:last").append(dates);
        $(".project-entry:last").append(desc);

        for (img in projects.projects[p].images) {
            var img = HTMLprojectImage.replace("%data%", projects.projects[p].images[img]);
            $(".project-entry:last").append(img);
        }
    }
}

};


bio.display();
education.display();
projects.display();
work.display();

$("#mapDiv").append(googleMap);


// $("#main").append(internationalizeButton);

// function inName(name) {
//     var finalName = name.trim();
//     var name_array = finalName.split(" ");
//     name_first = name_array[0];
//     name_first = name_first.toLowerCase();
//     first_char = name_first[0];
//     name_first = name_first.replace(first_char, first_char.toUpperCase(), 1);
//     name_second = name_array[1].toUpperCase();
//     finalName = name_first + " " + name_second;
//     return finalName;
// }

