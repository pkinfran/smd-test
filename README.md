# SMD Test · TapTap H5 手机验收站

此公开仓库只托管 `pkinfran/taptap_gpt` 私有源码所构建的 **静态 H5 产物**，不镜像私有源码。

## 线上地址
- 首页：https://pkinfran.github.io/smd-test/
- Visual Lab：https://pkinfran.github.io/smd-test/lab/
- S1-U08：https://pkinfran.github.io/smd-test/lab/S1-U08/
- S0-U03：https://pkinfran.github.io/smd-test/lab/S0-U03/

直接访问及刷新由真实的目录 `index.html` 支持，不能仅靠 GitHub Pages 的 404 回退。所有页面的资源路径使用 Vite `--base=/smd-test/` 构建。

## 自动从私有源仓库更新（一次性授权）
需要仓库管理员在 **smd-test → Settings → Secrets and variables → Actions → New repository secret** 添加：

- 名称：`TAPTAP_SOURCE_TOKEN`。
- 值：GitHub fine-grained personal access token。**Repository access 只选 `pkinfran/taptap_gpt`，Repository permissions 仅 Contents: Read-only**（Metadata 默认 Read）。
- 不要把 token 写进文件、聊天、PR 或任何网页。

配置后，`Deploy SMD H5 to GitHub Pages` 工作流可从 `taptap_gpt` 拉取指定分支、执行 Vite 构建、只上传 dist 静态产物，然后执行手机 Chromium 测试。工作流定时检查或手工 `Run workflow`，`source_ref` 可输入新的 PR 分支/commit；默认会先使用 `integration/S1-U08-app-shell-route`，也可用仓库 Actions variable `SMD_TEST_SOURCE_REF` 切换长期跟踪分支。

**如果尚未设置 token**，工作流会发布本仓库 `site/` 下最近一次通过授权方式导入的静态产物；它不会声称拉取到了新的私有源码。

## 启用 GitHub Pages
在 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。部署结果与截图见 [Actions](https://github.com/pkinfran/smd-test/actions/workflows/pages.yml)。

## 验收约束
- 只允许经过构建的客户端静态文件，无私有源码、密钥、真实用户数据。
- 每次验收标明 upstream commit SHA；本仓库的 commit SHA **不是**游戏代码版本。
- 手机真实验收通过之前，不合并源仓库 Draft PR、不将 Unit 标为 `verified`。
- GitHub Pages 地址为公开访问；不上传任何私人信息。
