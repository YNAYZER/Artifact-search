import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';

// === КНОПКА ВКЛ/ВИКЛ МУЗИКИ ===
const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');
const icon = document.getElementById('icon');
let isPlaying = false;

playButton.addEventListener('click', () => {
  audioPlayer.volume = 0.1;

  if (isPlaying) {
    audioPlayer.pause();
    icon?.setAttribute('points', '40,30 70,50 40,70'); // Play
  } else {
    audioPlayer.play()
      .then(() => {
        icon?.setAttribute('points', '35,30 65,30 65,70 35,70'); // Pause
      })
      .catch(err => {
        console.error("Не вдалося запустити музику:", err);
      });
  }
  isPlaying = !isPlaying;
});


// === ПЕРЕМИКАННЯ СЦЕН ===
const scene_list = document.querySelectorAll('.scene');
let scen2Animated = false;

const allTargets = document.querySelectorAll('[data-target]');

allTargets.forEach(element => {
  element.addEventListener('click', () => {
    const nextScene = element.getAttribute('data-target');
    scene_list.forEach(scene => scene.classList.remove('active'));
    document.getElementById(nextScene)?.classList.add('active');

    // === СЦЕНА 2 ===
    if (nextScene === 'scen2' && !scen2Animated) {
      anime({
        targets: '.background_txt_Storyteller_maps',
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutQuad'
      });
      anime({
        targets: '.fade-text_Storyteller_maps',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1200,
        easing: 'easeOutCubic'
      });
      scen2Animated = true;
    }

    // === ДОДАТКОВІ СЦЕНИ ===
    if (nextScene === 'scen3') {
      anime({ targets: '.mitaj_maps', translateX: [-100, 0], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt_maps', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_maps', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }

    if (nextScene === 'scen4') {
      anime({ targets: '.fade-text_maps', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
    }

    if (nextScene === 'scen5') {
      anime({ targets: '.mitaj', translateX: [-100, 0], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }

    if (nextScene === 'scen6') {
      anime({ targets: '.people', translateX: [0, -100], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }

    if (nextScene === 'scen7') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }

    if (nextScene === 'scen8') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }

    if (nextScene === 'scen9') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }

    if (nextScene === 'scen10') {
      anime({targets: ['.choice', '.choice1', '.choice2'],opacity: [0, 1],translateX: [-200, 0],scale: [0.9, 1],duration: 1000,easing: 'easeOutExpo',delay: anime.stagger(200)});
    }
    // Анімації длясюжетної лінії Каран
    if (nextScene === 'scen-k1') {
      anime({ targets: '.people', translateX: [0, -100], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k2') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k3') {
      anime({ targets: '.mitaj_hostel', translateX: [-100, 0], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k4') {
      anime({ targets: '.people_stalker', translateX: [0, -100], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k5') {
      anime({
        targets: '.background_txt_Storyteller',
        opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' 
      });
      anime({
        targets: '.fade-text_Storyteller',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1200,
        easing: 'easeOutCubic'
      });
    }
    if (nextScene === 'scen-k6') {
      anime({ targets: '.mitaj_hostel', translateX: [-100, 0], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k7') {
      anime({ targets: '.people_karan', translateX: [0, -287], opacity: [0, 1], duration: 3000, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k8') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k9') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k10') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k11') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k12') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k13') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k14') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k15') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k16') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k17') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k18') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k19') {
      anime({
        targets: '.background_txt_Storyteller',
        opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' 
      });
      anime({
        targets: '.fade-text_Storyteller',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1200,
        easing: 'easeOutCubic'
      });
    }
    if (nextScene === 'scen-k20') {
      anime({ targets: '.mitaj_hostel', translateX: [-100, 0], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.people_karan', translateX: [0, -287], opacity: [0, 1], duration: 3000, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k21') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k22') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k23') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k24') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k25') {
      anime({
        targets: '.background_txt_Storyteller',
        opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' 
      });
      anime({
        targets: '.fade-text_Storyteller',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1200,
        easing: 'easeOutCubic'
      });
    }
    if (nextScene === 'scen-k26') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({targets: '.fade-text_Storyteller',opacity: [0, 1],translateY: [20, 0],duration: 1200,easing: 'easeOutCubic'});
    }
    if (nextScene === 'scen-k27') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({targets: '.fade-text_Storyteller',opacity: [0, 1],translateY: [20, 0],duration: 1200,easing: 'easeOutCubic'});
    }
    if (nextScene === 'scen-k28') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({targets: '.fade-text_Storyteller',opacity: [0, 1],translateY: [20, 0],duration: 1200,easing: 'easeOutCubic'});
    }
    if (nextScene === 'scen-k29') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({targets: '.fade-text_Storyteller',opacity: [0, 1],translateY: [20, 0],duration: 1200,easing: 'easeOutCubic'});
    }
    if (nextScene === 'scen-k30') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({targets: '.fade-text_Storyteller',opacity: [0, 1],translateY: [20, 0],duration: 1200,easing: 'easeOutCubic'});
    }
    if (nextScene === 'scen-k1-1') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({targets: '.fade-text_Storyteller',opacity: [0, 1],translateY: [20, 0],duration: 1200,easing: 'easeOutCubic'});
    }
    if (nextScene === 'scen-k1-2') {
      anime({ targets: '.people_stalker', translateX: [0, -100], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k1-3') {
      anime({ targets: '.real_mitaj', translateX: [-100, 0], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k1-4') {
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k1-5') {
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k1-6') {
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k1-7') {
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k1-8') {
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k1-3-1') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k1-3-2') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k1-3-3') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k1-3-4') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k1-3-5') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k2-1') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k2-2') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k2-3') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k2-4') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-k2-5') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    //анімації сцен із сеаліною


    if (nextScene === 'scen-s1') {
      anime({ targets: '.people', translateX: [0, -100], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s2') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s3') {
      anime({ targets: '.mitaj_hostel', translateX: [-100, 0], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s4') {
      anime({ targets: '.people_stalker', translateX: [0, -100], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s5') {
      anime({
        targets: '.background_txt_Storyteller',
        opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' 
      });
      anime({
        targets: '.fade-text_Storyteller',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1200,
        easing: 'easeOutCubic'
      });
    }
    if (nextScene === 'scen-s6') {
      anime({ targets: '.mitaj_hostel', translateX: [-100, 0], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s7') {
      anime({ targets: '.people_sealin', translateX: [0, -287], opacity: [0, 1], duration: 3000, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    } 
    if (nextScene === 'scen-s8') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    } 
    if (nextScene === 'scen-s9') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    } 
    if (nextScene === 'scen-s10') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    } 
    if (nextScene === 'scen-s11') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    } 
    if (nextScene === 'scen-s12') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s13') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    } 
    if (nextScene === 'scen-s14') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    } 
    if (nextScene === 'scen-s15') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s16') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s17') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s18') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s19') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s20') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s21') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s22') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s23') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s24') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s25') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s26') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s27') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s1-2') {
      anime({ targets: '.people_stalker', translateX: [0, -100], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s1-3') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s1-4') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s1-5') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s1-6') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s1-7') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s1-8') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s1-9') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }

    if (nextScene === 'scen-s2-1') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s2-2') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s2-3') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s2-4') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s3-5') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-s2-6') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    //Анімації із Олдаром
    if (nextScene === 'scen-o1') {
      anime({ targets: '.people', translateX: [0, -100], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o2') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o3') {
      anime({ targets: '.mitaj_hostel', translateX: [-100, 0], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o4') {
      anime({ targets: '.people_stalker', translateX: [0, -100], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o5') {
      anime({
        targets: '.background_txt_Storyteller',
        opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' 
      });
      anime({
        targets: '.fade-text_Storyteller',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1200,
        easing: 'easeOutCubic'
      });
    }
    if (nextScene === 'scen-o6') {
      anime({ targets: '.mitaj_hostel', translateX: [-100, 0], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o7') {
      anime({ targets: '.people_oldar', translateX: [0, -287], opacity: [0, 1], duration: 3000, easing: 'easeOutQuad' });
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    } 
    if (nextScene === 'scen-o8') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o9') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    } 
    if (nextScene === 'scen-o10') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o11') {
      
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o12') {
     
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    } 
    if (nextScene === 'scen-o13') {
      anime({ targets: '.background_txt', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o14') {
      anime({ targets: '.background_txt_people', opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    } 
    if (nextScene === 'scen-o15') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o16') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o17') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o1-1') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o1-2') {
      anime({ targets: '.people_stalker', translateX: [0, -100], opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_people', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o1-3') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o1-3') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o1-4') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o1-5') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o1-6') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o1-7') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o1-8') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o2-1') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o2-2') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o2-3') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o2-4') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o2-5') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o2-6') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
    if (nextScene === 'scen-o2-7') {
      anime({targets: '.background_txt_Storyteller',opacity: [0, 1], duration: 1500, easing: 'easeOutQuad' });
      anime({ targets: '.fade-text_Storyteller', opacity: [0, 1], translateY: [20, 0], duration: 1200, easing: 'easeOutCubic' });
    }
  });
});