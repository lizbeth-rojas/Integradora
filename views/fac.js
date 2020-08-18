const Fs = require('fs')  
const Path = require('path')  
const Util = require('util')  
const Puppeteer = require('puppeteer')  
const Handlebars = require('handlebars')  
const cons = require('consolidate')
const ReadFile = Util.promisify(Fs.readFile)

class Invoice {  
  async html() {
    try {
      const data = {
        your: 'data'
      }

      const templatePath = Path.resolve('views', 'factura.hbs')
      const content = await ReadFile(templatePath, 'utf8')
      //console.log(templatePath);

      // compile and render the template with handlebars
      const template = Handlebars.compile(content)

      return template(data)
    } catch (error) {
      throw new Error('No se pudo crear la plantilla.')
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
//  	console.log("has pulsado el botón 1");
//});