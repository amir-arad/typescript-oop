import { Singleton } from './1-classical';

// get the pojo singleton
import { instance as s2 } from './2-pojo';

// get the class singleton 
const s1 = Singleton.getInstance();

// use the singletons
s1.bark();
s2.bark();

// class instance's methods require binding
setTimeout(s1.bark.bind(s1), 1000); // OR: setTimeout(() => s1.bark(), 1000);

// pojo's methods are bound
setTimeout(s2.bark, 1000);