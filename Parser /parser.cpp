#include<fstream>
#include<cstdio>
#include<boost/regex.hpp>
#include<string>
#include<iostream>

using namespace std;

class Code 
{
    public:	
    	ifstream codeFile;
	string fileName;

    	Code() 
	{
	       
	        cout << "\n Enter File Name: ";
	        cin >> fileName;
	
	        codeFile.open(fileName.c_str());
	
	        if (!codeFile) 
		{
	            cout << "\n\n Unable To Open Your File.\n";
        	    exit(0);
        	} 
		else 
		{
	            cout << "\n\n your " << fileName << " file is opened !!\n\n";
	        }
	}

  	string checkLanguage() 
	{
		string line = "";

       		boost::regex regexPhp("\\s*\\$.*"); 				     					//regex for php
        	boost::regex regexRuby("\n*\\s*[a-bA-Z0-9_@\\(\\)=\"]*\n+\\s*ends*[\\s\n]*|\\s*end\\s*\n*"); 	  	//regex for ruby
		boost::regex regexJava("\\s*(private|protected|public)\\s(void|String|int|long|double|float|boolean)\\s[a-zA-Z_]*[0-9_]*\\(.*\\).*"); 										//regex for java
	        while (!codeFile.eof()) 										//removing Comments from the Code.
		{
		        boost::regex regexMultiLineCommentStart("^\\s*/\\*.*"); 
		        boost::regex regexMultiLineCommentEnd(".*(\\*/\\s*).*");
		        boost::regex regexOneLineComment("^\\s*#.*|^\\s*//.*");
		
		        getline(codeFile, line);
	
			if (!boost::regex_match(line, regexOneLineComment)) 
			{
	                	if (boost::regex_match(line, regexMultiLineCommentStart)) 
				{
	                	    	while (!boost::regex_match(line,regexMultiLineCommentEnd))
		                        	getline(codeFile, line);
	                	} 
				else
				{
					if (boost::regex_match(line, regexPhp)) 
					{
        	    				cout << " This is PHP code \n";
        	    				return "php";
					}
					else if (boost::regex_match(line, regexRuby)) 
					{
       	  					cout << " This is RUBY code \n";
      	    					return "ruby";
       					}
					else if(boost::regex_match(line, regexJava))
					{
        	    				cout << " This is JAVA code \n";
        	    				return "java";			
					}		
	 	        	}
  		      	}
		}
		cout << " This is a Crap code \n";
        	return "\0";		
	}
};


class Php : public Code
{
	
	public:
	
	void find()
	{
		while(!codeFile.eof())											
  		{	
			string line = "";
			boost::regex regexMultiLineCommentStart("^\\s*/\\*.*"); 
			boost::regex regexMultiLineCommentEnd(".*(\\*/\\s*).*");
			boost::regex regexOneLineComment("^\\s*#.*|^\\s*//.*");
		
			getline(codeFile, line);
		
			if (!boost::regex_match(line, regexOneLineComment)) 
			{
		                if (boost::regex_match(line, regexMultiLineCommentStart)) 
				{
		               	    	while (!boost::regex_match(line,regexMultiLineCommentEnd))
			                       	getline(codeFile, line);
		               	} 
				else
				{
					boost::regex regexClass("^\\s*class\\s[a-zA-Z]+[0-9A-Za-z]*.*"); 			   //checking classes. 
	    				if (boost::regex_match(line,regexClass))						
					{
						cout<<" Class    : ";
		    				cout<<"  "<<line.substr(6,(line.substr(6,line.length())).find_first_of(' ',1))<<endl;
					}
				
					boost::regex regexVar("^\\s*var\\s\\$[a-zA-Z0-9_]*.*"); 				   //checking variables.
					if (boost::regex_match(line,regexVar)) 							
					{							cout<<" Variable : ";
		    				cout<<"  "<<line.substr(line.find_first_of('$',1),(line.find_first_of(' ',line.find_first_of('$',1)+1)-line.find_first_of	('$',1)))<<endl;
					}
					
					boost::regex regexFun("^\\s*function\\s[a-zA-Z]+[a-zA-Z0-9_]*\\([a-zA-Z0-9_,=\\$]*\\).*"); //checking functions.
					if (boost::regex_match(line,regexFun)) 											
					{
						cout<<" Function : ";
		    				cout<<"  "<<line.substr(line.find_first_of('o',1)+2,(line.find_first_of('(',1)-(line.find_first_of('o',1)+2)))<<endl;
					}
				}
			
   			}
		}
	}
};


int main() 
{
 	Code code;
 	string language;
	language = code.checkLanguage();
 
	if(!(language.compare("php")))
	{
		Php phpCode;
		phpCode.find();
	}
    	return 0;
}
