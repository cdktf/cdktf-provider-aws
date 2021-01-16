// https://www.terraform.io/docs/providers/aws/r/data_aws_internet_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsInternetGatewayConfig extends cdktf.TerraformMetaArguments {
  readonly internetGatewayId?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsInternetGatewayFilter[];
}
export class DataAwsInternetGatewayAttachments extends cdktf.ComplexComputedList {

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export interface DataAwsInternetGatewayFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsInternetGatewayFilterToTerraform(struct?: DataAwsInternetGatewayFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsInternetGateway extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsInternetGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_internet_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._internetGatewayId = config.internetGatewayId;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attachments - computed: true, optional: false, required: false
  public attachments(index: string) {
    return new DataAwsInternetGatewayAttachments(this, 'attachments', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_gateway_id - computed: true, optional: true, required: false
  private _internetGatewayId?: string;
  public get internetGatewayId() {
    return this.getStringAttribute('internet_gateway_id');
  }
  public set internetGatewayId(value: string) {
    this._internetGatewayId = value;
  }
  public resetInternetGatewayId() {
    this._internetGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayIdInput() {
    return this._internetGatewayId
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsInternetGatewayFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsInternetGatewayFilter[] ) {
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
      internet_gateway_id: cdktf.stringToTerraform(this._internetGatewayId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsInternetGatewayFilterToTerraform)(this._filter),
    };
  }
}
