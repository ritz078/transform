import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import yargsParse from "yargs-parser";
import objectHas from "lodash/has";
// const yargsUnparse = require('yargs-unparser')
import * as React from "react";

export default function() {
  const transformer = useCallback(({ value }) => {
    const npmArgv = yargsParse(value);
    console.log("npmArgv :", npmArgv);
    const yarnArgv = {
      _: ["yarn"],
      flags: []
    };
    //State 0
    const packageManager = npmArgv._[0];
    switch (packageManager) {
      case "npm":
        //continue to next State
        break;
      case "npx":
        //error npx not supported
        break;
      default:
        // assume npm was un/intentionally missed and add "npm"
        npmArgv._.unshift("npm");
        break;
    }

    //state 1
    const npmCommand = npmArgv._[1];
    const npmCmdList = [
      "ci",
      "install-ci-test",
      "install",
      "install-test",
      "uninstall",
      "cache",
      "config",
      "set",
      "get",
      "update",
      "outdated",
      "prune",
      "pack",
      "dedupe",
      "hook",

      "rebuild",
      "link",

      "publish",
      "star",
      "stars",
      "adduser",
      "login", // This is an alias for `adduser` but it can be confusing
      "logout",
      "unpublish",
      "owner",
      "access",
      "team",
      "deprecate",
      "shrinkwrap",
      "token",
      "profile",
      "audit",
      "org",

      "help",
      "help-search",
      "ls",
      "search",
      "view",
      "init",
      "version",
      "edit",
      "explore",
      "docs",
      "repo",
      "bugs",
      "root",
      "prefix",
      "bin",
      "whoami",
      "dist-tag",
      "ping",

      "test",
      "stop",
      "start",
      "restart",
      "run-script",
      "completion",
      "doctor"
    ];

    const npmCmdListHas = function(searchTerm) {
      return npmCmdList.indexOf(searchTerm) >= 0;
    };
    if (npmCmdListHas(npmCommand)) {
      console.log("has ", npmCommand);
    }
    switch (npmCommand) {
      case "init":
        if (npmArgv._.length > 2) {
          yarnArgv._.push("create");
          yarnArgv._.push(npmArgv._[2]);
          if (npmArgv._.length > 3) yarnArgv._.push(npmArgv._[3]);
        } else {
          yarnArgv._.push("init");
        }
        if (objectHas(npmArgv, "yes")) {
          yarnArgv.flags.push("--yes");
        } else if (objectHas(npmArgv, "y")) {
          yarnArgv.flags.push("-y");
        }
        if (objectHas(npmArgv, "scope")) {
          yarnArgv.flags.push("--private");
        }
        break;
      case "i":
      case "install":
        yarnArgv._.push("install");
        for (const [flag, value] of Object.entries(npmArgv)) {
          if (value === true) {
            switch (flag) {
              case "production":
                yarnArgv.flags.push("--production");
                break;
            }
            switch (flag) {
              case "production":
                yarnArgv.flags.push("--production");
                break;
              case "no-package-lock":
                yarnArgv.flags.push("--no-lockfile");
                break;
              case "P":
              case "save-prod":
                yarnArgv.flags.push("--production");
                break;
              case "save":
                yarnArgv._.pop();
                yarnArgv._.push("add");
                break;
              case "save-optional":
                yarnArgv.flags.push("--production");
                break;
              case "D":
              case "save-dev":
                yarnArgv._.pop();
                yarnArgv._.push("add");
                yarnArgv.flags.push("--dev");
                break;
              case "O": //Capital O(Alphabetic o) not 0(Zero)
              case "optional":
                break;
              // case :

              // break;case :

              // break;case :

              // break;case :

              // break;case :

              // break;case :

              // break;case :

              // break;case :

              // break;case :

              // break;
              default:
                break;
            }
          }
        }
        yarnArgv._.push(...npmArgv._.slice(2));
        break;
      default:
        break;
    }
    console.log("yarnArgv", yarnArgv);
    console.log(
      "yarn cmd:",
      yarnArgv._.join(" ") + " " + yarnArgv.flags.join(" ")
    );
    console.log("typeof value :", typeof value);
    return yarnArgv._.join(" ") + " " + yarnArgv.flags.join(" ");
    return value;
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="npm"
      editorLanguage="markdown"
      resultTitle="yarn"
      resultLanguage={"markdown"}
    />
  );
}
