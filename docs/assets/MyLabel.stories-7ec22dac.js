import{j as h}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const o=({allCaps:s=!1,color:L,fontColor:v,label:t,size:x="normal"})=>h.jsx("span",{style:{color:v},className:`label ${x} ${L}`,children:s?t.toUpperCase():t});try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display in the label",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size of the label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h3"'},{value:'"h2"'},{value:'"h1"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalize the label",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Color of the label",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Custom color of the label",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const q={title:"UI/MyLabel",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"AllCaps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},l={args:{label:"CustomColor Label",fontColor:"#5517AC"}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,i,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps Label',
    allCaps: true
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,b,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,f,g;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'CustomColor Label',
    fontColor: '#5517AC'
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const z=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,z as __namedExportsOrder,q as default};
//# sourceMappingURL=MyLabel.stories-7ec22dac.js.map
