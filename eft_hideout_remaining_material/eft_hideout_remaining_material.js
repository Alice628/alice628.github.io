let isShow = true; // 더이상 필요하지 않은 재료를 보여줄지 여부(true: 보여줌)

/**
 * 재료리스트 영역을 랜더링한다.
 * @param {ObjectConstructor} requirement 필요한 재료 맵
 */
function fn_renderContents(requirement) {
    let keys = Object.keys(requirement); //모듈들을 가져온다
    let contentsHtml = ''; // 붙여넣을 콘텐츠html
    contentsHtml += '<table>'; //테이블 시작
    keys.forEach(function(item, index, array) { //모듈 리스트 순환
        if (requirement[item] == 0 && !isShow) { // 더이상 필요한 재료가 없고 그러한 항목을 보여주고싶지 않을 때
            return true; // continue
        }
        contentsHtml += '<tr>'; // 행시작
        contentsHtml += '<th style="text-align: right;">' + item + '(' + materialShortNameList[item] + ')' + '</th>'; // 1열 테이블 헤더: 재료이름
        contentsHtml += '<td><img alt="' + item + '_icon.png" src="' + iconSource[item] + '" decoding="async" width="64" height="64"></td>'; // 2열: 재료 아이콘
        contentsHtml += '<td>' + requirement[item] + '</td>'; // 3열: 재료 남은 수량
        contentsHtml += '</tr>'; // 행끝
    })
    contentsHtml += '</table>'; // 테이블 끝
    $('#contentsContainer').html(contentsHtml); // 구성된 html을 컨테이너에 붙여넣는다.
}

/**
 * 모듈레벨을 선택하는 셀렉트박스 영역을 랜더링한다.
 */
function fn_renderOption() {
    let moduleSelectHtml = ''; // 붙여넣을 콘텐츠html
    moduleSelectHtml += '<table>'; //테이블 시작
    moduleList.forEach(function(item, index, array) { // Hideout.js에 있는 모듈리스트를 순환한다.
        if (index % 6 == 0) { // 한 행에 6열로 구성한다.
            moduleSelectHtml += '<tr>'; // 행시작
        }

        moduleSelectHtml += '<th>' + item + '</th>'; // 1열 테이블헤더: 모듈명
        moduleSelectHtml += '<td>'; // 2열
        moduleSelectHtml += '<select id="' + item + '">'; // 셀렉트박스 아이디는 모듈명
        let levelAmount = Object.keys(materialMap[item]).length; // 해당 모듈의 레벨 최대치 도출
        for (let i = 0; i < levelAmount + 1; i++) { // 0부터 레벨만큼 만듬
            moduleSelectHtml += '<option value="' + i + '">' + i + '</option>' // 옵션의 벨류와 내용은 레벨
        }
        moduleSelectHtml += '</select>'; // 셀렉트 끝
        moduleSelectHtml += '</td>'; //열끝

        if ((index + 1) % 6 == 0) { // 한 행에 6열로 구성한다.
            moduleSelectHtml += '</tr>'; //행끝
        }
    })
    moduleSelectHtml += '</table>'; //테이블 끝

    $('#optionContainer').html(moduleSelectHtml); // 구성된 html을 컨테이너에 붙여넣는다.
    $('select').on('change', function() { // 생성된 셀렉트박스에 onChange function을 부여한다.
        fn_changeSelect(); // 셀렉트 박스를 변경할 시 호출할 함수
    });
};

/**
 * 셀렉트박스 변경시 호출되는 함수. 재료 남은수량 리스트를 다시 랜더링한다.
 */
function fn_changeSelect() {
    let remainRequirement = fn_constructRemainRequirement(); // 남은 수량을 구성한다.

    //console.log(remainRequirement);
    fn_renderContents(remainRequirement); // 재료리스트 영역을 랜더링한다.
}

/**
 * 셀렉트박스 값으로 남은 재료수를 구성한다.
 */
function fn_constructRemainRequirement() {
    let remainRequirement = JSON.parse(JSON.stringify(totalRequirement)); // 초기 남은수량 맵 깊은복사

    $('select').each(function(index, item) { // select박스들을 순환
        let moduleName = $(item).attr('id'); // select의 id값으로 모듈명을 알아난다.
        let level = $(item).val(); // 해당 select의 option값으로 레벨을 알아낸다.
        for (let i = Number(level); i > 0; i--) { // 달성한 레벨들을 순환한다.
            let achieved = materialMap[moduleName][i]; //해당 모듈의 해당 레벨의 필요했던 재료를 확안하여 달성한 재료를 도출한다.
            //console.log(achieved);
            let keys = Object.keys(achieved); // 달성한 재료들을 알아낸다.
            keys.forEach(function(materialName, index, array) { // 달성한 재료를 순환한다.
                remainRequirement[materialName] -= achieved[materialName]; // 달성한 재료의 양을 필요한 재료에서 뺀다.
            });
        }
    });

    return remainRequirement; // 남은 재료를 반환한다.
}

/**
 * 모듈레벨 설정파일을 읽는다.
 * @param {ObjectConstructor} file 읽은 파일
 */
function readFile(file) {
    var reader = new FileReader(); // 파일리더 객체 생성
    reader.onload = function() { // 파일을 읽을때 콜백함수 설정
        try {
            let fileContents = JSON.parse(reader.result); // 템플릿이 object형식이라 읽어서 바로 파싱한다.
            let keys = Object.keys(fileContents); // 읽은 모듈의 목록을 추출한다.
            keys.forEach(function(module, index, array) { //모듈목록을 순환한다.
                $("select#" + module).val(fileContents[module]).prop("selected", true); // 모듈레벨을 각 셀렉트박스에 설정한다.
                $("select#" + module).change(); // onChange function을 발생시킨다.
            })
        } catch (error) {
            alert("Wrong file\nPlease download template");
        }

    };
    reader.readAsText(file, /* optional */ "euc-kr"); // 파일을 읽는다.
}

/**
 * 체크박스 변경 함수
 * @param {ObjectConstructor} element 체크박스 요소
 */
function fn_changeShowCheck(element) {
    isShow = !(element.prop('checked')); // 체크하면 isShow = false
    let remainRequirement = fn_constructRemainRequirement(); // 셀렉트박스 값으로 남은 재료수를 구성한다.

    //console.log(remainRequirement);
    fn_renderContents(remainRequirement); // 재료리스트 영역을 랜더링한다.
}