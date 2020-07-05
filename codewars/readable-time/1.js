function humanReadable(seconds) {
    function int(num){
        if(parseInt(num)<10)
            return '0'+parseInt(num)
        else
            return parseInt(num)
    }
    return (int(seconds/3600)+':'+int((seconds%3600)/60)+':'+int((seconds%3600)%60))
}