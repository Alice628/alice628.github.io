const charJewekNameList = [
    '불타오르는 마노', '불타오르는 마노 덩이', '불타오르는 마노 조각', '불타오르는 마노 가루', '',
    '순수한 청금석', '순수한 청금석 덩이', '순수한 청금석 조각', '순수한 청금석 가루', '',
    '자라나는 비취', '자라나는 비취 덩이', '자라나는 비취 조각', '자라나는 비취 가루', '',
    '승리의 자수정', '승리의 자수정 덩이', '승리의 자수정 조각', '승리의 자수정 가루', '',
    '자유로운 터키석', '자유로운 터키석 덩이', '자유로운 터키석 조각', '자유로운 터키석 가루', '',
    '서늘한 빙옥', '서늘한 빙옥 덩이', '서늘한 빙옥 조각', '서늘한 빙옥 가루', '',
    '단단한 황옥', '단단한 황옥 덩이', '단단한 황옥 조각', '단단한 황옥 가루',
];
const talentBook3NameList = [
    '「자유」의 철학', '「투쟁」의 철학', '「시문」의 철학', '「번영」의 철학', '「근면」의 철학', '「황금」의 철학', '「부세」의 철학', '「풍아」의 철학', '「천광」의 철학', '「간언」의 철학', '「창의」의 철학', '「실천」의 철학',
];
const talentBook2NameList = [
    '「자유」의 인도', '「투쟁」의 인도', '「시문」의 인도', '「번영」의 인도', '「근면」의 인도', '「황금」의 인도', '「부세」의 인도', '「풍아」의 인도', '「천광」의 인도', '「간언」의 인도', '「창의」의 인도', '「실천」의 인도',
];
const talentBook1NameList = [
    '「자유」의 가르침', '「투쟁」의 가르침', '「시문」의 가르침', '「번영」의 가르침', '「근면」의 가르침', '「황금」의 가르침', '「부세」의 가르침', '「풍아」의 가르침', '「천광」의 가르침', '「간언」의 가르침', '「창의」의 가르침', '「실천」의 가르침',
];
const wepMaterial4NameList = [
    '고탑 왕의 깨진 꿈', '칼바람 울프의 그리운 고향', '라이언 투사의 이념', '고운한림의 신체', '안개구름 속의 전환', '흑운철 덩이', '먼바다의 금빛 가지', '나루카미 어령의 용맹', '금석극화의 귀인(鬼人)', '숲의 이슬을 닮은 금 부적', '오아시스 화원의 진리', '태양 같은 권위의 과거',
];
const wepMaterial3NameList = [
    '고탑 왕의 조각', '칼바람 울프의 부서진 이빨', '라이언 투사의 수갑', '고운한림의 해골', '안개구름 속의 금단', '흑운철 일각', '먼바다의 마노 가지', '나루카미 어령의 친애', '금석극화의 일각', '숲의 이슬을 닮은 은 부적', '오아시스 화원의 애념', '태양 같은 권위의 꿈',
];
const wepMaterial2NameList = [
    '고탑 왕의 절망', '칼바람 울프의 이빨', '라이언 투사의 쇠사슬', '고운한림의 휘암', '안개구름 속의 수은단', '흑운철 조각', '먼바다의 옥빛 가지', '나루카미 어령의 환희', '금석극화의 호교(虎嚙)', '숲의 이슬을 닮은 철 부적', '오아시스 화원의 은혜', '태양 같은 권위의 여광',
];
const wepMaterial1NameList = [
    '고탑 왕의 잔해', '칼바람 울프의 젖니', '라이언 투사의 족쇄', '고운한림의 매끄러운 모래', '안개구름 속의 흑연단', '흑운철 한 알', '먼바다의 산호 가지', '나루카미 어령의 은혜', '금석극화의 가면', '숲의 이슬을 닮은 동 부적', '오아시스 화원의 추억', '태양 같은 권위의 메아리',
];
const fieldMaterialNameList = [
    ['슬라임 원액', '슬라임청', '슬라임 응축액',],
    ['불길한 가면', '오염된 가면', '부서진 가면',],
    ['금주의 두루마리', '봉마의 두루마리', '이능 두루마리',],
    ['역전의 화살촉', '날카로운 화살촉', '견고한 화살촉',],
    ['흑수정 나팔', '흑동 나팔', '무거운 나팔',],
    ['지맥의 새싹', '지맥의 마른 잎', '지맥의 낡은 가지',],
    ['혼돈의 노심', '혼돈의 회로', '혼돈의 장치',],
    ['안개 등심', '안개풀 주머니', '안개꽃 가루',],
    ['검사관의 제도', '특수 요원의 제도', '사냥꾼의 제도',],
    ['위관의 휘장', '사관의 휘장', '신병의 휘장',],
    ['골드 까마귀 휘장', '실버 까마귀 휘장', '보물찾기 까마귀 휘장',],
    ['원소 꽃꿀', '반짝반짝 꽃꿀', '구라구라 꽃꿀',],
    ['석화한 뼛조각', '단단한 뼛조각', '약한 뼛조각',],
    ['명검 코등이', '카게우치 코등이', '오래된 코등이',],
    ['혼돈의 눈동자', '혼돈의 중추', '혼돈의 기관',],
    ['편광 프리즘', '수정 프리즘', '어두운 프리즘',],
    ['떠도는 정령 결정화 코어', '떠도는 정령 코어', '떠도는 정령 코어 껍데기',],
    ['맹수의 귀신 발톱', '맹수의 날카로운 발톱', '맹수 발톱',],
    ['그윽한 조각상', '흑야의 조각상', '어두운 조각상',],
    ['포낭 결정 가루', '형광 포자 분말', '버섯몬 포자',],
    ['튼튼한 버섯핵', '잠든 버섯핵', '활기를 잃은 버섯핵',],
    ['금자수 붉은 비단', '장식된 붉은 비단', '빛바랜 붉은 비단',],
    ['혼돈 볼트', '혼돈 모듈', '혼돈 용기',],
    ['찬란하게 빛나는 결정', '혼탁한 결정', '파손된 결정',],
];

function readFile(file) {
    var reader = new FileReader(); // 파일리더 객체 생성
    reader.onload = function () { // 파일을 읽을때 콜백함수 설정
        let charJewelData = [];
        let talentBook3Data = [];
        let talentBook2Data = [];
        let talentBook1Data = [];
        let wepMaterial4Data = [];
        let wepMaterial3Data = [];
        let wepMaterial2Data = [];
        let wepMaterial1Data = [];
        let fieldMaterialData = [];

        try {
            let fileContents = JSON.parse(reader.result); // 템플릿이 object형식이라 읽어서 바로 파싱한다.
            let keys = Object.keys(fileContents.materials); // 읽은 모듈의 목록을 추출한다.
            console.log(fileContents.materials)

            keys.forEach(function (key, index, array) { //모듈목록을 순환한다.
                let $_tr = $('<tr>');
                $_tr.append($('<td>').text(key));
                let korNm = itemNmMap[key.toLowerCase().replace(/[^a-z]/g, '')];
                $_tr.append($('<td>').text(korNm));
                $_tr.append($('<td>').text(fileContents.materials[key]));
                $('#tbody').append($_tr);

                if (charJewekNameList.includes(korNm)) {
                    charJewelData[charJewekNameList.indexOf(korNm)] = fileContents.materials[key];
                } else if (talentBook3NameList.includes(korNm)) {
                    talentBook3Data[talentBook3NameList.indexOf(korNm)] = fileContents.materials[key];
                } else if (talentBook2NameList.includes(korNm)) {
                    talentBook2Data[talentBook2NameList.indexOf(korNm)] = fileContents.materials[key];
                } else if (talentBook1NameList.includes(korNm)) {
                    talentBook1Data[talentBook1NameList.indexOf(korNm)] = fileContents.materials[key];
                } else if (wepMaterial4NameList.includes(korNm)) {
                    wepMaterial4Data[wepMaterial4NameList.indexOf(korNm)] = fileContents.materials[key];
                } else if (wepMaterial3NameList.includes(korNm)) {
                    wepMaterial3Data[wepMaterial3NameList.indexOf(korNm)] = fileContents.materials[key];
                } else if (wepMaterial2NameList.includes(korNm)) {
                    wepMaterial2Data[wepMaterial2NameList.indexOf(korNm)] = fileContents.materials[key];
                } else if (wepMaterial1NameList.includes(korNm)) {
                    wepMaterial1Data[wepMaterial1NameList.indexOf(korNm)] = fileContents.materials[key];
                } else {
                    fieldMaterialNameList.forEach(function (monterMaterials, monsterIndex, array) {
                        let rowNum = monsterIndex;
                        if (monterMaterials.includes(korNm)) {
                            if (fieldMaterialData[rowNum] == null) {
                                fieldMaterialData[rowNum] = [];
                            }
                            fieldMaterialData[rowNum][monterMaterials.indexOf(korNm)] = fileContents.materials[key];
                        }
                    })
                }

            })

        } catch (error) {
            alert("Wrong file\nPlease download template");
        }

        renderCharJewelDataList(charJewelData);
        rendarTalentBookDataList(talentBook3Data, talentBook2Data, talentBook1Data);
        renderWepMaterialDataList(wepMaterial4Data, wepMaterial3Data, wepMaterial2Data, wepMaterial1Data);
        renderFieldMaterialDataList(fieldMaterialData);
    };
    reader.readAsText(file, /* optional */ "euc-kr"); // 파일을 읽는다.
}

function renderWepMaterialDataList(wepMaterial4Data, wepMaterial3Data, wepMaterial2Data, wepMaterial1Data) {
    for (let i = 0; i < 12; i++) {
        let $_tr = $('<tr>');
        $_tr.append($('<td>').text(wepMaterial4Data[i]));
        $_tr.append($('<td>'));
        $_tr.append($('<td>').text(wepMaterial3Data[i]));
        $_tr.append($('<td>'));
        $_tr.append($('<td>'));
        $_tr.append($('<td>').text(wepMaterial2Data[i]));
        $_tr.append($('<td>'));
        $_tr.append($('<td>'));
        $_tr.append($('<td>').text(wepMaterial1Data[i]));
        $('#tbody_wepMaterial').append($_tr);
    }

}

function renderFieldMaterialDataList(fieldMaterialData) {
    for (let monterMaterials of fieldMaterialData) {
        let $_tr = $('<tr>');
        for (let material of monterMaterials) {
            $_tr.append($('<td>').text(material));
        }

        $('#tbody_fieldMaterial').append($_tr);
    }
}

function rendarTalentBookDataList(talentBook3Data, talentBook2Data, talentBook1Data) {
    for (let i = 0; i < 12; i++) {
        let $_tr = $('<tr>');
        $_tr.append($('<td>').text(talentBook3Data[i]));
        $_tr.append($('<td>'));
        $_tr.append($('<td>'));
        $_tr.append($('<td>'));
        $_tr.append($('<td>'));
        $_tr.append($('<td>').text(talentBook2Data[i]));
        $_tr.append($('<td>'));
        $_tr.append($('<td>'));
        $_tr.append($('<td>'));
        $_tr.append($('<td>'));
        $_tr.append($('<td>').text(talentBook1Data[i]));
        $('#tbody_talentBook').append($_tr);
    }
}


function renderCharJewelDataList(charJewelData) {
    for (let data of charJewelData) {
        let $_tr = $('<tr>');
        $_tr.append($('<td>').text(data));
        $('#tbody_charJewel').append($_tr);
    }
}

let itemNmMap = {};
async function mainFunction() {
    itemNmMap = Object.assign(
        await generateMaterialMap('fam_char_jewel'),
        await generateMaterialMap('fam_char_stone'),
        await generateMaterialMap('fam_char_local'),
        await generateMaterialMap('fam_talent_book'),
        await generateMaterialMap('fam_talent_boss'),
        await generateMaterialMap('fam_talent_common'),
        await generateMaterialMap('fam_char_exp_item'),
        await generateMaterialMap('fam_wep_primary'),
        await generateMaterialMap('fam_wep_secondary'),
        await generateMaterialMap('fam_wep_common'),
        await generateMaterialMap('fam_wep_exp_item'),
    );
    console.log(itemNmMap)

    isLoad = true;
    $('#fileInput').show();
}

async function generateMaterialMap(uriCode, isPrint) {
    let nameMap = {};
    let koList = [];
    let enList = [];
    let isErr = false;
    try {
        let response = await axios({
            // 크롤링을 원하는 페이지 URL
            url: 'https://genshin.honeyhunterworld.com/' + uriCode + '/?lang=KO',
            method: 'GET',
            dataType: 'jsonp',
            // jsonpCallback: "myCallback",
        })
        let fullHtml = response.data.replaceAll('src', 'data');
        let fullElement = $(fullHtml);
        let rowData = fullElement.find('table.genshin_table').find('tbody').html();
        let trList = JSON.parse(rowData.split('sortable_data.push(')[1].split(');')[0]);
        for (let tr of trList) {
            koList.push($(tr[1]).html());
            if (isPrint) {
                console.log($(tr[1]).html())
            }
        }
    } catch (err) {
        isErr = true;
    }

    try {
        let response = await axios({
            // 크롤링을 원하는 페이지 URL
            url: 'https://genshin.honeyhunterworld.com/' + uriCode + '/?lang=EN',
            method: 'GET',
            dataType: 'jsonp',
            // jsonpCallback: "myCallback",
        })
        let fullHtml = response.data.replaceAll('src', 'data');
        let fullElement = $(fullHtml);
        let rowData = fullElement.find('table.genshin_table').find('tbody').html();
        let trList = JSON.parse(rowData.split('sortable_data.push(')[1].split(');')[0]);
        for (let tr of trList) {
            enList.push($(tr[1]).html().toLowerCase().replace(/[^a-z]/g, ''));
        }
    } catch (err) {
        isErr = true;
    }

    for (let i = 0; i < enList.length; i++) {
        nameMap[enList[i]] = koList[i];
    }

    if (isErr) {
        nameMap = await generateMaterialMap(uriCode);
    }

    return nameMap;
}
