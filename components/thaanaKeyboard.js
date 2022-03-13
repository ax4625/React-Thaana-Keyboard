import React from "react";
import PropTypes from "prop-types";

export default function ThaanaKeyboard(props) {
    /***
     * Credits: https://github.com/dhivehi/ThaanaKeyboard/blob/master/keyboard.html
     * 
     */
    var LANGDH = "\u07b0\u0787\u07ac\u0783\u078c\u0794\u07aa\u07a8\u07ae\u0795\\\u07a6\u0790\u078b\u078a\u078e\u0780\u0796\u0786\u078d\u061b'\u0792\xd7\u0797\u0788\u0784\u0782\u0789\u060c./\u07a4\u07a2\u07ad\u079c\u0793\u07a0\u07ab\u07a9\u07af\xf7|\u07a7\u0781\u0791\ufdf2\u07a3\u0799\u079b\u079a\u0785:\"\u07a1\u0798\u079d\u07a5\u079e\u078f\u079f\u061f";
    var LANGEN = "qwertyuiop\\asdfghjkl;'zxcvbnm,./QWERTYUIOP|ASDFGHJKL:\"ZXCVBNM?";

    function convertToDhivehi(userValue) {
        var inputValue = "";
        if (userValue != undefined) {

            userValue.split("").forEach(function (val, index, array) {
                var idx = LANGEN.indexOf(userValue[index]);
                if (idx > -1) {
                    inputValue += LANGDH.substr(idx, 1);
                }
                else {
                    inputValue += userValue[index];
                }
            });

        }
        return inputValue;
    }

    React.useEffect(() => {
        let inputs = document.querySelectorAll(".thaana");
        inputs.forEach(function (input) {
            return input.addEventListener('input', function (e) {
                return this.value = convertToDhivehi(this.value);
            });
        });
    });

    return <>{props.input}</>;
}

ThaanaKeyboard.propTypes = {
    input: PropTypes.object.isRequired,
};
