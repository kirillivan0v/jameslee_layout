$(document).ready( () => {
    let python = $("#pythonProgressFill");
    let js = $("#jsProgressFill");
    let html = $("#htmlProgressFill");
    let ruby = $("#rubyProgressFill");


    // Percentage

    let expert_value = 95;
    let pro_value = 80;

    python.width(expert_value + "%");
    js.width(expert_value + "%");
    html.width(expert_value + "%");
    ruby.width(pro_value + "%");
});