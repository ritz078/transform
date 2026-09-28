import React, { useCallback, useMemo, useState } from "react";
import Monaco from "@components/Monaco";
import nested from "postcss-nested";
import rawTailwindConfig from "css-to-tailwindcss/node_modules/tailwindcss/stubs/simpleConfig.stub.js?raw";

import {
  Dialog,
  Pane,
  Icon,
  Tooltip,
  toaster,
  TextInput,
  Heading,
  Text,
  Switch
} from "evergreen-ui";
import { TailwindConverter, TailwindConverterConfig } from "css-to-tailwindcss";

import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import { useSettings } from "@hooks/useSettings";

interface RawSettings {
  tailwindConfig?: string;
  remInPx?: string | null;
  arbitraryPropertiesIsEnabled?: boolean;
}

const evalConfig = (configValue?: string) =>
  eval(`const module = {}; ${configValue}; module.exports;`);

// The converter ships a separate PostCSS version with incompatible node types.
const DEFAULT_POSTCSS_PLUGINS = ([
  nested
] as unknown) as TailwindConverterConfig["postCSSPlugins"];

function decorateResult(result: string) {
  return `/*
  Based on TailwindCSS recommendations,
  consider using classes instead of the \`@apply\` directive
  @see https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction
*/
${result}`;
}

function CssToTailwindSettings({
  open,
  toggle,
  onConfirm,
  settings
}: {
  open: boolean;
  toggle: () => void;
  onConfirm: (props: {
    tailwindConfig?: string;
    remInPx?: string | null;
    arbitraryPropertiesIsEnabled: boolean;
  }) => boolean | Promise<boolean>;
  settings: RawSettings;
}) {
  const [tailwindConfig, setTailwindConfig] = useState(settings.tailwindConfig);
  const [remInPx, setRemInPx] = useState(settings.remInPx);
  const [
    arbitraryPropertiesIsEnabled,
    setArbitraryPropertiesIsEnabled
  ] = useState(settings.arbitraryPropertiesIsEnabled || false);

  return (
    <Dialog
      title="Converter Configuration"
      isShown={open}
      onCloseComplete={toggle}
      onConfirm={async close => {
        const isSuccess = await onConfirm({
          tailwindConfig,
          remInPx,
          arbitraryPropertiesIsEnabled
        });
        if (isSuccess) {
          close();
        }
      }}
      onCancel={close => {
        setTailwindConfig(settings.tailwindConfig);
        setRemInPx(settings.remInPx);
        close();
      }}
    >
      <>
        <Heading>Root font size in pixels</Heading>
        <Text>Used to convert rem CSS values to their px equivalents</Text>
        <TextInput
          borderBottomRightRadius={0}
          borderTopRightRadius={0}
          placeholder="Enter URL"
          onChange={e => setRemInPx(e.target.value)}
          value={remInPx || ""}
          marginTop="4px"
        />

        <Heading marginTop={24}>
          Enable arbitrary properties
          <a
            href="https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties"
            target="_blank"
            style={{ verticalAlign: "middle" }}
          >
            <Tooltip content="Open the TailwindCSS docs...">
              <Icon icon="help" color="info" marginLeft={8} size={16} />
            </Tooltip>
          </a>
        </Heading>
        <Switch
          checked={arbitraryPropertiesIsEnabled}
          onChange={e =>
            setArbitraryPropertiesIsEnabled((e.target as any).checked)
          }
          marginTop="4px"
        />

        <Heading marginTop={24}>
          Tailwind configuration
          <a
            href="https://tailwindcss.com/docs/configuration"
            target="_blank"
            style={{ verticalAlign: "middle" }}
          >
            <Tooltip content="Open the TailwindCSS docs...">
              <Icon icon="help" color="info" marginLeft={8} size={16} />
            </Tooltip>
          </a>
        </Heading>
        <Pane height={300}>
          <Monaco
            language="javascript"
            value={tailwindConfig}
            onChange={setTailwindConfig}
            options={{
              fontSize: 14,
              readOnly: false,
              codeLens: false,
              fontFamily: "Menlo, Consolas, monospace, sans-serif",
              minimap: {
                enabled: false
              },
              quickSuggestions: false,
              lineNumbers: "on",
              renderValidationDecorations: "off"
            }}
            height={300}
          />
        </Pane>
      </>
    </Dialog>
  );
}

const defaultSettings: RawSettings = {
  tailwindConfig: rawTailwindConfig,
  remInPx: "16",
  arbitraryPropertiesIsEnabled: false
};

export default function CssToTailwind3() {
  const [rawSettings, setRawSettings] = useSettings(
    "css-to-tailwind",
    defaultSettings
  ) as [RawSettings, React.Dispatch<React.SetStateAction<RawSettings>>];

  const converterConfig = useMemo(() => {
    const config: Partial<TailwindConverterConfig> = {
      remInPx: rawSettings.remInPx ? parseInt(rawSettings.remInPx, 10) : null,
      arbitraryPropertiesIsEnabled: !!rawSettings.arbitraryPropertiesIsEnabled
    };

    if (isNaN(Number(config["remInPx"]))) {
      toaster.danger(
        "Invalid `REM in PIXELS` value (only `number` or `null` allowed). Fallback to `null` value"
      );

      config["remInPx"] = null;
    }

    try {
      config["tailwindConfig"] = evalConfig(rawSettings.tailwindConfig);
    } catch (e) {
      toaster.danger(
        "Something went wrong trying to resolve TailwindCSS config. Fallback to default tailwind config",
        {
          description: e.message
        }
      );
    }

    return config;
  }, [rawSettings]);

  const tailwindConverter = useMemo(() => {
    try {
      return new TailwindConverter({
        postCSSPlugins: DEFAULT_POSTCSS_PLUGINS,
        ...converterConfig
      });
    } catch (e) {
      toaster.danger(
        "Unable to create TailwindConverter. Invalid configuration passed",
        {
          description: e.message
        }
      );

      return new TailwindConverter({ postCSSPlugins: DEFAULT_POSTCSS_PLUGINS });
    }
  }, [converterConfig]);

  const transformer = useCallback<Transformer>(
    async ({ value }) => {
      try {
        return decorateResult(
          (await tailwindConverter.convertCSS(value)).convertedRoot.toString()
        );
      } catch (e) {
        toaster.danger("Unable to convert CSS", {
          description: e.message
        });

        return "Unable to convert CSS";
      }
    },
    [tailwindConverter]
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="CSS"
      editorLanguage="css"
      editorDefaultValue="css3"
      resultTitle="TailwindCSS 3.x"
      resultLanguage="css"
      settings={rawSettings}
      editorProps={{
        settingElement: ({ open, toggle }) => {
          return (
            <CssToTailwindSettings
              key={`${rawSettings.tailwindConfig}${rawSettings.remInPx}`}
              open={open}
              toggle={toggle}
              onConfirm={async rawSettings => {
                setRawSettings(rawSettings);

                return true;
              }}
              settings={rawSettings}
            />
          );
        }
      }}
    />
  );
}
