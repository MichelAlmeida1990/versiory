'use client';

import { useEffect, useRef, useState } from 'react';

interface Tetromino {
  data: number[][];
  colors: string[];
}

interface Piece {
  data: number[][];
  colors: string[];
  x: number;
  y: number;
  speed: number;
  id: number;
}

interface BoardCell {
  data: number;
  colors: string[];
}

const tetrominos: Tetromino[] = [
  {
    // Box
    colors: ['#3B54A5', '#7689C4', '#4F6FB6'],
    data: [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ]
  },
  {
    // Stick
    colors: ['#D61E3C', '#F16C6B', '#EC2A4B'],
    data: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0]
    ]
  },
  {
    // Z
    colors: ['#58B247', '#96CC6E', '#73BF44'],
    data: [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 1],
      [0, 0, 0, 0]
    ]
  },
  {
    // T
    colors: ['#3EAAD4', '#78CDF4', '#36C0F0'],
    data: [
      [0, 0, 0, 0],
      [0, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 0, 0]
    ]
  },
  {
    // S
    colors: ['#EC5E24', '#EA9A54', '#E47E25'],
    data: [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0]
    ]
  },
  {
    // Backwards L
    colors: ['#DC9F27', '#F6C564', '#F2B52A'],
    data: [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ]
  },
  {
    // L
    colors: ['#9E237E', '#C16FAD', '#B33F97'],
    data: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ]
  }
];

const TetrisBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isActive, setIsActive] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('Canvas not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('Canvas context not available');
      return;
    }

    console.log('TetrisBackground initialized');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log('Canvas resized:', canvas.width, 'x', canvas.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Game state
    let board: BoardCell[][] = [];
    let fallingPieces: Piece[] = [];
    let lastSpawn = Date.now();
    let spawnInterval = 1500; // Spawn new piece every 1.5 seconds
    let pieceId = 0;
    const unitSize = 20; // Smaller blocks for better fit
    let boardWidth = Math.floor(canvas.width / unitSize);
    let boardHeight = Math.floor(canvas.height / unitSize);

    // Initialize board with some existing blocks for better visual
    const initBoard = () => {
      board = [];
      boardWidth = Math.floor(canvas.width / unitSize);
      boardHeight = Math.floor(canvas.height / unitSize);

      for (let x = 0; x <= boardWidth; x++) {
        board[x] = [];
        for (let y = 0; y <= boardHeight; y++) {
          board[x][y] = {
            data: 0,
            colors: ['#000000', '#000000', '#000000']
          };
        }
      }

      // Add some initial blocks at the bottom for better visual
      for (let x = 0; x < boardWidth; x++) {
        if (Math.random() > 0.7) {
          const colors = [
            ['#3B54A5', '#7689C4', '#4F6FB6'],
            ['#D61E3C', '#F16C6B', '#EC2A4B'],
            ['#58B247', '#96CC6E', '#73BF44'],
            ['#3EAAD4', '#78CDF4', '#36C0F0'],
            ['#EC5E24', '#EA9A54', '#E47E25']
          ];
          const randomColors = colors[Math.floor(Math.random() * colors.length)];
          
          board[x][boardHeight - 1] = {
            data: 1,
            colors: randomColors
          };
          
          if (Math.random() > 0.5 && boardHeight > 1) {
            board[x][boardHeight - 2] = {
              data: 1,
              colors: randomColors
            };
          }
        }
      }
    };

    // Check if piece can move
    const checkMovement = (piece: Piece, newX: number, newY: number): boolean => {
      for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
          if (piece.data[x][y] === 1) {
            const newPosX = piece.x + x + newX;
            const newPosY = piece.y + y + newY;

            if (newPosX < 0 || newPosX >= boardWidth || newPosY >= boardHeight) {
              return false;
            }

            // Check if board position exists and has data
            if (newPosY >= 0 && board[newPosX] && board[newPosX][newPosY] && board[newPosX][newPosY].data === 1) {
              return false;
            }
          }
        }
      }
      return true;
    };

    // Create new falling piece
    const spawnNewPiece = () => {
      const pieceNum = Math.floor(Math.random() * tetrominos.length);
      const tetromino = tetrominos[pieceNum];
      
      // More random positioning to avoid stacking in same line
      const randomX = Math.floor(Math.random() * (boardWidth - 4));
      const randomY = -4 - Math.floor(Math.random() * 8); // Random starting height
      
      const newPiece: Piece = {
        data: tetromino.data,
        colors: tetromino.colors,
        x: randomX,
        y: randomY,
        speed: 0.02 + Math.random() * 0.05, // Extremely slow speed for very smooth fall
        id: pieceId++
      };

      fallingPieces.push(newPiece);
      console.log('New piece spawned:', newPiece.id);
    };

    // Fill board with piece
    const fillBoard = (piece: Piece) => {
      for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
          if (piece.data[x][y] === 1) {
            const boardX = piece.x + x;
            const boardY = piece.y + y;
            
            if (boardX >= 0 && boardX < boardWidth && boardY >= 0 && boardY < boardHeight && board[boardX] && board[boardX][boardY]) {
              board[boardX][boardY].data = 1;
              board[boardX][boardY].colors = piece.colors;
            }
          }
        }
      }
    };

    // Check and clear lines with better logic
    const checkLines = () => {
      for (let y = boardHeight - 1; y >= 0; y--) {
        let lineFull = true;
        let filledCells = 0;
        
        for (let x = 0; x < boardWidth; x++) {
          if (board[x] && board[x][y] && board[x][y].data === 1) {
            filledCells++;
          } else {
            lineFull = false;
          }
        }

        // Clear line if it's mostly full (more than 80%)
        if (filledCells > boardWidth * 0.8) {
          // Clear the line with fade effect
          for (let x = 0; x < boardWidth; x++) {
            if (board[x] && board[x][y]) {
              board[x][y].data = 0;
              board[x][y].colors = ['#000000', '#000000', '#000000'];
            }
          }

          // Move everything down
          for (let yy = y; yy > 0; yy--) {
            for (let x = 0; x < boardWidth; x++) {
              if (board[x] && board[x][yy] && board[x][yy - 1]) {
                board[x][yy].data = board[x][yy - 1].data;
                board[x][yy].colors = board[x][yy - 1].colors;
              }
            }
          }

          // Clear top line
          for (let x = 0; x < boardWidth; x++) {
            if (board[x] && board[x][0]) {
              board[x][0].data = 0;
              board[x][0].colors = ['#000000', '#000000', '#000000'];
            }
          }
        }
      }
    };

    // Render board with enhanced glow effect
    const renderBoard = () => {
      for (let x = 0; x < boardWidth; x++) {
        for (let y = 0; y < boardHeight; y++) {
          if (board[x] && board[x][y] && board[x][y].data === 1) {
            const bX = x * unitSize;
            const bY = y * unitSize;

            // Enhanced glow effect
            ctx.shadowColor = board[x][y].colors[0];
            ctx.shadowBlur = 15;
            
            // Main block with gradient
            const gradient = ctx.createLinearGradient(bX, bY, bX + unitSize, bY + unitSize);
            gradient.addColorStop(0, board[x][y].colors[0]);
            gradient.addColorStop(1, board[x][y].colors[1]);
            ctx.fillStyle = gradient;
            ctx.fillRect(bX, bY, unitSize, unitSize);

            // Inner highlight
            ctx.fillStyle = board[x][y].colors[1];
            ctx.fillRect(bX + 1, bY + 1, unitSize - 2, unitSize - 2);

            // Core
            ctx.fillStyle = board[x][y].colors[2];
            ctx.fillRect(bX + 2, bY + 2, unitSize - 4, unitSize - 4);

            // Border effect
            ctx.strokeStyle = board[x][y].colors[0];
            ctx.lineWidth = 1;
            ctx.strokeRect(bX, bY, unitSize, unitSize);

            ctx.shadowBlur = 0;
          }
        }
      }
    };

    // Render falling pieces with enhanced effects
    const renderFallingPieces = () => {
      fallingPieces.forEach((piece) => {
        for (let x = 0; x < 4; x++) {
          for (let y = 0; y < 4; y++) {
            if (piece.data[x][y] === 1) {
              const xPos = (piece.x + x) * unitSize;
              const yPos = (piece.y + y) * unitSize;

              if (yPos > -unitSize) {
                // Enhanced glow effect
                ctx.shadowColor = piece.colors[0];
                ctx.shadowBlur = 20;
                
                // Main block with gradient
                const gradient = ctx.createLinearGradient(xPos, yPos, xPos + unitSize, yPos + unitSize);
                gradient.addColorStop(0, piece.colors[0]);
                gradient.addColorStop(1, piece.colors[1]);
                ctx.fillStyle = gradient;
                ctx.fillRect(xPos, yPos, unitSize, unitSize);

                // Inner highlight
                ctx.fillStyle = piece.colors[1];
                ctx.fillRect(xPos + 1, yPos + 1, unitSize - 2, unitSize - 2);

                // Core
                ctx.fillStyle = piece.colors[2];
                ctx.fillRect(xPos + 2, yPos + 2, unitSize - 4, unitSize - 4);

                // Border effect
                ctx.strokeStyle = piece.colors[0];
                ctx.lineWidth = 1;
                ctx.strokeRect(xPos, yPos, unitSize, unitSize);

                ctx.shadowBlur = 0;
              }
            }
          }
        }
      });
    };

    // Update falling pieces with better collision detection
    const updateFallingPieces = () => {
      fallingPieces = fallingPieces.filter((piece) => {
        // Add frame rate control for slower movement
        piece.y += piece.speed * 0.5; // Reduce speed by half for even slower fall
        
        // Check if piece has landed
        if (!checkMovement(piece, 0, 0)) {
          // Move piece back up one step
          piece.y -= piece.speed * 0.5;
          
          // Fill board and check lines
          fillBoard(piece);
          checkLines();
          return false; // Remove from falling pieces
        }
        return true;
      });
    };

    // Add floating particles for tech effect
    const renderParticles = () => {
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3;
        const alpha = Math.random() * 0.4;
        
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.fillRect(x, y, size, size);
      }
    };

    // Add grid lines for better visual
    const renderGrid = () => {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = 0; x <= boardWidth; x++) {
        ctx.beginPath();
        ctx.moveTo(x * unitSize, 0);
        ctx.lineTo(x * unitSize, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y <= boardHeight; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * unitSize);
        ctx.lineTo(canvas.width, y * unitSize);
        ctx.stroke();
      }
    };

    // Game loop
    const gameLoop = () => {
      if (!isActive) return;

      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(1, '#1a1a2e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render grid
      renderGrid();

      // Spawn new pieces
      if (Date.now() - lastSpawn > spawnInterval) {
        spawnNewPiece();
        lastSpawn = Date.now();
        spawnInterval = 4000 + Math.random() * 2000; // Much longer spawn interval for less crowding
      }

      // Update and render
      updateFallingPieces();
      renderBoard();
      renderFallingPieces();
      renderParticles();

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    // Initialize and start
    initBoard();
    spawnNewPiece(); // Start with one piece
    gameLoop();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, isClient]);

  // Don't render on server
  if (!isClient) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default TetrisBackground; 