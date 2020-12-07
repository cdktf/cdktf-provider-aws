// https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamodbGlobalTableConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** replica block */
  readonly replica: DynamodbGlobalTableReplica[];
  /** timeouts block */
  readonly timeouts?: DynamodbGlobalTableTimeouts;
}
export interface DynamodbGlobalTableReplica {
  readonly regionName: string;
}

function dynamodbGlobalTableReplicaToTerraform(struct?: DynamodbGlobalTableReplica): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    region_name: cdktf.stringToTerraform(struct!.regionName),
  }
}

export interface DynamodbGlobalTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dynamodbGlobalTableTimeoutsToTerraform(struct?: DynamodbGlobalTableTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DynamodbGlobalTable extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DynamodbGlobalTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_global_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._replica = config.replica;
    this._timeouts = config.timeouts;
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

  // replica - computed: false, optional: false, required: true
  private _replica: DynamodbGlobalTableReplica[];
  public get replica() {
    return this.interpolationForAttribute('replica') as any;
  }
  public set replica(value: DynamodbGlobalTableReplica[]) {
    this._replica = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaInput() {
    return this._replica
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DynamodbGlobalTableTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DynamodbGlobalTableTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      replica: cdktf.listMapper(dynamodbGlobalTableReplicaToTerraform)(this._replica),
      timeouts: dynamodbGlobalTableTimeoutsToTerraform(this._timeouts),
    };
  }
}
