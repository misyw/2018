import querystring from 'querystring'
export const JsonFetch = (url,options)=>{
    console.log(url,options)
    let opts = {
        method:"POST",   //请求方法
        body: JSON.stringify(options.body),   //请求体
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(url, opts)
    .then((res,body)=>{
        return res.json()
    }).then((resonseData) => {
        options.suceess(resonseData)
    })
    .catch((res,body)=>{
        return options.error(res)
    })
}


export const FormFetch = (url,options)=>{
    console.log(url,options)
    let opts = {
        method:"POST",   //请求方法
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
        }),
        //body: new URLSearchParams(options.body).toString() //  此处也可以完成formData 格式转换
        body:querystring.stringify(options.body)
    }
    fetch(url, opts)
    .then((res,body)=>{
        return res.json()
    }).then((resonseData) => {
        options.suceess(resonseData)
    })
    .catch((res,body)=>{
        return options.error(res)
    })
}