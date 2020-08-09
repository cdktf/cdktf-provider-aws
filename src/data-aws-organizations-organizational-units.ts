// https://www.terraform.io/docs/providers/aws/r/data_aws_organizations_organizational_units.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "children": {
        "type": [
          "list",
          [
            "object",
            {
              "arn": "string",
              "id": "string",
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "parent_id": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsOrganizationsOrganizationalUnitsConfig extends TerraformMetaArguments {
  readonly parentId: string;
}
export class DataAwsOrganizationsOrganizationalUnitsChildren extends ComplexComputedList {

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}

// Resource

export class DataAwsOrganizationsOrganizationalUnits extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsOrganizationsOrganizationalUnitsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_organizational_units',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parentId = config.parentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // children - computed: true, optional: false, required: true
  public children(index: string) {
    return new DataAwsOrganizationsOrganizationalUnitsChildren(this, 'children', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // parent_id - computed: false, optional: false, required: true
  private _parentId: string;
  public get parentId() {
    return this._parentId;
  }
  public set parentId(value: string) {
    this._parentId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      parent_id: this._parentId,
    };
  }
}
