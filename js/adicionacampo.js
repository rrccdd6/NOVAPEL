

function adicionaCampo() {
    var select = document.querySelector("select[name='tipodeconsulta']");
    var label = document.querySelector("#nomeFuncionarioLabel");
    var input = document.querySelector("#nomeFuncionarioInput");
    var labelMeses = document.querySelector("#mesesLabel");
    var selectMeses = document.querySelector("#mesesSelect");
    var postoServicoLabel = document.querySelector("#postoServicoLabel");
    var postoServicoSelect = document.querySelector("#postoServicoSelect");

    if (select.value === "Funcionários") {
        label.style.display = "block";
        input.style.display = "block";
        labelMeses.style.display = "none";
        selectMeses.style.display = "none";
        postoServicoLabel.style.display = "none";
        postoServicoSelect.style.display = "none";
    } else if (select.value === "Férias") {
        label.style.display = "none";
        input.style.display = "none";
        labelMeses.style.display = "block";
        selectMeses.style.display = "block";
        postoServicoLabel.style.display = "block";
        postoServicoSelect.style.display = "block";

    } else {
        label.style.display = "none";
        input.style.display = "none";
        labelMeses.style.display = "none";
        selectMeses.style.display = "none";
        postoServicoLabel.style.display = "none";
        postoServicoSelect.style.display = "none";
    }
}
