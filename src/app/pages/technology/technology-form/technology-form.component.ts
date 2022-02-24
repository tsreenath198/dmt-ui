import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html',
  styleUrls: ['./technology-form.component.css']
})
export class TechnologyFormComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private router: Router, private toastr:NotificationService) {
  }
  public technologyForm: FormGroup
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.technologyForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      id: [''],
    });
  }
  createForm() {
    console.log(this.technologyForm.value);
    this.toastr.showSuccess("Submitted Successfully !!", "")
  }
  navigateToParent() {
    this.router.navigate(['/dmt/technology']);
  }
}
