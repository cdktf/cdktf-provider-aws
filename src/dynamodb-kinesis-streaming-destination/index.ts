/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/dynamodb_kinesis_streaming_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamodbKinesisStreamingDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/dynamodb_kinesis_streaming_destination#approximate_creation_date_time_precision DynamodbKinesisStreamingDestination#approximate_creation_date_time_precision}
  */
  readonly approximateCreationDateTimePrecision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/dynamodb_kinesis_streaming_destination#id DynamodbKinesisStreamingDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/dynamodb_kinesis_streaming_destination#region DynamodbKinesisStreamingDestination#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/dynamodb_kinesis_streaming_destination#stream_arn DynamodbKinesisStreamingDestination#stream_arn}
  */
  readonly streamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/dynamodb_kinesis_streaming_destination#table_name DynamodbKinesisStreamingDestination#table_name}
  */
  readonly tableName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/dynamodb_kinesis_streaming_destination aws_dynamodb_kinesis_streaming_destination}
*/
export class DynamodbKinesisStreamingDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dynamodb_kinesis_streaming_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamodbKinesisStreamingDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamodbKinesisStreamingDestination to import
  * @param importFromId The id of the existing DynamodbKinesisStreamingDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/dynamodb_kinesis_streaming_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamodbKinesisStreamingDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dynamodb_kinesis_streaming_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/dynamodb_kinesis_streaming_destination aws_dynamodb_kinesis_streaming_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamodbKinesisStreamingDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DynamodbKinesisStreamingDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_kinesis_streaming_destination',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.13.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approximateCreationDateTimePrecision = config.approximateCreationDateTimePrecision;
    this._id = config.id;
    this._region = config.region;
    this._streamArn = config.streamArn;
    this._tableName = config.tableName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approximate_creation_date_time_precision - computed: true, optional: true, required: false
  private _approximateCreationDateTimePrecision?: string; 
  public get approximateCreationDateTimePrecision() {
    return this.getStringAttribute('approximate_creation_date_time_precision');
  }
  public set approximateCreationDateTimePrecision(value: string) {
    this._approximateCreationDateTimePrecision = value;
  }
  public resetApproximateCreationDateTimePrecision() {
    this._approximateCreationDateTimePrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approximateCreationDateTimePrecisionInput() {
    return this._approximateCreationDateTimePrecision;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approximate_creation_date_time_precision: cdktf.stringToTerraform(this._approximateCreationDateTimePrecision),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      stream_arn: cdktf.stringToTerraform(this._streamArn),
      table_name: cdktf.stringToTerraform(this._tableName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approximate_creation_date_time_precision: {
        value: cdktf.stringToHclTerraform(this._approximateCreationDateTimePrecision),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_arn: {
        value: cdktf.stringToHclTerraform(this._streamArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
