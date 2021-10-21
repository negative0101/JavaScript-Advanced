function solve() {

    let addButton = document.querySelector('.form-control button')
    addButton.addEventListener('click', onClick)

    function onClick(e) {
        e.preventDefault()
        let inputs = Array.from(e.target.parentElement.parentElement.children).map(div => div.lastElementChild).slice(0, -1)
        if (inputs[0].value && inputs[1].value && inputs[2].value !== 'Select module') {
            let trainings = document.querySelector('.modules')
            let [date, hour] = inputs[1].value.split('T')
            date = date.split('-').join('/')

            let lecture = {
                'div': creatEl('div', 'module', undefined),
                'h3': creatEl('h3', undefined, `${inputs[2].value.toUpperCase()}-MODULE`),
                'ul': creatEl('ul', undefined, undefined),
                'li': creatEl('li', 'flex', undefined),
                'h4': creatEl('h4', undefined, `${inputs[0].value} - ${date} - ${hour}`),
                'button': creatEl('button', 'red', 'Del'),

            }
            lecture.div.appendChild(lecture.h3)
            lecture.li.appendChild(lecture.h4), lecture.li.appendChild(lecture.button)
            lecture.ul.appendChild(lecture.li)
            lecture.div.appendChild(lecture.ul)

            let isModuleExists = Array.from(trainings.children).filter(l => l.children[0].textContent == `${inputs[2].value.toUpperCase()}-MODULE`)
            if (isModuleExists.length == 1) {
                let ul = isModuleExists[0].children[1]
                // lecture.h3.remove()
                ul.appendChild(lecture.li)
                Array.from(ul.children).sort((a, b) => a.firstElementChild.textContent.split(' - ')[1].localeCompare(b.firstElementChild.textContent.split(' - ')[1])).forEach(li => ul.appendChild(li))
                // console.log(isModuleExists)
            } else {
                // console.log(isModuleExists)
                trainings.appendChild(lecture.div)

            }


            lecture.button.addEventListener('click', del)

            function del(e) {
                lecture.li.remove()
                if (Array.from(lecture.div.children[1].children).length == 0) {
                    lecture.div.remove()
                }
            }

            function creatEl(tag, classContent, content) {
                let t = document.createElement(tag)
                if (classContent !== undefined) {
                    t.setAttribute('class', classContent)
                } if (content !== undefined) {
                    t.textContent = content
                }
                return t

            }

        }
    }

}



// function solve (e) {
// 	const html = {
// 		lectNameField: document.querySelectorAll(`input`)[0],
// 		dateField: document.querySelectorAll(`input`)[1],
// 		moduleNameField: document.getElementsByTagName('select')[0],
// 		modules: document.getElementsByClassName('modules')[0]
// 	}
 
// 	// template for the DOM element for a single lecture - li
// 	// we add our property 'date' for easy sorting
// 	const lectureTemplate = (date, lectureName) => {
// 		const li = document.createElement('li')
 
// 		li.className = 'flex'
// 		li.innerHTML = `<h4>${lectureName} - ${date}</h4>
// 		<button class='red'>Del</button>`
// 		li.date = date
 
// 		return li
// 	}
 
// 	// template for the whole module element - div
// 	// here we reuse the lecture template but we need to append it
// 	// so we can use the .date prop we added to it.
// 	const moduleTemplate = (moduleName, date, lectureName) => {
// 		const moduleDiv = document.createElement('div')
// 		moduleDiv.className = 'module'
// 		moduleDiv.innerHTML = `<h3>${moduleName}</h3>`
 
// 		const moduleLectures = document.createElement('ul')
// 		moduleLectures.appendChild(lectureTemplate(date, lectureName))
 
// 		moduleDiv.appendChild(moduleLectures)
 
// 		return moduleDiv
// 	}
 
// 	// medium-generic fn for a valid input :-D
// 	const isValidInpit = (lectureName, date, moduleName) => lectureName !==
// 		'' && date !== '' && moduleName !== 'Select module'
 
 
// 	// helper functions
// 	const formatDate = (s) => s.replace(/-/g, '/').replace('T', ' - ')
// 	const formatName = (n) => `${n.toLocaleUpperCase()}-MODULE`
// 	const clearInput = () => {
// 		html.lectNameField.value = ''
// 		html.dateField.value = ''
// 		html.moduleNameField.value = 'Select module'
// 	}
 
// 	document.addEventListener('click', (e) => {
 
// 			// on 'Add' Button click
// 			if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'Add') {
// 				e.preventDefault()
// 				const [lectureName, date, moduleName] = [
// 					html.lectNameField.value,
// 					formatDate(html.dateField.value),
// 					formatName(html.moduleNameField.value)
// 				]
 
// 				if (isValidInpit(lectureName, date, moduleName)) {
// 					// if there is added module with the same name ->
// 					const sameModule = Array.from(html.modules.children)
// 						.find(x => x.children[0].innerHTML === moduleName)
 
// 					if (sameModule) {
// 						const lecturesContainer = sameModule.children[1]
// 						const lectures = Array.from(lecturesContainer.children)
 
// 						// here we take all lectures, make them array, we push
// 						// the new lecture, sort them by date, and append them
// 						// to the module section
// 						lectures.push(lectureTemplate(date, lectureName))
// 						lectures.sort((a, b) => a.date.localeCompare(b.date))
// 						lectures.forEach(
// 							lecture => lecturesContainer.appendChild(lecture)
// 						)
// 					} else {
// 						// if the module does not exist, we make whole new
// 						// module and append it to the modules section.
// 						html.modules.appendChild(moduleTemplate(
// 							moduleName,
// 							date,
// 							lectureName
// 						))
// 					}
// 					clearInput()
// 				}
// 			}
 
// 			// on 'Del' button click
// 			if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'Del') {
// 				const moduleSection = e.target.parentNode.parentNode.parentNode
 
// 				e.target.parentNode.outerHTML = '' // delete lecture element
 
// 				if (moduleSection.children[1].children.length === 0) { // if no more lectures in module
// 					moduleSection.outerHTML = '' // delete module element
// 				}
// 			}
// 		}
// 	)
// }