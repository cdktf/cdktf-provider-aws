// https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_name": {
        "type": "string",
        "required": true
      },
      "ip_address": {
        "type": "string",
        "computed": true
      },
      "static_ip_name": {
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

export interface LightsailStaticIpAttachmentConfig extends TerraformMetaArguments {
  readonly instanceName: string;
  readonly staticIpName: string;
}

// Resource

export class LightsailStaticIpAttachment extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName: string;
  public get instanceName() {
    return this._instanceName;
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // static_ip_name - computed: false, optional: false, required: true
  private _staticIpName: string;
  public get staticIpName() {
    return this._staticIpName;
  }
  public set staticIpName(value: string) {
    this._staticIpName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_name: this._instanceName,
      static_ip_name: this._staticIpName,
    };
  }
}
