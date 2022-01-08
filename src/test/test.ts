/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import {  productsInDb } from './test_helper';
import { connectDb, closeConnectionDb } from '../db/mongoConnection';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe("on start up api", () => {
	it('request to /ping  should return "pong" and  status code 200', async () => {			
		const response =  await chai.request(app).get('/api/ping');
		response.should.have.status(200);	
		expect(response.text).eql("pong");		
    });
});




describe("Products ", () => {
	beforeEach(async () => {		
		await connectDb();	
		// await Product.deleteMany({});			

		// for(const product of initialProducts){
		// 	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		// 	const productObject   = new Product(product);			
		// 	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		// 	await productObject.save();
		// }			
	});


	it("all products are returned", async () => {
		const response = await chai.request(app).get('/api/products');
		response.should.have.status(200);
		expect(response.body).to.have.lengthOf(2);
		expect(response.body[0].name).eql('Reloj US Polo Asnn Casual US9281');
	});

	it("a single product can be returned", async () => {
		const products  = await productsInDb();	
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		const id = products[0]._id.toString();	
		const response = await chai.request(app).get(`/api/products/${id}`);
		response.should.have.status(200);
		expect(response.body).to.exist;
		expect(response.body.name).eql('Reloj US Polo Asnn Casual US9281');
	});

	it("search by query title returns filtered products ", async () => {
		const query = "MishkaG";
		const response = await chai.request(app).get(`/api/products/search/${query}`);
		response.should.have.status(200);	
		expect(response.body).not.to.have.lengthOf(2);
		expect(response.body).to.have.lengthOf(1);
		expect(response.body[0].name).to.contain(query);
	});

	afterEach(async () => {
		await closeConnectionDb();
	});

});








