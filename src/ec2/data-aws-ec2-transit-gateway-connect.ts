// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsEc2TransitGatewayConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}
  */
  readonly transitGatewayConnectId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#filter DataAwsEc2TransitGatewayConnect#filter}
  */
  readonly filter?: DataAwsEc2TransitGatewayConnectFilter[] | cdktf.IResolvable;
}
export interface DataAwsEc2TransitGatewayConnectFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#name DataAwsEc2TransitGatewayConnect#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#values DataAwsEc2TransitGatewayConnect#values}
  */
  readonly values: string[];
}

export function dataAwsEc2TransitGatewayConnectFilterToTerraform(struct?: DataAwsEc2TransitGatewayConnectFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect aws_ec2_transit_gateway_connect}
*/
export class DataAwsEc2TransitGatewayConnect extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_transit_gateway_connect";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect aws_ec2_transit_gateway_connect} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2TransitGatewayConnectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayConnectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_connect',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._transitGatewayConnectId = config.transitGatewayConnectId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // transit_gateway_connect_id - computed: true, optional: true, required: false
  private _transitGatewayConnectId?: string; 
  public get transitGatewayConnectId() {
    return this.getStringAttribute('transit_gateway_connect_id');
  }
  public set transitGatewayConnectId(value: string) {
    this._transitGatewayConnectId = value;
  }
  public resetTransitGatewayConnectId() {
    this._transitGatewayConnectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConnectIdInput() {
    return this._transitGatewayConnectId;
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // transport_attachment_id - computed: true, optional: false, required: false
  public get transportAttachmentId() {
    return this.getStringAttribute('transport_attachment_id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayConnectFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('filter')));
  }
  public set filter(value: DataAwsEc2TransitGatewayConnectFilter[] | cdktf.IResolvable) {
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transit_gateway_connect_id: cdktf.stringToTerraform(this._transitGatewayConnectId),
      filter: cdktf.listMapper(dataAwsEc2TransitGatewayConnectFilterToTerraform)(this._filter),
    };
  }
}
