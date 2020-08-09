// https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "account_alias": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IamAccountAliasConfig extends TerraformMetaArguments {
  readonly accountAlias: string;
}

// Resource

export class IamAccountAlias extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamAccountAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_account_alias',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountAlias = config.accountAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_alias - computed: false, optional: false, required: true
  private _accountAlias: string;
  public get accountAlias() {
    return this._accountAlias;
  }
  public set accountAlias(value: string) {
    this._accountAlias = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_alias: this._accountAlias,
    };
  }
}
