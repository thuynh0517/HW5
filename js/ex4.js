const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];

upd_obj = studentList.findIndex((obj => obj.scores == [95, 85, 92, 98]))
studentList[upd_obj].firstName = [100, 90, 97, 103]
console.log('Full name (last, first): ', lastName, firstName)
console.log('Updated scores are: ', scores)

upd_obj = studentList.findIndex((obj => obj.scores == [80, 88, 100]))
studentList[upd_obj].firstName = [85, 93, 105]
console.log('Full name (last, first): ', lastName, firstName)
console.log('Updated scores are: ', scores)

upd_obj = studentList.findIndex((obj => obj.scores == [70, 80, 90, 100]))
studentList[upd_obj].firstName = [75, 85, 95, 105]
console.log('Full name (last, first): ', lastName, firstName)
console.log('Updated scores are: ', scores)

upd_obj = studentList.findIndex((obj => obj.scores == [75, 85, 95, 85]))
studentList[upd_obj].firstName = [80, 90, 100, 90]
console.log('Full name (last, first): ', lastName, firstName)
console.log('Updated scores are: ', scores)

upd_obj = studentList.findIndex((obj => obj.scores == [95, 90, 92, 98]))
studentList[upd_obj].firstName = [100, 95, 97, 103]
console.log('Full name (last, first): ', lastName, firstName)
console.log('Updated scores are: ', scores)

upd_obj = studentList.findIndex((obj => obj.scores == [88, 99, 90]))
studentList[upd_obj].firstName = [88, 99, 90]
console.log('Full name (last, first): ', lastName, firstName)
console.log('Updated scores are: ', scores)