export const config = {

    //repository_url: 'https://github.com/mongodb/mongo-csharp-driver.git',
    //repository_url: 'https://github.com/JamesNK/Newtonsoft.Json.git',
    //repository_url: 'https://github.com/microsoft/nodejstools.git',

    //repository_url: 'https://github.com/neo4j/neo4j-dotnet-driver.git',
   // repository_url: 'https://sourceforge.net/projects/jedit/files/jedit/5.6.0/',
    repository_url: 'https://github.com/neo4j/neo4j-java-driver.git',
    file_log_url: 'public\\log.txt',
    file_search_path: 'Src',
    
    regex_commit: /(^|\n)(commit+(?=\s{1}\w{40}\n))/g,
    regex_files: /\n([^\s])+(\.java|\.cs|\.js|\.rb){1}/g,

    regex_commit_id: /^(\s)?([\w]+)/g,
    regex_commit_author: /(?<=Author:).*/g,
    regex_commit_date: /(?<=Date:).*/g,
    regex_commit_comment: /(?<=\s{4}).*/g,

    regex_file_name: /[^\/|\r\n]+\.\w+$/,

    neo4j_host: 'localhost',
    neo4j_port: '7687',
    neo4j_user: 'neo4j',
    neo4j_pass: 'admin', 


    //neo4j_project_id: 'MongoDB.C#.Driver',
    //neo4j_project_id: 'Json.NET',
    //neo4j_project_id: 'NodeJS.Tools',
    //neo4j_project_id: 'Neo4j.NET.Driver',
    
    neo4j_project_id: 'neo4j-driver',

    ignore_paths: [
        'src',
        'Src',
        'Tests',
        'tests'
    ]

}