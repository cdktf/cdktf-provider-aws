// https://www.terraform.io/docs/providers/aws/r/lightsail_lb_certificate_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailLbCertificateAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_certificate_attachment#certificate_name LightsailLbCertificateAttachment#certificate_name}
  */
  readonly certificateName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_certificate_attachment#id LightsailLbCertificateAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_certificate_attachment#lb_name LightsailLbCertificateAttachment#lb_name}
  */
  readonly lbName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_certificate_attachment aws_lightsail_lb_certificate_attachment}
*/
export class LightsailLbCertificateAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lightsail_lb_certificate_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_certificate_attachment aws_lightsail_lb_certificate_attachment} Resource
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
}
