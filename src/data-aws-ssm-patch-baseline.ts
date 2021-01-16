// https://www.terraform.io/docs/providers/aws/r/data_aws_ssm_patch_baseline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSsmPatchBaselineConfig extends cdktf.TerraformMetaArguments {
  readonly defaultBaseline?: boolean;
  readonly namePrefix?: string;
  readonly operatingSystem?: string;
  readonly owner: string;
}

// Resource

export class DataAwsSsmPatchBaseline extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSsmPatchBaselineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_patch_baseline',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultBaseline = config.defaultBaseline;
    this._namePrefix = config.namePrefix;
    this._operatingSystem = config.operatingSystem;
    this._owner = config.owner;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_baseline - computed: false, optional: true, required: false
  private _defaultBaseline?: boolean;
  public get defaultBaseline() {
    return this.getBooleanAttribute('default_baseline');
  }
  public set defaultBaseline(value: boolean ) {
    this._defaultBaseline = value;
  }
  public resetDefaultBaseline() {
    this._defaultBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBaselineInput() {
    return this._defaultBaseline
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string;
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string ) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem
  }

  // owner - computed: false, optional: false, required: true
  private _owner: string;
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_baseline: cdktf.booleanToTerraform(this._defaultBaseline),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      owner: cdktf.stringToTerraform(this._owner),
    };
  }
}
