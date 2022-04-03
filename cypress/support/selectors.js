require('cypress-xpath')

export default {
    inputField: "//html/body/section/header/input",
	noteRow: (position) => `//html/body/section/section/ul/li[${position}]/div/label`,
	noteBulk: "//html/body/section/section/ul",
	noteCheckbox: (position) => `//html/body/section/section/ul/li[${position}]/div/input`,
	noteWrapper: (position) => `//html/body/section/section/ul/li[${position}]`
};
