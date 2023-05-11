import React, { useState } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';

function Goal (){

    const [goals, setGoals] = useState([
        {
            id: 1,
            goal: "One-Year Goal",
            question:"What's one thing you want to accomplish in one year?",
            answer: "",
        },
        {
            id: 2,
            goal: "Montly Goal",
            question:"Based on my One Year Goal, whats the one thing I can do this month?",
            answer: "",
        },
        {
            id: 3,
            goal: "Weekly Goal",
            question:"Based on my Montly Goal, whats the one thing I can do this week?",
            answer: "",
        },
        {
            id: 4,
            goal: "Daily Goal",
            question:"Based on my Weekly Goal, whats the one thing I can do today?",
            answer: "",
        },
      ]);

      function handleText(e, goalId) {
        const { value } = e.target;
        setGoals((prevGoals) => {
          const updatedGoals = [...prevGoals];
          const goalIndex = updatedGoals.findIndex(goal => goal.id === goalId);
          updatedGoals[goalIndex].answer = value;
          return updatedGoals;
        });
      }
    //const [isLoggedIn, setLoggedIn]= useState(false); //render everything 

    

    function printQuestion() {
        const today = new Date();
        const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const endOfYear = new Date(today.getFullYear()+1,0,0);
        
        const questionsToRender = [];

        if (today.getTime() === endOfYear.getTime()) {
          const yearlyGoal = goals.find(goal => goal.id === 1);
          questionsToRender.push(
            <Card>
              <Typography sx={{ fontSize: 25 }} key={yearlyGoal.id}>
                <Typography variant="h3" component="div">{yearlyGoal.goal}</Typography>
                <Typography sx={{ fontSize: 25 }}>{yearlyGoal.question}</Typography>
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}>
                <Input
                  variant="outlined"
                  onChange={(e) => handleText(e,yearlyGoal.id)}
                  name="answer"
                  type="text"
                  placeholder="Type Here..."
                  value={yearlyGoal.answer}
                  sx={{ flexGrow: 1 }}
                />
                <Button variant="contained">Add Goal</Button>
              </Box>
            </Card>
          );
        }
        if (today.getDate() === endOfMonth.getDate()) {
          const monthyGoal = goals.find(goal => goal.id === 2);
          questionsToRender.push(
            <Card>
              <Typography sx={{ fontSize: 25 }} key={monthyGoal.id}>
                <Typography variant="h3" component="div">{monthyGoal.goal}</Typography>
                <Typography sx={{ fontSize: 25 }}>{monthyGoal.question}</Typography>
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}>
                <Input
                  variant="outlined"
                  onChange={(e) => handleText(e, monthyGoal.id )}
                  name="answer"
                  type="text"
                  placeholder="Type Here..."
                  value={monthyGoal.answer}
                  sx={{ flexGrow: 1 }}
                />
                <Button variant="contained">Add Goal</Button>
              </Box>
            </Card>
          );
        }

        if (today.getDay() === endOfWeek.getDay()) {
          const weeklyGoal = goals.find(goal => goal.id === 3);
          questionsToRender.push(
            <Card>
              <Typography sx={{ fontSize: 25 }} key={weeklyGoal.id}>
                <Typography variant="h3" component="div">{weeklyGoal.goal}</Typography>
                <Typography sx={{ fontSize: 25 }}>{weeklyGoal.question}</Typography>
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}>
                <Input
                  variant="outlined"
                  onChange={(e) => handleText(e, weeklyGoal.id)}
                  name="answer"
                  type="text"
                  placeholder="Type Here..."
                  value={weeklyGoal.answer}
                  sx={{ flexGrow: 1 }}
                />
                <Button variant="contained">Add Goal</Button>
              </Box>
            </Card>
          );
        }

        
        if (today) {
           const todayGoal = goals.find(goal => goal.id === 4);
            questionsToRender.push(
              <Card>
                <Typography sx={{ fontSize: 25 }} key={todayGoal.id}>
                  <Typography variant="h3" component="div">{todayGoal.goal}</Typography>
                  <Typography sx={{ fontSize: 25 }}>{todayGoal.question}</Typography>
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}>
                  <Input
                    variant="outlined"
                    onChange={(e) => handleText(e,todayGoal.id)}
                    name="answer"
                    type="text"
                    placeholder="Type Here..."
                    value={todayGoal.answer}
                    sx={{ flexGrow: 1 }}
                  />
                  <Button variant="contained">Add Goal</Button>
                </Box>
              </Card>
            );
          }
      
        return questionsToRender;
      }
      
       
            // {isEndOfWeek ? (
            //   <p>{goals[3].question}</p>
            // ) : isEndOfMonth ? (
            //   <p>{goals[2].question}</p>
            // ) : isEndOfYear ? (
            //   <p>{goals[1].question}</p>
            // ) : (
            //   <p>{goals[0].question}</p>
            // )} 

    return (
        <Container>
          <Box sx={{ padding: 2 }}>
          {printQuestion()}
            {/* {goals.map((goal, index) => (
              <Card key={index}>
                <CardContent>
                  <Typography variant="h3" component="div">
                    {goal.goal}   
                  </Typography>
                  <Typography sx={{ fontSize: 25 }}>
                    {goal.question}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}>
                    <Input
                      variant="outlined"
                      onChange={(e) => handleText(e, index)}
                      name="answer"
                      type="text"
                      placeholder="Type Here..."
                      value={goal.answer}
                      sx={{ flexGrow: 1 }}
                    />
                    <Button variant="contained">Add Goal</Button>
                  </Box>
                </CardContent>
              </Card>
            ))}*/}
          </Box> 
        </Container>
      );
      
    
}
export default  Goal;
