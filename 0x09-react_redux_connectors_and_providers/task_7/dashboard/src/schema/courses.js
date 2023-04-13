import { schema, normalize } from 'normalizr';

const courses = new schema.Entity('courses');

export function courseNormalizer(data) {
    return normalize(data, [courses]).entities.courses;
}