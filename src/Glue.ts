// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export namespace Glue {
  export interface GlueCatalogDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#catalog_id GlueCatalogDatabase#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#description GlueCatalogDatabase#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#location_uri GlueCatalogDatabase#location_uri}
    */
    readonly locationUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#name GlueCatalogDatabase#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#parameters GlueCatalogDatabase#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * target_database block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#target_database GlueCatalogDatabase#target_database}
    */
    readonly targetDatabase?: GlueCatalogDatabaseTargetDatabase;
  }
  export interface GlueCatalogDatabaseTargetDatabase {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#catalog_id GlueCatalogDatabase#catalog_id}
    */
    readonly catalogId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#database_name GlueCatalogDatabase#database_name}
    */
    readonly databaseName: string;
  }

  function glueCatalogDatabaseTargetDatabaseToTerraform(struct?: GlueCatalogDatabaseTargetDatabaseOutputReference | GlueCatalogDatabaseTargetDatabase): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
    }
  }

  export class GlueCatalogDatabaseTargetDatabaseOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // catalog_id - computed: false, optional: false, required: true
    private _catalogId?: string; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
      this._catalogId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html aws_glue_catalog_database}
  */
  export class GlueCatalogDatabase extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_catalog_database";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html aws_glue_catalog_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCatalogDatabaseConfig
    */
    public constructor(scope: Construct, id: string, config: GlueCatalogDatabaseConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_catalog_database',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._catalogId = config.catalogId;
      this._description = config.description;
      this._locationUri = config.locationUri;
      this._name = config.name;
      this._parameters = config.parameters;
      this._targetDatabase = config.targetDatabase;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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

    // location_uri - computed: true, optional: true, required: false
    private _locationUri?: string | undefined; 
    public get locationUri() {
      return this.getStringAttribute('location_uri');
    }
    public set locationUri(value: string | undefined) {
      this._locationUri = value;
    }
    public resetLocationUri() {
      this._locationUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationUriInput() {
      return this._locationUri
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
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

    // parameters - computed: false, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // target_database - computed: false, optional: true, required: false
    private _targetDatabase?: GlueCatalogDatabaseTargetDatabase | undefined; 
    private __targetDatabaseOutput = new GlueCatalogDatabaseTargetDatabaseOutputReference(this as any, "target_database", true);
    public get targetDatabase() {
      return this.__targetDatabaseOutput;
    }
    public putTargetDatabase(value: GlueCatalogDatabaseTargetDatabase | undefined) {
      this._targetDatabase = value;
    }
    public resetTargetDatabase() {
      this._targetDatabase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetDatabaseInput() {
      return this._targetDatabase
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        catalog_id: cdktf.stringToTerraform(this._catalogId),
        description: cdktf.stringToTerraform(this._description),
        location_uri: cdktf.stringToTerraform(this._locationUri),
        name: cdktf.stringToTerraform(this._name),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
        target_database: glueCatalogDatabaseTargetDatabaseToTerraform(this._targetDatabase),
      };
    }
  }
  export interface GlueCatalogTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#catalog_id GlueCatalogTable#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#database_name GlueCatalogTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#description GlueCatalogTable#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#owner GlueCatalogTable#owner}
    */
    readonly owner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#retention GlueCatalogTable#retention}
    */
    readonly retention?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#table_type GlueCatalogTable#table_type}
    */
    readonly tableType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#view_expanded_text GlueCatalogTable#view_expanded_text}
    */
    readonly viewExpandedText?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#view_original_text GlueCatalogTable#view_original_text}
    */
    readonly viewOriginalText?: string;
    /**
    * partition_index block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#partition_index GlueCatalogTable#partition_index}
    */
    readonly partitionIndex?: GlueCatalogTablePartitionIndex[];
    /**
    * partition_keys block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#partition_keys GlueCatalogTable#partition_keys}
    */
    readonly partitionKeys?: GlueCatalogTablePartitionKeys[];
    /**
    * storage_descriptor block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#storage_descriptor GlueCatalogTable#storage_descriptor}
    */
    readonly storageDescriptor?: GlueCatalogTableStorageDescriptor;
    /**
    * target_table block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#target_table GlueCatalogTable#target_table}
    */
    readonly targetTable?: GlueCatalogTableTargetTable;
  }
  export interface GlueCatalogTablePartitionIndex {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#index_name GlueCatalogTable#index_name}
    */
    readonly indexName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#keys GlueCatalogTable#keys}
    */
    readonly keys: string[];
  }

  function glueCatalogTablePartitionIndexToTerraform(struct?: GlueCatalogTablePartitionIndex): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      index_name: cdktf.stringToTerraform(struct!.indexName),
      keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keys),
    }
  }

  export interface GlueCatalogTablePartitionKeys {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#comment GlueCatalogTable#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#type GlueCatalogTable#type}
    */
    readonly type?: string;
  }

  function glueCatalogTablePartitionKeysToTerraform(struct?: GlueCatalogTablePartitionKeys): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      comment: cdktf.stringToTerraform(struct!.comment),
      name: cdktf.stringToTerraform(struct!.name),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface GlueCatalogTableStorageDescriptorColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#comment GlueCatalogTable#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#type GlueCatalogTable#type}
    */
    readonly type?: string;
  }

  function glueCatalogTableStorageDescriptorColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorColumns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      comment: cdktf.stringToTerraform(struct!.comment),
      name: cdktf.stringToTerraform(struct!.name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#registry_name GlueCatalogTable#registry_name}
    */
    readonly registryName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_arn GlueCatalogTable#schema_arn}
    */
    readonly schemaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_name GlueCatalogTable#schema_name}
    */
    readonly schemaName?: string;
  }

  function glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference | GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      registry_name: cdktf.stringToTerraform(struct!.registryName),
      schema_arn: cdktf.stringToTerraform(struct!.schemaArn),
      schema_name: cdktf.stringToTerraform(struct!.schemaName),
    }
  }

  export class GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // registry_name - computed: false, optional: true, required: false
    private _registryName?: string | undefined; 
    public get registryName() {
      return this.getStringAttribute('registry_name');
    }
    public set registryName(value: string | undefined) {
      this._registryName = value;
    }
    public resetRegistryName() {
      this._registryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registryNameInput() {
      return this._registryName
    }

    // schema_arn - computed: false, optional: true, required: false
    private _schemaArn?: string | undefined; 
    public get schemaArn() {
      return this.getStringAttribute('schema_arn');
    }
    public set schemaArn(value: string | undefined) {
      this._schemaArn = value;
    }
    public resetSchemaArn() {
      this._schemaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaArnInput() {
      return this._schemaArn
    }

    // schema_name - computed: false, optional: true, required: false
    private _schemaName?: string | undefined; 
    public get schemaName() {
      return this.getStringAttribute('schema_name');
    }
    public set schemaName(value: string | undefined) {
      this._schemaName = value;
    }
    public resetSchemaName() {
      this._schemaName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaNameInput() {
      return this._schemaName
    }
  }
  export interface GlueCatalogTableStorageDescriptorSchemaReference {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_version_id GlueCatalogTable#schema_version_id}
    */
    readonly schemaVersionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_version_number GlueCatalogTable#schema_version_number}
    */
    readonly schemaVersionNumber: number;
    /**
    * schema_id block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_id GlueCatalogTable#schema_id}
    */
    readonly schemaId?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
  }

  function glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference | GlueCatalogTableStorageDescriptorSchemaReference): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      schema_version_id: cdktf.stringToTerraform(struct!.schemaVersionId),
      schema_version_number: cdktf.numberToTerraform(struct!.schemaVersionNumber),
      schema_id: glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct!.schemaId),
    }
  }

  export class GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // schema_version_id - computed: false, optional: true, required: false
    private _schemaVersionId?: string | undefined; 
    public get schemaVersionId() {
      return this.getStringAttribute('schema_version_id');
    }
    public set schemaVersionId(value: string | undefined) {
      this._schemaVersionId = value;
    }
    public resetSchemaVersionId() {
      this._schemaVersionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaVersionIdInput() {
      return this._schemaVersionId
    }

    // schema_version_number - computed: false, optional: false, required: true
    private _schemaVersionNumber?: number; 
    public get schemaVersionNumber() {
      return this.getNumberAttribute('schema_version_number');
    }
    public set schemaVersionNumber(value: number) {
      this._schemaVersionNumber = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaVersionNumberInput() {
      return this._schemaVersionNumber
    }

    // schema_id - computed: false, optional: true, required: false
    private _schemaId?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined; 
    private __schemaIdOutput = new GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference(this as any, "schema_id", true);
    public get schemaId() {
      return this.__schemaIdOutput;
    }
    public putSchemaId(value: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined) {
      this._schemaId = value;
    }
    public resetSchemaId() {
      this._schemaId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaIdInput() {
      return this._schemaId
    }
  }
  export interface GlueCatalogTableStorageDescriptorSerDeInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#serialization_library GlueCatalogTable#serialization_library}
    */
    readonly serializationLibrary?: string;
  }

  function glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSerDeInfoOutputReference | GlueCatalogTableStorageDescriptorSerDeInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
      serialization_library: cdktf.stringToTerraform(struct!.serializationLibrary),
    }
  }

  export class GlueCatalogTableStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // parameters - computed: false, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // serialization_library - computed: false, optional: true, required: false
    private _serializationLibrary?: string | undefined; 
    public get serializationLibrary() {
      return this.getStringAttribute('serialization_library');
    }
    public set serializationLibrary(value: string | undefined) {
      this._serializationLibrary = value;
    }
    public resetSerializationLibrary() {
      this._serializationLibrary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serializationLibraryInput() {
      return this._serializationLibrary
    }
  }
  export interface GlueCatalogTableStorageDescriptorSkewedInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_names GlueCatalogTable#skewed_column_names}
    */
    readonly skewedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}
    */
    readonly skewedColumnValueLocationMaps?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_values GlueCatalogTable#skewed_column_values}
    */
    readonly skewedColumnValues?: string[];
  }

  function glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSkewedInfoOutputReference | GlueCatalogTableStorageDescriptorSkewedInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      skewed_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnNames),
      skewed_column_value_location_maps: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.skewedColumnValueLocationMaps),
      skewed_column_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnValues),
    }
  }

  export class GlueCatalogTableStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // skewed_column_names - computed: false, optional: true, required: false
    private _skewedColumnNames?: string[] | undefined; 
    public get skewedColumnNames() {
      return this.getListAttribute('skewed_column_names');
    }
    public set skewedColumnNames(value: string[] | undefined) {
      this._skewedColumnNames = value;
    }
    public resetSkewedColumnNames() {
      this._skewedColumnNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedColumnNamesInput() {
      return this._skewedColumnNames
    }

    // skewed_column_value_location_maps - computed: false, optional: true, required: false
    private _skewedColumnValueLocationMaps?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get skewedColumnValueLocationMaps() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('skewed_column_value_location_maps') as any;
    }
    public set skewedColumnValueLocationMaps(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._skewedColumnValueLocationMaps = value;
    }
    public resetSkewedColumnValueLocationMaps() {
      this._skewedColumnValueLocationMaps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedColumnValueLocationMapsInput() {
      return this._skewedColumnValueLocationMaps
    }

    // skewed_column_values - computed: false, optional: true, required: false
    private _skewedColumnValues?: string[] | undefined; 
    public get skewedColumnValues() {
      return this.getListAttribute('skewed_column_values');
    }
    public set skewedColumnValues(value: string[] | undefined) {
      this._skewedColumnValues = value;
    }
    public resetSkewedColumnValues() {
      this._skewedColumnValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedColumnValuesInput() {
      return this._skewedColumnValues
    }
  }
  export interface GlueCatalogTableStorageDescriptorSortColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#column GlueCatalogTable#column}
    */
    readonly column: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#sort_order GlueCatalogTable#sort_order}
    */
    readonly sortOrder: number;
  }

  function glueCatalogTableStorageDescriptorSortColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorSortColumns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      column: cdktf.stringToTerraform(struct!.column),
      sort_order: cdktf.numberToTerraform(struct!.sortOrder),
    }
  }

  export interface GlueCatalogTableStorageDescriptor {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#bucket_columns GlueCatalogTable#bucket_columns}
    */
    readonly bucketColumns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#compressed GlueCatalogTable#compressed}
    */
    readonly compressed?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#input_format GlueCatalogTable#input_format}
    */
    readonly inputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#location GlueCatalogTable#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#number_of_buckets GlueCatalogTable#number_of_buckets}
    */
    readonly numberOfBuckets?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#output_format GlueCatalogTable#output_format}
    */
    readonly outputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}
    */
    readonly storedAsSubDirectories?: boolean | cdktf.IResolvable;
    /**
    * columns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#columns GlueCatalogTable#columns}
    */
    readonly columns?: GlueCatalogTableStorageDescriptorColumns[];
    /**
    * schema_reference block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_reference GlueCatalogTable#schema_reference}
    */
    readonly schemaReference?: GlueCatalogTableStorageDescriptorSchemaReference;
    /**
    * ser_de_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#ser_de_info GlueCatalogTable#ser_de_info}
    */
    readonly serDeInfo?: GlueCatalogTableStorageDescriptorSerDeInfo;
    /**
    * skewed_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_info GlueCatalogTable#skewed_info}
    */
    readonly skewedInfo?: GlueCatalogTableStorageDescriptorSkewedInfo;
    /**
    * sort_columns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#sort_columns GlueCatalogTable#sort_columns}
    */
    readonly sortColumns?: GlueCatalogTableStorageDescriptorSortColumns[];
  }

  function glueCatalogTableStorageDescriptorToTerraform(struct?: GlueCatalogTableStorageDescriptorOutputReference | GlueCatalogTableStorageDescriptor): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.bucketColumns),
      compressed: cdktf.booleanToTerraform(struct!.compressed),
      input_format: cdktf.stringToTerraform(struct!.inputFormat),
      location: cdktf.stringToTerraform(struct!.location),
      number_of_buckets: cdktf.numberToTerraform(struct!.numberOfBuckets),
      output_format: cdktf.stringToTerraform(struct!.outputFormat),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
      stored_as_sub_directories: cdktf.booleanToTerraform(struct!.storedAsSubDirectories),
      columns: cdktf.listMapper(glueCatalogTableStorageDescriptorColumnsToTerraform)(struct!.columns),
      schema_reference: glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct!.schemaReference),
      ser_de_info: glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct!.serDeInfo),
      skewed_info: glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct!.skewedInfo),
      sort_columns: cdktf.listMapper(glueCatalogTableStorageDescriptorSortColumnsToTerraform)(struct!.sortColumns),
    }
  }

  export class GlueCatalogTableStorageDescriptorOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_columns - computed: false, optional: true, required: false
    private _bucketColumns?: string[] | undefined; 
    public get bucketColumns() {
      return this.getListAttribute('bucket_columns');
    }
    public set bucketColumns(value: string[] | undefined) {
      this._bucketColumns = value;
    }
    public resetBucketColumns() {
      this._bucketColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketColumnsInput() {
      return this._bucketColumns
    }

    // compressed - computed: false, optional: true, required: false
    private _compressed?: boolean | cdktf.IResolvable | undefined; 
    public get compressed() {
      return this.getBooleanAttribute('compressed') as any;
    }
    public set compressed(value: boolean | cdktf.IResolvable | undefined) {
      this._compressed = value;
    }
    public resetCompressed() {
      this._compressed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressedInput() {
      return this._compressed
    }

    // input_format - computed: false, optional: true, required: false
    private _inputFormat?: string | undefined; 
    public get inputFormat() {
      return this.getStringAttribute('input_format');
    }
    public set inputFormat(value: string | undefined) {
      this._inputFormat = value;
    }
    public resetInputFormat() {
      this._inputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputFormatInput() {
      return this._inputFormat
    }

    // location - computed: false, optional: true, required: false
    private _location?: string | undefined; 
    public get location() {
      return this.getStringAttribute('location');
    }
    public set location(value: string | undefined) {
      this._location = value;
    }
    public resetLocation() {
      this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
      return this._location
    }

    // number_of_buckets - computed: false, optional: true, required: false
    private _numberOfBuckets?: number | undefined; 
    public get numberOfBuckets() {
      return this.getNumberAttribute('number_of_buckets');
    }
    public set numberOfBuckets(value: number | undefined) {
      this._numberOfBuckets = value;
    }
    public resetNumberOfBuckets() {
      this._numberOfBuckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfBucketsInput() {
      return this._numberOfBuckets
    }

    // output_format - computed: false, optional: true, required: false
    private _outputFormat?: string | undefined; 
    public get outputFormat() {
      return this.getStringAttribute('output_format');
    }
    public set outputFormat(value: string | undefined) {
      this._outputFormat = value;
    }
    public resetOutputFormat() {
      this._outputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputFormatInput() {
      return this._outputFormat
    }

    // parameters - computed: false, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // stored_as_sub_directories - computed: false, optional: true, required: false
    private _storedAsSubDirectories?: boolean | cdktf.IResolvable | undefined; 
    public get storedAsSubDirectories() {
      return this.getBooleanAttribute('stored_as_sub_directories') as any;
    }
    public set storedAsSubDirectories(value: boolean | cdktf.IResolvable | undefined) {
      this._storedAsSubDirectories = value;
    }
    public resetStoredAsSubDirectories() {
      this._storedAsSubDirectories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storedAsSubDirectoriesInput() {
      return this._storedAsSubDirectories
    }

    // columns - computed: false, optional: true, required: false
    private _columns?: GlueCatalogTableStorageDescriptorColumns[] | undefined; 
    public get columns() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('columns') as any;
    }
    public set columns(value: GlueCatalogTableStorageDescriptorColumns[] | undefined) {
      this._columns = value;
    }
    public resetColumns() {
      this._columns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnsInput() {
      return this._columns
    }

    // schema_reference - computed: false, optional: true, required: false
    private _schemaReference?: GlueCatalogTableStorageDescriptorSchemaReference | undefined; 
    private __schemaReferenceOutput = new GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference(this as any, "schema_reference", true);
    public get schemaReference() {
      return this.__schemaReferenceOutput;
    }
    public putSchemaReference(value: GlueCatalogTableStorageDescriptorSchemaReference | undefined) {
      this._schemaReference = value;
    }
    public resetSchemaReference() {
      this._schemaReference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaReferenceInput() {
      return this._schemaReference
    }

    // ser_de_info - computed: false, optional: true, required: false
    private _serDeInfo?: GlueCatalogTableStorageDescriptorSerDeInfo | undefined; 
    private __serDeInfoOutput = new GlueCatalogTableStorageDescriptorSerDeInfoOutputReference(this as any, "ser_de_info", true);
    public get serDeInfo() {
      return this.__serDeInfoOutput;
    }
    public putSerDeInfo(value: GlueCatalogTableStorageDescriptorSerDeInfo | undefined) {
      this._serDeInfo = value;
    }
    public resetSerDeInfo() {
      this._serDeInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serDeInfoInput() {
      return this._serDeInfo
    }

    // skewed_info - computed: false, optional: true, required: false
    private _skewedInfo?: GlueCatalogTableStorageDescriptorSkewedInfo | undefined; 
    private __skewedInfoOutput = new GlueCatalogTableStorageDescriptorSkewedInfoOutputReference(this as any, "skewed_info", true);
    public get skewedInfo() {
      return this.__skewedInfoOutput;
    }
    public putSkewedInfo(value: GlueCatalogTableStorageDescriptorSkewedInfo | undefined) {
      this._skewedInfo = value;
    }
    public resetSkewedInfo() {
      this._skewedInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedInfoInput() {
      return this._skewedInfo
    }

    // sort_columns - computed: false, optional: true, required: false
    private _sortColumns?: GlueCatalogTableStorageDescriptorSortColumns[] | undefined; 
    public get sortColumns() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('sort_columns') as any;
    }
    public set sortColumns(value: GlueCatalogTableStorageDescriptorSortColumns[] | undefined) {
      this._sortColumns = value;
    }
    public resetSortColumns() {
      this._sortColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sortColumnsInput() {
      return this._sortColumns
    }
  }
  export interface GlueCatalogTableTargetTable {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#catalog_id GlueCatalogTable#catalog_id}
    */
    readonly catalogId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#database_name GlueCatalogTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
    */
    readonly name: string;
  }

  function glueCatalogTableTargetTableToTerraform(struct?: GlueCatalogTableTargetTableOutputReference | GlueCatalogTableTargetTable): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      name: cdktf.stringToTerraform(struct!.name),
    }
  }

  export class GlueCatalogTableTargetTableOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // catalog_id - computed: false, optional: false, required: true
    private _catalogId?: string; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
      this._catalogId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
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

    // name - computed: false, optional: false, required: true
    private _name?: string; 
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table}
  */
  export class GlueCatalogTable extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_catalog_table";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCatalogTableConfig
    */
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
      this._partitionIndex = config.partitionIndex;
      this._partitionKeys = config.partitionKeys;
      this._storageDescriptor = config.storageDescriptor;
      this._targetTable = config.targetTable;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
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
    private _databaseName?: string; 
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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
    private _owner?: string | undefined; 
    public get owner() {
      return this.getStringAttribute('owner');
    }
    public set owner(value: string | undefined) {
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
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _retention?: number | undefined; 
    public get retention() {
      return this.getNumberAttribute('retention');
    }
    public set retention(value: number | undefined) {
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
    private _tableType?: string | undefined; 
    public get tableType() {
      return this.getStringAttribute('table_type');
    }
    public set tableType(value: string | undefined) {
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
    private _viewExpandedText?: string | undefined; 
    public get viewExpandedText() {
      return this.getStringAttribute('view_expanded_text');
    }
    public set viewExpandedText(value: string | undefined) {
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
    private _viewOriginalText?: string | undefined; 
    public get viewOriginalText() {
      return this.getStringAttribute('view_original_text');
    }
    public set viewOriginalText(value: string | undefined) {
      this._viewOriginalText = value;
    }
    public resetViewOriginalText() {
      this._viewOriginalText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get viewOriginalTextInput() {
      return this._viewOriginalText
    }

    // partition_index - computed: false, optional: true, required: false
    private _partitionIndex?: GlueCatalogTablePartitionIndex[] | undefined; 
    public get partitionIndex() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('partition_index') as any;
    }
    public set partitionIndex(value: GlueCatalogTablePartitionIndex[] | undefined) {
      this._partitionIndex = value;
    }
    public resetPartitionIndex() {
      this._partitionIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionIndexInput() {
      return this._partitionIndex
    }

    // partition_keys - computed: false, optional: true, required: false
    private _partitionKeys?: GlueCatalogTablePartitionKeys[] | undefined; 
    public get partitionKeys() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('partition_keys') as any;
    }
    public set partitionKeys(value: GlueCatalogTablePartitionKeys[] | undefined) {
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
    private _storageDescriptor?: GlueCatalogTableStorageDescriptor | undefined; 
    private __storageDescriptorOutput = new GlueCatalogTableStorageDescriptorOutputReference(this as any, "storage_descriptor", true);
    public get storageDescriptor() {
      return this.__storageDescriptorOutput;
    }
    public putStorageDescriptor(value: GlueCatalogTableStorageDescriptor | undefined) {
      this._storageDescriptor = value;
    }
    public resetStorageDescriptor() {
      this._storageDescriptor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageDescriptorInput() {
      return this._storageDescriptor
    }

    // target_table - computed: false, optional: true, required: false
    private _targetTable?: GlueCatalogTableTargetTable | undefined; 
    private __targetTableOutput = new GlueCatalogTableTargetTableOutputReference(this as any, "target_table", true);
    public get targetTable() {
      return this.__targetTableOutput;
    }
    public putTargetTable(value: GlueCatalogTableTargetTable | undefined) {
      this._targetTable = value;
    }
    public resetTargetTable() {
      this._targetTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTableInput() {
      return this._targetTable
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        catalog_id: cdktf.stringToTerraform(this._catalogId),
        database_name: cdktf.stringToTerraform(this._databaseName),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        owner: cdktf.stringToTerraform(this._owner),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
        retention: cdktf.numberToTerraform(this._retention),
        table_type: cdktf.stringToTerraform(this._tableType),
        view_expanded_text: cdktf.stringToTerraform(this._viewExpandedText),
        view_original_text: cdktf.stringToTerraform(this._viewOriginalText),
        partition_index: cdktf.listMapper(glueCatalogTablePartitionIndexToTerraform)(this._partitionIndex),
        partition_keys: cdktf.listMapper(glueCatalogTablePartitionKeysToTerraform)(this._partitionKeys),
        storage_descriptor: glueCatalogTableStorageDescriptorToTerraform(this._storageDescriptor),
        target_table: glueCatalogTableTargetTableToTerraform(this._targetTable),
      };
    }
  }
  export interface GlueClassifierConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#name GlueClassifier#name}
    */
    readonly name: string;
    /**
    * csv_classifier block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#csv_classifier GlueClassifier#csv_classifier}
    */
    readonly csvClassifier?: GlueClassifierCsvClassifier;
    /**
    * grok_classifier block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#grok_classifier GlueClassifier#grok_classifier}
    */
    readonly grokClassifier?: GlueClassifierGrokClassifier;
    /**
    * json_classifier block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#json_classifier GlueClassifier#json_classifier}
    */
    readonly jsonClassifier?: GlueClassifierJsonClassifier;
    /**
    * xml_classifier block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#xml_classifier GlueClassifier#xml_classifier}
    */
    readonly xmlClassifier?: GlueClassifierXmlClassifier;
  }
  export interface GlueClassifierCsvClassifier {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#allow_single_column GlueClassifier#allow_single_column}
    */
    readonly allowSingleColumn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#contains_header GlueClassifier#contains_header}
    */
    readonly containsHeader?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#delimiter GlueClassifier#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#disable_value_trimming GlueClassifier#disable_value_trimming}
    */
    readonly disableValueTrimming?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#header GlueClassifier#header}
    */
    readonly header?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#quote_symbol GlueClassifier#quote_symbol}
    */
    readonly quoteSymbol?: string;
  }

  function glueClassifierCsvClassifierToTerraform(struct?: GlueClassifierCsvClassifierOutputReference | GlueClassifierCsvClassifier): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allow_single_column: cdktf.booleanToTerraform(struct!.allowSingleColumn),
      contains_header: cdktf.stringToTerraform(struct!.containsHeader),
      delimiter: cdktf.stringToTerraform(struct!.delimiter),
      disable_value_trimming: cdktf.booleanToTerraform(struct!.disableValueTrimming),
      header: cdktf.listMapper(cdktf.stringToTerraform)(struct!.header),
      quote_symbol: cdktf.stringToTerraform(struct!.quoteSymbol),
    }
  }

  export class GlueClassifierCsvClassifierOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allow_single_column - computed: false, optional: true, required: false
    private _allowSingleColumn?: boolean | cdktf.IResolvable | undefined; 
    public get allowSingleColumn() {
      return this.getBooleanAttribute('allow_single_column') as any;
    }
    public set allowSingleColumn(value: boolean | cdktf.IResolvable | undefined) {
      this._allowSingleColumn = value;
    }
    public resetAllowSingleColumn() {
      this._allowSingleColumn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowSingleColumnInput() {
      return this._allowSingleColumn
    }

    // contains_header - computed: false, optional: true, required: false
    private _containsHeader?: string | undefined; 
    public get containsHeader() {
      return this.getStringAttribute('contains_header');
    }
    public set containsHeader(value: string | undefined) {
      this._containsHeader = value;
    }
    public resetContainsHeader() {
      this._containsHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containsHeaderInput() {
      return this._containsHeader
    }

    // delimiter - computed: false, optional: true, required: false
    private _delimiter?: string | undefined; 
    public get delimiter() {
      return this.getStringAttribute('delimiter');
    }
    public set delimiter(value: string | undefined) {
      this._delimiter = value;
    }
    public resetDelimiter() {
      this._delimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delimiterInput() {
      return this._delimiter
    }

    // disable_value_trimming - computed: false, optional: true, required: false
    private _disableValueTrimming?: boolean | cdktf.IResolvable | undefined; 
    public get disableValueTrimming() {
      return this.getBooleanAttribute('disable_value_trimming') as any;
    }
    public set disableValueTrimming(value: boolean | cdktf.IResolvable | undefined) {
      this._disableValueTrimming = value;
    }
    public resetDisableValueTrimming() {
      this._disableValueTrimming = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableValueTrimmingInput() {
      return this._disableValueTrimming
    }

    // header - computed: false, optional: true, required: false
    private _header?: string[] | undefined; 
    public get header() {
      return this.getListAttribute('header');
    }
    public set header(value: string[] | undefined) {
      this._header = value;
    }
    public resetHeader() {
      this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
      return this._header
    }

    // quote_symbol - computed: false, optional: true, required: false
    private _quoteSymbol?: string | undefined; 
    public get quoteSymbol() {
      return this.getStringAttribute('quote_symbol');
    }
    public set quoteSymbol(value: string | undefined) {
      this._quoteSymbol = value;
    }
    public resetQuoteSymbol() {
      this._quoteSymbol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quoteSymbolInput() {
      return this._quoteSymbol
    }
  }
  export interface GlueClassifierGrokClassifier {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#classification GlueClassifier#classification}
    */
    readonly classification: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#custom_patterns GlueClassifier#custom_patterns}
    */
    readonly customPatterns?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#grok_pattern GlueClassifier#grok_pattern}
    */
    readonly grokPattern: string;
  }

  function glueClassifierGrokClassifierToTerraform(struct?: GlueClassifierGrokClassifierOutputReference | GlueClassifierGrokClassifier): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      classification: cdktf.stringToTerraform(struct!.classification),
      custom_patterns: cdktf.stringToTerraform(struct!.customPatterns),
      grok_pattern: cdktf.stringToTerraform(struct!.grokPattern),
    }
  }

  export class GlueClassifierGrokClassifierOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // classification - computed: false, optional: false, required: true
    private _classification?: string; 
    public get classification() {
      return this.getStringAttribute('classification');
    }
    public set classification(value: string) {
      this._classification = value;
    }
    // Temporarily expose input value. Use with caution.
    public get classificationInput() {
      return this._classification
    }

    // custom_patterns - computed: false, optional: true, required: false
    private _customPatterns?: string | undefined; 
    public get customPatterns() {
      return this.getStringAttribute('custom_patterns');
    }
    public set customPatterns(value: string | undefined) {
      this._customPatterns = value;
    }
    public resetCustomPatterns() {
      this._customPatterns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customPatternsInput() {
      return this._customPatterns
    }

    // grok_pattern - computed: false, optional: false, required: true
    private _grokPattern?: string; 
    public get grokPattern() {
      return this.getStringAttribute('grok_pattern');
    }
    public set grokPattern(value: string) {
      this._grokPattern = value;
    }
    // Temporarily expose input value. Use with caution.
    public get grokPatternInput() {
      return this._grokPattern
    }
  }
  export interface GlueClassifierJsonClassifier {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#json_path GlueClassifier#json_path}
    */
    readonly jsonPath: string;
  }

  function glueClassifierJsonClassifierToTerraform(struct?: GlueClassifierJsonClassifierOutputReference | GlueClassifierJsonClassifier): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      json_path: cdktf.stringToTerraform(struct!.jsonPath),
    }
  }

  export class GlueClassifierJsonClassifierOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // json_path - computed: false, optional: false, required: true
    private _jsonPath?: string; 
    public get jsonPath() {
      return this.getStringAttribute('json_path');
    }
    public set jsonPath(value: string) {
      this._jsonPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonPathInput() {
      return this._jsonPath
    }
  }
  export interface GlueClassifierXmlClassifier {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#classification GlueClassifier#classification}
    */
    readonly classification: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#row_tag GlueClassifier#row_tag}
    */
    readonly rowTag: string;
  }

  function glueClassifierXmlClassifierToTerraform(struct?: GlueClassifierXmlClassifierOutputReference | GlueClassifierXmlClassifier): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      classification: cdktf.stringToTerraform(struct!.classification),
      row_tag: cdktf.stringToTerraform(struct!.rowTag),
    }
  }

  export class GlueClassifierXmlClassifierOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // classification - computed: false, optional: false, required: true
    private _classification?: string; 
    public get classification() {
      return this.getStringAttribute('classification');
    }
    public set classification(value: string) {
      this._classification = value;
    }
    // Temporarily expose input value. Use with caution.
    public get classificationInput() {
      return this._classification
    }

    // row_tag - computed: false, optional: false, required: true
    private _rowTag?: string; 
    public get rowTag() {
      return this.getStringAttribute('row_tag');
    }
    public set rowTag(value: string) {
      this._rowTag = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rowTagInput() {
      return this._rowTag
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier}
  */
  export class GlueClassifier extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_classifier";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueClassifierConfig
    */
    public constructor(scope: Construct, id: string, config: GlueClassifierConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_classifier',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._csvClassifier = config.csvClassifier;
      this._grokClassifier = config.grokClassifier;
      this._jsonClassifier = config.jsonClassifier;
      this._xmlClassifier = config.xmlClassifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
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

    // csv_classifier - computed: false, optional: true, required: false
    private _csvClassifier?: GlueClassifierCsvClassifier | undefined; 
    private __csvClassifierOutput = new GlueClassifierCsvClassifierOutputReference(this as any, "csv_classifier", true);
    public get csvClassifier() {
      return this.__csvClassifierOutput;
    }
    public putCsvClassifier(value: GlueClassifierCsvClassifier | undefined) {
      this._csvClassifier = value;
    }
    public resetCsvClassifier() {
      this._csvClassifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvClassifierInput() {
      return this._csvClassifier
    }

    // grok_classifier - computed: false, optional: true, required: false
    private _grokClassifier?: GlueClassifierGrokClassifier | undefined; 
    private __grokClassifierOutput = new GlueClassifierGrokClassifierOutputReference(this as any, "grok_classifier", true);
    public get grokClassifier() {
      return this.__grokClassifierOutput;
    }
    public putGrokClassifier(value: GlueClassifierGrokClassifier | undefined) {
      this._grokClassifier = value;
    }
    public resetGrokClassifier() {
      this._grokClassifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grokClassifierInput() {
      return this._grokClassifier
    }

    // json_classifier - computed: false, optional: true, required: false
    private _jsonClassifier?: GlueClassifierJsonClassifier | undefined; 
    private __jsonClassifierOutput = new GlueClassifierJsonClassifierOutputReference(this as any, "json_classifier", true);
    public get jsonClassifier() {
      return this.__jsonClassifierOutput;
    }
    public putJsonClassifier(value: GlueClassifierJsonClassifier | undefined) {
      this._jsonClassifier = value;
    }
    public resetJsonClassifier() {
      this._jsonClassifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonClassifierInput() {
      return this._jsonClassifier
    }

    // xml_classifier - computed: false, optional: true, required: false
    private _xmlClassifier?: GlueClassifierXmlClassifier | undefined; 
    private __xmlClassifierOutput = new GlueClassifierXmlClassifierOutputReference(this as any, "xml_classifier", true);
    public get xmlClassifier() {
      return this.__xmlClassifierOutput;
    }
    public putXmlClassifier(value: GlueClassifierXmlClassifier | undefined) {
      this._xmlClassifier = value;
    }
    public resetXmlClassifier() {
      this._xmlClassifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get xmlClassifierInput() {
      return this._xmlClassifier
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        csv_classifier: glueClassifierCsvClassifierToTerraform(this._csvClassifier),
        grok_classifier: glueClassifierGrokClassifierToTerraform(this._grokClassifier),
        json_classifier: glueClassifierJsonClassifierToTerraform(this._jsonClassifier),
        xml_classifier: glueClassifierXmlClassifierToTerraform(this._xmlClassifier),
      };
    }
  }
  export interface GlueConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#catalog_id GlueConnection#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#connection_properties GlueConnection#connection_properties}
    */
    readonly connectionProperties?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#connection_type GlueConnection#connection_type}
    */
    readonly connectionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#description GlueConnection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#match_criteria GlueConnection#match_criteria}
    */
    readonly matchCriteria?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#name GlueConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#tags GlueConnection#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#tags_all GlueConnection#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * physical_connection_requirements block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#physical_connection_requirements GlueConnection#physical_connection_requirements}
    */
    readonly physicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements;
  }
  export interface GlueConnectionPhysicalConnectionRequirements {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#availability_zone GlueConnection#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#security_group_id_list GlueConnection#security_group_id_list}
    */
    readonly securityGroupIdList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#subnet_id GlueConnection#subnet_id}
    */
    readonly subnetId?: string;
  }

  function glueConnectionPhysicalConnectionRequirementsToTerraform(struct?: GlueConnectionPhysicalConnectionRequirementsOutputReference | GlueConnectionPhysicalConnectionRequirements): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
      security_group_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIdList),
      subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    }
  }

  export class GlueConnectionPhysicalConnectionRequirementsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // availability_zone - computed: false, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // security_group_id_list - computed: false, optional: true, required: false
    private _securityGroupIdList?: string[] | undefined; 
    public get securityGroupIdList() {
      return this.getListAttribute('security_group_id_list');
    }
    public set securityGroupIdList(value: string[] | undefined) {
      this._securityGroupIdList = value;
    }
    public resetSecurityGroupIdList() {
      this._securityGroupIdList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdListInput() {
      return this._securityGroupIdList
    }

    // subnet_id - computed: false, optional: true, required: false
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
      this._subnetId = value;
    }
    public resetSubnetId() {
      this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html aws_glue_connection}
  */
  export class GlueConnection extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html aws_glue_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: GlueConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._catalogId = config.catalogId;
      this._connectionProperties = config.connectionProperties;
      this._connectionType = config.connectionType;
      this._description = config.description;
      this._matchCriteria = config.matchCriteria;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._physicalConnectionRequirements = config.physicalConnectionRequirements;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // connection_properties - computed: false, optional: true, required: false
    private _connectionProperties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get connectionProperties() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('connection_properties') as any;
    }
    public set connectionProperties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._connectionProperties = value;
    }
    public resetConnectionProperties() {
      this._connectionProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionPropertiesInput() {
      return this._connectionProperties
    }

    // connection_type - computed: false, optional: true, required: false
    private _connectionType?: string | undefined; 
    public get connectionType() {
      return this.getStringAttribute('connection_type');
    }
    public set connectionType(value: string | undefined) {
      this._connectionType = value;
    }
    public resetConnectionType() {
      this._connectionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTypeInput() {
      return this._connectionType
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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

    // match_criteria - computed: false, optional: true, required: false
    private _matchCriteria?: string[] | undefined; 
    public get matchCriteria() {
      return this.getListAttribute('match_criteria');
    }
    public set matchCriteria(value: string[] | undefined) {
      this._matchCriteria = value;
    }
    public resetMatchCriteria() {
      this._matchCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchCriteriaInput() {
      return this._matchCriteria
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
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

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // physical_connection_requirements - computed: false, optional: true, required: false
    private _physicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements | undefined; 
    private __physicalConnectionRequirementsOutput = new GlueConnectionPhysicalConnectionRequirementsOutputReference(this as any, "physical_connection_requirements", true);
    public get physicalConnectionRequirements() {
      return this.__physicalConnectionRequirementsOutput;
    }
    public putPhysicalConnectionRequirements(value: GlueConnectionPhysicalConnectionRequirements | undefined) {
      this._physicalConnectionRequirements = value;
    }
    public resetPhysicalConnectionRequirements() {
      this._physicalConnectionRequirements = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get physicalConnectionRequirementsInput() {
      return this._physicalConnectionRequirements
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        catalog_id: cdktf.stringToTerraform(this._catalogId),
        connection_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._connectionProperties),
        connection_type: cdktf.stringToTerraform(this._connectionType),
        description: cdktf.stringToTerraform(this._description),
        match_criteria: cdktf.listMapper(cdktf.stringToTerraform)(this._matchCriteria),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        physical_connection_requirements: glueConnectionPhysicalConnectionRequirementsToTerraform(this._physicalConnectionRequirements),
      };
    }
  }
  export interface GlueCrawlerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#classifiers GlueCrawler#classifiers}
    */
    readonly classifiers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#configuration GlueCrawler#configuration}
    */
    readonly configuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#database_name GlueCrawler#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#description GlueCrawler#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#name GlueCrawler#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#role GlueCrawler#role}
    */
    readonly role: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#schedule GlueCrawler#schedule}
    */
    readonly schedule?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#security_configuration GlueCrawler#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#table_prefix GlueCrawler#table_prefix}
    */
    readonly tablePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#tags GlueCrawler#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#tags_all GlueCrawler#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * catalog_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#catalog_target GlueCrawler#catalog_target}
    */
    readonly catalogTarget?: GlueCrawlerCatalogTarget[];
    /**
    * dynamodb_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#dynamodb_target GlueCrawler#dynamodb_target}
    */
    readonly dynamodbTarget?: GlueCrawlerDynamodbTarget[];
    /**
    * jdbc_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#jdbc_target GlueCrawler#jdbc_target}
    */
    readonly jdbcTarget?: GlueCrawlerJdbcTarget[];
    /**
    * lineage_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#lineage_configuration GlueCrawler#lineage_configuration}
    */
    readonly lineageConfiguration?: GlueCrawlerLineageConfiguration;
    /**
    * mongodb_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#mongodb_target GlueCrawler#mongodb_target}
    */
    readonly mongodbTarget?: GlueCrawlerMongodbTarget[];
    /**
    * recrawl_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#recrawl_policy GlueCrawler#recrawl_policy}
    */
    readonly recrawlPolicy?: GlueCrawlerRecrawlPolicy;
    /**
    * s3_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#s3_target GlueCrawler#s3_target}
    */
    readonly s3Target?: GlueCrawlerS3Target[];
    /**
    * schema_change_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#schema_change_policy GlueCrawler#schema_change_policy}
    */
    readonly schemaChangePolicy?: GlueCrawlerSchemaChangePolicy;
  }
  export interface GlueCrawlerCatalogTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#database_name GlueCrawler#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#tables GlueCrawler#tables}
    */
    readonly tables: string[];
  }

  function glueCrawlerCatalogTargetToTerraform(struct?: GlueCrawlerCatalogTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      tables: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tables),
    }
  }

  export interface GlueCrawlerDynamodbTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#scan_all GlueCrawler#scan_all}
    */
    readonly scanAll?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#scan_rate GlueCrawler#scan_rate}
    */
    readonly scanRate?: number;
  }

  function glueCrawlerDynamodbTargetToTerraform(struct?: GlueCrawlerDynamodbTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      path: cdktf.stringToTerraform(struct!.path),
      scan_all: cdktf.booleanToTerraform(struct!.scanAll),
      scan_rate: cdktf.numberToTerraform(struct!.scanRate),
    }
  }

  export interface GlueCrawlerJdbcTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#exclusions GlueCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}
    */
    readonly path: string;
  }

  function glueCrawlerJdbcTargetToTerraform(struct?: GlueCrawlerJdbcTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      connection_name: cdktf.stringToTerraform(struct!.connectionName),
      exclusions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusions),
      path: cdktf.stringToTerraform(struct!.path),
    }
  }

  export interface GlueCrawlerLineageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}
    */
    readonly crawlerLineageSettings?: string;
  }

  function glueCrawlerLineageConfigurationToTerraform(struct?: GlueCrawlerLineageConfigurationOutputReference | GlueCrawlerLineageConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      crawler_lineage_settings: cdktf.stringToTerraform(struct!.crawlerLineageSettings),
    }
  }

  export class GlueCrawlerLineageConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // crawler_lineage_settings - computed: false, optional: true, required: false
    private _crawlerLineageSettings?: string | undefined; 
    public get crawlerLineageSettings() {
      return this.getStringAttribute('crawler_lineage_settings');
    }
    public set crawlerLineageSettings(value: string | undefined) {
      this._crawlerLineageSettings = value;
    }
    public resetCrawlerLineageSettings() {
      this._crawlerLineageSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crawlerLineageSettingsInput() {
      return this._crawlerLineageSettings
    }
  }
  export interface GlueCrawlerMongodbTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#scan_all GlueCrawler#scan_all}
    */
    readonly scanAll?: boolean | cdktf.IResolvable;
  }

  function glueCrawlerMongodbTargetToTerraform(struct?: GlueCrawlerMongodbTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      connection_name: cdktf.stringToTerraform(struct!.connectionName),
      path: cdktf.stringToTerraform(struct!.path),
      scan_all: cdktf.booleanToTerraform(struct!.scanAll),
    }
  }

  export interface GlueCrawlerRecrawlPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#recrawl_behavior GlueCrawler#recrawl_behavior}
    */
    readonly recrawlBehavior?: string;
  }

  function glueCrawlerRecrawlPolicyToTerraform(struct?: GlueCrawlerRecrawlPolicyOutputReference | GlueCrawlerRecrawlPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      recrawl_behavior: cdktf.stringToTerraform(struct!.recrawlBehavior),
    }
  }

  export class GlueCrawlerRecrawlPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // recrawl_behavior - computed: false, optional: true, required: false
    private _recrawlBehavior?: string | undefined; 
    public get recrawlBehavior() {
      return this.getStringAttribute('recrawl_behavior');
    }
    public set recrawlBehavior(value: string | undefined) {
      this._recrawlBehavior = value;
    }
    public resetRecrawlBehavior() {
      this._recrawlBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recrawlBehaviorInput() {
      return this._recrawlBehavior
    }
  }
  export interface GlueCrawlerS3Target {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#exclusions GlueCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#sample_size GlueCrawler#sample_size}
    */
    readonly sampleSize?: number;
  }

  function glueCrawlerS3TargetToTerraform(struct?: GlueCrawlerS3Target): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      connection_name: cdktf.stringToTerraform(struct!.connectionName),
      exclusions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusions),
      path: cdktf.stringToTerraform(struct!.path),
      sample_size: cdktf.numberToTerraform(struct!.sampleSize),
    }
  }

  export interface GlueCrawlerSchemaChangePolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#delete_behavior GlueCrawler#delete_behavior}
    */
    readonly deleteBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#update_behavior GlueCrawler#update_behavior}
    */
    readonly updateBehavior?: string;
  }

  function glueCrawlerSchemaChangePolicyToTerraform(struct?: GlueCrawlerSchemaChangePolicyOutputReference | GlueCrawlerSchemaChangePolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_behavior: cdktf.stringToTerraform(struct!.deleteBehavior),
      update_behavior: cdktf.stringToTerraform(struct!.updateBehavior),
    }
  }

  export class GlueCrawlerSchemaChangePolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // delete_behavior - computed: false, optional: true, required: false
    private _deleteBehavior?: string | undefined; 
    public get deleteBehavior() {
      return this.getStringAttribute('delete_behavior');
    }
    public set deleteBehavior(value: string | undefined) {
      this._deleteBehavior = value;
    }
    public resetDeleteBehavior() {
      this._deleteBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteBehaviorInput() {
      return this._deleteBehavior
    }

    // update_behavior - computed: false, optional: true, required: false
    private _updateBehavior?: string | undefined; 
    public get updateBehavior() {
      return this.getStringAttribute('update_behavior');
    }
    public set updateBehavior(value: string | undefined) {
      this._updateBehavior = value;
    }
    public resetUpdateBehavior() {
      this._updateBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateBehaviorInput() {
      return this._updateBehavior
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html aws_glue_crawler}
  */
  export class GlueCrawler extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_crawler";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html aws_glue_crawler} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCrawlerConfig
    */
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
      this._tagsAll = config.tagsAll;
      this._catalogTarget = config.catalogTarget;
      this._dynamodbTarget = config.dynamodbTarget;
      this._jdbcTarget = config.jdbcTarget;
      this._lineageConfiguration = config.lineageConfiguration;
      this._mongodbTarget = config.mongodbTarget;
      this._recrawlPolicy = config.recrawlPolicy;
      this._s3Target = config.s3Target;
      this._schemaChangePolicy = config.schemaChangePolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // classifiers - computed: false, optional: true, required: false
    private _classifiers?: string[] | undefined; 
    public get classifiers() {
      return this.getListAttribute('classifiers');
    }
    public set classifiers(value: string[] | undefined) {
      this._classifiers = value;
    }
    public resetClassifiers() {
      this._classifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classifiersInput() {
      return this._classifiers
    }

    // configuration - computed: false, optional: true, required: false
    private _configuration?: string | undefined; 
    public get configuration() {
      return this.getStringAttribute('configuration');
    }
    public set configuration(value: string | undefined) {
      this._configuration = value;
    }
    public resetConfiguration() {
      this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
      return this._configuration
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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

    // role - computed: false, optional: false, required: true
    private _role?: string; 
    public get role() {
      return this.getStringAttribute('role');
    }
    public set role(value: string) {
      this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
      return this._role
    }

    // schedule - computed: false, optional: true, required: false
    private _schedule?: string | undefined; 
    public get schedule() {
      return this.getStringAttribute('schedule');
    }
    public set schedule(value: string | undefined) {
      this._schedule = value;
    }
    public resetSchedule() {
      this._schedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
      return this._schedule
    }

    // security_configuration - computed: false, optional: true, required: false
    private _securityConfiguration?: string | undefined; 
    public get securityConfiguration() {
      return this.getStringAttribute('security_configuration');
    }
    public set securityConfiguration(value: string | undefined) {
      this._securityConfiguration = value;
    }
    public resetSecurityConfiguration() {
      this._securityConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityConfigurationInput() {
      return this._securityConfiguration
    }

    // table_prefix - computed: false, optional: true, required: false
    private _tablePrefix?: string | undefined; 
    public get tablePrefix() {
      return this.getStringAttribute('table_prefix');
    }
    public set tablePrefix(value: string | undefined) {
      this._tablePrefix = value;
    }
    public resetTablePrefix() {
      this._tablePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tablePrefixInput() {
      return this._tablePrefix
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // catalog_target - computed: false, optional: true, required: false
    private _catalogTarget?: GlueCrawlerCatalogTarget[] | undefined; 
    public get catalogTarget() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('catalog_target') as any;
    }
    public set catalogTarget(value: GlueCrawlerCatalogTarget[] | undefined) {
      this._catalogTarget = value;
    }
    public resetCatalogTarget() {
      this._catalogTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogTargetInput() {
      return this._catalogTarget
    }

    // dynamodb_target - computed: false, optional: true, required: false
    private _dynamodbTarget?: GlueCrawlerDynamodbTarget[] | undefined; 
    public get dynamodbTarget() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('dynamodb_target') as any;
    }
    public set dynamodbTarget(value: GlueCrawlerDynamodbTarget[] | undefined) {
      this._dynamodbTarget = value;
    }
    public resetDynamodbTarget() {
      this._dynamodbTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamodbTargetInput() {
      return this._dynamodbTarget
    }

    // jdbc_target - computed: false, optional: true, required: false
    private _jdbcTarget?: GlueCrawlerJdbcTarget[] | undefined; 
    public get jdbcTarget() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('jdbc_target') as any;
    }
    public set jdbcTarget(value: GlueCrawlerJdbcTarget[] | undefined) {
      this._jdbcTarget = value;
    }
    public resetJdbcTarget() {
      this._jdbcTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jdbcTargetInput() {
      return this._jdbcTarget
    }

    // lineage_configuration - computed: false, optional: true, required: false
    private _lineageConfiguration?: GlueCrawlerLineageConfiguration | undefined; 
    private __lineageConfigurationOutput = new GlueCrawlerLineageConfigurationOutputReference(this as any, "lineage_configuration", true);
    public get lineageConfiguration() {
      return this.__lineageConfigurationOutput;
    }
    public putLineageConfiguration(value: GlueCrawlerLineageConfiguration | undefined) {
      this._lineageConfiguration = value;
    }
    public resetLineageConfiguration() {
      this._lineageConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lineageConfigurationInput() {
      return this._lineageConfiguration
    }

    // mongodb_target - computed: false, optional: true, required: false
    private _mongodbTarget?: GlueCrawlerMongodbTarget[] | undefined; 
    public get mongodbTarget() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('mongodb_target') as any;
    }
    public set mongodbTarget(value: GlueCrawlerMongodbTarget[] | undefined) {
      this._mongodbTarget = value;
    }
    public resetMongodbTarget() {
      this._mongodbTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mongodbTargetInput() {
      return this._mongodbTarget
    }

    // recrawl_policy - computed: false, optional: true, required: false
    private _recrawlPolicy?: GlueCrawlerRecrawlPolicy | undefined; 
    private __recrawlPolicyOutput = new GlueCrawlerRecrawlPolicyOutputReference(this as any, "recrawl_policy", true);
    public get recrawlPolicy() {
      return this.__recrawlPolicyOutput;
    }
    public putRecrawlPolicy(value: GlueCrawlerRecrawlPolicy | undefined) {
      this._recrawlPolicy = value;
    }
    public resetRecrawlPolicy() {
      this._recrawlPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recrawlPolicyInput() {
      return this._recrawlPolicy
    }

    // s3_target - computed: false, optional: true, required: false
    private _s3Target?: GlueCrawlerS3Target[] | undefined; 
    public get s3Target() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('s3_target') as any;
    }
    public set s3Target(value: GlueCrawlerS3Target[] | undefined) {
      this._s3Target = value;
    }
    public resetS3Target() {
      this._s3Target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3TargetInput() {
      return this._s3Target
    }

    // schema_change_policy - computed: false, optional: true, required: false
    private _schemaChangePolicy?: GlueCrawlerSchemaChangePolicy | undefined; 
    private __schemaChangePolicyOutput = new GlueCrawlerSchemaChangePolicyOutputReference(this as any, "schema_change_policy", true);
    public get schemaChangePolicy() {
      return this.__schemaChangePolicyOutput;
    }
    public putSchemaChangePolicy(value: GlueCrawlerSchemaChangePolicy | undefined) {
      this._schemaChangePolicy = value;
    }
    public resetSchemaChangePolicy() {
      this._schemaChangePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaChangePolicyInput() {
      return this._schemaChangePolicy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        classifiers: cdktf.listMapper(cdktf.stringToTerraform)(this._classifiers),
        configuration: cdktf.stringToTerraform(this._configuration),
        database_name: cdktf.stringToTerraform(this._databaseName),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        role: cdktf.stringToTerraform(this._role),
        schedule: cdktf.stringToTerraform(this._schedule),
        security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
        table_prefix: cdktf.stringToTerraform(this._tablePrefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        catalog_target: cdktf.listMapper(glueCrawlerCatalogTargetToTerraform)(this._catalogTarget),
        dynamodb_target: cdktf.listMapper(glueCrawlerDynamodbTargetToTerraform)(this._dynamodbTarget),
        jdbc_target: cdktf.listMapper(glueCrawlerJdbcTargetToTerraform)(this._jdbcTarget),
        lineage_configuration: glueCrawlerLineageConfigurationToTerraform(this._lineageConfiguration),
        mongodb_target: cdktf.listMapper(glueCrawlerMongodbTargetToTerraform)(this._mongodbTarget),
        recrawl_policy: glueCrawlerRecrawlPolicyToTerraform(this._recrawlPolicy),
        s3_target: cdktf.listMapper(glueCrawlerS3TargetToTerraform)(this._s3Target),
        schema_change_policy: glueCrawlerSchemaChangePolicyToTerraform(this._schemaChangePolicy),
      };
    }
  }
  export interface GlueDataCatalogEncryptionSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#catalog_id GlueDataCatalogEncryptionSettings#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * data_catalog_encryption_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#data_catalog_encryption_settings GlueDataCatalogEncryptionSettings#data_catalog_encryption_settings}
    */
    readonly dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
  }
  export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#aws_kms_key_id GlueDataCatalogEncryptionSettings#aws_kms_key_id}
    */
    readonly awsKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#return_connection_password_encrypted GlueDataCatalogEncryptionSettings#return_connection_password_encrypted}
    */
    readonly returnConnectionPasswordEncrypted: boolean | cdktf.IResolvable;
  }

  function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      aws_kms_key_id: cdktf.stringToTerraform(struct!.awsKmsKeyId),
      return_connection_password_encrypted: cdktf.booleanToTerraform(struct!.returnConnectionPasswordEncrypted),
    }
  }

  export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // aws_kms_key_id - computed: false, optional: true, required: false
    private _awsKmsKeyId?: string | undefined; 
    public get awsKmsKeyId() {
      return this.getStringAttribute('aws_kms_key_id');
    }
    public set awsKmsKeyId(value: string | undefined) {
      this._awsKmsKeyId = value;
    }
    public resetAwsKmsKeyId() {
      this._awsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsKmsKeyIdInput() {
      return this._awsKmsKeyId
    }

    // return_connection_password_encrypted - computed: false, optional: false, required: true
    private _returnConnectionPasswordEncrypted?: boolean | cdktf.IResolvable; 
    public get returnConnectionPasswordEncrypted() {
      return this.getBooleanAttribute('return_connection_password_encrypted') as any;
    }
    public set returnConnectionPasswordEncrypted(value: boolean | cdktf.IResolvable) {
      this._returnConnectionPasswordEncrypted = value;
    }
    // Temporarily expose input value. Use with caution.
    public get returnConnectionPasswordEncryptedInput() {
      return this._returnConnectionPasswordEncrypted
    }
  }
  export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#catalog_encryption_mode GlueDataCatalogEncryptionSettings#catalog_encryption_mode}
    */
    readonly catalogEncryptionMode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#sse_aws_kms_key_id GlueDataCatalogEncryptionSettings#sse_aws_kms_key_id}
    */
    readonly sseAwsKmsKeyId?: string;
  }

  function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog_encryption_mode: cdktf.stringToTerraform(struct!.catalogEncryptionMode),
      sse_aws_kms_key_id: cdktf.stringToTerraform(struct!.sseAwsKmsKeyId),
    }
  }

  export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // catalog_encryption_mode - computed: false, optional: false, required: true
    private _catalogEncryptionMode?: string; 
    public get catalogEncryptionMode() {
      return this.getStringAttribute('catalog_encryption_mode');
    }
    public set catalogEncryptionMode(value: string) {
      this._catalogEncryptionMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogEncryptionModeInput() {
      return this._catalogEncryptionMode
    }

    // sse_aws_kms_key_id - computed: false, optional: true, required: false
    private _sseAwsKmsKeyId?: string | undefined; 
    public get sseAwsKmsKeyId() {
      return this.getStringAttribute('sse_aws_kms_key_id');
    }
    public set sseAwsKmsKeyId(value: string | undefined) {
      this._sseAwsKmsKeyId = value;
    }
    public resetSseAwsKmsKeyId() {
      this._sseAwsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseAwsKmsKeyIdInput() {
      return this._sseAwsKmsKeyId
    }
  }
  export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
    /**
    * connection_password_encryption block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#connection_password_encryption GlueDataCatalogEncryptionSettings#connection_password_encryption}
    */
    readonly connectionPasswordEncryption: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
    /**
    * encryption_at_rest block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#encryption_at_rest GlueDataCatalogEncryptionSettings#encryption_at_rest}
    */
    readonly encryptionAtRest: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest;
  }

  function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      connection_password_encryption: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct!.connectionPasswordEncryption),
      encryption_at_rest: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct!.encryptionAtRest),
    }
  }

  export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // connection_password_encryption - computed: false, optional: false, required: true
    private _connectionPasswordEncryption?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption; 
    private __connectionPasswordEncryptionOutput = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference(this as any, "connection_password_encryption", true);
    public get connectionPasswordEncryption() {
      return this.__connectionPasswordEncryptionOutput;
    }
    public putConnectionPasswordEncryption(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption) {
      this._connectionPasswordEncryption = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionPasswordEncryptionInput() {
      return this._connectionPasswordEncryption
    }

    // encryption_at_rest - computed: false, optional: false, required: true
    private _encryptionAtRest?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest; 
    private __encryptionAtRestOutput = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference(this as any, "encryption_at_rest", true);
    public get encryptionAtRest() {
      return this.__encryptionAtRestOutput;
    }
    public putEncryptionAtRest(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest) {
      this._encryptionAtRest = value;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionAtRestInput() {
      return this._encryptionAtRest
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}
  */
  export class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_data_catalog_encryption_settings";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueDataCatalogEncryptionSettingsConfig
    */
    public constructor(scope: Construct, id: string, config: GlueDataCatalogEncryptionSettingsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_data_catalog_encryption_settings',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._catalogId = config.catalogId;
      this._dataCatalogEncryptionSettings = config.dataCatalogEncryptionSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // data_catalog_encryption_settings - computed: false, optional: false, required: true
    private _dataCatalogEncryptionSettings?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings; 
    private __dataCatalogEncryptionSettingsOutput = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference(this as any, "data_catalog_encryption_settings", true);
    public get dataCatalogEncryptionSettings() {
      return this.__dataCatalogEncryptionSettingsOutput;
    }
    public putDataCatalogEncryptionSettings(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings) {
      this._dataCatalogEncryptionSettings = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCatalogEncryptionSettingsInput() {
      return this._dataCatalogEncryptionSettings
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        catalog_id: cdktf.stringToTerraform(this._catalogId),
        data_catalog_encryption_settings: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(this._dataCatalogEncryptionSettings),
      };
    }
  }
  export interface GlueDevEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#arguments GlueDevEndpoint#arguments}
    */
    readonly arguments?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}
    */
    readonly extraJarsS3Path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}
    */
    readonly extraPythonLibsS3Path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#glue_version GlueDevEndpoint#glue_version}
    */
    readonly glueVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#name GlueDevEndpoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#number_of_nodes GlueDevEndpoint#number_of_nodes}
    */
    readonly numberOfNodes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#number_of_workers GlueDevEndpoint#number_of_workers}
    */
    readonly numberOfWorkers?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#public_key GlueDevEndpoint#public_key}
    */
    readonly publicKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#public_keys GlueDevEndpoint#public_keys}
    */
    readonly publicKeys?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#role_arn GlueDevEndpoint#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#security_configuration GlueDevEndpoint#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#security_group_ids GlueDevEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#subnet_id GlueDevEndpoint#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#tags GlueDevEndpoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#tags_all GlueDevEndpoint#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#worker_type GlueDevEndpoint#worker_type}
    */
    readonly workerType?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html aws_glue_dev_endpoint}
  */
  export class GlueDevEndpoint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_dev_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html aws_glue_dev_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueDevEndpointConfig
    */
    public constructor(scope: Construct, id: string, config: GlueDevEndpointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_dev_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arguments = config.arguments;
      this._extraJarsS3Path = config.extraJarsS3Path;
      this._extraPythonLibsS3Path = config.extraPythonLibsS3Path;
      this._glueVersion = config.glueVersion;
      this._name = config.name;
      this._numberOfNodes = config.numberOfNodes;
      this._numberOfWorkers = config.numberOfWorkers;
      this._publicKey = config.publicKey;
      this._publicKeys = config.publicKeys;
      this._roleArn = config.roleArn;
      this._securityConfiguration = config.securityConfiguration;
      this._securityGroupIds = config.securityGroupIds;
      this._subnetId = config.subnetId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._workerType = config.workerType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arguments - computed: false, optional: true, required: false
    private _arguments?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get arguments() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('arguments') as any;
    }
    public set arguments(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._arguments = value;
    }
    public resetArguments() {
      this._arguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get argumentsInput() {
      return this._arguments
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // extra_jars_s3_path - computed: false, optional: true, required: false
    private _extraJarsS3Path?: string | undefined; 
    public get extraJarsS3Path() {
      return this.getStringAttribute('extra_jars_s3_path');
    }
    public set extraJarsS3Path(value: string | undefined) {
      this._extraJarsS3Path = value;
    }
    public resetExtraJarsS3Path() {
      this._extraJarsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extraJarsS3PathInput() {
      return this._extraJarsS3Path
    }

    // extra_python_libs_s3_path - computed: false, optional: true, required: false
    private _extraPythonLibsS3Path?: string | undefined; 
    public get extraPythonLibsS3Path() {
      return this.getStringAttribute('extra_python_libs_s3_path');
    }
    public set extraPythonLibsS3Path(value: string | undefined) {
      this._extraPythonLibsS3Path = value;
    }
    public resetExtraPythonLibsS3Path() {
      this._extraPythonLibsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extraPythonLibsS3PathInput() {
      return this._extraPythonLibsS3Path
    }

    // failure_reason - computed: true, optional: false, required: false
    public get failureReason() {
      return this.getStringAttribute('failure_reason');
    }

    // glue_version - computed: false, optional: true, required: false
    private _glueVersion?: string | undefined; 
    public get glueVersion() {
      return this.getStringAttribute('glue_version');
    }
    public set glueVersion(value: string | undefined) {
      this._glueVersion = value;
    }
    public resetGlueVersion() {
      this._glueVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueVersionInput() {
      return this._glueVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
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

    // number_of_nodes - computed: false, optional: true, required: false
    private _numberOfNodes?: number | undefined; 
    public get numberOfNodes() {
      return this.getNumberAttribute('number_of_nodes');
    }
    public set numberOfNodes(value: number | undefined) {
      this._numberOfNodes = value;
    }
    public resetNumberOfNodes() {
      this._numberOfNodes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfNodesInput() {
      return this._numberOfNodes
    }

    // number_of_workers - computed: false, optional: true, required: false
    private _numberOfWorkers?: number | undefined; 
    public get numberOfWorkers() {
      return this.getNumberAttribute('number_of_workers');
    }
    public set numberOfWorkers(value: number | undefined) {
      this._numberOfWorkers = value;
    }
    public resetNumberOfWorkers() {
      this._numberOfWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfWorkersInput() {
      return this._numberOfWorkers
    }

    // private_address - computed: true, optional: false, required: false
    public get privateAddress() {
      return this.getStringAttribute('private_address');
    }

    // public_address - computed: true, optional: false, required: false
    public get publicAddress() {
      return this.getStringAttribute('public_address');
    }

    // public_key - computed: false, optional: true, required: false
    private _publicKey?: string | undefined; 
    public get publicKey() {
      return this.getStringAttribute('public_key');
    }
    public set publicKey(value: string | undefined) {
      this._publicKey = value;
    }
    public resetPublicKey() {
      this._publicKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicKeyInput() {
      return this._publicKey
    }

    // public_keys - computed: false, optional: true, required: false
    private _publicKeys?: string[] | undefined; 
    public get publicKeys() {
      return this.getListAttribute('public_keys');
    }
    public set publicKeys(value: string[] | undefined) {
      this._publicKeys = value;
    }
    public resetPublicKeys() {
      this._publicKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicKeysInput() {
      return this._publicKeys
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // security_configuration - computed: false, optional: true, required: false
    private _securityConfiguration?: string | undefined; 
    public get securityConfiguration() {
      return this.getStringAttribute('security_configuration');
    }
    public set securityConfiguration(value: string | undefined) {
      this._securityConfiguration = value;
    }
    public resetSecurityConfiguration() {
      this._securityConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityConfigurationInput() {
      return this._securityConfiguration
    }

    // security_group_ids - computed: false, optional: true, required: false
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // subnet_id - computed: false, optional: true, required: false
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
      this._subnetId = value;
    }
    public resetSubnetId() {
      this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // worker_type - computed: false, optional: true, required: false
    private _workerType?: string | undefined; 
    public get workerType() {
      return this.getStringAttribute('worker_type');
    }
    public set workerType(value: string | undefined) {
      this._workerType = value;
    }
    public resetWorkerType() {
      this._workerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerTypeInput() {
      return this._workerType
    }

    // yarn_endpoint_address - computed: true, optional: false, required: false
    public get yarnEndpointAddress() {
      return this.getStringAttribute('yarn_endpoint_address');
    }

    // zeppelin_remote_spark_interpreter_port - computed: true, optional: false, required: false
    public get zeppelinRemoteSparkInterpreterPort() {
      return this.getNumberAttribute('zeppelin_remote_spark_interpreter_port');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arguments: cdktf.hashMapper(cdktf.anyToTerraform)(this._arguments),
        extra_jars_s3_path: cdktf.stringToTerraform(this._extraJarsS3Path),
        extra_python_libs_s3_path: cdktf.stringToTerraform(this._extraPythonLibsS3Path),
        glue_version: cdktf.stringToTerraform(this._glueVersion),
        name: cdktf.stringToTerraform(this._name),
        number_of_nodes: cdktf.numberToTerraform(this._numberOfNodes),
        number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
        public_key: cdktf.stringToTerraform(this._publicKey),
        public_keys: cdktf.listMapper(cdktf.stringToTerraform)(this._publicKeys),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        worker_type: cdktf.stringToTerraform(this._workerType),
      };
    }
  }
  export interface GlueJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#connections GlueJob#connections}
    */
    readonly connections?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#default_arguments GlueJob#default_arguments}
    */
    readonly defaultArguments?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#description GlueJob#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#glue_version GlueJob#glue_version}
    */
    readonly glueVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_capacity GlueJob#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_retries GlueJob#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#name GlueJob#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#non_overridable_arguments GlueJob#non_overridable_arguments}
    */
    readonly nonOverridableArguments?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#number_of_workers GlueJob#number_of_workers}
    */
    readonly numberOfWorkers?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#role_arn GlueJob#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#security_configuration GlueJob#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#tags GlueJob#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#tags_all GlueJob#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#timeout GlueJob#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#worker_type GlueJob#worker_type}
    */
    readonly workerType?: string;
    /**
    * command block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#command GlueJob#command}
    */
    readonly command: GlueJobCommand;
    /**
    * execution_property block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#execution_property GlueJob#execution_property}
    */
    readonly executionProperty?: GlueJobExecutionProperty;
    /**
    * notification_property block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#notification_property GlueJob#notification_property}
    */
    readonly notificationProperty?: GlueJobNotificationProperty;
  }
  export interface GlueJobCommand {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#name GlueJob#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#python_version GlueJob#python_version}
    */
    readonly pythonVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#script_location GlueJob#script_location}
    */
    readonly scriptLocation: string;
  }

  function glueJobCommandToTerraform(struct?: GlueJobCommandOutputReference | GlueJobCommand): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      python_version: cdktf.stringToTerraform(struct!.pythonVersion),
      script_location: cdktf.stringToTerraform(struct!.scriptLocation),
    }
  }

  export class GlueJobCommandOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // python_version - computed: true, optional: true, required: false
    private _pythonVersion?: string | undefined; 
    public get pythonVersion() {
      return this.getStringAttribute('python_version');
    }
    public set pythonVersion(value: string | undefined) {
      this._pythonVersion = value;
    }
    public resetPythonVersion() {
      this._pythonVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pythonVersionInput() {
      return this._pythonVersion
    }

    // script_location - computed: false, optional: false, required: true
    private _scriptLocation?: string; 
    public get scriptLocation() {
      return this.getStringAttribute('script_location');
    }
    public set scriptLocation(value: string) {
      this._scriptLocation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptLocationInput() {
      return this._scriptLocation
    }
  }
  export interface GlueJobExecutionProperty {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_concurrent_runs GlueJob#max_concurrent_runs}
    */
    readonly maxConcurrentRuns?: number;
  }

  function glueJobExecutionPropertyToTerraform(struct?: GlueJobExecutionPropertyOutputReference | GlueJobExecutionProperty): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
    }
  }

  export class GlueJobExecutionPropertyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_concurrent_runs - computed: false, optional: true, required: false
    private _maxConcurrentRuns?: number | undefined; 
    public get maxConcurrentRuns() {
      return this.getNumberAttribute('max_concurrent_runs');
    }
    public set maxConcurrentRuns(value: number | undefined) {
      this._maxConcurrentRuns = value;
    }
    public resetMaxConcurrentRuns() {
      this._maxConcurrentRuns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentRunsInput() {
      return this._maxConcurrentRuns
    }
  }
  export interface GlueJobNotificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#notify_delay_after GlueJob#notify_delay_after}
    */
    readonly notifyDelayAfter?: number;
  }

  function glueJobNotificationPropertyToTerraform(struct?: GlueJobNotificationPropertyOutputReference | GlueJobNotificationProperty): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      notify_delay_after: cdktf.numberToTerraform(struct!.notifyDelayAfter),
    }
  }

  export class GlueJobNotificationPropertyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // notify_delay_after - computed: false, optional: true, required: false
    private _notifyDelayAfter?: number | undefined; 
    public get notifyDelayAfter() {
      return this.getNumberAttribute('notify_delay_after');
    }
    public set notifyDelayAfter(value: number | undefined) {
      this._notifyDelayAfter = value;
    }
    public resetNotifyDelayAfter() {
      this._notifyDelayAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyDelayAfterInput() {
      return this._notifyDelayAfter
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job}
  */
  export class GlueJob extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_job";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueJobConfig
    */
    public constructor(scope: Construct, id: string, config: GlueJobConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_job',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._connections = config.connections;
      this._defaultArguments = config.defaultArguments;
      this._description = config.description;
      this._glueVersion = config.glueVersion;
      this._maxCapacity = config.maxCapacity;
      this._maxRetries = config.maxRetries;
      this._name = config.name;
      this._nonOverridableArguments = config.nonOverridableArguments;
      this._numberOfWorkers = config.numberOfWorkers;
      this._roleArn = config.roleArn;
      this._securityConfiguration = config.securityConfiguration;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeout = config.timeout;
      this._workerType = config.workerType;
      this._command = config.command;
      this._executionProperty = config.executionProperty;
      this._notificationProperty = config.notificationProperty;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // connections - computed: false, optional: true, required: false
    private _connections?: string[] | undefined; 
    public get connections() {
      return this.getListAttribute('connections');
    }
    public set connections(value: string[] | undefined) {
      this._connections = value;
    }
    public resetConnections() {
      this._connections = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionsInput() {
      return this._connections
    }

    // default_arguments - computed: false, optional: true, required: false
    private _defaultArguments?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get defaultArguments() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('default_arguments') as any;
    }
    public set defaultArguments(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._defaultArguments = value;
    }
    public resetDefaultArguments() {
      this._defaultArguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultArgumentsInput() {
      return this._defaultArguments
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // glue_version - computed: true, optional: true, required: false
    private _glueVersion?: string | undefined; 
    public get glueVersion() {
      return this.getStringAttribute('glue_version');
    }
    public set glueVersion(value: string | undefined) {
      this._glueVersion = value;
    }
    public resetGlueVersion() {
      this._glueVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueVersionInput() {
      return this._glueVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // max_capacity - computed: true, optional: true, required: false
    private _maxCapacity?: number | undefined; 
    public get maxCapacity() {
      return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number | undefined) {
      this._maxCapacity = value;
    }
    public resetMaxCapacity() {
      this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
      return this._maxCapacity
    }

    // max_retries - computed: false, optional: true, required: false
    private _maxRetries?: number | undefined; 
    public get maxRetries() {
      return this.getNumberAttribute('max_retries');
    }
    public set maxRetries(value: number | undefined) {
      this._maxRetries = value;
    }
    public resetMaxRetries() {
      this._maxRetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRetriesInput() {
      return this._maxRetries
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
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

    // non_overridable_arguments - computed: false, optional: true, required: false
    private _nonOverridableArguments?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get nonOverridableArguments() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('non_overridable_arguments') as any;
    }
    public set nonOverridableArguments(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._nonOverridableArguments = value;
    }
    public resetNonOverridableArguments() {
      this._nonOverridableArguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nonOverridableArgumentsInput() {
      return this._nonOverridableArguments
    }

    // number_of_workers - computed: false, optional: true, required: false
    private _numberOfWorkers?: number | undefined; 
    public get numberOfWorkers() {
      return this.getNumberAttribute('number_of_workers');
    }
    public set numberOfWorkers(value: number | undefined) {
      this._numberOfWorkers = value;
    }
    public resetNumberOfWorkers() {
      this._numberOfWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfWorkersInput() {
      return this._numberOfWorkers
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // security_configuration - computed: false, optional: true, required: false
    private _securityConfiguration?: string | undefined; 
    public get securityConfiguration() {
      return this.getStringAttribute('security_configuration');
    }
    public set securityConfiguration(value: string | undefined) {
      this._securityConfiguration = value;
    }
    public resetSecurityConfiguration() {
      this._securityConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityConfigurationInput() {
      return this._securityConfiguration
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // timeout - computed: false, optional: true, required: false
    private _timeout?: number | undefined; 
    public get timeout() {
      return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number | undefined) {
      this._timeout = value;
    }
    public resetTimeout() {
      this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
      return this._timeout
    }

    // worker_type - computed: false, optional: true, required: false
    private _workerType?: string | undefined; 
    public get workerType() {
      return this.getStringAttribute('worker_type');
    }
    public set workerType(value: string | undefined) {
      this._workerType = value;
    }
    public resetWorkerType() {
      this._workerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerTypeInput() {
      return this._workerType
    }

    // command - computed: false, optional: false, required: true
    private _command?: GlueJobCommand; 
    private __commandOutput = new GlueJobCommandOutputReference(this as any, "command", true);
    public get command() {
      return this.__commandOutput;
    }
    public putCommand(value: GlueJobCommand) {
      this._command = value;
    }
    // Temporarily expose input value. Use with caution.
    public get commandInput() {
      return this._command
    }

    // execution_property - computed: false, optional: true, required: false
    private _executionProperty?: GlueJobExecutionProperty | undefined; 
    private __executionPropertyOutput = new GlueJobExecutionPropertyOutputReference(this as any, "execution_property", true);
    public get executionProperty() {
      return this.__executionPropertyOutput;
    }
    public putExecutionProperty(value: GlueJobExecutionProperty | undefined) {
      this._executionProperty = value;
    }
    public resetExecutionProperty() {
      this._executionProperty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionPropertyInput() {
      return this._executionProperty
    }

    // notification_property - computed: false, optional: true, required: false
    private _notificationProperty?: GlueJobNotificationProperty | undefined; 
    private __notificationPropertyOutput = new GlueJobNotificationPropertyOutputReference(this as any, "notification_property", true);
    public get notificationProperty() {
      return this.__notificationPropertyOutput;
    }
    public putNotificationProperty(value: GlueJobNotificationProperty | undefined) {
      this._notificationProperty = value;
    }
    public resetNotificationProperty() {
      this._notificationProperty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationPropertyInput() {
      return this._notificationProperty
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        connections: cdktf.listMapper(cdktf.stringToTerraform)(this._connections),
        default_arguments: cdktf.hashMapper(cdktf.anyToTerraform)(this._defaultArguments),
        description: cdktf.stringToTerraform(this._description),
        glue_version: cdktf.stringToTerraform(this._glueVersion),
        max_capacity: cdktf.numberToTerraform(this._maxCapacity),
        max_retries: cdktf.numberToTerraform(this._maxRetries),
        name: cdktf.stringToTerraform(this._name),
        non_overridable_arguments: cdktf.hashMapper(cdktf.anyToTerraform)(this._nonOverridableArguments),
        number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeout: cdktf.numberToTerraform(this._timeout),
        worker_type: cdktf.stringToTerraform(this._workerType),
        command: glueJobCommandToTerraform(this._command),
        execution_property: glueJobExecutionPropertyToTerraform(this._executionProperty),
        notification_property: glueJobNotificationPropertyToTerraform(this._notificationProperty),
      };
    }
  }
  export interface GlueMlTransformConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#description GlueMlTransform#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#glue_version GlueMlTransform#glue_version}
    */
    readonly glueVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#max_capacity GlueMlTransform#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#max_retries GlueMlTransform#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#name GlueMlTransform#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#number_of_workers GlueMlTransform#number_of_workers}
    */
    readonly numberOfWorkers?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#role_arn GlueMlTransform#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#tags GlueMlTransform#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#tags_all GlueMlTransform#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#timeout GlueMlTransform#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#worker_type GlueMlTransform#worker_type}
    */
    readonly workerType?: string;
    /**
    * input_record_tables block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#input_record_tables GlueMlTransform#input_record_tables}
    */
    readonly inputRecordTables: GlueMlTransformInputRecordTables[];
    /**
    * parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#parameters GlueMlTransform#parameters}
    */
    readonly parameters: GlueMlTransformParameters;
  }
  export class GlueMlTransformSchema extends cdktf.ComplexComputedList {

    // data_type - computed: true, optional: false, required: false
    public get dataType() {
      return this.getStringAttribute('data_type');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }
  }
  export interface GlueMlTransformInputRecordTables {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#catalog_id GlueMlTransform#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#connection_name GlueMlTransform#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#database_name GlueMlTransform#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#table_name GlueMlTransform#table_name}
    */
    readonly tableName: string;
  }

  function glueMlTransformInputRecordTablesToTerraform(struct?: GlueMlTransformInputRecordTables): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      connection_name: cdktf.stringToTerraform(struct!.connectionName),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      table_name: cdktf.stringToTerraform(struct!.tableName),
    }
  }

  export interface GlueMlTransformParametersFindMatchesParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}
    */
    readonly accuracyCostTradeOff?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#enforce_provided_labels GlueMlTransform#enforce_provided_labels}
    */
    readonly enforceProvidedLabels?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}
    */
    readonly precisionRecallTradeOff?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#primary_key_column_name GlueMlTransform#primary_key_column_name}
    */
    readonly primaryKeyColumnName?: string;
  }

  function glueMlTransformParametersFindMatchesParametersToTerraform(struct?: GlueMlTransformParametersFindMatchesParametersOutputReference | GlueMlTransformParametersFindMatchesParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      accuracy_cost_trade_off: cdktf.numberToTerraform(struct!.accuracyCostTradeOff),
      enforce_provided_labels: cdktf.booleanToTerraform(struct!.enforceProvidedLabels),
      precision_recall_trade_off: cdktf.numberToTerraform(struct!.precisionRecallTradeOff),
      primary_key_column_name: cdktf.stringToTerraform(struct!.primaryKeyColumnName),
    }
  }

  export class GlueMlTransformParametersFindMatchesParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // accuracy_cost_trade_off - computed: false, optional: true, required: false
    private _accuracyCostTradeOff?: number | undefined; 
    public get accuracyCostTradeOff() {
      return this.getNumberAttribute('accuracy_cost_trade_off');
    }
    public set accuracyCostTradeOff(value: number | undefined) {
      this._accuracyCostTradeOff = value;
    }
    public resetAccuracyCostTradeOff() {
      this._accuracyCostTradeOff = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accuracyCostTradeOffInput() {
      return this._accuracyCostTradeOff
    }

    // enforce_provided_labels - computed: false, optional: true, required: false
    private _enforceProvidedLabels?: boolean | cdktf.IResolvable | undefined; 
    public get enforceProvidedLabels() {
      return this.getBooleanAttribute('enforce_provided_labels') as any;
    }
    public set enforceProvidedLabels(value: boolean | cdktf.IResolvable | undefined) {
      this._enforceProvidedLabels = value;
    }
    public resetEnforceProvidedLabels() {
      this._enforceProvidedLabels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceProvidedLabelsInput() {
      return this._enforceProvidedLabels
    }

    // precision_recall_trade_off - computed: false, optional: true, required: false
    private _precisionRecallTradeOff?: number | undefined; 
    public get precisionRecallTradeOff() {
      return this.getNumberAttribute('precision_recall_trade_off');
    }
    public set precisionRecallTradeOff(value: number | undefined) {
      this._precisionRecallTradeOff = value;
    }
    public resetPrecisionRecallTradeOff() {
      this._precisionRecallTradeOff = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get precisionRecallTradeOffInput() {
      return this._precisionRecallTradeOff
    }

    // primary_key_column_name - computed: false, optional: true, required: false
    private _primaryKeyColumnName?: string | undefined; 
    public get primaryKeyColumnName() {
      return this.getStringAttribute('primary_key_column_name');
    }
    public set primaryKeyColumnName(value: string | undefined) {
      this._primaryKeyColumnName = value;
    }
    public resetPrimaryKeyColumnName() {
      this._primaryKeyColumnName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryKeyColumnNameInput() {
      return this._primaryKeyColumnName
    }
  }
  export interface GlueMlTransformParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#transform_type GlueMlTransform#transform_type}
    */
    readonly transformType: string;
    /**
    * find_matches_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#find_matches_parameters GlueMlTransform#find_matches_parameters}
    */
    readonly findMatchesParameters: GlueMlTransformParametersFindMatchesParameters;
  }

  function glueMlTransformParametersToTerraform(struct?: GlueMlTransformParametersOutputReference | GlueMlTransformParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      transform_type: cdktf.stringToTerraform(struct!.transformType),
      find_matches_parameters: glueMlTransformParametersFindMatchesParametersToTerraform(struct!.findMatchesParameters),
    }
  }

  export class GlueMlTransformParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // transform_type - computed: false, optional: false, required: true
    private _transformType?: string; 
    public get transformType() {
      return this.getStringAttribute('transform_type');
    }
    public set transformType(value: string) {
      this._transformType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transformTypeInput() {
      return this._transformType
    }

    // find_matches_parameters - computed: false, optional: false, required: true
    private _findMatchesParameters?: GlueMlTransformParametersFindMatchesParameters; 
    private __findMatchesParametersOutput = new GlueMlTransformParametersFindMatchesParametersOutputReference(this as any, "find_matches_parameters", true);
    public get findMatchesParameters() {
      return this.__findMatchesParametersOutput;
    }
    public putFindMatchesParameters(value: GlueMlTransformParametersFindMatchesParameters) {
      this._findMatchesParameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get findMatchesParametersInput() {
      return this._findMatchesParameters
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html aws_glue_ml_transform}
  */
  export class GlueMlTransform extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_ml_transform";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html aws_glue_ml_transform} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueMlTransformConfig
    */
    public constructor(scope: Construct, id: string, config: GlueMlTransformConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_ml_transform',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._glueVersion = config.glueVersion;
      this._maxCapacity = config.maxCapacity;
      this._maxRetries = config.maxRetries;
      this._name = config.name;
      this._numberOfWorkers = config.numberOfWorkers;
      this._roleArn = config.roleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeout = config.timeout;
      this._workerType = config.workerType;
      this._inputRecordTables = config.inputRecordTables;
      this._parameters = config.parameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // glue_version - computed: true, optional: true, required: false
    private _glueVersion?: string | undefined; 
    public get glueVersion() {
      return this.getStringAttribute('glue_version');
    }
    public set glueVersion(value: string | undefined) {
      this._glueVersion = value;
    }
    public resetGlueVersion() {
      this._glueVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueVersionInput() {
      return this._glueVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // label_count - computed: true, optional: false, required: false
    public get labelCount() {
      return this.getNumberAttribute('label_count');
    }

    // max_capacity - computed: true, optional: true, required: false
    private _maxCapacity?: number | undefined; 
    public get maxCapacity() {
      return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number | undefined) {
      this._maxCapacity = value;
    }
    public resetMaxCapacity() {
      this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
      return this._maxCapacity
    }

    // max_retries - computed: false, optional: true, required: false
    private _maxRetries?: number | undefined; 
    public get maxRetries() {
      return this.getNumberAttribute('max_retries');
    }
    public set maxRetries(value: number | undefined) {
      this._maxRetries = value;
    }
    public resetMaxRetries() {
      this._maxRetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRetriesInput() {
      return this._maxRetries
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
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

    // number_of_workers - computed: false, optional: true, required: false
    private _numberOfWorkers?: number | undefined; 
    public get numberOfWorkers() {
      return this.getNumberAttribute('number_of_workers');
    }
    public set numberOfWorkers(value: number | undefined) {
      this._numberOfWorkers = value;
    }
    public resetNumberOfWorkers() {
      this._numberOfWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfWorkersInput() {
      return this._numberOfWorkers
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // schema - computed: true, optional: false, required: false
    public schema(index: string) {
      return new GlueMlTransformSchema(this, 'schema', index);
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // timeout - computed: false, optional: true, required: false
    private _timeout?: number | undefined; 
    public get timeout() {
      return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number | undefined) {
      this._timeout = value;
    }
    public resetTimeout() {
      this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
      return this._timeout
    }

    // worker_type - computed: false, optional: true, required: false
    private _workerType?: string | undefined; 
    public get workerType() {
      return this.getStringAttribute('worker_type');
    }
    public set workerType(value: string | undefined) {
      this._workerType = value;
    }
    public resetWorkerType() {
      this._workerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerTypeInput() {
      return this._workerType
    }

    // input_record_tables - computed: false, optional: false, required: true
    private _inputRecordTables?: GlueMlTransformInputRecordTables[]; 
    public get inputRecordTables() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('input_record_tables') as any;
    }
    public set inputRecordTables(value: GlueMlTransformInputRecordTables[]) {
      this._inputRecordTables = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputRecordTablesInput() {
      return this._inputRecordTables
    }

    // parameters - computed: false, optional: false, required: true
    private _parameters?: GlueMlTransformParameters; 
    private __parametersOutput = new GlueMlTransformParametersOutputReference(this as any, "parameters", true);
    public get parameters() {
      return this.__parametersOutput;
    }
    public putParameters(value: GlueMlTransformParameters) {
      this._parameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        glue_version: cdktf.stringToTerraform(this._glueVersion),
        max_capacity: cdktf.numberToTerraform(this._maxCapacity),
        max_retries: cdktf.numberToTerraform(this._maxRetries),
        name: cdktf.stringToTerraform(this._name),
        number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeout: cdktf.numberToTerraform(this._timeout),
        worker_type: cdktf.stringToTerraform(this._workerType),
        input_record_tables: cdktf.listMapper(glueMlTransformInputRecordTablesToTerraform)(this._inputRecordTables),
        parameters: glueMlTransformParametersToTerraform(this._parameters),
      };
    }
  }
  export interface GluePartitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#catalog_id GluePartition#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#database_name GluePartition#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#partition_values GluePartition#partition_values}
    */
    readonly partitionValues: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#table_name GluePartition#table_name}
    */
    readonly tableName: string;
    /**
    * storage_descriptor block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#storage_descriptor GluePartition#storage_descriptor}
    */
    readonly storageDescriptor?: GluePartitionStorageDescriptor;
  }
  export interface GluePartitionStorageDescriptorColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#comment GluePartition#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#name GluePartition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#type GluePartition#type}
    */
    readonly type?: string;
  }

  function gluePartitionStorageDescriptorColumnsToTerraform(struct?: GluePartitionStorageDescriptorColumns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      comment: cdktf.stringToTerraform(struct!.comment),
      name: cdktf.stringToTerraform(struct!.name),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface GluePartitionStorageDescriptorSerDeInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#name GluePartition#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#serialization_library GluePartition#serialization_library}
    */
    readonly serializationLibrary?: string;
  }

  function gluePartitionStorageDescriptorSerDeInfoToTerraform(struct?: GluePartitionStorageDescriptorSerDeInfoOutputReference | GluePartitionStorageDescriptorSerDeInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
      serialization_library: cdktf.stringToTerraform(struct!.serializationLibrary),
    }
  }

  export class GluePartitionStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // parameters - computed: false, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // serialization_library - computed: false, optional: true, required: false
    private _serializationLibrary?: string | undefined; 
    public get serializationLibrary() {
      return this.getStringAttribute('serialization_library');
    }
    public set serializationLibrary(value: string | undefined) {
      this._serializationLibrary = value;
    }
    public resetSerializationLibrary() {
      this._serializationLibrary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serializationLibraryInput() {
      return this._serializationLibrary
    }
  }
  export interface GluePartitionStorageDescriptorSkewedInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_names GluePartition#skewed_column_names}
    */
    readonly skewedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}
    */
    readonly skewedColumnValueLocationMaps?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_values GluePartition#skewed_column_values}
    */
    readonly skewedColumnValues?: string[];
  }

  function gluePartitionStorageDescriptorSkewedInfoToTerraform(struct?: GluePartitionStorageDescriptorSkewedInfoOutputReference | GluePartitionStorageDescriptorSkewedInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      skewed_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnNames),
      skewed_column_value_location_maps: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.skewedColumnValueLocationMaps),
      skewed_column_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnValues),
    }
  }

  export class GluePartitionStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // skewed_column_names - computed: false, optional: true, required: false
    private _skewedColumnNames?: string[] | undefined; 
    public get skewedColumnNames() {
      return this.getListAttribute('skewed_column_names');
    }
    public set skewedColumnNames(value: string[] | undefined) {
      this._skewedColumnNames = value;
    }
    public resetSkewedColumnNames() {
      this._skewedColumnNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedColumnNamesInput() {
      return this._skewedColumnNames
    }

    // skewed_column_value_location_maps - computed: false, optional: true, required: false
    private _skewedColumnValueLocationMaps?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get skewedColumnValueLocationMaps() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('skewed_column_value_location_maps') as any;
    }
    public set skewedColumnValueLocationMaps(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._skewedColumnValueLocationMaps = value;
    }
    public resetSkewedColumnValueLocationMaps() {
      this._skewedColumnValueLocationMaps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedColumnValueLocationMapsInput() {
      return this._skewedColumnValueLocationMaps
    }

    // skewed_column_values - computed: false, optional: true, required: false
    private _skewedColumnValues?: string[] | undefined; 
    public get skewedColumnValues() {
      return this.getListAttribute('skewed_column_values');
    }
    public set skewedColumnValues(value: string[] | undefined) {
      this._skewedColumnValues = value;
    }
    public resetSkewedColumnValues() {
      this._skewedColumnValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedColumnValuesInput() {
      return this._skewedColumnValues
    }
  }
  export interface GluePartitionStorageDescriptorSortColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#column GluePartition#column}
    */
    readonly column: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#sort_order GluePartition#sort_order}
    */
    readonly sortOrder: number;
  }

  function gluePartitionStorageDescriptorSortColumnsToTerraform(struct?: GluePartitionStorageDescriptorSortColumns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      column: cdktf.stringToTerraform(struct!.column),
      sort_order: cdktf.numberToTerraform(struct!.sortOrder),
    }
  }

  export interface GluePartitionStorageDescriptor {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#bucket_columns GluePartition#bucket_columns}
    */
    readonly bucketColumns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#compressed GluePartition#compressed}
    */
    readonly compressed?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#input_format GluePartition#input_format}
    */
    readonly inputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#location GluePartition#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#number_of_buckets GluePartition#number_of_buckets}
    */
    readonly numberOfBuckets?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#output_format GluePartition#output_format}
    */
    readonly outputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#stored_as_sub_directories GluePartition#stored_as_sub_directories}
    */
    readonly storedAsSubDirectories?: boolean | cdktf.IResolvable;
    /**
    * columns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#columns GluePartition#columns}
    */
    readonly columns?: GluePartitionStorageDescriptorColumns[];
    /**
    * ser_de_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#ser_de_info GluePartition#ser_de_info}
    */
    readonly serDeInfo?: GluePartitionStorageDescriptorSerDeInfo;
    /**
    * skewed_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_info GluePartition#skewed_info}
    */
    readonly skewedInfo?: GluePartitionStorageDescriptorSkewedInfo;
    /**
    * sort_columns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#sort_columns GluePartition#sort_columns}
    */
    readonly sortColumns?: GluePartitionStorageDescriptorSortColumns[];
  }

  function gluePartitionStorageDescriptorToTerraform(struct?: GluePartitionStorageDescriptorOutputReference | GluePartitionStorageDescriptor): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.bucketColumns),
      compressed: cdktf.booleanToTerraform(struct!.compressed),
      input_format: cdktf.stringToTerraform(struct!.inputFormat),
      location: cdktf.stringToTerraform(struct!.location),
      number_of_buckets: cdktf.numberToTerraform(struct!.numberOfBuckets),
      output_format: cdktf.stringToTerraform(struct!.outputFormat),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
      stored_as_sub_directories: cdktf.booleanToTerraform(struct!.storedAsSubDirectories),
      columns: cdktf.listMapper(gluePartitionStorageDescriptorColumnsToTerraform)(struct!.columns),
      ser_de_info: gluePartitionStorageDescriptorSerDeInfoToTerraform(struct!.serDeInfo),
      skewed_info: gluePartitionStorageDescriptorSkewedInfoToTerraform(struct!.skewedInfo),
      sort_columns: cdktf.listMapper(gluePartitionStorageDescriptorSortColumnsToTerraform)(struct!.sortColumns),
    }
  }

  export class GluePartitionStorageDescriptorOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_columns - computed: false, optional: true, required: false
    private _bucketColumns?: string[] | undefined; 
    public get bucketColumns() {
      return this.getListAttribute('bucket_columns');
    }
    public set bucketColumns(value: string[] | undefined) {
      this._bucketColumns = value;
    }
    public resetBucketColumns() {
      this._bucketColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketColumnsInput() {
      return this._bucketColumns
    }

    // compressed - computed: false, optional: true, required: false
    private _compressed?: boolean | cdktf.IResolvable | undefined; 
    public get compressed() {
      return this.getBooleanAttribute('compressed') as any;
    }
    public set compressed(value: boolean | cdktf.IResolvable | undefined) {
      this._compressed = value;
    }
    public resetCompressed() {
      this._compressed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressedInput() {
      return this._compressed
    }

    // input_format - computed: false, optional: true, required: false
    private _inputFormat?: string | undefined; 
    public get inputFormat() {
      return this.getStringAttribute('input_format');
    }
    public set inputFormat(value: string | undefined) {
      this._inputFormat = value;
    }
    public resetInputFormat() {
      this._inputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputFormatInput() {
      return this._inputFormat
    }

    // location - computed: false, optional: true, required: false
    private _location?: string | undefined; 
    public get location() {
      return this.getStringAttribute('location');
    }
    public set location(value: string | undefined) {
      this._location = value;
    }
    public resetLocation() {
      this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
      return this._location
    }

    // number_of_buckets - computed: false, optional: true, required: false
    private _numberOfBuckets?: number | undefined; 
    public get numberOfBuckets() {
      return this.getNumberAttribute('number_of_buckets');
    }
    public set numberOfBuckets(value: number | undefined) {
      this._numberOfBuckets = value;
    }
    public resetNumberOfBuckets() {
      this._numberOfBuckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfBucketsInput() {
      return this._numberOfBuckets
    }

    // output_format - computed: false, optional: true, required: false
    private _outputFormat?: string | undefined; 
    public get outputFormat() {
      return this.getStringAttribute('output_format');
    }
    public set outputFormat(value: string | undefined) {
      this._outputFormat = value;
    }
    public resetOutputFormat() {
      this._outputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputFormatInput() {
      return this._outputFormat
    }

    // parameters - computed: false, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // stored_as_sub_directories - computed: false, optional: true, required: false
    private _storedAsSubDirectories?: boolean | cdktf.IResolvable | undefined; 
    public get storedAsSubDirectories() {
      return this.getBooleanAttribute('stored_as_sub_directories') as any;
    }
    public set storedAsSubDirectories(value: boolean | cdktf.IResolvable | undefined) {
      this._storedAsSubDirectories = value;
    }
    public resetStoredAsSubDirectories() {
      this._storedAsSubDirectories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storedAsSubDirectoriesInput() {
      return this._storedAsSubDirectories
    }

    // columns - computed: false, optional: true, required: false
    private _columns?: GluePartitionStorageDescriptorColumns[] | undefined; 
    public get columns() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('columns') as any;
    }
    public set columns(value: GluePartitionStorageDescriptorColumns[] | undefined) {
      this._columns = value;
    }
    public resetColumns() {
      this._columns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnsInput() {
      return this._columns
    }

    // ser_de_info - computed: false, optional: true, required: false
    private _serDeInfo?: GluePartitionStorageDescriptorSerDeInfo | undefined; 
    private __serDeInfoOutput = new GluePartitionStorageDescriptorSerDeInfoOutputReference(this as any, "ser_de_info", true);
    public get serDeInfo() {
      return this.__serDeInfoOutput;
    }
    public putSerDeInfo(value: GluePartitionStorageDescriptorSerDeInfo | undefined) {
      this._serDeInfo = value;
    }
    public resetSerDeInfo() {
      this._serDeInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serDeInfoInput() {
      return this._serDeInfo
    }

    // skewed_info - computed: false, optional: true, required: false
    private _skewedInfo?: GluePartitionStorageDescriptorSkewedInfo | undefined; 
    private __skewedInfoOutput = new GluePartitionStorageDescriptorSkewedInfoOutputReference(this as any, "skewed_info", true);
    public get skewedInfo() {
      return this.__skewedInfoOutput;
    }
    public putSkewedInfo(value: GluePartitionStorageDescriptorSkewedInfo | undefined) {
      this._skewedInfo = value;
    }
    public resetSkewedInfo() {
      this._skewedInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedInfoInput() {
      return this._skewedInfo
    }

    // sort_columns - computed: false, optional: true, required: false
    private _sortColumns?: GluePartitionStorageDescriptorSortColumns[] | undefined; 
    public get sortColumns() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('sort_columns') as any;
    }
    public set sortColumns(value: GluePartitionStorageDescriptorSortColumns[] | undefined) {
      this._sortColumns = value;
    }
    public resetSortColumns() {
      this._sortColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sortColumnsInput() {
      return this._sortColumns
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition}
  */
  export class GluePartition extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_partition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GluePartitionConfig
    */
    public constructor(scope: Construct, id: string, config: GluePartitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_partition',
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
      this._parameters = config.parameters;
      this._partitionValues = config.partitionValues;
      this._tableName = config.tableName;
      this._storageDescriptor = config.storageDescriptor;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
      return this.getStringAttribute('creation_time');
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_accessed_time - computed: true, optional: false, required: false
    public get lastAccessedTime() {
      return this.getStringAttribute('last_accessed_time');
    }

    // last_analyzed_time - computed: true, optional: false, required: false
    public get lastAnalyzedTime() {
      return this.getStringAttribute('last_analyzed_time');
    }

    // parameters - computed: false, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // partition_values - computed: false, optional: false, required: true
    private _partitionValues?: string[]; 
    public get partitionValues() {
      return this.getListAttribute('partition_values');
    }
    public set partitionValues(value: string[]) {
      this._partitionValues = value;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionValuesInput() {
      return this._partitionValues
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
      return this._tableName
    }

    // storage_descriptor - computed: false, optional: true, required: false
    private _storageDescriptor?: GluePartitionStorageDescriptor | undefined; 
    private __storageDescriptorOutput = new GluePartitionStorageDescriptorOutputReference(this as any, "storage_descriptor", true);
    public get storageDescriptor() {
      return this.__storageDescriptorOutput;
    }
    public putStorageDescriptor(value: GluePartitionStorageDescriptor | undefined) {
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
        catalog_id: cdktf.stringToTerraform(this._catalogId),
        database_name: cdktf.stringToTerraform(this._databaseName),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
        partition_values: cdktf.listMapper(cdktf.stringToTerraform)(this._partitionValues),
        table_name: cdktf.stringToTerraform(this._tableName),
        storage_descriptor: gluePartitionStorageDescriptorToTerraform(this._storageDescriptor),
      };
    }
  }
  export interface GluePartitionIndexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#catalog_id GluePartitionIndex#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#database_name GluePartitionIndex#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#table_name GluePartitionIndex#table_name}
    */
    readonly tableName: string;
    /**
    * partition_index block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#partition_index GluePartitionIndex#partition_index}
    */
    readonly partitionIndex: GluePartitionIndexPartitionIndex;
  }
  export interface GluePartitionIndexPartitionIndex {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#index_name GluePartitionIndex#index_name}
    */
    readonly indexName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#keys GluePartitionIndex#keys}
    */
    readonly keys?: string[];
  }

  function gluePartitionIndexPartitionIndexToTerraform(struct?: GluePartitionIndexPartitionIndexOutputReference | GluePartitionIndexPartitionIndex): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      index_name: cdktf.stringToTerraform(struct!.indexName),
      keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keys),
    }
  }

  export class GluePartitionIndexPartitionIndexOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // index_name - computed: false, optional: true, required: false
    private _indexName?: string | undefined; 
    public get indexName() {
      return this.getStringAttribute('index_name');
    }
    public set indexName(value: string | undefined) {
      this._indexName = value;
    }
    public resetIndexName() {
      this._indexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexNameInput() {
      return this._indexName
    }

    // keys - computed: false, optional: true, required: false
    private _keys?: string[] | undefined; 
    public get keys() {
      return this.getListAttribute('keys');
    }
    public set keys(value: string[] | undefined) {
      this._keys = value;
    }
    public resetKeys() {
      this._keys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keysInput() {
      return this._keys
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html aws_glue_partition_index}
  */
  export class GluePartitionIndex extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_partition_index";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html aws_glue_partition_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GluePartitionIndexConfig
    */
    public constructor(scope: Construct, id: string, config: GluePartitionIndexConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_partition_index',
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
      this._tableName = config.tableName;
      this._partitionIndex = config.partitionIndex;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
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
    private _databaseName?: string; 
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._tableName
    }

    // partition_index - computed: false, optional: false, required: true
    private _partitionIndex?: GluePartitionIndexPartitionIndex; 
    private __partitionIndexOutput = new GluePartitionIndexPartitionIndexOutputReference(this as any, "partition_index", true);
    public get partitionIndex() {
      return this.__partitionIndexOutput;
    }
    public putPartitionIndex(value: GluePartitionIndexPartitionIndex) {
      this._partitionIndex = value;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionIndexInput() {
      return this._partitionIndex
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        catalog_id: cdktf.stringToTerraform(this._catalogId),
        database_name: cdktf.stringToTerraform(this._databaseName),
        table_name: cdktf.stringToTerraform(this._tableName),
        partition_index: gluePartitionIndexPartitionIndexToTerraform(this._partitionIndex),
      };
    }
  }
  export interface GlueRegistryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_registry.html#description GlueRegistry#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_registry.html#registry_name GlueRegistry#registry_name}
    */
    readonly registryName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_registry.html#tags GlueRegistry#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_registry.html#tags_all GlueRegistry#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_registry.html aws_glue_registry}
  */
  export class GlueRegistry extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_registry";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_registry.html aws_glue_registry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueRegistryConfig
    */
    public constructor(scope: Construct, id: string, config: GlueRegistryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_registry',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._registryName = config.registryName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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

    // registry_name - computed: false, optional: false, required: true
    private _registryName?: string; 
    public get registryName() {
      return this.getStringAttribute('registry_name');
    }
    public set registryName(value: string) {
      this._registryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get registryNameInput() {
      return this._registryName
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        registry_name: cdktf.stringToTerraform(this._registryName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface GlueResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html#enable_hybrid GlueResourcePolicy#enable_hybrid}
    */
    readonly enableHybrid?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html#policy GlueResourcePolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html aws_glue_resource_policy}
  */
  export class GlueResourcePolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_resource_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html aws_glue_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueResourcePolicyConfig
    */
    public constructor(scope: Construct, id: string, config: GlueResourcePolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_resource_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enableHybrid = config.enableHybrid;
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // enable_hybrid - computed: false, optional: true, required: false
    private _enableHybrid?: string | undefined; 
    public get enableHybrid() {
      return this.getStringAttribute('enable_hybrid');
    }
    public set enableHybrid(value: string | undefined) {
      this._enableHybrid = value;
    }
    public resetEnableHybrid() {
      this._enableHybrid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableHybridInput() {
      return this._enableHybrid
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        enable_hybrid: cdktf.stringToTerraform(this._enableHybrid),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface GlueSchemaConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#compatibility GlueSchema#compatibility}
    */
    readonly compatibility: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#data_format GlueSchema#data_format}
    */
    readonly dataFormat: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#description GlueSchema#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#registry_arn GlueSchema#registry_arn}
    */
    readonly registryArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#schema_definition GlueSchema#schema_definition}
    */
    readonly schemaDefinition: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#schema_name GlueSchema#schema_name}
    */
    readonly schemaName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#tags GlueSchema#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#tags_all GlueSchema#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html aws_glue_schema}
  */
  export class GlueSchema extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_schema";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html aws_glue_schema} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueSchemaConfig
    */
    public constructor(scope: Construct, id: string, config: GlueSchemaConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_schema',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._compatibility = config.compatibility;
      this._dataFormat = config.dataFormat;
      this._description = config.description;
      this._registryArn = config.registryArn;
      this._schemaDefinition = config.schemaDefinition;
      this._schemaName = config.schemaName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // compatibility - computed: false, optional: false, required: true
    private _compatibility?: string; 
    public get compatibility() {
      return this.getStringAttribute('compatibility');
    }
    public set compatibility(value: string) {
      this._compatibility = value;
    }
    // Temporarily expose input value. Use with caution.
    public get compatibilityInput() {
      return this._compatibility
    }

    // data_format - computed: false, optional: false, required: true
    private _dataFormat?: string; 
    public get dataFormat() {
      return this.getStringAttribute('data_format');
    }
    public set dataFormat(value: string) {
      this._dataFormat = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataFormatInput() {
      return this._dataFormat
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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

    // latest_schema_version - computed: true, optional: false, required: false
    public get latestSchemaVersion() {
      return this.getNumberAttribute('latest_schema_version');
    }

    // next_schema_version - computed: true, optional: false, required: false
    public get nextSchemaVersion() {
      return this.getNumberAttribute('next_schema_version');
    }

    // registry_arn - computed: true, optional: true, required: false
    private _registryArn?: string | undefined; 
    public get registryArn() {
      return this.getStringAttribute('registry_arn');
    }
    public set registryArn(value: string | undefined) {
      this._registryArn = value;
    }
    public resetRegistryArn() {
      this._registryArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registryArnInput() {
      return this._registryArn
    }

    // registry_name - computed: true, optional: false, required: false
    public get registryName() {
      return this.getStringAttribute('registry_name');
    }

    // schema_checkpoint - computed: true, optional: false, required: false
    public get schemaCheckpoint() {
      return this.getNumberAttribute('schema_checkpoint');
    }

    // schema_definition - computed: false, optional: false, required: true
    private _schemaDefinition?: string; 
    public get schemaDefinition() {
      return this.getStringAttribute('schema_definition');
    }
    public set schemaDefinition(value: string) {
      this._schemaDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaDefinitionInput() {
      return this._schemaDefinition
    }

    // schema_name - computed: false, optional: false, required: true
    private _schemaName?: string; 
    public get schemaName() {
      return this.getStringAttribute('schema_name');
    }
    public set schemaName(value: string) {
      this._schemaName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaNameInput() {
      return this._schemaName
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        compatibility: cdktf.stringToTerraform(this._compatibility),
        data_format: cdktf.stringToTerraform(this._dataFormat),
        description: cdktf.stringToTerraform(this._description),
        registry_arn: cdktf.stringToTerraform(this._registryArn),
        schema_definition: cdktf.stringToTerraform(this._schemaDefinition),
        schema_name: cdktf.stringToTerraform(this._schemaName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface GlueSecurityConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#name GlueSecurityConfiguration#name}
    */
    readonly name: string;
    /**
    * encryption_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#encryption_configuration GlueSecurityConfiguration#encryption_configuration}
    */
    readonly encryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration;
  }
  export interface GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}
    */
    readonly cloudwatchEncryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
  }

  function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cloudwatch_encryption_mode: cdktf.stringToTerraform(struct!.cloudwatchEncryptionMode),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    }
  }

  export class GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cloudwatch_encryption_mode - computed: false, optional: true, required: false
    private _cloudwatchEncryptionMode?: string | undefined; 
    public get cloudwatchEncryptionMode() {
      return this.getStringAttribute('cloudwatch_encryption_mode');
    }
    public set cloudwatchEncryptionMode(value: string | undefined) {
      this._cloudwatchEncryptionMode = value;
    }
    public resetCloudwatchEncryptionMode() {
      this._cloudwatchEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchEncryptionModeInput() {
      return this._cloudwatchEncryptionMode
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }
  }
  export interface GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}
    */
    readonly jobBookmarksEncryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
  }

  function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      job_bookmarks_encryption_mode: cdktf.stringToTerraform(struct!.jobBookmarksEncryptionMode),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    }
  }

  export class GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // job_bookmarks_encryption_mode - computed: false, optional: true, required: false
    private _jobBookmarksEncryptionMode?: string | undefined; 
    public get jobBookmarksEncryptionMode() {
      return this.getStringAttribute('job_bookmarks_encryption_mode');
    }
    public set jobBookmarksEncryptionMode(value: string | undefined) {
      this._jobBookmarksEncryptionMode = value;
    }
    public resetJobBookmarksEncryptionMode() {
      this._jobBookmarksEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobBookmarksEncryptionModeInput() {
      return this._jobBookmarksEncryptionMode
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }
  }
  export interface GlueSecurityConfigurationEncryptionConfigurationS3Encryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}
    */
    readonly s3EncryptionMode?: string;
  }

  function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationS3Encryption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
      s3_encryption_mode: cdktf.stringToTerraform(struct!.s3EncryptionMode),
    }
  }

  export class GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // s3_encryption_mode - computed: false, optional: true, required: false
    private _s3EncryptionMode?: string | undefined; 
    public get s3EncryptionMode() {
      return this.getStringAttribute('s3_encryption_mode');
    }
    public set s3EncryptionMode(value: string | undefined) {
      this._s3EncryptionMode = value;
    }
    public resetS3EncryptionMode() {
      this._s3EncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3EncryptionModeInput() {
      return this._s3EncryptionMode
    }
  }
  export interface GlueSecurityConfigurationEncryptionConfiguration {
    /**
    * cloudwatch_encryption block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#cloudwatch_encryption GlueSecurityConfiguration#cloudwatch_encryption}
    */
    readonly cloudwatchEncryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption;
    /**
    * job_bookmarks_encryption block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#job_bookmarks_encryption GlueSecurityConfiguration#job_bookmarks_encryption}
    */
    readonly jobBookmarksEncryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption;
    /**
    * s3_encryption block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#s3_encryption GlueSecurityConfiguration#s3_encryption}
    */
    readonly s3Encryption: GlueSecurityConfigurationEncryptionConfigurationS3Encryption;
  }

  function glueSecurityConfigurationEncryptionConfigurationToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationOutputReference | GlueSecurityConfigurationEncryptionConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cloudwatch_encryption: glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct!.cloudwatchEncryption),
      job_bookmarks_encryption: glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct!.jobBookmarksEncryption),
      s3_encryption: glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct!.s3Encryption),
    }
  }

  export class GlueSecurityConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cloudwatch_encryption - computed: false, optional: false, required: true
    private _cloudwatchEncryption?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption; 
    private __cloudwatchEncryptionOutput = new GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(this as any, "cloudwatch_encryption", true);
    public get cloudwatchEncryption() {
      return this.__cloudwatchEncryptionOutput;
    }
    public putCloudwatchEncryption(value: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption) {
      this._cloudwatchEncryption = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchEncryptionInput() {
      return this._cloudwatchEncryption
    }

    // job_bookmarks_encryption - computed: false, optional: false, required: true
    private _jobBookmarksEncryption?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption; 
    private __jobBookmarksEncryptionOutput = new GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(this as any, "job_bookmarks_encryption", true);
    public get jobBookmarksEncryption() {
      return this.__jobBookmarksEncryptionOutput;
    }
    public putJobBookmarksEncryption(value: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption) {
      this._jobBookmarksEncryption = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jobBookmarksEncryptionInput() {
      return this._jobBookmarksEncryption
    }

    // s3_encryption - computed: false, optional: false, required: true
    private _s3Encryption?: GlueSecurityConfigurationEncryptionConfigurationS3Encryption; 
    private __s3EncryptionOutput = new GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference(this as any, "s3_encryption", true);
    public get s3Encryption() {
      return this.__s3EncryptionOutput;
    }
    public putS3Encryption(value: GlueSecurityConfigurationEncryptionConfigurationS3Encryption) {
      this._s3Encryption = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3EncryptionInput() {
      return this._s3Encryption
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration}
  */
  export class GlueSecurityConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_security_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueSecurityConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: GlueSecurityConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_security_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._encryptionConfiguration = config.encryptionConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
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

    // encryption_configuration - computed: false, optional: false, required: true
    private _encryptionConfiguration?: GlueSecurityConfigurationEncryptionConfiguration; 
    private __encryptionConfigurationOutput = new GlueSecurityConfigurationEncryptionConfigurationOutputReference(this as any, "encryption_configuration", true);
    public get encryptionConfiguration() {
      return this.__encryptionConfigurationOutput;
    }
    public putEncryptionConfiguration(value: GlueSecurityConfigurationEncryptionConfiguration) {
      this._encryptionConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
      return this._encryptionConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        encryption_configuration: glueSecurityConfigurationEncryptionConfigurationToTerraform(this._encryptionConfiguration),
      };
    }
  }
  export interface GlueTriggerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#description GlueTrigger#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#enabled GlueTrigger#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#name GlueTrigger#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#schedule GlueTrigger#schedule}
    */
    readonly schedule?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#tags GlueTrigger#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#tags_all GlueTrigger#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#type GlueTrigger#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#workflow_name GlueTrigger#workflow_name}
    */
    readonly workflowName?: string;
    /**
    * actions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#actions GlueTrigger#actions}
    */
    readonly actions: GlueTriggerActions[];
    /**
    * predicate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#predicate GlueTrigger#predicate}
    */
    readonly predicate?: GlueTriggerPredicate;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#timeouts GlueTrigger#timeouts}
    */
    readonly timeouts?: GlueTriggerTimeouts;
  }
  export interface GlueTriggerActionsNotificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#notify_delay_after GlueTrigger#notify_delay_after}
    */
    readonly notifyDelayAfter?: number;
  }

  function glueTriggerActionsNotificationPropertyToTerraform(struct?: GlueTriggerActionsNotificationPropertyOutputReference | GlueTriggerActionsNotificationProperty): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      notify_delay_after: cdktf.numberToTerraform(struct!.notifyDelayAfter),
    }
  }

  export class GlueTriggerActionsNotificationPropertyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // notify_delay_after - computed: false, optional: true, required: false
    private _notifyDelayAfter?: number | undefined; 
    public get notifyDelayAfter() {
      return this.getNumberAttribute('notify_delay_after');
    }
    public set notifyDelayAfter(value: number | undefined) {
      this._notifyDelayAfter = value;
    }
    public resetNotifyDelayAfter() {
      this._notifyDelayAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyDelayAfterInput() {
      return this._notifyDelayAfter
    }
  }
  export interface GlueTriggerActions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#arguments GlueTrigger#arguments}
    */
    readonly arguments?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawler_name GlueTrigger#crawler_name}
    */
    readonly crawlerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#job_name GlueTrigger#job_name}
    */
    readonly jobName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#security_configuration GlueTrigger#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#timeout GlueTrigger#timeout}
    */
    readonly timeout?: number;
    /**
    * notification_property block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#notification_property GlueTrigger#notification_property}
    */
    readonly notificationProperty?: GlueTriggerActionsNotificationProperty;
  }

  function glueTriggerActionsToTerraform(struct?: GlueTriggerActions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      arguments: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.arguments),
      crawler_name: cdktf.stringToTerraform(struct!.crawlerName),
      job_name: cdktf.stringToTerraform(struct!.jobName),
      security_configuration: cdktf.stringToTerraform(struct!.securityConfiguration),
      timeout: cdktf.numberToTerraform(struct!.timeout),
      notification_property: glueTriggerActionsNotificationPropertyToTerraform(struct!.notificationProperty),
    }
  }

  export interface GlueTriggerPredicateConditions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawl_state GlueTrigger#crawl_state}
    */
    readonly crawlState?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawler_name GlueTrigger#crawler_name}
    */
    readonly crawlerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#job_name GlueTrigger#job_name}
    */
    readonly jobName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#logical_operator GlueTrigger#logical_operator}
    */
    readonly logicalOperator?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#state GlueTrigger#state}
    */
    readonly state?: string;
  }

  function glueTriggerPredicateConditionsToTerraform(struct?: GlueTriggerPredicateConditions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      crawl_state: cdktf.stringToTerraform(struct!.crawlState),
      crawler_name: cdktf.stringToTerraform(struct!.crawlerName),
      job_name: cdktf.stringToTerraform(struct!.jobName),
      logical_operator: cdktf.stringToTerraform(struct!.logicalOperator),
      state: cdktf.stringToTerraform(struct!.state),
    }
  }

  export interface GlueTriggerPredicate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#logical GlueTrigger#logical}
    */
    readonly logical?: string;
    /**
    * conditions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#conditions GlueTrigger#conditions}
    */
    readonly conditions: GlueTriggerPredicateConditions[];
  }

  function glueTriggerPredicateToTerraform(struct?: GlueTriggerPredicateOutputReference | GlueTriggerPredicate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      logical: cdktf.stringToTerraform(struct!.logical),
      conditions: cdktf.listMapper(glueTriggerPredicateConditionsToTerraform)(struct!.conditions),
    }
  }

  export class GlueTriggerPredicateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // logical - computed: false, optional: true, required: false
    private _logical?: string | undefined; 
    public get logical() {
      return this.getStringAttribute('logical');
    }
    public set logical(value: string | undefined) {
      this._logical = value;
    }
    public resetLogical() {
      this._logical = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logicalInput() {
      return this._logical
    }

    // conditions - computed: false, optional: false, required: true
    private _conditions?: GlueTriggerPredicateConditions[]; 
    public get conditions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('conditions') as any;
    }
    public set conditions(value: GlueTriggerPredicateConditions[]) {
      this._conditions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
      return this._conditions
    }
  }
  export interface GlueTriggerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#create GlueTrigger#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#delete GlueTrigger#delete}
    */
    readonly delete?: string;
  }

  function glueTriggerTimeoutsToTerraform(struct?: GlueTriggerTimeoutsOutputReference | GlueTriggerTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class GlueTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html aws_glue_trigger}
  */
  export class GlueTrigger extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_trigger";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html aws_glue_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueTriggerConfig
    */
    public constructor(scope: Construct, id: string, config: GlueTriggerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_trigger',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._enabled = config.enabled;
      this._name = config.name;
      this._schedule = config.schedule;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
      this._workflowName = config.workflowName;
      this._actions = config.actions;
      this._predicate = config.predicate;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
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

    // schedule - computed: false, optional: true, required: false
    private _schedule?: string | undefined; 
    public get schedule() {
      return this.getStringAttribute('schedule');
    }
    public set schedule(value: string | undefined) {
      this._schedule = value;
    }
    public resetSchedule() {
      this._schedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
      return this._schedule
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // workflow_name - computed: false, optional: true, required: false
    private _workflowName?: string | undefined; 
    public get workflowName() {
      return this.getStringAttribute('workflow_name');
    }
    public set workflowName(value: string | undefined) {
      this._workflowName = value;
    }
    public resetWorkflowName() {
      this._workflowName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowNameInput() {
      return this._workflowName
    }

    // actions - computed: false, optional: false, required: true
    private _actions?: GlueTriggerActions[]; 
    public get actions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('actions') as any;
    }
    public set actions(value: GlueTriggerActions[]) {
      this._actions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
      return this._actions
    }

    // predicate - computed: false, optional: true, required: false
    private _predicate?: GlueTriggerPredicate | undefined; 
    private __predicateOutput = new GlueTriggerPredicateOutputReference(this as any, "predicate", true);
    public get predicate() {
      return this.__predicateOutput;
    }
    public putPredicate(value: GlueTriggerPredicate | undefined) {
      this._predicate = value;
    }
    public resetPredicate() {
      this._predicate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predicateInput() {
      return this._predicate
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: GlueTriggerTimeouts | undefined; 
    private __timeoutsOutput = new GlueTriggerTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: GlueTriggerTimeouts | undefined) {
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
        description: cdktf.stringToTerraform(this._description),
        enabled: cdktf.booleanToTerraform(this._enabled),
        name: cdktf.stringToTerraform(this._name),
        schedule: cdktf.stringToTerraform(this._schedule),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
        workflow_name: cdktf.stringToTerraform(this._workflowName),
        actions: cdktf.listMapper(glueTriggerActionsToTerraform)(this._actions),
        predicate: glueTriggerPredicateToTerraform(this._predicate),
        timeouts: glueTriggerTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface GlueUserDefinedFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#catalog_id GlueUserDefinedFunction#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#class_name GlueUserDefinedFunction#class_name}
    */
    readonly className: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#database_name GlueUserDefinedFunction#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#name GlueUserDefinedFunction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#owner_name GlueUserDefinedFunction#owner_name}
    */
    readonly ownerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#owner_type GlueUserDefinedFunction#owner_type}
    */
    readonly ownerType: string;
    /**
    * resource_uris block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#resource_uris GlueUserDefinedFunction#resource_uris}
    */
    readonly resourceUris?: GlueUserDefinedFunctionResourceUris[];
  }
  export interface GlueUserDefinedFunctionResourceUris {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#resource_type GlueUserDefinedFunction#resource_type}
    */
    readonly resourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#uri GlueUserDefinedFunction#uri}
    */
    readonly uri: string;
  }

  function glueUserDefinedFunctionResourceUrisToTerraform(struct?: GlueUserDefinedFunctionResourceUris): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_type: cdktf.stringToTerraform(struct!.resourceType),
      uri: cdktf.stringToTerraform(struct!.uri),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html aws_glue_user_defined_function}
  */
  export class GlueUserDefinedFunction extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_user_defined_function";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html aws_glue_user_defined_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueUserDefinedFunctionConfig
    */
    public constructor(scope: Construct, id: string, config: GlueUserDefinedFunctionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_user_defined_function',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._catalogId = config.catalogId;
      this._className = config.className;
      this._databaseName = config.databaseName;
      this._name = config.name;
      this._ownerName = config.ownerName;
      this._ownerType = config.ownerType;
      this._resourceUris = config.resourceUris;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // catalog_id - computed: false, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // class_name - computed: false, optional: false, required: true
    private _className?: string; 
    public get className() {
      return this.getStringAttribute('class_name');
    }
    public set className(value: string) {
      this._className = value;
    }
    // Temporarily expose input value. Use with caution.
    public get classNameInput() {
      return this._className
    }

    // create_time - computed: true, optional: false, required: false
    public get createTime() {
      return this.getStringAttribute('create_time');
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
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

    // owner_name - computed: false, optional: false, required: true
    private _ownerName?: string; 
    public get ownerName() {
      return this.getStringAttribute('owner_name');
    }
    public set ownerName(value: string) {
      this._ownerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerNameInput() {
      return this._ownerName
    }

    // owner_type - computed: false, optional: false, required: true
    private _ownerType?: string; 
    public get ownerType() {
      return this.getStringAttribute('owner_type');
    }
    public set ownerType(value: string) {
      this._ownerType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerTypeInput() {
      return this._ownerType
    }

    // resource_uris - computed: false, optional: true, required: false
    private _resourceUris?: GlueUserDefinedFunctionResourceUris[] | undefined; 
    public get resourceUris() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('resource_uris') as any;
    }
    public set resourceUris(value: GlueUserDefinedFunctionResourceUris[] | undefined) {
      this._resourceUris = value;
    }
    public resetResourceUris() {
      this._resourceUris = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceUrisInput() {
      return this._resourceUris
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        catalog_id: cdktf.stringToTerraform(this._catalogId),
        class_name: cdktf.stringToTerraform(this._className),
        database_name: cdktf.stringToTerraform(this._databaseName),
        name: cdktf.stringToTerraform(this._name),
        owner_name: cdktf.stringToTerraform(this._ownerName),
        owner_type: cdktf.stringToTerraform(this._ownerType),
        resource_uris: cdktf.listMapper(glueUserDefinedFunctionResourceUrisToTerraform)(this._resourceUris),
      };
    }
  }
  export interface GlueWorkflowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#default_run_properties GlueWorkflow#default_run_properties}
    */
    readonly defaultRunProperties?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#description GlueWorkflow#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#max_concurrent_runs GlueWorkflow#max_concurrent_runs}
    */
    readonly maxConcurrentRuns?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#name GlueWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#tags GlueWorkflow#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#tags_all GlueWorkflow#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html aws_glue_workflow}
  */
  export class GlueWorkflow extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_workflow";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html aws_glue_workflow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueWorkflowConfig = {}
    */
    public constructor(scope: Construct, id: string, config: GlueWorkflowConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_workflow',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._defaultRunProperties = config.defaultRunProperties;
      this._description = config.description;
      this._maxConcurrentRuns = config.maxConcurrentRuns;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // default_run_properties - computed: false, optional: true, required: false
    private _defaultRunProperties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get defaultRunProperties() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('default_run_properties') as any;
    }
    public set defaultRunProperties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._defaultRunProperties = value;
    }
    public resetDefaultRunProperties() {
      this._defaultRunProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRunPropertiesInput() {
      return this._defaultRunProperties
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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

    // max_concurrent_runs - computed: false, optional: true, required: false
    private _maxConcurrentRuns?: number | undefined; 
    public get maxConcurrentRuns() {
      return this.getNumberAttribute('max_concurrent_runs');
    }
    public set maxConcurrentRuns(value: number | undefined) {
      this._maxConcurrentRuns = value;
    }
    public resetMaxConcurrentRuns() {
      this._maxConcurrentRuns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentRunsInput() {
      return this._maxConcurrentRuns
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        default_run_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._defaultRunProperties),
        description: cdktf.stringToTerraform(this._description),
        max_concurrent_runs: cdktf.numberToTerraform(this._maxConcurrentRuns),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DataAwsGlueConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_connection.html#id DataAwsGlueConnection#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_connection.html#tags DataAwsGlueConnection#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsGlueConnectionPhysicalConnectionRequirements extends cdktf.ComplexComputedList {

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // security_group_id_list - computed: true, optional: false, required: false
    public get securityGroupIdList() {
      return this.getListAttribute('security_group_id_list');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_connection.html aws_glue_connection}
  */
  export class DataAwsGlueConnection extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_connection.html aws_glue_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsGlueConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._id = config.id;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // catalog_id - computed: true, optional: false, required: false
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }

    // connection_properties - computed: true, optional: false, required: false
    public connectionProperties(key: string): string {
      return new cdktf.StringMap(this, 'connection_properties').lookup(key);
    }

    // connection_type - computed: true, optional: false, required: false
    public get connectionType() {
      return this.getStringAttribute('connection_type');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: false, optional: false, required: true
    private _id?: string; 
    public get id() {
      return this.getStringAttribute('id');
    }
    public set id(value: string) {
      this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
      return this._id
    }

    // match_criteria - computed: true, optional: false, required: false
    public get matchCriteria() {
      return this.getListAttribute('match_criteria');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // physical_connection_requirements - computed: true, optional: false, required: false
    public physicalConnectionRequirements(index: string) {
      return new DataAwsGlueConnectionPhysicalConnectionRequirements(this, 'physical_connection_requirements', index);
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        id: cdktf.stringToTerraform(this._id),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsGlueDataCatalogEncryptionSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html#catalog_id DataAwsGlueDataCatalogEncryptionSettings#catalog_id}
    */
    readonly catalogId: string;
  }
  export class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption extends cdktf.ComplexComputedList {

    // aws_kms_key_id - computed: true, optional: false, required: false
    public get awsKmsKeyId() {
      return this.getStringAttribute('aws_kms_key_id');
    }

    // return_connection_password_encrypted - computed: true, optional: false, required: false
    public get returnConnectionPasswordEncrypted() {
      return this.getBooleanAttribute('return_connection_password_encrypted') as any;
    }
  }
  export class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest extends cdktf.ComplexComputedList {

    // catalog_encryption_mode - computed: true, optional: false, required: false
    public get catalogEncryptionMode() {
      return this.getStringAttribute('catalog_encryption_mode');
    }

    // sse_aws_kms_key_id - computed: true, optional: false, required: false
    public get sseAwsKmsKeyId() {
      return this.getStringAttribute('sse_aws_kms_key_id');
    }
  }
  export class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings extends cdktf.ComplexComputedList {

    // connection_password_encryption - computed: true, optional: false, required: false
    public get connectionPasswordEncryption() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('connection_password_encryption') as any;
    }

    // encryption_at_rest - computed: true, optional: false, required: false
    public get encryptionAtRest() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('encryption_at_rest') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}
  */
  export class DataAwsGlueDataCatalogEncryptionSettings extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_data_catalog_encryption_settings";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueDataCatalogEncryptionSettingsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsGlueDataCatalogEncryptionSettingsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_data_catalog_encryption_settings',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._catalogId = config.catalogId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // catalog_id - computed: false, optional: false, required: true
    private _catalogId?: string; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
      this._catalogId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // data_catalog_encryption_settings - computed: true, optional: false, required: false
    public dataCatalogEncryptionSettings(index: string) {
      return new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings(this, 'data_catalog_encryption_settings', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        catalog_id: cdktf.stringToTerraform(this._catalogId),
      };
    }
  }
  export interface DataAwsGlueScriptConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#language DataAwsGlueScript#language}
    */
    readonly language?: string;
    /**
    * dag_edge block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#dag_edge DataAwsGlueScript#dag_edge}
    */
    readonly dagEdge: DataAwsGlueScriptDagEdge[];
    /**
    * dag_node block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#dag_node DataAwsGlueScript#dag_node}
    */
    readonly dagNode: DataAwsGlueScriptDagNode[];
  }
  export interface DataAwsGlueScriptDagEdge {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#source DataAwsGlueScript#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#target DataAwsGlueScript#target}
    */
    readonly target: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#target_parameter DataAwsGlueScript#target_parameter}
    */
    readonly targetParameter?: string;
  }

  function dataAwsGlueScriptDagEdgeToTerraform(struct?: DataAwsGlueScriptDagEdge): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      source: cdktf.stringToTerraform(struct!.source),
      target: cdktf.stringToTerraform(struct!.target),
      target_parameter: cdktf.stringToTerraform(struct!.targetParameter),
    }
  }

  export interface DataAwsGlueScriptDagNodeArgs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#name DataAwsGlueScript#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#param DataAwsGlueScript#param}
    */
    readonly param?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#value DataAwsGlueScript#value}
    */
    readonly value: string;
  }

  function dataAwsGlueScriptDagNodeArgsToTerraform(struct?: DataAwsGlueScriptDagNodeArgs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      param: cdktf.booleanToTerraform(struct!.param),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface DataAwsGlueScriptDagNode {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#id DataAwsGlueScript#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#line_number DataAwsGlueScript#line_number}
    */
    readonly lineNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#node_type DataAwsGlueScript#node_type}
    */
    readonly nodeType: string;
    /**
    * args block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#args DataAwsGlueScript#args}
    */
    readonly args: DataAwsGlueScriptDagNodeArgs[];
  }

  function dataAwsGlueScriptDagNodeToTerraform(struct?: DataAwsGlueScriptDagNode): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      id: cdktf.stringToTerraform(struct!.id),
      line_number: cdktf.numberToTerraform(struct!.lineNumber),
      node_type: cdktf.stringToTerraform(struct!.nodeType),
      args: cdktf.listMapper(dataAwsGlueScriptDagNodeArgsToTerraform)(struct!.args),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html aws_glue_script}
  */
  export class DataAwsGlueScript extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glue_script";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html aws_glue_script} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueScriptConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsGlueScriptConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glue_script',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._language = config.language;
      this._dagEdge = config.dagEdge;
      this._dagNode = config.dagNode;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // language - computed: false, optional: true, required: false
    private _language?: string | undefined; 
    public get language() {
      return this.getStringAttribute('language');
    }
    public set language(value: string | undefined) {
      this._language = value;
    }
    public resetLanguage() {
      this._language = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get languageInput() {
      return this._language
    }

    // python_script - computed: true, optional: false, required: false
    public get pythonScript() {
      return this.getStringAttribute('python_script');
    }

    // scala_code - computed: true, optional: false, required: false
    public get scalaCode() {
      return this.getStringAttribute('scala_code');
    }

    // dag_edge - computed: false, optional: false, required: true
    private _dagEdge?: DataAwsGlueScriptDagEdge[]; 
    public get dagEdge() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('dag_edge') as any;
    }
    public set dagEdge(value: DataAwsGlueScriptDagEdge[]) {
      this._dagEdge = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dagEdgeInput() {
      return this._dagEdge
    }

    // dag_node - computed: false, optional: false, required: true
    private _dagNode?: DataAwsGlueScriptDagNode[]; 
    public get dagNode() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('dag_node') as any;
    }
    public set dagNode(value: DataAwsGlueScriptDagNode[]) {
      this._dagNode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dagNodeInput() {
      return this._dagNode
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        language: cdktf.stringToTerraform(this._language),
        dag_edge: cdktf.listMapper(dataAwsGlueScriptDagEdgeToTerraform)(this._dagEdge),
        dag_node: cdktf.listMapper(dataAwsGlueScriptDagNodeToTerraform)(this._dagNode),
      };
    }
  }
}
