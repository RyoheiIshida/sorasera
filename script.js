// スムーズスクロール補助とインタラクティブ機能

document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションリンクのスムーズスクロール
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // セクションの遅延読み込みアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // セクションの初期状態を設定
    const sections = document.querySelectorAll('.section, .therapist-card, .philosophy-item, .service-item');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // アクティブなナビゲーション項目の表示
    const navItems = document.querySelectorAll('.nav a');
    
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + currentSection) {
                item.style.opacity = '1';
                item.style.borderBottom = '2px solid white';
            } else {
                item.style.opacity = '0.8';
                item.style.borderBottom = 'none';
            }
        });
    });

    // ページ読み込み時のアニメーション
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    
    window.addEventListener('load', function() {
        if (hero) {
            hero.style.opacity = '1';
            hero.style.animation = 'fadeIn 0.8s ease';
        }
    });

    // モバイルメニューの簡易実装
    const nav = document.querySelector('.nav');
    if (window.innerWidth <= 768) {
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                // リンク後にアクティブ状態を更新
                setTimeout(() => {
                    window.dispatchEvent(new Event('scroll'));
                }, 100);
            });
        });
    }
});

// ページの先頭へ戻るボタンの追加関数
function addScrollToTopButton() {
    // この関数は後から必要に応じて実装可能
    const scrollBtn = document.createElement('button');
    scrollBtn.textContent = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2B7ED8 0%, #5BA3E8 100%);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 99;
        font-size: 1.5rem;
        font-weight: bold;
    `;

    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.pointerEvents = 'auto';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.pointerEvents = 'none';
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ページ読み込み後にボタンを追加
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addScrollToTopButton);
} else {
    addScrollToTopButton();
}
