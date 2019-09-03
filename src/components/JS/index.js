import Vue from "vue";
import MessageBox from './MessageBox';

export var messageBox = (function () {

    var defaults = { // 默认值
        title: '',
        con: '',
        cancel: '',
        ok: '',
        cancelDone: null,
        okDone: null
    }


    var MyComponent = Vue.extend(MessageBox);

    return function (opts) { // 配置参数
        for (var attr in opts) {
            defaults[attr] = opts[attr];
        }

        var vm = new MyComponent({
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                con: defaults.con,
                cancel: defaults.cancel,
                ok: defaults.ok,
            },
            methods: {
                cancelDone () {
                    defaults.cancelDone && defaults.cancelDone.call(this);
                    document.body.removeChild(vm.$el)
                },
                okDone () {
                    defaults.okDone && defaults.okDone.call(this);
                    document.body.removeChild(vm.$el)
                }
            }
        })

        document.body.appendChild(vm.$el)
    }

})()