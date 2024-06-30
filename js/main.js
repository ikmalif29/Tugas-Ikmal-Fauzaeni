let product = [
    {
        gambar: "../assets/compas1.png",
        gambar2: "../assets/compass.png",
        nama: "GAZELLE LOW BLACK WHITE",
        harga: "IDR 408.000,00"
    },
    {
        gambar: "../assets/cmps.png",
        gambar2: "../assets/cmps2.png",
        nama: "Compass Retrograde Intro Grey",
        harga: "IDR 398.800,00"
    },
    {
        gambar: "../assets/cps.png",
        gambar2: "../assets/cps2.png",
        nama: "VELOCITY BLUE/YELLOW",
        harga: "IDR 798.000,00"
    },
    {
        gambar: "../assets/sendal11.png",
        gambar2: "../assets/sendal12.png",
        nama: "SPECS TERRA SLIDES-MAUI",
        harga: "IDR 179.800,00"
    },
    {
        gambar: "../assets/sendal21.png",
        gambar2: "../assets/sendal22.png",
        nama: "SPECS TERRA SLIDES-OMBRE/SEED",
        harga: "IDR 179.800,00"
    },
    {
        gambar: "../assets/sendal31.png",
        gambar2: "../assets/sendal33.png",
        nama: "SPECS CIVIC SLIDES SANDALS-BLACK",
        harga: "IDR 279.800,00"
    },
    {
        gambar: "../assets/topi11.png",
        gambar2: "../assets/topi12.png",
        nama: "SPECS DEVOTED TRIBE DAD",
        harga: "IDR 129.800,00"
    },
    {
        gambar: "../assets/kaos.png",
        gambar2: "../assets/kaos2.png",
        nama: "SPECS 1980 REGULAR TEE",
        harga: "IDR 199.800,00"
    },
    {
        gambar: "../assets/tas.png",
        gambar2: "../assets/tas2.png",
        nama: "SPECS DELTA SHOEBAG-BLACK",
        harga: "IDR 129.800,00"
    },
    {
        gambar: "../assets/gelas.png",
        gambar2: "../assets/gelas2.png",
        nama: "BALENCIAGA GLASS",
        harga: "IDR 86.000,00"
    },
    {
        gambar: "../assets/1.png",
        gambar2: "../assets/2.png",
        nama: "MEN'S RIPPED SLEEVE SHIRT OVERSIZED IN LIGHT BLUE",
        harga: "IDR 333.000,00"
    },
    {
        gambar: "../assets/3.png",
        gambar2: "../assets/4.png",
        nama: "RAINBOW FLAG ZIP-UP HOODIE SMALL FIT IN BLACK",
        harga: "IDR 549.900,00"
    },
    {
        gambar: "../assets/jk1.png",
        gambar2: "../assets/jk2.png",
        nama: "SPECS PRAHASTA ANTHEM JACKET",
        harga: "IDR 699.800,00"
    },
    {
        gambar: "../assets/jk11.png",
        gambar2: "../assets/jk22.png",
        nama: "SPECS NATYA TRACK JACKET ",
        harga: "IDR 699.800,00"
    },
    {
        gambar: "../assets/polo.png",
        gambar2: "../assets/polo2.png",
        nama: "SPECS BIANTARA POLO",
        harga: "IDR 329.800,00"
    },
    {
        gambar: "../assets/specs122.png",
        gambar2: "../assets/specs22.png",
        nama: "SPECS LS SPECTRA",
        harga: "IDR 599.000,00"
    },
    {
        gambar: "../assets/specs.png",
        gambar2: "../assets/specs2.png",
        nama: "SPECS LS SPECTRA",
        harga: "IDR 549.000,00"
    },
    {
        gambar: "../assets/slightspeed.png",
        gambar2: "../assets/slightspeed2.png",
        nama: "SPECS LIGHTSPEED REBORN",
        harga: "IDR 599.800,00"
    }
]

let big = document.querySelector(".big-container")
big.style.width = "100%"
big.style.height = "300vh"
big.style.gap = "40px"
big.style.justifyContent = "center"
big.style.alignItems = "center"
big.style.display = "flex"
big.style.flexWrap = "wrap"

product.forEach((f, i) => {
    let container = document.createElement("div")
    container.style.backgroundColor = "white"
    container.style.border = "2px solid black"
    container.style.width = "400px"
    container.style.height = "300px"
    container.style.marginLeft = "10px"
    container.style.display = "flex"
    container.style.cursor = "pointer"
    container.style.justifyContent = "center"
    container.style.flexDirection = "column"
    container.style.textAlign = "center"
    container.style.borderRadius = "50px"
    container.style.cursor = "pointer"
    container.style.boxShadow = "0 0 20px black"


    let gambar = document.createElement("img")
    gambar.src = f.gambar;
    gambar.style.height = "206px"
    gambar.style.width = "206px"
    gambar.style.marginLeft = "24%"

    container.addEventListener("mouseover", (event) => {
        gambar.setAttribute("src", `${f.gambar2}`)
    })

    container.addEventListener("mouseout", (event) => {
        gambar.setAttribute("src", `${f.gambar}`)
    })


    let h1 = document.createElement("h3")
    h1.className = "namaSepatu"
    h1.style.fontFamily = "cursive"
    h1.textContent = f.nama;
    let h2 = document.createElement("h3")
    h2.className = "hargaSepatu"
    h2.textContent = f.harga;

    container.addEventListener("click", () => {
        alert(`Nama Sepatu  : ${f.nama}, Harga Sepatu : ${f.harga}`)
        let ask = confirm(`apakah anda ingin membelinya ?`)
        if (ask) {
            let buy = prompt(`mau beli berapa ?`);

            if (buy) {
                let alrt = alert(`Terima Kasih Atas Pembelian nya Hehe`)

                let ask2 = confirm(`Mau Lihat Pesanan Nya Ngga ?`)

                if (ask2) {
                    document.write(`<h1>Hallo Kamu</h1>
                                    <h2>Ini Pesanan Anda</h2>
                                    <h2>Nama Product : ${f.nama}</h2>
                                    <h2>Harga Product : ${f.harga}</h2>
                                    <h2>Jumlah Beli : ${buy}</h2>
                                    <h1>Jangan Lupa Baayar cookkkkk</h1>`)
                }
            }
        }
    }
    );
    container.appendChild(gambar)
    container.appendChild(h1)
    container.appendChild(h2)
    big.appendChild(container)
})
