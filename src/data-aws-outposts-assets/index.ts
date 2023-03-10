// https://www.terraform.io/docs/providers/aws/d/outposts_assets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsOutpostsAssetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_assets#arn DataAwsOutpostsAssets#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_assets#host_id_filter DataAwsOutpostsAssets#host_id_filter}
  */
  readonly hostIdFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_assets#id DataAwsOutpostsAssets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_assets#status_id_filter DataAwsOutpostsAssets#status_id_filter}
  */
  readonly statusIdFilter?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_assets aws_outposts_assets}
*/
export class DataAwsOutpostsAssets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_outposts_assets";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_assets aws_outposts_assets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOutpostsAssetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsOutpostsAssetsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_outposts_assets',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
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
    this._hostIdFilter = config.hostIdFilter;
    this._id = config.id;
    this._statusIdFilter = config.statusIdFilter;
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

  // asset_ids - computed: true, optional: false, required: false
  public get assetIds() {
    return this.getListAttribute('asset_ids');
  }

  // host_id_filter - computed: false, optional: true, required: false
  private _hostIdFilter?: string[]; 
  public get hostIdFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('host_id_filter'));
  }
  public set hostIdFilter(value: string[]) {
    this._hostIdFilter = value;
  }
  public resetHostIdFilter() {
    this._hostIdFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdFilterInput() {
    return this._hostIdFilter;
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

  // status_id_filter - computed: false, optional: true, required: false
  private _statusIdFilter?: string[]; 
  public get statusIdFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('status_id_filter'));
  }
  public set statusIdFilter(value: string[]) {
    this._statusIdFilter = value;
  }
  public resetStatusIdFilter() {
    this._statusIdFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusIdFilterInput() {
    return this._statusIdFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      host_id_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostIdFilter),
      id: cdktf.stringToTerraform(this._id),
      status_id_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._statusIdFilter),
    };
  }
}
