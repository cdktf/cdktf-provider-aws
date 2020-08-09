// https://www.terraform.io/docs/providers/aws/r/data_aws_elb.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_logs": {
        "type": [
          "list",
          [
            "object",
            {
              "bucket": "string",
              "bucket_prefix": "string",
              "enabled": "bool",
              "interval": "number"
            }
          ]
        ],
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "availability_zones": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "connection_draining": {
        "type": "bool",
        "computed": true
      },
      "connection_draining_timeout": {
        "type": "number",
        "computed": true
      },
      "cross_zone_load_balancing": {
        "type": "bool",
        "computed": true
      },
      "dns_name": {
        "type": "string",
        "computed": true
      },
      "health_check": {
        "type": [
          "list",
          [
            "object",
            {
              "healthy_threshold": "number",
              "interval": "number",
              "target": "string",
              "timeout": "number",
              "unhealthy_threshold": "number"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "idle_timeout": {
        "type": "number",
        "computed": true
      },
      "instances": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "internal": {
        "type": "bool",
        "computed": true
      },
      "listener": {
        "type": [
          "set",
          [
            "object",
            {
              "instance_port": "number",
              "instance_protocol": "string",
              "lb_port": "number",
              "lb_protocol": "string",
              "ssl_certificate_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "security_groups": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "source_security_group": {
        "type": "string",
        "computed": true
      },
      "source_security_group_id": {
        "type": "string",
        "computed": true
      },
      "subnets": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "zone_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsElbConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsElbAccessLogs extends ComplexComputedList {

  // bucket - computed: true, optional: false, required: true
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // bucket_prefix - computed: true, optional: false, required: true
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // interval - computed: true, optional: false, required: true
  public get interval() {
    return this.getNumberAttribute('interval');
  }
}
export class DataAwsElbHealthCheck extends ComplexComputedList {

  // healthy_threshold - computed: true, optional: false, required: true
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // interval - computed: true, optional: false, required: true
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // target - computed: true, optional: false, required: true
  public get target() {
    return this.getStringAttribute('target');
  }

  // timeout - computed: true, optional: false, required: true
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: false, required: true
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}
export class DataAwsElbListener extends ComplexComputedList {

  // instance_port - computed: true, optional: false, required: true
  public get instancePort() {
    return this.getNumberAttribute('instance_port');
  }

  // instance_protocol - computed: true, optional: false, required: true
  public get instanceProtocol() {
    return this.getStringAttribute('instance_protocol');
  }

  // lb_port - computed: true, optional: false, required: true
  public get lbPort() {
    return this.getNumberAttribute('lb_port');
  }

  // lb_protocol - computed: true, optional: false, required: true
  public get lbProtocol() {
    return this.getStringAttribute('lb_protocol');
  }

  // ssl_certificate_id - computed: true, optional: false, required: true
  public get sslCertificateId() {
    return this.getStringAttribute('ssl_certificate_id');
  }
}

// Resource

export class DataAwsElb extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsElbConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elb',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_logs - computed: true, optional: false, required: true
  public accessLogs(index: string) {
    return new DataAwsElbAccessLogs(this, 'access_logs', index);
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // connection_draining - computed: true, optional: false, required: true
  public get connectionDraining() {
    return this.getBooleanAttribute('connection_draining');
  }

  // connection_draining_timeout - computed: true, optional: false, required: true
  public get connectionDrainingTimeout() {
    return this.getNumberAttribute('connection_draining_timeout');
  }

  // cross_zone_load_balancing - computed: true, optional: false, required: true
  public get crossZoneLoadBalancing() {
    return this.getBooleanAttribute('cross_zone_load_balancing');
  }

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // health_check - computed: true, optional: false, required: true
  public healthCheck(index: string) {
    return new DataAwsElbHealthCheck(this, 'health_check', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idle_timeout - computed: true, optional: false, required: true
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }

  // instances - computed: true, optional: false, required: true
  public get instances() {
    return this.getListAttribute('instances');
  }

  // internal - computed: true, optional: false, required: true
  public get internal() {
    return this.getBooleanAttribute('internal');
  }

  // listener - computed: true, optional: false, required: true
  public listener(index: string) {
    return new DataAwsElbListener(this, 'listener', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // security_groups - computed: true, optional: false, required: true
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // source_security_group - computed: true, optional: false, required: true
  public get sourceSecurityGroup() {
    return this.getStringAttribute('source_security_group');
  }

  // source_security_group_id - computed: true, optional: false, required: true
  public get sourceSecurityGroupId() {
    return this.getStringAttribute('source_security_group_id');
  }

  // subnets - computed: true, optional: false, required: true
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // zone_id - computed: true, optional: false, required: true
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
    };
  }
}
