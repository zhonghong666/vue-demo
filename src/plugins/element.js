/**
 * UI组件, 统一使用饿了么
 *
 * 使用:
 *  1. 项目中需要的组件进行释放(解开注释)
 *
 * 注意:
 *  1. 打包只会包含释放(解开注释)的组件, 减少打包文件大小
 */
import Vue from 'vue'
import {
  // Dialog,
  // Autocomplete,
  // Menu,
  // Submenu,
  // MenuItem,
  // MenuItemGroup,
  // Input,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Checkbox,
  // CheckboxGroup,
  // Select,
  // Option,
  Button,
  // Table,
  // TableColumn,
  // DatePicker,
  // Breadcrumb,
  // BreadcrumbItem,
  // Form,
  // FormItem,
  // Tree,
  // Icon,
  Row,
  // Col,
  // Upload,
  // Card,
  // Container,
  // Header,
  // Aside,
  // Main,
  // Loading,
  // Pagination,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,
  // InputNumber,
  // CheckboxButton,
  // Switch,
  // OptionGroup,
  // ButtonGroup,
  // TimeSelect,
  // TimePicker,
  // Popover,
  // Tooltip,
  // Tabs,
  // TabPane,
  // Tag,
  // Alert,
  // Slider,
  // Progress,
  // Badge,
  // Rate,
  // Steps,
  // Step,
  // Carousel,
  // CarouselItem,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  // Footer,
  // MessageBox,
  Message,
  // Notification
} from 'element-ui';

// Vue.use(Dialog);
// Vue.use(Autocomplete);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Input);
// Vue.use(Radio);
// Vue.use(RadioGroup);
// Vue.use(RadioButton);
// Vue.use(Checkbox);
// Vue.use(CheckboxGroup);
// Vue.use(Select);
// Vue.use(Option);
Vue.use(Button);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(DatePicker);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Tree);
// Vue.use(Icon);
Vue.use(Row);
// Vue.use(Col);
// Vue.use(Upload);
// Vue.use(Card);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Loading.directive);
// Vue.use(Pagination);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(InputNumber);
// Vue.use(CheckboxButton);
// Vue.use(Switch);
// Vue.use(OptionGroup);
// Vue.use(ButtonGroup);
// Vue.use(TimeSelect);
// Vue.use(TimePicker);
// Vue.use(Popover);
// Vue.use(Tooltip);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Tag);
// Vue.use(Alert);
// Vue.use(Slider);
// Vue.use(Progress);
// Vue.use(Badge);
// Vue.use(Rate);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(Carousel);
// Vue.use(CarouselItem);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Cascader);
// Vue.use(ColorPicker);
// Vue.use(Transfer);
// Vue.use(Footer);


// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notifys = Notification;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

Vue.prototype.$ELEMENT = {
  size: 'medium', // 组件大小
};
