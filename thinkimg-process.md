# Thinking Process Guidelines

## Table of Contents

- [Thinking Process Guidelines](#thinking-process-guidelines)
  - [Table of Contents](#table-of-contents)
  - [1. Workflow Planning](#1-workflow-planning)
  - [2.1. Board Functions (Hardcoded)](#21-board-functions-hardcoded)
  - [2.2. Board Functions (Generated)](#22-board-functions-generated)
  - [3. Input Functions](#3-input-functions)
  - [4. Movement Functions](#4-movement-functions)
  - [5. Game Rule Functions](#5-game-rule-functions)
  - [6. Game Play Loop](#6-game-play-loop)
- [WRITE YOUR THINKING PROCESS BELOW. ](#write-your-thinking-process-below)

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>

↳ Draw a flowchart or write steps describing:

<p style="display: flex; align-items: center; gap: 1rem;">
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Game start</span>
<span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Read input</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Update position</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Check rules</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">End/Continue</span>
</p>

↳ Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>

↳ Prints the hardcoded board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>

↳ Creates a random board with player, hat, and holes.
↳ Prints the board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>

↳ Reads and validates user input (w, a, s, d).
↳ Logs invalid input.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>

↳ Updates playerRow / playerCol based on the move.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>

↳ Checks for out-of-bounds, falling into a hole, or finding the hat.

<span style="font-weight:bold; color: pink;">&nbsp;Game Rules:&nbsp;</span>

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

↳ Combine all functions into a playable loop.
↳ Ensure messages appear correctly, board prints at start, and invalid input is handled.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

---

# <p style="display: flex; align-items: center; gap: 0.5em;"><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 2rem;">WRITE YOUR THINKING PROCESS BELOW.</span><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 0;">&nbsp;</span></p>

<!-- Thinking Process -->

<!-- 1. Workflow Planning -->
<!-- ในการวางแผนการทำงานของเกมให้เป็นลำดับ  -->
<!-- ข้อ 1.1 ดูว่าค่าเริ่มต้นมีอะไรบ้่าง ซึ่งมี Board, Player Position และ Game State จากนั้นเมื่อเห็นว่ามันยังไม่เป็นบอร์ดเกม โดยใช้ printboard() ในการช่วยแสดง array ให้แสดงเป็นบอร์ด-->
<!-- ข้อ 1.2 รับค่า Input จากทิศทางจากผู้เล่น โดยใช้ getPlayerInput() -->
<!-- ข้อ 1.3 ทำการคำนวณพิกัดใหม่ตามทิศทาง โดยใช้ findNewPos() -->
<!-- ข้อ 1.4 ตรวจสอบกฎของเกม (ออกนอกพื้นที่, ตกหลุม, เจอหมวก) และมีการตรวจผลชนะหรือแพ้ โดยใช้ checkWinloss() -->
<!-- ข้อ 1.5 มีการ update ของเกม ถ้าชนะหรือแพ้ก็ให้เกมจบ แต่ถ้า PLAYER มีการเคลื่อนที่ไปในพื้นที่ว่าง ก็กลับเข้าไปในข้อ 1.2 คืออยู่ในสถานะเล่นต่ออยู่ โดยให้ PLAYER เดินต่อ  -->


<!-- 2. Board Functions (Hardcoded) -->
<!-- บอร์ดนี้ใช้ array 2 มิติในการเก็บข้อมูล ส่วนค่าคงที่คือ PLAYER, HAT, HOLE, EMPTY เพื่อให้อ่านโค้ดง่าย และ function คือ printBoard() โดยมีหน้าที่คือ ใช้ console.clear() เพื่อล้างบอร์ดเก่า  และมีหน้าที่วน loop แต่ละแถวโดยใช้ forEach แล้วใช้ .join() แปลง array เป็น String เพื่อแสดงผลเป็นพื้นที่บอร์ด ซึ่งมีผู้เล่น, หมวก, หลุม และพื้นที่ว่าง -->


<!-- 3. Input Functions -->
<!-- ส่วนรับค่าจากผู้เล่น โดยใช้ getPlayerInput()
Loop ใช้ while(true) เพื่อถามซ้ำจนกว่าจะได้คำตอบที่ถูก และแปลง Input เป็นตัวพิมพ์เล็กด้วย .toLowerCase() และมีการตรวจสอบว่าตรงกับ ['w', 'a', 's', 'd'] หรือไม่
ถ้าใช่ให้ Return ค่าและออกจากลูป
ถ้าไม่ให้แจ้งเตือน Invalid input แล้ววนถามใหม่ -->


<!-- 4. Movement Functions -->
<!-- ในส่วนคำนวณการเคลื่อนที่ โดยใช้ findNewPos()
ให้ Input รับทิศทางและพิกัดปัจจุบัน และในส่วนของ Logic ใช้ switch case เพื่อคำนวณพิกัดใหม่ (newRow, newCol)
w = แถวลดลง, s = แถวเพิ่มขึ้น
a = คอลัมน์ลดลง, d = คอลัมน์เพิ่มขึ้น
ในส่วน Output ให้ Return Object { newRow, newCol }เพื่อนำไปตรวจสอบต่อ -->


<!-- 5. Game Rule Functions -->
<!-- ส่วนการตรวจสอบเงื่อนไขแพ้ชนะ จะใช้ checkWinloss()
ส่วนที่ 1 เช็กว่าออกนอกกระดานหรือไม่ (Index < 0 หรือเกินความยาว Array) คือ Loss
ส่วนที่ 2 Tile Content: เช็กว่าช่องใหม่คืออะไร
- เจอ HAT คือ Win
- เจอ HOLE คือ Loss
ส่วนที่ 3 ถ้าเป็นพื้นที่ว่าง คือ Continue เพื่อให้เล่นต่อ   -->


<!-- 6. Game Play Loop -->
<!-- เป็นลูปหลักในการดำเนินเกม
Loop Condition: ทำงานตราบใดที่ playing === true
Process: 
      1.เรียก printBoard()
      2.เรียก getPlayerInput (รอจนกว่าจะพิมพ์ถูก)
      3.คำนวณตำแหน่งใหม่ findNewPos()
      4.ตรวจสอบผลลัพธ์ checkWinloss()
State Update:
  ถ้าเกมจบ: เปลี่ยน playing = false
  ถ้าเล่นต่อ: ย้าย PLAYER ไปช่องใหม่ และเปลี่ยนช่องเก่าเป็น EMPTY   -->


[Back to Table of Contents](#table-of-contents)

---
