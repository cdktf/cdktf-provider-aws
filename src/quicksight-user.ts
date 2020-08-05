// https://www.terraform.io/docs/providers/aws/r/quicksight_user.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "aws_account_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "email": {
        "type": "string",
        "required": true
      },
      "iam_arn": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity_type": {
        "type": "string",
        "required": true
      },
      "namespace": {
        "type": "string",
        "optional": true
      },
      "session_name": {
        "type": "string",
        "optional": true
      },
      "user_name": {
        "type": "string",
        "optional": true
      },
      "user_role": {
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

export interface QuicksightUserConfig extends TerraformMetaArguments {
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

export class QuicksightUser extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string;
  public get awsAccountId() {
    return this._awsAccountId ?? this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string | undefined) {
    this._awsAccountId = value;
  }

  // email - computed: false, optional: false, required: true
  private _email: string;
  public get email() {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  // iam_arn - computed: false, optional: true, required: false
  private _iamArn?: string;
  public get iamArn() {
    return this._iamArn;
  }
  public set iamArn(value: string | undefined) {
    this._iamArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity_type - computed: false, optional: false, required: true
  private _identityType: string;
  public get identityType() {
    return this._identityType;
  }
  public set identityType(value: string) {
    this._identityType = value;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string;
  public get sessionName() {
    return this._sessionName;
  }
  public set sessionName(value: string | undefined) {
    this._sessionName = value;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string;
  public get userName() {
    return this._userName;
  }
  public set userName(value: string | undefined) {
    this._userName = value;
  }

  // user_role - computed: false, optional: false, required: true
  private _userRole: string;
  public get userRole() {
    return this._userRole;
  }
  public set userRole(value: string) {
    this._userRole = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: this._awsAccountId,
      email: this._email,
      iam_arn: this._iamArn,
      identity_type: this._identityType,
      namespace: this._namespace,
      session_name: this._sessionName,
      user_name: this._userName,
      user_role: this._userRole,
    };
  }
}
