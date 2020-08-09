// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "connection_events": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "connection_notification_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "notification_type": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "vpc_endpoint_id": {
        "type": "string",
        "optional": true
      },
      "vpc_endpoint_service_id": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcEndpointConnectionNotificationConfig extends TerraformMetaArguments {
  readonly connectionEvents: string[];
  readonly connectionNotificationArn: string;
  readonly vpcEndpointId?: string;
  readonly vpcEndpointServiceId?: string;
}

// Resource

export class VpcEndpointConnectionNotification extends TerraformResource {

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
    return this._connectionEvents;
  }
  public set connectionEvents(value: string[]) {
    this._connectionEvents = value;
  }

  // connection_notification_arn - computed: false, optional: false, required: true
  private _connectionNotificationArn: string;
  public get connectionNotificationArn() {
    return this._connectionNotificationArn;
  }
  public set connectionNotificationArn(value: string) {
    this._connectionNotificationArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // notification_type - computed: true, optional: false, required: true
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // vpc_endpoint_id - computed: false, optional: true, required: false
  private _vpcEndpointId?: string;
  public get vpcEndpointId() {
    return this._vpcEndpointId;
  }
  public set vpcEndpointId(value: string | undefined) {
    this._vpcEndpointId = value;
  }

  // vpc_endpoint_service_id - computed: false, optional: true, required: false
  private _vpcEndpointServiceId?: string;
  public get vpcEndpointServiceId() {
    return this._vpcEndpointServiceId;
  }
  public set vpcEndpointServiceId(value: string | undefined) {
    this._vpcEndpointServiceId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_events: this._connectionEvents,
      connection_notification_arn: this._connectionNotificationArn,
      vpc_endpoint_id: this._vpcEndpointId,
      vpc_endpoint_service_id: this._vpcEndpointServiceId,
    };
  }
}
