var txt = document.getElementById('typing');

var typewriter = new Typewriter(txt, {
    //loop: true,
    cursor: '_',
    delay: 80
});

var pauseTime = 500;

typewriter.changeDeleteSpeed(10)
    .typeString('Ngày hôm nay là ngày đặc biệt với chúng ta')
    .pauseFor(pauseTime)
    .deleteChars(33)
    .pauseFor(400)
    .typeString('14 tháng 02 năm 2021')
    .pauseFor(pauseTime)
    .deleteAll(19)
   
    .typeString('Chúng ta hãy cùng tận hưởng trọn vẹn ngày hôm nay nhá ! ')
    .pauseFor(pauseTime)
    .deleteAll()
    .typeString('luôn luôn xinh đẹp và hạnh phúc <3')
    .pauseFor(pauseTime)
    .deleteAll()
    .typeString('from *** with love ❤️')
    .pauseFor(200)
    .callFunction(function happy(){    
        window.location.replace('../giftbox/');
    })
    .start()
    
     
    
    
