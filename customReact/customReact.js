 let reactElem = {
    type: 'h1',

    props: {
        color: 'red',
        backgroundColor: 'blue',
        height: '550px',
        width: '550px',
        textAlign: 'center',


    },
    children: 'Hello World'
 }



let rootCont  = document.querySelector('#root')

function injectElem(element, container) {
    let newElem = document.createElement(element.type)
    newElem.innerHTML = element.children
    for(prop in element.props) {
        if(prop === "children") continue
        newElem.style[prop] = `${element.props[prop]}`
        console.log(prop,element.props[prop])
}
    container.appendChild(newElem)
}

injectElem(reactElem,rootCont)
