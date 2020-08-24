const Fs = require('fs')  
const Path = require('path')  
const Util = require('util')  
const Puppeteer = require('puppeteer')  
const Handlebars = require('handlebars')  
const cons = require('consolidate')
const ReadFile = Util.promisify(Fs.readFile)

//var getData1 = function(){
  
  //console.log(getData)
  //let form = document.forms["formulario1"];
  //console.log(form);

  //let comida= form.Comida.value;
  //let personas= form.Personas.value;
  //let lugar= form.Lugar.value;

  //let pdef = new Invoice ();
  //pdef.pdf();
//}
//let comida= "si";
//let Personas= "4";
//let Lugar= "No";

class Invoice {  
  async html() {
    try {
      const data = {
        Comida: comida,
        personas: Personas,
        lugar: Lugar
      }

      const templatePath = Path.resolve('factura.hbs')
      const content = await ReadFile(templatePath, 'utf8')
      console.log(templatePath);

      // compile and render the template with handlebars
      const template = Handlebars.compile(content)

      //return template(data)
      var pdfdata = template(data)
      return pdfdata


    } catch (error) {
      //console.log(templatePath);
      throw new Error(error)
    }
  }

  async pdf() {
    const html = await this.html()

    const browser = await Puppeteer.launch()
    const page = await browser.newPage()
    await page.setContent(html)
	await page.pdf({
		path: 'factura.pdf',
		format: 'A4'
		
	});
	console.log('listo');
    
  }
}

let pdef = new Invoice ();


//var boton = $('#impresion');
// Agregar listener
//document.getElementById("boton").addEventListener("click", function() {
pdef.pdf();
//    console.log("has pulsado el botón 1");
//});
