const { SELECT_COURSE, UNSELECT_COURSE } = require("./courseActionTypes");

export function selectCourse(index) {
    return {
        type: SELECT_COURSE,
        index: index,
    };
};

export function unSelectCourse(index) {
    return {
        type: UNSELECT_COURSE,
        index: index,
    };
};