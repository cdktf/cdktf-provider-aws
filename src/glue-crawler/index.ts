/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueCrawlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#classifiers GlueCrawler#classifiers}
  */
  readonly classifiers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#configuration GlueCrawler#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#description GlueCrawler#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#id GlueCrawler#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#name GlueCrawler#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#region GlueCrawler#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#role GlueCrawler#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#schedule GlueCrawler#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#security_configuration GlueCrawler#security_configuration}
  */
  readonly securityConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#table_prefix GlueCrawler#table_prefix}
  */
  readonly tablePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#tags GlueCrawler#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#tags_all GlueCrawler#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * catalog_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#catalog_target GlueCrawler#catalog_target}
  */
  readonly catalogTarget?: GlueCrawlerCatalogTarget[] | cdktf.IResolvable;
  /**
  * delta_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#delta_target GlueCrawler#delta_target}
  */
  readonly deltaTarget?: GlueCrawlerDeltaTarget[] | cdktf.IResolvable;
  /**
  * dynamodb_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#dynamodb_target GlueCrawler#dynamodb_target}
  */
  readonly dynamodbTarget?: GlueCrawlerDynamodbTarget[] | cdktf.IResolvable;
  /**
  * hudi_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#hudi_target GlueCrawler#hudi_target}
  */
  readonly hudiTarget?: GlueCrawlerHudiTarget[] | cdktf.IResolvable;
  /**
  * iceberg_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#iceberg_target GlueCrawler#iceberg_target}
  */
  readonly icebergTarget?: GlueCrawlerIcebergTarget[] | cdktf.IResolvable;
  /**
  * jdbc_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#jdbc_target GlueCrawler#jdbc_target}
  */
  readonly jdbcTarget?: GlueCrawlerJdbcTarget[] | cdktf.IResolvable;
  /**
  * lake_formation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}
  */
  readonly lakeFormationConfiguration?: GlueCrawlerLakeFormationConfiguration;
  /**
  * lineage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#lineage_configuration GlueCrawler#lineage_configuration}
  */
  readonly lineageConfiguration?: GlueCrawlerLineageConfiguration;
  /**
  * mongodb_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#mongodb_target GlueCrawler#mongodb_target}
  */
  readonly mongodbTarget?: GlueCrawlerMongodbTarget[] | cdktf.IResolvable;
  /**
  * recrawl_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}
  */
  readonly recrawlPolicy?: GlueCrawlerRecrawlPolicy;
  /**
  * s3_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#s3_target GlueCrawler#s3_target}
  */
  readonly s3Target?: GlueCrawlerS3Target[] | cdktf.IResolvable;
  /**
  * schema_change_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}
  */
  readonly schemaChangePolicy?: GlueCrawlerSchemaChangePolicy;
}
export interface GlueCrawlerCatalogTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}
  */
  readonly dlqEventQueueArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}
  */
  readonly eventQueueArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#tables GlueCrawler#tables}
  */
  readonly tables: string[];
}

export function glueCrawlerCatalogTargetToTerraform(struct?: GlueCrawlerCatalogTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    dlq_event_queue_arn: cdktf.stringToTerraform(struct!.dlqEventQueueArn),
    event_queue_arn: cdktf.stringToTerraform(struct!.eventQueueArn),
    tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tables),
  }
}


export function glueCrawlerCatalogTargetToHclTerraform(struct?: GlueCrawlerCatalogTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlq_event_queue_arn: {
      value: cdktf.stringToHclTerraform(struct!.dlqEventQueueArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_queue_arn: {
      value: cdktf.stringToHclTerraform(struct!.eventQueueArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerCatalogTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GlueCrawlerCatalogTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._dlqEventQueueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlqEventQueueArn = this._dlqEventQueueArn;
    }
    if (this._eventQueueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventQueueArn = this._eventQueueArn;
    }
    if (this._tables !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerCatalogTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._databaseName = undefined;
      this._dlqEventQueueArn = undefined;
      this._eventQueueArn = undefined;
      this._tables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._databaseName = value.databaseName;
      this._dlqEventQueueArn = value.dlqEventQueueArn;
      this._eventQueueArn = value.eventQueueArn;
      this._tables = value.tables;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
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
    return this._databaseName;
  }

  // dlq_event_queue_arn - computed: false, optional: true, required: false
  private _dlqEventQueueArn?: string; 
  public get dlqEventQueueArn() {
    return this.getStringAttribute('dlq_event_queue_arn');
  }
  public set dlqEventQueueArn(value: string) {
    this._dlqEventQueueArn = value;
  }
  public resetDlqEventQueueArn() {
    this._dlqEventQueueArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlqEventQueueArnInput() {
    return this._dlqEventQueueArn;
  }

  // event_queue_arn - computed: false, optional: true, required: false
  private _eventQueueArn?: string; 
  public get eventQueueArn() {
    return this.getStringAttribute('event_queue_arn');
  }
  public set eventQueueArn(value: string) {
    this._eventQueueArn = value;
  }
  public resetEventQueueArn() {
    this._eventQueueArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventQueueArnInput() {
    return this._eventQueueArn;
  }

  // tables - computed: false, optional: false, required: true
  private _tables?: string[]; 
  public get tables() {
    return this.getListAttribute('tables');
  }
  public set tables(value: string[]) {
    this._tables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables;
  }
}

export class GlueCrawlerCatalogTargetList extends cdktf.ComplexList {
  public internalValue? : GlueCrawlerCatalogTarget[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GlueCrawlerCatalogTargetOutputReference {
    return new GlueCrawlerCatalogTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCrawlerDeltaTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#create_native_delta_table GlueCrawler#create_native_delta_table}
  */
  readonly createNativeDeltaTable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}
  */
  readonly deltaTables: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#write_manifest GlueCrawler#write_manifest}
  */
  readonly writeManifest: boolean | cdktf.IResolvable;
}

export function glueCrawlerDeltaTargetToTerraform(struct?: GlueCrawlerDeltaTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    create_native_delta_table: cdktf.booleanToTerraform(struct!.createNativeDeltaTable),
    delta_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deltaTables),
    write_manifest: cdktf.booleanToTerraform(struct!.writeManifest),
  }
}


export function glueCrawlerDeltaTargetToHclTerraform(struct?: GlueCrawlerDeltaTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_native_delta_table: {
      value: cdktf.booleanToHclTerraform(struct!.createNativeDeltaTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delta_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deltaTables),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    write_manifest: {
      value: cdktf.booleanToHclTerraform(struct!.writeManifest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerDeltaTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GlueCrawlerDeltaTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._createNativeDeltaTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.createNativeDeltaTable = this._createNativeDeltaTable;
    }
    if (this._deltaTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTables = this._deltaTables;
    }
    if (this._writeManifest !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeManifest = this._writeManifest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerDeltaTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._createNativeDeltaTable = undefined;
      this._deltaTables = undefined;
      this._writeManifest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._createNativeDeltaTable = value.createNativeDeltaTable;
      this._deltaTables = value.deltaTables;
      this._writeManifest = value.writeManifest;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // create_native_delta_table - computed: false, optional: true, required: false
  private _createNativeDeltaTable?: boolean | cdktf.IResolvable; 
  public get createNativeDeltaTable() {
    return this.getBooleanAttribute('create_native_delta_table');
  }
  public set createNativeDeltaTable(value: boolean | cdktf.IResolvable) {
    this._createNativeDeltaTable = value;
  }
  public resetCreateNativeDeltaTable() {
    this._createNativeDeltaTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNativeDeltaTableInput() {
    return this._createNativeDeltaTable;
  }

  // delta_tables - computed: false, optional: false, required: true
  private _deltaTables?: string[]; 
  public get deltaTables() {
    return cdktf.Fn.tolist(this.getListAttribute('delta_tables'));
  }
  public set deltaTables(value: string[]) {
    this._deltaTables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTablesInput() {
    return this._deltaTables;
  }

  // write_manifest - computed: false, optional: false, required: true
  private _writeManifest?: boolean | cdktf.IResolvable; 
  public get writeManifest() {
    return this.getBooleanAttribute('write_manifest');
  }
  public set writeManifest(value: boolean | cdktf.IResolvable) {
    this._writeManifest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeManifestInput() {
    return this._writeManifest;
  }
}

export class GlueCrawlerDeltaTargetList extends cdktf.ComplexList {
  public internalValue? : GlueCrawlerDeltaTarget[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GlueCrawlerDeltaTargetOutputReference {
    return new GlueCrawlerDeltaTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCrawlerDynamodbTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#path GlueCrawler#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}
  */
  readonly scanAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#scan_rate GlueCrawler#scan_rate}
  */
  readonly scanRate?: number;
}

export function glueCrawlerDynamodbTargetToTerraform(struct?: GlueCrawlerDynamodbTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    scan_all: cdktf.booleanToTerraform(struct!.scanAll),
    scan_rate: cdktf.numberToTerraform(struct!.scanRate),
  }
}


export function glueCrawlerDynamodbTargetToHclTerraform(struct?: GlueCrawlerDynamodbTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_all: {
      value: cdktf.booleanToHclTerraform(struct!.scanAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scan_rate: {
      value: cdktf.numberToHclTerraform(struct!.scanRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerDynamodbTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GlueCrawlerDynamodbTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._scanAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanAll = this._scanAll;
    }
    if (this._scanRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanRate = this._scanRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerDynamodbTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._scanAll = undefined;
      this._scanRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._scanAll = value.scanAll;
      this._scanRate = value.scanRate;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // scan_all - computed: false, optional: true, required: false
  private _scanAll?: boolean | cdktf.IResolvable; 
  public get scanAll() {
    return this.getBooleanAttribute('scan_all');
  }
  public set scanAll(value: boolean | cdktf.IResolvable) {
    this._scanAll = value;
  }
  public resetScanAll() {
    this._scanAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanAllInput() {
    return this._scanAll;
  }

  // scan_rate - computed: false, optional: true, required: false
  private _scanRate?: number; 
  public get scanRate() {
    return this.getNumberAttribute('scan_rate');
  }
  public set scanRate(value: number) {
    this._scanRate = value;
  }
  public resetScanRate() {
    this._scanRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanRateInput() {
    return this._scanRate;
  }
}

export class GlueCrawlerDynamodbTargetList extends cdktf.ComplexList {
  public internalValue? : GlueCrawlerDynamodbTarget[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GlueCrawlerDynamodbTargetOutputReference {
    return new GlueCrawlerDynamodbTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCrawlerHudiTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}
  */
  readonly maximumTraversalDepth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#paths GlueCrawler#paths}
  */
  readonly paths: string[];
}

export function glueCrawlerHudiTargetToTerraform(struct?: GlueCrawlerHudiTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    exclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusions),
    maximum_traversal_depth: cdktf.numberToTerraform(struct!.maximumTraversalDepth),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function glueCrawlerHudiTargetToHclTerraform(struct?: GlueCrawlerHudiTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_traversal_depth: {
      value: cdktf.numberToHclTerraform(struct!.maximumTraversalDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerHudiTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GlueCrawlerHudiTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._maximumTraversalDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumTraversalDepth = this._maximumTraversalDepth;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerHudiTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._exclusions = undefined;
      this._maximumTraversalDepth = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._exclusions = value.exclusions;
      this._maximumTraversalDepth = value.maximumTraversalDepth;
      this._paths = value.paths;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // maximum_traversal_depth - computed: false, optional: false, required: true
  private _maximumTraversalDepth?: number; 
  public get maximumTraversalDepth() {
    return this.getNumberAttribute('maximum_traversal_depth');
  }
  public set maximumTraversalDepth(value: number) {
    this._maximumTraversalDepth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTraversalDepthInput() {
    return this._maximumTraversalDepth;
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}

export class GlueCrawlerHudiTargetList extends cdktf.ComplexList {
  public internalValue? : GlueCrawlerHudiTarget[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GlueCrawlerHudiTargetOutputReference {
    return new GlueCrawlerHudiTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCrawlerIcebergTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}
  */
  readonly maximumTraversalDepth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#paths GlueCrawler#paths}
  */
  readonly paths: string[];
}

export function glueCrawlerIcebergTargetToTerraform(struct?: GlueCrawlerIcebergTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    exclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusions),
    maximum_traversal_depth: cdktf.numberToTerraform(struct!.maximumTraversalDepth),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function glueCrawlerIcebergTargetToHclTerraform(struct?: GlueCrawlerIcebergTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_traversal_depth: {
      value: cdktf.numberToHclTerraform(struct!.maximumTraversalDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerIcebergTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GlueCrawlerIcebergTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._maximumTraversalDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumTraversalDepth = this._maximumTraversalDepth;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerIcebergTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._exclusions = undefined;
      this._maximumTraversalDepth = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._exclusions = value.exclusions;
      this._maximumTraversalDepth = value.maximumTraversalDepth;
      this._paths = value.paths;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // maximum_traversal_depth - computed: false, optional: false, required: true
  private _maximumTraversalDepth?: number; 
  public get maximumTraversalDepth() {
    return this.getNumberAttribute('maximum_traversal_depth');
  }
  public set maximumTraversalDepth(value: number) {
    this._maximumTraversalDepth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTraversalDepthInput() {
    return this._maximumTraversalDepth;
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}

export class GlueCrawlerIcebergTargetList extends cdktf.ComplexList {
  public internalValue? : GlueCrawlerIcebergTarget[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GlueCrawlerIcebergTargetOutputReference {
    return new GlueCrawlerIcebergTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCrawlerJdbcTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
  */
  readonly connectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}
  */
  readonly enableAdditionalMetadata?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#path GlueCrawler#path}
  */
  readonly path: string;
}

export function glueCrawlerJdbcTargetToTerraform(struct?: GlueCrawlerJdbcTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    enable_additional_metadata: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableAdditionalMetadata),
    exclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusions),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function glueCrawlerJdbcTargetToHclTerraform(struct?: GlueCrawlerJdbcTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_additional_metadata: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enableAdditionalMetadata),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclusions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerJdbcTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GlueCrawlerJdbcTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._enableAdditionalMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAdditionalMetadata = this._enableAdditionalMetadata;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerJdbcTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._enableAdditionalMetadata = undefined;
      this._exclusions = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._enableAdditionalMetadata = value.enableAdditionalMetadata;
      this._exclusions = value.exclusions;
      this._path = value.path;
    }
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // enable_additional_metadata - computed: false, optional: true, required: false
  private _enableAdditionalMetadata?: string[]; 
  public get enableAdditionalMetadata() {
    return this.getListAttribute('enable_additional_metadata');
  }
  public set enableAdditionalMetadata(value: string[]) {
    this._enableAdditionalMetadata = value;
  }
  public resetEnableAdditionalMetadata() {
    this._enableAdditionalMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdditionalMetadataInput() {
    return this._enableAdditionalMetadata;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GlueCrawlerJdbcTargetList extends cdktf.ComplexList {
  public internalValue? : GlueCrawlerJdbcTarget[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GlueCrawlerJdbcTargetOutputReference {
    return new GlueCrawlerJdbcTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCrawlerLakeFormationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#account_id GlueCrawler#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}
  */
  readonly useLakeFormationCredentials?: boolean | cdktf.IResolvable;
}

export function glueCrawlerLakeFormationConfigurationToTerraform(struct?: GlueCrawlerLakeFormationConfigurationOutputReference | GlueCrawlerLakeFormationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    use_lake_formation_credentials: cdktf.booleanToTerraform(struct!.useLakeFormationCredentials),
  }
}


export function glueCrawlerLakeFormationConfigurationToHclTerraform(struct?: GlueCrawlerLakeFormationConfigurationOutputReference | GlueCrawlerLakeFormationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_lake_formation_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.useLakeFormationCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerLakeFormationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCrawlerLakeFormationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._useLakeFormationCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLakeFormationCredentials = this._useLakeFormationCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerLakeFormationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._useLakeFormationCredentials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._useLakeFormationCredentials = value.useLakeFormationCredentials;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // use_lake_formation_credentials - computed: false, optional: true, required: false
  private _useLakeFormationCredentials?: boolean | cdktf.IResolvable; 
  public get useLakeFormationCredentials() {
    return this.getBooleanAttribute('use_lake_formation_credentials');
  }
  public set useLakeFormationCredentials(value: boolean | cdktf.IResolvable) {
    this._useLakeFormationCredentials = value;
  }
  public resetUseLakeFormationCredentials() {
    this._useLakeFormationCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLakeFormationCredentialsInput() {
    return this._useLakeFormationCredentials;
  }
}
export interface GlueCrawlerLineageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}
  */
  readonly crawlerLineageSettings?: string;
}

export function glueCrawlerLineageConfigurationToTerraform(struct?: GlueCrawlerLineageConfigurationOutputReference | GlueCrawlerLineageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crawler_lineage_settings: cdktf.stringToTerraform(struct!.crawlerLineageSettings),
  }
}


export function glueCrawlerLineageConfigurationToHclTerraform(struct?: GlueCrawlerLineageConfigurationOutputReference | GlueCrawlerLineageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crawler_lineage_settings: {
      value: cdktf.stringToHclTerraform(struct!.crawlerLineageSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerLineageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCrawlerLineageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerLineageSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerLineageSettings = this._crawlerLineageSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerLineageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crawlerLineageSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crawlerLineageSettings = value.crawlerLineageSettings;
    }
  }

  // crawler_lineage_settings - computed: false, optional: true, required: false
  private _crawlerLineageSettings?: string; 
  public get crawlerLineageSettings() {
    return this.getStringAttribute('crawler_lineage_settings');
  }
  public set crawlerLineageSettings(value: string) {
    this._crawlerLineageSettings = value;
  }
  public resetCrawlerLineageSettings() {
    this._crawlerLineageSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerLineageSettingsInput() {
    return this._crawlerLineageSettings;
  }
}
export interface GlueCrawlerMongodbTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
  */
  readonly connectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#path GlueCrawler#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}
  */
  readonly scanAll?: boolean | cdktf.IResolvable;
}

export function glueCrawlerMongodbTargetToTerraform(struct?: GlueCrawlerMongodbTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    path: cdktf.stringToTerraform(struct!.path),
    scan_all: cdktf.booleanToTerraform(struct!.scanAll),
  }
}


export function glueCrawlerMongodbTargetToHclTerraform(struct?: GlueCrawlerMongodbTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_all: {
      value: cdktf.booleanToHclTerraform(struct!.scanAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerMongodbTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GlueCrawlerMongodbTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._scanAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanAll = this._scanAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerMongodbTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._path = undefined;
      this._scanAll = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._path = value.path;
      this._scanAll = value.scanAll;
    }
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // scan_all - computed: false, optional: true, required: false
  private _scanAll?: boolean | cdktf.IResolvable; 
  public get scanAll() {
    return this.getBooleanAttribute('scan_all');
  }
  public set scanAll(value: boolean | cdktf.IResolvable) {
    this._scanAll = value;
  }
  public resetScanAll() {
    this._scanAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanAllInput() {
    return this._scanAll;
  }
}

export class GlueCrawlerMongodbTargetList extends cdktf.ComplexList {
  public internalValue? : GlueCrawlerMongodbTarget[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GlueCrawlerMongodbTargetOutputReference {
    return new GlueCrawlerMongodbTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCrawlerRecrawlPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}
  */
  readonly recrawlBehavior?: string;
}

export function glueCrawlerRecrawlPolicyToTerraform(struct?: GlueCrawlerRecrawlPolicyOutputReference | GlueCrawlerRecrawlPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recrawl_behavior: cdktf.stringToTerraform(struct!.recrawlBehavior),
  }
}


export function glueCrawlerRecrawlPolicyToHclTerraform(struct?: GlueCrawlerRecrawlPolicyOutputReference | GlueCrawlerRecrawlPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recrawl_behavior: {
      value: cdktf.stringToHclTerraform(struct!.recrawlBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerRecrawlPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCrawlerRecrawlPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recrawlBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.recrawlBehavior = this._recrawlBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerRecrawlPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recrawlBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recrawlBehavior = value.recrawlBehavior;
    }
  }

  // recrawl_behavior - computed: false, optional: true, required: false
  private _recrawlBehavior?: string; 
  public get recrawlBehavior() {
    return this.getStringAttribute('recrawl_behavior');
  }
  public set recrawlBehavior(value: string) {
    this._recrawlBehavior = value;
  }
  public resetRecrawlBehavior() {
    this._recrawlBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recrawlBehaviorInput() {
    return this._recrawlBehavior;
  }
}
export interface GlueCrawlerS3Target {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}
  */
  readonly dlqEventQueueArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}
  */
  readonly eventQueueArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#path GlueCrawler#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#sample_size GlueCrawler#sample_size}
  */
  readonly sampleSize?: number;
}

export function glueCrawlerS3TargetToTerraform(struct?: GlueCrawlerS3Target | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    dlq_event_queue_arn: cdktf.stringToTerraform(struct!.dlqEventQueueArn),
    event_queue_arn: cdktf.stringToTerraform(struct!.eventQueueArn),
    exclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusions),
    path: cdktf.stringToTerraform(struct!.path),
    sample_size: cdktf.numberToTerraform(struct!.sampleSize),
  }
}


export function glueCrawlerS3TargetToHclTerraform(struct?: GlueCrawlerS3Target | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlq_event_queue_arn: {
      value: cdktf.stringToHclTerraform(struct!.dlqEventQueueArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_queue_arn: {
      value: cdktf.stringToHclTerraform(struct!.eventQueueArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_size: {
      value: cdktf.numberToHclTerraform(struct!.sampleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerS3TargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GlueCrawlerS3Target | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._dlqEventQueueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlqEventQueueArn = this._dlqEventQueueArn;
    }
    if (this._eventQueueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventQueueArn = this._eventQueueArn;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sampleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleSize = this._sampleSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerS3Target | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._dlqEventQueueArn = undefined;
      this._eventQueueArn = undefined;
      this._exclusions = undefined;
      this._path = undefined;
      this._sampleSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._dlqEventQueueArn = value.dlqEventQueueArn;
      this._eventQueueArn = value.eventQueueArn;
      this._exclusions = value.exclusions;
      this._path = value.path;
      this._sampleSize = value.sampleSize;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // dlq_event_queue_arn - computed: false, optional: true, required: false
  private _dlqEventQueueArn?: string; 
  public get dlqEventQueueArn() {
    return this.getStringAttribute('dlq_event_queue_arn');
  }
  public set dlqEventQueueArn(value: string) {
    this._dlqEventQueueArn = value;
  }
  public resetDlqEventQueueArn() {
    this._dlqEventQueueArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlqEventQueueArnInput() {
    return this._dlqEventQueueArn;
  }

  // event_queue_arn - computed: false, optional: true, required: false
  private _eventQueueArn?: string; 
  public get eventQueueArn() {
    return this.getStringAttribute('event_queue_arn');
  }
  public set eventQueueArn(value: string) {
    this._eventQueueArn = value;
  }
  public resetEventQueueArn() {
    this._eventQueueArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventQueueArnInput() {
    return this._eventQueueArn;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // sample_size - computed: false, optional: true, required: false
  private _sampleSize?: number; 
  public get sampleSize() {
    return this.getNumberAttribute('sample_size');
  }
  public set sampleSize(value: number) {
    this._sampleSize = value;
  }
  public resetSampleSize() {
    this._sampleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSizeInput() {
    return this._sampleSize;
  }
}

export class GlueCrawlerS3TargetList extends cdktf.ComplexList {
  public internalValue? : GlueCrawlerS3Target[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GlueCrawlerS3TargetOutputReference {
    return new GlueCrawlerS3TargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCrawlerSchemaChangePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#delete_behavior GlueCrawler#delete_behavior}
  */
  readonly deleteBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#update_behavior GlueCrawler#update_behavior}
  */
  readonly updateBehavior?: string;
}

export function glueCrawlerSchemaChangePolicyToTerraform(struct?: GlueCrawlerSchemaChangePolicyOutputReference | GlueCrawlerSchemaChangePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_behavior: cdktf.stringToTerraform(struct!.deleteBehavior),
    update_behavior: cdktf.stringToTerraform(struct!.updateBehavior),
  }
}


export function glueCrawlerSchemaChangePolicyToHclTerraform(struct?: GlueCrawlerSchemaChangePolicyOutputReference | GlueCrawlerSchemaChangePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_behavior: {
      value: cdktf.stringToHclTerraform(struct!.deleteBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_behavior: {
      value: cdktf.stringToHclTerraform(struct!.updateBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCrawlerSchemaChangePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCrawlerSchemaChangePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteBehavior = this._deleteBehavior;
    }
    if (this._updateBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateBehavior = this._updateBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCrawlerSchemaChangePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteBehavior = undefined;
      this._updateBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteBehavior = value.deleteBehavior;
      this._updateBehavior = value.updateBehavior;
    }
  }

  // delete_behavior - computed: false, optional: true, required: false
  private _deleteBehavior?: string; 
  public get deleteBehavior() {
    return this.getStringAttribute('delete_behavior');
  }
  public set deleteBehavior(value: string) {
    this._deleteBehavior = value;
  }
  public resetDeleteBehavior() {
    this._deleteBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBehaviorInput() {
    return this._deleteBehavior;
  }

  // update_behavior - computed: false, optional: true, required: false
  private _updateBehavior?: string; 
  public get updateBehavior() {
    return this.getStringAttribute('update_behavior');
  }
  public set updateBehavior(value: string) {
    this._updateBehavior = value;
  }
  public resetUpdateBehavior() {
    this._updateBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateBehaviorInput() {
    return this._updateBehavior;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler aws_glue_crawler}
*/
export class GlueCrawler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_crawler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlueCrawler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueCrawler to import
  * @param importFromId The id of the existing GlueCrawler that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueCrawler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_crawler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_crawler aws_glue_crawler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueCrawlerConfig
  */
  public constructor(scope: Construct, id: string, config: GlueCrawlerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_crawler',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
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
    this._classifiers = config.classifiers;
    this._configuration = config.configuration;
    this._databaseName = config.databaseName;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._role = config.role;
    this._schedule = config.schedule;
    this._securityConfiguration = config.securityConfiguration;
    this._tablePrefix = config.tablePrefix;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._catalogTarget.internalValue = config.catalogTarget;
    this._deltaTarget.internalValue = config.deltaTarget;
    this._dynamodbTarget.internalValue = config.dynamodbTarget;
    this._hudiTarget.internalValue = config.hudiTarget;
    this._icebergTarget.internalValue = config.icebergTarget;
    this._jdbcTarget.internalValue = config.jdbcTarget;
    this._lakeFormationConfiguration.internalValue = config.lakeFormationConfiguration;
    this._lineageConfiguration.internalValue = config.lineageConfiguration;
    this._mongodbTarget.internalValue = config.mongodbTarget;
    this._recrawlPolicy.internalValue = config.recrawlPolicy;
    this._s3Target.internalValue = config.s3Target;
    this._schemaChangePolicy.internalValue = config.schemaChangePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // classifiers - computed: false, optional: true, required: false
  private _classifiers?: string[]; 
  public get classifiers() {
    return this.getListAttribute('classifiers');
  }
  public set classifiers(value: string[]) {
    this._classifiers = value;
  }
  public resetClassifiers() {
    this._classifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifiersInput() {
    return this._classifiers;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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
    return this._databaseName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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
    return this._name;
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
    return this._role;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string; 
  public get securityConfiguration() {
    return this.getStringAttribute('security_configuration');
  }
  public set securityConfiguration(value: string) {
    this._securityConfiguration = value;
  }
  public resetSecurityConfiguration() {
    this._securityConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigurationInput() {
    return this._securityConfiguration;
  }

  // table_prefix - computed: false, optional: true, required: false
  private _tablePrefix?: string; 
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
  public set tablePrefix(value: string) {
    this._tablePrefix = value;
  }
  public resetTablePrefix() {
    this._tablePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrefixInput() {
    return this._tablePrefix;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // catalog_target - computed: false, optional: true, required: false
  private _catalogTarget = new GlueCrawlerCatalogTargetList(this, "catalog_target", false);
  public get catalogTarget() {
    return this._catalogTarget;
  }
  public putCatalogTarget(value: GlueCrawlerCatalogTarget[] | cdktf.IResolvable) {
    this._catalogTarget.internalValue = value;
  }
  public resetCatalogTarget() {
    this._catalogTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTargetInput() {
    return this._catalogTarget.internalValue;
  }

  // delta_target - computed: false, optional: true, required: false
  private _deltaTarget = new GlueCrawlerDeltaTargetList(this, "delta_target", false);
  public get deltaTarget() {
    return this._deltaTarget;
  }
  public putDeltaTarget(value: GlueCrawlerDeltaTarget[] | cdktf.IResolvable) {
    this._deltaTarget.internalValue = value;
  }
  public resetDeltaTarget() {
    this._deltaTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTargetInput() {
    return this._deltaTarget.internalValue;
  }

  // dynamodb_target - computed: false, optional: true, required: false
  private _dynamodbTarget = new GlueCrawlerDynamodbTargetList(this, "dynamodb_target", false);
  public get dynamodbTarget() {
    return this._dynamodbTarget;
  }
  public putDynamodbTarget(value: GlueCrawlerDynamodbTarget[] | cdktf.IResolvable) {
    this._dynamodbTarget.internalValue = value;
  }
  public resetDynamodbTarget() {
    this._dynamodbTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbTargetInput() {
    return this._dynamodbTarget.internalValue;
  }

  // hudi_target - computed: false, optional: true, required: false
  private _hudiTarget = new GlueCrawlerHudiTargetList(this, "hudi_target", false);
  public get hudiTarget() {
    return this._hudiTarget;
  }
  public putHudiTarget(value: GlueCrawlerHudiTarget[] | cdktf.IResolvable) {
    this._hudiTarget.internalValue = value;
  }
  public resetHudiTarget() {
    this._hudiTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hudiTargetInput() {
    return this._hudiTarget.internalValue;
  }

  // iceberg_target - computed: false, optional: true, required: false
  private _icebergTarget = new GlueCrawlerIcebergTargetList(this, "iceberg_target", false);
  public get icebergTarget() {
    return this._icebergTarget;
  }
  public putIcebergTarget(value: GlueCrawlerIcebergTarget[] | cdktf.IResolvable) {
    this._icebergTarget.internalValue = value;
  }
  public resetIcebergTarget() {
    this._icebergTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergTargetInput() {
    return this._icebergTarget.internalValue;
  }

  // jdbc_target - computed: false, optional: true, required: false
  private _jdbcTarget = new GlueCrawlerJdbcTargetList(this, "jdbc_target", false);
  public get jdbcTarget() {
    return this._jdbcTarget;
  }
  public putJdbcTarget(value: GlueCrawlerJdbcTarget[] | cdktf.IResolvable) {
    this._jdbcTarget.internalValue = value;
  }
  public resetJdbcTarget() {
    this._jdbcTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcTargetInput() {
    return this._jdbcTarget.internalValue;
  }

  // lake_formation_configuration - computed: false, optional: true, required: false
  private _lakeFormationConfiguration = new GlueCrawlerLakeFormationConfigurationOutputReference(this, "lake_formation_configuration");
  public get lakeFormationConfiguration() {
    return this._lakeFormationConfiguration;
  }
  public putLakeFormationConfiguration(value: GlueCrawlerLakeFormationConfiguration) {
    this._lakeFormationConfiguration.internalValue = value;
  }
  public resetLakeFormationConfiguration() {
    this._lakeFormationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeFormationConfigurationInput() {
    return this._lakeFormationConfiguration.internalValue;
  }

  // lineage_configuration - computed: false, optional: true, required: false
  private _lineageConfiguration = new GlueCrawlerLineageConfigurationOutputReference(this, "lineage_configuration");
  public get lineageConfiguration() {
    return this._lineageConfiguration;
  }
  public putLineageConfiguration(value: GlueCrawlerLineageConfiguration) {
    this._lineageConfiguration.internalValue = value;
  }
  public resetLineageConfiguration() {
    this._lineageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineageConfigurationInput() {
    return this._lineageConfiguration.internalValue;
  }

  // mongodb_target - computed: false, optional: true, required: false
  private _mongodbTarget = new GlueCrawlerMongodbTargetList(this, "mongodb_target", false);
  public get mongodbTarget() {
    return this._mongodbTarget;
  }
  public putMongodbTarget(value: GlueCrawlerMongodbTarget[] | cdktf.IResolvable) {
    this._mongodbTarget.internalValue = value;
  }
  public resetMongodbTarget() {
    this._mongodbTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbTargetInput() {
    return this._mongodbTarget.internalValue;
  }

  // recrawl_policy - computed: false, optional: true, required: false
  private _recrawlPolicy = new GlueCrawlerRecrawlPolicyOutputReference(this, "recrawl_policy");
  public get recrawlPolicy() {
    return this._recrawlPolicy;
  }
  public putRecrawlPolicy(value: GlueCrawlerRecrawlPolicy) {
    this._recrawlPolicy.internalValue = value;
  }
  public resetRecrawlPolicy() {
    this._recrawlPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recrawlPolicyInput() {
    return this._recrawlPolicy.internalValue;
  }

  // s3_target - computed: false, optional: true, required: false
  private _s3Target = new GlueCrawlerS3TargetList(this, "s3_target", false);
  public get s3Target() {
    return this._s3Target;
  }
  public putS3Target(value: GlueCrawlerS3Target[] | cdktf.IResolvable) {
    this._s3Target.internalValue = value;
  }
  public resetS3Target() {
    this._s3Target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3TargetInput() {
    return this._s3Target.internalValue;
  }

  // schema_change_policy - computed: false, optional: true, required: false
  private _schemaChangePolicy = new GlueCrawlerSchemaChangePolicyOutputReference(this, "schema_change_policy");
  public get schemaChangePolicy() {
    return this._schemaChangePolicy;
  }
  public putSchemaChangePolicy(value: GlueCrawlerSchemaChangePolicy) {
    this._schemaChangePolicy.internalValue = value;
  }
  public resetSchemaChangePolicy() {
    this._schemaChangePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaChangePolicyInput() {
    return this._schemaChangePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      classifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._classifiers),
      configuration: cdktf.stringToTerraform(this._configuration),
      database_name: cdktf.stringToTerraform(this._databaseName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      schedule: cdktf.stringToTerraform(this._schedule),
      security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
      table_prefix: cdktf.stringToTerraform(this._tablePrefix),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      catalog_target: cdktf.listMapper(glueCrawlerCatalogTargetToTerraform, true)(this._catalogTarget.internalValue),
      delta_target: cdktf.listMapper(glueCrawlerDeltaTargetToTerraform, true)(this._deltaTarget.internalValue),
      dynamodb_target: cdktf.listMapper(glueCrawlerDynamodbTargetToTerraform, true)(this._dynamodbTarget.internalValue),
      hudi_target: cdktf.listMapper(glueCrawlerHudiTargetToTerraform, true)(this._hudiTarget.internalValue),
      iceberg_target: cdktf.listMapper(glueCrawlerIcebergTargetToTerraform, true)(this._icebergTarget.internalValue),
      jdbc_target: cdktf.listMapper(glueCrawlerJdbcTargetToTerraform, true)(this._jdbcTarget.internalValue),
      lake_formation_configuration: glueCrawlerLakeFormationConfigurationToTerraform(this._lakeFormationConfiguration.internalValue),
      lineage_configuration: glueCrawlerLineageConfigurationToTerraform(this._lineageConfiguration.internalValue),
      mongodb_target: cdktf.listMapper(glueCrawlerMongodbTargetToTerraform, true)(this._mongodbTarget.internalValue),
      recrawl_policy: glueCrawlerRecrawlPolicyToTerraform(this._recrawlPolicy.internalValue),
      s3_target: cdktf.listMapper(glueCrawlerS3TargetToTerraform, true)(this._s3Target.internalValue),
      schema_change_policy: glueCrawlerSchemaChangePolicyToTerraform(this._schemaChangePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      classifiers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._classifiers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_configuration: {
        value: cdktf.stringToHclTerraform(this._securityConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_prefix: {
        value: cdktf.stringToHclTerraform(this._tablePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      catalog_target: {
        value: cdktf.listMapperHcl(glueCrawlerCatalogTargetToHclTerraform, true)(this._catalogTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerCatalogTargetList",
      },
      delta_target: {
        value: cdktf.listMapperHcl(glueCrawlerDeltaTargetToHclTerraform, true)(this._deltaTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerDeltaTargetList",
      },
      dynamodb_target: {
        value: cdktf.listMapperHcl(glueCrawlerDynamodbTargetToHclTerraform, true)(this._dynamodbTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerDynamodbTargetList",
      },
      hudi_target: {
        value: cdktf.listMapperHcl(glueCrawlerHudiTargetToHclTerraform, true)(this._hudiTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerHudiTargetList",
      },
      iceberg_target: {
        value: cdktf.listMapperHcl(glueCrawlerIcebergTargetToHclTerraform, true)(this._icebergTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerIcebergTargetList",
      },
      jdbc_target: {
        value: cdktf.listMapperHcl(glueCrawlerJdbcTargetToHclTerraform, true)(this._jdbcTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerJdbcTargetList",
      },
      lake_formation_configuration: {
        value: glueCrawlerLakeFormationConfigurationToHclTerraform(this._lakeFormationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerLakeFormationConfigurationList",
      },
      lineage_configuration: {
        value: glueCrawlerLineageConfigurationToHclTerraform(this._lineageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerLineageConfigurationList",
      },
      mongodb_target: {
        value: cdktf.listMapperHcl(glueCrawlerMongodbTargetToHclTerraform, true)(this._mongodbTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerMongodbTargetList",
      },
      recrawl_policy: {
        value: glueCrawlerRecrawlPolicyToHclTerraform(this._recrawlPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerRecrawlPolicyList",
      },
      s3_target: {
        value: cdktf.listMapperHcl(glueCrawlerS3TargetToHclTerraform, true)(this._s3Target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerS3TargetList",
      },
      schema_change_policy: {
        value: glueCrawlerSchemaChangePolicyToHclTerraform(this._schemaChangePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCrawlerSchemaChangePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
