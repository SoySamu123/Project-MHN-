function abrir(opcion){

const contenido={
"👤 Mi Perfil":`
<h2>👤 Mi Perfil</h2>
<p>Nombre: Samuel</p>
<p>Posición: ???</p>
<p>Nivel: 1</p>
`,

"🏟️ Mi Club":`
<h2>🏟️ Mi Club</h2>
<p>Aún no perteneces a ningún club.</p>
<button>Crear Club</button>
`,

"📊 Estadísticas":`
<h2>📊 Estadísticas</h2>
<p>⚡ Velocidad: 80</p>
<p>🎯 Tiro: 70</p>
<p>🎮 Regate: 75</p>
<p>🧠 Visión: 78</p>
`,

"🤖 IA MHN":`
<h2>🤖 IA MHN</h2>
<p>Bienvenido.</p>
<p>Próximamente recibirás análisis personalizados.</p>
`
};
document.getElementById("contenido").innerHTML=contenido; 
function abrir(texto){
    alert("Próximamente: " + texto);
}