// https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailStaticIpAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly instanceName: string;
  readonly staticIpName: string;
}

// Resource

export class LightsailStaticIpAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _instanceName: string;
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // static_ip_name - computed: false, optional: false, required: true
  private _staticIpName: string;
  public get staticIpName() {
    return this.getStringAttribute('static_ip_name');
  }
  public set staticIpName(value: string) {
    this._staticIpName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpNameInput() {
    return this._staticIpName
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
