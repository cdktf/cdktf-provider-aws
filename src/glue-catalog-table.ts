// https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html
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
      "catalog_id": {
        "type": "string",
        "optional": true,
        "computed": true
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
      "owner": {
        "type": "string",
        "optional": true
      },
      "parameters": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "retention": {
        "type": "number",
        "optional": true
      },
      "table_type": {
        "type": "string",
        "optional": true
      },
      "view_expanded_text": {
        "type": "string",
        "optional": true
      },
      "view_original_text": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "partition_keys": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "comment": {
              "type": "string",
              "optional": true
            },
            "name": {
              "type": "string",
              "required": true
            },
            "type": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "storage_descriptor": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket_columns": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "compressed": {
              "type": "bool",
              "optional": true
            },
            "input_format": {
              "type": "string",
              "optional": true
            },
            "location": {
              "type": "string",
              "optional": true
            },
            "number_of_buckets": {
              "type": "number",
              "optional": true
            },
            "output_format": {
              "type": "string",
              "optional": true
            },
            "parameters": {
              "type": [
                "map",
                "string"
              ],
              "optional": true
            },
            "stored_as_sub_directories": {
              "type": "bool",
              "optional": true
            }
          },
          "block_types": {
            "columns": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "comment": {
                    "type": "string",
                    "optional": true
                  },
                  "name": {
                    "type": "string",
                    "required": true
                  },
                  "type": {
                    "type": "string",
                    "optional": true
                  }
                }
              }
            },
            "ser_de_info": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "name": {
                    "type": "string",
                    "optional": true
                  },
                  "parameters": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true
                  },
                  "serialization_library": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "skewed_info": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "skewed_column_names": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "optional": true
                  },
                  "skewed_column_value_location_maps": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true
                  },
                  "skewed_column_values": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "sort_columns": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "column": {
                    "type": "string",
                    "required": true
                  },
                  "sort_order": {
                    "type": "number",
                    "required": true
                  }
                }
              }
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

export interface GlueCatalogTableConfig extends TerraformMetaArguments {
  readonly catalogId?: string;
  readonly databaseName: string;
  readonly description?: string;
  readonly name: string;
  readonly owner?: string;
  readonly parameters?: { [key: string]: string };
  readonly retention?: number;
  readonly tableType?: string;
  readonly viewExpandedText?: string;
  readonly viewOriginalText?: string;
  /** partition_keys block */
  readonly partitionKeys?: GlueCatalogTablePartitionKeys[];
  /** storage_descriptor block */
  readonly storageDescriptor?: GlueCatalogTableStorageDescriptor[];
}
export interface GlueCatalogTablePartitionKeys {
  readonly comment?: string;
  readonly name: string;
  readonly type?: string;
}
export interface GlueCatalogTableStorageDescriptorColumns {
  readonly comment?: string;
  readonly name: string;
  readonly type?: string;
}
export interface GlueCatalogTableStorageDescriptorSerDeInfo {
  readonly name?: string;
  readonly parameters?: { [key: string]: string };
  readonly serializationLibrary?: string;
}
export interface GlueCatalogTableStorageDescriptorSkewedInfo {
  readonly skewedColumnNames?: string[];
  readonly skewedColumnValueLocationMaps?: { [key: string]: string };
  readonly skewedColumnValues?: string[];
}
export interface GlueCatalogTableStorageDescriptorSortColumns {
  readonly column: string;
  readonly sortOrder: number;
}
export interface GlueCatalogTableStorageDescriptor {
  readonly bucketColumns?: string[];
  readonly compressed?: boolean;
  readonly inputFormat?: string;
  readonly location?: string;
  readonly numberOfBuckets?: number;
  readonly outputFormat?: string;
  readonly parameters?: { [key: string]: string };
  readonly storedAsSubDirectories?: boolean;
  /** columns block */
  readonly columns?: GlueCatalogTableStorageDescriptorColumns[];
  /** ser_de_info block */
  readonly serDeInfo?: GlueCatalogTableStorageDescriptorSerDeInfo[];
  /** skewed_info block */
  readonly skewedInfo?: GlueCatalogTableStorageDescriptorSkewedInfo[];
  /** sort_columns block */
  readonly sortColumns?: GlueCatalogTableStorageDescriptorSortColumns[];
}

// Resource

export class GlueCatalogTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueCatalogTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._databaseName = config.databaseName;
    this._description = config.description;
    this._name = config.name;
    this._owner = config.owner;
    this._parameters = config.parameters;
    this._retention = config.retention;
    this._tableType = config.tableType;
    this._viewExpandedText = config.viewExpandedText;
    this._viewOriginalText = config.viewOriginalText;
    this._partitionKeys = config.partitionKeys;
    this._storageDescriptor = config.storageDescriptor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this._catalogId ?? this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string;
  public get owner() {
    return this._owner;
  }
  public set owner(value: string | undefined) {
    this._owner = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: number;
  public get retention() {
    return this._retention;
  }
  public set retention(value: number | undefined) {
    this._retention = value;
  }

  // table_type - computed: false, optional: true, required: false
  private _tableType?: string;
  public get tableType() {
    return this._tableType;
  }
  public set tableType(value: string | undefined) {
    this._tableType = value;
  }

  // view_expanded_text - computed: false, optional: true, required: false
  private _viewExpandedText?: string;
  public get viewExpandedText() {
    return this._viewExpandedText;
  }
  public set viewExpandedText(value: string | undefined) {
    this._viewExpandedText = value;
  }

  // view_original_text - computed: false, optional: true, required: false
  private _viewOriginalText?: string;
  public get viewOriginalText() {
    return this._viewOriginalText;
  }
  public set viewOriginalText(value: string | undefined) {
    this._viewOriginalText = value;
  }

  // partition_keys - computed: false, optional: true, required: false
  private _partitionKeys?: GlueCatalogTablePartitionKeys[];
  public get partitionKeys() {
    return this._partitionKeys;
  }
  public set partitionKeys(value: GlueCatalogTablePartitionKeys[] | undefined) {
    this._partitionKeys = value;
  }

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor?: GlueCatalogTableStorageDescriptor[];
  public get storageDescriptor() {
    return this._storageDescriptor;
  }
  public set storageDescriptor(value: GlueCatalogTableStorageDescriptor[] | undefined) {
    this._storageDescriptor = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      database_name: this._databaseName,
      description: this._description,
      name: this._name,
      owner: this._owner,
      parameters: this._parameters,
      retention: this._retention,
      table_type: this._tableType,
      view_expanded_text: this._viewExpandedText,
      view_original_text: this._viewOriginalText,
      partition_keys: this._partitionKeys,
      storage_descriptor: this._storageDescriptor,
    };
  }
}
