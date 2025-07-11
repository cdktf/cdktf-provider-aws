/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/sesv2_email_identity_mail_from_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSesv2EmailIdentityMailFromAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#email_identity DataAwsSesv2EmailIdentityMailFromAttributes#email_identity}
  */
  readonly emailIdentity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#id DataAwsSesv2EmailIdentityMailFromAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#region DataAwsSesv2EmailIdentityMailFromAttributes#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes}
*/
export class DataAwsSesv2EmailIdentityMailFromAttributes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_email_identity_mail_from_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSesv2EmailIdentityMailFromAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSesv2EmailIdentityMailFromAttributes to import
  * @param importFromId The id of the existing DataAwsSesv2EmailIdentityMailFromAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSesv2EmailIdentityMailFromAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sesv2_email_identity_mail_from_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSesv2EmailIdentityMailFromAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSesv2EmailIdentityMailFromAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_email_identity_mail_from_attributes',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.3.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailIdentity = config.emailIdentity;
    this._id = config.id;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // behavior_on_mx_failure - computed: true, optional: false, required: false
  public get behaviorOnMxFailure() {
    return this.getStringAttribute('behavior_on_mx_failure');
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

  // mail_from_domain - computed: true, optional: false, required: false
  public get mailFromDomain() {
    return this.getStringAttribute('mail_from_domain');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_identity: cdktf.stringToTerraform(this._emailIdentity),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
