import { expect } from 'chai';
import sinon from 'sinon';

import action from '../../src/4.spy';

describe('Spy', function() {
	it('Should exist', function() {
		expect(action).to.exist;
	});

	it('Should execute function', function() {
		let called = false,
			param;

		action(function(p) {
			called = true;
			param = p;
		});

		expect(called).to.equals(true);
		expect(param).to.equal(1);
	});

	it('Should execute function (spy)', function() {
		let spy = sinon.spy();

		sinon.spy(Math, 'cos');

		action(spy);
		expect(spy.callCount).to.equals(1);
		expect(spy.calledWith(1)).to.equals(true);
		expect(Math.cos.callCount).to.equals(1);
		expect(Math.cos.calledWith(0)).to.equals(true);

		Math.cos.restore();
	});
});
