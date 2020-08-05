// https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "member_account_id": {
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

export interface MacieMemberAccountAssociationConfig extends TerraformMetaArguments {
  readonly memberAccountId: string;
}

// Resource

export class MacieMemberAccountAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MacieMemberAccountAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie_member_account_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._memberAccountId = config.memberAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // member_account_id - computed: false, optional: false, required: true
  private _memberAccountId: string;
  public get memberAccountId() {
    return this._memberAccountId;
  }
  public set memberAccountId(value: string) {
    this._memberAccountId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      member_account_id: this._memberAccountId,
    };
  }
}
