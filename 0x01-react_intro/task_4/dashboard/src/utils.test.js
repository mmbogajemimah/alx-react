import { getFullYear, getLatestNotification } from './utils';
import { getFooterCopy } from './utils';


test("getFullYear should return the current year", () => {
    const currentYear = new Date().getFullYear();
    const results = getFullYear();
    expect(results).toBe(currentYear);
});

test("getFooterCopy should return 'Holberton School' when argument is true", () => {
    const results = getFooterCopy(true);
    expect(results).toBe('Holberton School');
});

test("getFooterCopy should return 'Holberton School main dashboard' when argument is true", () => {
    const results = getFooterCopy(false);
    expect(results).toBe('Holberton School main dashboard');
});

test("getLatestNotification should return a non-empty string", () => {
    const results = getLatestNotification();
    expect(results).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    expect(results.length).toBeGreaterThan(0);
});