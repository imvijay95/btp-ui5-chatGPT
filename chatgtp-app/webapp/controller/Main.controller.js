sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";
    return Controller.extend("Test.Test.controller.Main", {
        onInit: function () {
        },
        onPressGPT: function () {
            var that = this;
            const API_KEY = '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';
            var prompt = this.byId("idInput").getValue();
            fetch(`https://api.openai.com/v1/completions`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_KEY}`
                    },
                    body: JSON.stringify({
                        model: 'text-davinci-003',
                        prompt: prompt,
                        max_tokens: 2000
                    })
                }).then(response => response.json())
                .then(data => {
                    that.byId("idText").setText(data.choices[0].text);
                });
        }
    });
});
