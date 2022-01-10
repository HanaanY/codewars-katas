import { bouncingBall } from '../src/bouncingBalls';
import assert = require('assert');

describe("Fixed Tests sumFracts", function() {
    it("Basic tests", function() {
        assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
        assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
        assert.strictEqual(bouncingBall(30, 0.75, 1.5), 21);
        assert.strictEqual(bouncingBall(30, 0.4, 10), 3);
    });
    it("returns -1 if params are invalid", function() {
        assert.strictEqual(bouncingBall(-1, 0.66, 1.5), -1);
        assert.strictEqual(bouncingBall(30, 1.00, 1.5), -1);
        assert.strictEqual(bouncingBall(10, 0.66, 11), -1);
    })
});