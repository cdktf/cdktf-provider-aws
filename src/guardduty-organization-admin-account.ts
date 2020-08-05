// https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "admin_account_id": {
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

export interface GuarddutyOrganizationAdminAccountConfig extends TerraformMetaArguments {
  readonly adminAccountId: string;
}

// Resource

export class GuarddutyOrganizationAdminAccount extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GuarddutyOrganizationAdminAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_organization_admin_account',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminAccountId = config.adminAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_account_id - computed: false, optional: false, required: true
  private _adminAccountId: string;
  public get adminAccountId() {
    return this._adminAccountId;
  }
  public set adminAccountId(value: string) {
    this._adminAccountId = value;
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
      admin_account_id: this._adminAccountId,
    };
  }
}
