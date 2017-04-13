// Copyright (c) 2016-2017 Chef Software Inc. and/or applicable contributors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

extern crate env_logger;
extern crate habitat_eventsrv;
#[macro_use]
extern crate log;
extern crate protobuf;
extern crate rand;
extern crate time;
extern crate zmq;

use std::fs::File;
use std::io::prelude::*;
use std::path::Path;
// use std::thread::sleep;
// use std::time::Duration;
// use rand::{thread_rng, Rng};
use zmq::{Context, PUSH, Socket};
use protobuf::Message;

use habitat_eventsrv::message::event::{EventEnvelope, EventEnvelope_Type};

pub mod error;
use error::{Error, Result};

pub struct EventSrvClient {
    file_name: String,
    ports: Vec<String>,
    context: Context,
    socket: Socket,
}

impl EventSrvClient {
    pub fn new(file_name: String, ports: Vec<String>) -> Self {
        let ctx = Context::new();
        let socket = ctx.socket(PUSH).expect("error creating socket");

        // We want to intentionally set the high water mark for this socket to a low number. In the
        // event that one of our eventsrv processes crashes, this provides two benefits: it reduces
        // the number of message frames that get backed up and it also reduces the impact those
        // stale messages have when the dead process comes back and those messages get sent
        // through.
        let _ = socket.set_sndhwm(2);

        EventSrvClient {
            file_name: file_name,
            ports: ports,
            context: ctx,
            socket: socket,
        }
    }

    // main.rs will have to be rewritten to use the below methods

    // connect to an external process
    pub fn connect(&self) -> Result<()> {
        for p in &self.ports {
            let push_connect = format!("tcp://localhost:{}", p);
            println!("connecting to {}", push_connect);
            assert!(self.socket.connect(&push_connect).is_ok());
        }

        Ok(())
    }

    pub fn send(&self, mut event: EventEnvelope) -> Result<()> {
        // let path = Path::new(&self.file_name);
        // let display = path.display();
        // let mut file = File::open(&path)?;
        // let mut payload = String::new();
        // match file.read_to_string(&mut payload) {
        //     Err(e) => return Err(Error::from(e)),
        //     Ok(_) => debug!("{} contains:\n{}\n\n", display, payload),
        // }

        let timestamp = self.current_time();

        // let field_type = match path.extension() {
        //     None => EventEnvelope_Type::ProtoBuf,
        //     Some(ext) => {
        //         match ext.to_str() {
        //             Some("json") => EventEnvelope_Type::JSON,
        //             Some("toml") => EventEnvelope_Type::TOML,
        //             _ => panic!("Unknown file type {:?}", ext),
        //         }
        //     }
        // };

        // event.set_field_type(field_type);
        // event.set_payload(payload.as_bytes().to_vec());
        event.set_timestamp(timestamp);

        // let member_id = rng.choose(&members).unwrap();
        // event.set_member_id(*member_id);

        // let service_name = rng.choose(&services).unwrap();
        // event.set_service(String::from(*service_name));

        // println!("PUBLISHER: Timestamp {}", timestamp);
        // println!("PUBLISHER: Member ID {}", member_id);
        // println!("PUBLISHER: Service {}\n", service_name);

        self.socket
            .send(event.write_to_bytes().unwrap().as_slice(), 0)
            .unwrap();

        Ok(())
    }

    fn current_time(&self) -> u64 {
        let timespec = time::get_time();
        let sec: u64 = timespec.sec as u64 * 1000;
        let nsec: u64 = timespec.nsec as u64 / 1000 / 1000;
        sec + nsec
    }
}
