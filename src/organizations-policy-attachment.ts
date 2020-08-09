// https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html
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
      "policy_id": {
        "type": "string",
        "required": true
      },
      "target_id": {
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

export interface OrganizationsPolicyAttachmentConfig extends TerraformMetaArguments {
  readonly policyId: string;
  readonly targetId: string;
}

// Resource

export class OrganizationsPolicyAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OrganizationsPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyId = config.policyId;
    this._targetId = config.targetId;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId: string;
  public get policyId() {
    return this._policyId;
  }
  public set policyId(value: string) {
    this._policyId = value;
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId: string;
  public get targetId() {
    return this._targetId;
  }
  public set targetId(value: string) {
    this._targetId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_id: this._policyId,
      target_id: this._targetId,
    };
  }
}
