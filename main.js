"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
function printBoard(board) {
	console.clear(); // call console.clear() before print each move
	// ใช้ forEach ในการวนลูปของแต่ละแถว
	// ใช้ join('') เพื่อรวมพวกอักขระในแถวให้เป็น String เดียวกัน));
	board.forEach(row => {
		console.log(row.join(''));
	});
}

// Input Functions
function getPlayerInput() {
while (true) {
		const input = prompt("Which way? (w/a/s/d): ").toLowerCase();
		// เป็นการตรวจ input เข้ามาว่า ใส่ตัวอักษรถูกไหม และถ้าตัวอักษรเป็นตัวพิมพ์ใหญ่มาก็จะแปลงเป็นตัวพิมพ์เล็ก
		if (['w', 'a', 's', 'd'].includes(input)) {
			return input;
		} else {
			console.log("Invalid input.: Use w, a, s or d");
		}
	}
}

// Movement Functions
function findNewPos(input, currentRow, currentCol) {
	let newRow = currentRow;
	let newCol = currentCol;

	switch (input) {
		case 'w':	// Up
			newRow -= 1;
			break;
		case 's':	// Down
			newRow += 1;
			break;
		case 'a':	// Left
			newCol -= 1;	
			break;
		case 'd':	// Right
			newCol += 1;
			break;
	}
	return { newRow, newCol};
}


// Game Rule Functions
function checkWinloss(newRow, newCol, board) {
	// 1.ตรวจสอบ ถ้าเดินออกไปนอกพื้นที่ ก็คือ แพ้
	if (newRow < 0 || newRow >= board.length || newCol < 0 || newCol >= board[0].length) {
		console.log("💀Game Over!💀 You moved outside the field.");
		return 'loss';
	}
	// 2.ตรวจสอบ Hat(ชนะ) กับ Hole (แพ้) 
	const nextTile = board[newRow][newCol];
	if (nextTile === HAT) {
		console.log("🎉Congrats🎉 You found the hat! You win.");
		return 'win';
	}
	else if (nextTile === HOLE) {
		console.log("💀Game Over!💀 You fell down a hole.");	
		return 'loss';
	}
	// 3. ถ้า empty ให้เล่นต่อ
	return 'continue';
}


// Game play loop
while (playing) {
	printBoard(board);
	// อ่าน Input
	const move = getPlayerInput();
	if (!move) {
		continue;  // ถ้าไม่ถูกต้อง ให้ข้ามไปเริ่มลูปใหม่
	}

	//คำนวณตำแหน่งใหม่ 
	const { newRow, newCol } = findNewPos(move, playerRow, playerCol);
	
	// ตรวจสอบกฎ
	const gameStatus = checkWinloss(newRow, newCol, board);
	if (gameStatus === 'win' || gameStatus === 'loss') {
		playing = false;   // ให้จบเกม
	} else {
		// เล่นต่อ: อัปเดตบอร์ดและตำแหน่ง
		// อัพเดตตำแหน่งเก่าให้เป็นเส้นทางที่เดินแล้ว (EMPTY) 
		board[playerRow][playerCol] = EMPTY;
		// อัพเดตตำแหน่งหใม่ ให้เป็นผู้เล่น (PLAYER)
		playerRow = newRow;
		playerCol = newCol;
		board[playerRow][playerCol] = PLAYER;
		
		// วนกลับไปเริ่มลูปใหม่ (printBoard)
	}
}






