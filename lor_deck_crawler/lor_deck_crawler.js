let snackbarTimeOut;

function fn_render() {
    fn_renderList()
    fn_renderSelect()
}

function fn_renderList() {
    let listHTML = "";
    codeList.forEach(function(deck, index) {
        listHTML += '<p id="' + (index + 1) + '">'
        listHTML += '<span class="title">' + deck.title + '</span><br>'
        listHTML += '<span class="code">' + deck.code + '</span>'
        listHTML += '</p>'
    })
    $("#list_container").html(listHTML);
    $("#list_container > p > span").on("click", function() {
        fn_onClickText(this);
    })
}

function fn_renderSelect() {
    let sltHTML = "";
    sltHTML += '<select id="slt_index">';
    for (let i = 1; i <= codeList.length; i++) {
        sltHTML += '<option value="' + i + '">' + i + '</option>'
    }
    sltHTML += '</select>';
    $("#slt_container").html(sltHTML);

    $("select").on("change", function() {
        fn_onChangeSelect();
    })
    fn_onChangeSelect();
}

function fn_copy() {
    let index = $("#slt_index").val();
    let type = $("#slt_type").val();

    fn_copyText(index, type);
    fn_showSnackbar(index, type);

    if (type == "code") {
        $("#slt_type").val("title").prop("selected", true);
    } else {
        $("#slt_index").val(Number(index) + 1).prop("selected", true);
        $("#slt_type").val("code").prop("selected", true);
    }
    fn_onChangeSelect();
}

function fn_copyText(index, type) {
    var obj = $("#" + index + " > " + "." + type)[0];
    var range = document.createRange();
    range.selectNode(obj.childNodes[0]); //텍스트 정보를 Range 객체에 저장
    var sel = window.getSelection();
    sel.removeAllRanges(); //기존 선택정보 삭제
    sel.addRange(range); //텍스트 정보 선택
    document.execCommand("copy"); //복사
    sel.removeRange(range); //선택 정보 삭제
}

function fn_onChangeSelect() {
    let index = $("#slt_index").val();
    let type = $("#slt_type").val();
    var obj = $("#" + index + " > " + "." + type);

    $("#list_container > p > span").css("background-color", "white")
    $("#list_container > p > span").css("color", "black")

    obj.css("background-color", "black")
    obj.css("color", "white")
}

function fn_onClickText(element) {
    let obj = $(element)
    let type = obj.prop("class");
    let index = obj.parent().prop("id");

    $("#slt_index").val(Number(index)).prop("selected", true);
    $("#slt_type").val(type).prop("selected", true);
    fn_onChangeSelect();
    fn_copy();
}

function fn_showSnackbar(index, type) {
    let ordinal = "";
    switch (index) {
        case 1:
            ordinal = "st";
            break;
        case 2:
            ordinal = "nd";
            break;
        case 3:
            ordinal = "rd";
            break;
        default:
            ordinal = "th"
            break;
    }
    $("#snackbar").html(index + ordinal + " deck's " + type + " is copied!");

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    clearTimeout(snackbarTimeOut);
    snackbarTimeOut = setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}