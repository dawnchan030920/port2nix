{
  description = "port2nix flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/release-23.11";
  };

  outputs = { self, nixpkgs, ...}:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      devShells.${system} = {
        default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_21
            nodePackages.typescript-language-server
            vscode-langservers-extracted
            nil
            marksman
            emmet-ls
          ];
        };
      };
    };
}
