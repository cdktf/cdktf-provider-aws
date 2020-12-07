// https://www.terraform.io/docs/providers/aws/r/organizations_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationsAccountConfig extends cdktf.TerraformMetaArguments {
  readonly email: string;
  readonly iamUserAccessToBilling?: string;
  readonly name: string;
  readonly parentId?: string;
  readonly roleName?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class OrganizationsAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OrganizationsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_account',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._email = config.email;
    this._iamUserAccessToBilling = config.iamUserAccessToBilling;
    this._name = config.name;
    this._parentId = config.parentId;
    this._roleName = config.roleName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // email - computed: false, optional: false, required: true
  private _email: string;
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email
  }

  // iam_user_access_to_billing - computed: false, optional: true, required: false
  private _iamUserAccessToBilling?: string;
  public get iamUserAccessToBilling() {
    return this.getStringAttribute('iam_user_access_to_billing');
  }
  public set iamUserAccessToBilling(value: string ) {
    this._iamUserAccessToBilling = value;
  }
  public resetIamUserAccessToBilling() {
    this._iamUserAccessToBilling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamUserAccessToBillingInput() {
    return this._iamUserAccessToBilling
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // joined_method - computed: true, optional: false, required: false
  public get joinedMethod() {
    return this.getStringAttribute('joined_method');
  }

  // joined_timestamp - computed: true, optional: false, required: false
  public get joinedTimestamp() {
    return this.getStringAttribute('joined_timestamp');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string;
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string;
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string ) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      iam_user_access_to_billing: cdktf.stringToTerraform(this._iamUserAccessToBilling),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      role_name: cdktf.stringToTerraform(this._roleName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
