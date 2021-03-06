function fn_renderContents() {
    let requirementList = JSON.parse(JSON.stringify(totalRequirement));
    let requirementListHtml = '';
    let requirementNameList = Object.keys(requirementList);

    requirementListHtml += '<table style="border-bottom: solid 1px black ;">';
    requirementNameList.forEach(function(name, index, array) {
        requirementListHtml += '<tr>';
        requirementListHtml += '<th style="text-align: right;">';
        requirementListHtml += name + '(' + materialShortNameList[name] + ')';
        requirementListHtml += '</th>';
        requirementListHtml += '<td>';
        requirementListHtml += '<img alt="icon" src="' + iconSource[name] + '" decoding="async">';
        requirementListHtml += '</td>';
        requirementListHtml += '<td style="font-size: x-large;">';
        requirementListHtml += requirementList[name];
        requirementListHtml += '</td>';
        requirementListHtml += '</tr>';
    });

    requirementListHtml += '</table>';
    $("#requirementContainer").html(requirementListHtml);
}

function fn_renderOptions() {
    let completeMap = JSON.parse(JSON.stringify(questCompletetMap));
    $("#dealerContainer input[type=checkbox]").off('change');
    let localMap = JSON.parse(JSON.stringify(completeMap));
    let dealerListHtml = '';
    let dealerList = Object.keys(completeMap);
    dealerListHtml += '<table id="dealerFrame">';
    dealerListHtml += '<colgroup><col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%"></colgroup>';
    dealerListHtml += '<tbody><tr>';
    dealerList.forEach(function(dealerName, index) {
        dealerListHtml += '<td id="' + dealerName + '_container">';
        dealerListHtml += '<h4>';
        dealerListHtml += dealerName;
        dealerListHtml += '</h4>';
        let questList = localMap[dealerName];
        let questNameList = Object.keys(questList);
        questNameList.forEach(function(questName, index, array) {
            dealerListHtml += '<p style="font-size: xx-small;">';
            if (questList[questName] == null || questList[questName] != 0) {
                dealerListHtml += '<input type="checkbox" id="' + questName + '" checked="checked">';
            } else {
                dealerListHtml += '<input type="checkbox" id="' + questName + '">';
            }
            dealerListHtml += '<label for="' + questName + '">' + questName + '</label>';
            dealerListHtml += '</p>';
        });
        dealerListHtml += '</td>';
    });

    dealerListHtml += '</tr></tbody>';
    dealerListHtml += '</table>';
    $("#dealerContainer").html(dealerListHtml);
    $("#dealerContainer input[type=checkbox]").on('change', function() {
        fn_changeOptionCheckbox();
        fn_calcTotalRequirement();
        fn_renderContents();
    });
}

function fn_calcTotalRequirement() {
    let requirementMap;
    if (!isInRaid) {
        requirementMap = questRequirementMap;
    } else {
        requirementMap = questRequirementMapInRaid;
    }
    totalRequirement = {};
    let dealerNameList = Object.keys(requirementMap);
    dealerNameList.forEach(function(dealerName, index, array) {
        let questNameList = Object.keys(requirementMap[dealerName]);
        questNameList.forEach(function(questName, index2, array2) {
            if (completedQuestList.indexOf(questName) == -1) {
                let materialNameList = Object.keys(requirementMap[dealerName][questName]);
                materialNameList.forEach(function(materialName, index3, array3) {
                    let amount = requirementMap[dealerName][questName][materialName];
                    if (totalRequirement[materialName] == null) {
                        totalRequirement[materialName] = 0;
                    }
                    totalRequirement[materialName] += amount;
                });
            }
        });
    });
}

function fn_changeInRaidCheckbox() {
    isInRaid = $("#inRaid_checkbox").prop('checked');
}

function fn_changeOptionCheckbox() {
    completedQuestList = [];
    $("#dealerContainer input[type=checkbox]").each(function(index, element) {
        let isChecked = $(element).prop('checked');
        if (isChecked) {
            let questName = $(element).prop('id');
            if (completedQuestList.indexOf(questName) == -1) {
                completedQuestList.push(questName);
            }
        }
    })
}

function readFile(file) {
    var reader = new FileReader(); // 파일리더 객체 생성
    reader.onload = function() { // 파일을 읽을때 콜백함수 설정
        try {
            let fileContents = JSON.parse(reader.result); // 템플릿이 object형식이라 읽어서 바로 파싱한다.
            let dealerList = Object.keys(fileContents); // 읽은 퀘스트의 목록을 추출한다.
            dealerList.forEach(function(dealer, index, array) { //퀘스트목록을 순환한다.
                let questList = Object.keys(fileContents[dealer]);
                questList.forEach(function(quest, index2, array2) {
                    if (fileContents[dealer][quest] == 1) {
                        $("#" + dealer + "_container").find("input[type=checkbox]").each(function(index, checkbox) {
                            if ($(checkbox).prop("id") == quest) {
                                $(checkbox).prop("checked", true);
                            }
                        });
                    }
                });
            });
            fn_changeOptionCheckbox();
            fn_calcTotalRequirement();
            fn_renderContents();
        } catch (error) {
            alert("Wrong file\nPlease download template");
        }

    };
    reader.readAsText(file, /* optional */ "euc-kr"); // 파일을 읽는다.
}