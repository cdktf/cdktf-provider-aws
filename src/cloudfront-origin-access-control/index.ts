// https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/cloudfront_origin_access_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontOriginAccessControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/cloudfront_origin_access_control#id CloudfrontOriginAccessControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}
  */
  readonly originAccessControlOriginType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}
  */
  readonly signingBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}
  */
  readonly signingProtocol: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/cloudfront_origin_access_control aws_cloudfront_origin_access_control}
*/
export class CloudfrontOriginAccessControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_origin_access_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudfrontOriginAccessControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontOriginAccessControl to import
  * @param importFromId The id of the existing CloudfrontOriginAccessControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/cloudfront_origin_access_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontOriginAccessControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_origin_access_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/cloudfront_origin_access_control aws_cloudfront_origin_access_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontOriginAccessControlConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontOriginAccessControlConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_origin_access_control',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.65.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._originAccessControlOriginType = config.originAccessControlOriginType;
    this._signingBehavior = config.signingBehavior;
    this._signingProtocol = config.signingProtocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // origin_access_control_origin_type - computed: false, optional: false, required: true
  private _originAccessControlOriginType?: string; 
  public get originAccessControlOriginType() {
    return this.getStringAttribute('origin_access_control_origin_type');
  }
  public set originAccessControlOriginType(value: string) {
    this._originAccessControlOriginType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originAccessControlOriginTypeInput() {
    return this._originAccessControlOriginType;
  }

  // signing_behavior - computed: false, optional: false, required: true
  private _signingBehavior?: string; 
  public get signingBehavior() {
    return this.getStringAttribute('signing_behavior');
  }
  public set signingBehavior(value: string) {
    this._signingBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingBehaviorInput() {
    return this._signingBehavior;
  }

  // signing_protocol - computed: false, optional: false, required: true
  private _signingProtocol?: string; 
  public get signingProtocol() {
    return this.getStringAttribute('signing_protocol');
  }
  public set signingProtocol(value: string) {
    this._signingProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingProtocolInput() {
    return this._signingProtocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      origin_access_control_origin_type: cdktf.stringToTerraform(this._originAccessControlOriginType),
      signing_behavior: cdktf.stringToTerraform(this._signingBehavior),
      signing_protocol: cdktf.stringToTerraform(this._signingProtocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_access_control_origin_type: {
        value: cdktf.stringToHclTerraform(this._originAccessControlOriginType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_behavior: {
        value: cdktf.stringToHclTerraform(this._signingBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_protocol: {
        value: cdktf.stringToHclTerraform(this._signingProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
