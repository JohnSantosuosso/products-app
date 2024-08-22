import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {

  @Input() appPermission: string[] = [];
  private currentRole = 'agent';

  constructor() { }

}
