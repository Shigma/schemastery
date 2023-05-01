import{_ as s,o as n,c as a,e as l}from"./app.e0ccde3b.js";const p={},o=l(`<h1 id="intersect" tabindex="-1"><a class="header-anchor" href="#intersect" aria-hidden="true">#</a> Intersect</h1><p>Intersect \u7C7B\u578B\u53EF\u7528\u4E8E\u5408\u5E76\u591A\u4E2A\u7C7B\u578B\u3002\u4E00\u79CD\u6700\u5E38\u89C1\u7684\u7528\u6CD5\u662F\u5C06\u914D\u7F6E\u9879\u5206\u4E3A\u591A\u7EC4\u663E\u793A\u3002</p><div class="language-typescript ext-ts"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Schema</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">intersect</span><span style="color:#ABB2BF;">([</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">Schema</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">object</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">foo</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Schema</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">number</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">bar</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Schema</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">string</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">  }).</span><span style="color:#61AFEF;">description</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;\u5206\u7EC4 1&#39;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">Schema</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">object</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">baz</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Schema</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">string</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">qux</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Schema</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">boolean</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">  }).</span><span style="color:#61AFEF;">description</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;\u5206\u7EC4 2&#39;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">])</span></span>
<span class="line"></span></code></pre></div>`,3),e=[o];function c(B,t){return n(),a("div",null,e)}var y=s(p,[["render",c],["__file","intersect.html.vue"]]);export{y as default};
