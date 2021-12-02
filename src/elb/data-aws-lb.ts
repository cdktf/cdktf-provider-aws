// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Load Balancer
*/
export interface DataAwsLbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb.html#name DataAwsLb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb.html#tags DataAwsLb#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsLbAccessLogs extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export class DataAwsLbSubnetMapping extends cdktf.ComplexComputedList {

  // allocation_id - computed: true, optional: false, required: false
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // outpost_id - computed: true, optional: false, required: false
  public get outpostId() {
    return this.getStringAttribute('outpost_id');
  }

  // private_ipv4_address - computed: true, optional: false, required: false
  public get privateIpv4Address() {
    return this.getStringAttribute('private_ipv4_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb.html aws_lb}
*/
export class DataAwsLb extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lb";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb.html aws_lb} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLbConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsLbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lb',
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
    return new DataAwsLbAccessLogs(this, 'access_logs', index);
  }

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // arn_suffix - computed: true, optional: false, required: false
  public get arnSuffix() {
    return this.getStringAttribute('arn_suffix');
  }

  // customer_owned_ipv4_pool - computed: true, optional: false, required: false
  public get customerOwnedIpv4Pool() {
    return this.getStringAttribute('customer_owned_ipv4_pool');
  }

  // desync_mitigation_mode - computed: true, optional: false, required: false
  public get desyncMitigationMode() {
    return this.getStringAttribute('desync_mitigation_mode');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // drop_invalid_header_fields - computed: true, optional: false, required: false
  public get dropInvalidHeaderFields() {
    return this.getBooleanAttribute('drop_invalid_header_fields') as any;
  }

  // enable_deletion_protection - computed: true, optional: false, required: false
  public get enableDeletionProtection() {
    return this.getBooleanAttribute('enable_deletion_protection') as any;
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2') as any;
  }

  // enable_waf_fail_open - computed: true, optional: false, required: false
  public get enableWafFailOpen() {
    return this.getBooleanAttribute('enable_waf_fail_open') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }

  // internal - computed: true, optional: false, required: false
  public get internal() {
    return this.getBooleanAttribute('internal') as any;
  }

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // load_balancer_type - computed: true, optional: false, required: false
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnet_mapping - computed: true, optional: false, required: false
  public subnetMapping(index: string) {
    return new DataAwsLbSubnetMapping(this, 'subnet_mapping', index);
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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
