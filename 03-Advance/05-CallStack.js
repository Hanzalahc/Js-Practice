/*

when code runs global execution context is saved in this keyword
there are also Fucntion execution context & Eval execution context in case of mongoDB

code is run in two phases
1. Memory Creation phase
2. Code Execution phase

Memory Creation phase: All variables are stored as undefined, Functions are stored as defination. 

Code Execution phase: values are assigned to variables, functions are executed. to execute them they create their own execution context called new execution context. Once it is used it is deleted. 

Call Stack: Global EC is push in the stack then when function is called it is pushed in the stack and when it is executed it is poped out of the stack. If function has more functions then they are pushed in the stack and executed one by one then poped out of the stack.

 */
