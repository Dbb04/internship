document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByTagName('button'));
    let memory = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;
            if (value === 'clear') {
                display.value = '';
                memory = '';
            } else if (value === 'del') {
                display.value = display.value.slice(0, -1);
            } else if (value === 'Enter') {
                try {
                    memory = eval(display.value);
                    display.value = memory;
                } catch {
                    display.value = 'Error';
                }
            } else if (value === 'ans') {
                display.value += memory;
            } else {
                display.value += value;
            }
        });
    });
});
