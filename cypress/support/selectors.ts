require('cypress-xpath')

export default {
    inputField: "//html/body/section/header/input",
	noteRow: (position: number) => `//html/body/section/section/ul/li[${position}]/div/label`,
	noteBulk: "//html/body/section/section/ul",
	noteCheckbox: (position: number) => `//html/body/section/section/ul/li[${position}]/div/input`,
	noteWrapper: (position: number) => `//html/body/section/section/ul/li[${position}]`
};
