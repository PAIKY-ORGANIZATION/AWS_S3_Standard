import { describe, it, expect, vi, beforeEach, afterAll, test } from "vitest";
import request  from 'supertest'
import app from '../src/app-setup.ts'



test('Should load test.env', ()=>{
    expect(process.env.TEST_VAR).toBe('TESTING');
})


//$ Test AWS write
test('Should not fail for /put-object-single', async() => {

    const testBuffer = Buffer.from('test')

    const result = await request(app).put('/api/put-object-single').attach('myFieldKey', testBuffer, 'myFile.txt');
    
    expect(result.body).toEqual({message: 'Successfully uploaded file', success: true, data: expect.any(Object)});


});

//$ Test Multer validation for wrong field
test('Multer should reject wrong field in /put-object-single', async() => {

    const testBuffer = Buffer.from('test')

    const result = await request(app).put('/api/put-object-single').attach('testWrongKey', testBuffer, 'myFile.txt');
    
    expect(result.body).toEqual({message: 'Unexpected field', success: false, error: null});

});


// $ Test Multer validation for >10MB file
test('Multer should reject wrong field in /put-object-single', async() => {

    const testBuffer = Buffer.alloc(10 * 1024 * 1024 + 1)

    const result = await request(app).put('/api/put-object-single').attach('myFieldKey', testBuffer, 'myFile.txt');
    
    expect(result.body).toEqual({message: 'File too large', success: false, error: null});

});




//$ Test Zod validation
test('Zod should reject name-less file in /put-object-single', async() => {
    const testBuffer = Buffer.from('test')

    const result = await request(app).put('/api/put-object-single').attach('myFieldKey', testBuffer);
    
    expect(result.body).toEqual({message: ["File is required"], success: false, error: null});
});

//$ Should list files
//! This depends on "put-object-single" test
test('Should list files in /list-all-objects', async() => {
    const result = await request(app).get('/api/list-all-objects');
    
    expect(result.body).toEqual({message: 'Successfully retrieved all objects.', success: true, data: expect.any(Array)});
});