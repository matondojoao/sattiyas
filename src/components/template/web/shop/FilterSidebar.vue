<template>
    <div class="cs_filter_sidebar_in">
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Categorias <span></span>
            </h3>
            <ul class="cs_filter_category cs_mp0">
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>Women (20)</label>
                    </div>
                    <ul>
                        <li>
                            <div class="cs_custom_check">
                                <input type="checkbox" />
                                <label>Dresses (5)</label>
                            </div>
                        </li>
                        <li>
                            <div class="cs_custom_check">
                                <input type="checkbox" />
                                <label>Tops (7)</label>
                            </div>
                        </li>
                        <li>
                            <div class="cs_custom_check">
                                <input type="checkbox" />
                                <label>Jeans (8)</label>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>Men (25)</label>
                    </div>
                    <ul>
                        <li>
                            <div class="cs_custom_check">
                                <input type="checkbox" />
                                <label>T - Shirt (5)</label>
                            </div>
                        </li>
                        <li>
                            <div class="cs_custom_check">
                                <input type="checkbox" />
                                <label>Jeans (7)</label>
                            </div>
                        </li>
                        <li>
                            <div class="cs_custom_check">
                                <input type="checkbox" />
                                <label>Suits (8)</label>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>Children (25)</label>
                    </div>
                    <ul>
                        <li>
                            <div class="cs_custom_check">
                                <input type="checkbox" />
                                <label>Shirts (5)</label>
                            </div>
                        </li>
                        <li>
                            <div class="cs_custom_check">
                                <input type="checkbox" />
                                <label>Pants (7)</label>
                            </div>
                        </li>
                        <li>
                            <div class="cs_custom_check">
                                <input type="checkbox" />
                                <label>Jeans (8)</label>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- .cs_filter_widget -->
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Preço <span></span>
            </h3>
            <div class="cs_range_slider_wrap">
                <div id="slider_range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                    <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                </div>
                <div class="cs_amount_wrap">
                    <input type="text" id="amount" readonly />
                </div>
            </div>
        </div>
        <!-- .cs_filter_widget -->
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Cor <span></span>
            </h3>
            <ul class="cs_color_filter_list cs_mp0">
                <li>
                    <div class="cs_color_filter">
                        <input type="radio" name="color" />
                        <span class="cs_color_filter_circle cs_accent_bg"></span>
                        <span class="cs_color_text">Red</span>
                    </div>
                </li>
                <li>
                    <div class="cs_color_filter">
                        <input type="radio" name="color" />
                        <span class="cs_color_filter_circle cs_secondary_bg"></span>
                        <span class="cs_color_text">Gray</span>
                    </div>
                </li>
                <li>
                    <div class="cs_color_filter">
                        <input type="radio" name="color" />
                        <span class="cs_color_filter_circle cs_primary_bg"></span>
                        <span class="cs_color_text">Black</span>
                    </div>
                </li>
                <li>
                    <div class="cs_color_filter">
                        <input type="radio" name="color" />
                        <span class="cs_color_filter_circle cs_white_bg"></span>
                        <span class="cs_color_text">White</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Tamanho <span></span>
            </h3>
            <ul class="cs_size_filter_list cs_mp0">
                <li>
                    <input type="radio" name="size" />
                    <span>S</span>
                </li>
                <li>
                    <input type="radio" name="size" />
                    <span>M</span>
                </li>
                <li>
                    <input type="radio" name="size" />
                    <span>L</span>
                </li>
                <li>
                    <input type="radio" name="size" />
                    <span>XL</span>
                </li>
            </ul>
        </div>
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Marca <span></span>
            </h3>
            <ul class="cs_brand_filter_list cs_mp0">
                <li>
                    <input type="radio" name="brand" />
                    <span>Flora</span>
                </li>
                <li>
                    <input type="radio" name="brand" />
                    <span>Fashione</span>
                </li>
                <li>
                    <input type="radio" name="brand" />
                    <span>Zara</span>
                </li>
                <li>
                    <input type="radio" name="brand" />
                    <span>Burino</span>
                </li>
                <li>
                    <input type="radio" name="brand" />
                    <span>Celvine</span>
                </li>
                <li>
                    <input type="radio" name="brand" />
                    <span>Denima</span>
                </li>
                <li>
                    <input type="radio" name="brand" />
                    <span>Yooze</span>
                </li>
                <li>
                    <input type="radio" name="brand" />
                    <span>Wisete</span>
                </li>
            </ul>
        </div>
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Avaliação dos Clientes <span></span>
            </h3>
            <ul class="cs_review_filter cs_mp0">
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>
                            <span class="cs_rating_container">
                                <span class="cs_rating cs_size_sm" data-rating="5">
                                    <span class="cs_rating_percentage"></span>
                                </span>
                            </span>
                            <span>5</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>
                            <span class="cs_rating_container">
                                <span class="cs_rating cs_size_sm" data-rating="4">
                                    <span class="cs_rating_percentage"></span>
                                </span>
                            </span>
                            <span>4 & Up</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>
                            <span class="cs_rating_container">
                                <span class="cs_rating cs_size_sm" data-rating="3">
                                    <span class="cs_rating_percentage"></span>
                                </span>
                            </span>
                            <span>3 & Up</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>
                            <span class="cs_rating_container">
                                <span class="cs_rating cs_size_sm" data-rating="2">
                                    <span class="cs_rating_percentage"></span>
                                </span>
                            </span>
                            <span>2 & Up</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>
                            <span class="cs_rating_container">
                                <span class="cs_rating cs_size_sm" data-rating="1">
                                    <span class="cs_rating_percentage"></span>
                                </span>
                            </span>
                            <span>1 & Up</span>
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>