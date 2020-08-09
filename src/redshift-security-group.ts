// https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "ingress": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "cidr": {
              "type": "string",
              "optional": true
            },
            "security_group_name": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "security_group_owner_id": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "min_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RedshiftSecurityGroupConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  /** ingress block */
  readonly ingress: RedshiftSecurityGroupIngress[];
}
export interface RedshiftSecurityGroupIngress {
  readonly cidr?: string;
  readonly securityGroupName?: string;
  readonly securityGroupOwnerId?: string;
}

// Resource

export class RedshiftSecurityGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedshiftSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_security_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._ingress = config.ingress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // ingress - computed: false, optional: false, required: true
  private _ingress: RedshiftSecurityGroupIngress[];
  public get ingress() {
    return this._ingress;
  }
  public set ingress(value: RedshiftSecurityGroupIngress[]) {
    this._ingress = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      ingress: this._ingress,
    };
  }
}
