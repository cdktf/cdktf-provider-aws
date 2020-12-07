// https://www.terraform.io/docs/providers/aws/r/data_aws_elb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElbConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsElbAccessLogs extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }
}
export class DataAwsElbHealthCheck extends cdktf.ComplexComputedList {

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}
export class DataAwsElbListener extends cdktf.ComplexComputedList {

  // instance_port - computed: true, optional: false, required: false
  public get instancePort() {
    return this.getNumberAttribute('instance_port');
  }

  // instance_protocol - computed: true, optional: false, required: false
  public get instanceProtocol() {
    return this.getStringAttribute('instance_protocol');
  }

  // lb_port - computed: true, optional: false, required: false
  public get lbPort() {
    return this.getNumberAttribute('lb_port');
  }

  // lb_protocol - computed: true, optional: false, required: false
  public get lbProtocol() {
    return this.getStringAttribute('lb_protocol');
  }

  // ssl_certificate_id - computed: true, optional: false, required: false
  public get sslCertificateId() {
    return this.getStringAttribute('ssl_certificate_id');
  }
}

// Resource

export class DataAwsElb extends cdktf.TerraformDataSource {

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

  // access_logs - computed: true, optional: false, required: false
  public accessLogs(index: string) {
    return new DataAwsElbAccessLogs(this, 'access_logs', index);
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // connection_draining - computed: true, optional: false, required: false
  public get connectionDraining() {
    return this.getBooleanAttribute('connection_draining');
  }

  // connection_draining_timeout - computed: true, optional: false, required: false
  public get connectionDrainingTimeout() {
    return this.getNumberAttribute('connection_draining_timeout');
  }

  // cross_zone_load_balancing - computed: true, optional: false, required: false
  public get crossZoneLoadBalancing() {
    return this.getBooleanAttribute('cross_zone_load_balancing');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // health_check - computed: true, optional: false, required: false
  public healthCheck(index: string) {
    return new DataAwsElbHealthCheck(this, 'health_check', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // internal - computed: true, optional: false, required: false
  public get internal() {
    return this.getBooleanAttribute('internal');
  }

  // listener - computed: true, optional: false, required: false
  public listener(index: string) {
    return new DataAwsElbListener(this, 'listener', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // source_security_group - computed: true, optional: false, required: false
  public get sourceSecurityGroup() {
    return this.getStringAttribute('source_security_group');
  }

  // source_security_group_id - computed: true, optional: false, required: false
  public get sourceSecurityGroupId() {
    return this.getStringAttribute('source_security_group_id');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
