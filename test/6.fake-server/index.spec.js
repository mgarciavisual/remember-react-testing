import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';

import getPostContent from '../../src/6.fake-server';

describe('Fake Server', function() {
	let server,
		response;

	beforeEach(function() {
		// Configure the default response.
		response = { status: 200, data: { body: 'body' } };

		server = sinon.fakeServer.create();
		server.autoRespond = true;
		server.respondWith(function(xhr) {
			xhr.respond(response.status, {
				'Content-Type': 'application/json'
			}, JSON.stringify(response.data));
		});
	});

	afterEach(function() {
		server.restore();
	});

	it('Should exist', function() {
		expect(getPostContent).to.exist;
		expect(getPostContent).to.be.a('function');
	});

	it('Should get the post with a given id', function(done) {
		getPostContent(1).then(data => {
			expect(data).to.equals('body');
			done();
		});
	});

	it('Should get the post with a given id (return promise)', function() {
		return getPostContent(1).then(data => {
			expect(data).to.equals('body');
		});
	});

	it('Should get empty body if something goes wrong', function() {
		response = { status: 404, data: {} };

		return getPostContent(1).then(data => {
			expect(data).to.equals('');
		});
	});

	it('Should get the post with a given id (advanced)', function() {
		sinon.stub(axios, 'get', function(url) {
			return Promise.resolve({ data: { body: 'A completely new body' } });
		});

		return getPostContent(1).then(data => {
			expect(data).to.equals('A completely new body');
			axios.get.restore();
		});
	});
});
