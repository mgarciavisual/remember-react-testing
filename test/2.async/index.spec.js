import { expect } from 'chai';

import delayedRemove from '../../src/2.async';

describe('Async', function() {
	it('Should exist', function() {
		expect(delayedRemove).to.exist;
	});

	it('Should remove the last element after 50ms', function(done) {
		let items = [1, 2, 3];

		delayedRemove(items, 50);
		setTimeout(() => {
			expect(items).to.have.lengthOf(2);
			done();
		}, 60);
	});

	it('Should remove the last element after 1500ms', function(done) {
		let items = [1, 2, 3];

		delayedRemove(items, 1500);
		setTimeout(() => {
			expect(items).to.have.lengthOf(2);
			done();
		}, 1510);
	});

	it('Should remove the last element after 2500ms', function(done) {
		this.timeout(3000);

		let items = [1, 2, 3];

		delayedRemove(items, 2500);
		setTimeout(() => {
			expect(items).to.have.lengthOf(2);
			done();
		}, 2510);
	});

	it('Should remove the last element after default timeout value', function(done) {
		let items = [1, 2, 3];

		delayedRemove(items);
		setTimeout(() => {
			expect(items).to.have.lengthOf(2);
			done();
		}, 160);
	});
});