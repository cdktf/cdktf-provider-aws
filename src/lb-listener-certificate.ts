// https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "certificate_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "listener_arn": {
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

export interface LbListenerCertificateConfig extends TerraformMetaArguments {
  readonly certificateArn: string;
  readonly listenerArn: string;
}

// Resource

export class LbListenerCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbListenerCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_listener_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateArn = config.certificateArn;
    this._listenerArn = config.listenerArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn: string;
  public get certificateArn() {
    return this._certificateArn;
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn: string;
  public get listenerArn() {
    return this._listenerArn;
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: this._certificateArn,
      listener_arn: this._listenerArn,
    };
  }
}
