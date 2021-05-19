// https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamodbKinesisStreamingDestinationConfig extends cdktf.TerraformMetaArguments {
  readonly streamArn: string;
  readonly tableName: string;
}

// Resource

export class DynamodbKinesisStreamingDestination extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DynamodbKinesisStreamingDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_kinesis_streaming_destination',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._streamArn = config.streamArn;
    this._tableName = config.tableName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn: string;
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName: string;
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      stream_arn: cdktf.stringToTerraform(this._streamArn),
      table_name: cdktf.stringToTerraform(this._tableName),
    };
  }
}
