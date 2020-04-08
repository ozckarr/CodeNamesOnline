
function selectImage(){
    const pickedImage = document.getElementById('pickedImageID').value
    const pickedImageRotation = document.getElementById('pickedImageRotation').value
    document.getElementById('gameBoard').style.transform = `rotate(${pickedImageRotation}deg)`
    document.getElementById('gameBoard').style.backgroundImage = `url(./images/${pickedImage}.jpg)`
    document.getElementById('whatImage').innerHTML = pickedImage + " " + pickedImageRotation + " °"
}


function randomize(){
    const randomImage = Math.floor(Math.random()*(30-1+1)+1)
    document.getElementById('gameBoard').style.backgroundImage = `url(./images/spelplan${randomImage}.jpg)`
    const randomImageRotation = Math.floor(Math.random()*(3+1))
    const randomImageRotationList = [0,90,180,270]
    document.getElementById('gameBoard').style.transform = `rotate(${randomImageRotationList[randomImageRotation]}deg)`
    document.getElementById('whatImage').innerHTML = "Spelplan" + randomImage + " " + randomImageRotationList[randomImageRotation] + " °"
}