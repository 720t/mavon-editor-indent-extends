# mavon-editor-indent-extends

mavon-editor 编辑器 多行缩进组件

- 组件位于 src/components/MarkEditor
- 实现原理是 继承并重写了 mavon-editor 的 insertTab、unInsertTab 两个 methods
- tab 事件增加或减少缩进后都要重新计算 selection，实现代码可能比较冗余，若有更好的实现，欢迎 fork
- 该组件功能比较简单，所以未发布到 npm 做为独立组件

## 使用

- 选择一行或者多行，按 tab 键增加缩进
- 选择一行或者多行，按 shift+tab 键减少缩进

## [演示地址](https://720t.github.io/mavon-editor-indent-extends/)

## 克隆项目

```bash
git clone https://github.com/720t/mavon-editor-indent-extends.git
```

## 启动服务

```
npm run dev
yarn dev
```

浏览器访问 [http://127.0.0.1:9528](http://127.0.0.1:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview
yarn preview

# 预览发布环境效果 + 静态资源分析
npm run preview:report
yarn preview:report

# 代码格式检查
npm run lint
yarn lint

# 代码格式检查并自动修复
npm run lint:fix
yarn lint:fix
```

## 预览图

![预览](https://github.com/720t/mavon-editor-indent-extends/blob/master/public/preview.png?raw=true)
