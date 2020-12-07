// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndpointConnectionNotificationConfig extends cdktf.TerraformMetaArguments {
  readonly connectionEvents: string[];
  readonly connectionNotificationArn: string;
  readonly vpcEndpointId?: string;
  readonly vpcEndpointServiceId?: string;
}

// Resource

export class VpcEndpointConnectionNotification extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcEndpointConnectionNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint_connection_notification',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectionEvents = config.connectionEvents;
    this._connectionNotificationArn = config.connectionNotificationArn;
    this._vpcEndpointId = config.vpcEndpointId;
    this._vpcEndpointServiceId = config.vpcEndpointServiceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_events - computed: false, optional: false, required: true
  private _connectionEvents: string[];
  public get connectionEvents() {
    return this.getListAttribute('connection_events');
  }
  public set connectionEvents(value: string[]) {
    this._connectionEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionEventsInput() {
    return this._connectionEvents
  }

  // connection_notification_arn - computed: false, optional: false, required: true
  private _connectionNotificationArn: string;
  public get connectionNotificationArn() {
    return this.getStringAttribute('connection_notification_arn');
  }
  public set connectionNotificationArn(value: string) {
    this._connectionNotificationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNotificationArnInput() {
    return this._connectionNotificationArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_type - computed: true, optional: false, required: false
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vpc_endpoint_id - computed: false, optional: true, required: false
  private _vpcEndpointId?: string;
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string ) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId
  }

  // vpc_endpoint_service_id - computed: false, optional: true, required: false
  private _vpcEndpointServiceId?: string;
  public get vpcEndpointServiceId() {
    return this.getStringAttribute('vpc_endpoint_service_id');
  }
  public set vpcEndpointServiceId(value: string ) {
    this._vpcEndpointServiceId = value;
  }
  public resetVpcEndpointServiceId() {
    this._vpcEndpointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointServiceIdInput() {
    return this._vpcEndpointServiceId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_events: cdktf.listMapper(cdktf.stringToTerraform)(this._connectionEvents),
      connection_notification_arn: cdktf.stringToTerraform(this._connectionNotificationArn),
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
      vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId),
    };
  }
}
