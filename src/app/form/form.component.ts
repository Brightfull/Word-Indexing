import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Text } from '../classe/text';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private formBuilder: FormBuilder) {}

  textForm = this.formBuilder.group({
    text: [null, Validators.required],
  });

  myText: Text = new Text();
  listWords: string[] = [];
  counter: number = 0;

  onSubmit(): void {
    this.listWords = this.myText.text.toLowerCase().split(/[\s,\-,\']+/);
    this.myText.words = this.listWords.length;
    this.myText.chars = this.myText.text.length
    console.log('Word lists :',this.listWords);
    console.log(this.myText);
    for (var i=0; i<this.myText.words; i++){
      if(this.listWords[i] == "ipsum"){
        this.counter += 1;
      }
    }
    console.log('le mot ipsum apparaît',this.counter,'fois');

  }

}
