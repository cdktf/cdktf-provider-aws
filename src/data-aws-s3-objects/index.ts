// https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsS3ObjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects#bucket DataAwsS3Objects#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects#delimiter DataAwsS3Objects#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects#encoding_type DataAwsS3Objects#encoding_type}
  */
  readonly encodingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects#fetch_owner DataAwsS3Objects#fetch_owner}
  */
  readonly fetchOwner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects#id DataAwsS3Objects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects#max_keys DataAwsS3Objects#max_keys}
  */
  readonly maxKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects#prefix DataAwsS3Objects#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects#request_payer DataAwsS3Objects#request_payer}
  */
  readonly requestPayer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects#start_after DataAwsS3Objects#start_after}
  */
  readonly startAfter?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects aws_s3_objects}
*/
export class DataAwsS3Objects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_objects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsS3Objects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsS3Objects to import
  * @param importFromId The id of the existing DataAwsS3Objects that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsS3Objects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_objects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/s3_objects aws_s3_objects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsS3ObjectsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsS3ObjectsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_objects',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.42.0',
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
    this._bucket = config.bucket;
    this._delimiter = config.delimiter;
    this._encodingType = config.encodingType;
    this._fetchOwner = config.fetchOwner;
    this._id = config.id;
    this._maxKeys = config.maxKeys;
    this._prefix = config.prefix;
    this._requestPayer = config.requestPayer;
    this._startAfter = config.startAfter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // common_prefixes - computed: true, optional: false, required: false
  public get commonPrefixes() {
    return this.getListAttribute('common_prefixes');
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // encoding_type - computed: false, optional: true, required: false
  private _encodingType?: string; 
  public get encodingType() {
    return this.getStringAttribute('encoding_type');
  }
  public set encodingType(value: string) {
    this._encodingType = value;
  }
  public resetEncodingType() {
    this._encodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingTypeInput() {
    return this._encodingType;
  }

  // fetch_owner - computed: false, optional: true, required: false
  private _fetchOwner?: boolean | cdktf.IResolvable; 
  public get fetchOwner() {
    return this.getBooleanAttribute('fetch_owner');
  }
  public set fetchOwner(value: boolean | cdktf.IResolvable) {
    this._fetchOwner = value;
  }
  public resetFetchOwner() {
    this._fetchOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchOwnerInput() {
    return this._fetchOwner;
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

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.getListAttribute('keys');
  }

  // max_keys - computed: false, optional: true, required: false
  private _maxKeys?: number; 
  public get maxKeys() {
    return this.getNumberAttribute('max_keys');
  }
  public set maxKeys(value: number) {
    this._maxKeys = value;
  }
  public resetMaxKeys() {
    this._maxKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxKeysInput() {
    return this._maxKeys;
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // request_charged - computed: true, optional: false, required: false
  public get requestCharged() {
    return this.getStringAttribute('request_charged');
  }

  // request_payer - computed: false, optional: true, required: false
  private _requestPayer?: string; 
  public get requestPayer() {
    return this.getStringAttribute('request_payer');
  }
  public set requestPayer(value: string) {
    this._requestPayer = value;
  }
  public resetRequestPayer() {
    this._requestPayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPayerInput() {
    return this._requestPayer;
  }

  // start_after - computed: false, optional: true, required: false
  private _startAfter?: string; 
  public get startAfter() {
    return this.getStringAttribute('start_after');
  }
  public set startAfter(value: string) {
    this._startAfter = value;
  }
  public resetStartAfter() {
    this._startAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAfterInput() {
    return this._startAfter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      delimiter: cdktf.stringToTerraform(this._delimiter),
      encoding_type: cdktf.stringToTerraform(this._encodingType),
      fetch_owner: cdktf.booleanToTerraform(this._fetchOwner),
      id: cdktf.stringToTerraform(this._id),
      max_keys: cdktf.numberToTerraform(this._maxKeys),
      prefix: cdktf.stringToTerraform(this._prefix),
      request_payer: cdktf.stringToTerraform(this._requestPayer),
      start_after: cdktf.stringToTerraform(this._startAfter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delimiter: {
        value: cdktf.stringToHclTerraform(this._delimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encoding_type: {
        value: cdktf.stringToHclTerraform(this._encodingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fetch_owner: {
        value: cdktf.booleanToHclTerraform(this._fetchOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_keys: {
        value: cdktf.numberToHclTerraform(this._maxKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_payer: {
        value: cdktf.stringToHclTerraform(this._requestPayer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_after: {
        value: cdktf.stringToHclTerraform(this._startAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
