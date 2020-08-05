// https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_zone": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "optional": true
      },
      "target_group_arn": {
        "type": "string",
        "required": true
      },
      "target_id": {
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

export interface LbTargetGroupAttachmentConfig extends TerraformMetaArguments {
  readonly availabilityZone?: string;
  readonly port?: number;
  readonly targetGroupArn: string;
  readonly targetId: string;
}

// Resource

export class LbTargetGroupAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbTargetGroupAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_target_group_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._port = config.port;
    this._targetGroupArn = config.targetGroupArn;
    this._targetId = config.targetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this._availabilityZone;
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // target_group_arn - computed: false, optional: false, required: true
  private _targetGroupArn: string;
  public get targetGroupArn() {
    return this._targetGroupArn;
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId: string;
  public get targetId() {
    return this._targetId;
  }
  public set targetId(value: string) {
    this._targetId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: this._availabilityZone,
      port: this._port,
      target_group_arn: this._targetGroupArn,
      target_id: this._targetId,
    };
  }
}
