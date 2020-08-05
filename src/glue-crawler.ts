// https://www.terraform.io/docs/providers/aws/r/glue_crawler.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "classifiers": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "configuration": {
        "type": "string",
        "optional": true
      },
      "database_name": {
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
      "role": {
        "type": "string",
        "required": true
      },
      "schedule": {
        "type": "string",
        "optional": true
      },
      "security_configuration": {
        "type": "string",
        "optional": true
      },
      "table_prefix": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "catalog_target": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "database_name": {
              "type": "string",
              "required": true
            },
            "tables": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      },
      "dynamodb_target": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "path": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "jdbc_target": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "connection_name": {
              "type": "string",
              "required": true
            },
            "exclusions": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "path": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "s3_target": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "exclusions": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "path": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "schema_change_policy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "delete_behavior": {
              "type": "string",
              "optional": true
            },
            "update_behavior": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueCrawlerConfig extends TerraformMetaArguments {
  readonly classifiers?: string[];
  readonly configuration?: string;
  readonly databaseName: string;
  readonly description?: string;
  readonly name: string;
  readonly role: string;
  readonly schedule?: string;
  readonly securityConfiguration?: string;
  readonly tablePrefix?: string;
  readonly tags?: { [key: string]: string };
  /** catalog_target block */
  readonly catalogTarget?: GlueCrawlerCatalogTarget[];
  /** dynamodb_target block */
  readonly dynamodbTarget?: GlueCrawlerDynamodbTarget[];
  /** jdbc_target block */
  readonly jdbcTarget?: GlueCrawlerJdbcTarget[];
  /** s3_target block */
  readonly s3Target?: GlueCrawlerS3Target[];
  /** schema_change_policy block */
  readonly schemaChangePolicy?: GlueCrawlerSchemaChangePolicy[];
}
export interface GlueCrawlerCatalogTarget {
  readonly databaseName: string;
  readonly tables: string[];
}
export interface GlueCrawlerDynamodbTarget {
  readonly path: string;
}
export interface GlueCrawlerJdbcTarget {
  readonly connectionName: string;
  readonly exclusions?: string[];
  readonly path: string;
}
export interface GlueCrawlerS3Target {
  readonly exclusions?: string[];
  readonly path: string;
}
export interface GlueCrawlerSchemaChangePolicy {
  readonly deleteBehavior?: string;
  readonly updateBehavior?: string;
}

// Resource

export class GlueCrawler extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueCrawlerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_crawler',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._classifiers = config.classifiers;
    this._configuration = config.configuration;
    this._databaseName = config.databaseName;
    this._description = config.description;
    this._name = config.name;
    this._role = config.role;
    this._schedule = config.schedule;
    this._securityConfiguration = config.securityConfiguration;
    this._tablePrefix = config.tablePrefix;
    this._tags = config.tags;
    this._catalogTarget = config.catalogTarget;
    this._dynamodbTarget = config.dynamodbTarget;
    this._jdbcTarget = config.jdbcTarget;
    this._s3Target = config.s3Target;
    this._schemaChangePolicy = config.schemaChangePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // classifiers - computed: false, optional: true, required: false
  private _classifiers?: string[];
  public get classifiers() {
    return this._classifiers;
  }
  public set classifiers(value: string[] | undefined) {
    this._classifiers = value;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string;
  public get configuration() {
    return this._configuration;
  }
  public set configuration(value: string | undefined) {
    this._configuration = value;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this._databaseName;
  }
  public set databaseName(value: string) {
    this._databaseName = value;
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

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string;
  public get schedule() {
    return this._schedule;
  }
  public set schedule(value: string | undefined) {
    this._schedule = value;
  }

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string;
  public get securityConfiguration() {
    return this._securityConfiguration;
  }
  public set securityConfiguration(value: string | undefined) {
    this._securityConfiguration = value;
  }

  // table_prefix - computed: false, optional: true, required: false
  private _tablePrefix?: string;
  public get tablePrefix() {
    return this._tablePrefix;
  }
  public set tablePrefix(value: string | undefined) {
    this._tablePrefix = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // catalog_target - computed: false, optional: true, required: false
  private _catalogTarget?: GlueCrawlerCatalogTarget[];
  public get catalogTarget() {
    return this._catalogTarget;
  }
  public set catalogTarget(value: GlueCrawlerCatalogTarget[] | undefined) {
    this._catalogTarget = value;
  }

  // dynamodb_target - computed: false, optional: true, required: false
  private _dynamodbTarget?: GlueCrawlerDynamodbTarget[];
  public get dynamodbTarget() {
    return this._dynamodbTarget;
  }
  public set dynamodbTarget(value: GlueCrawlerDynamodbTarget[] | undefined) {
    this._dynamodbTarget = value;
  }

  // jdbc_target - computed: false, optional: true, required: false
  private _jdbcTarget?: GlueCrawlerJdbcTarget[];
  public get jdbcTarget() {
    return this._jdbcTarget;
  }
  public set jdbcTarget(value: GlueCrawlerJdbcTarget[] | undefined) {
    this._jdbcTarget = value;
  }

  // s3_target - computed: false, optional: true, required: false
  private _s3Target?: GlueCrawlerS3Target[];
  public get s3Target() {
    return this._s3Target;
  }
  public set s3Target(value: GlueCrawlerS3Target[] | undefined) {
    this._s3Target = value;
  }

  // schema_change_policy - computed: false, optional: true, required: false
  private _schemaChangePolicy?: GlueCrawlerSchemaChangePolicy[];
  public get schemaChangePolicy() {
    return this._schemaChangePolicy;
  }
  public set schemaChangePolicy(value: GlueCrawlerSchemaChangePolicy[] | undefined) {
    this._schemaChangePolicy = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      classifiers: this._classifiers,
      configuration: this._configuration,
      database_name: this._databaseName,
      description: this._description,
      name: this._name,
      role: this._role,
      schedule: this._schedule,
      security_configuration: this._securityConfiguration,
      table_prefix: this._tablePrefix,
      tags: this._tags,
      catalog_target: this._catalogTarget,
      dynamodb_target: this._dynamodbTarget,
      jdbc_target: this._jdbcTarget,
      s3_target: this._s3Target,
      schema_change_policy: this._schemaChangePolicy,
    };
  }
}
