// https://www.terraform.io/docs/providers/aws/r/glue_crawler.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#tags_all GlueCrawler#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
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
  readonly lineageConfiguration?: GlueCrawlerLineageConfiguration[];
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
  readonly recrawlPolicy?: GlueCrawlerRecrawlPolicy[];
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
  readonly schemaChangePolicy?: GlueCrawlerSchemaChangePolicy[];
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
  readonly scanAll?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#scan_rate GlueCrawler#scan_rate}
  */
  readonly scanRate?: number;
}

function glueCrawlerDynamodbTargetToTerraform(struct?: GlueCrawlerDynamodbTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function glueCrawlerLineageConfigurationToTerraform(struct?: GlueCrawlerLineageConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crawler_lineage_settings: cdktf.stringToTerraform(struct!.crawlerLineageSettings),
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
  readonly scanAll?: boolean;
}

function glueCrawlerMongodbTargetToTerraform(struct?: GlueCrawlerMongodbTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function glueCrawlerRecrawlPolicyToTerraform(struct?: GlueCrawlerRecrawlPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    recrawl_behavior: cdktf.stringToTerraform(struct!.recrawlBehavior),
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

function glueCrawlerSchemaChangePolicyToTerraform(struct?: GlueCrawlerSchemaChangePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_behavior: cdktf.stringToTerraform(struct!.deleteBehavior),
    update_behavior: cdktf.stringToTerraform(struct!.updateBehavior),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html aws_glue_crawler}
*/
export class GlueCrawler extends cdktf.TerraformResource {

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
  private _classifiers?: string[];
  public get classifiers() {
    return this.getListAttribute('classifiers');
  }
  public set classifiers(value: string[] ) {
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
  private _configuration?: string;
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string ) {
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

  // role - computed: false, optional: false, required: true
  private _role: string;
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
  private _schedule?: string;
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string ) {
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
  private _securityConfiguration?: string;
  public get securityConfiguration() {
    return this.getStringAttribute('security_configuration');
  }
  public set securityConfiguration(value: string ) {
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
  private _tablePrefix?: string;
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
  public set tablePrefix(value: string ) {
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
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
  private _catalogTarget?: GlueCrawlerCatalogTarget[];
  public get catalogTarget() {
    return this.interpolationForAttribute('catalog_target') as any;
  }
  public set catalogTarget(value: GlueCrawlerCatalogTarget[] ) {
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
  private _dynamodbTarget?: GlueCrawlerDynamodbTarget[];
  public get dynamodbTarget() {
    return this.interpolationForAttribute('dynamodb_target') as any;
  }
  public set dynamodbTarget(value: GlueCrawlerDynamodbTarget[] ) {
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
  private _jdbcTarget?: GlueCrawlerJdbcTarget[];
  public get jdbcTarget() {
    return this.interpolationForAttribute('jdbc_target') as any;
  }
  public set jdbcTarget(value: GlueCrawlerJdbcTarget[] ) {
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
  private _lineageConfiguration?: GlueCrawlerLineageConfiguration[];
  public get lineageConfiguration() {
    return this.interpolationForAttribute('lineage_configuration') as any;
  }
  public set lineageConfiguration(value: GlueCrawlerLineageConfiguration[] ) {
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
  private _mongodbTarget?: GlueCrawlerMongodbTarget[];
  public get mongodbTarget() {
    return this.interpolationForAttribute('mongodb_target') as any;
  }
  public set mongodbTarget(value: GlueCrawlerMongodbTarget[] ) {
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
  private _recrawlPolicy?: GlueCrawlerRecrawlPolicy[];
  public get recrawlPolicy() {
    return this.interpolationForAttribute('recrawl_policy') as any;
  }
  public set recrawlPolicy(value: GlueCrawlerRecrawlPolicy[] ) {
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
  private _s3Target?: GlueCrawlerS3Target[];
  public get s3Target() {
    return this.interpolationForAttribute('s3_target') as any;
  }
  public set s3Target(value: GlueCrawlerS3Target[] ) {
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
  private _schemaChangePolicy?: GlueCrawlerSchemaChangePolicy[];
  public get schemaChangePolicy() {
    return this.interpolationForAttribute('schema_change_policy') as any;
  }
  public set schemaChangePolicy(value: GlueCrawlerSchemaChangePolicy[] ) {
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
      lineage_configuration: cdktf.listMapper(glueCrawlerLineageConfigurationToTerraform)(this._lineageConfiguration),
      mongodb_target: cdktf.listMapper(glueCrawlerMongodbTargetToTerraform)(this._mongodbTarget),
      recrawl_policy: cdktf.listMapper(glueCrawlerRecrawlPolicyToTerraform)(this._recrawlPolicy),
      s3_target: cdktf.listMapper(glueCrawlerS3TargetToTerraform)(this._s3Target),
      schema_change_policy: cdktf.listMapper(glueCrawlerSchemaChangePolicyToTerraform)(this._schemaChangePolicy),
    };
  }
}
