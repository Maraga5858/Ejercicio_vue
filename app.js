const app = Vue.createApp({
    data() {
        return {
            videojuegos: [
                {
                    titulo: "The Legend of Zelda: Breath of the Wild",
                    imagen: "img/zelda.webp",
                    descripcion: "Un juego de aventuras en un vasto mundo abierto.",
                    genero: "Aventura",
                    anno: 2017
                },
                {
                    titulo: "Red Dead Redemption 2",
                    imagen: "img/RDR2.webp",
                    descripcion: "Un western épico con una narrativa profunda.",
                    genero: "Acción",
                    anno: 2018
                },
                {
                    titulo: "God of War",
                    imagen: "img/GOD.webp",
                    descripcion: "Un viaje épico de Kratos y su hijo Atreus.",
                    genero: "Acción",
                    anno: 2018
                },
                {
                    titulo: "Cyberpunk 2077",
                    imagen: "img/ciber.webp",
                    descripcion: "Explora Night City en un futuro distópico.",
                    genero: "RPG",
                    anno: 2020
                },
                {
                    titulo: "The Witcher 3: Wild Hunt",
                    imagen: "img/witcher.webp",
                    descripcion: "Sigue a Geralt de Rivia en su épica aventura.",
                    genero: "RPG",
                    anno: 2015
                },
                {
                    titulo: "Minecraft",
                    imagen: "img/minecraft.webp",
                    descripcion: "Construye y explora mundos infinitos.",
                    genero: "Sandbox",
                    anno: 2011
                },
                {
                    titulo: "Hollow Knight Silksong",
                    imagen: "img/HKS.webp",
                    descripcion: "Una desafiante aventura en un mundo subterráneo.",
                    genero: "Metroidvania",
                    anno: 2017
                },
                {
                    titulo: "Dark Souls III",
                    imagen: "img/dark_souls.webp",
                    descripcion: "Una experiencia desafiante y gratificante.",
                    genero: "RPG",
                    anno: 2016
                },
                {
                    titulo: "Super Mario Odyssey",
                    imagen: "img/mario.webp",
                    descripcion: "Acompaña a Mario en una increíble aventura en 3D.",
                    genero: "Plataformas",
                    anno: 2017
                },
                {
                    titulo: "Overwatch",
                    imagen: "img/over.webp",
                    descripcion: "Un emocionante shooter en equipo.",
                    genero: "FPS",
                    anno: 2016
                },
                {
                    titulo: "Apex Legends",
                    imagen: "img/apex.webp",
                    descripcion: "Un juego Battle Royale con personajes únicos.",
                    genero: "Battle Royale",
                    anno: 2019
                },
                {
                    titulo: "Fortnite",
                    imagen: "img/fort.webp",
                    descripcion: "Construye y lucha por ser el último en pie.",
                    genero: "Battle Royale",
                    anno: 2017
                },
                {
                    titulo: "Call of Duty: Modern Warfare",
                    imagen: "img/MDW2.webp",
                    descripcion: "Intenso combate moderno en primera persona.",
                    genero: "FPS",
                    anno: 2019
                },
                {
                    titulo: "Persona 5",
                    imagen: "img/persona.webp",
                    descripcion: "Vive la vida de un estudiante japonés con un toque sobrenatural.",
                    genero: "RPG",
                    anno: 2016
                },
                {
                    titulo: "Animal Crossing: New Horizons",
                    imagen: "img/acrossing.webp",
                    descripcion: "Crea tu propia isla paradisíaca.",
                    genero: "Simulación",
                    anno: 2020
                },
                {
                    titulo: "Sekiro: Shadows Die Twice",
                    imagen: "img/sekiro.webp",
                    descripcion: "Un juego desafiante de acción y sigilo en el Japón feudal.",
                    genero: "Acción",
                    anno: 2019
                },
            ],
            paginaActual: 1,
            elementosPorPagina: 5
        };
    },
    computed: {
        paginasTotales() {
            return Math.ceil(this.videojuegos.length / this.elementosPorPagina);
        },
        videojuegosPaginados() {
            const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
            const fin = inicio + this.elementosPorPagina;
            return this.videojuegos.slice(inicio, fin);
        }
    },
    methods: {
        cambiarPagina(nuevaPagina) {
            if (nuevaPagina > 0 && nuevaPagina <= this.paginasTotales) {
                this.paginaActual = nuevaPagina;
            }
        }
    },
    template: `
        <div>
            <h1>Lista de Videojuegos</h1>
            <div class="videojuego" v-for="videojuego in videojuegosPaginados" :key="videojuego.titulo">
                <img :src="videojuego.imagen" alt="Portada del videojuego" width="200" height="150">
                <h2>{{ videojuego.titulo }}</h2>
                <p><b>Género:</b> {{ videojuego.genero }}</p>
                <p><b>Año de lanzamiento:</b> {{ videojuego.anno }}</p>
                <p>{{ videojuego.descripcion }}</p>
                <hr>
            </div>
            <div class="paginacion">
                <button @click="cambiarPagina(paginaActual - 1)" :disabled="paginaActual === 1">Anterior</button>
                <span>Página {{ paginaActual }} de {{ paginasTotales }}</span>
                <button @click="cambiarPagina(paginaActual + 1)" :disabled="paginaActual === paginasTotales">Siguiente</button>
            </div>
        </div>
    `
});

app.mount('#app');
