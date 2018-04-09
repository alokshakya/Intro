import { Lang } from './lang';

export const LangTemplates: Lang[]=[
    {
        name:'c',
        mode:'text/x-csrc',
        template:`#include <stdio.h>

int main(void) {
    printf("Hello World!\n");
    return 0;
}`
,
        filename:'main.c'

    },
    {
        name:'cpp',
        mode:'text/x-c++src',
        template:`#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!";
    return 0;
}`,
        filename:'main.cpp'

    },
    {
        name:'java',
        mode:'text/x-java',
        template:`class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,
        filename:'Main.java'

    },
    {
        name:'python',
        mode:'text/x-python',
        template:`print("Hello World!")`,
        filename:'main.py'

    },
    {
        name:'clojure',
        mode:'text/x-clojure',
        template:`(println "Hello World!")`,
        filename:'main.clj'

    },
    {
        name:'cobol',
        mode:'text/x-cobol',
        template:`IDENTIFICATION DIVISION.
PROGRAM-ID. hello.

PROCEDURE DIVISION.
    DISPLAY 'Hello World!'
    GOBACK
    .`,
        filename:'main.cob'

    },
    {
        name:'coffeescript',
        mode:'text/x-coffeescript',
        template:`console.log "Hello World!"`,
        filename:'main.coffee'

    },
    {
        name:'crystal',
        mode:'text/x-crystal',
        template:`puts "Hello World!"`,
        filename:'main.cr'

    },
    {
        name:'csharp',
        mode:'text/x-csharp',
        template:`using System;

class MainClass {
    static void Main() {
        Console.WriteLine("Hello World!");
    }
}`,
        filename:'main.cs'

    },
    {
        name:'d',
        mode:'text/x-d',
        template:`import std.stdio;

void main()
{
    writeln("Hello World!");
}`,
        filename:'main.d'

    },
    {
        name:'go',
        mode:'text/x-go',
        template:`package main

import (
    "fmt"
)

func main() {
    fmt.Println("Hello World!")
}`,
        filename:'main.go'

    },
    {
        name:'groovy',
        mode:'text/x-groovy',
        template:`println "Hello World!"`,
        filename:'main.groovy'

    },
    {
        name:'javascript',
        mode:'text/javascript',
        template:`console.log("Hello World!");`,
        filename:'main.js'

    },
    {
        name:'julia',
        mode:'text/x-julia',
        template:`println("Hello world!")`,
        filename:'main.jl'

    },
    {
        name:'kotlin',
        mode:'text/x-kotlin',
        template:`fun main(args : Array<String>){
    println("Hello World!")
}`,
        filename:'main.kt'

    },
    {
        name:'lua',
        mode:'text/x-lua',
        template:`print("Hello World!");`,
        filename:'main.lua'

    },
    {
        name:'perl',
        mode:'text/x-perl',
        template:`print "Hello World!\n";`,
        filename:'main.pl'

    },
    {
        name:'php',
        mode:'text/x-php',
        template:`<?php

echo "Hello World\n";`,
        filename:'main.php'

    },
    {
        name:'ruby',
        mode:'text/x-ruby',
        template:`puts "Hello World!"`,
        filename:'main.rb'

    },
    {
        name:'rust',
        mode:'text/x-rust',
        template:`fn main() {
    println!("Hello World!");
}`,
        filename:'main.rs'

    },
    {
        name:'scala',
        mode:'text/x-scala',
        template:`object Main extends App {
    println("Hello World!")
}`,
        filename:'main.scala'

    },
    {
        name:'swift',
        mode:'text/x-swift',
        template:`print("Hello World!")`,
        filename:'main.swift'

    },
    {
        name:'typescript',
        mode:'text/typescript',
        template:`const hello : string = "Hello World!"
console.log(hello)`,
        filename:'main.ts'

    }
];