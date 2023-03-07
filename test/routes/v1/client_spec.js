/**
 * Created by jordi on 02/12/2022.
 * 
 * To run the test:
 * 1. Start the server `npm start`
 * 2. Execute test `mocha test/routes/v1/client_spec.js --timeout 2000`
 */

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const URL= 'http://localhost:8082/v1';

const TEST_CLIENT = {
  "id": 0,
  "code": "nou",
  "dateStart": new Date(2023, 0, 1),
  "dateFinal": new Date(2023, 0, 2),
  "active": true,
  "token": "nou",
  "notes": "nou",
};

  //----------GET-----------
describe('API Client ',()=>{
  it('Tiene que devolver todos los clients', (done) => {
    chai.request(URL)
    .get('/client')
    .end(function(err, res) {
      console.log(res.body);
      expect(res).to.have.status(200);
      expect(res.body).to.have.status('OK');
      expect(res.body.data).to.be.an('array');
      expect(res.body.errors).to.be.an('array');
      expect(res.body.errors).to.be.an('array').that.eql([]);
      done();
    });
  });

  // it('Tiene que devolver un client', (done) => {
  //   chai.request(URL)
  //   .get('/client?id=1')
  //   .end(function(err, res) {
  //     //console.log(res.body);
  //     expect(res).to.have.status(200);
  //     expect(res.body).to.have.status('OK');
  //     expect(res.body.data).not.to.be.an('array');
  //     expect(res.body.data).to.be.eql({
  //       id: 1,
  //       code: "jordi",
  //       dateStart: "01/01/2023",
  //       dateFinal: "02/01/2023",
  //       active: true,
  //       token: "fer el seu fitxer",
  //       notes: "no se, notes",
  //     })
  //     expect(res.body.errors).to.be.an('array');
  //     expect(res.body.errors).to.be.an('array').that.eql([]);
  //     done();
  //   });
  // });

  // it('debe devolver 404 si la ID de entrada del client que solicitó la actualización está vacía', (done) => {
  //   chai.request(URL)
  //   .get('/client?id= ')
  //   .end(function(err, res) {
  //     //console.log(res.body);
  //     expect(res).to.have.status(404);
  //     expect(res.body).to.have.status('ERROR');
  //     expect(res.body.data).not.to.be.an('array');
  //     expect(res.body.errors).to.be.an('array');
  //     expect(res.body.errors).to.deep.equal([{
  //       code: 'CLIENT-001',
  //       message: 'Id vacia',
  //       detail: 'Ensure that the input Id is not empty',
  //       help: 'https://example.com/help/error/CLIENT-001'
  //     }]);
  //     done();
  //   });
  // });

  // it('debe devolver 404 si el client solicitado no existe', (done) => {
  //   chai.request(URL)
  //   .get('/client?id=9999')
  //   .end(function(err, res) {
  //     //console.log(res.body);
  //     expect(res).to.have.status(404);
  //     expect(res.body).to.have.status('ERROR');
  //     expect(res.body.data).not.to.be.an('array');
  //     expect(res.body.errors).to.be.an('array');
  //     expect(res.body.errors).to.deep.equal([{
  //       code: 'CLIENT-001',
  //       message: 'Id incorrecta, esta ID no existe',
  //       detail: 'Asegúrese de que la identificación incluida en la solicitud sea correcta',
  //       help: 'https://example.com/help/error/CLIENT-001'
  //     }]);
  //     done();
  //   });
  // });
/*
  //----------POST-----------
  it('Crear un nuevo client', (done) => {
    chai.request(URL)
    .post('/client')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      expect(res).to.have.status(201);
      expect(res.body).to.have.status('OK');
      expect(res.body.data).not.to.be.an('array');
      expect(res.body.errors).to.be.an('array');
      expect(res.body.errors).to.be.an('array').that.eql([]);
      done();
    });
  });

  //----------PUT-----------
  it('Actualizar un client', (done) => {
    chai.request(URL)
    .post('/container')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      expect(res).to.have.status(201);
      expect(res.body).to.have.status('OK');
      expect(res.body.data).not.to.be.an('array');
      expect(res.body.errors).to.be.an('array');
      expect(res.body.errors).to.be.an('array').that.eql([]);
      //console.log(res.body);
      chai.request(URL)
      .put(`/client?id=${res.body.data.id}`)
      .send({
        id: 1,
        code: "jordi",
        dateStart: "01/01/2023",
        dateFinal: "02/01/2023",
        active: true,
        token: "fer el seu fitxer",
        notes: "no se, notes",
      })
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.status('OK');
        expect(res.body.data).not.to.be.an('array');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors).to.be.an('array').that.eql([]);
        //console.log(res.body);
        expect(res.body.data).to.be.deep.equal({
          id: res.body.data.id,
          code: "jordi",
          dateStart: "01/01/2023",
          dateFinal: "02/01/2023",
          active: true,
          token: "fer el seu fitxer",
          notes: "no se, notes",
        })
        done();
      });
    });
  });

  it('debe devolver 404 si el client solicitado para la actualización no existe', (done) => {
    chai.request(URL)
    .put('/client?id=9999')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      //console.log(res.body);
      expect(res).to.have.status(404);
      expect(res.body).to.have.status('ERROR');
      expect(res.body.data).not.to.be.an('array');
      expect(res.body.errors).to.be.an('array');
      expect(res.body.errors).to.deep.equal([{
        code: 'CLIENTE-005',
        message: 'Cliente no encontrado',
        detail: 'Asegúrese de que la identificación del cliente incluida en la solicitud sea correcta',
        help: 'https://example.com/help/error/CLIENTE-005'
      }]);
      done();
    });
  });

  it('debe devolver 400 si la ID de entrada del client para eliminar está vacía', (done) => {
    chai.request(URL)
    .put('/client?id= ')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      //console.log(res.body);
      expect(res).to.have.status(400);
      expect(res.body).to.have.status('ERROR');
      expect(res.body.data).not.to.be.an('array');
      expect(res.body.errors).to.be.an('array');
      expect(res.body.errors).to.deep.equal([{
        code: 'CLIENTE-001',
        message: 'Falta introducir numero',
        detail: 'Asegúrese de que el ID de entrada no esté vacío',
        help: 'https://example.com/help/error/CLIENTE-001'
      }]);
      done();
    });
  });

  it('eliminar un client', (done) => {
    chai.request(URL)
    .post('/client')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      expect(res).to.have.status(201);
      expect(res.body).to.have.status('OK');
      expect(res.body.data).not.to.be.an('array');
      expect(res.body.errors).to.be.an('array');
      expect(res.body.errors).to.be.an('array').that.eql([]);
      //console.log(res.body);
      chai.request(URL)
      .delete(`/client?id=${res.body.data.id}`)
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.status('OK');
        expect(res.body.data).not.to.be.an('array');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors).to.deep.equal([]);
        done();
      });
    });
  });

  it('debe devolver 404 si el client solicitado para eliminar no existe', (done) =>{
    chai.request(URL)
    .delete('/client?id=9999')
    .end(function(err, res) {
      //console.log(res.body);
      expect(res).to.have.status(404);
      expect(res.body).to.have.status('ERROR');
      expect(res.body.data).not.to.be.an('array');
      expect(res.body.errors).to.be.an('array');
      expect(res.body.errors).to.deep.equal([{
        code: 'CLIENT-004',
        message: 'Cliente no encontrado',
        detail: 'Asegúrese de proporcionar una id de cliente válida en la solicitud',
        help: 'https://ejemplo.com/ayuda/error/CLIENT-004'
      }]);
      done();
    });
  });

  it('debe devolver 400 si la ID de entrada está vacía', (done) => {
    chai.request(URL)
    .delete('/client?id=-1')
    .end(function(err, res) {
      //console.log(res.body);
      expect(res).to.have.status(400);
      expect(res.body).to.have.status('ERROR');
      expect(res.body.data).not.to.be.an('array');
      expect(res.body.errors).to.be.an('array');
      expect(res.body.errors).to.deep.equal([{
        code: 'CLIENT-003',
        message: 'La id debe ser un número positivo',
        detail: 'Asegúrese de proporcionar una id válida en la solicitud',
        help: 'https://ejemplo.com/ayuda/error/CLIENT-003'
      }]);
      done();
    });
  });
  */
});



//ANTIC
//describe('API Client ',()=>{
  //GET (retorna tots els clients que hi han)
  // it('retorna un 200 a tots els clients', (done) => {
  //   chai.request(URL)
  //   .get('/client')
  //   .end(function(err, res) {
  //     console.log(res.status);
  //     expect(res).to.have.status(200);
  //     expect(res.body).to.be.an('array');
  //     done();
  //   });
  // });

  // it('retorna un 200 returnan un sol usuari', (done) => {
  //   chai.request(URL)
  //   .get('/client?id=1')
  //   .end(function(err, res) {
  //     //console.log(res.body);
  //     expect(res).to.have.status(200);
  //     expect(res.body).to.not.be.an('array');
  //     done();
  //   });
  // });

  //POST
  // it('retorna un 201 si crea un usuari', (done) => {
  //   chai.request(URL)
  //   .post('/client')
  //   .send(TEST_CLIENT)
  //   .end(function(err, res) {
  //     expect(res).to.have.status(201);
  //     done();
  //   });
  // });
/*
  it('mostra un 400 si hi ha una mala resposta en el PUT', (done) => {
    chai.request(URL)
    .put('/client')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      expect(res).to.have.status(400);
      expect(res.body).to.deep.equal({message:'client bad request'});
      done();
    });
  });

  it('mostra un 400 si hi ha una mala resposta en el PUT', (done) => {
    chai.request(URL)
    .put('/client')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      expect(res).to.have.status(400);
      expect(res.body).to.deep.equal({message:'client bad request'});
      done();
    });
  });

  it('mostra 404 si hi ha un error en el client en el PUT', (done) => {
    chai.request(URL)
    .put('/client')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      expect(res).to.have.status(404);
      expect(res.body.message).to.equal({message:'client not found'});
      done();
    });
  });
  
    it('mostra un 500 si hi ha un error en el client en el PUT', (done) => {
    chai.request(URL)
    .put('/client')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      expect(res).to.have.status(500);
      expect(res.body).to.deep.equal({message:'Error en el servidor al modificar el client. client Internal Server Error'});
      done();
    });
  });
  */

  //PUT
  
  // it('mostra un 200 si modifica el client en el PUT', (done) => {
  //   chai.request(URL)
  //   .put('/client?id=1')
  //   .send(TEST_CLIENT)
  //   .end(function(err, res) {
  //     expect(res).to.have.status(200);
  //     done();
  //   });
  // });

  /*
  it('mostra un 400 si hi ha una mala resposta en el PUT', (done) => {
    chai.request(URL)
    .put('/client?id=-1')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      expect(res).to.have.status(400);
      expect(res.body).to.deep.equal({message:'client bad request'});
      done();
    });
  });

  it('mostra un 400 si hi ha una mala resposta en el PUT', (done) => {
    chai.request(URL)
    .put('/client?id=hola')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      expect(res).to.have.status(400);
      expect(res.body).to.deep.equal({message:'client bad request'});
      done();
    });
  });

  it('mostra 404 si hi ha un error en el client en el PUT', (done) => {
    chai.request(URL)
    .put('/client?id=500')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      expect(res).to.have.status(404);
      expect(res.body.message).to.equal({message:'client not found'});
      done();
    });
  });
  
    it('mostra un 500 si hi ha un error en el client en el PUT', (done) => {
    chai.request(URL)
    .put('/client?id=0')
    .send(TEST_CLIENT)
    .end(function(err, res) {
      expect(res).to.have.status(500);
      expect(res.body).to.deep.equal({message:'Error en el servidor al modificar el client. client Internal Server Error'});
      done();
    });
  });
  */

  //DELETE
  /*
  it('mostra un 200 si borra el client en el DELETE', (done) => {
    chai.request(URL)
    .delete('/client?id=1')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      done();
    });
  });

  it('mostra si recibe un error 400 en el DELETE', (done) => {
    chai.request(URL)
    .delete('/client?id=hola')
    .end(function(err, res) {
      expect(res).to.have.status(400);
      expect(res.body.message).to.equal('La id tiene que ser un numero');
      done();
    });
  });

  it('mostra si recibe un error 400 en el DELETE', (done) => {
    chai.request(URL)
    .delete('/client?id=-1')
    .end(function(err, res) {
      expect(res).to.have.status(400);
      expect(res.body.message).to.equal('El id debe de ser positivo');
      done();
    });
  });

  it('mostra un 404 si hi ha un error en el client', (done) => {
    chai.request(URL)
    .delete('/client?id=500')
    .end(function(err, res) {
      expect(res).to.have.status(404);
      expect(res.body).to.deep.equal({message:'client not found'});
      done();
    });
  });
  
  
  it('Mostra un 500 si hi ha un error en el servidor al borrar el client en el DELETE', (done) => {
    chai.request(URL)
    .delete('/client?id=0')
    .end(function(err, res) {
      expect(res).to.have.status(500);
      expect(res.body).to.deep.equal({message:'Error en el servidor al borrar el client. client Internal Server Error'});
      done();
    });
  });
  */
//});
