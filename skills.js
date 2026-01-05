window.onload = () => {
    document.querySelectorAll(".progress").forEach(bar => {
        bar.style.width = bar.classList.contains("html") ? "90%" :
                          bar.classList.contains("css") ? "85%" :
                          bar.classList.contains("js") ? "70%" :
                          bar.classList.contains("ui") ? "75%" :
                          "65%";
    });
};