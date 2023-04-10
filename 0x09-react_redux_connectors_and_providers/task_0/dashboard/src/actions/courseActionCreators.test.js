import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('courseActionCreators', () => {
    describe('selectCourse', () => {
        it("should return the correct action object", () => {
            const index = 1;
            const expectedAction = {
                type: SELECT_COURSE,
                index,
            };
            expect(selectCourse(index)).toEqual(expectedAction);
        });
    });

    describe('unSelectedCourse', () => {
        it('should return the correct action object', () => {
            const index = 1;
            const expectedAction = {
                type: UNSELECT_COURSE,
                index,
            };
            expect(unSelectCourse(index)).toEqual(expectedAction);
        });
    });
});
