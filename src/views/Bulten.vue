<template>
  <div class="bulten_content">
    <div class="row">
      <div class="col-md-4">
        <div class="bulten_left_top">
          <h3>Piyasalara Bakış</h3>

          <div class="bulten_menu">
            <ul>
              <li><a href="#">Günlük Strateji Bülteni</a></li>
              <li class="active">
                <a href="#">Haftalık Piyasa Analizi</a>

                <ul class="alt_menu">
                  <li><a href="#">Haftalık Piyasa Takvimi</a></li>
                  <li><a href="#">Haftalık Strateji Bülteni</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="bulten_left_bottom">
          <div class="bt_left_bt_img">
            <img :src="logo" />
          </div>
          <span
            >Ayrıntılı bilgi için iletişim formumuzu doldurun, müşteri
            temsilcimiz sizinle iletişime geçsin.</span
          >

          <a href="#">
            <div class="hesap_olustur">Hesap Oluştur</div>
          </a>

          <div class="bulten_left_bottom_is">
            <img :src="personel" />
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="bulten_right_top">
          <h4>Günlük Strateji Bülteni / 31 Ocak 2022</h4>

          <p>
            Piyasalara Bakış <br /><br />

            Güne pozitif seyirle başlayan BIST100 endeksi günün geri kalanında
            kar satışlarıyla geriledi ve haftanın son işlem gününü %0.7 kayıpla
            1,983 seviyesinden kapattı. İşlem hacmi 28.2 milyar TL seviyesinde
            gerçekleşti, endekse dahil olan 37 hisse değer kazandı, 61 hisse ise
            değer kaybetti. Dolar/TL kuru bu sabah saatlerinde 13.52
            seviyesinden işlem görürken, yurt dışı vadeli hisse piyasalarında
            ise pozitif bir seyir izleniyor. <br /><br />

            Geçtiğimiz haftaya satışlarla başlayan küresel hisse endeksleri
            hafta boyunca dalgalı seyretti ancak kapanışlar pozitif tarafta
            gerçekleşti. Özellikle ABD’de FED’in beklenenden daha sıkı para
            politikası uygulayabileceği düşüncesi teknoloji hisseleri üzerinde
            baskı yaratırken tahvil faizlerinde de yüksek seyir devam etti.
            Hafta içinde toplanan FED, Mart ayında ilk faiz artırımına işaret
            ederken, 3.çeyrek ile beraber bilanço küçültmesinin de
            başlayabileceğinin sinyalini verdi. Piyasa beklentileri FED’in 2022
            yılında 5 kez faiz artıracağı yönünde şekilleniyor. Öte yandan gelen
            4.çeyrek şirket bilançoları da hem sektör hem de ekonomi açısından
            fikir doğurabiliyor. Zira haftanın son işlem gününde açıklanan Apple
            finansalları endekslerdeki tepkiye liderlik etti. Şirketin
            beklentilerin üzerinde kar açıklamasının yanı sıra küresel tedarik
            sorununa karşı iyimser beklentilere sahip olması piyasalarda da
            olumlu karşılandı. Bu hafta Çin piyasaları kapalı olacak. Avrupa’da
            enflasyon, PMI verileri, ABD’de ise PMI ve tarımdışı istihdam raporu
            yayınlanacak. Ayrıca hafta içinde İngiltere ve Avrupa Merkez Bankası
            faiz kararları takip edilecek. İçeride ise BDDK bankacılık verileri,
            PMI endeksi ve Ocak ayı enflasyonu bekleniyor. Geçen hafta kısmen
            dinen Rusya-Ukrayna gerginliği de yakından takip edilecek.<br /><br />

            BIST100 endeksinin güne alımlarla başlamasını bekliyoruz. Kısa
            vadede oluşan sıkışma formasyonunun yukarı tamamlanabilmesi için
            2,000 seviyesinin aşılması gerektiğini düşünüyoruz. Bu aşamada 2,100
            ilk güçlü direnç konumuna gelirken 1,970-1,950 ve 1,900 destek
            seviyeleri olarak takip edilebilir. Yatırımcılara 1,950 zarar-kes
            seviyesi olmak üzere pozisyonlarını korumalarını öneriyoruz, 2,000
            seviyesi üzerinde ise pozisyonlar artırılabilir.<br /><br />

            Sektör ve Şirket Haberleri<br /><br />

            Borsa İstanbul Duyurusu <br />
            Kısa Kısa Haberler: ARCLK, ISGYO, SAHOL <br />
            Genel Kurul Tarihleri Tablosu <br />
            Haftalık Ajanda
          </p>
        </div>

        <div class="bulten_right_bottom">
          <h5>Geçmiş Günlük Strateji Bülteni</h5>

          <div class="row">
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bulten_item">
                <div class="bulten_item_icon">
                  <img :src="pdfIcon" />
                </div>
                <div class="bulten_item_text">
                  <h5>Günlük Strateji Bülteni</h5>
                  <span>31 Ocak 2022</span>
                </div>
                <a href="#" class="bulten_item_link">
                  <div class="download">
                    <div class="down_icon"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "bulten",
  bodyClass: "bulten-page",
  props: {
    logo: {
      type: String,
      default: require("@/assets/img/logo.svg"),
    },
    personel: {
      type: String,
      default: require("@/assets/img/personel_img.svg"),
    },
    pdfIcon: {
      type: String,
      default: require("@/assets/img/pdf_icon.svg"),
    }
  },
};
</script>