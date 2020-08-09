// https://www.terraform.io/docs/providers/aws/r/flow_log.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "eni_id": {
        "type": "string",
        "optional": true
      },
      "iam_role_arn": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "log_destination": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "log_destination_type": {
        "type": "string",
        "optional": true
      },
      "log_format": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "log_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "max_aggregation_interval": {
        "type": "number",
        "optional": true
      },
      "subnet_id": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "traffic_type": {
        "type": "string",
        "required": true
      },
      "vpc_id": {
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

export interface FlowLogConfig extends TerraformMetaArguments {
  readonly eniId?: string;
  readonly iamRoleArn?: string;
  readonly logDestination?: string;
  readonly logDestinationType?: string;
  readonly logFormat?: string;
  readonly logGroupName?: string;
  readonly maxAggregationInterval?: number;
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
  readonly trafficType: string;
  readonly vpcId?: string;
}

// Resource

export class FlowLog extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FlowLogConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_flow_log',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eniId = config.eniId;
    this._iamRoleArn = config.iamRoleArn;
    this._logDestination = config.logDestination;
    this._logDestinationType = config.logDestinationType;
    this._logFormat = config.logFormat;
    this._logGroupName = config.logGroupName;
    this._maxAggregationInterval = config.maxAggregationInterval;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._trafficType = config.trafficType;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // eni_id - computed: false, optional: true, required: false
  private _eniId?: string;
  public get eniId() {
    return this._eniId;
  }
  public set eniId(value: string | undefined) {
    this._eniId = value;
  }

  // iam_role_arn - computed: false, optional: true, required: false
  private _iamRoleArn?: string;
  public get iamRoleArn() {
    return this._iamRoleArn;
  }
  public set iamRoleArn(value: string | undefined) {
    this._iamRoleArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // log_destination - computed: true, optional: true, required: false
  private _logDestination?: string;
  public get logDestination() {
    return this._logDestination ?? this.getStringAttribute('log_destination');
  }
  public set logDestination(value: string | undefined) {
    this._logDestination = value;
  }

  // log_destination_type - computed: false, optional: true, required: false
  private _logDestinationType?: string;
  public get logDestinationType() {
    return this._logDestinationType;
  }
  public set logDestinationType(value: string | undefined) {
    this._logDestinationType = value;
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string;
  public get logFormat() {
    return this._logFormat ?? this.getStringAttribute('log_format');
  }
  public set logFormat(value: string | undefined) {
    this._logFormat = value;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string;
  public get logGroupName() {
    return this._logGroupName ?? this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string | undefined) {
    this._logGroupName = value;
  }

  // max_aggregation_interval - computed: false, optional: true, required: false
  private _maxAggregationInterval?: number;
  public get maxAggregationInterval() {
    return this._maxAggregationInterval;
  }
  public set maxAggregationInterval(value: number | undefined) {
    this._maxAggregationInterval = value;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // traffic_type - computed: false, optional: false, required: true
  private _trafficType: string;
  public get trafficType() {
    return this._trafficType;
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      eni_id: this._eniId,
      iam_role_arn: this._iamRoleArn,
      log_destination: this._logDestination,
      log_destination_type: this._logDestinationType,
      log_format: this._logFormat,
      log_group_name: this._logGroupName,
      max_aggregation_interval: this._maxAggregationInterval,
      subnet_id: this._subnetId,
      tags: this._tags,
      traffic_type: this._trafficType,
      vpc_id: this._vpcId,
    };
  }
}
