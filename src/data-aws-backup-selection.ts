// https://www.terraform.io/docs/providers/aws/r/data_aws_backup_selection.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "iam_role_arn": {
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
      "plan_id": {
        "type": "string",
        "required": true
      },
      "resources": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "selection_id": {
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

export interface DataAwsBackupSelectionConfig extends TerraformMetaArguments {
  readonly planId: string;
  readonly selectionId: string;
}

// Resource

export class DataAwsBackupSelection extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsBackupSelectionConfig) {
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
    this._planId = config.planId;
    this._selectionId = config.selectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iam_role_arn - computed: true, optional: false, required: true
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
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

  // plan_id - computed: false, optional: false, required: true
  private _planId: string;
  public get planId() {
    return this._planId;
  }
  public set planId(value: string) {
    this._planId = value;
  }

  // resources - computed: true, optional: false, required: true
  public get resources() {
    return this.getListAttribute('resources');
  }

  // selection_id - computed: false, optional: false, required: true
  private _selectionId: string;
  public get selectionId() {
    return this._selectionId;
  }
  public set selectionId(value: string) {
    this._selectionId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      plan_id: this._planId,
      selection_id: this._selectionId,
    };
  }
}
