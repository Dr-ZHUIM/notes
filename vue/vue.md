# Vue.JS

## v-if 与 v-show

### 原理：  
v-show ： 修改DOM节点的display属性为none或者原值，以此控制DOM节点的显示。可以获取到节点   
v-if : 直接添加或者删除DOM节点，以此控制DOM节点的存在。节点在被移除时，无法隐藏   

### 使用场景

切换频率高： 使用v-show来节省性能

有多逻辑判断时： 使用v-if v-else-if来控制逻辑

*使用template时*： 使用v-if

> template用于在不添加节点的情况下，控制逻辑
```
    <template v-if="isShow">
        <div>show</div>
    </template>
```

## vue2 监视数据变化的原理
