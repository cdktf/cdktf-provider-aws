// https://www.terraform.io/docs/providers/aws/r/data_aws_ami.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAmiConfig extends cdktf.TerraformMetaArguments {
  readonly executableUsers?: string[];
  readonly mostRecent?: boolean;
  readonly nameRegex?: string;
  readonly owners: string[];
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsAmiFilter[];
}
export class DataAwsAmiBlockDeviceMappings extends cdktf.ComplexComputedList {

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // ebs - computed: true, optional: false, required: false
  public get ebs() {
    return this.interpolationForAttribute('ebs') as any;
  }

  // no_device - computed: true, optional: false, required: false
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }

  // virtual_name - computed: true, optional: false, required: false
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}
export class DataAwsAmiProductCodes extends cdktf.ComplexComputedList {

  // product_code_id - computed: true, optional: false, required: false
  public get productCodeId() {
    return this.getStringAttribute('product_code_id');
  }

  // product_code_type - computed: true, optional: false, required: false
  public get productCodeType() {
    return this.getStringAttribute('product_code_type');
  }
}
export interface DataAwsAmiFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsAmiFilterToTerraform(struct?: DataAwsAmiFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsAmi extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAmiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ami',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._executableUsers = config.executableUsers;
    this._mostRecent = config.mostRecent;
    this._nameRegex = config.nameRegex;
    this._owners = config.owners;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // block_device_mappings - computed: true, optional: false, required: false
  public blockDeviceMappings(index: string) {
    return new DataAwsAmiBlockDeviceMappings(this, 'block_device_mappings', index);
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // executable_users - computed: false, optional: true, required: false
  private _executableUsers?: string[];
  public get executableUsers() {
    return this.getListAttribute('executable_users');
  }
  public set executableUsers(value: string[] ) {
    this._executableUsers = value;
  }
  public resetExecutableUsers() {
    this._executableUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executableUsersInput() {
    return this._executableUsers
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_location - computed: true, optional: false, required: false
  public get imageLocation() {
    return this.getStringAttribute('image_location');
  }

  // image_owner_alias - computed: true, optional: false, required: false
  public get imageOwnerAlias() {
    return this.getStringAttribute('image_owner_alias');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // kernel_id - computed: true, optional: false, required: false
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean;
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean ) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string;
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string ) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // owners - computed: false, optional: false, required: true
  private _owners: string[];
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // product_codes - computed: true, optional: false, required: false
  public productCodes(index: string) {
    return new DataAwsAmiProductCodes(this, 'product_codes', index);
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getBooleanAttribute('public');
  }

  // ramdisk_id - computed: true, optional: false, required: false
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }

  // root_device_name - computed: true, optional: false, required: false
  public get rootDeviceName() {
    return this.getStringAttribute('root_device_name');
  }

  // root_device_type - computed: true, optional: false, required: false
  public get rootDeviceType() {
    return this.getStringAttribute('root_device_type');
  }

  // root_snapshot_id - computed: true, optional: false, required: false
  public get rootSnapshotId() {
    return this.getStringAttribute('root_snapshot_id');
  }

  // sriov_net_support - computed: true, optional: false, required: false
  public get sriovNetSupport() {
    return this.getStringAttribute('sriov_net_support');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_reason - computed: true, optional: false, required: false
  public stateReason(key: string): string {
    return new cdktf.StringMap(this, 'state_reason').lookup(key);
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

  // virtualization_type - computed: true, optional: false, required: false
  public get virtualizationType() {
    return this.getStringAttribute('virtualization_type');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsAmiFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsAmiFilter[] ) {
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
      executable_users: cdktf.listMapper(cdktf.stringToTerraform)(this._executableUsers),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsAmiFilterToTerraform)(this._filter),
    };
  }
}
