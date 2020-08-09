// https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "accounts": {
        "type": [
          "list",
          [
            "object",
            {
              "arn": "string",
              "email": "string",
              "id": "string",
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "arn": {
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
        "required": true
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
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface OrganizationsOrganizationalUnitConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly parentId: string;
}
export class OrganizationsOrganizationalUnitAccounts extends ComplexComputedList {

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // email - computed: true, optional: false, required: true
  public get email() {
    return this.getStringAttribute('email');
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

export class OrganizationsOrganizationalUnit extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OrganizationsOrganizationalUnitConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_organizational_unit',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._parentId = config.parentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts - computed: true, optional: false, required: true
  public accounts(index: string) {
    return new OrganizationsOrganizationalUnitAccounts(this, 'accounts', index);
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
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
      name: this._name,
      parent_id: this._parentId,
    };
  }
}
