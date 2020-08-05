// https://www.terraform.io/docs/providers/aws/r/data_aws_launch_template.html
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
      "block_device_mappings": {
        "type": [
          "list",
          [
            "object",
            {
              "device_name": "string",
              "ebs": [
                "list",
                [
                  "object",
                  {
                    "delete_on_termination": "string",
                    "encrypted": "string",
                    "iops": "number",
                    "kms_key_id": "string",
                    "snapshot_id": "string",
                    "volume_size": "number",
                    "volume_type": "string"
                  }
                ]
              ],
              "no_device": "string",
              "virtual_name": "string"
            }
          ]
        ],
        "computed": true
      },
      "credit_specification": {
        "type": [
          "list",
          [
            "object",
            {
              "cpu_credits": "string"
            }
          ]
        ],
        "computed": true
      },
      "default_version": {
        "type": "number",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "disable_api_termination": {
        "type": "bool",
        "computed": true
      },
      "ebs_optimized": {
        "type": "string",
        "computed": true
      },
      "elastic_gpu_specifications": {
        "type": [
          "list",
          [
            "object",
            {
              "type": "string"
            }
          ]
        ],
        "computed": true
      },
      "hibernation_options": {
        "type": [
          "list",
          [
            "object",
            {
              "configured": "bool"
            }
          ]
        ],
        "computed": true
      },
      "iam_instance_profile": {
        "type": [
          "list",
          [
            "object",
            {
              "arn": "string",
              "name": "string"
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
      "image_id": {
        "type": "string",
        "computed": true
      },
      "instance_initiated_shutdown_behavior": {
        "type": "string",
        "computed": true
      },
      "instance_market_options": {
        "type": [
          "list",
          [
            "object",
            {
              "market_type": "string",
              "spot_options": [
                "list",
                [
                  "object",
                  {
                    "block_duration_minutes": "number",
                    "instance_interruption_behavior": "string",
                    "max_price": "string",
                    "spot_instance_type": "string",
                    "valid_until": "string"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "instance_type": {
        "type": "string",
        "computed": true
      },
      "kernel_id": {
        "type": "string",
        "computed": true
      },
      "key_name": {
        "type": "string",
        "computed": true
      },
      "latest_version": {
        "type": "number",
        "computed": true
      },
      "metadata_options": {
        "type": [
          "list",
          [
            "object",
            {
              "http_endpoint": "string",
              "http_put_response_hop_limit": "number",
              "http_tokens": "string"
            }
          ]
        ],
        "computed": true
      },
      "monitoring": {
        "type": [
          "list",
          [
            "object",
            {
              "enabled": "bool"
            }
          ]
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "network_interfaces": {
        "type": [
          "list",
          [
            "object",
            {
              "associate_public_ip_address": "string",
              "delete_on_termination": "bool",
              "description": "string",
              "device_index": "number",
              "ipv4_address_count": "number",
              "ipv4_addresses": [
                "set",
                "string"
              ],
              "ipv6_address_count": "number",
              "ipv6_addresses": [
                "set",
                "string"
              ],
              "network_interface_id": "string",
              "private_ip_address": "string",
              "security_groups": [
                "set",
                "string"
              ],
              "subnet_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "placement": {
        "type": [
          "list",
          [
            "object",
            {
              "affinity": "string",
              "availability_zone": "string",
              "group_name": "string",
              "host_id": "string",
              "partition_number": "number",
              "spread_domain": "string",
              "tenancy": "string"
            }
          ]
        ],
        "computed": true
      },
      "ram_disk_id": {
        "type": "string",
        "computed": true
      },
      "security_group_names": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "tag_specifications": {
        "type": [
          "list",
          [
            "object",
            {
              "resource_type": "string",
              "tags": [
                "map",
                "string"
              ]
            }
          ]
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
      "user_data": {
        "type": "string",
        "computed": true
      },
      "vpc_security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
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

export interface DataAwsLaunchTemplateConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsLaunchTemplateFilter[];
}
export class DataAwsLaunchTemplateBlockDeviceMappingsEbs extends ComplexComputedList {

  // delete_on_termination - computed: true, optional: false, required: true
  public get deleteOnTermination() {
    return this.getStringAttribute('delete_on_termination');
  }

  // encrypted - computed: true, optional: false, required: true
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: true
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // snapshot_id - computed: true, optional: false, required: true
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // volume_size - computed: true, optional: false, required: true
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: true
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export class DataAwsLaunchTemplateBlockDeviceMappings extends ComplexComputedList {

  // device_name - computed: true, optional: false, required: true
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // ebs - computed: true, optional: false, required: true
  public get ebs() {
    return 'not implemented' as any;
  }

  // no_device - computed: true, optional: false, required: true
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }

  // virtual_name - computed: true, optional: false, required: true
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}
export class DataAwsLaunchTemplateCreditSpecification extends ComplexComputedList {

  // cpu_credits - computed: true, optional: false, required: true
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
}
export class DataAwsLaunchTemplateElasticGpuSpecifications extends ComplexComputedList {

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAwsLaunchTemplateHibernationOptions extends ComplexComputedList {

  // configured - computed: true, optional: false, required: true
  public get configured() {
    return this.getBooleanAttribute('configured');
  }
}
export class DataAwsLaunchTemplateIamInstanceProfile extends ComplexComputedList {

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions extends ComplexComputedList {

  // block_duration_minutes - computed: true, optional: false, required: true
  public get blockDurationMinutes() {
    return this.getNumberAttribute('block_duration_minutes');
  }

  // instance_interruption_behavior - computed: true, optional: false, required: true
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }

  // max_price - computed: true, optional: false, required: true
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }

  // spot_instance_type - computed: true, optional: false, required: true
  public get spotInstanceType() {
    return this.getStringAttribute('spot_instance_type');
  }

  // valid_until - computed: true, optional: false, required: true
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
}
export class DataAwsLaunchTemplateInstanceMarketOptions extends ComplexComputedList {

  // market_type - computed: true, optional: false, required: true
  public get marketType() {
    return this.getStringAttribute('market_type');
  }

  // spot_options - computed: true, optional: false, required: true
  public get spotOptions() {
    return 'not implemented' as any;
  }
}
export class DataAwsLaunchTemplateMetadataOptions extends ComplexComputedList {

  // http_endpoint - computed: true, optional: false, required: true
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }

  // http_put_response_hop_limit - computed: true, optional: false, required: true
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }

  // http_tokens - computed: true, optional: false, required: true
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
}
export class DataAwsLaunchTemplateMonitoring extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAwsLaunchTemplateNetworkInterfaces extends ComplexComputedList {

  // associate_public_ip_address - computed: true, optional: false, required: true
  public get associatePublicIpAddress() {
    return this.getStringAttribute('associate_public_ip_address');
  }

  // delete_on_termination - computed: true, optional: false, required: true
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_index - computed: true, optional: false, required: true
  public get deviceIndex() {
    return this.getNumberAttribute('device_index');
  }

  // ipv4_address_count - computed: true, optional: false, required: true
  public get ipv4AddressCount() {
    return this.getNumberAttribute('ipv4_address_count');
  }

  // ipv4_addresses - computed: true, optional: false, required: true
  public get ipv4Addresses() {
    return this.getListAttribute('ipv4_addresses');
  }

  // ipv6_address_count - computed: true, optional: false, required: true
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }

  // ipv6_addresses - computed: true, optional: false, required: true
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }

  // network_interface_id - computed: true, optional: false, required: true
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // private_ip_address - computed: true, optional: false, required: true
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // security_groups - computed: true, optional: false, required: true
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataAwsLaunchTemplatePlacement extends ComplexComputedList {

  // affinity - computed: true, optional: false, required: true
  public get affinity() {
    return this.getStringAttribute('affinity');
  }

  // availability_zone - computed: true, optional: false, required: true
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // group_name - computed: true, optional: false, required: true
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // host_id - computed: true, optional: false, required: true
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // partition_number - computed: true, optional: false, required: true
  public get partitionNumber() {
    return this.getNumberAttribute('partition_number');
  }

  // spread_domain - computed: true, optional: false, required: true
  public get spreadDomain() {
    return this.getStringAttribute('spread_domain');
  }

  // tenancy - computed: true, optional: false, required: true
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
}
export class DataAwsLaunchTemplateTagSpecifications extends ComplexComputedList {

  // resource_type - computed: true, optional: false, required: true
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tags - computed: true, optional: false, required: true
  public get tags() {
    return 'not implemented' as any;
  }
}
export interface DataAwsLaunchTemplateFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsLaunchTemplate extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsLaunchTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_launch_template',
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
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // block_device_mappings - computed: true, optional: false, required: true
  public blockDeviceMappings(index: string) {
    return new DataAwsLaunchTemplateBlockDeviceMappings(this, 'block_device_mappings', index);
  }

  // credit_specification - computed: true, optional: false, required: true
  public creditSpecification(index: string) {
    return new DataAwsLaunchTemplateCreditSpecification(this, 'credit_specification', index);
  }

  // default_version - computed: true, optional: false, required: true
  public get defaultVersion() {
    return this.getNumberAttribute('default_version');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_api_termination - computed: true, optional: false, required: true
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }

  // ebs_optimized - computed: true, optional: false, required: true
  public get ebsOptimized() {
    return this.getStringAttribute('ebs_optimized');
  }

  // elastic_gpu_specifications - computed: true, optional: false, required: true
  public elasticGpuSpecifications(index: string) {
    return new DataAwsLaunchTemplateElasticGpuSpecifications(this, 'elastic_gpu_specifications', index);
  }

  // hibernation_options - computed: true, optional: false, required: true
  public hibernationOptions(index: string) {
    return new DataAwsLaunchTemplateHibernationOptions(this, 'hibernation_options', index);
  }

  // iam_instance_profile - computed: true, optional: false, required: true
  public iamInstanceProfile(index: string) {
    return new DataAwsLaunchTemplateIamInstanceProfile(this, 'iam_instance_profile', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_initiated_shutdown_behavior - computed: true, optional: false, required: true
  public get instanceInitiatedShutdownBehavior() {
    return this.getStringAttribute('instance_initiated_shutdown_behavior');
  }

  // instance_market_options - computed: true, optional: false, required: true
  public instanceMarketOptions(index: string) {
    return new DataAwsLaunchTemplateInstanceMarketOptions(this, 'instance_market_options', index);
  }

  // instance_type - computed: true, optional: false, required: true
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // kernel_id - computed: true, optional: false, required: true
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }

  // key_name - computed: true, optional: false, required: true
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // latest_version - computed: true, optional: false, required: true
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // metadata_options - computed: true, optional: false, required: true
  public metadataOptions(index: string) {
    return new DataAwsLaunchTemplateMetadataOptions(this, 'metadata_options', index);
  }

  // monitoring - computed: true, optional: false, required: true
  public monitoring(index: string) {
    return new DataAwsLaunchTemplateMonitoring(this, 'monitoring', index);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // network_interfaces - computed: true, optional: false, required: true
  public networkInterfaces(index: string) {
    return new DataAwsLaunchTemplateNetworkInterfaces(this, 'network_interfaces', index);
  }

  // placement - computed: true, optional: false, required: true
  public placement(index: string) {
    return new DataAwsLaunchTemplatePlacement(this, 'placement', index);
  }

  // ram_disk_id - computed: true, optional: false, required: true
  public get ramDiskId() {
    return this.getStringAttribute('ram_disk_id');
  }

  // security_group_names - computed: true, optional: false, required: true
  public get securityGroupNames() {
    return this.getListAttribute('security_group_names');
  }

  // tag_specifications - computed: true, optional: false, required: true
  public tagSpecifications(index: string) {
    return new DataAwsLaunchTemplateTagSpecifications(this, 'tag_specifications', index);
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // user_data - computed: true, optional: false, required: true
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // vpc_security_group_ids - computed: true, optional: false, required: true
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsLaunchTemplateFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsLaunchTemplateFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
