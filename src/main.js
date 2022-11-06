import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {
    Button,
    Tabbar,
    TabbarItem,
    NavBar,Icon,
    Search,Swipe, 
    SwipeItem ,
    IndexBar, IndexAnchor,
    CellGroup,Cell,
    NoticeBar, ShareSheet ,
    Popup,Picker, Field,
    ActionBar, ActionBarIcon, ActionBarButton,
    Step, Steps ,TreeSelect, Rate, Uploader 
} from 'vant'
import 'vant/lib/index.css'
import '@/assets/iconfont/iconfont.css'

const app = createApp(App)
app.use(store);
app.use(router);
app.use(Icon)
app.use(Button);
app.use(NavBar)
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(Swipe);
app.use(SwipeItem);
app.use(IndexBar);
app.use(IndexAnchor);
app.use(CellGroup);
app.use(Cell);
app.use(NoticeBar);
app.use( ShareSheet );
app.use(Popup);
app.use(Picker );
app.use( Field);
app.use(ActionBar)
app.use(ActionBarIcon)
app.use(ActionBarButton)
app.use(Step)
app.use(Steps)
app.use(TreeSelect)
app.use( Rate)
app.use( Uploader )
app.use(ElementPlus)
app.mount('#app')
