// https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sesv2_email_identity_mail_from_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Sesv2EmailIdentityMailFromAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sesv2_email_identity_mail_from_attributes#behavior_on_mx_failure Sesv2EmailIdentityMailFromAttributes#behavior_on_mx_failure}
  */
  readonly behaviorOnMxFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sesv2_email_identity_mail_from_attributes#email_identity Sesv2EmailIdentityMailFromAttributes#email_identity}
  */
  readonly emailIdentity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sesv2_email_identity_mail_from_attributes#id Sesv2EmailIdentityMailFromAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sesv2_email_identity_mail_from_attributes#mail_from_domain Sesv2EmailIdentityMailFromAttributes#mail_from_domain}
  */
  readonly mailFromDomain?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes}
*/
export class Sesv2EmailIdentityMailFromAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_email_identity_mail_from_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sesv2EmailIdentityMailFromAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sesv2EmailIdentityMailFromAttributes to import
  * @param importFromId The id of the existing Sesv2EmailIdentityMailFromAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sesv2_email_identity_mail_from_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sesv2EmailIdentityMailFromAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sesv2_email_identity_mail_from_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Sesv2EmailIdentityMailFromAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: Sesv2EmailIdentityMailFromAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_email_identity_mail_from_attributes',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.83.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._behaviorOnMxFailure = config.behaviorOnMxFailure;
    this._emailIdentity = config.emailIdentity;
    this._id = config.id;
    this._mailFromDomain = config.mailFromDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // behavior_on_mx_failure - computed: false, optional: true, required: false
  private _behaviorOnMxFailure?: string; 
  public get behaviorOnMxFailure() {
    return this.getStringAttribute('behavior_on_mx_failure');
  }
  public set behaviorOnMxFailure(value: string) {
    this._behaviorOnMxFailure = value;
  }
  public resetBehaviorOnMxFailure() {
    this._behaviorOnMxFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorOnMxFailureInput() {
    return this._behaviorOnMxFailure;
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

  // mail_from_domain - computed: false, optional: true, required: false
  private _mailFromDomain?: string; 
  public get mailFromDomain() {
    return this.getStringAttribute('mail_from_domain');
  }
  public set mailFromDomain(value: string) {
    this._mailFromDomain = value;
  }
  public resetMailFromDomain() {
    this._mailFromDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromDomainInput() {
    return this._mailFromDomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      behavior_on_mx_failure: cdktf.stringToTerraform(this._behaviorOnMxFailure),
      email_identity: cdktf.stringToTerraform(this._emailIdentity),
      id: cdktf.stringToTerraform(this._id),
      mail_from_domain: cdktf.stringToTerraform(this._mailFromDomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      behavior_on_mx_failure: {
        value: cdktf.stringToHclTerraform(this._behaviorOnMxFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_identity: {
        value: cdktf.stringToHclTerraform(this._emailIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mail_from_domain: {
        value: cdktf.stringToHclTerraform(this._mailFromDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
