// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Directory Service
*/
export interface DataAwsDirectoryServiceDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html#directory_id DataAwsDirectoryServiceDirectory#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html#tags DataAwsDirectoryServiceDirectory#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsDirectoryServiceDirectoryConnectSettings extends cdktf.ComplexComputedList {

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // connect_ips - computed: true, optional: false, required: false
  public get connectIps() {
    return this.getListAttribute('connect_ips');
  }

  // customer_dns_ips - computed: true, optional: false, required: false
  public get customerDnsIps() {
    return this.getListAttribute('customer_dns_ips');
  }

  // customer_username - computed: true, optional: false, required: false
  public get customerUsername() {
    return this.getStringAttribute('customer_username');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export class DataAwsDirectoryServiceDirectoryVpcSettings extends cdktf.ComplexComputedList {

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html aws_directory_service_directory}
*/
export class DataAwsDirectoryServiceDirectory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_directory_service_directory";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html aws_directory_service_directory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDirectoryServiceDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDirectoryServiceDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_directory',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._directoryId = config.directoryId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_url - computed: true, optional: false, required: false
  public get accessUrl() {
    return this.getStringAttribute('access_url');
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // connect_settings - computed: true, optional: false, required: false
  public connectSettings(index: string) {
    return new DataAwsDirectoryServiceDirectoryConnectSettings(this, 'connect_settings', index);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // dns_ip_addresses - computed: true, optional: false, required: false
  public get dnsIpAddresses() {
    return this.getListAttribute('dns_ip_addresses');
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // enable_sso - computed: true, optional: false, required: false
  public get enableSso() {
    return this.getBooleanAttribute('enable_sso') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // short_name - computed: true, optional: false, required: false
  public get shortName() {
    return this.getStringAttribute('short_name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // tags - computed: false, optional: true, required: false
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_settings - computed: true, optional: false, required: false
  public vpcSettings(index: string) {
    return new DataAwsDirectoryServiceDirectoryVpcSettings(this, 'vpc_settings', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: cdktf.stringToTerraform(this._directoryId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
