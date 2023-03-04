// https://www.terraform.io/docs/providers/aws/r/lightsail_lb_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailLbAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_attachment#id LightsailLbAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_attachment#instance_name LightsailLbAttachment#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_attachment#lb_name LightsailLbAttachment#lb_name}
  */
  readonly lbName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_attachment aws_lightsail_lb_attachment}
*/
export class LightsailLbAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lightsail_lb_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_lb_attachment aws_lightsail_lb_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailLbAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: LightsailLbAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_lb_attachment',
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
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._lbName = config.lbName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
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
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      lb_name: cdktf.stringToTerraform(this._lbName),
    };
  }
}
