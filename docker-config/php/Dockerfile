FROM phpdockerio/php74-fpm
RUN apt-get update && apt-get install -y composer;
RUN apt-get install -y vim
RUN apt-get install -y php7.4-mysql php7.4-common php7.4-bcmath openssl php7.4-json php7.4-mbstring php7.4-xdebug

RUN echo "error_reporting = E_ALL" >> /etc/php/7.4/mods-available/xdebug.ini
RUN echo "display_startup_errors = On" >> /etc/php/7.4/mods-available/xdebug.ini
RUN echo "display_errors = On" >> /etc/php/7.4/mods-available/xdebug.ini

# relevant to this answer
#RUN echo "xdebug.mode = debug" >> /etc/php/7.4/mods-available/xdebug.ini
#RUN echo "xdebug.var_display_max_depth = -1" >> /etc/php/7.4/mods-available/xdebug.ini
#RUN echo "xdebug.var_display_max_children = -1" >> /etc/php/7.4/mods-available/xdebug.ini
#RUN echo "xdebug.var_display_max_data = -1" >> /etc/php/7.4/mods-available/xdebug.ini
#RUN echo "xdebug.remote_log = /tmp/xdebug_remote.log" >> /etc/php/7.4/mods-available/xdebug.ini
#RUN echo "xdebug.client_host = host.docker.internal" >> /etc/php/7.4/mods-available/xdebug.ini
RUN echo "zend_extension = xdebug.so" >> /etc/php/7.4/mods-available/xdebug.ini
RUN echo "xdebug.mode = develop,coverage,debug,profile" >> /etc/php/7.4/mods-available/xdebug.ini
RUN echo "xdebug.idekey=dockek" >> /etc/php/7.4/mods-available/xdebug.ini
RUN echo "xdebug.start_with_request = yes" >> /etc/php/7.4/mods-available/xdebug.ini
RUN echo "xdebug.start_with_request=yes" >> /etc/php/7.4/mods-available/xdebug.ini
RUN echo "xdebug.client_port = 9003" >> /etc/php/7.4/mods-available/xdebug.ini
RUN echo "xdebug.client_host=host.docker.internal" >> /etc/php/7.4/mods-available/xdebug.ini
RUN echo "xdebug.client_host=192.168.86.51" >> /etc/php/7.4/mods-available/xdebug.ini
RUN sed -i -e 's/^;\(extensio.*pdo_mysql\)/\1/' /etc/php/7.4/fpm/php.ini 
RUN echo 'umask a+w' >> /root/.bashrc