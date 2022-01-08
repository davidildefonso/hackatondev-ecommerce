/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { closeConnection, connect } from '../db/conection';
import mongoose from 'mongoose';
import  Product  from '../db/models/Product';
import { initialProducts, productsInDb } from './test_helper';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

// describe("on start up api", () => {
// 	it('request to /ping  should return "pong" and  status code 200', async () => {			
// 		const response =  await chai.request(app).get('/api/ping');
// 		response.should.have.status(200);	
// 		expect(response.text).eql("pong");		
//     });
// });


describe("test Movies ", () => {

	beforeEach(async () => {		
		await  connect();				
	});

	it("all films are returned", async () => {		
		const response = await chai.request(app).get('/api/test/search');		
		response.should.have.status(200);
		console.log(response.body.length);
		expect(response.body).to.have.lengthOf(23530);
	});

	it("search by movie title returns filtered films ", async () => {
		const title = "Little Big League";
		const response = await chai.request(app).get(`/api/test/search/${title}`);
		response.should.have.status(200);	
		expect(response.body).not.to.have.lengthOf(23530);
	});


	after(async () => {
		await closeConnection();
	});

});


// describe("Products ", () => {
// 	beforeEach(async () => {		
// 		await  connect();
// 		await Product.deleteMany({});			

// 		for(const product of initialProducts){
// 			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// 			const productObject   = new Product(product);			
// 			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
// 			await productObject.save();
// 		}			
// 	});


// 	it("all products are returned", async () => {
// 		const response = await chai.request(app).get('/api/products');
// 		response.should.have.status(200);
// 		expect(response.body).to.have.lengthOf(initialProducts.length);
// 		expect(response.body[0].name).eql('Reloj US Polo Asnn Casual US9281');
// 	});

// 	it("a single product can be returned", async () => {
// 		const products  = await productsInDb();	
// 		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
// 		const id = products[0]._id.toString();		
// 		const response = await chai.request(app).get(`/api/products/${id}`);
// 		response.should.have.status(200);
// 		expect(response.body).to.exist;
// 		expect(response.body.name).eql('Reloj US Polo Asnn Casual US9281');
// 	});


// 	after(async () => {
// 		await closeConnection();
// 	});

// });





