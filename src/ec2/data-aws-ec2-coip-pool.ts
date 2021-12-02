// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsEc2CoipPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#local_gateway_route_table_id DataAwsEc2CoipPool#local_gateway_route_table_id}
  */
  readonly localGatewayRouteTableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#pool_id DataAwsEc2CoipPool#pool_id}
  */
  readonly poolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#tags DataAwsEc2CoipPool#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#filter DataAwsEc2CoipPool#filter}
  */
  readonly filter?: DataAwsEc2CoipPoolFilter[];
}
export interface DataAwsEc2CoipPoolFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#name DataAwsEc2CoipPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#values DataAwsEc2CoipPool#values}
  */
  readonly values: string[];
}

export function dataAwsEc2CoipPoolFilterToTerraform(struct?: DataAwsEc2CoipPoolFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html aws_ec2_coip_pool}
*/
export class DataAwsEc2CoipPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_coip_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html aws_ec2_coip_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2CoipPoolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2CoipPoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_coip_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._localGatewayRouteTableId = config.localGatewayRouteTableId;
    this._poolId = config.poolId;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_gateway_route_table_id - computed: true, optional: true, required: false
  private _localGatewayRouteTableId?: string; 
  public get localGatewayRouteTableId() {
    return this.getStringAttribute('local_gateway_route_table_id');
  }
  public set localGatewayRouteTableId(value: string) {
    this._localGatewayRouteTableId = value;
  }
  public resetLocalGatewayRouteTableId() {
    this._localGatewayRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayRouteTableIdInput() {
    return this._localGatewayRouteTableId;
  }

  // pool_cidrs - computed: true, optional: false, required: false
  public get poolCidrs() {
    return this.getListAttribute('pool_cidrs');
  }

  // pool_id - computed: true, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2CoipPoolFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2CoipPoolFilter[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
      pool_id: cdktf.stringToTerraform(this._poolId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsEc2CoipPoolFilterToTerraform)(this._filter),
    };
  }
}
