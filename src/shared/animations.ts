import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const slideIn = trigger('slideIn', [
    state('*', style({ transform: 'translateX(100%)' })),
    state('in', style({ transform: 'translateX(0)' })),
    state('out',   style({ transform: 'translateX(100%)' })),
    transition('* => in', animate('600ms ease-in')),
    transition('in => out', animate('600ms ease-in'))
]);

export const flyInOut = trigger('flyInOut', [
    state('in', style({ transform: 'translate3d(0, 0, 0)' })),
    state('out', style({ transform: 'translate3d(-150%, 0, 0)' })),
    transition('in => out', animate('200ms ease-in')),
    transition('out => in', animate('200ms ease-out'))
]);

export const fade = trigger('fade', [
    state('visible', style({ opacity: 1 })),
    state('invisible', style({ opacity: 0.1 })),
    transition('visible <=> invisible', animate('2000ms linear'))
]);

export const grow = trigger('grow', [
    state('small', style({ transform: 'scale(1)'})),
    state('large', style({ transform: 'scale(1.4)'})),
    transition('small <=> large', animate('200ms linear'))
])