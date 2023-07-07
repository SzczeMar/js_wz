import * as myModule from './MyModule.js';
import {MyClass} from './MyModule.js';

console.log(myModule.myFunction); // "This is my export"

let myClass = new MyClass();
console.log(myClass.name); // "Jan"

console.log(myModule.myVariable); // 10

<script type='module'>
    import * as myModule from './MyModule.js';
    import {MyClass} from './MyModule.js';

    console.log(myModule.myFunction); // "This is my export"
</script>