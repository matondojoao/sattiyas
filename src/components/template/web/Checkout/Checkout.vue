<script setup>
import { useRouter, RouterLink } from "vue-router";
import { computed, onMounted } from "vue";
import { useShoppingCartStore } from '@/stores/cart';

const router = useRouter();

const placeOrder = () => {
    router.push('/sucesso');
};

const shoppingCartStore = useShoppingCartStore();

onMounted(async () => {
});

const items = computed(() => {
    return shoppingCartStore.getCartItems
});

const totalCart = computed(() => {
    return shoppingCartStore.getTotalCart
});

const card = ref({
    number:'',
    cvc:'',
    exp_month:'',
    exp_year:'',
})

</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-7">
                <p class="cs_checkout-alert m-0">Tem um cupom? <RouterLink :to="{ name: 'carrinho' }">Clique aqui para
                        inserir
                        o código</RouterLink>
                </p>
                <div class="cs_height_40 cs_height_lg_40"></div>
                <h2 class="cs_checkout-title cs_fs_28">Detalhes de Cobrança</h2>
                <div class="cs_height_45 cs_height_lg_40"></div>
                <div class="row">
                    <div class="col-lg-6">
                        <label class="cs_shop-label">Nome *</label>
                        <input type="text" class="cs_shop-input">
                        <div data-lastpass-icon-root="true"
                            style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <label class="cs_shop-label">Sobrenome *</label>
                        <input type="text" class="cs_shop-input">
                    </div>
                    <div class="col-lg-12">
                        <label class="cs_shop-label">Nome da Empresa (opcional)</label>
                        <input type="text" class="cs_shop-input">
                    </div>
                    <div class="col-lg-12">
                        <label class="cs_shop-label">País / Região *</label>
                        <select class="cs_shop-input">
                            <option value="Estados">Estados Unidos (EUA)</option>
                            <option value="Reino Unido">Reino Unido</option>
                            <option value="Canadá">Canadá</option>
                        </select>
                    </div>
                    <div class="col-lg-12">
                        <label class="cs_shop-label">Endereço *</label>
                        <input type="text" class="cs_shop-input" placeholder="Número da casa e nome da rua">
                        <input type="text" class="cs_shop-input" placeholder="Apartamento, suite, unidade, etc (opcional)">
                    </div>
                    <div class="col-lg-12">
                        <label class="cs_shop-label">Cidade *</label>
                        <input type="text" class="cs_shop-input">
                    </div>
                    <div class="col-lg-12">
                        <label class="cs_shop-label">Estado *</label>
                        <select class="cs_shop-input">
                            <option value="Califórnia">Califórnia</option>
                            <option value="Nova Jérsei">Nova Jérsei</option>
                            <option value="Daiking">Daiking</option>
                        </select>
                    </div>
                    <div class="col-lg-12">
                        <label class="cs_shop-label">CEP *</label>
                        <input type="text" class="cs_shop-input">
                    </div>
                    <div class="col-lg-12">
                        <label class="cs_shop-label">Telefone *</label>
                        <input type="text" class="cs_shop-input">
                    </div>
                    <div class="col-lg-12">
                        <label class="cs_shop-label">Endereço de E-mail *</label>
                        <input type="text" class="cs_shop-input">
                    </div>
                </div>
                <div class="cs_height_45 cs_height_lg_45"></div>
                <h2 class="cs_checkout-title">Informações Adicionais</h2>
                <div class="cs_height_25 cs_height_lg_25"></div>
                <label class="cs_shop-label">Notas do Pedido (opcional)</label>
                <textarea cols="30" rows="6" class="cs_shop-input"></textarea>
                <div class="cs_height_30 cs_height_lg_30"></div>
            </div>
            <div class="col-xl-5">
                <div class="cs_shop-side-spacing">
                    <div class="cs_shop-card">
                        <h2 class="cs_fs_21">Seu Pedido</h2>
                        <table>
                            <tbody>
                                <tr class="cs_semi_bold">
                                    <td>Produtos</td>
                                    <td class="text-end">Valor</td>
                                </tr>
                                <tr v-for="item in items" :key="item.product_id">
                                    <td>{{ item.product_name }} x {{ item.quantity }}</td>
                                    <td class="text-end">{{ $filters.formatCurrency(item.price) }}</td>
                                </tr>
                                <tr class="cs_semi_bold">
                                    <td>Subtotal</td>
                                    <td class="text-end">{{ $filters.formatCurrency(totalCart) }}</td>
                                </tr>
                                <tr class="cs_semi_bold">
                                    <td>Total</td>
                                    <td class="text-end">{{ $filters.formatCurrency(totalCart) }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="cs_height_30 cs_height_lg_30"></div>
                    </div>
                    <div class="cs_height_50 cs_height_lg_30"></div>
                    <div class="cs_shop-card">
                        <h2 class="cs_fs_21">Pagamento</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="form-check cs_fs_16">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                                checked="">
                                            <label class="form-check-label m-0 cs_semi_bold" for="flexCheckDefault">
                                                Pagar com Cartão de Crédito na Entrega
                                            </label>
                                        </div>
                                        <p class="m-0 cs_payment_text">Efetue o pagamento com cartão de crédito.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <form id="creditCardForm">
                                            <input type="text" id="cardHolderName" class="cs_checkout-input"
                                                name="cardHolderName" placeholder="Nome no Cartão" required>
                                            <input type="text" id="cardNumber" name="cardNumber" v-model="card.number" class="cs_checkout-input"
                                                placeholder="Número do Cartão" required>
                                                <input type="text" id="cvv" name="cvv" v-model="card.cvc" class="cs_checkout-input"
                                                    placeholder="CVV" required>
                                            <div style="display: flex; gap: 10px;">
                                                <input type="text" id="cvv" name="cvv" v-model="card.cvc" class="cs_checkout-input"
                                                    placeholder="mes" required>
                                                <input type="text" id="expiryDate" v-model="card.cvc" name="expiryDate"
                                                    class="cs_checkout-input" placeholder="ano" required>
                                            </div>
                                        </form>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                        <div class="cs_height_20 cs_height_lg_20"></div>
                        <p class="m-0 cs_payment_text">Seus dados pessoais serão usados para processar seu pedido, apoiar
                            sua
                            experiência neste site e para outros fins descritos em nossa <a href="">política de
                                privacidade</a>.</p>
                        <div class="cs_height_20 cs_height_lg_20"></div>
                        <button class="cs_btn cs_style_1 cs_fs_16 cs_medium w-100" @click="placeOrder">Pagar Agora</button>
                    </div>
                    <div class="cs_height_30 cs_height_lg_30"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="cs_height_90 cs_height_lg_50"></div>
    <hr>
</template>
