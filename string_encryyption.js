
        function father(callback , string){
            let string_index = string.length-1
            callback(string_index , string)
        }

        function Encryption(string){
            let inner_str_front = "";
            let string_index = string.length-1
            let core_str = string
            let inner_str_behind = "" ;
            const encryption_front = "abihauhfauhrui897489124ugjkafgi**!**(!#89&*(&@89KJDKJAFASF))"
            const encryption_back =  "bbfa8743hqjkfafy80y43q4q3535-=5===5fo[];'lfp[l0-i0558329523]"
            
            for (i=0 ;i < string_index ; i++){
                    let chosen_encrypts_F_index = Math.floor(Math.random() * encryption_front.length)
                    let chosen_encrypts_B_index = Math.floor(Math.random() * encryption_back.length)

                    inner_str_front += encryption_front[chosen_encrypts_F_index]    
                    inner_str_behind += encryption_back[chosen_encrypts_B_index]
            }
            //--String Encryption methods---\\

            let enocrypted_string_org_in_mid = (inner_str_front + core_str + `-/${string.length - 1}/-` + inner_str_behind)
            let encrypted_mid_str = ""
            if (enocrypted_string_org_in_mid.includes(string)){
                
                for (i=0 ; i < string.length ; i++){
                    switch(true){
                        case string[i] == 1:
                            encrypted_mid_str += "a"
                            break
                        case string[i] == 2:
                            encrypted_mid_str += "b"
                            break
                        case string[i] == 3:
                            encrypted_mid_str += "c"
                            break
                        case string[i] == 4:
                            encrypted_mid_str += "d"
                            break
                        case string[i] == 5:
                            encrypted_mid_str += "e"
                            break
                        case string[i] == 6:
                            encrypted_mid_str += "f"
                            break
                        case string[i] == 7:
                            encrypted_mid_str += "g"
                            break
                        case string[i] == 8:
                            encrypted_mid_str += "h"
                            break
                        case string[i] == 9:
                            encrypted_mid_str += "i"
                            break
                        case string[i] == 31:
                            encrypted_mid_str += "j"
                            break
                        case string[i] == " ":
                            encrypted_mid_str += "|"
                            break
                        case string[i] == "a":
                            encrypted_mid_str += "!"
                            break
                        case string[i] == "A":
                            encrypted_mid_str += "!"
                            break
                        case string[i] == "b":
                            encrypted_mid_str += "@"
                            break   
                        case string[i] == "B":
                            encrypted_mid_str += "@"
                            break
                        case string[i] == "c":
                            encrypted_mid_str += "#"
                            break
                        case string[i] == "C":
                            encrypted_mid_str += "#"
                            break
                        case string[i] == "d":
                            encrypted_mid_str += "$"
                            break   
                        case string[i] == "D":
                            encrypted_mid_str += "$"
                            break    
                        case string[i] == "e":
                            encrypted_mid_str += "%"
                            break
                        case string[i] == "E":
                            encrypted_mid_str += "%"
                            break
                        case string[i] == "f":
                            encrypted_mid_str += "^"
                            break   
                        case string[i] == "F":
                            encrypted_mid_str += "^"
                            break  
                        case string[i] == "g":
                            encrypted_mid_str += "&"
                            break
                        case string[i] == "G":
                            encrypted_mid_str += "&"
                            break
                        case string[i] == "h":
                            encrypted_mid_str += "*"
                            break   
                        case string[i] == "H":
                            encrypted_mid_str += "*"
                            break         
                        case string[i] == "i":
                            encrypted_mid_str += "("
                            break
                        case string[i] == "I":
                            encrypted_mid_str += "("
                            break
                        case string[i] == "j":
                            encrypted_mid_str += ")"
                            break   
                        case string[i] == "J":
                            encrypted_mid_str += ")"
                            break
                        case string[i] == "k":
                            encrypted_mid_str += "]"
                            break
                        case string[i] == "K":
                            encrypted_mid_str += "]"
                            break
                        case string[i] == "l":
                            encrypted_mid_str += "["
                            break   
                        case string[i] == "L":
                            encrypted_mid_str += "["
                            break          
                        case string[i] == "m":
                            encrypted_mid_str += "{"
                            break
                        case string[i] == "M":
                            encrypted_mid_str += "{"
                            break
                        case string[i] == "n":
                            encrypted_mid_str += "}"
                            break   
                        case string[i] == "N":
                            encrypted_mid_str += "}"
                            break       
                        case string[i] == "o":
                            encrypted_mid_str += ";"
                            break
                        case string[i] == "O":
                            encrypted_mid_str += ";"
                            break
                        case string[i] == "p":
                            encrypted_mid_str += ":"
                            break   
                        case string[i] == "P":
                            encrypted_mid_str += ":"
                            break       
                        case string[i] == "q":
                            encrypted_mid_str += "'"
                            break
                        case string[i] == "Q":
                            encrypted_mid_str += "'"
                            break
                        case string[i] == "r":
                            encrypted_mid_str += '"'
                            break   
                        case string[i] == "R":
                            encrypted_mid_str += '"' 
                            break   
                        case string[i] == "s":
                            encrypted_mid_str += ","
                            break
                        case string[i] == "S":
                            encrypted_mid_str += ","
                            break
                        case string[i] == "t":
                            encrypted_mid_str += "<"
                            break   
                        case string[i] == "T":
                            encrypted_mid_str += "<"
                            break
                        case string[i] == "u":
                            encrypted_mid_str += "."
                            break
                        case string[i] == "U":
                            encrypted_mid_str += "."
                            break
                        case string[i] == "v":
                            encrypted_mid_str += ">"
                            break   
                        case string[i] == "V":
                            encrypted_mid_str += ">"
                            break              
                        case string[i] == "w":
                            encrypted_mid_str += "/"
                            break
                        case string[i] == "W":
                            encrypted_mid_str += "/"
                            break
                        case string[i] == "x":
                            encrypted_mid_str += "`"
                            break   
                        case string[i] == "X":
                            encrypted_mid_str += "`"
                            break       
                        case string[i] == "y":
                            encrypted_mid_str += "~"
                            break
                        case string[i] == "Y":
                            encrypted_mid_str += "~"
                            break
                        case string[i] == "z":
                            encrypted_mid_str += "_"
                            break   
                        case string[i] == "Z":
                            encrypted_mid_str += "_"
                            break       
                    }
                }
            }
            let fully_encripted_str = enocrypted_string_org_in_mid.replace(string, encrypted_mid_str)

            return fully_encripted_str

        }

        function decrpyt_string(encrypted_string){

            //---------------WORK WITH THE FUCS INSIDE
            
            let org_str_len_inBRACET =Math.floor((encrypted_string.length / 3) - 2 ) 
            let num_plate  = "-/" + org_str_len_inBRACET + "/-"
            let removed_NUM_PLATE= encrypted_string.replace (num_plate , "")
            let enc_removal_back = removed_NUM_PLATE.slice(0, -(org_str_len_inBRACET));
            let enc_removal_front = enc_removal_back.slice(org_str_len_inBRACET);

            //---------------
            let string = enc_removal_front;
            let encrypted_mid_str = ""
            let decoded_str = encrypted_mid_str;
            if (encrypted_string.includes(string)){
                
                for (i=0 ; i < string.length ; i++){
                    switch(true){
                        case string[i] == "a":
                            encrypted_mid_str += 1
                            break
                        case string[i] == "b":
                            encrypted_mid_str += 2
                            break
                        case string[i] == "c":
                            encrypted_mid_str += 3
                            break
                        case string[i] == "d":
                            encrypted_mid_str += 3
                            break
                        case string[i] == "e":
                            encrypted_mid_str += 5
                            break
                        case string[i] == "f":
                            encrypted_mid_str += 6
                            break
                        case string[i] == "g":
                            encrypted_mid_str += 7
                            break
                        case string[i] == "h":
                            encrypted_mid_str += 8
                            break
                        case string[i] == "i":
                            encrypted_mid_str += 9
                            break
                        case string[i] == "j":
                            encrypted_mid_str += 31
                            break
                        case string[i] == "|":
                            encrypted_mid_str += " "
                            break
                        case string[i] == "!":
                            encrypted_mid_str += "a"
                            break
                        
                        case string[i] == "@":
                            encrypted_mid_str += "b"
                            break   
                        
                        case string[i] == "#":
                            encrypted_mid_str += "c"
                            break
                    
                        case string[i] == "$":
                            encrypted_mid_str += "d"
                            break   
                        
                        case string[i] == "%":
                            encrypted_mid_str += "e"
                            break
                        
                        case string[i] == "^":
                            encrypted_mid_str += "f"
                            break   
                          
                        case string[i] == "&":
                            encrypted_mid_str += "g"
                            break
                        
                        case string[i] == "*":
                            encrypted_mid_str += "h"
                            break   
                                
                        case string[i] == "(":
                            encrypted_mid_str += "i"
                            break
                
                        case string[i] == ")":
                            encrypted_mid_str += "j"
                            break   
                        
                        case string[i] == "]":
                            encrypted_mid_str += "k"
                            break
                        
                        case string[i] == "[":
                            encrypted_mid_str += "l"
                            break   
                                  
                        case string[i] == "{":
                            encrypted_mid_str += "m"
                            break
                        
                        case string[i] == "}":
                            encrypted_mid_str += "n"
                            break   
                               
                        case string[i] == ";":
                            encrypted_mid_str += "o"
                            break
                        
                        case string[i] == ":":
                            encrypted_mid_str += "p"
                            break   
                   
                        case string[i] == "'":
                            encrypted_mid_str += "q"
                            break
                        
                        case string[i] == '"':
                            encrypted_mid_str += "r"
                            break   
                           
                        case string[i] == ",":
                            encrypted_mid_str += "s"
                            break
                        
                        case string[i] == "<":
                            encrypted_mid_str += "t"
                            break   
                        
                        case string[i] == ".":
                            encrypted_mid_str += "u"
                            break
                        
                        case string[i] == ">":
                            encrypted_mid_str += "v"
                            break   
                                      
                        case string[i] == "/":
                            encrypted_mid_str += "w"
                            break
                        
                        case string[i] == "`":
                            encrypted_mid_str += "x"
                            break   
                               
                        case string[i] == "~":
                            encrypted_mid_str += "y"
                            break
                        
                        case string[i] == "_":
                            encrypted_mid_str += "z"
                            break   
                        
                    }
                }
            }

            return encrypted_mid_str;

        }

let daecryption = decrpyt_string(`)*8#hAu!}(&&!{!}-/7/-qfa=ypl=`)
console.log(daecryption)
let encryptionsa = Encryption("niggaman")
console.log(encryptionsa)
const encr_btn = document.getElementById("encryption")
const decr_btn = document.getElementById("decryption")
const sb_btn = document.getElementById("sub_btn")
const result = document.getElementById("decrypted_str")
let user_msg = document.getElementById("user_msg")
let user_val = user_msg.value
sb_btn.onclick = function(){
    if (encr_btn.checked){
        let encryptions = Encryption(user_msg.value)
        result.textContent = encryptions
    }
    else if (decr_btn.checked){
        let decryption = decrpyt_string(user_msg.value)
        result.textContent = decryption
    }
    else{
        result.textContent = "Error Occured"
    }
}
