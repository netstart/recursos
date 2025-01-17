import {
  css,
  prop,
  html,
  event,
  listen,
  Emitter,
  CustomElement,
} from '@devpr/common-web'

import './header.element.scss'

type EventAsTarget<T = HTMLElement, E = Event> = E & { target: T }

@CustomElement('devpr-header')
export class Header extends HTMLElement {
  static observedAttributes = ['text']

  @event() onClick: Emitter<string>

  @listen('a', 'click')
  onClicked(event: EventAsTarget) {
    event.preventDefault()
    const { target } = event
    this.onClick.emit(target.dataset.href)
  }

  @prop()
  public text = ''

  styles = css``

  get template() {
    return html`
      <a slot="link" href="#" data-href="#mx" class="logo" role="link">
        ${this.text}
      </a>

      <svg
        slot="logo"
        width="80"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
      >
        <path
          d="M132.5 290.8L9.2 167.5c-9.6-9.6-9.6-25.4 0-35L132.5 9.2c9.6-9.6 25.4-9.6 35 0l123.3 123.3c9.6 9.6 9.6 25.4 0 35L167.5 290.8c-2.4 2.4-5.2 4.2-8.1 5.4l-18.5.1c-3.1-1.2-6-3.1-8.4-5.5z"
          fill="#15a04b"
        />
        <path
          d="M232.6 98.9c-8.1 0-14.8 6.7-14.8 14.8 0 6.5 4.3 12.3 10.4 14.2v27.5c0 15.6-9.8 24.2-31.8 27.7-3-5.8-9.3-9.5-19.2-11h-.1c-7.8-1-13.7-3.3-18-6.8V158c4.2-3.7 10.1-6 18.2-7h.1c13.9-2.1 21-8.7 21-19.4v-16.1c6.4-1.6 11.3-7.4 11.3-14.4 0-8.2-6.7-14.9-14.8-14.9s-14.8 6.7-14.8 15c0 7.1 5.1 13.1 11.7 14.5v16c0 7.4-4.6 11.2-15.4 12.9-7 .8-12.7 2.6-17.2 5.4v-48.6c5.4-3.2 9-9 9-15.6 0-10-8.1-18.2-18.2-18.2-10 0-18.2 8.1-18.2 18.2 0 6.7 3.6 12.5 9 15.6v41.5c-4.1-2-9-3.4-14.8-4.1-13.5-2-15.2-7.8-15.2-12.7v-11.3c6.5-1.5 11.5-7.4 11.5-14.5 0-8.1-6.7-14.8-14.8-14.8s-14.8 6.6-14.8 14.7c0 7.1 5 12.9 11.5 14.5V126c0 10.7 7 17.2 20.9 19.2 6.7 1 11.8 2.5 15.7 5.2v23.3c-9.3-5.9-21-9.8-35.6-11.6-22.5-3.4-32.5-11.9-32.5-27.8V128c5.9-2 10.1-7.5 10.1-14.1 0-8.1-6.7-14.8-14.8-14.8s-14.8 6.7-14.8 14.8c0 6.5 4.2 12.1 10.1 14.1v6.3c0 11.6 4.3 20.7 12.9 27 6.5 4.9 15.6 8.1 27.7 9.9h.1c16.2 2.1 28.2 6.7 36.9 13.9v111.2c5.9 2.3 12.6 2.2 18.5-.1v-49.7c4.2-3.6 10-5.8 18-6.8h.1c13.9-2.1 21-8.7 21-19.4v-2.4c4.3-1.4 7.5-5.5 7.5-10.2s-3.2-8.9-7.5-10.2v-5.2c11.4-1.9 20.1-5.1 26.4-9.8 8.6-6.3 12.9-15.4 12.9-27v-27.6c5.4-2.1 9.5-7.6 9.5-14.1 0-3.9-1.5-7.6-4.2-10.5-2.8-2.8-6.5-4.4-10.5-4.4zm-47.2 2.3c0-5.2 4.2-9.4 9.3-9.4 5.2 0 9.3 4.2 9.3 9.4s-4.2 9.3-9.3 9.3c-5 0-9.3-4.3-9.3-9.3zm-78.1 8.3c-5.1 0-9.3-4.2-9.3-9.3 0-5.2 4.2-9.3 9.3-9.3s9.3 4.2 9.3 9.3c0 5.1-4.3 9.3-9.3 9.3zM67.8 123c-5.1 0-9.3-4.1-9.3-9.3 0-5.2 4.2-9.3 9.3-9.3s9.3 4.2 9.3 9.3c0 5.1-4.3 9.3-9.3 9.3zm82-24.7c-7 0-12.7-5.7-12.7-12.7 0-7.1 5.7-12.8 12.7-12.8s12.7 5.7 12.7 12.7c0 7-5.7 12.8-12.7 12.8zm9.2 75c4.6 2.6 10.2 4.4 17.1 5.3 6.4 1 10.7 2.7 13 5.6-12 2.2-22.1 5.9-30.1 11.2v-22.1zm32.6 24.2c-4.3 1.4-7.5 5.5-7.5 10.2 0 4.9 3.2 8.9 7.5 10.2v2.4c-.1 7.4-4.6 11.2-15.4 12.9-6.9.8-12.5 2.6-17 5.3v-31.4c7.8-6.9 18.4-11.4 32.4-13.8v4.2zm41-74.4c-5.2 0-9.3-4.2-9.3-9.3s4.2-9.3 9.3-9.3c2.5 0 4.9 1 6.7 2.7 1.8 1.8 2.6 4.1 2.6 6.5 0 5.2-4.2 9.4-9.3 9.4z"
          fill="#fff"
        />
      </svg>

      <input slot="menu-btn" type="checkbox" id="menu-btn" />
      <label slot="menu-btn" class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>

      <ul slot="menu" part="menu" class="menu">
        <li><a href="#" data-href="#apps">Apps</a></li>
        <li><a href="#" data-href="#apoio">Apoio</a></li>
        <li><a href="#" data-href="#espaco">Espaço</a></li>
        <li><a href="#" data-href="#membro">Membro</a></li>
      </ul>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'devpr-header': Header
  }
  interface HTMLElementEventMap {
    onClick: CustomEvent<string>
  }
}
