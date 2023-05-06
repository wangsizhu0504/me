export const useTechnologie = () => {
  const getTechnologies = computed(() => [
    {
      order: 1,
      title: 'DEVELOPMENT',
      data: [
        { icon: 'i-skill-icons:vuejs-light', name: 'Vue.js' },
        { icon: 'i-skill-icons:typescript', name: 'TypeScript' },
        { icon: 'i-skill-icons:html', name: 'HTML5' },
        { icon: 'i-skill-icons:windicss-light', name: 'Windi CSS' },
        { icon: 'i-skill-icons:nodejs-light', name: 'Node.js' },
        { icon: 'i-skill-icons:sass', name: 'Sass' },
        { icon: 'i-skill-icons:javascript', name: 'JavaScript' },
        { icon: 'i-skill-icons:nginx', name: 'Nginx' },
        { icon: 'i-skill-icons:vite-light', name: 'Vite' },
        { icon: 'i-logos:ant-design', name: 'Ant Design Vue' },
        { icon: 'i-skill-icons:git', name: 'Git' },
      ],
    },
    {
      order: 2,
      title: 'APPLICATION',
      data: [
        { icon: 'i-logos:visual-studio-code', name: 'VS Code' },
        { icon: 'i-skill-icons:typescript', name: 'Raycast' },
        { icon: 'i-skill-icons:postman', name: 'Postman' },
      ],
    },
    {
      order: 3,
      title: 'SERVICE',
      data: [
        { icon: 'i-logos:github-icon', name: 'Github' },
        { icon: 'i-logos:vercel', name: 'vercel' },
      ],
    },
  ])
  const getDevTools = computed(() => [
    { icon: 'i-skill-icons:vuejs-light', name: 'Vue.js' },
    { icon: 'i-skill-icons:typescript', name: 'TypeScript' },
    { icon: 'i-skill-icons:html', name: 'HTML5' },
    { icon: 'i-skill-icons:windicss-light', name: 'Windi CSS' },
    { icon: 'i-skill-icons:nodejs-light', name: 'Node.js' },
    { icon: 'i-skill-icons:sass', name: 'Sass' },
    { icon: 'i-skill-icons:javascript', name: 'JavaScript' },
    { icon: 'i-skill-icons:nginx', name: 'Nginx' },
    { icon: 'i-skill-icons:vite-light', name: 'Vite' },
    { icon: 'i-logos:ant-design', name: 'Ant Design Vue' },
    { icon: 'i-skill-icons:git', name: 'Git' },
  ])
  const getApps = computed(() => [
    { icon: 'i-logos:visual-studio-code', name: 'VS Code' },
    { icon: 'i-skill-icons:typescript', name: 'Raycast' },
    { icon: 'i-skill-icons:postman', name: 'Postman' },
  ])
  const getService = computed(() => [
    { icon: 'i-logos:github-icon', name: 'Github' },
    { icon: 'i-logos:vercel', name: 'vercel' },
  ])
  return { getApps, getDevTools, getService }
}
