// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AppStream
*/
export interface AppstreamUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#authentication_type AppstreamUser#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#enabled AppstreamUser#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#first_name AppstreamUser#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#last_name AppstreamUser#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#send_email_notification AppstreamUser#send_email_notification}
  */
  readonly sendEmailNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html#user_name AppstreamUser#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html aws_appstream_user}
*/
export class AppstreamUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appstream_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_user.html aws_appstream_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppstreamUserConfig
  */
  public constructor(scope: Construct, id: string, config: AppstreamUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appstream_user',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authenticationType = config.authenticationType;
    this._enabled = config.enabled;
    this._firstName = config.firstName;
    this._lastName = config.lastName;
    this._sendEmailNotification = config.sendEmailNotification;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // send_email_notification - computed: false, optional: true, required: false
  private _sendEmailNotification?: boolean | cdktf.IResolvable; 
  public get sendEmailNotification() {
    return this.getBooleanAttribute('send_email_notification') as any;
  }
  public set sendEmailNotification(value: boolean | cdktf.IResolvable) {
    this._sendEmailNotification = value;
  }
  public resetSendEmailNotification() {
    this._sendEmailNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailNotificationInput() {
    return this._sendEmailNotification;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      first_name: cdktf.stringToTerraform(this._firstName),
      last_name: cdktf.stringToTerraform(this._lastName),
      send_email_notification: cdktf.booleanToTerraform(this._sendEmailNotification),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }
}
