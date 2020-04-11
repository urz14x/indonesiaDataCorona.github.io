const Main = () => {
   fetch('https://api.kawalcorona.com/indonesia/')
   .then(res => res.json())
   .then(data => {
       let output = '';
       data.forEach((dataKorona) => {
           output += `
           <div class="jumbotron">
            <h1 class="display-4">Negara: ${dataKorona.name}</h1>
                <p class="lead">Jumlah Positif: <strong> ${dataKorona.positif}</strong></p>                
                <p class="lead">Jumlah Sembuh: <strong>${dataKorona.sembuh}</strong> </p>
                <p class="lead">Jumlah Meninggal: <strong>${dataKorona.meninggal}</strong> </p>
                <hr class="my-4">
                <p><i>Semoga semua nya cepat berakhir.</i></p>
            </div>
           `
       })

       document.getElementById("data").innerHTML = output
   })
}

Main();







