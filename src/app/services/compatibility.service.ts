export class CompatibilityService {
    private static readonly TEST_KEY = 'TEST_KEY';

    static isLocalStorageAccessible(): boolean {
        try {
            localStorage.setItem(CompatibilityService.TEST_KEY, '');
            localStorage.removeItem(CompatibilityService.TEST_KEY);
            return true;
        } catch (e) {
            return false;
        }
    }
}
