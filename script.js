let stars = document.querySelectorAll("i");

// console.log(stars);

    stars.forEach((star , indexone) =>{

        star.addEventListener("click" , () => {

            stars.forEach((star , indextwo) => {
                // console.log( indexone , indextwo);

                indexone >= indextwo ? star.classList.add("active") : star.classList.remove("active");

            })

        })
    })