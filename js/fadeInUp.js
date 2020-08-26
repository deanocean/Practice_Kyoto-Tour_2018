    function revealOnScroll() {
        var scrolled = $(window).scrollTop();
        
            // 視窗，即viewport，頁面可視範圍的窗口

            $(".inUp").each(function(){
                var current = $(this), // 當前元素
                w_height = $(window).outerHeight(), //視窗高度
                offsetTop = current.offset().top; //當前元素離頂部的高度

                // 計算高度差（此處預留50是為了看效果）
                // 當元素進入視窗時，添加class
                 if (scrolled + w_height > offsetTop) {
                current.addClass("fadeInUp");
                } else {
                current.removeClass("fadeInUp");
                } 
            });

        }
    $(window).on("scroll", revealOnScroll);
