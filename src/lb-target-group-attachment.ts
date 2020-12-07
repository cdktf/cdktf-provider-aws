// https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbTargetGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly availabilityZone?: string;
  readonly port?: number;
  readonly targetGroupArn: string;
  readonly targetId: string;
}

// Resource

export class LbTargetGroupAttachment extends cdktf.TerraformResource {

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
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string ) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // target_group_arn - computed: false, optional: false, required: true
  private _targetGroupArn: string;
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId: string;
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      port: cdktf.numberToTerraform(this._port),
      target_group_arn: cdktf.stringToTerraform(this._targetGroupArn),
      target_id: cdktf.stringToTerraform(this._targetId),
    };
  }
}
