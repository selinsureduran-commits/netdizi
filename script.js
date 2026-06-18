const icerikAlani = document.getElementById("icerik-alani");

const yapimlar = [
    {
        ad: "Bir Erkek 10 Günde Nasıl Kaybedilir",
        tur: "Film",
        kategori: "Romantik Komedi",
        puan: "6.5",
        aciklama: "Bir gazeteci ve bir reklamcının iddiayla başlayan eğlenceli aşk hikayesi.",
        resim: "afisler/10gun.jpeg"
    },
    {
        ad: "Babam ve Oğlum",
        tur: "Film",
        kategori: "Dram",
        puan: "8.2",
        aciklama: "Aile bağlarını, geçmişle yüzleşmeyi ve baba-oğul ilişkisini anlatan duygusal bir film.",
        resim: "afisler/babamveoglum.jpeg"
    },
    {
        ad: "The Big Bang Theory",
        tur: "Dizi",
        kategori: "Komedi",
        puan: "8.1",
        aciklama: "Zeki ama sosyal hayatta zorlanan arkadaş grubunun eğlenceli günlük yaşamı.",
        resim: "afisler/bbt.jpeg"
    },
    {
        ad: "Cesur",
        tur: "Film",
        kategori: "Animasyon",
        puan: "7.1",
        aciklama: "Kendi yolunu seçmek isteyen cesur bir prensesin macera dolu hikayesi.",
        resim: "afisler/cesur.jpeg"
    },
    {
        ad: "Cursed",
        tur: "Dizi",
        kategori: "Fantastik",
        puan: "5.9",
        aciklama: "Büyülü güçlere sahip genç bir kadının fantastik yolculuğu.",
        resim: "afisler/cursed.jpeg"
    },
    {
        ad: "The Dark Knight",
        tur: "Film",
        kategori: "Aksiyon",
        puan: "9.0",
        aciklama: "Batman ve Joker arasındaki unutulmaz mücadeleyi anlatan karanlık bir süper kahraman filmi.",
        resim: "afisler/darkknight.jpeg"
    },
    {
        ad: "Dedemin İnsanları",
        tur: "Film",
        kategori: "Dram",
        puan: "8.0",
        aciklama: "Göç, aile ve geçmişin izleri üzerinden sıcak ve duygusal bir hikaye anlatır.",
        resim: "afisler/dedemininsanlari.jpeg"
    },
    {
        ad: "Ejderhanı Nasıl Eğitirsin",
        tur: "Film",
        kategori: "Animasyon",
        puan: "8.1",
        aciklama: "Genç bir Viking ile bir ejderha arasında kurulan özel dostluğu anlatır.",
        resim: "afisler/ene1.jpeg"
    },
    {
        ad: "Ejderhanı Nasıl Eğitirsin 2",
        tur: "Film",
        kategori: "Animasyon",
        puan: "7.8",
        aciklama: "Hıçkıdık ve Dişsiz’in yeni keşifler ve büyük sorumluluklarla dolu macerası.",
        resim: "afisler/ene2.jpeg"
    },
    {
        ad: "Ejderhanı Nasıl Eğitirsin 3",
        tur: "Film",
        kategori: "Animasyon",
        puan: "7.4",
        aciklama: "Dostluk, veda ve özgürlük temalarını işleyen serinin duygusal devam filmi.",
        resim: "afisler/ene3.jpeg"
    },
    {
        ad: "Evim Sensin",
        tur: "Film",
        kategori: "Romantik Dram",
        puan: "5.0",
        aciklama: "Aşk, bağlılık ve fedakarlık üzerine duygusal bir romantik hikaye.",
        resim: "afisler/evimsensin.jpeg"
    },
    {
        ad: "Friends",
        tur: "Dizi",
        kategori: "Komedi",
        puan: "8.8",
        aciklama: "Altı yakın arkadaşın New York’taki eğlenceli ve samimi hayatını anlatır.",
        resim: "afisler/friends.jpeg"
    },
    {
        ad: "Game of Thrones",
        tur: "Dizi",
        kategori: "Fantastik",
        puan: "9.2",
        aciklama: "Taht mücadeleleri, entrikalar ve büyük savaşlarla dolu fantastik bir evren.",
        resim: "afisler/got.jpeg"
    },
    {
        ad: "Hatıran Yeter",
        tur: "Film",
        kategori: "Dram",
        puan: "6.5",
        aciklama: "Aşk, kayıp ve hatıralar etrafında şekillenen duygusal bir hikaye.",
        resim: "afisler/hatiranyeter.jpeg"
    },
    {
        ad: "How I Met Your Mother",
        tur: "Dizi",
        kategori: "Komedi",
        puan: "8.3",
        aciklama: "Ted’in arkadaşlarıyla yaşadığı olaylar üzerinden aşkı arama hikayesi.",
        resim: "afisler/himym.jpeg"
    },
    {
        ad: "Issız Adam",
        tur: "Film",
        kategori: "Romantik Dram",
        puan: "6.8",
        aciklama: "Yalnızlık, aşk ve bağlanma korkusu üzerine etkileyici bir ilişki hikayesi.",
        resim: "afisler/issizadam.jpeg"
    },
    {
        ad: "Kabakçığın Hayatı",
        tur: "Film",
        kategori: "Animasyon",
        puan: "7.8",
        aciklama: "Zor bir geçmişe sahip küçük bir çocuğun sevgi ve dostlukla değişen hayatı.",
        resim: "afisler/kh.jpeg"
    },
    {
        ad: "Mahsun J",
        tur: "Dizi",
        kategori: "Komedi",
        puan: "6.5",
        aciklama: "Günlük hayatın içinden mizahi olaylarla ilerleyen yerli komedi dizisi.",
        resim: "afisler/mahsunj.jpeg"
    },
    {
        ad: "Modern Family",
        tur: "Dizi",
        kategori: "Komedi",
        puan: "8.5",
        aciklama: "Farklı aile yapılarının komik ve sıcak anlarını anlatan eğlenceli bir dizi.",
        resim: "afisler/modernf.jpeg"
    },
    {
        ad: "The Office",
        tur: "Dizi",
        kategori: "Komedi",
        puan: "9.0",
        aciklama: "Bir ofis çalışanlarının sıradan ama komik iş hayatını belgesel tarzında anlatır.",
        resim: "afisler/ofis.jpeg"
    },
    {
        ad: "Senden Nefret Etmemin 10 Sebebi",
        tur: "Film",
        kategori: "Romantik Komedi",
        puan: "7.3",
        aciklama: "Lise ortamında geçen eğlenceli ve romantik bir gençlik hikayesi.",
        resim: "afisler/sendennefretetmemin10sebebi.jpeg"
    },
    {
        ad: "Gölge ve Kemik",
        tur: "Dizi",
        kategori: "Fantastik",
        puan: "7.5",
        aciklama: "Karanlık güçlerin olduğu fantastik bir dünyada özel güce sahip bir genç kızın hikayesi.",
        resim: "afisler/shadowbone.jpeg"
    },
    {
        ad: "Shadowhunters",
        tur: "Dizi",
        kategori: "Fantastik",
        puan: "6.5",
        aciklama: "İnsanlar, iblisler ve gölge avcıları arasında geçen fantastik bir macera.",
        resim: "afisler/shadowhunters.jpeg"
    },
    {
        ad: "She’s the Man",
        tur: "Film",
        kategori: "Romantik Komedi",
        puan: "6.4",
        aciklama: "Futbol oynamak isteyen genç bir kızın kimlik değiştirmesiyle gelişen komik olaylar.",
        resim: "afisler/shestheman.jpeg"
    },
    {
        ad: "Ters Yüz",
        tur: "Film",
        kategori: "Animasyon",
        puan: "8.1",
        aciklama: "Bir çocuğun zihnindeki duygular üzerinden büyümeyi ve değişimi anlatır.",
        resim: "afisler/tersyuz.jpeg"
    },
    {
        ad: "Ters Yüz 2",
        tur: "Film",
        kategori: "Animasyon",
        puan: "7.5",
        aciklama: "Yeni duyguların ortaya çıkmasıyla gençlik dönemini eğlenceli şekilde işler.",
        resim: "afisler/tersyuz2.jpeg"
    },
    {
        ad: "The Ant Bully",
        tur: "Film",
        kategori: "Animasyon",
        puan: "5.8",
        aciklama: "Küçülen bir çocuğun karıncaların dünyasında yaşadığı öğretici macera.",
        resim: "afisler/theantbully.jpeg"
    },
    {
        ad: "The Rain",
        tur: "Dizi",
        kategori: "Bilim Kurgu",
        puan: "6.3",
        aciklama: "Tehlikeli bir yağmur sonrası hayatta kalmaya çalışan gençlerin hikayesi.",
        resim: "afisler/therain.jpeg"
    },
    {
        ad: "The 100",
        tur: "Dizi",
        kategori: "Bilim Kurgu",
        puan: "7.6",
        aciklama: "Dünyaya geri gönderilen gençlerin hayatta kalma mücadelesini anlatır.",
        resim: "afisler/theyuz.jpeg"
    },
    {
        ad: "Zootopia",
        tur: "Film",
        kategori: "Animasyon",
        puan: "8.0",
        aciklama: "Farklı hayvan türlerinin yaşadığı şehirde geçen eğlenceli ve anlamlı bir macera.",
        resim: "afisler/zootopia.jpeg"
    },
    {
        ad: "Zootopia 2",
        tur: "Film",
        kategori: "Animasyon",
        puan: "7.0",
        aciklama: "Zootopia evreninde geçen yeni ve renkli bir macera.",
        resim: "afisler/zootopia2.jpeg"
    },
    {
        ad: "Wild Child",
        tur: "Film",
        kategori: "Komedi",
        puan: "6.1",
        aciklama: "Şımarık bir genç kızın yatılı okulda kendini tanıma ve değişme hikayesi.",
        resim: "afisler/wildchild.jpeg"
    },
    {
        ad: "Uyumsuz",
        tur: "Film",
        kategori: "Bilim Kurgu",
        puan: "6.6",
        aciklama: "Toplumun gruplara ayrıldığı distopik bir dünyada kimliğini bulmaya çalışan genç bir kızın hikayesi.",
        resim: "afisler/uyumsuz.jpeg"
    },
    {
        ad: "Interstellar",
        tur: "Film",
        kategori: "Bilim Kurgu",
        puan: "9.0",
        aciklama: "Uzay ve zaman üzerine etkileyici bir bilim kurgu filmi.",
        resim: "afisler/interstellar.jpeg"
    },
    {
        ad: "Breaking Bad",
        tur: "Dizi",
        kategori: "Dram",
        puan: "9.5",
        aciklama: "Bir kimya öğretmeninin suç dünyasına giriş hikayesi.",
        resim: "afisler/breakingbad.jpeg"
    },
    {
        ad: "Spider-Man: Into the Spider-Verse",
        tur: "Film",
        kategori: "Animasyon",
        puan: "8.4",
        aciklama: "Farklı evrenlerden gelen Örümcek Adamların renkli hikayesi.",
        resim: "afisler/spiderman.jpeg"
    }
    ,
{
    ad: "Açlık Oyunları",
    tur: "Film",
    kategori: "Bilim Kurgu",
    puan: "7.2",
    aciklama: "Hayatta kalmak için ölümcül bir yarışmaya katılan Katniss'in hikayesi.",
    resim: "afisler/aclikoyunlari1.jpeg"
},
{
    ad: "Açlık Oyunları: Ateşi Yakalamak",
    tur: "Film",
    kategori: "Bilim Kurgu",
    puan: "7.5",
    aciklama: "Katniss, zaferinin ardından çok daha büyük bir tehditle karşılaşır.",
    resim: "afisler/aclikoyunlari2.jpeg"
},
{
    ad: "Bird Box",
    tur: "Film",
    kategori: "Gerilim",
    puan: "6.6",
    aciklama: "Gizemli varlıkların insanları intihara sürüklediği bir dünyada hayatta kalma mücadelesi.",
    resim: "afisler/birdbox.jpeg"
},
{
    ad: "Persepolis",
    tur: "Film",
    kategori: "Animasyon",
    puan: "8.0",
    aciklama: "İran Devrimi sırasında büyüyen genç bir kızın etkileyici yaşam öyküsü.",
    resim: "afisler/persopolis.jpeg"
},
{
    ad: "Bridgerton",
    tur: "Dizi",
    kategori: "Romantik Dram",
    puan: "7.4",
    aciklama: "Londra sosyetesinde aşk, entrika ve aile ilişkileri üzerine kurulu bir dönem dizisi.",
    resim: "afisler/bridgerton.jpeg"
},
{
    ad: "Off Campus",
    tur: "Dizi",
    kategori: "Romantik Komedi",
    puan: "7.0",
    aciklama: "Üniversite hayatında gelişen dostluk ve aşk hikayelerini konu alır.",
    resim: "afisler/offcampus.jpeg"
},
{
    ad: "Delibal",
    tur: "Film",
    kategori: "Romantik Dram",
    puan: "6.8",
    aciklama: "Tutkulu bir aşkın zamanla dönüşümünü anlatan duygusal bir hikaye.",
    resim: "afisler/delibal.jpeg"
},
{
    ad: "Malefiz",
    tur: "Film",
    kategori: "Fantastik",
    puan: "7.0",
    aciklama: "Uyuyan Güzel masalını Malefiz'in gözünden anlatan fantastik yapım.",
    resim: "afisler/malefiz.jpeg"
},
{
    ad: "Cinderella",
    tur: "Film",
    kategori: "Fantastik",
    puan: "6.9",
    aciklama: "Klasik Külkedisi masalının modern sinema uyarlaması.",
    resim: "afisler/cinderella.jpeg"
},
{
    ad: "Me Before You",
    tur: "Film",
    kategori: "Romantik Dram",
    puan: "7.4",
    aciklama: "İki farklı insanın hayatlarını değiştiren dokunaklı aşk hikayesi.",
    resim: "afisler/mebeforeyou.jpeg"
},
{
    ad: "Korku Seansı",
    tur: "Film",
    kategori: "Korku",
    puan: "7.5",
    aciklama: "Paranormal olayları araştıran Warren çiftinin ürkütücü vakalarından biri.",
    resim: "afisler/korkuseansi.jpeg"
},
{
    ad: "6 Süper Kahraman",
    tur: "Film",
    kategori: "Animasyon",
    puan: "7.8",
    aciklama: "Dahi bir çocuk ve robotu Baymax'ın kahramanlık hikayesi.",
    resim: "afisler/6sk.jpeg"
},
{
    ad: "Ariel",
    tur: "Film",
    kategori: "Fantastik",
    puan: "6.2",
    aciklama: "Denizlerin altında yaşayan genç bir prensesin macerası.",
    resim: "afisler/ariel.jpeg"
},
{
    ad: "Küçük Deniz Kızı Ponyo",
    tur: "Film",
    kategori: "Animasyon",
    puan: "7.6",
    aciklama: "İnsan olmak isteyen küçük bir balık kızın büyülü hikayesi.",
    resim: "afisler/kdkp.jpeg"
},
{
    ad: "Pamuk Prenses",
    tur: "Film",
    kategori: "Animasyon",
    puan: "7.0",
    aciklama: "Kötü kraliçe ve yedi cücelerle geçen klasik masal.",
    resim: "afisler/pamukp.jpeg"
},
{
    ad: "Karayip Korsanları: Kara İncinin Laneti",
    tur: "Film",
    kategori: "Macera",
    puan: "8.0",
    aciklama: "Jack Sparrow'un efsanevi maceralarının başlangıcı.",
    resim: "afisler/karayip1.jpeg"
},
{
    ad: "Karayip Korsanları: Ölü Adamın Sandığı",
    tur: "Film",
    kategori: "Macera",
    puan: "7.3",
    aciklama: "Jack Sparrow, Davy Jones ile yaptığı anlaşmanın bedelini ödemek zorundadır.",
    resim: "afisler/karayip2.jpeg"
},
{
    ad: "Karayip Korsanları: Dünyanın Sonu",
    tur: "Film",
    kategori: "Macera",
    puan: "7.1",
    aciklama: "Korsanların kaderini belirleyecek büyük savaş yaklaşmaktadır.",
    resim: "afisler/karayip3.jpeg"
},
{
    ad: "Labirent: Ölümcül Kaçış",
    tur: "Film",
    kategori: "Bilim Kurgu",
    puan: "6.8",
    aciklama: "Hafızalarını kaybetmiş gençler dev bir labirentten kaçmaya çalışır.",
    resim: "afisler/labirent.jpeg"
},
{
    ad: "Labirent: Alev Deneyleri",
    tur: "Film",
    kategori: "Bilim Kurgu",
    puan: "6.3",
    aciklama: "Thomas ve arkadaşları bu kez dış dünyanın tehlikeleriyle yüzleşir.",
    resim: "afisler/labirent2.jpeg"
},
{
    ad: "Labirent: Son İsyan",
    tur: "Film",
    kategori: "Bilim Kurgu",
    puan: "6.2",
    aciklama: "Serinin finalinde kurtuluş için son mücadele verilir.",
    resim: "afisler/labirent3.jpeg"
},
{
    ad: "The Truman Show",
    tur: "Film",
    kategori: "Dram",
    puan: "8.2",
    aciklama: "Hayatının bir televizyon programı olduğunu fark eden adamın hikayesi.",
    resim: "afisler/trumanshow.jpeg"
},
{
    ad: "Teen Wolf",
    tur: "Dizi",
    kategori: "Fantastik",
    puan: "7.7",
    aciklama: "Bir kurt adam tarafından ısırılan gencin hayatı tamamen değişir.",
    resim: "afisler/teenwolf.jpeg"
},
{
    ad: "The Vampire Diaries",
    tur: "Dizi",
    kategori: "Fantastik",
    puan: "7.7",
    aciklama: "Vampirler, aşk ve doğaüstü olaylarla dolu gençlik dizisi.",
    resim: "afisler/tvd.jpeg"
},
{
    ad: "The Originals",
    tur: "Dizi",
    kategori: "Fantastik",
    puan: "8.2",
    aciklama: "İlk vampir ailesinin güç ve aile bağları üzerine hikayesi.",
    resim: "afisler/theoriginals.jpeg"
},
{
    ad: "Supernatural",
    tur: "Dizi",
    kategori: "Fantastik",
    puan: "8.4",
    aciklama: "Doğaüstü yaratıklarla savaşan iki kardeşin uzun soluklu macerası.",
    resim: "afisler/supernatural.jpeg"
}
];

function yapimlariGoster(liste = yapimlar) {
    icerikAlani.innerHTML = "";

    liste.forEach(yapim => {
        const kart = document.createElement("div");
        kart.classList.add("kart");

        kart.innerHTML = `
            <img src="${yapim.resim}" alt="${yapim.ad}" class="afis">

            <h2>${yapim.ad}</h2>
            <div class="tur">${yapim.tur} | ${yapim.kategori}</div>
            <div class="aciklama">${yapim.aciklama}</div>
            <div class="puan">⭐ ${yapim.puan}</div>

            <button class="favori-btn">🤍 Favorilere Ekle</button>

            <textarea placeholder="Yorumunu yaz..."></textarea>
            <button class="yorum-btn">Yorumu Ekle</button>
            <div class="yorum-listesi"></div>
        `;

        const buton = kart.querySelector(".yorum-btn");
        const favoriButon = kart.querySelector(".favori-btn");
        const textarea = kart.querySelector("textarea");
        const yorumListesi = kart.querySelector(".yorum-listesi");

        buton.addEventListener("click", () => {
            if (textarea.value.trim() === "") {
                alert("Yorum boş bırakılamaz!");
                return;
            }

            const yorum = document.createElement("p");
            yorum.textContent = "💬 " + textarea.value;
            yorumListesi.appendChild(yorum);

            textarea.value = "";
        });

        favoriButon.addEventListener("click", () => {
            if (favoriButon.innerHTML.includes("🤍")) {
                favoriButon.innerHTML = "❤️ Favorilere Eklendi";
            } else {
                favoriButon.innerHTML = "🤍 Favorilere Ekle";
            }
        });

        icerikAlani.appendChild(kart);
    });
}

function aramaYap() {
    const aranan = document.getElementById("aramaInput").value.toLowerCase();

    const sonuc = yapimlar.filter(yapim =>
        yapim.ad.toLowerCase().includes(aranan) ||
        yapim.kategori.toLowerCase().includes(aranan) ||
        yapim.tur.toLowerCase().includes(aranan)
    );

    yapimlariGoster(sonuc);
}

function karanlikMod() {
    document.body.classList.toggle("dark");
}

function filtrele(kategori) {
    if (kategori === "Tümü") {
        yapimlariGoster(yapimlar);
        return;
    }

    const filtrelenmis = yapimlar.filter(yapim =>
        yapim.kategori === kategori || yapim.tur === kategori
    );

    yapimlariGoster(filtrelenmis);
}

yapimlariGoster();