// https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/outposts_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsOutpostsAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/outposts_asset#arn DataAwsOutpostsAsset#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/outposts_asset#asset_id DataAwsOutpostsAsset#asset_id}
  */
  readonly assetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/outposts_asset#id DataAwsOutpostsAsset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/outposts_asset aws_outposts_asset}
*/
export class DataAwsOutpostsAsset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_outposts_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsOutpostsAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsOutpostsAsset to import
  * @param importFromId The id of the existing DataAwsOutpostsAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/outposts_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsOutpostsAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_outposts_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/outposts_asset aws_outposts_asset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOutpostsAssetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsOutpostsAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_outposts_asset',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.62.0',
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
    this._arn = config.arn;
    this._assetId = config.assetId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // asset_id - computed: false, optional: false, required: true
  private _assetId?: string; 
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }
  public set assetId(value: string) {
    this._assetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // asset_type - computed: true, optional: false, required: false
  public get assetType() {
    return this.getStringAttribute('asset_type');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
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

  // rack_elevation - computed: true, optional: false, required: false
  public get rackElevation() {
    return this.getNumberAttribute('rack_elevation');
  }

  // rack_id - computed: true, optional: false, required: false
  public get rackId() {
    return this.getStringAttribute('rack_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      asset_id: cdktf.stringToTerraform(this._assetId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_id: {
        value: cdktf.stringToHclTerraform(this._assetId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
