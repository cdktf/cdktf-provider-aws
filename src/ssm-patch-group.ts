// https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "baseline_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "patch_group": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsmPatchGroupConfig extends TerraformMetaArguments {
  readonly baselineId: string;
  readonly patchGroup: string;
}

// Resource

export class SsmPatchGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmPatchGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_patch_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._baselineId = config.baselineId;
    this._patchGroup = config.patchGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_id - computed: false, optional: false, required: true
  private _baselineId: string;
  public get baselineId() {
    return this._baselineId;
  }
  public set baselineId(value: string) {
    this._baselineId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // patch_group - computed: false, optional: false, required: true
  private _patchGroup: string;
  public get patchGroup() {
    return this._patchGroup;
  }
  public set patchGroup(value: string) {
    this._patchGroup = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      baseline_id: this._baselineId,
      patch_group: this._patchGroup,
    };
  }
}
