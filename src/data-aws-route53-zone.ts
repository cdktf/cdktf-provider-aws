// https://www.terraform.io/docs/providers/aws/r/data_aws_route53_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRoute53ZoneConfig extends cdktf.TerraformMetaArguments {
  readonly name?: string;
  readonly privateZone?: boolean;
  readonly resourceRecordSetCount?: number;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  readonly zoneId?: string;
}

// Resource

export class DataAwsRoute53Zone extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRoute53ZoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_zone',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._privateZone = config.privateZone;
    this._resourceRecordSetCount = config.resourceRecordSetCount;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linked_service_description - computed: true, optional: false, required: false
  public get linkedServiceDescription() {
    return this.getStringAttribute('linked_service_description');
  }

  // linked_service_principal - computed: true, optional: false, required: false
  public get linkedServicePrincipal() {
    return this.getStringAttribute('linked_service_principal');
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
    return this._name
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // private_zone - computed: false, optional: true, required: false
  private _privateZone?: boolean;
  public get privateZone() {
    return this.getBooleanAttribute('private_zone');
  }
  public set privateZone(value: boolean ) {
    this._privateZone = value;
  }
  public resetPrivateZone() {
    this._privateZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateZoneInput() {
    return this._privateZone
  }

  // resource_record_set_count - computed: true, optional: true, required: false
  private _resourceRecordSetCount?: number;
  public get resourceRecordSetCount() {
    return this.getNumberAttribute('resource_record_set_count');
  }
  public set resourceRecordSetCount(value: number) {
    this._resourceRecordSetCount = value;
  }
  public resetResourceRecordSetCount() {
    this._resourceRecordSetCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRecordSetCountInput() {
    return this._resourceRecordSetCount
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

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string;
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      private_zone: cdktf.booleanToTerraform(this._privateZone),
      resource_record_set_count: cdktf.numberToTerraform(this._resourceRecordSetCount),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
