export { lazyLoading }


function callback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src
            observer.unobserve(entry.target)
        }
    })
}

const lazyLoading = new IntersectionObserver(callback)