const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《算法之美》',
                date: '2010-10',
                price: 100.00,
                count: 1
            },
            {
                id: 3,
                name: '《乌龙院》',
                date: '2013-10',
                price: 5.00,
                count: 1
            },
        ]
    },
    methods: {
        add(index) {
            this.books[index].count ++
        },
        minus(index) {
            this.books[index].count --
        },
        remove(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            let total = 0
            /* this.books.forEach(item => {
                total += item.price * item.count
            }) */

            // for (let i in/of this.books) in-i为index of-i为item
            for (let item of this.books) {
                total += item.price * item.count
            }

            return total
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})

// ------------------------------------------------------------------
const nums = [10, 20, 111, 222, 444, 40 , 50]

// // 1.取出所有小于100的数字
// let newNums = []
// for (let n of nums) {
//     if (n < 100) {
//         newNums.push(n)
//     }
// }

// // 2.将所有小于100的数字进行转换：全部 * 2
// let new2Nums = []
// for (let n of newNums) {
//     new2Nums.push(n * 2)
// }
// console.log(new2Nums)

// // 3.需求：将所有new2Nums数字相加，得到最终的结果
// let total = 0
// for (let n of new2Nums) {
//     total += n
// }
// console.log(total)

// 以上为基本的解决方法，下面我们通过JavaScript的高阶函数来解决该问题(filter/map/reduce)

let result = nums
.filter((n) => {
    return n < 100
})
.map((n) => {
    return n * 2
})
.reduce((preValue, n) => {
    return preValue + n
}, 0)

console.log(result);