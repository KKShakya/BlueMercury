function side_navbar(){
    return `
    
        <h1>MY ACCOUNT</h1>
        <hr>
        <div id="user_id">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAM1BMVEXk5ueutLfJzc/n6eqrsbTh4+S/xMbd4OG0ury3vL+8wcPU19nZ3N6nrrHQ09XEycvu8PCK/vZtAAADDElEQVR4nO2a2XbjIAxAAbEYG+z5/68dYjfrJEFSEen0cF96+tRbLZZBVmowGAwGg8FgMBgMBr8WAFDKff38mINaNz/HGGdvFvURE4C06WytPrA5Tyb0FgG1RH1WOGP13FcEQsz6CdZ61U8E/FOJIzlLJw8I02M67kR8H4v0T1E8eMQO8YD0MiFXnLQILO9DccRjErZQoS7RIS+Asigem6QHeERKdiT7FlWeX0xOTEOhJSTTAgabkt0jSGlQLMTCAStJQ1uZ6oBIstDWiIQj0IJRmkXCglageziShAcxJ0JZwU2TO2YBjUTNSaG9Br00RJ5g+Kl2o9F+vsFMttB2ba8xMTTat8pP0aBb/OZokB+iMhozo2EFOmVjaAjMNuJLz64h8OLzM2aKcuRWsRITlv40F6hQ1ogVOSI4qkaUsCBnRSQnyKuNWyQkFHW6CR1TqOGwMhInCONNLBiKdHCbBK978M8OsWuFwyPiPISa9YLDWUhME7KH9eL3xFA/y9pZWuLk4d7e3Gud5WNxiLzeY2j56rzxWF8uEezUccEEzudnIrZfKM4i22NEbJ5M/+0jqHU+/f9f6Mmnjnu2WxFwaTWb934zS/iMw+EB8OfgI2vp8jddSMtq9p30vpYuAUnBuW465e8k4+Ok83UnvTdJ+V3HeeuwJS/VsGyTfdqsl37J2q9BTgUgrFFbzMqv9I2RMQFY5soC9kElmubNA85o/ILrkh+fWoYEgqcE4i4kzUTKAMEUxCuTItJCQm3fkDiRG3zVAQsvHXcBsdv3ihUU4+Ltmci33kJahOIswj/EcS7/XntEbmIYq4t3HpqXmMoLOANG67pmZXGF/hlD7TDCg7xuErGgXl+DkEXJC+H+ummnPoDfmMNCnul48Kd9xv6Z4oE82GFvdNigyoN8C0sF95kLZ8VIIyOu56ifznDA3IwxFp1k6uGQrowT9abl7DkZVKPRxaI24noUqK5nhfOxCItKTnr0ia4P2k7BqLyHBcHZekvlvLBk24f3D9JkOlGZ9tCJtxKDwWAw+C/5C+d9JVJ5s3POAAAAAElFTkSuQmCC" alt="">
           
           <div> <h3>Manish Nirala</h3><br>
            <h4><a href="logout">Logout</a></h4>
        </div>
        </div>
        <div id="container">
            <button><a href="overview.html">My Purchases</a></button><br>
            <button>My BlueRewards</button><br>
            <button>My Wishlist</button><br>
            <button>Account Details + Preferences</button><br>
        </div>
    
    <script src="account.js"></script>`
}
export{ side_navbar };