Hi, im Matthew, Im currently 16 years old and I dream of ruling the progamming field one day, it would take day and nigh to hard work but I guess no going back no more.
Recently I am learning python from a free yt course, Im halfway thourg the course and I can proudly say with the info and knowledge I got, I was able ot make a mini proper project.
The project is still in its child phase but I will improve it every chance I get.
just run the code give belo in vscode :)


mainfile=str(input("Write your main file name= "))
entry=open(f"{mainfile}","w")
a=("\n")
choice=int(input("How many lines would you like to write?\n= "))
if choice==1:
    info=str(input("Write your line= "))
    entry.write(f"{info}")
    entry.close()
elif choice==2:
    info1=str(input("write your 1st line= "))
    info2=str(input("2nd line= "))
    entry.write(f"{info1}{a}{info2}")
    entry.close()
elif choice==3:
    info3=str(input("write your 1st line= "))
    info4=str(input("2nd line= "))
    info5=str(input("3rd line= "))
    entry.write(f"{info3}{a}{info4}{a}{info5}")
    entry.close()
elif choice==4:
    info6=str(input("write your 1st line= "))
    info7=str(input("2nd line= "))
    info8=str(input("3rd line= "))
    info9=str(input("4th line= "))
    entry.write(f"{info6}{a}{info7}{a}{info8}{a}{info9}")
    entry.close()
elif choice==5:
    info10=str(input("write your 1st line= "))
    info11=str(input("2nd line= "))
    info12=str(input("3rd line= "))
    info13=str(input("4th line= "))
    info14=str(input("5th line= "))
    entry.write(f"{info10}{a}{info11}{a}{info12}{a}{info13}{a}{info14}")
    entry.close()
    
print("Would you like to make a list of your newly made file?")
ans=input("= ")
if ans=="yes" or "Yes":
    print("How many lines would you like to list?")
    listamnt=(int(input("= ")))
    if listamnt==1:

        f=(open(f"{mainfile}" , "r"))
        a=(input("write what you want to be in front of your 1st list= "))
        
        lines=(f.readlines())                
        l1=(lines[0])
        print(f" {a} {l1}")
    
    elif listamnt==2:
        
        f=(open(f"{mainfile}" , "r"))
        a=(input("write what you want to be in front of your 1st list= "))
        b=(input("write what you want to be in the front of your 2nd list= "))
        
        lines=(f.readlines())                
        l1=(lines[0])
        l2=(lines[1])
        print(f" {a} {l1} {b} {l2}")

    elif listamnt==3:

        f=(open(f"{mainfile}" , "r"))
        a=(input("write what you want to be in front of your 1st list= "))
        b=(input("write what you want to be in front of your 2nd list= "))
        c=(input("write what you want in front of your 3rd list= "))
        
        lines=(f.readlines())                
        l1=(lines[0])
        l2=(lines[1])
        l3=(lines[2])

        print(f" {a} {l1} {b} {l2} {c} {l3}")

    elif listamnt==4:

        f=(open(f"{mainfile}" , "r"))
        a=(input("write what you want to be in front of your 1stlist= "))
        b=(input("write what you want to be in front of your 2nd list= "))
        c=(input("write what you want in front of your 3rd list= "))
        d=(input("write what you want in front of your 4th list= "))
        
        lines=(f.readlines())                
        l1=(lines[0])
        l2=(lines[1])
        l3=(lines[2])
        l4=(lines[3])

        print(f" {a} {l1} {b} {l2} {c} {l3} {d} {l4}")
 

    elif listamnt==4:

        f=(open(f"{mainfile}" , "r"))
        a=(input("write what you want to be in front of your 1stlist= "))
        b=(input("write what you want to be in front of your 2nd list= "))
        c=(input("write what you want in front of your 3rd list= "))
        d=(input("write what you want in front of your 4th list= "))
        e=(input("write what you want in front of your 5th list= "))
        
        lines=(f.readlines())                
        l1=(lines[0])
        l2=(lines[1])
        l3=(lines[2])
        l4=(lines[3])
        l5=(lines[4])
        print(f" {a} {l1} {b} {l2} {c} {l3} {d} {l4} {e} {l5}")           

else:
    print("Worng input")




