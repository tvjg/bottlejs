/* globals Bottle */
;(function(undefined) {
    'use strict';

    /**
     * Bottle Pop test suite
     */
    describe('Bottle#pop', function() {
        it('creates a new instance', function() {
            expect(Bottle.pop() instanceof Bottle).toBe(true);
        });
        it('will return a new instance each time it is called', function() {
            expect(Bottle.pop()).not.toBe(Bottle.pop());
        });
        it('will return the same instance when a name is passed', function() {
            expect(Bottle.pop('Soda')).toBe(Bottle.pop('Soda'));
            expect(Bottle.pop('Pop')).toBe(Bottle.pop('Pop'));
            expect(Bottle.pop('Soda')).not.toBe(Bottle.pop('Pop'));
        });
        it('will not have name if not passed a name parameter', function() {
            var bottle = Bottle.pop();
            expect(bottle.container.BOTTLE_NAME).toBe(undefined);
        });
        it('will make the instance name available when a name is passed', function() {
            var bottle = Bottle.pop('Soda');
            expect(bottle.container.BOTTLE_NAME).toBe('Soda');
        });
    });
}());
