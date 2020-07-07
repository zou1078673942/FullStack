function dist(v, mu) {								// suppose reaction time is 1
    // d1 = v**2/2mu g
    return (v/3.6)**2/(19.62*mu)+(v/3.6)
}

function speed(d, mu) {								// suppose reaction time is 1
    let a = 19.62*mu,
    b = 1,
    c = -d
    return 3.6*((-b + Math.sqrt(b**2 - 4*a*c))/(2*a))
}