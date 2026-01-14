import lume from "lume/mod.ts";
import icons from "lume/plugins/icons.ts";
import inline from "lume/plugins/inline.ts";
import unocss from "lume/plugins/unocss.ts";

const site = lume();

site.add("/assets").ignore("README.md");

site.use(unocss({ cssFile: "assets/css/uno.css" })).use(icons()).use(inline());

site.add("unocss.css");

export default site;
