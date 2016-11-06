(function () {
    $(document).ready(function () {
        var clientBgColor, count, facebookBgColor, funcHoverLinkAndChangeBodyBg, githubBgColor, mainBgColor, middleHeight, middleOffset, textArray, vimeoBgColor;
        middleHeight = $('.middle').height();
        middleOffset = middleHeight / 2;
        $('.middle').css({ 'margin-top': '-' + middleOffset + 'px' });
        mainBgColor = '#151D20';
        facebookBgColor = '#3B5998';
        githubBgColor = '#5F2B80';
        vimeoBgColor = '#00B3EC';
        count = 0;
        textArray = [
            'Jo! MY NAME IS', 
            'SIMON "KLINKE" KLINKERTZ',
            'AND I AM A',
            'FILMMAKER AND WEB-DESIGNER'
        ];
        funcHoverLinkAndChangeBodyBg = function (classLink, bgColor) {
            $(classLink).mouseover(function () {
                return $('body').css({ 'background': bgColor });
            });
            $(classLink).click(function () {
                return $('body').css({ 'background': bgColor });
            });
            return $(classLink).mouseleave(function () {
                return $('body').css({ 'background': mainBgColor });
            });
        };
        funcHoverLinkAndChangeBodyBg('a.facebook', facebookBgColor);
        funcHoverLinkAndChangeBodyBg('a.github', githubBgColor);
        funcHoverLinkAndChangeBodyBg('a.vimeo', vimeoBgColor);
        return $('.clickme').click(function () {
            $('.whoAmI').text(textArray[count]);
            count++;
            if (count === textArray.length) {
                return count = 0;
            }
        });
    });
}.call(this));