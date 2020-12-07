// https://www.terraform.io/docs/providers/aws/r/data_aws_network_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsNetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsNetworkInterfaceFilter[];
}
export class DataAwsNetworkInterfaceAssociation extends cdktf.ComplexComputedList {

  // allocation_id - computed: true, optional: false, required: false
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // ip_owner_id - computed: true, optional: false, required: false
  public get ipOwnerId() {
    return this.getStringAttribute('ip_owner_id');
  }

  // public_dns_name - computed: true, optional: false, required: false
  public get publicDnsName() {
    return this.getStringAttribute('public_dns_name');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
}
export class DataAwsNetworkInterfaceAttachment extends cdktf.ComplexComputedList {

  // attachment_id - computed: true, optional: false, required: false
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }

  // device_index - computed: true, optional: false, required: false
  public get deviceIndex() {
    return this.getNumberAttribute('device_index');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_owner_id - computed: true, optional: false, required: false
  public get instanceOwnerId() {
    return this.getStringAttribute('instance_owner_id');
  }
}
export interface DataAwsNetworkInterfaceFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsNetworkInterfaceFilterToTerraform(struct?: DataAwsNetworkInterfaceFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsNetworkInterface extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsNetworkInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association - computed: true, optional: false, required: false
  public association(index: string) {
    return new DataAwsNetworkInterfaceAssociation(this, 'association', index);
  }

  // attachment - computed: true, optional: false, required: false
  public attachment(index: string) {
    return new DataAwsNetworkInterfaceAttachment(this, 'attachment', index);
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // private_dns_name - computed: true, optional: false, required: false
  public get privateDnsName() {
    return this.getStringAttribute('private_dns_name');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // private_ips - computed: true, optional: false, required: false
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }

  // requester_id - computed: true, optional: false, required: false
  public get requesterId() {
    return this.getStringAttribute('requester_id');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsNetworkInterfaceFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsNetworkInterfaceFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsNetworkInterfaceFilterToTerraform)(this._filter),
    };
  }
}
