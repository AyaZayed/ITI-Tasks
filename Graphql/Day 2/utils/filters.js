function filterStudents(students, filter) {
        if (!filter) return students;

        return students.filter(student => {
                if (filter.major && student.major !== filter.major) return false;
                if (filter.nameContains && !student.name.toLowerCase().includes(filter.nameContains.toLowerCase())) return false;
                if (filter.emailContains && !student.email.toLowerCase().includes(filter.emailContains.toLowerCase())) return false;
                if (filter.minAge && student.age < filter.minAge) return false;
                if (filter.maxAge && student.age > filter.maxAge) return false;
                return true;
        });
}

function filterCourses(courses, filter) {
        if (!filter) return courses;

        return courses.filter(course => {
                if (filter.codePrefix && !course.code.toUpperCase().startsWith(filter.codePrefix.toUpperCase())) return false;
                if (filter.titleContains && !course.title.toLowerCase().includes(filter.titleContains.toLowerCase())) return false;
                if (filter.instructor && course.instructor !== filter.instructor) return false;
                if (filter.minCredits && course.credits < filter.minCredits) return false;
                if (filter.maxCredits && course.credits > filter.maxCredits) return false;
                return true;
        });
}

function sortAndPaginate(items, options) {
        if (!options) return items;

        let result = [...items];

        if (options.sortBy) {
                const sortOrder = options.sortOrder === "ASC" ? 1 : -1;
                result.sort((a, b) => {
                        const aVal = a[options.sortBy];
                        const bVal = b[options.sortBy];
                        if (aVal < bVal) return -1 * sortOrder;
                        if (aVal > bVal) return 1 * sortOrder;
                        return 0;
                });
        }

        const offset = options.offset || 0;
        const limit = Math.min(options.limit || 10, 50);

        return result.slice(offset, offset + limit);
}