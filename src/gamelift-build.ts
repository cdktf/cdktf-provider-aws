// https://www.terraform.io/docs/providers/aws/r/gamelift_build.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameliftBuildConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly operatingSystem: string;
  readonly tags?: { [key: string]: string };
  readonly version?: string;
  /** storage_location block */
  readonly storageLocation: GameliftBuildStorageLocation[];
}
export interface GameliftBuildStorageLocation {
  readonly bucket: string;
  readonly key: string;
  readonly roleArn: string;
}

function gameliftBuildStorageLocationToTerraform(struct?: GameliftBuildStorageLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


// Resource

export class GameliftBuild extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GameliftBuildConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_gamelift_build',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._tags = config.tags;
    this._version = config.version;
    this._storageLocation = config.storageLocation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem: string;
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // version - computed: false, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string ) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // storage_location - computed: false, optional: false, required: true
  private _storageLocation: GameliftBuildStorageLocation[];
  public get storageLocation() {
    return this.interpolationForAttribute('storage_location') as any;
  }
  public set storageLocation(value: GameliftBuildStorageLocation[]) {
    this._storageLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      storage_location: cdktf.listMapper(gameliftBuildStorageLocationToTerraform)(this._storageLocation),
    };
  }
}
