// JavaScript untuk menggambar segitiga
window.onload = function() {
    const triangleForm = document.getElementById('triangleForm');
    const triangle = document.getElementById('triangle');

    triangleForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const height = parseInt(document.getElementById('height').value);
        const type = document.getElementById('type').value;

        let triangleText = '';

        switch (type) {
            case 'sama-sisi':
                for (let i = 1; i <= height; i++) {
                    for (let j = 1; j <= height - i; j++) {
                        triangleText += ' ';
                    }
                    for (let k = 1; k <= i * 2 - 1; k++) {
                        triangleText += '*';
                    }
                    triangleText += '\n';
                }
                break;
            case 'tumpul':
                for (let i = 1; i <= height; i++) {
                    for (let j = 1; j <= i; j++) {
                        triangleText += '*';
                    }
                    triangleText += '\n';
                }
                break;
            case 'lancip':
                for (let i = height; i >= 1; i--) {
                    for (let j = 1; j <= height - i; j++) {
                        triangleText += ' ';
                    }
                    for (let k = 1; k <= i * 2 - 1; k++) {
                        triangleText += '*';
                    }
                    triangleText += '\n';
                }
                break;
            case 'upside-left':
                for (let i = 1; i <= height; i++) {
                    for (let j = 1; j <= i; j++) {
                        triangleText += '*';
                    }
                    triangleText += '\n';
                }
                break;
            case 'upside-right':
                for (let i = 1; i <= height; i++) {
                    for (let j = 1; j <= height - i; j++) {
                        triangleText += ' ';
                    }
                    for (let k = 1; k <= i; k++) {
                        triangleText += '*';
                    }
                    triangleText += '\n';
                }
                break;
            case 'downside-right':
                for (let i = 1; i <= height; i++) {
                    for (let j = 1; j < i; j++) {
                        triangleText += ' ';
                    }
                    for (let k = i; k <= height; k++) {
                        triangleText += '*';
                    }
                    triangleText += '\n';
                }
                break;
            case 'downside-left':
                for (let i = 1; i <= height; i++) {
                    for (let j = i; j < height; j++) {
                        triangleText += ' ';
                    }
                    for (let k = 1; k <= i; k++) {
                        triangleText += '*';
                    }
                    triangleText += '\n';
                }
                break;
        }

        triangle.textContent = triangleText;
    });
};
