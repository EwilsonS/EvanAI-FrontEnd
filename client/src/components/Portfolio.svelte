<script>
  import { loadPortfolio } from "../portfolio";
  import { onMount } from "svelte";

  onMount(() => loadPortfolio());
</script>

<svelte:head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
		integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
		integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
	</script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
		integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
	</script>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"
		integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
		integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
	<title>E. Wilson</title>
</svelte:head>

<div id="portfolio">
	<div class="side-nav text-center">
		<a class="scroll" href="#topbar">
			<i class="fas fa-home side-icon other-side-icons"></i>
		</a>
		<br>
		<a class="scroll" href="#works-section">
			<i class="fas fa-angle-double-down side-icon other-side-icons"></i>
		</a>
		<br>
		<a class="scroll" href="#about-section">
			<i class="fas fa-user-circle side-icon other-side-icons"></i>
		</a>
		<br>
		<a class="scroll" href="#blog-section">
			<i class="fab fa-blogger-b side-icon other-side-icons"></i>
		</a>
		<br>
		<a class="scroll" href="#contact-section">
			<i class="fas fa-mobile-alt side-icon other-side-icons"></i>
		</a>
		<br>
	</div>

	<div class="header">
		<div class="topbar container" id="topbar">
			<span class="name">Evan</span><span class="h1 text-danger">Wilson</span><br>
			<div class="hurry-section text-light" id="top-links"><a class="text-white"
					href="https://docs.google.com/document/d/1Eg_ifzeNwckr5XSWvt2z_My1dxFPNo_dVQAJTt-DLjw/edit?usp=sharing"
					target="_blank" rel="noopener">Resume </a><span class="text-danger">|</span> <a class="text-white"
					href="https://github.com/EwilsonS" target="_blank" rel="noopener">Github </a><span class="text-danger">|</span> <a
					class="text-white" href="https://www.linkedin.com/in/evanlovesyou" target="_blank" rel="noopener">LinkedIn
				</a></div>
		</div>

	</div>
	<div class="container main">
		<div class="row navigate">
			<div class="col-md-12 text-center">
				<p>
					<a class="navigate-button scroll" href="#works-section"><i
							class="fas fa-angle-double-down navigate-icon text-secondary"><br><span
								class="navigate-text">Work</span></i>
					</a>
					<a class="navigate-button scroll" href="#about-section"><i
							class="fas fa-user-circle navigate-icon text-secondary"><br><span class="navigate-text">About</span></i>
					</a>
					<a class="navigate-button scroll" href="#blog-section"><i
							class="fab fa-blogger-b navigate-icon text-secondary"><br><span class="navigate-text">Blog</span></i>
					</a>
					<a class="navigate-button scroll" href="#contact-section"><i
							class="fas fa-mobile-alt navigate-icon text-secondary"><br><span class="navigate-text">Contact</span></i>
					</a>
				</p>
			</div>
		</div>

		<!-- Work -->
		<h3 class="text-center" id="works-section">Samples</h3>

		<!-- EvanAI -->
		<div class="row works p-4 my-5">			
			<div class="col-sm-2">
				<div>
					<span class="fs-2 text-break">EvanAI</span>
					<p class="text-dark">
						My personalized AI chatbot
					</p>		
					<div class="my-2">
						<img src="./assets/images/icons8-python-96.png" alt="" width="30%">
						<img src="./assets/images/icons8-svelte-480.png" alt="" width="30%">
						<img src="./assets/images/icons8-chatgpt-96.png" alt="" width="30%">
					</div>			
					<br>
					<span class="mb-2">
						<img src="./assets/images/icons8-link-90.png" alt="" width="15%">								
						<a class="text-dark" href="/" rel="noopener">deployed site</a>
					</span>
					<br>
					<span class="mb-2">
						<img src="./assets/images/icons8-github-48.png" alt="" width="15%">	
						<a class="text-dark" href="https://github.com/EwilsonS/EvanAI-FrontEnd"	target="_blank" rel="noopener">github-frontend</a>
					</span>
					<br>
					<span class="mb-2">
						<img src="./assets/images/icons8-github-48.png" alt="" width="15%">	
						<a class="text-dark" href="https://github.com/EwilsonS/EvanAI" target="_blank" rel="noopener">github-backend</a>					
					</span>
				</div>
			</div>
			<div class="col-sm-5">
				<p>
					I wanted to become familiar with ChatGPT, as my work colleagues and I were making efforts to apply AI for the bank. It only seemed right to build a personal project that demonstrates my newfound knowledge.
				</p>
				<p>					
					This custom Python application is pretty simple. It uses a FastAPI server and local storage for 'persistence,' keeping it straightforward. The OpenAI API is straightforward and customizable. I'm using the GPT-3.5-turbo model.
				</p>
				<p>	
					On the front end, I went with Svelte, which is definitely off the beaten path. I also added Google Analytics for fun. 
				</p>
			</div>
			<div class="col-sm-5">
				<img src="./assets/images/EvanAI2.png" alt="" width="100%">
			</div>					
		</div>
		
		<!-- Sound Stock -->
		<div class="row works p-4 my-5">			
			<div class="col-sm-2">
				<div>
					<p class="fs-2 text-break">SoundStock</p>
					<p class="text-dark">
						Crowdfunding meets shared publishing
					</p>		
					<div class="my-2">
						<img src="./assets/images/icons8-nodejs-96.png" alt="" width="30%">
						<img src="./assets/images/icons8-react-100.png" alt="" width="30%">
						<img src="./assets/images/icons8-mongodb-96.png" alt="" width="30%">
					</div>			
					<br>								
					<span class="mb-2">
						<img src="./assets/images/icons8-link-90.png" alt="" width="15%">								
						<a class="text-dark" href="https://sound-stock.herokuapp.com" rel="noopener">deployed site</a>
					</span>
					<br>
					<span class="mb-2">
						<img src="./assets/images/icons8-github-48.png" alt="" width="15%">	
						<a class="text-dark" href="https://github.com/EwilsonS/EvanSoundstock"	target="_blank" rel="noopener">github</a>
					</span>
				</div>
			</div>
			<div class="col-sm-5">
				<p>
					This is where my coding journey began. This idea was the fuel I need to get though endless hours of learning how to code and deploy applications.
				</p>
				<p>					
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum eaque facere omnis adipisci aliquam et voluptatibus? Ratione velit debitis quis distinctio doloribus, natus, dolorum nemo voluptates totam ab tempore amet deleniti illum harum nostrum, consectetur sed laudantium dolore. Ipsum veritatis veniam similique rerum ad. Necessitatibus aliquam facilis autem sit.
				</p>
			</div>
			<div class="col-sm-5">
				<img src="./assets/images/soundstock5.JPG" alt="" width="100%">
			</div>					
		</div>

		<!-- SharePost -->
		<div class="row works p-4 my-5">			
			<div class="col-sm-2">
				<div>
					<span class="fs-2 text-break">SharePosts</span>
					<p class="text-dark">
						Login and post messages for others to read
					</p>		
					<div class="my-2">
						<img src="./assets/images/icons8-php-96.png" alt="" width="30%">
						<img src="./assets/images/icons8-mysql-96.png" alt="" width="30%">
					</div>			
					<br>								
					<span class="mb-2">
						<img src="./assets/images/icons8-link-90.png" alt="" width="15%">								
						<a class="text-dark" href="https://share-posts.herokuapp.com" target="_blank" rel="noopener">deployed site</a>
					</span>
					<br>
					<span class="mb-2">
						<img src="./assets/images/icons8-github-48.png" alt="" width="15%">	
						<a class="text-dark" href="https://github.com/EwilsonS/Shareposts"	target="_blank" rel="noopener">github</a>
					</span>
				</div>
			</div>
			<div class="col-sm-5">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente explicabo ipsa quasi quisquam qui, porro ea architecto cupiditate maiores voluptas. Omnis officia beatae facere.
				</p>
				<p>					
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni mollitia cupiditate officia quo. Dolor ratione harum necessitatibus quidem odio inventore magni fugit, expedita maxime.
				</p>
			</div>
			<div class="col-sm-5">
				<img src="./assets/images/sharepost2.png" alt="" width="100%">
			</div>					
		</div>

		<!-- Stwitter -->
		<div class="row works p-4 my-5">			
			<div class="col-sm-2">
				<div>
					<span class="fs-2 text-break">Simple Twitter</span>
					<p class="text-dark">
						Collection of services used for a Twitter(X)-like application
					</p>		
					<div class="my-2">
						<img src="./assets/images/icons8-java-96.png" alt="" width="30%">
						<img src="./assets/images/icons8-mysql-96.png" alt="" width="30%">
					</div>
					<br>
					<span class="mb-2">
						<img src="./assets/images/icons8-github-48.png" alt="" width="15%">	
						<a class="text-dark" href="https://github.com/EwilsonS/Evan_Wilson_JavaS1/tree/master/EvanWilsonU2M2Summative"	target="_blank" rel="noopener">github</a>
					</span>
				</div>
			</div>
			<div class="col-sm-5">
				<p>
					I wanted to become familiar with ChatGPT. Since my work colleagues and I were making efforts to apply AI for the bank, It only seemed right to build a personal project that
					demonstrates  my new found knowledge. 
				</p>
				<p>					
					This custom Python application is pretty simple. It uses a FastAPI server and local storage for "persistence". I added Google analytics for fun, that was surprisingly
					easy.
				</p>
			</div>
			<div class="col-sm-5">
				<img src="./assets/images/stwitter.png" alt="" width="100%">
			</div>					
		</div>

		<!-- Endorsements -->
		<div class="row works-row">
			<div class="col-sm-12 text-center">
				<h3>Endorsements</h3>
				<br>
				<div class="card-group">
					<div class="card works mx-3 p-2 text-center rounded-0">
						<br>
						<div>
							<span class="big-quote float-left">&#8220; </span><small>Bank Of The West</small>
							<br>
								<p class="endorse m-0">
									Thanks for everything you do to make the ####### team a great team to be a part of.  Whether it's frequent collaboration, always supporting your teammates through helpful feedback, or regularly bringing new ideas and being receptive to others' ideas, it all contributes to making a great team atmosphere.
								</p>
						</div>
					</div>
					<div class="card works mx-3 p-2 text-center rounded-0">
						<br>
						<div>
							<span class="big-quote float-left">&#8220;</span><small>Bank Of The West</small>
							<br>
								<p class="endorse m-0">
									Thank you for your constant availability and collaboration. I really appreciate the lessons and your input.
								</p>
						</div>
					</div>					
					<div class="card works mx-3 p-2 text-center rounded-0">
						<br>
						<div>
							<span class="big-quote float-left">&#8220;</span><small>Bank Of The West</small>
							<br>
								<p class="endorse m-0">
									I love the way you respond to feedback! I learn so much about mental agility from you. Thank you!
								</p>
						</div>
					</div>
				</div>
				<br>		
				<div class="card-group">
					<div class="card works mx-3 p-2 text-center rounded-0">
						<br>
						<div>
							<span class="big-quote float-left">&#8220;</span> <small>Allstate</small>
							<br>
								<p class="endorse m-0">
									Thank you for taking the initiative to ensure we can run... This is another example of how you see a need and step in to solve it, even if the rest of us don't seem to quite see it yet. My development work already has benefitted from your initiative.
								</p>
						</div>
					</div>
					<div class="card works mx-3 p-2 text-center rounded-0">
						<br>
						<div>
							<span class="big-quote float-left">&#8220;</span> <small>Allstate</small>
							<br>
								<p class="endorse m-0">
									Evan has been a patient, encouraging, and friendly presence since day one, and it's been an absolute joy to work with him so far. He's always been more than willing to stop explain the things I don't quite understand, and his flexible way of thinking makes him both receptive to the suggestions and feedback of others as well as a valuable source of insight. Without him, I don't think I would have been able to adapt to my new work environment as well as I feel I have.
								</p>
						</div>
					</div>					
					<div class="card works mx-3 p-2 text-center rounded-0">
						<br>
						<div>
							<span class="big-quote float-left">&#8220;</span> <small>Allstate</small>
							<br>
								<p class="endorse m-0">
									Thanks for being a driving force in the success of ########! You've shown real grit in moving the product forwardeven when deadlines were tight, full-timers were few, and domain knowledge was overwhelming. Your obsession (in agood way) with learning and growing yourself and others is refreshing and just what the lab needs in our remote situation.
								</p>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- About -->
		<h3 class="text-center mb-5" id="about-section">Me</h3>
		<div class="row about-row mb-5">
			<div class="col-sm-4 skills">
				<p class="text-center about-text font-weight-bold">Skills</p>
				<p class="about-text text-center">			
					<img src="./assets/images/aws-certified-cloud-practitioner.png" alt="">	
					<img src="./assets/images/aws-certified-solutions-architect-associate.png" alt="">		
				</p>
				<div class="about-text">
					<p class="p-0">
						<strong>Back</strong><br>
						Java, Python, Node, JavaScript, Go
					</p>
					<p class="p-0">
						<strong>Front</strong><br>
						React, CSS, HTML
					</p>
					<p class="p-0">
						<strong>Databases</strong><br>
						SQL, NoSQL
					</p>
					<p class="p-0">
						<strong>Systems</strong><br>
						Terraform, Artifactory, Jenkins, GIT, Kafka, AWS
					</p>
				</div>
			</div>

			<div class="col-md-4 text-center">
				<img class="profile-pic mb-3" src="./assets/images/headshot.jpg" alt="">
				<p class="about-text mt-5">
					<strong>I'm not afraid to be wrong out
						loud.</strong> <br>Searching for the right
					answer is when we learn the most.
					Technology moves civilization
					forward and I refuse to be on the
					sidelines during these exciting
					times. I often think of the
					possibilities that come from
					innovation and I can't wait to make
					meaningful contributions to a team
					of foward thinking technology professionals.
				</p>
			</div>
			<div class="col-md-4 text-center">
				<p class="about-text ">
					<strong>Philosophy</strong>
					<p class="about-text my-5">
						<span class="font-weight-bold"> ALWAYS</span> do the right thing.
					</p>
					<p class="about-text my-5">
						Make your descisions <span class="font-weight-bold"> BEFORE</span> you <span class="font-weight-bold"> HAVE</span> to make them.
					</p>
					<p class="about-text my-5">
						Leave it <span class="font-weight-bold"> BETTER</span> than you found it.
					</p>
					<p class="about-text my-5">
						Continue to <span class="font-weight-bold"> GROW</span>.
					</p>
			</div>
		</div>

		<!-- Blog -->
		<div class="row blog-row" id="blog-section">
			<div class="col md-12">
				<div class="text-center"> <i class="fas fa-link text-secondary"></i><span class="h3"><a class="text-dark"
							href="https://evanwilsonthegreat.blogspot.com/" target="_blank" rel="noopener"> Blog Posts</a> </span><span
						class="text-secondary h6">(via Google API) displaying 4 of <span class="bcount"></span></span></div>
				<div class="card-columns blog-posts p-5">
				</div>
			</div>
		</div>
	
	</div>

	<!-- Contact -->
	<div class="row contact-row mx-0 px-0" id="contact-section">
		<div class="col-md-12 text-center">
			<p class="contact p-0 m-0">
				<span class="h6">Evan S. Wilson</span>
				<span class="text-danger"> | </span>
				<a class="dark-green h6" href="mailto:wilsonscottevan@gmail.com?Subject=I%20found%20your%20portfolio"
					target="_top">wilsonscottevan@gmail.com</a>
				<span class="text-danger"> | </span>
				<a class="h6 text-light" id=""
					href="https://docs.google.com/document/d/1Eg_ifzeNwckr5XSWvt2z_My1dxFPNo_dVQAJTt-DLjw/edit?usp=sharing"
					target="_blank" rel="noopener">
					Resume</a>
				<span class="text-danger"> | </span>
				<a href="https://www.linkedin.com/in/evanlovesyou" target="_blank" rel="noopener noreferrer"> <img
						src="./assets/images/LinkedIn-Logo-500x500.png" height="25px" alt=""></a>
			</p>
		</div>
	</div>

	<!-- mobile home buttom -->
	<a class="scroll zz" href="#topbar">
		<i class="fas fa-home home"></i>
	</a>

</div>

<style>
  #portfolio {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: rgb(243, 243, 243);
  background-repeat: no-repeat;
  height: 100%;
  margin: 0%;
  background-size: cover;
  background-attachment: fixed;
	overflow: hidden;
}

.header {
  background-color: #1f1f1f;
  height: 7rem;
  background-repeat: no-repeat;
  background-size: cover;
}

.name {
  color: rgb(15, 136, 126);
  font-size: 3rem;
  font-weight: bold;
}

.dark-green {
  color: rgb(15, 136, 126);
}

.side-nav {
  margin-top: 7rem;
  right: 0rem;
  position: fixed;
}

.side-nav > a:hover {
  text-decoration: none;
}

.side-icon {
  z-index: 1000;
  font-size: 1.75rem;
  color: rgba(90, 90, 90, 0.442);
  padding: 0.25rem;
  margin-bottom: 0.75rem;
  transition: 0.4s;
}

.side-icon:hover {
  color: rgb(7, 59, 55);
  transform: scale(1.5);
}

.zz {
  display: none;
  transition: 0.25s;
}

/* ====================== Navigate ================================= */
.navigate {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.navigate-text {
  color: rgb(15, 136, 126);
  font-size: 1.5rem;
  font-family: sans-serif;
  font-weight: 100;
  transition: 0.25s;
}

.navigate-text:hover {
  color: red;
}

.navigate-icon {
  font-size: 2rem;
}

.navigate-button {
  margin-left: 2.5rem;
  margin-right: 2.5rem;
}

.navigate-button:hover {
  text-decoration: none;
  color: red;
}

/* ============================ Works ============================ */
.works-row {
  margin-top: 5rem;
  margin-bottom: 7rem;
}

.works {
  outline:  rgba(15, 136, 126, 0.641) solid 2px;
  background-color: rgba(15, 136, 126, 0.068);
  font-size: 1rem;  
}

.endorse {
  font-weight: bold;
  color: rgb(15, 136, 126);
  font-size: 1rem;
}

.big-quote {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 0.5;
  font-size: 5em;
  color: rgba(15, 136, 126, 0.267);
}

/* ============================ Blog Posts =============================== */
.blog-row {
  margin-top: 7rem;
  margin-bottom: 7rem;
}

.blog-posts {
  background-color: rgba(15, 136, 126, 0.068);
  outline:  rgba(15, 136, 126, 0.641) solid 2px;
}

.card-columns {
  column-count: 2;
}

/* ================================ About ================================ */
.about-text {
  background-color: rgba(15, 136, 126, 0.068);
  color: rgb(7, 59, 55);
  font-size: 0.9rem;
  padding: 1rem;
  outline:  rgba(15, 136, 126, 0.641) solid 2px;
}

.profile-pic {
  height: 13rem;
  border-radius: 10%;
  border: 10px solid rgba(15, 136, 126, 0.068);
  outline:  rgba(15, 136, 126, 0.641) solid 2px;
}

/* ============================== Contact/Footer ============================= */
.contact-row {
  background-color: #1f1f1f;
  padding-bottom: 2rem;
  padding-top: 1rem;
  color: white;
}

/* ============================================================================================================================================= */
/* ===================================================== Media Queries ========================================================================= */
/* ============================================================================================================================================= */
@media (max-width: 992px) {
  .works {
    border: none;
    background-color: rgba(15, 136, 126, 0.068);
    font-size: 0.75rem;
  }
}

@media (max-width: 770px) {
  .card-group > .works {
    flex: 1 35%;
    margin-bottom: 2rem;
  }

  .navigate-button {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .card-columns {
    column-count: 1;
  }

  .skills {
    display: none;
  }
}

@media (max-width: 576px) {
  .navigate-button {
    margin-left: 0.7rem;
    margin-right: 0.7rem;
  }

  .navigate-icon {
    font-size: 1.5rem;
  }

  .navigate-text {
    font-size: 1rem;
  }

  .home {
    font-size: 1.5rem;
    position: fixed;
    bottom: 0rem;
    right: 0.25rem;
    z-index: 999999999999;
    color: rgba(90, 90, 90, 0.442);
    padding: 0.25rem;
    margin-bottom: 0.75rem;
    transition: 0.4s;
  }

  .zz {
    transition: 0.25s;
    display: block;
  }

  .other-side-icons {
    display: none;
  }
}

</style>