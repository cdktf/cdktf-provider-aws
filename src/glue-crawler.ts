// https://www.terraform.io/docs/providers/aws/r/glue_crawler.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueCrawlerConfig extends cdktf.TerraformMetaArguments {
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

function glueCrawlerCatalogTargetToTerraform(struct?: GlueCrawlerCatalogTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    tables: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tables),
  }
}

export interface GlueCrawlerDynamodbTarget {
  readonly path: string;
}

function glueCrawlerDynamodbTargetToTerraform(struct?: GlueCrawlerDynamodbTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface GlueCrawlerJdbcTarget {
  readonly connectionName: string;
  readonly exclusions?: string[];
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

export interface GlueCrawlerS3Target {
  readonly exclusions?: string[];
  readonly path: string;
}

function glueCrawlerS3TargetToTerraform(struct?: GlueCrawlerS3Target): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exclusions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusions),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface GlueCrawlerSchemaChangePolicy {
  readonly deleteBehavior?: string;
  readonly updateBehavior?: string;
}

function glueCrawlerSchemaChangePolicyToTerraform(struct?: GlueCrawlerSchemaChangePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_behavior: cdktf.stringToTerraform(struct!.deleteBehavior),
    update_behavior: cdktf.stringToTerraform(struct!.updateBehavior),
  }
}


// Resource

export class GlueCrawler extends cdktf.TerraformResource {

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
      catalog_target: cdktf.listMapper(glueCrawlerCatalogTargetToTerraform)(this._catalogTarget),
      dynamodb_target: cdktf.listMapper(glueCrawlerDynamodbTargetToTerraform)(this._dynamodbTarget),
      jdbc_target: cdktf.listMapper(glueCrawlerJdbcTargetToTerraform)(this._jdbcTarget),
      s3_target: cdktf.listMapper(glueCrawlerS3TargetToTerraform)(this._s3Target),
      schema_change_policy: cdktf.listMapper(glueCrawlerSchemaChangePolicyToTerraform)(this._schemaChangePolicy),
    };
  }
}
