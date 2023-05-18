/* Copyright © 2023 Vector Express Ltd. All rights limited.
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

import fs from 'node:fs';
import vectorExpress from '../src/index.js';

const file = fs.readFileSync(__dirname + '/files/drawing2.svg');

/* process svg file */
vectorExpress.process('svg', ['exclude-groups'], { file }).then((res) => {
	console.log(res);
	/*
    link to the processed version of the original file :
    https://vector.express/api/v2/public/files/545f7dd0-bc3e-4b61-963d-1064bdba8864.svg
  */
});
