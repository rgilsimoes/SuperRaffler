import ISO6991 from "iso-639-1";
import i18next from "i18next";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export function SelectLanguage() {
  const languages = i18next.languages;
  console.log("Languages: ", languages);

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          {
            languages.map((supportedLanguage: string) => {
              const nativeName = ISO6991.getNativeName(supportedLanguage);
              return (
                <SelectItem value={supportedLanguage}>
                  {nativeName}
                </SelectItem>
              );
            })
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
