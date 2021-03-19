
function typeWriter(text, id, speed) {
    // Writes "programmer"
    let i = 0
    if (i < id.innerHTML.length) {
        id.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, speed)
    }

    // // Deletes "front-end dev"
    // function deleterOne() {
    //     let length = text.innerHTML.length
    //     if (i < length) {
    //         let newText = text.innerHTML.slice(0, -1)
    //         text.innerHTML = newText
    //         setTimeout(deleterOne, speed)
    //     } else if (i == length) {
    //         setTimeout(() => {
    //             typeWriterOne()
    //         }, [150])
    //     }
    // }
    // deleterOne()
}

export default typeWriter