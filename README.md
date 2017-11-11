# Walmart Test

	La aplicación inicia con yarn, por ende se requiere su instalación, o tenerlo ya instalado.

# Comandos para instalar dependecias, y ejecutar la aplicación

	1.- yarn install
	2.- yarn start  

# Idea Principal

	Para el desarrollo de la aplicación utilicé un wrapper de local-db para almacenar información en el Local Storage del
	browser. La idea básicamente consistió en crear 3 fuentes de almacenamiento para los 3 tipos de monedas (ETH, BTC, DASH).
	
	Cree dos componentes (CryptoDataChar - CryptoDataFetcher)
	
		CryptoDataChar: Es el encargado de pintar el gráfico según el tipo de moneda, 
		el cual recibe como parámetro un string. Para lograrlo, utilicé la librería de recharts 
		
		CryptoDataFetcher: Es el encargado de consumir el api, y se encarga también 
		de poblar la base de datos según el tipo de moneda. Para lograrlo, utilicé la librería de axios
		
	También hice un botón "Actualizar", que tiene como objetivo poblar la base de datos.
	
	Utilicé la key "volumeto" para desplegar la información, porque tenía mayor variación con los datos a desplegar.
