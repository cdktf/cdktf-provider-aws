// https://www.terraform.io/docs/providers/aws/r/ssm_activation.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "activation_code": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "expiration_date": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "expired": {
        "type": "bool",
        "computed": true
      },
      "iam_role": {
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
        "optional": true
      },
      "registration_count": {
        "type": "number",
        "computed": true
      },
      "registration_limit": {
        "type": "number",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsmActivationConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly expirationDate?: string;
  readonly iamRole: string;
  readonly name?: string;
  readonly registrationLimit?: number;
  readonly tags?: { [key: string]: string };
}

// Resource

export class SsmActivation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_activation',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._expirationDate = config.expirationDate;
    this._iamRole = config.iamRole;
    this._name = config.name;
    this._registrationLimit = config.registrationLimit;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_code - computed: true, optional: false, required: true
  public get activationCode() {
    return this.getStringAttribute('activation_code');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // expiration_date - computed: true, optional: true, required: false
  private _expirationDate?: string;
  public get expirationDate() {
    return this._expirationDate ?? this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string | undefined) {
    this._expirationDate = value;
  }

  // expired - computed: true, optional: false, required: true
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // iam_role - computed: false, optional: false, required: true
  private _iamRole: string;
  public get iamRole() {
    return this._iamRole;
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // registration_count - computed: true, optional: false, required: true
  public get registrationCount() {
    return this.getNumberAttribute('registration_count');
  }

  // registration_limit - computed: false, optional: true, required: false
  private _registrationLimit?: number;
  public get registrationLimit() {
    return this._registrationLimit;
  }
  public set registrationLimit(value: number | undefined) {
    this._registrationLimit = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      expiration_date: this._expirationDate,
      iam_role: this._iamRole,
      name: this._name,
      registration_limit: this._registrationLimit,
      tags: this._tags,
    };
  }
}
