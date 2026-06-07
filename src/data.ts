import { Topic } from "./types";

export const TOPICS_DATA: Topic[] = [
  {
    id: "akhlak-teman",
    title: "Akhlak Sesama Teman",
    description: "Bagaimana cara kita memperlakukan teman agar tercipta hubungan yang harmonis dan diridhai Allah SWT.",
    iconName: "Users",
    colorTheme: {
      primary: "emerald",
      bgLight: "bg-emerald-50/50",
      badge: "bg-emerald-100 text-emerald-800",
      border: "border-emerald-200",
      text: "text-emerald-700",
      gradient: "from-emerald-500 to-teal-600",
    },
    subTopics: [
      {
        id: "saling-menolong",
        title: "Saling Menolong (Empati)",
        description: "Menumbuhkan rasa peduli dan menolong teman yang sedang kesulitan demi mengharap rida Allah SWT.",
        iconName: "HeartHandshake",
        quranVerse: {
          reference: "QS. Al-Ma'idah: 2",
          textArabic: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ",
          textLatin: "Wa ta'aawanuu 'alal-birri wat-taqwaa, wa laa ta'aawanuu 'alal-itsmi wal-'udwaan.",
          textTranslation: "...Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan permusuhan...",
        },
        hadith: {
          reference: "HR. Muslim (No. 2699)",
          textArabic: "وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ",
          textTranslation: "Allah senantiasa menolong hamba-Nya selama hamba-Nya itu suka menolong saudaranya.",
        },
        keyPoints: [
          "Menawarkan bantuan tanpa perlu diminta ketika melihat teman kesulitan.",
          "Merasakan kesedihan teman (berempati) dan menghiburnya.",
          "Saling menolong dalam kebaikan, misalnya mengajari materi pelajaran yang belum dipahami.",
          "Menghindari tolong-menolong dalam kemaksiatan atau hal buruk (seperti memberikan sontekan)."
        ],
        challenges: [
          { id: "help-friend-study", text: "Mengajari teman yang kesulitan memahami tugas/pelajaran.", points: 15 },
          { id: "help-carry-things", text: "Membantu membawakan barang atau menolong teman yang terjatuh/kesulitan fisik.", points: 10 },
          { id: "empathy-listen", text: "Mendengarkan keluh kesah teman dengan penuh perhatian & mendoakannya.", points: 10 }
        ],
        quiz: {
          id: "quiz-saling-menolong",
          question: "Zaid melihat temannya, Ahmad, kesulitan membawa tumpukan buku pelajaran ke kelas. Sikap yang paling tepat sesuai QS. Al-Ma'idah ayat 2 adalah...",
          options: [
            "Membiarkannya karena itu tugas individu Ahmad dan guru tidak memerintahkan Zaid untuk menolong.",
            "Segera mendatangi Ahmad dan membantu membawakan sebagian buku tersebut dengan ikhlas.",
            "Mentertawakannya lalu memanggil teman-teman lain untuk melihat Ahmad kesulitan.",
            "Menawarkan bantuan tetapi meminta imbalan berupa jajan di kantin."
          ],
          correctAnswerIndex: 1,
          explanation: "Sesuai petunjuk QS. Al-Ma'idah ayat 2, kita diperintahkan untuk segera tolong-menolong dalam kebajikan dan takwa dengan mengharap rida Allah semata, tanpa pamrih atau imbalan materi."
        }
      },
      {
        id: "stop-bullying",
        title: "Stop Bullying (Menjaga Lisan)",
        description: "Menghormati kehormatan orang lain dengan lisan dan perbuatan, serta menjauhi ejekan atau rundungan.",
        iconName: "MessageCircleOff",
        quranVerse: {
          reference: "QS. Al-Hujurat: 11",
          textArabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ عَسَىٰ أَنْ يَكُونُوا خَيْرًا مِنْهُمْ",
          textLatin: "Yaa ayyuhalladziina aamanuu laa yaskhar qawmum min qawmin 'asaa ay yakuunuu khairam minhum...",
          textTranslation: "Wahai orang-orang yang beriman! Janganlah suatu kaum mengolok-olok kaum yang lain (karena) boleh jadi mereka (yang diperolok-olokkan) lebih baik dari mereka (yang mengolok-olok)...",
        },
        hadith: {
          reference: "HR. Bukhari (No. 10)",
          textArabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
          textTranslation: "Seorang muslim yang sejati adalah orang yang lidah dan tangannya tidak menyakiti orang lain.",
        },
        keyPoints: [
          "Tidak memanggil teman dengan julukan atau nama panggilan yang buruk/menghina.",
          "Menghindari penyebaran gosip, fitnah, atau mengejek kekurangan fisik dan latar belakang teman.",
          "Berani membela atau melaporkan kepada guru ketika melihat ada teman lain yang sedang dirundung (dibully).",
          "Menggunakan media sosial dengan bijak tanpa mencela atau menghujat teman."
        ],
        challenges: [
          { id: "no-bad-words", text: "Sehari penuh tanpa mengucapkan kata kotor, celaan, atau julukan buruk.", points: 20 },
          { id: "compliment-friend", text: "Memberikan pujian tulus atau kata-kata penyemangat kepada minimal satu teman.", points: 10 },
          { id: "stop-gossip", text: "Berani mengalihkan pembicaraan atau menolak ikut serta ketika melihat teman bergosip.", points: 15 }
        ],
        quiz: {
          id: "quiz-stop-bullying",
          question: "Apa definisi muslim sejati menurut sabda Nabi Muhammad SAW dalam HR. Bukhari?",
          options: [
            "Dia yang paling rajin belajar dan selalu mendapatkan nilai tertinggi di kelas.",
            "Dia yang tidak peduli pada lingkungan sekitar selama ibadahnya sendiri sudah baik.",
            "Dia yang mampu menjaga lisan dan tangannya sehingga umat muslim lainnya merasa aman dan selamat dari gangguannya.",
            "Dia yang suka menasihati orang lain dengan cara membentak di depan umum."
          ],
          correctAnswerIndex: 2,
          explanation: "Nabi SAW menegaskan bahwa seorang muslim sejati menjaga lisan (kata-kata, ejekan, fitnah) dan tangannya (kekerasan fisik, mengetik hinaan di media sosial) sehingga orang lain selamat dari gangguannya."
        }
      },
      {
        id: "menghargai-perbedaan",
        title: "Menghargai Perbedaan",
        description: "Menyadari bahwa perbedaan suku, ras, bahasa, dan kemampuan adalah ketentuan Allah agar kita saling mengenal dan menghormati.",
        iconName: "Globe",
        quranVerse: {
          reference: "QS. Al-Hujurat: 13",
          textArabic: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِنْدَ اللَّهِ أَتْقَاكُمْ",
          textLatin: "Yaa ayyuhan-naasu innaa khalaqnaakum min dzakariw wa untsaa wa ja'alnaakum syu'uubaw wa qabaa'ila lita'aarafuu, inna akramakum 'indallaahi atqaakum...",
          textTranslation: "Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal. Sesungguhnya yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa...",
        },
        hadith: {
          reference: "HR. Ahmad (5/411)",
          textArabic: "لاَ فَضْلَ لِعَرَبِيٍّ عَلَى أَعْجَمِيٍّ وَلاَ لِعَجَمِيٍّ عَلَى عَرَبِيٍّ وَلاَ لأَحْمَرَ عَلَى أَسْوَدَ وَلاَ أَسْوَدَ عَلَى أَحْمَرَ إِلاَّ بِالتَّقْوَى",
          textTranslation: "Ingatlah, tidak ada keutamaan bagi orang Arab atas orang non-Arab, tidak pula orang non-Arab atas orang Arab, tidak pula orang berkulit merah atas orang berkulit hitam, melainkan karena takwanya.",
        },
        keyPoints: [
          "Bermain dan belajar bersama siapa saja di sekolah tanpa membeda-bedakan latar belakang ekonomi atau suku.",
          "Menghormati pendapat teman saat berdiskusi kelompok meskipun berbeda pandangan.",
          "Menyadari bahwa kemuliaan seseorang di sisi Allah hanya diukur dari ketakwaannya, bukan kekayaan atau penampilan fisik.",
          "Bersikap ramah kepada teman-teman baru atau teman pindahan dari daerah lain."
        ],
        challenges: [
          { id: "group-diversity", text: "Bergabung dalam tim belajar dengan anggota yang berbeda suku atau kebiasaan denganmu.", points: 15 },
          { id: "respect-opinion", text: "Tetap tenang dan menghargai keputusan musyawarah kelas meskipun usulan pribadimu tidak terpilih.", points: 10 },
          { id: "welcome-newfriend", text: "Mengajak ngobrol atau membimbing teman baru/pindahan agar tidak merasa kesepian.", points: 15 }
        ],
        quiz: {
          id: "quiz-menghargai-perbedaan",
          question: "Diberikan keberagaman suku bangsa dan warna kulit di kelas, apakah tolak ukur utama seseorang menjadi paling mulia di sisi Allah SWT berdasarkan QS. Al-Hujurat ayat 13?",
          options: [
            "Memiliki garis keturunan ningrat atau berasal dari suku mayoritas.",
            "Ketakwaan kepada Allah, yaitu melaksanakan perintah-Nya dan menjauhi larangan-Nya.",
            "Wajah yang tampan atau cantik serta pakaian yang mewah.",
            "Memiliki pengikut (followers) terbanyak di media sosial."
          ],
          correctAnswerIndex: 1,
          explanation: "Sesuai akhir QS. Al-Hujurat ayat 13, Allah menyatakan secara tegas: 'Inna akramakum 'indallaahi atqaakum' (Sesungguhnya yang paling mulia di sisi Allah ialah orang yang paling bertakwa)."
        }
      }
    ]
  },
  {
    id: "adab-harian",
    title: "Adab Harian",
    description: "Panduan etika praktis dalam kegiatan sehari-hari agar seluruh aktivitas kita bernilai pahala ibadah.",
    iconName: "Calendar",
    colorTheme: {
      primary: "sky",
      bgLight: "bg-sky-50/50",
      badge: "bg-sky-100 text-sky-800",
      border: "border-sky-200",
      text: "text-sky-700",
      gradient: "from-sky-500 to-blue-600",
    },
    subTopics: [
      {
        id: "adab-makan-minum",
        title: "Adab Makan & Minum Sunah",
        description: "Membiasakan diri makan dan minum dengan tenang, sopan, bersih, dan sesuai sunah Rasulullah SAW.",
        iconName: "GlassWater",
        quranVerse: {
          reference: "QS. Al-A'raf: 31",
          textArabic: "وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ",
          textLatin: "...wa kuluu wasyrabuu wa laa tusrifuu, innahuu laa yuhibbul-musrifiin.",
          textTranslation: "...makan dan minumlah, tetapi jangan berlebihan. Sungguh, Allah tidak menyukai orang yang berlebih-lebihan.",
        },
        hadith: {
          reference: "HR. Bukhari (No. 5376)",
          textArabic: "يَا غُلَامُ، سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ",
          textTranslation: "Wahai anak, sebutlah nama Allah (bacalah bismillah sebelum makan), makanlah dengan tangan kananmu, dan makanlah makanan yang terdekat kepadamu.",
        },
        keyPoints: [
          "Membaca 'Bismillah' sebelum makan dan 'Alhamdulillah' sesudahnya.",
          "Makan dan minum harus dalam keadaan duduk, tidak sambil berjalan atau berdiri.",
          "Mengambil makanan dengan tangan kanan dan menyantap dari hidangan yang paling dekat dengan kita.",
          "Tidak mencela makanan; jika suka silakan makan, jika tidak suka boleh ditinggalkan tanpa menghina makanannya."
        ],
        challenges: [
          { id: "eat-sitting", text: "Selalu duduk dengan tenang saat makan atau sekadar minum air hari ini.", points: 15 },
          { id: "bismillah-alhamdulillah", text: "Mengamalkan doa pembuka (bismillah) dan penutup (alhamdulillah) di setiap sesi makan-minum.", points: 10 },
          { id: "use-right-hand", text: "Konsisten menggunakan tangan kanan ketika mengambil makanan dan menyuap.", points: 10 }
        ],
        quiz: {
          id: "quiz-adab-makan-minum",
          question: "Mengapa kita dilarang membuang-buang makanan dan menyisakan banyak makanan di piring kita sesuai ajaran Islam?",
          options: [
            "Karena akan membuat pemilik warung marah kepada kita.",
            "Sebab dalam Al-Qur'an disebutkan bahwa Allah membenci sifat berlebih-lebihan (israf), dan sisa makanan tersebut adalah hak setan serta menjauhkan keberkahan.",
            "Hanya agar piring kita tidak sulit dicuci saat beres-beres.",
            "Supaya kita tidak dituduh sebagai anak yang rakus oleh teman-teman."
          ],
          correctAnswerIndex: 1,
          explanation: "Allah melarang perbuatan israf (berlebih-lebihan/boros) dalam QS. Al-A'raf ayat 31. Selain itu, menyisakan makanan dan membuangnya dapat menghilangkan berkah makanan tersebut."
        }
      },
      {
        id: "adab-berbicara",
        title: "Berbicara Sopan & Jujur",
        description: "Menggunakan tutur kata yang lembut, jujur, bermanfaat, dan menghindari perkataan kasar atau dusta.",
        iconName: "MessageSquareText",
        quranVerse: {
          reference: "QS. Al-Ahzab: 70",
          textArabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا",
          textLatin: "Yaa ayyuhalladziina aamanuut-taqullaaha wa quuluu qawlan sadiidaa.",
          textTranslation: "Wahai orang-orang yang beriman! Bertakwalah kamu kepada Allah dan ucapkanlah perkataan yang benar (sopan, tepat, dan jujur).",
        },
        hadith: {
          reference: "HR. Bukhari & Muslim",
          textArabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
          textTranslation: "Barangsiapa yang beriman kepada Allah dan hari akhir, maka berkatalah yang baik atau diam.",
        },
        keyPoints: [
          "Berpikir dahulu sebelum berbicara agar tidak menyinggung hati orang lain.",
          "Berbicara jujur tanpa bumbu kebohongan, meskipun dalam candaan/gurauan.",
          "Menggunakan volume suara yang sedang, tidak meninggi atau membentak lawan bicara.",
          "Menghindari kata-kata kotor, makian, prasangka buruk, dan adu domba."
        ],
        challenges: [
          { id: "choose-silent", text: "Memilih diam daripada ikut-ikutan berdebat kusir tidak penting atau mencela.", points: 15 },
          { id: "soft-tone-parent", text: "Berbicara dengan suara lembut dan sopan saat menyahut panggilan orang tua/guru.", points: 15 },
          { id: "always-honest-words", text: "Mengakui kesalahan atau mengatakan fakta sebenarnya dengan jujur tanpa takut.", points: 15 }
        ],
        quiz: {
          id: "quiz-adab-berbicara",
          question: "Seorang teman menceritakan cerita bohong agar terlihat hebat di hadapan teman-teman lainnya. Pelajaran apa yang paling tepat dari HR. Bukhari & Muslim tentang hal ini?",
          options: [
            "Boleh berbohong asalkan semua orang terhibur dan senang mendengarnya.",
            "Kita harus mendukungnya agar dia tetap percaya diri di depan umum.",
            "Keimanan kepada Allah berbanding lurus dengan kemampuan mengontrol lisan, sehingga berbicara dengan jujur/baik jauh lebih utama daripada mengarang kedustaan.",
            "Kita harus segera meneriakinya dan mencelanya di depan semua orang."
          ],
          correctAnswerIndex: 2,
          explanation: "Nabi SAW mengaitkan keimanan kepada Allah dan hari akhir dengan kewajiban berucap baik. Jika tidak bisa menyampaikan kebaikan atau kebenaran, maka pilihan terbaik adalah diam."
        }
      },
      {
        id: "menghormati-guru",
        title: "Menghormati Guru saat Belajar",
        description: "Mendengarkan materi dengan takzim, menjaga kesopanan, dan mendoakan kebaikan bagi bapak dan ibu guru.",
        iconName: "GraduationCap",
        quranVerse: {
          reference: "QS. Al-Mujadilah: 11",
          textArabic: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
          textLatin: "Yarfa'illaahulladziina aamanuu minkum walladziina uutul-'ilma darajaat...",
          textTranslation: "...Allah akan mengangkat (derajat) orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu beberapa derajat...",
        },
        hadith: {
          reference: "HR. Ath-Thabarani",
          textArabic: "تَعَلَّمُوا الْعِلْمَ وَتَعَلَّمُوا لِلْعِلْمِ السَّكِينَةَ وَالْوَقَارَ وَتَوَاضَعُوا لِمَنْ تَعَلَّمُونَ مِنْهُ",
          textTranslation: "Belajarlah kalian ilmu untuk ketentraman dan ketenangan, serta tunduk patuh (tawadhu) lah kapada orang yang mengajarkan ilmu kepadamu (guru).",
        },
        keyPoints: [
          "Mendengarkan dengan tekun saat guru menerangkan pelajaran, tidak mengobrol sendiri.",
          "Meminta izin terlebih dahulu dengan mengangkat tangan sebelum bertanya atau keluar kelas.",
          "Mengucapkan salam dengan ramah saat berpapasan dengan guru di mana pun berada.",
          "Mengerjakan setiap tugas yang diamanahkan guru dengan sungguh-sungguh."
        ],
        challenges: [
          { id: "greet-teacher", text: "Mengucapkan salam dan senyum ramah saat berpapasan dengan bapak/ibu guru.", points: 10 },
          { id: "active-listener", text: "Fokus mendengarkan penjelasan guru tanpa bermain hp atau mencoret-coret buku sembarangan.", points: 15 },
          { id: "pray-for-teacher", text: "Mendoakan bapak dan ibu guru agar diberikan kesehatan dan dilapangkan rezekinya setelah salat.", points: 15 }
        ],
        quiz: {
          id: "quiz-menghormati-guru",
          question: "Mengapa kita wajib bersikap tawadhu (rendah hati) dan sopan kepada guru-guru kita selama proses menuntut ilmu?",
          options: [
            "Supaya guru kasihan lalu memberikan kita bocoran soal ujian.",
            "Sebab guru adalah pengganti orang tua kita dalam mendidik jiwa kita dengan ilmu bermanfat. Tanpa rida guru, keberkahan ilmu akan sangat sulit diraih.",
            "Karena guru memiliki kekuasaan mutlak untuk mengeluarkan kita dari sekolah tanpa alasan.",
            "Mata pelajaran tersebut hanya bisa dikuasai jika guru memuji kita secara langsung."
          ],
          correctAnswerIndex: 1,
          explanation: "Guru berjasa besar membekali materi zahir dan batin demi kesuksesan kita. Adab dan tawadhu kepada guru merupakan syarat utama ilmu kita berkah, bermanfaat, dan rida guru mempermudah jalan itu."
        }
      }
    ]
  },
  {
    id: "karakter-diri",
    title: "Karakter Diri",
    description: "Membentuk integritas moral kepribadian yang tangguh, tepercaya, dan jujur di hadapan sesama serta Allah SWT.",
    iconName: "ShieldCheck",
    colorTheme: {
      primary: "amber",
      bgLight: "bg-amber-50/50",
      badge: "bg-amber-100 text-amber-800",
      border: "border-amber-200",
      text: "text-amber-700",
      gradient: "from-amber-500 to-orange-600",
    },
    subTopics: [
      {
        id: "sifat-jujur",
        title: "Sifat Jujur (Tidak Menyontek)",
        description: "Menanamkan nilai kejujuran dalam segala aspek kehidupan termasuk saat ujian di sekolah.",
        iconName: "BadgeCheck",
        quranVerse: {
          reference: "QS. At-Tawbah: 119",
          textArabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ",
          textLatin: "Yaa ayyuhalladziina aamanuut-taqullaaha wa kuunuu ma'as-saadiqiin.",
          textTranslation: "Wahai orang-orang yang beriman! Bertakwalah kepada Allah, dan bersamalah kamu dengan orang-orang yang benar (jujur).",
        },
        hadith: {
          reference: "HR. Muslim (No. 102)",
          textArabic: "مَنْ غَشَّنَا فَلَيْسَ مِنَّا",
          textTranslation: "Barangsiapa yang menipu (berbuat curang/menyontek), ia bukanlah bagian dari golongan kami.",
        },
        keyPoints: [
          "Mengerjakan ujian sekolah secara mandiri dengan kemampuan sendiri, percaya diri atas hasil belajar.",
          "Mengakui kesalahan secara terbuka jika tidak sengaja melakukan pelanggaran atau keteledoran.",
          "Segera mengembalikan uang kembalian belanja yang berlebih kepada orang tua atau pedagang.",
          "Menolak tawaran teman yang mengajak kerja sama curang saat ujian."
        ],
        challenges: [
          { id: "honest-test", text: "Mengerjakan tugas sekolah secara pure mandiri tanpa menyalin jawaban milik orang lain.", points: 20 },
          { id: "return-excess-money", text: "Mengembalikan sisa belanja sekecil apa pun sisa recehannya dengan tepat kepada pemiliknya.", points: 15 },
          { id: "truth-teller", text: "Mengatakan kebenaran meskipun terasa sulit atau berisiko membuatmu ditegur ringan.", points: 15 }
        ],
        quiz: {
          id: "quiz-sifat-jujur",
          question: "Nabi SAW bersabda, 'Man ghasyana falaysa minna' (Siapa yang mencurangi kami, ia tidak termasuk golongan kami). Apa relevansi hadis ini dengan kebiasaan menyontek?",
          options: [
            "Menyontek diperbolehkan asalkan nilai kita jelek sekali jika dikerjakan sendiri.",
            "Menyontek dikategorikan sebagai tindakan curang/culas yang mencederai kehormatan seorang muslim dan dilarang keras, pelakunya mendapat ancaman tidak diakui golongannya.",
            "Menyontek hanya dilarang jika tertangkap basah oleh pengawas kelas.",
            "Tindakan menyontek justru menggambarkan kerja sama tim yang baik menurut hadiat tersebut."
          ],
          correctAnswerIndex: 1,
          explanation: "Menyontek adalah perbuatan curang (al-ghasysy). Ancaman Rasulullah cukup keras yaitu pelaku kecurangan tidak diakui penuh sebagai pengikut ajaran beliau yang lurus, bersikap jujur adalah harga mati."
        }
      },
      {
        id: "sifat-amanah",
        title: "Sifat Amanah (Tanggung Jawab)",
        description: "Menjalankan setiap tugas dan kewajiban yang dititipkan atau dipercayakan dengan penuh rasa tanggung jawab.",
        iconName: "Hearthandshake",
        quranVerse: {
          reference: "QS. Al-Anfal: 27",
          textArabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَخُونُوا اللَّهَ وَالرَّسُولَ وَتَخُونُوا أَمَانَاتِكُمْ وَأَنْتُمْ تَعَلَمُونَ",
          textLatin: "Yaa ayyuhalladziina aamanuu laa takhuunullaaha war-rasuula wa takhuunuu amaanaatikum wa antum ta'lamuun.",
          textTranslation: "Wahai orang-orang yang beriman! Janganlah kamu mengkhianati Allah dan Rasul dan (juga) janganlah kamu mengkhianati amanat yang dipercayakan kepadamu, sedang kamu mengetahui.",
        },
        hadith: {
          reference: "HR. Ahmad (No. 12386)",
          textArabic: "لاَ إِيمَانَ لِمَنْ لاَ أَمَانَةَ لَهُ وَلاَ دِينَ لِمَنْ لاَ عَهْدَ لَهُ",
          textTranslation: "Tidak ada iman (yang sempurna) bagi orang yang tidak memegang amanah, dan tidak ada agama bagi orang yang tidak menepati janji.",
        },
        keyPoints: [
          "Mengerjakan piket kelas saat jatuh jadwal giliran piket harian.",
          "Menyampaikan titipan pesan, barang, atau uang dari guru/orang tua secara utuh tanpa dikurangi.",
          "Menjaga rahasia pribadi orang lain yang dipercayakan kepadamu agar tidak tersebar luas.",
          "Menyelesaikan tugas kelompok yang telah disepakati bersama secara bersungguh-sungguh."
        ],
        challenges: [
          { id: "deliver-message", text: "Menyampaikan pesan titipan atau barang orang lain tepat pada penerimanya secepat mungkin.", points: 15 },
          { id: "class-cleaning-duty", text: "Menjalankan tugas kebersihan kelas (piket) atau membersihkan kamar tidur sendiri tanpa ditunda.", points: 15 },
          { id: "keep-secrets", text: "Menutup rapat rahasia aib teman yang tanpa sengaja kamu ketahui agar tidak menjadi bahan omongan.", points: 15 }
        ],
        quiz: {
          id: "quiz-sifat-amanah",
          question: "Luthfi ditunjuk menjadi bendahara kelas. Dia memegang uang iuran kas kelas dalam dompetnya. Manakah tindakan mencerminkan sifat amanah sesuai QS. Al-Anfal ayat 27?",
          options: [
            "Meminjam uang kas tersebut sebentar untuk beli game coin, lalu menggantinya bulan depan diam-diam.",
            "Menyimpan uang kas dengan sangat rapi, mendokumentasikan setiap pengeluaran, dan tidak menyalahgunakannya sekalipun tak ada yang memperhatikan.",
            "Menggunakan uang kas untuk membelikan jajan teman-teman terdekatnya saja agar dibilang royal.",
            "Menghilangkan uang kas lalu beralasan terjatuh tanpa mau mengganti sepeser pun."
          ],
          correctAnswerIndex: 1,
          explanation: "Jawaban yang benar adalah opsi kedua (index 1). Menjaga uang amanah tanpa menggunakannya untuk kepentingan pribadi, serta menyusun pembukuan transparan merupakan bentuk konkret amanah."
        }
      }
    ]
  },
  {
    id: "peduli-lingkungan",
    title: "Peduli Lingkungan",
    description: "Menjaga kebersihan dan kelestarian ekosistem alam sebagai wujud syukur kita atas ciptaan Allah SWT.",
    iconName: "Leaf",
    colorTheme: {
      primary: "teal",
      bgLight: "bg-teal-50/50",
      badge: "bg-teal-100 text-teal-800",
      border: "border-teal-200",
      text: "text-teal-700",
      gradient: "from-teal-500 to-emerald-600",
    },
    subTopics: [
      {
        id: "kebersihan-lingkungan",
        title: "Menjaga Kebersihan",
        description: "Membuang sampah pada tempatnya dan rajin menjaga kebersihan sebagai bentuk konsekuensi keimanan kita.",
        iconName: "Trash2",
        quranVerse: {
          reference: "QS. Al-Baqarah: 222",
          textArabic: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",
          textLatin: "...Innallaaha yuhibbut-tawwabiina wa yuhibbul-mutatahhiriin.",
          textTranslation: "...Sesungguhnya Allah menyukai orang-orang yang bertaubat dan menyukai orang-orang yang mensucikan/membersihkan diri.",
        },
        hadith: {
          reference: "HR. Muslim (No. 223)",
          textArabic: "الطُّهُورُ شَطْرُ الإِيمَانِ",
          textTranslation: "Kesucian (kebersihan diri dan lingkungan) adalah setengah (sebagian) dari keimanan.",
        },
        keyPoints: [
          "Segera memungut sampah yang berserakan di sekitar kelas dan membuangnya ke tempat sampah terdekat.",
          "Menjaga laci meja belajar bebas dari tumpukan bungkus sisa makanan ringan.",
          "Membiasakan merapikan barang dan menyapu kamar tidur secara periodik.",
          "Membersihkan lingkungan sekitar masjid setelah selesai mengikuti kajian atau salat berjamaah."
        ],
        challenges: [
          { id: "pick-three-trashs", text: "Memungut minimal 3 sampah plastik/bungkus di luar ruangan dan membuangnya ke tong sampah.", points: 15 },
          { id: "clean-desk", text: "Membersihkan laci meja dan permukaan meja dari debu serta coretan bolpoin.", points: 10 },
          { id: "sweep-class", text: "Kerap melakukan piket kelas atau membantu ibu menyapu di rumah tanpa disuruh.", points: 15 }
        ],
        quiz: {
          id: "quiz-menjaga-kebersihan",
          question: "Apa hubungan antara kebersihan lingkungan dengan iman seorang hamba berdasarkan sabda Nabi SAW dalam HR. Muslim?",
          options: [
            "Orang bersih selalu terlihat modis dan berkelas.",
            "Kebersihan zahir jasmani dan kebersihan batin rohani merupakan satu kesatuan tak terpisahkan, di mana bersuci dan menjaga kebersihan merupakan bukti cermin iman yang sejati.",
            "Tidak ada hubungannya, karena kebersihan hanyalah soal kesehatan jasmani semata-mata.",
            "Muslim hanya diwajibkan membersihkan sajadah pribadinya saja ketika hendak beribadah."
          ],
          correctAnswerIndex: 1,
          explanation: "Nabi SAW bersabda 'Ath-thuhuuru syathrul iimaan' (Kesucian/kebersihan setengah dari iman) karena mencerminkan kepatuhan, keindahan, dan cinta seorang hamba kepada tempat-tempat ibadah serta bumi ciptaan Allah."
        }
      },
      {
        id: "hemat-air-makanan",
        title: "Hemat Air & Tidak Buang Makanan",
        description: "Mencegah perbuatan boros dan mubazir air wudhu atau sisa makanan yang tidak barakah.",
        iconName: "Droplet",
        quranVerse: {
          reference: "QS. Al-Isra': 27",
          textArabic: "إِنَّ الْمُبَذِّرِينَ كَانُوا إِخْوَانَ الشَّيَاطِينِ ۖ وَكَانَ الشَّيْطَانُ لِرَبِّهِ كَفُورًا",
          textLatin: "Innal-mubaddziriina kaanuu ikhwaanasy-syayaatiini wa kaanasy-syaytaanu lirabbihii kafuuraa.",
          textTranslation: "Sesungguhnya orang-orang yang pemboros (mubazir) itu adalah saudara-saudara setan dan setan itu sangat ingkar kepada Tuhannya.",
        },
        hadith: {
          reference: "HR. Ahmad & Ibnu Majah",
          textArabic: "لاَ تُسْرِفْ فِي الْمَاءِ وَلَوْ كُنْتَ عَلَى نَهْرٍ جَارٍ",
          textTranslation: "Nabi SAW bersabda: 'Janganlah kamu boros dalam menggunakan air, meskipun kamu sedang berada di sungai yang mengalir deras.' Beliau juga menganjurkan menyapu piring makan kering tanpa membiarkan makanan bersisa mubazir.",
        },
        keyPoints: [
          "Mengecilkan keran air saat mencuci tangan atau berwudhu agar tidak ada kucuran air yang terbuang percuma.",
          "Hanya mengambil porsi makanan secukupnya sesuai kemampuan makan kita sehingga tidak ada sisa nasi terbuang.",
          "Menghabiskan setiap butir nasi yang ada di piring sebagai bentuk syukur atas limpahan nikmat rezeki pangan Allah.",
          "Segera menutup keran bak mandi apabila kapasitas air sudah terisi penuh."
        ],
        challenges: [
          { id: "clean-plate", text: "Menghabiskan seluruh lauk pauk tanpa menyisakan sebutir nasi pun di piring selama seharian penuh.", points: 20 },
          { id: "half-tap-wudhu", text: "Mengontrol putaran keran air wudhu seminim mungkin saat membasuh anggota badan.", points: 15 },
          { id: "close-leaked-taps", text: "Mematikan keran air bak yang masih menetes deras atau bocor ketika tidak digunakan.", points: 10 }
        ],
        quiz: {
          id: "quiz-hemat-air",
          question: "Mengapa Rasulullah melarang kita boros air wudhu, sekalipun kita sedang berwudhu di sungai besar yang airnya melimpah ruah?",
          options: [
            "Supaya air sungai tidak cepat menyusut dan habis.",
            "Agar proses wudhu tidak memakan durasi yang terlalu lama.",
            "Karena israf (berlebih-lebihan/pemborosan) adalah perbuatan buruk yang dicintai setan (saudara setan), dan melatih diri taat aturan kebaikan sejak kecil.",
            "Hanya sekadar hiasan kata agar santri hemat bayar tagihan air."
          ],
          correctAnswerIndex: 2,
          explanation: "Nabi SAW melarang israf dalam segala kondisi, tak terkecuali dalam ibadah wudhu. Al-Qur'an surah Al-Isra' ayat 27 mengecap pemboros sebagai 'ikhwanasy syayathin' (saudara setan) karena sifat kufur nikmat."
        }
      }
    ]
  }
];
