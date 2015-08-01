FROM debian
RUN apt-get update -q -y
RUN apt-get install -q -y curl gcc make perl
RUN curl -L https://cpanmin.us | perl - --notest App::cpanminus
RUN cpanm --notest HTTP::Proxy

ADD ./bin/proxy /usr/bin/proxy
CMD /usr/bin/proxy
