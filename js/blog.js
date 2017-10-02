$(function() {
    'use strict';

    var $content = $('#jsonContent');

    $.get('https://api.rss2json.com/v1/api.json', {rss_url: 'https://blog.mitocgroup.com/feed'}, function(response) {
        if (response.status === 'ok') {
            var output = '';
            var count = 0;
            $.each(response.items, function (k, item) {
                count++;
                var visibleSm;

                if (count < 3) {
                    visibleSm = '';
                } else {
                    visibleSm = ' visible-sm';
                }

                var flexN = '';
                var leftPostItem = '';
                var rightPostItem = '';
                if (k == 0) flexN = 12;
                else flexN = 6;

                if (k == 1) leftPostItem = ' leftPostItem';
                if (k == 2) rightPostItem = ' rightPostItem';

                output += '<div class="flex-item-' + flexN + visibleSm + rightPostItem + leftPostItem + '">';
                output += '<div class="blog-post flex-row">';

                var tagIndex = item.description.indexOf('<img');
                var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex;
                var srcStart = srcIndex + 5;
                var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart;
                var src = item.description.substring(srcStart, srcEnd);
                output += '<div class="blog-content flex-item-6"><span class="post-date">' + $.format.date(item.pubDate, 'MMM dd, yyyy') + '</span><h4><a href="' + item.link + '" target="_blank">' + item.title + '</a></h4><a href="https://blog.mitocgroup.com/" class="button" target="_blank">Read More </a></div>';
                output += '<div class="flex-item-6 img-block"><a href="' + item.link + '" class="blog-element" target="_blank"><img class="img-responsive" src="' + src + '"></a></div>';
                // var yourString = item.description.replace(/<img[^>]*>/g, "");
                // var maxLength = 120;
                output += '</div></div>';
                return count < 3;
            });
            $content.html(output);
        }
    })
});
