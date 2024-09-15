/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lightsail_lb_certificate_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailLbCertificateAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lightsail_lb_certificate_attachment#certificate_name LightsailLbCertificateAttachment#certificate_name}
  */
  readonly certificateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lightsail_lb_certificate_attachment#id LightsailLbCertificateAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lightsail_lb_certificate_attachment#lb_name LightsailLbCertificateAttachment#lb_name}
  */
  readonly lbName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lightsail_lb_certificate_attachment aws_lightsail_lb_certificate_attachment}
*/
export class LightsailLbCertificateAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lightsail_lb_certificate_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LightsailLbCertificateAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LightsailLbCertificateAttachment to import
  * @param importFromId The id of the existing LightsailLbCertificateAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lightsail_lb_certificate_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LightsailLbCertificateAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lightsail_lb_certificate_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lightsail_lb_certificate_attachment aws_lightsail_lb_certificate_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailLbCertificateAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: LightsailLbCertificateAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_lb_certificate_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.67.0',
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
    this._certificateName = config.certificateName;
    this._id = config.id;
    this._lbName = config.lbName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_name - computed: false, optional: false, required: true
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
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

  // lb_name - computed: false, optional: false, required: true
  private _lbName?: string; 
  public get lbName() {
    return this.getStringAttribute('lb_name');
  }
  public set lbName(value: string) {
    this._lbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbNameInput() {
    return this._lbName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      id: cdktf.stringToTerraform(this._id),
      lb_name: cdktf.stringToTerraform(this._lbName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_name: {
        value: cdktf.stringToHclTerraform(this._certificateName),
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
      lb_name: {
        value: cdktf.stringToHclTerraform(this._lbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
