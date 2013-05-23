/**
 * wrap the parts within a <keys>Ctrl + Shift + Foo + B</keys> tag
 * in individual <key>...</key> tags. Trim the white space and remove the plus signs.
 */
$('keys').each(function(i,e) {
    var $e = $(e);
    // Split the text into individual "key" parts
    var parts = $e.text().split('+');

    $e.text(''); // Clear out the text

    for (var p = 0; p < parts.length; p++) {
        // create wrapping element and append to the 'keys'
        $('<key/>').text(parts[p].trim()).appendTo(e);
    }
});

