// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lightsail
*/
export interface LightsailStaticIpAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment#instance_name LightsailStaticIpAttachment#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment#static_ip_name LightsailStaticIpAttachment#static_ip_name}
  */
  readonly staticIpName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment aws_lightsail_static_ip_attachment}
*/
export class LightsailStaticIpAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lightsail_static_ip_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment aws_lightsail_static_ip_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailStaticIpAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: LightsailStaticIpAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_static_ip_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceName = config.instanceName;
    this._staticIpName = config.staticIpName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // static_ip_name - computed: false, optional: false, required: true
  private _staticIpName?: string; 
  public get staticIpName() {
    return this.getStringAttribute('static_ip_name');
  }
  public set staticIpName(value: string) {
    this._staticIpName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpNameInput() {
    return this._staticIpName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_name: cdktf.stringToTerraform(this._instanceName),
      static_ip_name: cdktf.stringToTerraform(this._staticIpName),
    };
  }
}
