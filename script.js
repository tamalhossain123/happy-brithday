const stepsData = [
            {
                step: 1,
                title: "প্রথম দেখা",
                image: "./images/1.jpg", 
                story: "যেদিন প্রথম তোমার চোখের দিকে তাকিয়েছিলাম, মনে হয়েছিল পৃথিবীর সব চেয়ে সুন্দর জিনিসটা আমি পেয়ে গেছি। সেই মুহূর্তটা আজও আমার হৃদয়ে গাঁথা আছে।"
            },
            {
                step: 2,
                title: "কাছাকাছি আসা",
                image: "./images/2.jpg",
                story: "দিন যত গড়িয়েছে, গভীর তোমার ওই নিষ্পাপ হাসিটা আমার সারাদিনের সব ক্লান্তি ভুলিয়ে দেয়। তোমার হাসিমাখা মুখটা দেখলেই মনে হয় জীবনটা কত সুন্দর!"
            },
            {
                step: 3,
                title: " প্রথম স্পর্শ",
                image: "./images/3.jpg",
                story: "যখন প্রথম তোমার হাত ধরেছিলাম, মনে হয়েছিল আমি সপ্নের দুনিয়ায় হাড়িয়ে গেছি। সেই সহজ স্পর্শটা আজও আমার শরীরের লম দাড় কড়িয়ে দেয়।"
            },
            {
                step: 4,
                title: "প্রথম কথোপকথন",
                image: "./images/4.jpg",
                story: "আমরা যখন প্রথম দীর্ঘ কথা বলেছিলাম, সারা রাত জেগেছিলাম তোমার সাথে। তোমার প্রতিটি কথা, তোমার প্রতিটি বাক্য আমার হৃদয়ে নতুন জীবন দিয়েছিল।"
            },
            {
                step: 5,
                title: "প্রথম উপহার",
                image: "./images/5.jpg",
                story: "ছোট্ট একটি শাড়ী উপহার দিয়েছিলাম তোমাকে, কিন্তু তোমার খুশি দেখে আমার মনে হয়েছিল পৃথিবীর সব কিছু পেয়ে গেছি। তোমার সেই খুশির হাসি আজও আমার মধ্যে জ্বলছে।"
            },
            {
                step: 6,
                title: " ষ্টির দিন",
                image: "./images/6.jpg",
                story: "বৃষ্টির মধ্যে যখন আমরা হেঁটেছিলাম একসাথে, তখন মনে হয়েছিল বৃষ্টিও আমাদের ভালোবাসা উদযাপন করছে। তোমার কাঁধে মাথা রেখে চলার সেই মুহূর্তটা আজও আমার স্বর্গ।"
            },
            {
                step: 7,
                title: "একসাথে দেখা স্বপ্ন",
                image: "./images/7.jpg",
                story: "আমরা একসাথে বসে যে অগণিত স্বপ্ন বুনেছি, তার প্রতিটিই তোমাকে ঘিরে। তুমি ছাড়া আমার ভবিষ্যতের কোনো ছবি আমি কল্পনাই করতে পারি না।"
            },
            {
                step: 8,
                title: "প্রথম ঝগড়া",
                image: "./images/8.jpg",
                story: "প্রথম ঝগড়ার পরে মিলিয়ে নেওয়ার সময় বুঝেছিলাম, তুমি ছাড়া আমি সম্পূর্ণ নই। আমাদের সেই প্রথম মিষ্টি আপস আমাকে শিখিয়েছে ভালোবাসা কী।"
            },
            {
                step: 9,
                title: "তোমার সপ্ন",
                image: "./images/9.jpg",
                story: "যখন তুমি আমার হাতে তোমার স্বপ্নের কথা বলেছিলে, আমার সারা শরীরে কাঁপুনি ধরেছিল। তোমার স্বপ্ন বাস্তবায়নে আমি প্রতিশ্রুতিবদ্ধ থাকব চিরকাল।"
            },
            {
                step: 10,
                title: "ঝগড়া এবং মিল",
                image: "./images/10.jpg",
                story: "ছোটখাটো ঝগড়ার পর যখন আমরা আবার এক হয়ে যাই, তখন ভালোবাসা যেন আরও দ্বিগুণ হয়ে যায়। এই মান-অভিমানগুলোও বড়ই মিষ্টি!"
            },
            {
                step: 11,
                title: " না বলা কথা",
                image: "./images/11.PNG",
                story: "তোমাকে হয়তো সবসময় বলা হয় না, আমি তোমাকে কতটা ভালোবাসি! তুমি আমার জীবনের সবচেয়ে বড় পাওয়া, আমার সবচেয়ে সুন্দর উপহার।"
            },
            {
                step: 12,
                title: "হাসির মুহূর্ত",
                image: "./images/12.PNG",
                story: "তোমার সাথে হাসতে গিয়ে কখনও ভেবেছি, এর চেয়ে সুন্দর জিনিস পৃথিবীতে আর কিছু নেই। আমরা যখন একসাথে হাসি, তখন সারা বিশ্ব থেমে যায়।"
            },
            {
                step: 13,
                title: "ভালোবাসার পূর্ণতা",
                image: "./images/13.PNG",
                story: "তোমাকে জীবনসঙ্গী হিসেবে পেয়ে আমার জীবনটা পূর্ণতা পেয়েছে। তোমার হাত ধরে বাকি জীবনটাও এভাবেই পার করে দিতে চাই।"
            },
            {
                step: 14,
                title: "তোমার রূপে মুগ্ধতা",
                image: "./images/14.jpg",
                story: "তুমি সাজলে যতটা সুন্দর লাগো, তার চেয়েও বেশি সুন্দর লাগে যখন তুমি সাধারণ রূপে আমার সামনে আসো। তোমার এই স্নিগ্ধতা আমাকে মুগ্ধ করে।"
            },
            {
                step: 15,
                title: "ভবিষ্যতের স্বপ্ন",
                image: "./images/15.jpg",
                story: "আমরা যখন ভবিষ্যত নিয়ে কথা বলি, আমার মনে এক অসীম শান্তি আসে। কারণ আমি জানি তুমি আমার সাথে থাকবে প্রতিটি পদক্ষেপে। আমাদের ভবিষ্যত অবশ্যই সুন্দর হবে।"
            },
            {
                step: 16,
                title: "নির্ভরতার জায়গা",
                image: "./images/16.jpg",
                story: "তুমি শুধু আমার ভালোবাসাই নও, তুমি আমার সবচেয়ে নিরাপদ আশ্রয়। পৃথিবীর সব অশান্তি ভুলে আমি শুধু তোমার বুকেই শান্তি খুঁজে পাই।"
            },
            {
                step: 17,
                title: "নীরব মুহূর্ত",
                image: "./images/17.jpg",
                story: "কখনও কথা না বলে শুধু একসাথে বসে থাকা - এই নীরবতাও আমাদের ভালোবাসার ভাষা। তোমার উপস্থিতি আমার কাছে যথেষ্ট, কথার কোনও প্রয়োজন নেই।"
            },
            {
                step: 18,
                title: "ভুলের ক্ষমা",
                image: "./images/18.jpg",
                story: "যখন আমি ভুল করেছি এবং তুমি আমাকে ক্ষমা করেছ, বুঝেছিলাম প্রকৃত ভালোবাসা কী জিনিস। তোমার সহনশীলতা আমার মধ্যে আরও ভালো মানুষ হতে অনুপ্রাণিত করে।"
            },
            {
                step: 19,
                title: "বিশেষ মুহূর্ত",
                image: "./images/19.jpg",
                story: "আমাদের বিশেষ মুহূর্তগুলো যখন ফিরে মনে করি, হৃদয় ভালোবাসায় পূর্ণ হয়ে ওঠে। প্রতিটি স্মৃতি একটি রত্ন যা আমার জীবনকে সমৃদ্ধ করেছে।"
            },
            {
                step: 20,
                title: "আত্মসমর্পণ",
                image: "./images/20.jpg",
                story: "তোমার কাছে নিজেকে সম্পূর্ণভাবে সমর্পণ করা আমার জীবনের সেরা সিদ্ধান্ত। এখন আমার শুধুমাত্র এক লক্ষ্য - তোমাকে সুখী রাখা চিরকাল।"
            },
            {
                step: 21,
                title: "যত্নের ছোঁয়া",
                image: "./images/21.jpg",
                story: "আমার ছোট ছোট বিষয়গুলো তুমি যেভাবে খেয়াল রাখো, তাতে আমি মুগ্ধ। তোমার এই নিখাদ যত্ন আমাকে প্রতিদিন নতুন করে তোমার প্রেমে ফেলে।"
            },
            {
                step: 22,
                title: "তোমার জন্য এই দিন",
                image: "./images/22.jpg",
                story: "আজ তোমার জন্মদিন, আজ তোমার দিন, আজ আমি সারা পৃথিবীকে ঘোষণা করতে চাই যে তুমি আমার সবকিছু। তোমার প্রতিটি হাসি, প্রতিটি চোখের দৃষ্টি আমার জীবনের অর্থ। জন্মদিন শুভেচ্ছা, আমার বউ।"
            },
            {
                step: 23,
                isFinal: true
            }
        ];

        const specialLetterText = `
১৪/০৭/২০২৬
শুভ জন্মদিন!
আজকের এই দিনটা শুধু তোমার জন্যই বিশেষ নয়, আমার কাছেও এটি পৃথিবীর সবচেয়ে আনন্দের দিন। কারণ আজকের এই দিনটিতেই পৃথিবীতে এসেছিল সেই মানুষটি, যে একদিন আমার পুরো পৃথিবী হয়ে উঠবে। তুমি আমার জীবনে আসার পর থেকে আমার বেঁচে থাকার অর্থটাই যেন পাল্টে গেছে। তুমি শুধু আমার স্ত্রী নও; তুমি আমার বেচে থাকার, আমার অনুপ্রেরণা এবং আমার জীবনের সবচেয়ে বড় প্রাপ্তি।
তোমাকে হয়তো সবসময় বলা হয়ে ওঠে না, কিন্তু তুমি যখন হাসো, তখন আমার কাছে মনে হয় পৃথিবীর সব ক্লান্তি নিমেষেই দূর হয়ে গেল। তোমার ওই মায়াবী চোখের দিকে তাকালে আমি আজও ঠিক আগের মতোই হারিয়ে যাই। তোমার ছোট ছোট যত্ন, তোমার অভিমান, আর তোমার ভালোবাসা সবকিছু মিলিয়ে তুমি আমার জীবনটাকে একটা সুন্দর রূপকথার মতো সাজিয়ে দিয়েছো।

দেখতে দেখতে জীবনের আরও একটি সুন্দর বছর পার করে আজ তুমি ২৩ বছরে পা রাখলে। তোমার এই বিশেষ দিনে আমার একটাই প্রার্থনা তোমার ঠোঁটের এই মিষ্টি হাসিটা যেন কোনোদিন ম্লান না হয়। জীবনের যত আনন্দ, যত সুখ, তার সবটুকু যেন তোমার প্রাপ্য হয়।
জীবনের এই দীর্ঘ পথে আমি সবসময় তোমার হাতটা এভাবেই শক্ত করে ধরে রাখতে চাই। পরিস্থিতি যেমনই হোক, আলো কিংবা অন্ধকার আমি কথা দিচ্ছি, সবসময় তোমার ছায়া হয়ে তোমার পাশে থাকবো। তোমার প্রতিটি স্বপ্নে আমি তোমার সাহস হবো, আর তোমার প্রতিটি মন খারাপে আমি তোমার আশ্রয় হবো।

তোমার এই নতুন বছরটা ভরে উঠুক অনাবিল আনন্দ, সুস্বাস্থ্য আর সফলতায়। তোমার জীবনের প্রতিটি দিন হোক স্বপ্নের মতো সুন্দর। এভাবেই সারা জীবন আমার হয়ে থেকো, কারণ তোমাকে ছাড়া আমার আমি বড়ই অসম্পূর্ণ।

এই দিনে তোমার কাছে একটা জিনিস শুধু চাই আমি তোমার কাছে যেই সুখ টা চেয়েছি সেটা 
শুভ জন্মদিন, মাইমুনা ! অনেক অনেক ভালোবাসা আর দোয়া ।
ইতি, তোমারই কাপুরুষ
`;

        let currentStepIndex = 0;
        const cardWrapper = document.getElementById("card-wrapper");
        const progressBar = document.getElementById("main-progress-bar");
        const stepCounter = document.getElementById("step-counter");

        function renderStep(index) {
            const data = stepsData[index];
            const totalSteps = stepsData.length;
            const progressPercent = ((data.step / totalSteps) * 100).toFixed(2);
            
            progressBar.style.width = `${progressPercent}%`;
            const formattedStep = data.step < 10 ? '0' + data.step : data.step;
            stepCounter.innerText = `${formattedStep} / ${totalSteps}`;

            // Check if this is the final 23rd step
            if (data.isFinal) {
                cardWrapper.style.opacity = 0;
                
                setTimeout(() => {
                    // Render the letter behind the modal
                    cardWrapper.innerHTML = `
                        <div class="card game-card" style="max-width: 850px;">
                            <h2 class="romantic-heading text-center mb-5"><i class="fa-solid fa-envelope-open-text me-3"></i> A letter for you</h2>
                            <div class="love-letter">
                                ${specialLetterText}
                            </div>
                        </div>
                    `;
                    cardWrapper.style.opacity = 1;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    
                    // Immediately trigger the Birthday pop-up
                    triggerGrandFinale();
                }, 300);
                return;
            }

            // Normal Steps Rendering
            let imageHTML = `
                <div class="step-img-container">
                    <div class="img-placeholder-text">
                        <i class="fa-solid fa-image mb-3" style="font-size: 2.5rem; opacity: 0.5;"></i><br>
                        [এখানে স্মৃতির ছবিটি যুক্ত করো]
                    </div>
                </div>
            `;
            if (data.image) {
                imageHTML = `<div class="step-img-container"><img src="${data.image}" class="step-img"></div>`;
            }

            cardWrapper.style.opacity = 0;
            
            setTimeout(() => {
                cardWrapper.innerHTML = `
                    <div class="card game-card">
                        <h2 class="romantic-heading text-center mb-4">${data.title}</h2>
                        ${imageHTML}
                        <p class="text-center mb-4 story-text">${data.story}</p>
                        
                        <button type="button" class="btn-premium" onclick="handleStepSuccess()">
                            Next Story <i class="fa-solid fa-arrow-right ms-2"></i>
                        </button>
                    </div>
                `;
                cardWrapper.style.opacity = 1;
            }, 300);
        }

        function handleStepSuccess() {
            if (currentStepIndex < stepsData.length - 1) {
                currentStepIndex++;
                renderStep(currentStepIndex);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function triggerGrandFinale() {
            // Background Confetti effect with purple shades
            const duration = 5 * 1000;
            const animationEnd = Date.now() + duration;

            const interval = setInterval(function() {
                const timeLeft = animationEnd - Date.now();
                if (timeLeft <= 0) return clearInterval(interval);
                
                confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#7e22ce', '#a855f7', '#d8b4fe'] });
                confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#7e22ce', '#a855f7', '#d8b4fe'] });
            }, 150);

            // Show Birthday Modal
            const birthdayModal = new bootstrap.Modal(document.getElementById('birthdayModal'));
            birthdayModal.show();

            // When Modal is closed, drop a final burst of confetti over the letter
            document.getElementById('btn-close-modal').addEventListener('click', function() {
                setTimeout(() => {
                    confetti({ particleCount: 150, spread: 100, origin: { y: 0.1 }, colors: ['#7e22ce', '#a855f7'] });
                }, 300);
            }, { once: true });
        }

        window.onload = function() {
            renderStep(currentStepIndex);
        };
