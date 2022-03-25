import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	const w = window;
	const e = document.documentElement;
	const b = document.getElementsByTagName('body')[0];
	const x = w.innerWidth || e.clientWidth || b.clientWidth;

	// VITAMINE PATH BUTTON (PERORAL || NANO)
	const compareMethod1 = document.querySelector('.compare__method1'),
		compareMethod2 = document.querySelector('.compare__method2'),
		compareMethodGif1 = document.querySelector('.compare__method_gif1'),
		compareMethodGif2 = document.querySelector('.compare__method_gif2'),
		compareMethodBlock1 = document.querySelector(
			'.compare__method1 .compare__method_block'
		),
		compareMethodBlock2 = document.querySelector(
			'.compare__method2 .compare__method_block'
		),
		compareMethodBlock2Img = document.querySelector(
			'.compare__method2 .compare__method-img'
		),
		button1 = document.querySelector('#block-btn1'),
		button2 = document.querySelector('#block-btn2'),
		button1Mob = document.querySelector('#block-btn1-mob'),
		button2Mob = document.querySelector('#block-btn2-mob');

	let slider = document.querySelector('.slider');
	let sliderText = document.querySelector('.slider-text');

	slider.classList.add('slider-btn1');
	sliderText.innerText = 'Обычные пероральные формы витамина D';

	compareMethod1.style.visiblility = 'hidden';
	compareMethod2.style.visiblility = 'hidden';
	compareMethodBlock1.style.display = 'none';
	compareMethodBlock2.style.display = 'none';
	compareMethodBlock2Img.style.display = 'none';
	compareMethodGif1.style.display = 'none';
	compareMethodGif2.style.display = 'none';

	// (при ширине > 500px):
	if (x > 500) {
		window.addEventListener('load', () => {
			const observerGif = new IntersectionObserver(
				entries => {
					entries.forEach(({ isIntersecting }) => {
						if (!isIntersecting) {
							compareMethod1.style.visiblility = 'hidden';
							compareMethod2.style.visiblility = 'hidden';
							compareMethodBlock1.style.display = 'none';
							compareMethodBlock2.style.display = 'none';
							compareMethodBlock2Img.style.display = 'none';
							compareMethodGif1.style.display = 'none';
							compareMethodGif2.style.display = 'none';

							(function ($) {
								let $gif1 = $('.compare__method_gif1'),
									$img1 = $gif1.children('img'),
									$imgSrc1 = $img1.attr('src'),
									$imgSrcgif1 = $img1.attr('data-srcgif'),
									$imgExt1 = $imgSrc1.split('.');
								let $gif2 = $('.compare__method_gif2'),
									$img2 = $gif2.children('img'),
									$imgSrc2 = $img2.attr('src'),
									$imgSrcgif2 = $img2.attr('data-srcgif'),
									$imgExt2 = $imgSrc2.split('.');

								if ($imgExt1[1] === 'gif') {
									$img1.attr('src', $imgSrcgif1).attr('data-srcgif', $imgSrc1);
								}
								if ($imgExt2[1] === 'gif') {
									$img2.attr('src', $imgSrcgif2).attr('data-srcgif', $imgSrc2);
								}
							})(jQuery);
						}

						if (
							isIntersecting &&
							compareMethod1.classList.contains('compare__method-active')
						) {
							compareMethod1.classList.remove('non-active');
							compareMethod2.classList.remove('compare__method-active');
							compareMethod1.classList.add('compare__method-active');
							compareMethod2.classList.add('non-active');

							compareMethod1.style.visibility = 'visible';
							compareMethodGif1.style.display = 'block';
							compareMethodGif2.style.display = 'none';
							compareMethodBlock1.style.display = 'block';
							compareMethodBlock2.style.display = 'none';
							compareMethodBlock2Img.style.display = 'none';

							compareMethod1.classList.remove('paused');
							compareMethod1.classList.add('running');
							compareMethodBlock1.classList.remove('paused');
							compareMethodBlock1.classList.add('running');

							compareMethod2.classList.remove('running');
							compareMethod2.classList.add('paused');
							compareMethodBlock2.classList.remove('running');
							compareMethodBlock2.classList.add('paused');
							compareMethodBlock2Img.classList.remove('running');
							compareMethodBlock2Img.classList.add('paused');

							(function ($) {
								let $gif1 = $('.compare__method_gif1'),
									$img1 = $gif1.children('img'),
									$imgSrc1 = $img1.attr('src'),
									$imgSrcgif1 = $img1.attr('data-srcgif'),
									$imgExt1 = $imgSrcgif1.split('.');

								if ($imgExt1[1] === 'gif') {
									$img1.attr('src', $imgSrcgif1).attr('data-srcgif', $imgSrc1);
								}
							})(jQuery);
						} else if (
							isIntersecting &&
							compareMethod2.classList.contains('compare__method-active')
						) {
							compareMethod2.classList.remove('non-active');
							compareMethod1.classList.remove('compare__method-active');
							compareMethod2.classList.add('compare__method-active');
							compareMethod1.classList.add('non-active');

							compareMethod2.style.visibility = 'visible';
							compareMethodGif2.style.display = 'block';
							compareMethodGif1.style.display = 'none';
							compareMethodBlock2.style.display = 'block';
							compareMethodBlock2Img.style.display = 'block';
							compareMethodBlock1.style.display = 'none';

							compareMethod2.classList.remove('paused');
							compareMethod2.classList.add('running');
							compareMethodBlock2.classList.remove('paused');
							compareMethodBlock2.classList.add('running');
							compareMethodBlock2Img.classList.remove('paused');
							compareMethodBlock2Img.classList.add('running');

							compareMethod1.classList.remove('running');
							compareMethod1.classList.add('paused');
							compareMethodBlock1.classList.remove('running');
							compareMethodBlock1.classList.add('paused');

							(function ($) {
								let $gif2 = $('.compare__method_gif2'),
									$img2 = $gif2.children('img'),
									$imgSrc2 = $img2.attr('src'),
									$imgSrcgif2 = $img2.attr('data-srcgif'),
									$imgExt2 = $imgSrcgif2.split('.');

								if ($imgExt2[1] === 'gif') {
									$img2.attr('src', $imgSrcgif2).attr('data-srcgif', $imgSrc2);
								}
							})(jQuery);
						}
					});
				},
				{
					threshold: 0.2,
				}
			);
			const methods = document.querySelectorAll('.compare__methods');
			console.dir(methods);
			methods.forEach(method => observerGif.observe(method));
		});

		button1.addEventListener('click', function (e) {
			e.preventDefault();
			if (slider.classList.contains('slider-btn1')) {
				slider.classList.remove('slider-btn2');
				sliderText.innerText = 'Обычные пероральные формы витамина D';
				compareMethod1.classList.remove('non-active');
				compareMethod2.classList.remove('compare__method-active');
				compareMethod1.classList.add('compare__method-active');
				compareMethod2.classList.add('non-active');

				compareMethod1.style.visibility = 'visible';
				compareMethodGif1.style.display = 'block';
				compareMethodGif2.style.display = 'none';
				compareMethodBlock1.style.display = 'block';
				compareMethodBlock2.style.display = 'none';
				compareMethodBlock2Img.style.display = 'none';

				compareMethod1.classList.remove('paused');
				compareMethod1.classList.add('running');
				compareMethodBlock1.classList.remove('paused');
				compareMethodBlock1.classList.add('running');

				compareMethod2.classList.remove('running');
				compareMethod2.classList.add('paused');
				compareMethodBlock2.classList.remove('running');
				compareMethodBlock2.classList.add('paused');
				compareMethodBlock2Img.classList.remove('running');
				compareMethodBlock2Img.classList.add('paused');

				(function ($) {
					let $gif1 = $('.compare__method_gif1'),
						$img1 = $gif1.children('img'),
						$imgSrc1 = $img1.attr('src'),
						$imgSrcgif1 = $img1.attr('data-srcgif'),
						$imgExt1 = $imgSrcgif1.split('.');

					let $gif2 = $('.compare__method_gif2'),
						$img2 = $gif2.children('img'),
						$imgSrc2 = $img2.attr('src'),
						$imgSrcgif2 = $img2.attr('data-srcgif'),
						$imgExt2 = $imgSrcgif2.split('.');

					if ($imgExt1[1] === 'gif') {
						$img1.attr('src', $imgSrcgif1).attr('data-srcgif', $imgSrc1);
					}
					if ($imgExt2[1] !== 'gif') {
						$img2.attr('src', $imgSrcgif2).attr('data-srcgif', $imgSrc2);
					}
				})(jQuery);
			} else {
				slider.classList.remove('slider-btn2');
				slider.classList.add('slider-btn1');
				compareMethod1.classList.remove('non-active');
				compareMethod2.classList.remove('compare__method-active');
				compareMethod1.classList.add('compare__method-active');
				compareMethod2.classList.add('non-active');
				setTimeout(function () {
					sliderText.innerText = 'Обычные пероральные формы витамина D';
				}, 300);
				clearTimeout();

				compareMethod1.style.visibility = 'visible';
				compareMethodGif1.style.display = 'block';
				compareMethodGif2.style.display = 'none';
				compareMethodBlock1.style.display = 'block';
				compareMethodBlock2.style.display = 'none';
				compareMethodBlock2Img.style.display = 'none';

				compareMethod1.classList.remove('paused');
				compareMethod1.classList.add('running');
				compareMethodBlock1.classList.remove('paused');
				compareMethodBlock1.classList.add('running');

				compareMethod2.classList.remove('running');
				compareMethod2.classList.add('paused');
				compareMethodBlock2.classList.remove('running');
				compareMethodBlock2.classList.add('paused');
				compareMethodBlock2Img.classList.remove('running');
				compareMethodBlock2Img.classList.add('paused');

				(function ($) {
					let $gif1 = $('.compare__method_gif1'),
						$img1 = $gif1.children('img'),
						$imgSrc1 = $img1.attr('src'),
						$imgSrcgif1 = $img1.attr('data-srcgif'),
						$imgExt1 = $imgSrcgif1.split('.');

					let $gif2 = $('.compare__method_gif2'),
						$img2 = $gif2.children('img'),
						$imgSrc2 = $img2.attr('src'),
						$imgSrcgif2 = $img2.attr('data-srcgif'),
						$imgExt2 = $imgSrcgif2.split('.');

					if ($imgExt1[1] === 'gif') {
						$img1.attr('src', $imgSrcgif1).attr('data-srcgif', $imgSrc1);
					}
					if ($imgExt2[1] !== 'gif') {
						$img2.attr('src', $imgSrcgif2).attr('data-srcgif', $imgSrc2);
					}
				})(jQuery);
			}
		});
		button2.addEventListener('click', function (e) {
			e.preventDefault();
			if (slider.classList.contains('slider-btn2')) {
				slider.classList.remove('slider-btn1');
				sliderText.innerText = 'Наноэмульсионный спрей';
				compareMethod2.classList.remove('non-active');
				compareMethod1.classList.remove('compare__method-active');
				compareMethod2.classList.add('compare__method-active');
				compareMethod1.classList.add('non-active');

				compareMethod2.style.visibility = 'visible';
				compareMethodGif2.style.display = 'block';
				compareMethodGif1.style.display = 'none';
				compareMethodBlock2.style.display = 'block';
				compareMethodBlock2Img.style.display = 'block';
				compareMethodBlock1.style.display = 'none';

				compareMethod2.classList.remove('paused');
				compareMethod2.classList.add('running');
				compareMethodBlock2.classList.remove('paused');
				compareMethodBlock2.classList.add('running');
				compareMethodBlock2Img.classList.remove('paused');
				compareMethodBlock2Img.classList.add('running');

				compareMethod1.classList.remove('running');
				compareMethod1.classList.add('paused');
				compareMethodBlock1.classList.remove('running');
				compareMethodBlock1.classList.add('paused');

				(function ($) {
					let $gif1 = $('.compare__method_gif1'),
						$img1 = $gif1.children('img'),
						$imgSrc1 = $img1.attr('src'),
						$imgSrcgif1 = $img1.attr('data-srcgif'),
						$imgExt1 = $imgSrcgif1.split('.');

					let $gif2 = $('.compare__method_gif2'),
						$img2 = $gif2.children('img'),
						$imgSrc2 = $img2.attr('src'),
						$imgSrcgif2 = $img2.attr('data-srcgif'),
						$imgExt2 = $imgSrcgif2.split('.');

					if ($imgExt1[1] !== 'gif') {
						$img1.attr('src', $imgSrcgif1).attr('data-srcgif', $imgSrc1);
					}
					if ($imgExt2[1] === 'gif') {
						$img2.attr('src', $imgSrcgif2).attr('data-srcgif', $imgSrc2);
					}
				})(jQuery);
			} else {
				slider.classList.remove('slider-btn1');
				slider.classList.add('slider-btn2');
				compareMethod2.classList.remove('non-active');
				compareMethod1.classList.remove('compare__method-active');
				compareMethod2.classList.add('compare__method-active');
				compareMethod1.classList.add('non-active');
				setTimeout(function () {
					sliderText.innerText = 'Наноэмульсионный спрей';
				}, 1);
				clearTimeout();
				console.log('view nano-spray');

				compareMethod2.style.visibility = 'visible';
				compareMethodGif2.style.display = 'block';
				compareMethodGif1.style.display = 'none';
				compareMethodBlock2.style.display = 'block';
				compareMethodBlock2Img.style.display = 'block';
				compareMethodBlock1.style.display = 'none';

				compareMethod2.classList.remove('paused');
				compareMethod2.classList.add('running');
				compareMethodBlock2.classList.remove('paused');
				compareMethodBlock2.classList.add('running');
				compareMethodBlock2Img.classList.remove('paused');
				compareMethodBlock2Img.classList.add('running');

				compareMethod1.classList.remove('running');
				compareMethod1.classList.add('paused');
				compareMethodBlock1.classList.remove('running');
				compareMethodBlock1.classList.add('paused');

				(function ($) {
					let $gif1 = $('.compare__method_gif1'),
						$img1 = $gif1.children('img'),
						$imgSrc1 = $img1.attr('src'),
						$imgSrcgif1 = $img1.attr('data-srcgif'),
						$imgExt1 = $imgSrcgif1.split('.');

					let $gif2 = $('.compare__method_gif2'),
						$img2 = $gif2.children('img'),
						$imgSrc2 = $img2.attr('src'),
						$imgSrcgif2 = $img2.attr('data-srcgif'),
						$imgExt2 = $imgSrcgif2.split('.');

					if ($imgExt1[1] !== 'gif') {
						$img1.attr('src', $imgSrcgif1).attr('data-srcgif', $imgSrc1);
					}
					if ($imgExt2[1] === 'gif') {
						$img2.attr('src', $imgSrcgif2).attr('data-srcgif', $imgSrc2);
					}
				})(jQuery);
			}
		});

		//Drag'N'Drop:
		slider.ondragstart = drag;
		button1.ondragover = allowDrop;
		button1.ondrop = drop;
		button2.ondragover = allowDrop;
		button2.ondrop = drop;

		button1.classList.add('dropped');

		// eslint-disable-next-line no-inner-declarations
		function drag(event) {
			event.dataTransfer.setData('id', event.target.id);
		}
		// eslint-disable-next-line no-inner-declarations
		function allowDrop(event) {
			event.preventDefault();
		}
		// eslint-disable-next-line no-inner-declarations
		function drop(event) {
			event.preventDefault();
			// const itemId = event.dataTransfer.getData('id');
			// const dropzone = event.target;
			// dropzone.appendChild(slider);
			// event.dataTransfer.clearData();

			if (!button2.classList.contains('dropped')) {
				button2.classList.add('dropped');
				button1.classList.remove('dropped');
				slider.classList.remove('slider-btn1');
				slider.classList.add('slider-btn2');

				compareMethod2.classList.remove('non-active');
				compareMethod1.classList.remove('compare__method-active');
				compareMethod2.classList.add('compare__method-active');
				compareMethod1.classList.add('non-active');

				compareMethod2.style.visibility = 'visible';
				compareMethodGif2.style.display = 'block';
				compareMethodGif1.style.display = 'none';
				compareMethodBlock2.style.display = 'block';
				compareMethodBlock2Img.style.display = 'block';
				compareMethodBlock1.style.display = 'none';

				compareMethod2.classList.remove('paused');
				compareMethod2.classList.add('running');
				compareMethodBlock2.classList.remove('paused');
				compareMethodBlock2.classList.add('running');
				compareMethodBlock2Img.classList.remove('paused');
				compareMethodBlock2Img.classList.add('running');

				compareMethod1.classList.remove('running');
				compareMethod1.classList.add('paused');
				compareMethodBlock1.classList.remove('running');
				compareMethodBlock1.classList.add('paused');

				setTimeout(function () {
					sliderText.innerText = 'Наноэмульсионный спрей';
				}, 1);
				clearTimeout();
				console.log('view nano-spray');

				(function ($) {
					let $gif1 = $('.compare__method_gif1'),
						$img1 = $gif1.children('img'),
						$imgSrc1 = $img1.attr('src'),
						$imgSrcgif1 = $img1.attr('data-srcgif'),
						$imgExt1 = $imgSrcgif1.split('.');

					let $gif2 = $('.compare__method_gif2'),
						$img2 = $gif2.children('img'),
						$imgSrc2 = $img2.attr('src'),
						$imgSrcgif2 = $img2.attr('data-srcgif'),
						$imgExt2 = $imgSrcgif2.split('.');

					if ($imgExt1[1] !== 'gif') {
						$img1.attr('src', $imgSrcgif1).attr('data-srcgif', $imgSrc1);
					}
					if ($imgExt2[1] === 'gif') {
						$img2.attr('src', $imgSrcgif2).attr('data-srcgif', $imgSrc2);
					}
				})(jQuery);

				stop();
			} else {
				button1.classList.add('dropped');
				button2.classList.remove('dropped');
				slider.classList.remove('slider-btn2');
				slider.classList.add('slider-btn1');

				compareMethod1.classList.remove('non-active');
				compareMethod2.classList.remove('compare__method-active');
				compareMethod1.classList.add('compare__method-active');
				compareMethod2.classList.add('non-active');

				compareMethod1.style.visibility = 'visible';
				compareMethodGif1.style.display = 'block';
				compareMethodGif2.style.display = 'none';
				compareMethodBlock1.style.display = 'block';
				compareMethodBlock2.style.display = 'none';
				compareMethodBlock2Img.style.display = 'none';

				compareMethod1.classList.remove('paused');
				compareMethod1.classList.add('running');
				compareMethodBlock1.classList.remove('paused');
				compareMethodBlock1.classList.add('running');

				compareMethod2.classList.remove('running');
				compareMethod2.classList.add('paused');
				compareMethodBlock2.classList.remove('running');
				compareMethodBlock2.classList.add('paused');
				compareMethodBlock2Img.classList.remove('running');
				compareMethodBlock2Img.classList.add('paused');
				setTimeout(function () {
					sliderText.innerText = 'Обычные пероральные формы витамина D';
				}, 300);
				clearTimeout();

				(function ($) {
					let $gif1 = $('.compare__method_gif1'),
						$img1 = $gif1.children('img'),
						$imgSrc1 = $img1.attr('src'),
						$imgSrcgif1 = $img1.attr('data-srcgif'),
						$imgExt1 = $imgSrcgif1.split('.');

					let $gif2 = $('.compare__method_gif2'),
						$img2 = $gif2.children('img'),
						$imgSrc2 = $img2.attr('src'),
						$imgSrcgif2 = $img2.attr('data-srcgif'),
						$imgExt2 = $imgSrcgif2.split('.');

					if ($imgExt1[1] === 'gif') {
						$img1.attr('src', $imgSrcgif1).attr('data-srcgif', $imgSrc1);
					}
					if ($imgExt2[1] !== 'gif') {
						$img2.attr('src', $imgSrcgif2).attr('data-srcgif', $imgSrc2);
					}
				})(jQuery);

				stop();
			}
		}
	} else {
		// (при ширине < 500px):
		button1Mob.addEventListener('click', function (e) {
			e.preventDefault();
			if (button1Mob.classList.contains('switcher_button1-active')) {
				button2Mob.classList.remove('switcher_button2-active');
				compareMethod2.classList.remove('compare__method-active');
				compareMethod1.classList.add('compare__method-active');
			} else {
				button1Mob.classList.add('switcher_button1-active');
				button2Mob.classList.remove('switcher_button2-active');
				compareMethod2.classList.remove('compare__method-active');
				compareMethod1.classList.add('compare__method-active');
			}
		});
		button2Mob.addEventListener('click', function (e) {
			e.preventDefault();
			if (button2Mob.classList.contains('switcher_button2-active')) {
				button1Mob.classList.remove('switcher_button1-active');
				compareMethod1.classList.remove('compare__method-active');
				compareMethod2.classList.add('compare__method-active');
			} else {
				button2Mob.classList.add('switcher_button2-active');
				button1Mob.classList.remove('switcher_button1-active');
				compareMethod1.classList.remove('compare__method-active');
				compareMethod2.classList.add('compare__method-active');
				console.log('view nano-spray');
			}
		});
	}
});
