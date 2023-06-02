

- step 是步进，会进入函数
- next 会跳过函数

> In GDB, `s` and `n` are used for stepping through program code during debugging.
>
> - `s` (step) steps into the next line of source code and enters any function calls on that line.
> - `n` (next) steps over the next line of source code and does not enter any function calls on that line.
>
> Similarly, `si` and `ni` are used for stepping through assembly code:↳
>
> - `si` (step instruction) steps into the next assembly instruction.
> - `ni` (next instruction) steps over the next assembly instruction.









***

## arv



### CMU的一个总结

| Command                                                      | Effect                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Starting:                                                    |                                                              |
| `gdb`                                                        | Start gdb                                                    |
| `gdb <file>`                                                 | Start gdb and load <file>                                    |
| Running and stopping:                                        |                                                              |
| `quit`                                                       | Exit gdb                                                     |
| `run`                                                        | Run program                                                  |
| `run 1 2 3`                                                  | Run program with command-line arguments 1 2 3                |
| `kill`                                                       | Stop the program                                             |
| `quit`                                                       | Exit gdb                                                     |
| `Ctrl-d`                                                     | Exit gdb                                                     |
| Note: Ctrl-C does not exit from gdb, but halts the current gdb command |                                                              |
| Breakpoints:                                                 |                                                              |
| `break sum`                                                  | Set breakpoint at the entry to function sum                  |
| `break *0x80483c3`                                           | Set breakpoint at address 0x80483c3                          |
| `delete 1`                                                   | Delete breakpoint 1                                          |
| `disable 1`                                                  | Disable the breakpoint 1                                     |
| `enable 1`                                                   | Enable breakpoint 1                                          |
| `delete`                                                     | Delete all breakpoints                                       |
| `clear sum`                                                  | Clear any breakpoints at the entry to function sum           |
| Execution:                                                   |                                                              |
| `stepi`                                                      | Execute one instruction                                      |
| `stepinexti 4`                                               | Execute four instructions                                    |
| `step`                                                       | Like stepi, but proceed through function calls without stopping |
| `continue`                                                   | Resume execution until the next breakpoint                   |
| `until 3`                                                    | Continue executing until program hits breakpoint 3           |
| `finish`                                                     | Resume execution until current function returns              |
| `call sum(1, 2)`                                             | Call sum(1,2) and print return value                         |
| Examining code:                                              |                                                              |
| `disas`                                                      | Disassemble current function                                 |
| `disas sum`                                                  | Disassemble function sum                                     |
| `disas 0x80483b7`                                            | Disassemble function around 0x80483b7                        |
| `disas 0x80483b7 0x80483c7`                                  | Disassemble code within specified address range              |
| `print /x $rip`                                              | Print program counter in hex                                 |
| `print /d $rip`                                              | Print program counter in decimal                             |
| Examining memory: |  |
| `x/4xb $rsp` | Examine 4 bytes of memory at the address pointed to by the stack pointer in hex |
| `x/4xw $rsp` | Examine 4 words of memory at the address pointed to by the stack pointer in hex |
| `x/4dw $rsp` | Examine 4 double words of memory at the address pointed to by the stack pointer in decimal |
| `x/4i $rip` | Examine 4 instructions starting at the program counter |
| `x/4gx $rsp` | Examine 4 quad words of memory at the address pointed to by the stack pointer in hex |
| `x/4f $rsp` | Examine 4 floating-point numbers at the address pointed to by the stack pointer |
| `info registers` | Print the values of all registers |
| `info registers rax` | Print the value of register rax |
| `set $rax = 0` | Set the value of register rax to 0 |
| `set *(int*)0x80483c3 = 0` | Set the value of the memory at address 0x80483c3 to 0 |
| `display /x $rax` | Display the value of register rax in hex every time gdb stops |
| `undisplay 1` | Remove display number 1 |
| `info frame` | Print information about the current stack frame |
| `up` | Move up one stack frame |
| `down` | Move down one stack frame |
| `info args` | Print the arguments to the current function |
| `info locals` | Print the local variables in the current function |
| `info breakpoints` | List all breakpoints |
| `info break sum` | List breakpoints in function sum |
| `info watchpoints` | List all watchpoints |
| `watch *0x80483c3` | Set a watchpoint on the memory location at address 0x80483c3 |
| `delete 1` | Delete watchpoint 1 |
| `disable 1` | Disable watchpoint 1 |
| `enable 1` | Enable watchpoint 1 |
| `delete` | Delete all watchpoints |
| `help` | Display help information |
| `help <command>` | Display help information for a specific command |