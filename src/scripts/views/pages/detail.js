import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodbsource';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <div id="resto" class="resto">Detail Resto</div>
        <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await TheRestoDbSource.detailResto(url.id);
        const restoContainer = document.querySelector('#resto');
        restoContainer.innerHTML = createRestoDetailTemplate(resto);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: resto.id,
                name: resto.name,
                description: resto.description,
                city: resto.city,
                address: resto.address,
                pictureId: resto.pictureId,
                rating: resto.rating,
            },
        });
    },
};

export default Detail;