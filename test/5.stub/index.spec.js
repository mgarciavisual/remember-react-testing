import { expect } from 'chai';
import sinon from 'sinon';

import openWindow from '../../src/5.stub';

describe('Stub', function() {
	beforeEach(function() {
		sinon.stub(window, 'open');
	});

	afterEach(function() {
		window.open.restore();
	});

	it('Should exist', function() {
		expect(openWindow).to.exit;
	});

	it('Should open a URL with the provided URL and title', function() {
		openWindow('www.zara.com', 'A totally random URL');
		expect(window.open.callCount).to.equals(1);
		
		let args = window.open.lastCall.args;
		expect(args[0]).to.equals('www.zara.com');
		expect(args[1]).to.equals('A totally random URL');
	});

	it('Should open a URL with the default title', function() {
		openWindow('www.zara.com');
		expect(window.open.callCount).to.equals(1);
		
		let args = window.open.lastCall.args;
		expect(args[0]).to.equals('www.zara.com');
		expect(args[1]).to.equals('');
	});

	it('Should do nothing if no URL provided', function() {
		openWindow();
		expect(window.open.callCount).to.equals(0);
	});
});
