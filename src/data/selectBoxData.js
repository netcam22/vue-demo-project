export const MISDEMEANOURS = [
	'rudeness',
	'vegetables',
	'lift',
	'united',
];

export const MISDEMEANOUR_COUNT_VALUES = {rudeness: 0, vegetables: 0, lift: 0, united: 0};

export const SELECT_DATA =  {
    fakelandia: {
        selectBoxData: {
            ariaLabel: "confess-to-a-misdemeanour",
            heading: "Confess to a Misdemeanour",
            text: "It's very difficult to catch people committing misdemeanours so why not confess to us directly.."
        },
        selectFormData: {
            formId: "i-form",
            formColor: "blue",
            selectBoxes: [
                {id: 1,
                label: "...and watch the pie chart react",
                selectId: "misdemeanour", 
                options: [
                {value: "rudeness", text: "Mild Public Rudeness 🤪"},
                {value: "vegetables", text: "Not Eating Your Vegetables 🥗"},
                {value: "lift", text: "Speaking in a Lift 🗣"},
                {value: "united", text: "Supporting Manchester United 😈"}]}
            ],
            buttonColor: "red", 
            buttonText: "Confess"
        }
    }
}