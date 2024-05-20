# BAI ESE
## TENTATIVE
###  THIS IS NOT PROVIDED BY JAGRUTI MAM IISE KAAM CHALA LO


1

Introduction to AI 

Introduction and History of Artificial Intelligence, AI Categorization, 
Components of AI, Foundations of AI, Applications and Cu rrent trends in AI



2

Intelligent Agents and Problem solving
Agents and Environments, The concept of rationality, The nature of 
environment, The structure of Agents, Types of Agents, Learning Agent, AI 
applications for various types of agents, Problem Solving Agent, Formulating 
Problems and Example Problems



3

Searching Techniques

Uninformed Search Methods, Informed Search Methods, Local Search 
Methods,Genetic Algorithm, Adversarial Search, Constraint Satisfaction 
Problems, (Tabu Search), Real time applications of all search methods



4

Knowledge and Reasoning

Knowledge based Agents, The Wumpus World Problem, The Propositional 
logic, First Order Logic: Syntax and Semantic, Inference in FOL, Forward 
chaining and backward Chaining,Unification and Resolution, Uncertain 
knowledge and reasoning( Handling Uncertain Knowledge, Prior and Posterior 
Probability ), Real time application of certain & uncertain knowledge and 
reasoning 


5

Planning and Learning

The planning problem, Planning with state space search, Partial order planning 
, Hierarchical planning, Conditional Planning , Learning: Forms of Learning, 
Inductive Learning, Learning Decision Tree, ID3 Algorithm 


6

Expert Systems and Sub Areas of AI

Expert System, Machine Learning , Deep Learning ,Natural Language 
Processing with tool TextRazor,(Speech Recognition),Prompt 
Engineering,OpenAI Integration












Module 1:- Introduction To AI
2 Mark Topics:-
1.	List the Goals of Artificial Intelligence.





Here are concise and structured answers for each of the provided 2-mark questions:

### 1. List the Goals of Artificial Intelligence.
- **Automation**: Create systems that can perform tasks without human intervention.
- **Problem-Solving**: Develop algorithms to solve complex problems.
- **Learning and Adaptation**: Enable machines to learn from data and experiences.
- **Human Interaction**: Improve human-computer interaction through natural language processing and understanding.



----
----
----
2.	Give the Task Classification of Artificial Intelligence.

----
----
----


### 2. Give the Task Classification of Artificial Intelligence.
- **Reasoning**: Deductive and inductive reasoning.
- **Knowledge Representation**: Storing information about the world.
- **Planning and Scheduling**: Organizing actions to achieve goals.
- **Learning**: Machine learning and data mining.
- **Natural Language Processing**: Understanding and generating human language.
- **Perception**: Processing sensory inputs like vision and sound.
- **Motion and Manipulation**: Robotics and controlling physical actions.


----
----
----
3.	Give Any two real-time Applications of Artificial Intelligence.

----
----
----


### 3. Give Any Two Real-Time Applications of Artificial Intelligence.
- **Healthcare**: AI-powered diagnostic tools (e.g., IBM Watson for Oncology).
- **Finance**: Fraud detection systems (e.g., credit card fraud detection by banks).



----
----
----
4.	Give the Categorization of AI based on Capabilities with one real time example of each.

----
----
----


### 4. Give the Categorization of AI based on Capabilities with One Real-Time Example of Each.
- **Narrow AI (Weak AI)**: Performs a specific task.
  - *Example*: Siri, virtual personal assistant.
- **General AI (Strong AI)**: Human-level intelligence across various tasks.
  - *Example*: Hypothetical, not yet achieved.
- **Superintelligent AI**: Surpasses human intelligence.
  - *Example*: Theoretical, not yet achieved.


----
----
----

5.	Identify & Describe the Main Components of an AI system.
•	Advantages & Disadvantages of AI
•	Strong AI vs Weak AI
•	Define Intelligence & its Categories. – Natural & Artificial

----
----
----
### 5. Identify & Describe the Main Components of an AI System.
- **Data**: The raw information AI systems learn from.
- **Algorithms**: The logic and rules AI uses to process data.
- **Model**: The trained representation of the data used to make predictions or decisions.
- **Hardware**: The physical devices running AI algorithms, such as GPUs.

#### Advantages & Disadvantages of AI
- **Advantages**:
  - Automation of repetitive tasks.
  - Enhanced decision-making capabilities.
  - Ability to process large volumes of data quickly.
- **Disadvantages**:
  - Potential job displacement.
  - Ethical concerns and biases in decision-making.
  - High cost of development and implementation.

#### Strong AI vs Weak AI
- **Strong AI**:
  - Can perform any intellectual task that a human can.
  - Possesses consciousness, self-awareness.
  - Not yet realized.
- **Weak AI**:
  - Specialized in one task.
  - No consciousness or genuine understanding.
  - Examples: Chatbots, image recognition systems.

#### Define Intelligence & Its Categories – Natural & Artificial
- **Intelligence**: The ability to learn, understand, and apply knowledge.
  - **Natural Intelligence**: Exhibited by humans and animals.
    - *Example*: Human problem-solving, animal navigation.
  - **Artificial Intelligence**: Exhibited by machines and systems.
    - *Example*: Chess-playing computer, autonomous driving systems.




----
----
----

## 5 Markers M1
1.	Discuss Various Foundation Areas with AI in detail.

----
----
----




----
----
----
2.	List & Explain in detail The Types of Artificial Intelligence with Example of each.
•	History of AI.
•	Intelligence & Types of Intelligence. – Linguistic, Musical.. etc
•	Explain Components of AI – Reasoning, Learning, Perception, Problem Solving, Linguistic Intelligence.

----
----
----






----
----
----



Module 2:- Intelligent Agents & Problem Solving
2 Mark Topics:-


----
----
----
1.	List and Define the Terms to Define a Problem.

----
----
----
#### 1. List and Define the Terms to Define a Problem.
- **Initial State**: The starting condition from which the problem-solving process begins.
- **Goal State**: The desired condition or outcome that the problem-solving process aims to achieve.
- **Operators**: The actions or steps that can be taken to move from one state to another.
- **State Space**: The entire set of possible states that can be reached from the initial state using the operators.
- **Path Cost**: The cumulative cost associated with reaching a particular state from the initial state, typically used to evaluate the efficiency of different paths.



----
----
----

2.	List all the Environment Characteristics.

----
----
----



#### 2. List all the Environment Characteristics.
- **Fully Observable vs. Partially Observable**: Whether the agent has access to the complete state of the environment at all times.
- **Deterministic vs. Stochastic**: Whether the next state of the environment is completely determined by the current state and the agent's action.
- **Episodic vs. Sequential**: Whether the agent’s experience is divided into atomic episodes with no dependence on previous actions, or if current decisions affect future states.
- **Static vs. Dynamic**: Whether the environment changes while the agent is deliberating.
- **Discrete vs. Continuous**: Whether the environment has a finite number of distinct states and actions, or a range of possible states and actions.
- **Single-Agent vs. Multi-Agent**: Whether there is only one agent operating in the environment or multiple agents interacting with each other.



----
----
----
3.	Formulate Problem for N-Queens.

----
----
----

#### 3. Formulate Problem for N-Queens.
- **Initial State**: An empty \( N \times N \) chessboard with no queens placed.
- **Goal State**: A configuration where \( N \) queens are placed on the board such that no two queens threaten each other.
- **Operators**: Placing a queen in an empty square of the current configuration.
- **State Space**: All possible ways of placing 0 to \( N \) queens on the board, one per column, ensuring no two queens attack each other.
- **Path Cost**: Typically not applicable as the problem is about finding any valid solution rather than optimizing a cost.

----
----
----
4.	Interpret PEAS representation for Interactive English Tutor.

----
----
----

### 4. Interpret PEAS Representation for Interactive English Tutor

- **P (Performance Measure)**:
  - Improvement in student's language skills.
  - Student engagement and satisfaction.
  - Accuracy of responses.
  - Completion of exercises.

- **E (Environment)**:
  - Virtual classroom or learning platform.
  - Student interactions (questions, responses).
  - Texts and exercises for practice.
  - Real-time feedback system.

- **A (Actuators)**:
  - Displaying text and multimedia content.
  - Providing prompts and hints.
  - Offering feedback and corrections.
  - Recording student responses and progress.

- **S (Sensors)**:
  - Keyboard/mouse input from the student.
  - Voice recognition (if applicable).
  - Response times and patterns.
  - Progress tracking data.


----
----
----
5.	Examine Environment Characteristics for a Crossword Puzzle.

----
----
----

### 5. Examine Environment Characteristics for a Crossword Puzzle

- **Fully Observable vs. Partially Observable**: Fully observable - the entire crossword grid and clues are visible to the player.
- **Deterministic vs. Stochastic**: Deterministic - each clue has a specific correct answer, and actions (filling in letters) have predictable outcomes.
- **Episodic vs. Sequential**: Sequential - current actions (filling in words) depend on previous actions and influence future moves.
- **Static vs. Dynamic**: Static - the crossword grid and clues do not change while solving.
- **Discrete vs. Continuous**: Discrete - finite set of letters and positions on the grid.
- **Single-Agent vs. Multi-Agent**: Typically single-agent - one player solves the puzzle, though collaborative solving can involve multiple agents.



----
----
----

6.	Define Rational Agent with Example.

----
----
----

### 6. Define Rational Agent with Example

- **Definition**: A rational agent is one that acts to achieve the best possible outcome or, when there is uncertainty, the best expected outcome based on its knowledge and available information.

- **Example**: 
  - **Autonomous Vacuum Cleaner**:
    - **Performance Measure**: Cleanliness of the floor, coverage of the area, time taken.
    - **Environment**: House layout, presence of furniture and obstacles, dirt locations.
    - **Actuators**: Wheels for movement, vacuum motor for cleaning, brushes for sweeping.
    - **Sensors**: Cameras or infrared sensors for navigation, dirt sensors for detecting dirty spots.
    - **Rationality**: The vacuum cleaner uses its sensors to detect dirt and obstacles, plans a cleaning path to maximize coverage and cleanliness while avoiding obstacles, and returns to the charging station when needed.



----
----
----
7.	Differentiate between Simple-Reflex Agent & a Goal-Based Agent.

•	Define Agent & Environment
•	Structure of Agents
•	Define Problem Solving & Problem Solving Agent
----
----
----

### 7. Differentiate between Simple-Reflex Agent & Goal-Based Agent

- **Simple-Reflex Agent**:
  - **Definition**: Acts only based on the current percept, ignoring the rest of the percept history.
  - **Characteristics**:
    - Uses condition-action rules.
    - Limited to predefined responses.
    - Does not consider the future consequences of its actions.
  - **Example**: A thermostat that turns the heater on if the temperature is below a certain threshold.

- **Goal-Based Agent**:
  - **Definition**: Acts to achieve specific goals, taking into account the future consequences of actions.
  - **Characteristics**:
    - Considers the desired outcome (goal) and plans actions accordingly.
    - More flexible and adaptable to changes in the environment.
    - Utilizes search and planning algorithms.
  - **Example**: A navigation system that plans a route to a destination.

### Define Agent & Environment

- **Agent**:
  - **Definition**: An entity that perceives its environment through sensors and acts upon it through actuators to achieve specific goals.
  - **Example**: A robot vacuum cleaner, an autonomous car, or a virtual personal assistant.

- **Environment**:
  - **Definition**: The external context or surroundings in which an agent operates and with which it interacts.
  - **Example**: For a robot vacuum cleaner, the environment includes the layout of the home, furniture, and obstacles.

### Structure of Agents

- **Simple-Reflex Agents**:
  - **Components**: Condition-action rules.
  - **Operation**: Reacts directly to percepts.
  - **Example**: Light switch that turns on when it detects darkness.

- **Model-Based Reflex Agents**:
  - **Components**: Internal state to keep track of unobserved aspects of the environment.
  - **Operation**: Uses a model of the world to handle partially observable environments.
  - **Example**: A more advanced thermostat that learns patterns and adjusts settings accordingly.

- **Goal-Based Agents**:
  - **Components**: Goals, planning capabilities.
  - **Operation**: Takes actions to achieve specific goals, uses search and planning algorithms.
  - **Example**: Autonomous car planning a route to a destination.

- **Utility-Based Agents**:
  - **Components**: Utility function to evaluate the desirability of different states.
  - **Operation**: Chooses actions to maximize its utility, balancing multiple goals.
  - **Example**: Investment software that balances risk and return to maximize portfolio value.

- **Learning Agents**:
  - **Components**: Learning element, performance element, critic, problem generator.
  - **Operation**: Improves its performance based on past experiences.
  - **Example**: Spam filter that improves accuracy over time.

### Define Problem Solving & Problem Solving Agent

- **Problem Solving**:
  - **Definition**: The process of finding a sequence of actions that leads from the initial state to the goal state.
  - **Components**: Problem formulation, search for solutions, execution of the chosen solution.

- **Problem Solving Agent**:
  - **Definition**: An agent that uses a search algorithm to find a sequence of actions that leads to a goal state.
  - **Characteristics**:
    - Clearly defines the problem in terms of initial state, goal state, and possible actions.
    - Utilizes search strategies to explore the state space and find solutions.
  - **Example**: Chess-playing AI that plans moves ahead to checkmate the opponent.



----
----
----
## 5 Markers M2
1.	Explain Model Based Agents with the help of Architecture Diagram.

----
----
----




----
----
----
2.	Explain Goal Based Agents with the help of Architecture Diagram.

----
----
----




----
----
----
3.	Sketch & Discuss the Working and Real-Time Application of Utility-Based Agents.

----
----
----






----
----
----
4.	Formulate the 8-Puzzle problem Stepwise. Solve the problem given below.. Intial State -> Goal State.
•	Explain Learning Agent/Simple Reflex Agent with the help of Architecture Diagram.
•	Explain Water Jug Problem with Example.
•	Explain Intelligent Agent-Characteristics, Rules & Architecture.


----
----
----





----
----
----









## Module 3:- Searching Techniques
## 2 Markers M2

1.	Compare Depth limited Search Vs. Iterative Deepening Search.

----
----
----




----
----
----

2.	Outline Steps included in Genetic Algorithm.

----
----
----




----
----
----

3.	Give Algorithmic Steps for Genetic Algorithm.

----
----
----


----
----
----


4.	Discuss Drawbacks of Min-Max Algorithm.

----
----
----





----
----
----
5.	Differentiate A* & Best-First Search(Greedy).

----
----
----




----
----
----
6.	List Components of Constraint Satisfaction Problem.

•	Explain Adversial Search.
•	Advantages & Disadvantages – BFS & DFS, A*
•	Define – Uniform Cost Search, Bidirectional Search.
•	Tabu Search(hehe)

----
----
----




----
----
----
## 5 Markers M3
1.	Write a Short Note on Constraint Satisfaction Problem with Graph Colouring.

----
----
----



----
----
----
2.	Apply A* Algorithm to reach from A to H. Find Path Cost of the Same.(Note Stepwise Representation is Mandatory)

----
----
----



----
----
----
3.	Apply Alpha-Beta Pruning on example given below. Consider root node as Max Node. (Note Stepwise Representation is Mandatory)

----
----
----




----
----
----
4.	Compare Uninformed Search with Informed Search.
•	Explain Problems faced in Hill-Climbing Algorithm.
•	Explain Breadth-First Search/Depth Limited Search with an Example. 
•	How to Formally Define a Game? / Explain Formalization of a Game.


----
----
----



----
----
----