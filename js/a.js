var images = ['./图片/sumi1.jpg', './图片/sumi2.jpg', './图片/sumi3.jpg']; // 背景图片列表
        var currentIndex = 0; // 当前背景图片索引

        function changeBackground() {
            document.body.style.backgroundImage = 'url("' + images[currentIndex] + '")'; // 设置背景图片
            currentIndex = (currentIndex + 1) % images.length; // 更新索引
        }

        // 初始加载背景图片
        changeBackground();

        // 每隔一定时间切换背景图片
        setInterval(changeBackground, 5000); // 每 5 秒切换一次
       