// https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html
// generated from terraform resource schema

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string;
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string ) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: number;
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number ) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention
  }

  // table_type - computed: false, optional: true, required: false
  private _tableType?: string;
  public get tableType() {
    return this.getStringAttribute('table_type');
  }
  public set tableType(value: string ) {
    this._tableType = value;
  }
  public resetTableType() {
    this._tableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTypeInput() {
    return this._tableType
  }

  // view_expanded_text - computed: false, optional: true, required: false
  private _viewExpandedText?: string;
  public get viewExpandedText() {
    return this.getStringAttribute('view_expanded_text');
  }
  public set viewExpandedText(value: string ) {
    this._viewExpandedText = value;
  }
  public resetViewExpandedText() {
    this._viewExpandedText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewExpandedTextInput() {
    return this._viewExpandedText
  }

  // view_original_text - computed: false, optional: true, required: false
  private _viewOriginalText?: string;
  public get viewOriginalText() {
    return this.getStringAttribute('view_original_text');
  }
  public set viewOriginalText(value: string ) {
    this._viewOriginalText = value;
  }
  public resetViewOriginalText() {
    this._viewOriginalText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewOriginalTextInput() {
    return this._viewOriginalText
  }

  // partition_keys - computed: false, optional: true, required: false
  private _partitionKeys?: GlueCatalogTablePartitionKeys[];
  public get partitionKeys() {
    return this.interpolationForAttribute('partition_keys') as any;
  }
  public set partitionKeys(value: GlueCatalogTablePartitionKeys[] ) {
    this._partitionKeys = value;
  }
  public resetPartitionKeys() {
    this._partitionKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeysInput() {
    return this._partitionKeys
  }

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor?: GlueCatalogTableStorageDescriptor[];
  public get storageDescriptor() {
    return this.interpolationForAttribute('storage_descriptor') as any;
  }
  public set storageDescriptor(value: GlueCatalogTableStorageDescriptor[] ) {
    this._storageDescriptor = value;
  }
  public resetStorageDescriptor() {
    this._storageDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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
