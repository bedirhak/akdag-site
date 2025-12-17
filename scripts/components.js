// Akdağ Dekorasyon - Header ve Footer Component Script
// Bu script tüm sayfalara eklenecek ve otomatik olarak header/footer ekleyecek

document.addEventListener('DOMContentLoaded', function () {
    createHeader();
    createFooter();
    addBodyPadding();

    // Window resize'da padding'i yeniden hesapla
    window.addEventListener('resize', addBodyPadding);
});

function createHeader() {
    const header = document.createElement('header');
    header.className = 'angel-header';
    header.innerHTML = `
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="top-bar-container">
                <div class="top-bar-contact">
                    <div class="top-contact-item">
                        <i class="fas fa-phone"></i>
                        <a href="tel:+905545013325">0554 501 33 25</a>
                    </div>
                    <div class="top-contact-item">
                        <i class="fas fa-phone"></i>
                        <a href="tel:+905302373425">0530 237 34 25</a>
                    </div>
                    <div class="top-contact-item">
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:akdagersin984@gmail.com">akdagersin984@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Main Header -->
        <div class="main-header">
            <div class="header-container">
                <div class="logo-section">
                    <a href="index.html" class="logo">
                        <img src="assets/images/logo.png" alt="Akdağ Dekorasyon" class="logo-image">
                    </a>
                </div>
                
                <nav class="main-navigation">
                    <ul class="nav-menu">
                        <li><a href="index.html" class="nav-link">Ana Sayfa</a></li>
                        <li><a href="hakkimizda.html" class="nav-link">Hakkımızda</a></li>
                        <li><a href="galeri.html" class="nav-link">Yaptığımız İşler</a></li>
                        <li class="dropdown">
                            <a href="#" class="nav-link dropdown-toggle">
                                Hizmetlerimiz <i class="fas fa-chevron-down"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="boya-alci.html" class="dropdown-link">Boya & Alçı İşleri</a></li>
                                <li><a href="fayans-seramik.html" class="dropdown-link">Fayans & Seramik</a></li>
                                <li><a href="laminat-parke.html" class="dropdown-link">Laminat & Parke</a></li>
                                <li><a href="cati-izolasyon.html" class="dropdown-link">Çatı & İzolasyon</a></li>
                                <li><a href="kapi-dolap.html" class="dropdown-link">Kapı & Dolap</a></li>
                                <li><a href="tesisat-elektrik.html" class="dropdown-link">Tesisat & Elektrik</a></li>
                                <li><a href="duvar-kaplama.html" class="dropdown-link">Duvar Kaplama</a></li>
                                <li><a href="dis-mekan.html" class="dropdown-link">Dış Mekan & Pergola</a></li>
                                <li><a href="tadilat-tamirat.html" class="dropdown-link">Tadilat & Tamirat</a></li>
                                <li><a href="anahtar-teslim.html" class="dropdown-link">Anahtar Teslim Projeler</a></li>
                            </ul>
                        </li>
                        <li><a href="iletisim.html" class="nav-link">İletişim</a></li>
                    </ul>
                    
                    <div class="contact-info">
                        <a href="tel:+905545013325" class="cta-button">Hemen Ara</a>
                    </div>
                    
                    <div class="mobile-menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </div>
    `;

    // Header'ı body'nin en başına ekle
    document.body.insertBefore(header, document.body.firstChild);

    // Mobile menu toggle functionality
    const mobileToggle = header.querySelector('.mobile-menu-toggle');
    const navMenu = header.querySelector('.nav-menu');

    mobileToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Dropdown menu functionality
    const dropdownToggle = header.querySelector('.dropdown-toggle');
    const dropdown = header.querySelector('.dropdown');

    // Dropdown toggle on click
    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Dropdown hover for desktop
    dropdown.addEventListener('mouseenter', function () {
        if (window.innerWidth > 768) {
            dropdown.classList.add('active');
        }
    });

    dropdown.addEventListener('mouseleave', function () {
        if (window.innerWidth > 768) {
            dropdown.classList.remove('active');
        }
    });

    // Aktif sayfa linkini vurgula
    highlightActiveLink();
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'angel-footer';
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-content">
                <!-- Şirket Bilgileri -->
                <div class="footer-section company-info">
                    <div class="footer-logo">
                        <img src="assets/images/logo.png" alt="Akdağ Dekorasyon" class="footer-logo-image">
                    </div>
                    <p class="company-description">
                        İstanbul'un güvenilir tadilat ve dekorasyon firması. Boya, alçı, fayans, parke, çatı, tesisat ve 
                        anahtar teslim proje hizmetleri sunuyoruz.
                    </p>
                </div>
                
                <!-- Hızlı Linkler -->
                <div class="footer-section quick-links-section">
                    <h4>Hızlı Linkler</h4>
                    <ul class="footer-nav-list">
                        <li><a href="index.html"><i class="fas fa-chevron-right"></i> Ana Sayfa</a></li>
                        <li><a href="hakkimizda.html"><i class="fas fa-chevron-right"></i> Hakkımızda</a></li>
                        <li><a href="galeri.html"><i class="fas fa-chevron-right"></i> Yaptığımız İşler</a></li>
                        <li><a href="iletisim.html"><i class="fas fa-chevron-right"></i> İletişim</a></li>
                    </ul>
                </div>
                
                <!-- Hizmetlerimiz -->
                <div class="footer-section services-section">
                    <h4>Hizmetlerimiz</h4>
                    <ul class="footer-nav-list">
                        <li><a href="boya-alci.html"><i class="fas fa-chevron-right"></i> Boya & Alçı</a></li>
                        <li><a href="fayans-seramik.html"><i class="fas fa-chevron-right"></i> Fayans & Seramik</a></li>
                        <li><a href="laminat-parke.html"><i class="fas fa-chevron-right"></i> Laminat & Parke</a></li>
                        <li><a href="tadilat-tamirat.html"><i class="fas fa-chevron-right"></i> Tadilat & Tamirat</a></li>
                        <li><a href="anahtar-teslim.html"><i class="fas fa-chevron-right"></i> Anahtar Teslim</a></li>
                    </ul>
                </div>
                
                <!-- İletişim Bilgileri -->
                <div class="footer-section contact-info">
                    <h4>İletişim</h4>
                    <div class="contact-list">
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <a href="tel:+905545013325">0554 501 33 25</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <a href="tel:+905302373425">0530 237 34 25</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:akdagersin984@gmail.com">akdagersin984@gmail.com</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>İstanbul, Türkiye</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <p>&copy; 2025 Akdağ Dekorasyon. Tüm hakları saklıdır.</p>
                    <div class="footer-bottom-links">
                        <a href="#" class="footer-link">Sakarya Digital Tarafından Hazırlanmıştır.</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Footer'ı body'nin en sonuna ekle
    document.body.appendChild(footer);
}

function addBodyPadding() {
    // Header ve footer yüksekliği için body'ye padding ekle
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        document.body.style.paddingTop = '70px'; // Mobile header yüksekliği
    } else {
        // Top bar (44px) + Main header (90px) = 134px
        document.body.style.paddingTop = '134px'; // Desktop header yüksekliği
    }

    document.body.style.paddingBottom = '0'; // Footer fixed değil
}

function highlightActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Scroll efekti için header'a class ekle
window.addEventListener('scroll', function () {
    const header = document.querySelector('.angel-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scroll Function - Anchor linkler için
document.addEventListener('DOMContentLoaded', function () {
    // Tüm anchor linkleri seç
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Header yüksekliğini hesaba kat
                const headerHeight = document.querySelector('.angel-header').offsetHeight;
                const offsetTop = targetElement.offsetTop - headerHeight - 20; // 20px extra padding

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) {
        createMobileFAQ();
    } else {
        // Desktop FAQ functionality
        const faqQuestions = document.querySelectorAll('.faq-question');
        const faqAnswers = document.querySelectorAll('.faq-answer');

        if (faqQuestions.length > 0) {
            faqQuestions.forEach(question => {
                question.addEventListener('click', function () {
                    // Remove active class from all questions
                    faqQuestions.forEach(q => q.classList.remove('active'));

                    // Hide all answers
                    faqAnswers.forEach(answer => answer.classList.remove('active'));

                    // Add active class to clicked question
                    this.classList.add('active');

                    // Show corresponding answer
                    const answerId = this.getAttribute('data-answer');
                    const targetAnswer = document.getElementById(answerId);

                    if (targetAnswer) {
                        targetAnswer.classList.add('active');

                        // Restart cleaning animation
                        restartCleaningAnimation();
                    }
                });
            });
        }
    }
});

function createMobileFAQ() {
    const faqContent = document.querySelector('.faq-content');
    if (!faqContent) return;

    const faqData = [
        {
            question: "Akdağ Dekorasyon İstanbul'da hangi bölgelerde hizmet veriyor?",
            title: "İstanbul Genelinde Hizmet",
            answer: "Akdağ Dekorasyon olarak İstanbul'un tüm ilçelerinde profesyonel tadilat ve dekorasyon hizmeti veriyoruz. Kadıköy, Beşiktaş, Üsküdar, Bakırköy, Ataşehir, Şişli ve daha birçok bölgede hizmetinizdeyiz."
        },
        {
            question: "Hangi tür tadilat hizmetleri sunuyorsunuz?",
            title: "Kapsamlı Tadilat Çözümleri",
            answer: "Boya, alçı, fayans, parke, çatı, izolasyon, kapı-dolap, tesisat, elektrik, duvar kaplama, dış mekan düzenleme ve anahtar teslim proje hizmetleri sunuyoruz."
        },
        {
            question: "Kullandığınız malzemeler kaliteli mi?",
            title: "A Kalite Malzemeler",
            answer: "Evet, tüm projelerimizde A kalite ve garantili malzemeler kullanıyoruz. Boya, fayans, parke ve tüm malzemeleri güvenilir tedarikçilerden temin ediyoruz."
        },
        {
            question: "Randevu nasıl alabilirim?",
            title: "Kolay Randevu Sistemi",
            answer: "0554 501 33 25 numarasından bizi arayabilir, WhatsApp üzerinden yazabilir veya web sitemizdeki iletişim formunu doldurabilirsiniz. 24 saat içinde geri dönüş yapıyoruz."
        },
        {
            question: "Fiyatlandırmanız nasıl?",
            title: "Şeffaf Fiyatlandırma",
            answer: "Fiyatlarımız projenin kapsamı, kullanılacak malzeme ve işçilik süresine göre belirlenir. Ücretsiz keşif sonrası net fiyat teklifi veriyoruz."
        },
        {
            question: "İşçilik garantisi veriyor musunuz?",
            title: "Tam Güvence",
            answer: "Evet, tüm işlerimizde işçilik garantisi veriyoruz. Herhangi bir sorun yaşamanız durumunda ücretsiz onarım hizmeti sağlıyoruz."
        },
        {
            question: "Proje süreleri ne kadar?",
            title: "Zamanında Teslimat",
            answer: "Proje süreleri işin kapsamına göre değişir. Tek oda boya 1-2 gün, komple daire tadilatı 2-4 hafta sürebilir. Keşif sonrası net süre planı sunuyoruz."
        },
        {
            question: "Anahtar teslim proje yapıyor musunuz?",
            title: "Anahtar Teslim Çözümler",
            answer: "Evet, ev, ofis, hastane, banka ve her türlü mekan için anahtar teslim proje hizmeti veriyoruz. Tasarımdan uygulamaya tüm işleri koordineli yürütüyoruz."
        }
    ];

    // Clear existing content and create mobile FAQ
    faqContent.innerHTML = '';

    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'mobile-faq-item';

        faqItem.innerHTML = `
            <div class="mobile-faq-question" data-index="${index}">
                <span>${item.question}</span>
            </div>
            <div class="mobile-faq-answer">
                <div class="mobile-faq-answer-content">
                    <h4>${item.title}</h4>
                    <p>${item.answer}</p>
                </div>
            </div>
        `;

        faqContent.appendChild(faqItem);
    });

    // Add click event listeners to mobile FAQ items
    document.querySelectorAll('.mobile-faq-question').forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.mobile-faq-answer');
            const isActive = this.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.mobile-faq-question').forEach(q => {
                q.classList.remove('active');
                q.parentElement.querySelector('.mobile-faq-answer').classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// Window resize handler for FAQ
window.addEventListener('resize', function () {
    if (document.querySelector('.faq-section')) {
        const currentWidth = window.innerWidth;
        const isMobile = currentWidth <= 768;
        const hasMobileFAQ = document.querySelector('.mobile-faq-item');

        // If mobile and no mobile FAQ or desktop and has mobile FAQ, reload
        if ((isMobile && !hasMobileFAQ) || (!isMobile && hasMobileFAQ)) {
            location.reload();
        }
    }
});

// Restart cleaning animation function
function restartCleaningAnimation() {
    const animationElements = document.querySelectorAll('.bubble, .sparkle, .broom, .spray-bottle, .progress-fill');

    animationElements.forEach(element => {
        // Remove animation temporarily
        element.style.animation = 'none';

        // Force reflow
        element.offsetHeight;

        // Re-add animation
        element.style.animation = '';
    });
}