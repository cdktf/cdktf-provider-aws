// https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamodbGlobalTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#name DynamodbGlobalTable#name}
  */
  readonly name: string;
  /**
  * replica block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#replica DynamodbGlobalTable#replica}
  */
  readonly replica: DynamodbGlobalTableReplica[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#timeouts DynamodbGlobalTable#timeouts}
  */
  readonly timeouts?: DynamodbGlobalTableTimeouts;
}
export interface DynamodbGlobalTableReplica {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#region_name DynamodbGlobalTable#region_name}
  */
  readonly regionName: string;
}

function dynamodbGlobalTableReplicaToTerraform(struct?: DynamodbGlobalTableReplica): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    region_name: cdktf.stringToTerraform(struct!.regionName),
  }
}

export interface DynamodbGlobalTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#create DynamodbGlobalTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#delete DynamodbGlobalTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#update DynamodbGlobalTable#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html aws_dynamodb_global_table}
*/
export class DynamodbGlobalTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dynamodb_global_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html aws_dynamodb_global_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamodbGlobalTableConfig
  */
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
