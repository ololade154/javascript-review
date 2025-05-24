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
// // const [newcourseStatus] = courseStatus;
// const statusUpdate = [...courseStatus, 'required'];
// statusUpdate;
// trying for each
const allCourses = getCourses();
const { courseCode, courseTitle, unit, courseStatus } = allCourses;
allCourses;

allCourses.forEach(function (course) {
  course.courseStatus.push('required');
});
console.log(allCourses);
