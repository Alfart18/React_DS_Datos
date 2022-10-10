function Generar() {
    const url = 'http://localhost:3000/DS/bios'
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err));
}

export default Generar

