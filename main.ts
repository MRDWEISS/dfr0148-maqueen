basic.forever(function () {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
    basic.pause(1000)
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    basic.pause(1000)
   
})
