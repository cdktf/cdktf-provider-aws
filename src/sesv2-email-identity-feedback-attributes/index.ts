// https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Sesv2EmailIdentityFeedbackAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}
  */
  readonly emailForwardingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}
  */
  readonly emailIdentity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes aws_sesv2_email_identity_feedback_attributes}
*/
export class Sesv2EmailIdentityFeedbackAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_email_identity_feedback_attributes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes aws_sesv2_email_identity_feedback_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Sesv2EmailIdentityFeedbackAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: Sesv2EmailIdentityFeedbackAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_email_identity_feedback_attributes',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailForwardingEnabled = config.emailForwardingEnabled;
    this._emailIdentity = config.emailIdentity;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_forwarding_enabled - computed: false, optional: true, required: false
  private _emailForwardingEnabled?: boolean | cdktf.IResolvable; 
  public get emailForwardingEnabled() {
    return this.getBooleanAttribute('email_forwarding_enabled');
  }
  public set emailForwardingEnabled(value: boolean | cdktf.IResolvable) {
    this._emailForwardingEnabled = value;
  }
  public resetEmailForwardingEnabled() {
    this._emailForwardingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailForwardingEnabledInput() {
    return this._emailForwardingEnabled;
  }

  // email_identity - computed: false, optional: false, required: true
  private _emailIdentity?: string; 
  public get emailIdentity() {
    return this.getStringAttribute('email_identity');
  }
  public set emailIdentity(value: string) {
    this._emailIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdentityInput() {
    return this._emailIdentity;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_forwarding_enabled: cdktf.booleanToTerraform(this._emailForwardingEnabled),
      email_identity: cdktf.stringToTerraform(this._emailIdentity),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
