let listaCompra = [
	"Avena",
	"Leche Descremada",
	"Sal",
	"Mayonesa",
	"Harina Integral",
];
listaCompra.push("Aceite de Girasol");
listaCompra.pop();

// ------

let pelisFav = [
	{
		titulo: "Fragmentado",
		director: "M. Night Shyamalan",
		fecha: "2016/9/26",
	},
	{
		titulo: "Juego del Miedo",
		director: "James Wan",
		fecha: "2005/1/13",
	},
	{
		titulo: "El niño",
		director: "William Brent Bell",
		fecha: "2018/2/18",
	},
];

// ------

const pelisPost = pelisFav.filter((obj) => {
	if (obj.fecha > "2010/1/1") {
		return true;
	} else {
		return false;
	}
});

// ------

const directores = pelisFav.map((obj) => {
	return obj.director;
});

// ------

const titulos = pelisFav.map((obj) => {
	return obj.titulo;
});

let concDirTitulo = directores.concat(titulos);

let propaDirTitulo = [...directores, ...titulos];
