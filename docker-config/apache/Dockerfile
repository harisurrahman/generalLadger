FROM httpd:latest
RUN sed -i \
        -e 's/^#\(LoadModule .*mod_proxy.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_proxy_fcgi.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_rewrite.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_headers.so\)/\1/' \
        /usr/local/apache2/conf/httpd.conf
RUN echo "Include conf/sites" >> /usr/local/apache2/conf/httpd.conf
#RUN echo "LoadModule proxy_module modules/mod_proxy.so" >> /usr/local/apache2/conf/httpd.conf
#RUN echo "LoadModule proxy_fcgi_module modules/mod_proxy_fcgi.so" >> /usr/local/apache2/conf/httpd.conf
