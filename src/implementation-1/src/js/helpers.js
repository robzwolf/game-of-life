class Helpers {
    /**
     * Loops through each CSS rule on the webpage and determines if a rule with that selector exists.
     * @param selectorText
     * @returns {boolean}
     */
    static cssRuleExists(selectorText) {
        return Array.from(document.styleSheets).some((stylesheet) => {
            try {
                return Array.from(stylesheet.cssRules).some((rule) => rule.selectorText === selectorText);
            } catch (e) {
                // Continue to next stylesheet
                return false;
            }
        });
    }

    /**
     * Prevents default action for any event.
     * @param event
     */
    static eventPreventDefault(event) {
        event.preventDefault();
    }
}

export default Helpers;
