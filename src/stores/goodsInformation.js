import { defineStore } from 'pinia';
import { RouterLink, RouterView } from 'vue-router';


export const goodsInformation = defineStore
    ('good-information', {
        state: () => {
            return {
                goodsData: [],
                userBag: [],
                checkBag: [],
                totalQuantity: '',
                checkQuantity: 0,
                checkMoney: 0,
                userData:[
                    {
                        content:'姓名',
                        value:'',
                        type: 'text',
                    },
                    {
                        content:'電話',
                        value:'',
                        type: 'tel',
                    },
                    {
                        content:'地址',
                        value:'',
                        type: 'address'
                    },
                    {
                        content:'電子信箱',
                        value:'',
                        type: 'email',
                    },
                ],
                deliveryData: [
                    {
                        content:'付款方式',
                        value:'',
                        type:'radio',
                        planA: '信用卡',
                        planB: '貨到付款',
                    },
                    {
                        content:'運送方式',
                        value:'',
                        type:'radio',
                        planA: '宅配',
                        planB: '超商取貨',
                    },
                ],
            };
        },
        actions: {
            addData(data) {
                this.goodsData = data;
            },
            addShoppingCart(item) {
                const index = this.userBag.findIndex(user => user.id === item.id);
                if (index !== -1) {
                    this.userBag[index].quantity += item.quantity;
                } else {
                    const addGoods = item;
                    addGoods.check = false;
                    this.userBag.push({ ...addGoods });
                };
                this.calcTotalQuantity();
            },
            calcTotalQuantity() {
                this.totalQuantity = this.userBag.reduce((total, item) => {
                    return total + item.quantity;
                }, 0);
            },
            checkOut() {
                this.checkMoney = 0;
                this.checkQuantity = 0;
                this.checkBag = [];

                this.userBag.forEach(item => {
                    if (item.check) {
                        this.checkMoney += item.price * item.quantity;
                        this.checkQuantity += item.quantity;
                        this.checkBag.push(item);
                    }
                });
            },
            clearData(){
                this.userBag = [];
                this.checkBag = [];
                this.totalQuantity = '';
                this.checkQuantity = 0;
                this.checkMoney = 0;
            },
        },
    });