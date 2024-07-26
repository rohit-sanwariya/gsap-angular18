import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { GoBackButtonComponent } from "../../Components/go-back-button/go-back-button.component";
import {gsap} from 'gsap';
@Component({
  selector: 'app-gsap-to',
  standalone: true,
  imports: [GoBackButtonComponent],
  templateUrl: './gsap-to.component.html',
  styleUrl: './gsap-to.component.scss'
})
export class GsapToComponent implements AfterViewInit {
  gsapToList = signal<Array<{ease:gsap.EaseString,id:'blue-box'| 'blue-box-ease-back-out' | 'blue-box-ease-back-in'|'blue-box-ease-back-in-out'}>>([
    
    {
      ease:'back.in',id:'blue-box-ease-back-in'
    },
    {
      ease:'back.inOut',id:'blue-box-ease-back-in-out',
    },
    {
      ease:'back.out',id:'blue-box-ease-back-out'
    },
    {
      ease:'none',id:'blue-box'
    }
  ])
  ngAfterViewInit(): void {
    this.gsapToList().forEach((value)=>{
      const box = document.getElementById(value.id);
      gsap.to(box,{
        ...structuredClone(DEFAULT_CONFIG),ease:value.ease
         });  
    })
  
  }
   


}

const DEFAULT_CONFIG : gsap.TweenVars = {
  x:500,
  repeat:-1,
  duration:4,
  yoyo:true,
  delay:4,
}