const data = [
  {
    id: 1,
    title: 'first book',
    publicationDate: '10-08-2002',
    otherNames: ['ololade', 'oluakemi', 'shogbaike'],
  },
  {
    id: 2,
    title: 'second book',
    publicationDate: '10-08-2003',
    otherNames: ['oluwapelumi', 'michael', 'orebayo'],
  },
  {
    id: 3,
    title: 'Third book',
    publicationDate: '10-08-2004',
    otherNames: ['sweet', 'fantasy', 'novel'],
  },
];
function getBooks() {
  return data;
}
function getBook(id) {
  return data.find(function (book) {
    return book.id == id;
  });
}
console.log(getBook(1));
const books = getBooks();
books;
const bookTitle = getBook(1);
const { title, publicationDate, otherNames } = bookTitle;

console.log(title, publicationDate, otherNames);
const [primaryOtherNames, ...otherName] = otherNames;
console.log(primaryOtherNames, otherName);
//adding olamilekan to the otherNames using spread operator
const newOtherNames = [...otherNames, 'olamilekan'];
console.log(newOtherNames);

// template literals
const summary = `${title} is a book`;
summary;

const myCourses = [
  {
    id: 1,
    courseCode: 'CSC454',
    courseTitle: 'complierconstruction',
    unit: '3 unit',
    courseStatus: ['core'],
  },
  {
    id: 2,
    courseCode: 'CSC420',
    courseTitle: 'software engineering',
    unit: '3 unit',
    courseStatus: ['core'],
  },
  {
    id: 3,
    courseCode: 'CSC425',
    courseTitle: 'data mining',
    unit: '2 unit',
    courseStatus: ['core'],
  },
];
function getCourses() {
  return myCourses;
}
function getCourse(id) {
  return myCourses.find(function (course) {
    return course.id == id;
  });
}
console.log(myCourses);
// const courses = getCourse(1);
// const { courseCode, courseTitle, unit, courseStatus } = courses;
// courses;
const courses = getCourse(1);
const { id, courseCode, courseTitle, unit, courseStatus } = courses;
courses;
const summaryUpdate = `hello ${courseTitle.split('-')[0]}${
  courseCode.split('-')[0]
} `;
summaryUpdate;
// // const [newcourseStatus] = courseStatus;
// const statusUpdate = [...courseStatus, 'required'];
// statusUpdate;
// trying for each
// const allCourses = getCourses();
// const { courseCode, courseTitle, unit, courseStatus } = allCourses;
// allCourses;
//
// allCourses.forEach(function (course) {
//   course.courseStatus.push('required');
// });
// console.log(allCourses);
//ternaries operator is used when you are unable to use if else statement inside a template string
const idRange = id > 100 ? 'hello' : ' lade';

idRange;
//arrow functions and map
const myArray = [1, 2, 3, 4];
const newArray = myArray.map((num) => num * 2);
console.log(newArray);

const newCourses = getCourses();
const courseTitles = newCourses.map((title) => title.courseTitle);
console.log(courseTitles);
const essentialDates = newCourses.map((title) => ({
  courseTitle: title.courseTitle,
  courseCode: title.courseCode,
}));
console.log(essentialDates);
const filterCourse = newCourses.filter((title) => title.id > 1);
console.log(filterCourse);
const sortArray = [3, 4, 5, 2, 7, 8, 1, 9];
const sortedArray = sortArray.slice().sort((a, b) => a - b);
sortedArray;
sortArray;
// to add an object to an existing array
const courseUpdate = {
  id: 4,
  courseCode: 'CSC426',
  courseTitle: 'parallel computing',
  unit: '2 unit',
  courseStatus: ['core'],
};
const courseAdd = [...myCourses, courseUpdate];
courseAdd;
//To delete an object from an array
const courseDelete = courseAdd.filter((course) => course.id !== 3);
courseDelete;
//
const courseUpdated = courseDelete.map((course) => course);
courseUpdated;
