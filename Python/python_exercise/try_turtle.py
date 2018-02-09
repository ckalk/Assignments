import turtle
# from Alex
''' loadWindow = turtle.Screen()
turtle.speed(0)
for i in range(200):
    turtle.circle(5*i)
    turtle.circle(-5*i)
    turtle.left(5)
closeWindow = turtle.Screen() '''

#from learning platform
''' loadWindow = turtle.Screen()
DIST = 100
for x in range(0,6):
    print "x", x
    for y in range(1,5):
        print "y", y
        # turn the pointer 90 degrees to the right
        turtle.right(90)
        # advance according to set distance
        turtle.forward(DIST)
    # add to set distance
    DIST += 20 '''


#from alex
''' print "--- starting Turtle 2 -----"
loadWindow = turtle.Screen()
turtle.speed(0)

def shape(size, sides):
    for i in range(sides):
        turtle.forward(size)
        turtle.left(360/sides)

for i in range(50):
    shape(i, i)
    turtle.left(i) '''
    
#from shannon
''' print "--- starting Turtle 3 -----"
loadWindow = turtle.Screen()
def f(length, depth):
   if depth == 0:
     turtle.forward(length)
   else:
     f(length/3, depth-1)
     turtle.right(60)
     f(length/3, depth-1)
     turtle.left(120)
     f(length/3, depth-1)
     turtle.right(60)
     f(length/3, depth-1)
f(500, 4)
closeWindow = turtle.Screen()  '''
# from ?
''' print "--- starting Turtle 4 -----"
loadWindow = turtle.Screen()
turtle.speed(100)
x=60
loadWindow = turtle.Screen()
for counter2 in range (0,150):
    for counter in range (0,6):
        turtle.forward(x)
        turtle.left(60)
    x += 1
    turtle.left(3)
closeWindow = turtle.Screen() 
#from alex again
print "--- starting Turtle 5 -----"
loadWindow = turtle.Screen()
turtle.speed(100)
x=60
for counter2 in range (0,150):
    for counter in range (0,6):
        turtle.forward(x)
        turtle.left(60)
    turtle.left(3)
    x += 1 ''' 

# from googling draw fractal tree, with some modifications by me to make ends red and have more branches
print "--- drawing fractal tree -----"
loadWindow = turtle.Screen()
turtle.speed(0)
def tree(branchLen,t):
    t.color("green")
    if branchLen > 5: #if branch length greater than 5, branch again
        if branchLen <20:
            t.color("red") #if branch length getting small, change to color red
        t.forward(branchLen)
        t.color("green")
        t.right(20)
        tree(branchLen-10,t)
        t.left(40)
        tree(branchLen-10,t)
        t.right(20)
        t.penup()
        t.backward(branchLen)
        t.pendown()

def main():
    t = turtle.Turtle()
    myWin = turtle.Screen()
    t.left(90)
    t.up()
    t.backward(200)
    t.down()
    tree(75,t)
    myWin.exitonclick()

main()