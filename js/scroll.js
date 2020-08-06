new fullpage('#fullpage', {
    onLeave: function(){
        jQuery('.section [data-aos]').removeClass("aos-animate");
    },
    onSlideLeave: function(){
        jQuery('.slide [data-aos]').removeClass("aos-animate");
    },
    afterSlideLoad: function(){
        jQuery('.slide.active [data-aos]').addClass("aos-animate");
    },
    afterLoad: function(){
        jQuery('.section.active [data-aos]').addClass("aos-animate");
       //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
    },
    autoScrolling: true,
    navigation: true,
    controlArrows: true,
    slideNavigation: true,
    navigationTooltips: ['Home Page', 'Chi Sono', 'Html & Css', 'Bootstrap', 'Sass', 'I miei lavori', 'I miei lavori', 'Contattami'],
    showActiveTooltip: true,
    anchors:['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8']
});