AOS.init({
  duration: 1100
});

const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'SWIFT', 'MONGOOSE', 'REACT',
    'PYTHON', 'SASS',
    'DJANGO', 'NODEJS', 'MONGODB',
    'EXPRESS', 'MYSQL', 'JQUERY', 'JAVA',
    'GITHUB', 'WORDPRESS', 'FLASK', 'API', 'REACT',
    'ILLUSTRATOR', 'PHOTOSHOP CC', 'AFTER EFFECTS',
    'SASS', 'CHATGPT', 'AI', 'WORDPRESS', 'ILLUSTRATOR', 'pHOTOSHOP CC', 'FLASK',
    'VSCODE', 'PYCHARME'
  ];
  
  var tagCloud = TagCloud('.Sphere', Texts, {
  
    // Sphere radius in px
    radius: 280,
  
    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',
  
    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,
  
    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true
  
  });
  
  // Giving color to each text in sphere
  var color = '#26f010';
  document.querySelector('.Sphere').style.color = color;
  
// smoth scrolling
const navLinks = document.querySelectorAll('.menu a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Get the target section's id
        const targetId = this.getAttribute('href').substring(1); // Remove '#' from href

        // Scroll smoothly to the target section
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToWorks() {

  const worksSection = document.getElementById('works');
  
  worksSection.scrollIntoView({ behavior: 'smooth' });
}
