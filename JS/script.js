document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    
    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const id = section.getAttribute('id');
        a.href = `#${id}`;
        a.textContent = section.querySelector('h2') ? section.querySelector('h2').textContent : id;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Append the dynamically created navbar to the header
    const header = document.querySelector('header');
    header.appendChild(nav);

    // Handle 'active' class based on scroll
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        // Hide navbar when not scrolling
        navbar.style.top = '0';
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            navbar.style.top = '-60px';
        }, 2000);
    });

    // Scroll to section on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerText = 'Top';
    scrollTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
