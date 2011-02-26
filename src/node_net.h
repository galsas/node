#ifndef NODE_NET
#define NODE_NET

#include <v8.h>

namespace node {

extern int allowed_ports_count;
extern int* allowed_ports;

void InitNet(v8::Handle<v8::Object> target);

}

#endif  // NODE_NET
