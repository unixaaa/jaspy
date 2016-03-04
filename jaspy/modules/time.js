/*
 * Copyright (C) 2016, Maximilian Koehl <mail@koehlma.de>
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

jaspy.define_module('time', function (module, builtins) {
    module.define_function('sleep', function (seconds, state, frame) {
        switch (state) {
            case 0:
                setTimeout(function () {
                    jaspy.run(frame);
                }, jaspy.unpack_float(seconds) * 1000);
                jaspy.pause();
                return 1;
            case 1:
                break;
        }
    }, ['seconds']);

    module.define_function('time', function () {
        return jaspy.new_float((new Date()).getTime() / 1000);
    });
}, ['builtins']);
