Education.create!([
  {institution: "De Montfort University, Leicester, UK", degree: "Masters", course: "Information Systems Management", start_date: "2015-09-28", end_date: "2016-09-30", additional_info: "Grade: Distinction"},
  {institution: "University of Lagos, Lagos, Nigeria", degree: "Bachelors", course: "Geology", start_date: "2009-09-28", end_date: "2014-12-31", additional_info: "Grade: Second class upper"}
])
Experience.create!([
  {job_title: "frontrunner Intern", company: "De Montfort Universiy, Leicester, UK", start_date: "2016-06-01", end_date: "2016-12-31"}
])
JobDuty.create!([
  {duty: "Preliminary investigation on neural network models for spatial data analysis", experience_id: 1},
  {duty: "Data Loading and processing using MATLAB and Python", experience_id: 1},
  {duty: "Time series analysis of spatial data using artificial neural networks to predict vegetation cover of an area in Leicester, England, United Kingdom", experience_id: 1},
  {duty: "Data preparation and sampling", experience_id: 1}
])
