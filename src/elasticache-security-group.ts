// https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html
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
      },
      "security_group_names": {
        "type": [
          "set",
          "string"
        ],
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

export interface ElasticacheSecurityGroupConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly securityGroupNames: string[];
}

// Resource

export class ElasticacheSecurityGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElasticacheSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_security_group',
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
    this._securityGroupNames = config.securityGroupNames;
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

  // security_group_names - computed: false, optional: false, required: true
  private _securityGroupNames: string[];
  public get securityGroupNames() {
    return this._securityGroupNames;
  }
  public set securityGroupNames(value: string[]) {
    this._securityGroupNames = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      security_group_names: this._securityGroupNames,
    };
  }
}
