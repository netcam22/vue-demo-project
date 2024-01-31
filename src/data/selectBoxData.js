
export const SELECT_BOX_DATA = {
    ariaLabel: "confess-to-a misdemeanour",
    heading: "Confess to a Misdemeanour",
    text: "It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.."
};
export const SELECT_FORM_DATA = {
    formId: "i-form",
    formColor: "blue",
    selectBoxes: [
        {id: 1,
        label: "Misdemeanour:",
        selectId: "misdemeanour", 
        options: [
        {value: "rudeness", text: "Mild Public Rudeness 🤪"},
        {value: "vegetables", text: "Not Eating Your Vegetables 🥗"},
        {value: "lift", text: "Speaking in a Lift 🗣"},
        {value: "united", text: "Supporting Manchester United 😈"}]}
    ],
    buttonClass: "select-box__button select-box__button--red", 
    buttonText: "Confess"
}