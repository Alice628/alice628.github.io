function fn_lenderContents(requirement) {
    let keys = Object.keys(requirement);
    let contentsHtml = '';
    contentsHtml += '<table>';
    keys.forEach(function(item, index, array) {
        contentsHtml += '<tr>';
        contentsHtml += '<th style="text-align: right;">' + item + '</th>';
        contentsHtml += '<td><img alt="' + item + '_icon.png" src="' + iconSource[item] + '" decoding="async" width="64" height="64"></td>';
        contentsHtml += '<td>' + requirement[item] + '</td>';
        contentsHtml += '</tr>';
    })
    contentsHtml += '</table>';
    $('#contentsContainer').html(contentsHtml);
}

function fn_lenderOption() {
    let moduleSelectHtml = '';
    moduleSelectHtml += '<table>';
    moduleList.forEach(function(item, index, array) {
        if (index % 6 == 0) {
            moduleSelectHtml += '<tr>';
        }

        moduleSelectHtml += '<th>' + item + '</th>';
        moduleSelectHtml += '<td>';
        moduleSelectHtml += '<select id="' + item + '">';
        let levelAmount = Object.keys(materialMap[item]).length;
        for (let i = 0; i < levelAmount + 1; i++) {
            moduleSelectHtml += '<option value="' + i + '">' + i + '</option>'
        }
        moduleSelectHtml += '</select>';
        moduleSelectHtml += '</td>';

        if ((index + 1) % 6 == 0) {
            moduleSelectHtml += '</tr>';
        }
    })
    moduleSelectHtml += '</table>';

    $('#optionContainer').html(moduleSelectHtml);
    $('select').on('change', function() {
        fn_changeSelect();
    });
};

function fn_changeSelect() {
    let remainRequirement = JSON.parse(JSON.stringify(totalRequirement));

    $('select').each(function(index, item) {
        let moduleName = $(item).attr('id');
        let level = $(item).val();
        for (let i = Number(level); i > 0; i--) {
            let achieved = materialMap[moduleName][i];
            //console.log(achieved);
            let keys = Object.keys(achieved);
            keys.forEach(function(materialName, index, array) {
                remainRequirement[materialName] -= achieved[materialName];
            });
        }
    });

    //console.log(remainRequirement);
    fn_lenderContents(remainRequirement);
}

function readFile(file) {
    var reader = new FileReader();
    reader.onload = function() {
        try {
            let fileContents = JSON.parse(reader.result);
            let keys = Object.keys(fileContents);
            keys.forEach(function(module, index, array) {
                $("select#" + module).val(fileContents[module]).prop("selected", true);
                $("select#" + module).change();
            })
        } catch (error) {
            alert("Wrong file\nPlease download template");
        }

    };
    reader.readAsText(file, /* optional */ "euc-kr");
}