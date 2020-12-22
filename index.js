const axios = require('axios')
const { exec } = require('child_process');


module.exports.convertJpeg2ppmascii = (filepath) = {

	// TODO - JPEG TO PPM

	var conver224 =exec("ppmquant 224 logo_custom.ppm > logo_custom_224.ppm", (err) => {

			})

	conver224.on('exit', (arg)=>{
			exec("pnmnoraw logo_custom_224.ppm > logo_custom_clut224.ppm", (err) => {
					})
			})


}




module.exports.getJpegBase64FromURL = (url) => {

	axios.get(url)
		.then((response) => {
				console.log('reponse ok');
				return response.data
				})
}
