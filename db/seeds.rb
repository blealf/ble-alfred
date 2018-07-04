AdminUser.create!([
  {email: "blealf@gmail.com", encrypted_password: "$2a$11$kxTS71lTSTaf9Uxpuh1bIezvPhrTb8kWP4tuZmbAHIaL0BD0rBF2C", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2018-07-04 14:08:28", last_sign_in_at: "2018-07-04 14:08:28", current_sign_in_ip: "::1", last_sign_in_ip: "::1"}
])
Education.create!([
  {institution: "Fanshawe College", degree: "PgCert", course: "Project Management", start_date: "2018-01-23", end_date: "2018-08-24", additional_info: "", rank: 1},
  {institution: "De Montfort University, Leicester, UK", degree: "Masters", course: "Information Systems Management", start_date: "2015-09-28", end_date: "2016-09-30", additional_info: "Grade: Distinction", rank: 2},
  {institution: "University of Lagos, Lagos, Nigeria", degree: "Bachelors", course: "Geology", start_date: "2009-09-28", end_date: "2014-12-31", additional_info: "Grade: Second class upper (4.17/5.0)", rank: 3}
])
Skill.create!([
  {skill: "Java", category: "", rank: nil},
  {skill: "Ruby on Rails", category: "", rank: 1},
  {skill: "HTML5", category: "", rank: nil},
  {skill: "CSS3", category: "", rank: nil},
  {skill: "Git", category: "", rank: nil},
  {skill: "Python", category: "", rank: nil},
  {skill: "React JS", category: "", rank: 2},
  {skill: "JavaScript", category: "", rank: 3}
])
Experience.create!([
  {job_title: "Frontrunner Intern", company: "De Montfort Universiy, Leicester, UK", start_date: "2016-06-01", end_date: "2016-12-31"},
  {job_title: "Software Development Team Member", company: "Schlumberger Company with the University of Lagos, Lagos, Nigeria.", start_date: "2014-05-01", end_date: "2014-11-30"}
])

JobDuty.create!([
  {duty: "Preliminary investigation on neural network models for spatial data analysis", experience_id: 1},
  {duty: "Data Loading and processing using MATLAB and Python", experience_id: 1},
  {duty: "Time series analysis of spatial data using artificial neural networks to predict vegetation cover of an area in Leicester, England, United Kingdom", experience_id: 1},
  {duty: "Data preparation and sampling", experience_id: 1},
  {duty: "Participated in a competition involving several universities in developing a plugin for the Petrel (Schlumberger) software to extract stratigraphic information from seismic data using C#.", experience_id: 2},
  {duty: "Gathered user requirement and developed functional requirement for the system", experience_id: 2},
  {duty: "Facilitated team meetings", experience_id: 2},
  {duty: "Worked in a team of four during a 6 months' period and made several presentations on the result of the builds.", experience_id: 2}
])
