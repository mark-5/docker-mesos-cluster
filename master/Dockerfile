FROM redjack/mesos-master
RUN apt-get update -q -y
RUN apt-get install -q -y make g++ libprotobuf-dev libssl-dev
RUN curl -L https://cpanmin.us | perl - --notest App::cpanminus
RUN cpanm --notest Carton
