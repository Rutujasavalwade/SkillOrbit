
FROM nginx:alpine

COPY index.html style.css script.js skills.html roadmaps.html /usr/share/nginx/html/

EXPOSE 80
