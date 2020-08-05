// https://www.terraform.io/docs/providers/aws/r/athena_named_query.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "database": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "query": {
        "type": "string",
        "required": true
      },
      "workgroup": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AthenaNamedQueryConfig extends TerraformMetaArguments {
  readonly database: string;
  readonly description?: string;
  readonly name: string;
  readonly query: string;
  readonly workgroup?: string;
}

// Resource

export class AthenaNamedQuery extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AthenaNamedQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_athena_named_query',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._database = config.database;
    this._description = config.description;
    this._name = config.name;
    this._query = config.query;
    this._workgroup = config.workgroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: false, required: true
  private _database: string;
  public get database() {
    return this._database;
  }
  public set database(value: string) {
    this._database = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // query - computed: false, optional: false, required: true
  private _query: string;
  public get query() {
    return this._query;
  }
  public set query(value: string) {
    this._query = value;
  }

  // workgroup - computed: false, optional: true, required: false
  private _workgroup?: string;
  public get workgroup() {
    return this._workgroup;
  }
  public set workgroup(value: string | undefined) {
    this._workgroup = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      database: this._database,
      description: this._description,
      name: this._name,
      query: this._query,
      workgroup: this._workgroup,
    };
  }
}
