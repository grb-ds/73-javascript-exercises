    (function () {
        Array.from(document.querySelectorAll('.field.slot')).forEach((fieldSlot) => {
            var inputElement = Array.from(fieldSlot.children).find(
                (child) => child.nodeName == 'INPUT'
            );
            var buttonElement = Array.from(fieldSlot.children).find(
                (child) => child.nodeName == 'BUTTON'
            );

            buttonElement.addEventListener('click', () => {
                let minValue = Number(inputElement.dataset.min);
                let maxValue = Number(inputElement.dataset.max);

                let value = randomNr(minValue, maxValue);
                inputElement.value = value > 9 ? value : `0${value}`;
                updatePhoneNr();
            });
        });

        const randomNr = (min, max) => {
            return Math.floor(Math.random() * (max - min) + min);
        };

        const updatePhoneNr = () => {
            let phoneNrText = '0';
            Array.from(document.querySelectorAll('.field.slot > input')).forEach(
                (input) => {
                    phoneNrText += input.value;
                }
            );
            document.getElementById('target').textContent = phoneNrText;
        };
    })();


