const COL_FIO_TITLE = 'ФИО';
const COL_BIRTHDAY_TITLE = 'ДР';
const COL_FACULTY_TITLE = 'Факультет';
const COL_LEARN_YEARS_TITLE = 'Годы обучения';
const LOCAL_STORAGE_KEY = 'ddStudentsList';

function createAppTitle(title) {
  const appTitle = document.createElement('h1');
  appTitle.style.textAlign = 'center';
  appTitle.style.marginBottom = '50px';
  appTitle.innerHTML = title;
  return appTitle;
}

function createNewStudentForm() {
  const form = document.createElement('form');
  const formTitle = document.createElement('h5');
  const wrapperMb3Surname = document.createElement('div');
  const wrapperMb10Surname = document.createElement('div');
  const labelForSurname = document.createElement('label');
  const inputSurname = document.createElement('input');

  wrapperMb3Surname.classList.add('row', 'mb-3');
  inputSurname.id = 'surname';
  labelForSurname.classList.add('col-sm-2', 'col-form-label');
  labelForSurname.for = 'surname';
  labelForSurname.textContent = 'Фамилия';
  wrapperMb10Surname.classList.add('mb-10');
  wrapperMb10Surname.append(inputSurname);
  wrapperMb3Surname.append(labelForSurname);
  wrapperMb3Surname.append(wrapperMb10Surname);

  const wrapperMb3Name = document.createElement('div');
  const wrapperMb10Name = document.createElement('div');
  const labelForName = document.createElement('label');
  const inputName = document.createElement('input');

  wrapperMb3Name.classList.add('row', 'mb-3');
  inputName.id = 'name';
  labelForName.classList.add('col-sm-2', 'col-form-label');
  labelForName.for = 'name';
  labelForName.textContent = 'Имя';
  wrapperMb10Name.classList.add('mb-10');
  wrapperMb10Name.append(inputName);
  wrapperMb3Name.append(labelForName);
  wrapperMb3Name.append(wrapperMb10Name);

  const wrapperMb3Patronymic = document.createElement('div');
  const wrapperMb10Patronymic = document.createElement('div');
  const labelForPatronymic = document.createElement('label');
  const inputPatronymic = document.createElement('input');

  wrapperMb3Patronymic.classList.add('row', 'mb-3');
  inputPatronymic.id = 'patronymic';
  labelForPatronymic.classList.add('col-sm-2', 'col-form-label');
  labelForPatronymic.for = 'patronymic';
  labelForPatronymic.textContent = 'Отчество';
  wrapperMb10Patronymic.classList.add('mb-10');
  wrapperMb10Patronymic.append(inputPatronymic);
  wrapperMb3Patronymic.append(labelForPatronymic);
  wrapperMb3Patronymic.append(wrapperMb10Patronymic);

  const wrapperMb3Birthday = document.createElement('div');
  const wrapperMb10Birthday = document.createElement('div');
  const labelForBirthday = document.createElement('label');
  const inputBirthday = document.createElement('input');

  wrapperMb3Birthday.classList.add('row', 'mb-3');
  inputBirthday.id = 'birthday';
  inputBirthday.type = 'date';
  inputBirthday.min = '1900-01-01';
  labelForBirthday.classList.add('col-sm-2', 'col-form-label');
  labelForBirthday.for = 'birthday';
  labelForBirthday.textContent = 'Дата рождения';
  wrapperMb10Birthday.classList.add('mb-10');
  wrapperMb10Birthday.append(inputBirthday);
  wrapperMb3Birthday.append(labelForBirthday);
  wrapperMb3Birthday.append(wrapperMb10Birthday);

  const wrapperMb3YearOfStart = document.createElement('div');
  const wrapperMb10YearOfStart = document.createElement('div');
  const labelForYearOfStart = document.createElement('label');
  const inputYearOfStart = document.createElement('input');

  wrapperMb3YearOfStart.classList.add('row', 'mb-3');
  inputYearOfStart.id = 'yearOfStart';
  inputYearOfStart.type = 'number';
  inputYearOfStart.min = '2000';
  labelForYearOfStart.classList.add('col-sm-2', 'col-form-label');
  labelForYearOfStart.for = 'yearOfStart';
  labelForYearOfStart.textContent = 'Год начала обучения';
  wrapperMb10YearOfStart.classList.add('mb-10');
  wrapperMb10YearOfStart.append(inputYearOfStart);
  wrapperMb3YearOfStart.append(labelForYearOfStart);
  wrapperMb3YearOfStart.append(wrapperMb10YearOfStart);

  const wrapperMb3Faculty = document.createElement('div');
  const wrapperMb10Faculty = document.createElement('div');
  const labelForFaculty = document.createElement('label');
  const inputFaculty = document.createElement('input');

  wrapperMb3Faculty.classList.add('row', 'mb-3');
  inputFaculty.id = 'faculty';
  labelForFaculty.classList.add('col-sm-2', 'col-form-label');
  labelForFaculty.for = 'faculty';
  labelForFaculty.textContent = 'Факультет';
  wrapperMb10Faculty.classList.add('mb-10');
  wrapperMb10Faculty.append(inputFaculty);
  wrapperMb3Faculty.append(labelForFaculty);
  wrapperMb3Faculty.append(wrapperMb10Faculty);

  const errorMessage = document.createElement('ul');
  const button = document.createElement('button');

  form.style.marginBottom = '30px';
  formTitle.innerHTML = 'Добавьте нового студента в список';
  formTitle.style.marginBottom = '30px';
  errorMessage.style.color = 'red';
  button.classList.add('btn', 'btn-primary');
  button.textContent = 'Добавить';

  form.append(formTitle);
  form.append(wrapperMb3Surname);
  form.append(wrapperMb3Name);
  form.append(wrapperMb3Patronymic);
  form.append(wrapperMb3Birthday);
  form.append(wrapperMb3YearOfStart);
  form.append(wrapperMb3Faculty);
  form.append(errorMessage);
  form.append(button);

  return {
    form,
    inputSurname,
    inputName,
    inputPatronymic,
    inputBirthday,
    inputYearOfStart,
    inputFaculty,
    errorMessage,
    button,
  };
}

function createFiltersForm() {
  const form = document.createElement('form');
  const formTitle = document.createElement('h5');

  const wrapperMb3FIO = document.createElement('div');
  const wrapperMb10FIO = document.createElement('div');
  const labelForFIO = document.createElement('label');
  const inputFIO = document.createElement('input');
  const buttonCleanFIO = document.createElement('button');

  wrapperMb3FIO.classList.add('row', 'mb-3');
  inputFIO.id = 'fio';
  inputFIO.placeholder = 'поиск по подстроке';
  labelForFIO.classList.add('col-sm-2', 'col-form-label');
  labelForFIO.for = 'fio';
  labelForFIO.textContent = 'ФИО';
  buttonCleanFIO.classList.add('btn', 'btn-secondary', 'btn-sm');
  buttonCleanFIO.textContent = 'Очистить';
  wrapperMb10FIO.classList.add('mb-10');
  wrapperMb10FIO.append(inputFIO);
  wrapperMb10FIO.append(buttonCleanFIO);
  wrapperMb3FIO.append(labelForFIO);
  wrapperMb3FIO.append(wrapperMb10FIO);

  const wrapperMb3Faculty = document.createElement('div');
  const wrapperMb10Faculty = document.createElement('div');
  const labelForFaculty = document.createElement('label');
  const inputFaculty = document.createElement('input');
  const buttonCleanFaculty = document.createElement('button');

  wrapperMb3Faculty.classList.add('row', 'mb-3');
  inputFaculty.id = 'faculty';
  inputFaculty.placeholder = 'поиск по подстроке';
  labelForFaculty.classList.add('col-sm-2', 'col-form-label');
  labelForFaculty.for = 'faculty';
  labelForFaculty.textContent = 'Факультет';
  buttonCleanFaculty.classList.add('btn', 'btn-secondary', 'btn-sm');
  buttonCleanFaculty.textContent = 'Очистить';
  wrapperMb10Faculty.classList.add('mb-10');
  wrapperMb10Faculty.append(inputFaculty);
  wrapperMb10Faculty.append(buttonCleanFaculty);
  wrapperMb3Faculty.append(labelForFaculty);
  wrapperMb3Faculty.append(wrapperMb10Faculty);

  const wrapperMb3YearOfStart = document.createElement('div');
  const wrapperMb10YearOfStart = document.createElement('div');
  const labelForYearOfStart = document.createElement('label');
  const inputYearOfStart = document.createElement('input');
  const buttonCleanYearOfStart = document.createElement('button');

  wrapperMb3YearOfStart.classList.add('row', 'mb-3');
  inputYearOfStart.id = 'yearOfStart';
  inputYearOfStart.type = 'number';
  inputYearOfStart.min = '2000';
  inputYearOfStart.placeholder = 'точное совпадение';
  labelForYearOfStart.classList.add('col-sm-2', 'col-form-label');
  labelForYearOfStart.for = 'yearOfStart';
  labelForYearOfStart.textContent = 'Год начала обучения';
  buttonCleanYearOfStart.classList.add('btn', 'btn-secondary', 'btn-sm');
  buttonCleanYearOfStart.textContent = 'Очистить';
  wrapperMb10YearOfStart.classList.add('mb-10');
  wrapperMb10YearOfStart.append(inputYearOfStart);
  wrapperMb10YearOfStart.append(buttonCleanYearOfStart);
  wrapperMb3YearOfStart.append(labelForYearOfStart);
  wrapperMb3YearOfStart.append(wrapperMb10YearOfStart);

  const wrapperMb3YearOfEnd = document.createElement('div');
  const wrapperMb10YearOfEnd = document.createElement('div');
  const labelForYearOfEnd = document.createElement('label');
  const inputYearOfEnd = document.createElement('input');
  const buttonCleanYearOfEnd = document.createElement('button');

  wrapperMb3YearOfEnd.classList.add('row', 'mb-3');
  inputYearOfEnd.id = 'yearOfEnd';
  inputYearOfEnd.type = 'number';
  inputYearOfEnd.min = '2000';
  inputYearOfEnd.placeholder = 'точное совпадение';
  labelForYearOfEnd.classList.add('col-sm-2', 'col-form-label');
  labelForYearOfEnd.for = 'yearOfEnd';
  labelForYearOfEnd.textContent = 'Год окончания обучения';
  buttonCleanYearOfEnd.classList.add('btn', 'btn-secondary', 'btn-sm');
  buttonCleanYearOfEnd.textContent = 'Очистить';
  wrapperMb10YearOfEnd.classList.add('mb-10');
  wrapperMb10YearOfEnd.append(inputYearOfEnd);
  wrapperMb10YearOfEnd.append(buttonCleanYearOfEnd);
  wrapperMb3YearOfEnd.append(labelForYearOfEnd);
  wrapperMb3YearOfEnd.append(wrapperMb10YearOfEnd);

  form.style.marginBottom = '30px';
  formTitle.innerHTML = 'Фильтровать список по:';

  form.append(formTitle);
  form.append(wrapperMb3FIO);
  form.append(wrapperMb3Faculty);
  form.append(wrapperMb3YearOfStart);
  form.append(wrapperMb3YearOfEnd);

  return {
    form,
    inputFIO,
    buttonCleanFIO,
    inputFaculty,
    buttonCleanFaculty,
    inputYearOfStart,
    buttonCleanYearOfStart,
    inputYearOfEnd,
    buttonCleanYearOfEnd,
  };
}

function createStudentsTable() {
  const table = document.createElement('table');
  table.style.marginBottom = '50px';
  table.classList.add('table', 'table-bordered', 'table-sm');
  const thead = document.createElement('thead');
  const tr0 = document.createElement('tr');
  const colFIO = document.createElement('th');
  colFIO.textContent = COL_FIO_TITLE;
  colFIO.style.width = '30%';
  colFIO.style.cursor = 'pointer';
  const colFaculty = document.createElement('th');
  colFaculty.textContent = COL_FACULTY_TITLE;
  colFaculty.style.cursor = 'pointer';
  const colBirthday = document.createElement('th');
  colBirthday.textContent = COL_BIRTHDAY_TITLE;
  colBirthday.style.cursor = 'pointer';
  const colLearnYears = document.createElement('th');
  colLearnYears.textContent = COL_LEARN_YEARS_TITLE;
  colLearnYears.style.cursor = 'pointer';
  const tbody = document.createElement('tbody');
  tr0.append(colFIO);
  tr0.append(colFaculty);
  tr0.append(colBirthday);
  tr0.append(colLearnYears);
  thead.append(tr0);
  table.append(thead);
  table.append(tbody);

  return {
    table,
    colFIO,
    colFaculty,
    colBirthday,
    colLearnYears,
    tbody,
  };
}

function createStudentObj(name, surname, patronymic, birthday, yearOfStart, faculty) {
  return {
    name,
    surname,
    patronymic,
    birthday,
    yearOfStart,
    faculty,
  };
}

function getAgeInfo(birthday) {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - birthday.getTime();

  return `${String(birthday.getDate()).padStart(2, '0')}.${String(Number(birthday.getMonth() + 1)).padStart(2, '0')}.${birthday.getFullYear()} (${Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25)}) лет`;
}

function getCourseInfo(yearOfStart) {
  const yearOfEnd = yearOfStart + 4;
  let courseInfo = 'закончил';
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  if (((nowYear < yearOfEnd) && (nowMonth < 8)) || ((nowYear === yearOfEnd) && (nowMonth < 8))) {
    courseInfo = `${(nowYear - yearOfStart)} курс`;
  } else if ((nowYear < yearOfEnd) && (nowMonth >= 8)) {
    courseInfo = `${(nowYear - yearOfStart + 1)} курс`;
  }
  return `${yearOfStart}-${yearOfEnd} (${courseInfo})`;
}

function createStudentTr(studentObj) {
  const tr = document.createElement('tr');
  const colFIO = document.createElement('td');
  colFIO.textContent = `${studentObj.surname} ${studentObj.name} ${studentObj.patronymic}`;
  const colFaculty = document.createElement('td');
  colFaculty.textContent = studentObj.faculty;
  const colBirthday = document.createElement('td');
  const birthday = new Date(studentObj.birthday);
  colBirthday.textContent = getAgeInfo(birthday);
  const colLearnYears = document.createElement('td');
  colLearnYears.textContent = getCourseInfo(studentObj.yearOfStart);

  tr.append(colFIO);
  tr.append(colFaculty);
  tr.append(colBirthday);
  tr.append(colLearnYears);

  return {
    tr,
  };
}

function fullStudentsTable(studentsTable, studentsArr) {
  for (const student of studentsArr) {
    const studentTr = createStudentTr(student);
    studentsTable.tbody.append(studentTr.tr);
  }
}

function clearStudentsTable(studentsTable) {
  studentsTable.tbody.textContent = '';
}

function byNumberField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

function byStringField(...fields) {
  return (a, b) => {
    const collator = new Intl.Collator();
    let str1 = '';
    let str2 = '';
    for (const field of fields) {
      str1 += (a[field]).toLowerCase();
      str2 += (b[field]).toLowerCase();
    }
    return collator.compare(str1, str2);
  };
}

function addStudentToStorage(studentObj) {
  let studentsArr = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
  if (studentsArr === null) {
    studentsArr = [];
  }
  studentsArr.push(studentObj);
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(studentsArr));
}

function filterTable(filtersForm, studentsTable, lStorageStudents) {
  let someStudents = lStorageStudents;
  if (filtersForm.inputFIO.value) {
    someStudents = someStudents.filter((line) => (line.surname + line.name + line.patronymic)
      .toLowerCase()
      .includes(filtersForm.inputFIO.value.trim().split(' ').join('').toLowerCase()));
  }
  if (filtersForm.inputFaculty.value) {
    someStudents = someStudents.filter((line) => line.faculty.toLowerCase()
      .includes(filtersForm.inputFaculty.value.trim().toLowerCase()));
  }
  if (filtersForm.inputYearOfStart.value) {
    someStudents = someStudents
      .filter((line) => line.yearOfStart === parseInt(filtersForm.inputYearOfStart.value, 10));
  }
  if (filtersForm.inputYearOfEnd.value) {
    someStudents = someStudents
      .filter((line) => parseInt(line.yearOfStart + 4, 10)
      === parseInt(filtersForm.inputYearOfEnd.value, 10));
  }
  clearStudentsTable(studentsTable);
  fullStudentsTable(studentsTable, someStudents);
  return someStudents;
}

function onlyRussianLetters(str) {
  const regex = /[а-яА-ЯёЁ]/g;
  return (str.match(regex) !== null) && (str.match(regex).length === str.length);
}

function formValidate(form) {
  let errMessage = '';
  const now = new Date();
  form.form.querySelectorAll('input').forEach((inputField) => {
    switch (inputField.id) {
      case 'surname':
        if (!inputField.value.trim()) {
          errMessage += '<li>Поле "Фамилия" обязательно для заполнения!</li>';
          break;
        }
        if (!onlyRussianLetters(inputField.value.trim())) {
          errMessage += '<li>Фамилия должна содержать только русские буквы!</li>';
          break;
        }
        break;
      case 'name':
        if (!inputField.value.trim()) {
          errMessage += '<li>Поле "Имя" обязательно для заполнения!</li>';
          break;
        }
        if (!onlyRussianLetters(inputField.value.trim())) {
          errMessage += '<li>Имя должно содержать только русские буквы!</li>';
          break;
        }
        break;
      case 'patronymic':
        if (!inputField.value.trim()) {
          errMessage += '<li>Поле "Отчество" обязательно для заполнения!</li>';
          break;
        }
        if (!onlyRussianLetters(inputField.value.trim())) {
          errMessage += '<li>Отчество должно содержать только русские буквы!</li>';
          break;
        }
        break;
      case 'birthday': {
        if (!inputField.value.trim()) {
          errMessage += '<li>Поле "Дата рождения" обязательно для заполнения!</li>';
          break;
        }
        const birthday = new Date(inputField.value);
        const minDate = new Date(1900, 1, 1);
        if (birthday.getTime() > now.getTime() || birthday.getTime() < minDate.getTime()) {
          errMessage += '<li>Дата рождения должна находиться в диапазоне от 01.01.1900 до текущей даты!</li>';
          break;
        }
        break;
      }
      case 'yearOfStart':
        if (!inputField.value.trim()) {
          errMessage += '<li>Поле "Год начала обучения" обязательно для заполнения!</li>';
          break;
        }
        if (parseInt(inputField.value, 10) < 2000
          || parseInt(inputField.value, 10) > now.getFullYear()) {
          errMessage += '<li>Год начала обучения должен находится в диапазоне от 2000-го до текущего года!</li>';
          break;
        }
        break;
      case 'faculty':
        if (!inputField.value.trim()) {
          errMessage += '<li>Поле "Факультет" обязательно для заполнения!</li>';
          break;
        }
        break;
      default:
    }
  });
  return errMessage;
}

function createStudentsList(container, title = 'Список студентов', studentsArr = []) {
  const studentsListTitle = createAppTitle(title);
  const filtersForm = createFiltersForm();
  const studentsTable = createStudentsTable();
  const newStudentForm = createNewStudentForm();
  let lStorageStudents = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
  let someStudents = [];

  container.append(studentsListTitle);
  container.append(filtersForm.form);
  container.append(studentsTable.table);
  container.append(newStudentForm.form);

  if (lStorageStudents === null) {
    lStorageStudents = [];
  }

  if (studentsArr !== null && lStorageStudents.length === 0) {
    for (const student of studentsArr) {
      lStorageStudents.push(student);
    }
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lStorageStudents));
  }

  fullStudentsTable(studentsTable, lStorageStudents);

  // фильтрация
  document.querySelectorAll('.btn-secondary').forEach((clearBtn) => {
    clearBtn.addEventListener('click', (event) => {
      clearBtn.style = 'none';
      event.preventDefault();
      clearBtn.parentNode.firstElementChild.value = '';
      someStudents = filterTable(filtersForm, studentsTable, lStorageStudents);
    });
  });

  filtersForm.form.querySelectorAll('input').forEach((filterInputField) => {
    filterInputField.addEventListener('input', () => {
      filterInputField.parentNode.lastElementChild.style.background = 'green';
      someStudents = filterTable(filtersForm, studentsTable, lStorageStudents);
    });
  });

  // сортировка по колонкам
  // по ФИО
  studentsTable.colFIO.addEventListener('click', () => {
    if (!studentsTable.colFIO.textContent.includes('(возр)')) {
      studentsTable.colFIO.textContent = `${COL_FIO_TITLE} (возр)`;
      studentsTable.colFaculty.textContent = COL_FACULTY_TITLE;
      studentsTable.colBirthday.textContent = COL_BIRTHDAY_TITLE;
      studentsTable.colLearnYears.textContent = COL_LEARN_YEARS_TITLE;
      clearStudentsTable(studentsTable);
      lStorageStudents.sort(byStringField('surname', 'name', 'patronymic'));
      if (someStudents.length !== 0 && someStudents.length < lStorageStudents.length) {
        someStudents.sort(byStringField('surname', 'name', 'patronymic'));
        fullStudentsTable(studentsTable, someStudents);
      } else {
        fullStudentsTable(studentsTable, lStorageStudents);
      }
    }
  });
  // по факультету
  studentsTable.colFaculty.addEventListener('click', () => {
    if (!studentsTable.colFaculty.textContent.includes('(возр)')) {
      studentsTable.colFIO.textContent = COL_FIO_TITLE;
      studentsTable.colFaculty.textContent = `${COL_FACULTY_TITLE} (возр)`;
      studentsTable.colBirthday.textContent = COL_BIRTHDAY_TITLE;
      studentsTable.colLearnYears.textContent = COL_LEARN_YEARS_TITLE;
      clearStudentsTable(studentsTable);
      lStorageStudents.sort(byStringField('faculty'));
      if (someStudents.length !== 0 && someStudents.length < lStorageStudents.length) {
        someStudents.sort(byStringField('faculty'));
        fullStudentsTable(studentsTable, someStudents);
      } else {
        fullStudentsTable(studentsTable, lStorageStudents);
      }
    }
  });
  // по годам обучения
  studentsTable.colLearnYears.addEventListener('click', () => {
    if (!studentsTable.colLearnYears.textContent.includes('(возр)')) {
      studentsTable.colFIO.textContent = COL_FIO_TITLE;
      studentsTable.colFaculty.textContent = COL_FACULTY_TITLE;
      studentsTable.colBirthday.textContent = COL_BIRTHDAY_TITLE;
      studentsTable.colLearnYears.textContent = `${COL_LEARN_YEARS_TITLE} (возр)`;
      clearStudentsTable(studentsTable);
      lStorageStudents.sort(byNumberField('yearOfStart'));
      if (someStudents.length !== 0 && someStudents.length < lStorageStudents.length) {
        someStudents.sort(byNumberField('yearOfStart'));
        fullStudentsTable(studentsTable, someStudents);
      } else {
        fullStudentsTable(studentsTable, lStorageStudents);
      }
    }
  });
  // по дате рождения
  studentsTable.colBirthday.addEventListener('click', () => {
    if (!studentsTable.colBirthday.textContent.includes('(возр)')) {
      studentsTable.colFIO.textContent = COL_FIO_TITLE;
      studentsTable.colFaculty.textContent = COL_FACULTY_TITLE;
      studentsTable.colBirthday.textContent = `${COL_BIRTHDAY_TITLE} (возр)`;
      studentsTable.colLearnYears.textContent = COL_LEARN_YEARS_TITLE;
      clearStudentsTable(studentsTable);
      lStorageStudents.sort(byNumberField('birthday'));
      if (someStudents.length !== 0 && someStudents.length < lStorageStudents.length) {
        someStudents.sort(byNumberField('birthday'));
        fullStudentsTable(studentsTable, someStudents);
      } else {
        fullStudentsTable(studentsTable, lStorageStudents);
      }
    }
  });

  // добавление нового студента
  newStudentForm.button.addEventListener('click', (event) => {
    event.preventDefault();
    const errMessage = formValidate(newStudentForm);
    newStudentForm.errorMessage.innerHTML = '';
    if (errMessage.length > 0) {
      newStudentForm.errorMessage.innerHTML = errMessage;
    } else {
      newStudentForm.errorMessage.innerHTML = '';
      const newStudent = createStudentObj(
        newStudentForm.inputName.value.trim(),
        newStudentForm.inputSurname.value.trim(),
        newStudentForm.inputPatronymic.value.trim(),
        newStudentForm.inputBirthday.value,
        Number(newStudentForm.inputYearOfStart.value),
        newStudentForm.inputFaculty.value.trim(),
      );
      newStudentForm.form.reset();
      addStudentToStorage(newStudent);
      lStorageStudents = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
      const studentTr = createStudentTr(newStudent);
      studentsTable.tbody.append(studentTr.tr);
      // очистка фильтров и сортировки
      studentsTable.colFIO.textContent = COL_FIO_TITLE;
      studentsTable.colFaculty.textContent = COL_FACULTY_TITLE;
      studentsTable.colBirthday.textContent = COL_BIRTHDAY_TITLE;
      studentsTable.colLearnYears.textContent = COL_LEARN_YEARS_TITLE;
      filtersForm.form.querySelectorAll('input').forEach((filterInputField) => {
        filterInputField.value = '';
        filterInputField.parentNode.lastElementChild.style = 'none';
      });
      someStudents = filterTable(filtersForm, studentsTable, lStorageStudents);
      alert('Студент успешно добавлен в список!');
    }
  });
}

window.createStudentsList = createStudentsList;
