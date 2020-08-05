// https://www.terraform.io/docs/providers/aws/r/data_aws_ssm_patch_baseline.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "default_baseline": {
        "type": "bool",
        "optional": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "operating_system": {
        "type": "string",
        "optional": true
      },
      "owner": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsSsmPatchBaselineConfig extends TerraformMetaArguments {
  readonly defaultBaseline?: boolean;
  readonly namePrefix?: string;
  readonly operatingSystem?: string;
  readonly owner: string;
}

// Resource

export class DataAwsSsmPatchBaseline extends TerraformDataSource {

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
    return this._defaultBaseline;
  }
  public set defaultBaseline(value: boolean | undefined) {
    this._defaultBaseline = value;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string;
  public get operatingSystem() {
    return this._operatingSystem;
  }
  public set operatingSystem(value: string | undefined) {
    this._operatingSystem = value;
  }

  // owner - computed: false, optional: false, required: true
  private _owner: string;
  public get owner() {
    return this._owner;
  }
  public set owner(value: string) {
    this._owner = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_baseline: this._defaultBaseline,
      name_prefix: this._namePrefix,
      operating_system: this._operatingSystem,
      owner: this._owner,
    };
  }
}
