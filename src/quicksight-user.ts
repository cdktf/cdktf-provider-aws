// https://www.terraform.io/docs/providers/aws/r/quicksight_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightUserConfig extends cdktf.TerraformMetaArguments {
  readonly awsAccountId?: string;
  readonly email: string;
  readonly iamArn?: string;
  readonly identityType: string;
  readonly namespace?: string;
  readonly sessionName?: string;
  readonly userName?: string;
  readonly userRole: string;
}

// Resource

export class QuicksightUser extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: QuicksightUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_user',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsAccountId = config.awsAccountId;
    this._email = config.email;
    this._iamArn = config.iamArn;
    this._identityType = config.identityType;
    this._namespace = config.namespace;
    this._sessionName = config.sessionName;
    this._userName = config.userName;
    this._userRole = config.userRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string;
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId
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

  // iam_arn - computed: false, optional: true, required: false
  private _iamArn?: string;
  public get iamArn() {
    return this.getStringAttribute('iam_arn');
  }
  public set iamArn(value: string ) {
    this._iamArn = value;
  }
  public resetIamArn() {
    this._iamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamArnInput() {
    return this._iamArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_type - computed: false, optional: false, required: true
  private _identityType: string;
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string;
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string ) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string;
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string ) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string;
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string ) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName
  }

  // user_role - computed: false, optional: false, required: true
  private _userRole: string;
  public get userRole() {
    return this.getStringAttribute('user_role');
  }
  public set userRole(value: string) {
    this._userRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleInput() {
    return this._userRole
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      email: cdktf.stringToTerraform(this._email),
      iam_arn: cdktf.stringToTerraform(this._iamArn),
      identity_type: cdktf.stringToTerraform(this._identityType),
      namespace: cdktf.stringToTerraform(this._namespace),
      session_name: cdktf.stringToTerraform(this._sessionName),
      user_name: cdktf.stringToTerraform(this._userName),
      user_role: cdktf.stringToTerraform(this._userRole),
    };
  }
}
