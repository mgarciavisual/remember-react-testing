import { expect } from 'chai';

import Person from '../../src/1.basic';

describe('Basic', function() {
	it('Should exist', function() {
		expect(Person).to.exist;

		expect(Person).not.to.equal(undefined);
		expect(Person).not.to.equal(null);

		expect(Person).to.be.a('function');
	});

	it('Should be able to create a new instance', function() {
		const homer = new Person();

		expect(homer).to.exist;
		expect(homer).to.be.an('object');
	});

	it('Should be able to initialize the instance fields', function() {
		const homer = new Person('Homer', 'Simpson');

		expect(homer.name).to.equals('Homer');
		expect(homer.surname).to.equals('Simpson');
	});

	it('Should be able to retrieve the full name', function() {
		const homer = new Person('Homer', 'Simpson');

		expect(homer.getFullName()).to.equals('Homer Simpson');
	});
});
