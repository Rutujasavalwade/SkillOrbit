
FROM nginx:alpine

COPY index.html style.css script.js skills.html roadmaps.html progress.html /usr/share/nginx/html/

EXPOSE 80
