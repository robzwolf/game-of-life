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

    /**
     * Check whether a DOM node is indeed a node that has the class name 'cell'.
     * @param node
     * @returns boolean
     */
    static isCell(node) {
        return (node && node.classList && node.classList.contains('cell'));
    }

    /**
     * Check whether the user is currently in drawing mode.
     * @param body
     * @returns boolean
     */
    static isDrawing(body) {
        return (body && body.classList && body.classList.contains('drawing'));
    }

    /**
     * Check whether the user is currently in erasing mode.
     * @param body
     * @returns boolean
     */
    static isErasing(body) {
        return (body && body.classList && body.classList.contains('erasing'));
    }

    /**
     * Check whether the user is currently playing the simulation.
     * @param body
     * @returns boolean
     */
    static isPlaying(body) {
        return (body && body.classList && body.classList.contains('playing'));
    }

    /**
     * Check whether the simulation is currently paused.
     * @param body
     * @returns boolean
     */
    static isPaused(body) {
        return (body && body.classList && !body.classList.contains('playing'));
    }

    /**
     * Check whether a DOM node (cell) is alive or not.
     * @param cell
     * @returns boolean
     */
    static cellIsAlive(cell) {
        return (cell && cell.classList && cell.classList.contains('alive'));
    }

    /**
     * Check whether a DOM node (cell) is alive or not.
     * @param cell
     * @returns boolean
     */
    static cellIsDead(cell) {
        return (cell && cell.classList && !cell.classList.contains('alive'));
    }
}

export default Helpers;
