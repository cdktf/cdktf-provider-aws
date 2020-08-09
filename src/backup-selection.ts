// https://www.terraform.io/docs/providers/aws/r/backup_selection.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "iam_role_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "plan_id": {
        "type": "string",
        "required": true
      },
      "resources": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "selection_tag": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "required": true
            },
            "type": {
              "type": "string",
              "required": true
            },
            "value": {
              "type": "string",
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BackupSelectionConfig extends TerraformMetaArguments {
  readonly iamRoleArn: string;
  readonly name: string;
  readonly planId: string;
  readonly resources?: string[];
  /** selection_tag block */
  readonly selectionTag?: BackupSelectionSelectionTag[];
}
export interface BackupSelectionSelectionTag {
  readonly key: string;
  readonly type: string;
  readonly value: string;
}

// Resource

export class BackupSelection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_selection',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._iamRoleArn = config.iamRoleArn;
    this._name = config.name;
    this._planId = config.planId;
    this._resources = config.resources;
    this._selectionTag = config.selectionTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn: string;
  public get iamRoleArn() {
    return this._iamRoleArn;
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // plan_id - computed: false, optional: false, required: true
  private _planId: string;
  public get planId() {
    return this._planId;
  }
  public set planId(value: string) {
    this._planId = value;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[];
  public get resources() {
    return this._resources;
  }
  public set resources(value: string[] | undefined) {
    this._resources = value;
  }

  // selection_tag - computed: false, optional: true, required: false
  private _selectionTag?: BackupSelectionSelectionTag[];
  public get selectionTag() {
    return this._selectionTag;
  }
  public set selectionTag(value: BackupSelectionSelectionTag[] | undefined) {
    this._selectionTag = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      iam_role_arn: this._iamRoleArn,
      name: this._name,
      plan_id: this._planId,
      resources: this._resources,
      selection_tag: this._selectionTag,
    };
  }
}
