import { Component, ViewChild, ElementRef } from '@angular/core';
import { ParamsService } from '../../service/params.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild("work") workEl: ElementRef;
  @ViewChild("blurbContent") blurbContent: ElementRef;
  blurbIndex = 0;

  caseStudies = [
    {
      name: 'Desktop POS',
      description: 'Redesigning the application for employees in 1,100+ stores to provide customer & vehicle services.',
      caseUrl: 'desktop-pos',
      imgPath: 'Home/1 Desktop POS Card Image',
      fullWidth: false
    },
    {
      name: 'Mobile POS',
      description: 'Establishing a user research program by building prototypes to conduct usability testing.',
      caseUrl: 'mobile-pos',
      imgPath: 'Home/2 Mobile POS Card Image',
      fullWidth: false
    },
    {
      name: 'Design System',
      description: 'Building a component library to ensure UX/UI consistency across products and workstreams.',
      caseUrl: 'design-system',
      imgPath: 'Home/3 Design System Card Image',
      fullWidth: false
    },
  ]

  blurbs = [
    `<span>“Beyond her technical skills, Michelle’s proactive approach and initiative were truly standout qualities. She consistently took the lead on projects, identifying challenges and opportunities for improvement without needing explicit direction. Her resourcefulness and dedication were evident in every task she undertook, often exceeding expectations and delivering exceptional results. </span>
    <br>
    <br>
    <span>Michelle’s collaborative spirit was equally impressive. She excelled in team settings, contributing thoughtfully to discussions, sharing her expertise, and fostering a positive, supportive environment. Her ability to work effectively with cross-functional teams, developers, and stakeholders was key to ensuring smooth project workflows and successful outcomes.”</span>
    <br>
    <br>
    <span class="blurb-source">— Senior UX Designer and Design Lead, Client</span>`,

    `<span>“You're a fantastic teammate who communicates readily and consistently and has been a resource for me to come to with any questions, concerns, or last-minute working sessions.
      You're the only IBMer who has been able lead a primary work-stream for the client and Project Vision, transitioning smoothly into the responsibility. I'm constantly noting how you advocate for ideas and drive recommendations forward. Your experience from your prior work continues to be insightful in how we prepare and perform note-taking and analysis for user testing. You're always championing our team and have been there to help me to take on challenges and growth opportunities with the client and our work.”</span>
    <br>
    <br>
    <span class="blurb-source">— Associate UX Designer, IBM</span>`,

    `<span>“You have great leadership skills and it has consistently shown in the way you show up not only within our IBM team, but also in the way you present yourself around the client. You help direct the team vision, push designs to be the best they can be, and you are a very eloquent presenter. You are also a huge advocator for others in the team when we get positive feedback from the clients and other stakeholders. You have also helped me adapt and understand more of the WOM work flow which has allowed me to apply this knowledge on other work streams that I have been working on as well. All of these qualities help build the trust that is necessary in navigating such a large client project. I am learning so much from being able to work with you and I hope that I can continue to learn and design with you.”</span>
    <br>
    <br>
    <span class="blurb-source">— Associate UX Designer, IBM</span>`,

    `<span>“Your seamless transition into the WOM Design Lead position has not gone unnoticed, showcasing both your leadership skills and adaptability, and not to mention the trust our client had in you. I appreciate your meticulous attention to detail, ensuring that the services we provide to the client are of the highest quality. I value the way you consistently think one step ahead, anticipating challenges and proactively addressing them to ensure the success of our projects.”</span>
    <br>
    <br>
    <span class="blurb-source">— UX Product Analyst, IBM</span>`,

    `<span>“You are so welcoming and your transparency and friendliness has helped me make a personal connection at IBM! Since day one, you made it clear that you are open to any questions and available to help, and I really appreciate that you are always checking in and considering my experience on top of your own so that I can learn and get involved. And you always make sure I get credit regardless of the size of my involvement!”</span>
    <br>
    <br>
    <span class="blurb-source">— UX Design Summer Intern, IBM</span>`
  ];

  transitioning = false;

  constructor(private paramsService: ParamsService) {}

  ngAfterViewInit() {
    this.paramsService.getWorkObs().subscribe(() => {
      this.onWorkClick(null);
    })
  }

  onWorkClick(e): void {
    this.workEl.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  incrementBlurb(inc) {
    if(!this.transitioning){
      this.transitioning = true;
      const paddingOffset = window.innerWidth <= 600 ? 30 : 80;
      this.blurbIndex = (this.blurbIndex + inc + 5) % 5;
      const el = this.blurbContent.nativeElement;
      const oldHeight = el.offsetHeight - paddingOffset;
      const outerThis = this;

      el.addEventListener('webkitTransitionEnd', function handler() {
        el.removeEventListener('webkitTransitionEnd', handler);

        el.addEventListener('webkitTransitionEnd', function handler2() {
          el.removeEventListener('webkitTransitionEnd', handler2);
          el.classList.remove('blurb-hidden');
          el.style.height = '';
          outerThis.transitioning = false;
        })

        el.innerHTML = outerThis.blurbs[outerThis.blurbIndex];
        requestAnimationFrame(() => {
          const newHeight = el.scrollHeight - paddingOffset;
          el.style.height = (oldHeight === newHeight ? oldHeight - 0.001 : oldHeight) + 'px'; // if theyre equal, it wont actually transition, so force them unequal
          requestAnimationFrame(() => {
            el.style.height = newHeight + 'px';
          })

        })        
      })

      el.classList.add('blurb-hidden');
    }
  }
}
