var sname = document.getElementById('sname');
var tname = document.getElementById('tname');
var cname = document.getElementById('cname');
var date = document.getElementById('date');
var title = document.getElementById('title');
var essay = document.getElementById('essay');
var submit = document.getElementById('submit');

var currentdate = new Date();
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
date.value =
  monthNames[currentdate.getMonth()] +
  ' ' +
  currentdate.getDate() +
  ', ' +
  currentdate.getFullYear();

function submitForm() {
  var data = {
    sname: sname.value,
    tname: tname.value,
    cname: cname.value,
    date: date.value,
    title: title.value,
    essay: essay.value
  };
  localStorage.setItem('data', JSON.stringify(data));
}
submitForm();

var dd = {
  content: [
    {
      text: 'Student Name - 1',
      alignment: 'right'
    },
    {
      text: 'Student Name',
      margin: [0, 5]
    },
    {
      text: 'Teacher Name',
      margin: [0, 5]
    },
    {
      text: 'Course Name',
      margin: [0, 5]
    },
    {
      text: 'Date',
      margin: [0, 5]
    },
    {
      text: 'Document Title',
      margin: [0, 5],
      alignment: 'center',
      bold: true
    },
    {
      text: ' ',
      margin: [0, -3]
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque lacinia dictum. Mauris consectetur mi eros, non tempus velit laoreet eget. Donec dictum accumsan neque ut aliquet. Sed fermentum, felis sit amet vehicula cursus, elit urna imperdiet lorem, eu porttitor leo ante in nisl. In at viverra lorem. Fusce dictum, neque et egestas pulvinar, erat metus mattis sapien, et blandit odio mi non ante. Donec enim ipsum, congue at arcu vitae, consequat ultrices tortor. Vivamus facilisis lorem quis turpis molestie, et molestie libero consequat. Integer dictum nulla non arcu malesuada egestas. Sed tempor ligula a urna ultricies porta. Cras malesuada eu ligula sit amet pulvinar.',
      lineHeight: 2,
      alignment: 'justify'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque lacinia dictum. Mauris consectetur mi eros, non tempus velit laoreet eget. Donec dictum accumsan neque ut aliquet. Sed fermentum, felis sit amet vehicula cursus, elit urna imperdiet lorem, eu porttitor leo ante in nisl. In at viverra lorem. Fusce dictum, neque et egestas pulvinar, erat metus mattis sapien, et blandit odio mi non ante. Donec enim ipsum, congue at arcu vitae, consequat ultrices tortor. Vivamus facilisis lorem quis turpis molestie, et molestie libero consequat. Integer dictum nulla non arcu malesuada egestas. Sed tempor ligula a urna ultricies porta. Cras malesuada eu ligula sit amet pulvinar.',
      lineHeight: 2,
      alignment: 'justify'
    }
  ]
};
