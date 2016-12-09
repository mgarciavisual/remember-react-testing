import { expect } from 'chai';
import sinon from 'sinon';

import delayedRemove from '../../src/3.fake-timer';

describe('Fake timer', function() {
	let clock;

	beforeEach(function() {
		clock = sinon.useFakeTimers();
	});

	afterEach(function() {
		clock.restore();
	});

	it('Should exist', function() {
		expect(delayedRemove).to.exist;
	});

	it('Should remove the last element after 50ms', function() {
		let items = [1, 2, 3];

		delayedRemove(items, 50);
		clock.tick(51);
		expect(items).to.have.lengthOf(2);
	});

	it('Should remove the last element after 1500ms', function() {
		let items = [1, 2, 3];

		delayedRemove(items, 1500);
		clock.tick(1501);
		expect(items).to.have.lengthOf(2);
	});

	it('Should remove the last element after default timeout value', function() {
		let items = [1, 2, 3];

		delayedRemove(items);
		clock.tick(151);
		expect(items).to.have.lengthOf(2);
	});
});