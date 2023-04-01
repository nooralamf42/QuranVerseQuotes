const allQuranQuotes = {
    verse : [
        '“Do not lose hope, nor be sad.”', 
        '“Call upon me, I will respond to you.”',
        '“Indeed he does not like the proud.”',
        '“Guide us to the straight path.”',
        '“No one will reap except what they sow.”',
        '“For indeed, with hardship [will be] ease.”',
        '“And seek help in patience and prayers.”',
        '“And say: my lord, increase me in knowledge.”',
        '“So let not this present life deceive you.”',
        '“The life of this world is merely enjoyment of delusion.”',
        '“My mercy embraces all things.”',
        '“Surely, good deeds erase bad deeds.”',
        "“So whoever does an atom's weight of good will see it.”",
        '“Indeed, the patient will be given their reward without account.”',
        '“And do not mix the truth with falsehood or conceal the truth while you know [it].”',
        '“And whoever turns away from My remembrance – indeed, he will have a depressed life.”',
        '“And He found you lost and guided [you]. And He found you poor and made [you] self-sufficient.”',
        '“So remember Me; I will remember you.”',
        '“So truly where there is hardship there is also ease.”',
        '“Indeed, I am near.”',
        '“He knows what is in every heart.”',
        '“Yet I am most Forgiving towards those who repent, believe, do righteous deeds, and stay on the right path.”',
        '“Allah does not burden a soul beyond that it can bear.”',
        '“Take care of your souls”',
    ],
    address : [
        '— Quran 3:139', '— Quran 40:60', '— Quran 16:23', '— Surah Fatiha Ayat 6', '— Quran 6:164', '— Quran 94:5', '— Al Baqara 45', ' — Quran 20:114', '— Surah Fatir Verse 5', ' — Quran 3:185', '— Quran 7:156', '— Ayah Hud 11:114', '— Al zalzalah verse 7', '— Quran 39:10', '— Ayat 42', '— Quran 20:124', '— Quran 93:7-8', '— Surah Baqarah Verse 152', '— Quran 94:5', '—Quran 2:186', '—Quran 67:13', '—Quran 20:82', '—Al Baqarah 286', '—Surah Maidah 5:105', 
    ]
}
const randomQuranQuoteIndex = Math.floor(Math.random()*allQuranQuotes.verse.length)
quoteQuran.innerText = allQuranQuotes.verse[randomQuranQuoteIndex]
path.innerText =  allQuranQuotes.address[randomQuranQuoteIndex]
