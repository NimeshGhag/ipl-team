
let arr = [
    {
        team : 'csk',
        primary : '#fbff0d',
        secondary : '#2986ff',
        image  :'https://images.seeklogo.com/logo-png/19/2/ipl-chennai-super-kings-logo-png_seeklogo-196613.png'
    },

    {
        team : 'rcb',
        primary : 'red',
        secondary : '#2437e4',
        image :'https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2020%2F10%2F20%2Feqtmn0fucaancyu-804484-1603180070.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2'
    },

    {
        team : 'srh',
        primary : '#da7604',
        secondary : 'White',
        image :'https://i.pinimg.com/736x/b7/7d/f5/b77df59b1a5f0f209b94a0148ddb02d5.jpg'
    },

    {
        team : 'mi',
        primary : '#2437e4',
        secondary : 'gold',
        image :'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-120318,resizemode-75,msid-108687273/news/sports/mumbai-indians-hit-another-century-in-brand-new-season.jpg'
    },


    {
        team : 'rr',
        primary : '#fd03f1',
        secondary : 'white',
        image :'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/1200px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png'
    },

    {
        team : 'kkr',
        primary :'#2904ce',
        secondary : 'gold',
        image :'https://i.pinimg.com/736x/c8/e9/e6/c8e9e65d1d2f9d2472dd64a875c5c238.jpg'
    },

    {
        team : 'Pk',
        primary : 'red',
        secondary : 'white',
        image :'https://images.seeklogo.com/logo-png/22/2/ipl-kings-xi-punjab-logo-png_seeklogo-225011.png'
    },

    {
        team : 'dc',
        primary : '#2437e4',
        secondary : 'red',
        image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUEh_iAU-it42JVdISwVwFe9_FhdoYwmxJg&s"
    },

    {
        team : 'gt',
        primary : '#012247',
        secondary : 'gold',
        image :"https://imgk.timesnownews.com/story/Gujarat_Titans_logo.png?tr=w-1200,h-900"
    },

    {
        team : 'lsg',
        primary : '#52ccf1',
        secondary : '#ffb13c',
        image :"https://i.pinimg.com/736x/b1/a4/c9/b1a4c97c71dfa582973de0c9e1a9dbcc.jpg"
    },

    
]







let btn = document.querySelector('button');
let img = document.querySelector('img');
let win = document.querySelector('.winner');
let h2 = document.querySelector('h2');




btn.addEventListener('click',function(){

    let int = setInterval(function(){
        let num = Math.floor(Math.random()*arr.length);
        let winner = arr[num];

        win.innerHTML = ' AND THe WINNER IS ... '
        h2.innerHTML =  winner.team
        img.src = winner.image
        h2.style.backgroundColor = winner.primary
        h2.style.color = winner.secondary
    },100)

    setTimeout(function(){
        win.innerHTML = ' WINNER ';
        clearInterval(int);
    },3000)

})