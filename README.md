# bsale-api

Desarrollo proyecto Bsale y Api Rest

El proyecto consiste en realizar una pantalla de un super mercado ficticio en donde los usuarios puedan ver la categoria de productos disponibles en tienda, así como,  los productos disponibles en cada categoría. 

Inicio del proyecto con desarrollo de front end, a los fines de visualizar con claridad en pantalla como deberia verse la app. 
Primera parte: arquitectura de la app: 
    Se creacron los componentes que conforman la app para su eficaz desarrollo, y son:
        
        Componente Header: implementacieon de logo de un super mercado ficticio con nombre y barra de busqueda lo que desencadena en la creación de otro componente, llamado Search cuya utilidad es que el usuario pueda hacer manualmente la busqueda dle producto que desea adquirir y verificar si forma parte del stock de la tienda. (COMPONENTE SEARCH).

        Componente Menú: Este componente tiene la funcion de hacer una barra "menu" en donde se observan las categorias de productos de la tienda, cada categoria del componente está compuesta por un boton, que al ser pulsado, ejecuta el evento onClick y despliega los productos o el producto de la categoria presionada.  

        Componente Body: El componente fue desarrollado para que en el se desplegaran todos los productos que tiene cada categoria, cada vez que alguna de ella es presionada. 

        Componente Products: La finalidad de este componente es traer cada uno de los elementos que forma parte de cada producto de la base de datos y que los traiga cada vez que sean llamados en el componente BODY.
        
        Componente Not Found: Componente creado para que la pantalla arroje un aviso cuando no se encuentre en el sistema un producto solicitado, probablemente porque no exista en la base de datos del super mercado. 
        
        AppContextProvider: se utilizó el hook appcontext para poder entrelazar los componentes y sus funciones entre si, es decir, para que los estados utilizados en cada componente sean globales. 

La aplicación funciona de manera correcta, mostrando una pantalla donde el header tiene un boton de volver la pantalla a su estado inicial y el componente search para busqueda manual de un producto. el boton de busqueda funciona tanto al presionarlo como al pulsar el boton enter en el teclado de la computadora. En la misma pantalla se observa el menú con 7 categorias de productos que son a su vez botones que al ser presionados traen al componente body( tambien reflejado en la misma pantalla) los productos o el producto de la categoria seleccionada, y en el caso de no ser encontrado el producto deseado, aparecerá en pantalla un letreto indicador de que tal producto no ha podido ser encontrado. 

Las categorias y productos se obtuvieron de una base de datos, a la cual se tuvo acceso por los datos entregados por el proveedor del ejercicio y una vez en ella se generó en backend la API REST.

La app se desarrollo con el lenguaje JavaScript, utilizando la libreria React, para obtener la Api Rest se utilizó el framework NodeJs, Express y Sequelize. 