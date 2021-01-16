// https://www.terraform.io/docs/providers/aws/r/data_aws_dynamodb_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDynamodbTableConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** server_side_encryption block */
  readonly serverSideEncryption?: DataAwsDynamodbTableServerSideEncryption[];
}
export class DataAwsDynamodbTableAttribute extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAwsDynamodbTableGlobalSecondaryIndex extends cdktf.ComplexComputedList {

  // hash_key - computed: true, optional: false, required: false
  public get hashKey() {
    return this.getStringAttribute('hash_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // non_key_attributes - computed: true, optional: false, required: false
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }

  // projection_type - computed: true, optional: false, required: false
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }

  // range_key - computed: true, optional: false, required: false
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }

  // read_capacity - computed: true, optional: false, required: false
  public get readCapacity() {
    return this.getNumberAttribute('read_capacity');
  }

  // write_capacity - computed: true, optional: false, required: false
  public get writeCapacity() {
    return this.getNumberAttribute('write_capacity');
  }
}
export class DataAwsDynamodbTableLocalSecondaryIndex extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // non_key_attributes - computed: true, optional: false, required: false
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }

  // projection_type - computed: true, optional: false, required: false
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }

  // range_key - computed: true, optional: false, required: false
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }
}
export class DataAwsDynamodbTablePointInTimeRecovery extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAwsDynamodbTableReplica extends cdktf.ComplexComputedList {

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}
export class DataAwsDynamodbTableTtl extends cdktf.ComplexComputedList {

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsDynamodbTableServerSideEncryption {
}

function dataAwsDynamodbTableServerSideEncryptionToTerraform(struct?: DataAwsDynamodbTableServerSideEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}


// Resource

export class DataAwsDynamodbTable extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsDynamodbTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
    this._serverSideEncryption = config.serverSideEncryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attribute - computed: true, optional: false, required: false
  public attribute(index: string) {
    return new DataAwsDynamodbTableAttribute(this, 'attribute', index);
  }

  // billing_mode - computed: true, optional: false, required: false
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }

  // global_secondary_index - computed: true, optional: false, required: false
  public globalSecondaryIndex(index: string) {
    return new DataAwsDynamodbTableGlobalSecondaryIndex(this, 'global_secondary_index', index);
  }

  // hash_key - computed: true, optional: false, required: false
  public get hashKey() {
    return this.getStringAttribute('hash_key');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_secondary_index - computed: true, optional: false, required: false
  public localSecondaryIndex(index: string) {
    return new DataAwsDynamodbTableLocalSecondaryIndex(this, 'local_secondary_index', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // point_in_time_recovery - computed: true, optional: false, required: false
  public pointInTimeRecovery(index: string) {
    return new DataAwsDynamodbTablePointInTimeRecovery(this, 'point_in_time_recovery', index);
  }

  // range_key - computed: true, optional: false, required: false
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }

  // read_capacity - computed: true, optional: false, required: false
  public get readCapacity() {
    return this.getNumberAttribute('read_capacity');
  }

  // replica - computed: true, optional: false, required: false
  public replica(index: string) {
    return new DataAwsDynamodbTableReplica(this, 'replica', index);
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_enabled - computed: true, optional: false, required: false
  public get streamEnabled() {
    return this.getBooleanAttribute('stream_enabled');
  }

  // stream_label - computed: true, optional: false, required: false
  public get streamLabel() {
    return this.getStringAttribute('stream_label');
  }

  // stream_view_type - computed: true, optional: false, required: false
  public get streamViewType() {
    return this.getStringAttribute('stream_view_type');
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

  // ttl - computed: true, optional: false, required: false
  public ttl(index: string) {
    return new DataAwsDynamodbTableTtl(this, 'ttl', index);
  }

  // write_capacity - computed: true, optional: false, required: false
  public get writeCapacity() {
    return this.getNumberAttribute('write_capacity');
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: DataAwsDynamodbTableServerSideEncryption[];
  public get serverSideEncryption() {
    return this.interpolationForAttribute('server_side_encryption') as any;
  }
  public set serverSideEncryption(value: DataAwsDynamodbTableServerSideEncryption[] ) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      server_side_encryption: cdktf.listMapper(dataAwsDynamodbTableServerSideEncryptionToTerraform)(this._serverSideEncryption),
    };
  }
}
