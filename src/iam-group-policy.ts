// https://www.terraform.io/docs/providers/aws/r/iam_group_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "group": {
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
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "policy": {
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

export interface IamGroupPolicyConfig extends TerraformMetaArguments {
  readonly group: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly policy: string;
}

// Resource

export class IamGroupPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamGroupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_group_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._group = config.group;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group: string;
  public get group() {
    return this._group;
  }
  public set group(value: string) {
    this._group = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // policy - computed: false, optional: false, required: true
  private _policy: string;
  public get policy() {
    return this._policy;
  }
  public set policy(value: string) {
    this._policy = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      group: this._group,
      name: this._name,
      name_prefix: this._namePrefix,
      policy: this._policy,
    };
  }
}
