class Jumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="hero">
        <div class="layer"></div>
        <div class="hero__inner">
            <h1 class="hero__title">List Of The Best Restaurants In Our Country</h1>
            <p class="hero__tagline">
            This Restaurant Provides Good Food and Comfortable Place
            </p>
        </div>
        </div>
        `;
    }
}

customElements.define('jumbotron-section', Jumbotron);