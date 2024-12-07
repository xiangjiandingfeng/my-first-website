// 轮播图配置
const carouselImages = [
    'zhaopian20241204/1.jpg',
    'zhaopian20241204/2.jpg',
    'zhaopian20241204/3.jpg',
    'zhaopian20241204/4.jpg',
    'zhaopian20241204/5.jpg'
];

let currentSlide = 0;

// 初始化轮播图
function initCarousel() {
    const carousel = document.querySelector('.carousel');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    // 添加调试日志
    console.log('Initializing carousel');
    console.log('Carousel element:', carousel);
    console.log('Dots container:', dotsContainer);
    
    // 添加图片
    carouselImages.forEach((image, index) => {
        const img = document.createElement('div');
        img.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        img.style.backgroundImage = `url(${image})`;
        carousel.appendChild(img);
        console.log(`Added image ${index + 1}:`, image);
        
        // 添加导航点
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // 自动轮播
    setInterval(nextSlide, 5000);
}

// 切换到指定幻灯片
function goToSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!items.length || !dots.length) return;
    
    items[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    items[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// 下一张幻灯片
function nextSlide() {
    const nextIndex = (currentSlide + 1) % carouselImages.length;
    goToSlide(nextIndex);
}

// 上一张幻灯片
function prevSlide() {
    const prevIndex = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
    goToSlide(prevIndex);
}

// 微信二维码控制函数
function toggleWechatQR(event) {
    event.preventDefault();
    const qr = document.getElementById('wechatQR');
    console.log('Toggling QR code');
    console.log('QR element:', qr);
    qr.classList.toggle('show');
    
    // 添加背景遮罩
    let overlay = document.querySelector('.qr-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'qr-overlay';
        document.body.appendChild(overlay);
    }
    overlay.classList.toggle('show');
    
    // 点击遮罩关闭二维码
    overlay.onclick = function() {
        qr.classList.remove('show');
        overlay.classList.remove('show');
    };
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    initCarousel();
}); 