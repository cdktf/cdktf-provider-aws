// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface InternetGatewayAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway_attachment#id InternetGatewayAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway_attachment#internet_gateway_id InternetGatewayAttachment#internet_gateway_id}
  */
  readonly internetGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway_attachment#vpc_id InternetGatewayAttachment#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway_attachment aws_internet_gateway_attachment}
*/
export class InternetGatewayAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_internet_gateway_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/internet_gateway_attachment aws_internet_gateway_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InternetGatewayAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: InternetGatewayAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_internet_gateway_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.16.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._internetGatewayId = config.internetGatewayId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // internet_gateway_id - computed: false, optional: false, required: true
  private _internetGatewayId?: string; 
  public get internetGatewayId() {
    return this.getStringAttribute('internet_gateway_id');
  }
  public set internetGatewayId(value: string) {
    this._internetGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayIdInput() {
    return this._internetGatewayId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      internet_gateway_id: cdktf.stringToTerraform(this._internetGatewayId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
