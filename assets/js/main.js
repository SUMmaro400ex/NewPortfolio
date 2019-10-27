const readyFunc = _ => {
    Array.from(document.getElementsByClassName('scroll')).forEach(elem => {
        elem.addEventListener('click', event => {
            event.preventDefault();
            const id = elem.getAttribute('href').split('#')[1];
            document.getElementById(id).scrollIntoView({behavior: 'smooth' })

        });
    })
};

document.addEventListener('DOMContentLoaded', readyFunc, false);
  