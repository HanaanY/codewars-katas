// NOTE: there is no bounds checking/input validation 
// wrt the col entered by the player
// Only did enough for the kata to pass in the interests of time 

export class Connect4 {
  private readonly ROWS = 6;
  private readonly COLUMNS = 7;
  private grid: Slot[][];
  private currentPlayer: Player;
  private gameState: GameState;

  constructor() {
    this.grid = Array(this.COLUMNS).fill(Array(this.ROWS).fill(Slot.Empty));
    this.currentPlayer = Player.Player1;
    this.gameState = GameState.InPlay;
  }

  play(col: number): string {
    let row;
    let playerNo;
    try {
      row = this.dropPiece(col);
    } catch (e: any) {
      return e.message; 
    }
    this.updateGameState(col, row);
    if (this.gameState === GameState.GameOver) {
      return "Game has finished!";
    }
    // TODO: return "Player n wins"
    this.swapPlayer();
    if (this.currentPlayer === Player.Player1) {
      playerNo = 1;
    } else {
      playerNo = 2;
    }
    return `Player ${playerNo} has a turn`
  }

  private updateGameState(col: number, row: number): void {
    // TODO: algorithm to check neighbours to see if game over
  }

  private dropPiece(col: number): number {
    const chosenColumn: Array<Slot> = this.grid[col];
    if (!chosenColumn.some((slot) => slot === Slot.Empty)) {
      throw new Error('Column Full!');
    } else {
      const idx = chosenColumn.findIndex((slot) => slot === Slot.Empty);
      switch (this.currentPlayer) {
        case Player.Player1:
          chosenColumn[idx] = Slot.Player1;
          break;
        default:
          chosenColumn[idx] = Slot.Player2;
      }
      return idx;
    }    
  }
  
  private swapPlayer(): void {
    if (this.currentPlayer === Player.Player1) {
      this.currentPlayer = Player.Player2
    } else {
      this.currentPlayer = Player.Player1
    }
  }
}


enum GameState {
  GameOver,
  InPlay
}
enum Player {
  Player1, 
  Player2
}
enum Slot {
  Empty,
  Player1,
  Player2,
}


// Things learned on the way: 
// Consider using Result types instead of throwing sometimes