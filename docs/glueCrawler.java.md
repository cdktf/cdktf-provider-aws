# `glueCrawler` Submodule <a name="`glueCrawler` Submodule" id="@cdktf/provider-aws.glueCrawler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCrawler <a name="GlueCrawler" id="@cdktf/provider-aws.glueCrawler.GlueCrawler"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler aws_glue_crawler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawler;

GlueCrawler.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .databaseName(java.lang.String)
    .name(java.lang.String)
    .role(java.lang.String)
//  .catalogTarget(IResolvable)
//  .catalogTarget(java.util.List<GlueCrawlerCatalogTarget>)
//  .classifiers(java.util.List<java.lang.String>)
//  .configuration(java.lang.String)
//  .deltaTarget(IResolvable)
//  .deltaTarget(java.util.List<GlueCrawlerDeltaTarget>)
//  .description(java.lang.String)
//  .dynamodbTarget(IResolvable)
//  .dynamodbTarget(java.util.List<GlueCrawlerDynamodbTarget>)
//  .id(java.lang.String)
//  .jdbcTarget(IResolvable)
//  .jdbcTarget(java.util.List<GlueCrawlerJdbcTarget>)
//  .lakeFormationConfiguration(GlueCrawlerLakeFormationConfiguration)
//  .lineageConfiguration(GlueCrawlerLineageConfiguration)
//  .mongodbTarget(IResolvable)
//  .mongodbTarget(java.util.List<GlueCrawlerMongodbTarget>)
//  .recrawlPolicy(GlueCrawlerRecrawlPolicy)
//  .s3Target(IResolvable)
//  .s3Target(java.util.List<GlueCrawlerS3Target>)
//  .schedule(java.lang.String)
//  .schemaChangePolicy(GlueCrawlerSchemaChangePolicy)
//  .securityConfiguration(java.lang.String)
//  .tablePrefix(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.catalogTarget">catalogTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>></code> | catalog_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.classifiers">classifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.configuration">configuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.deltaTarget">deltaTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>></code> | delta_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.dynamodbTarget">dynamodbTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>></code> | dynamodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.jdbcTarget">jdbcTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>></code> | jdbc_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lakeFormationConfiguration">lakeFormationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | lake_formation_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lineageConfiguration">lineageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | lineage_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.mongodbTarget">mongodbTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>></code> | mongodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.recrawlPolicy">recrawlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | recrawl_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.s3Target">s3Target</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>></code> | s3_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.schemaChangePolicy">schemaChangePolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | schema_change_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}.

---

##### `catalogTarget`<sup>Optional</sup> <a name="catalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.catalogTarget"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>>

catalog_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#catalog_target GlueCrawler#catalog_target}

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.classifiers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.configuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}.

---

##### `deltaTarget`<sup>Optional</sup> <a name="deltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.deltaTarget"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>>

delta_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_target GlueCrawler#delta_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}.

---

##### `dynamodbTarget`<sup>Optional</sup> <a name="dynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.dynamodbTarget"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>>

dynamodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dynamodb_target GlueCrawler#dynamodb_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jdbcTarget`<sup>Optional</sup> <a name="jdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.jdbcTarget"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>>

jdbc_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#jdbc_target GlueCrawler#jdbc_target}

---

##### `lakeFormationConfiguration`<sup>Optional</sup> <a name="lakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lakeFormationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

lake_formation_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `lineageConfiguration`<sup>Optional</sup> <a name="lineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lineageConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

lineage_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lineage_configuration GlueCrawler#lineage_configuration}

---

##### `mongodbTarget`<sup>Optional</sup> <a name="mongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.mongodbTarget"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>>

mongodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#mongodb_target GlueCrawler#mongodb_target}

---

##### `recrawlPolicy`<sup>Optional</sup> <a name="recrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.recrawlPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

recrawl_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `s3Target`<sup>Optional</sup> <a name="s3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.s3Target"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>>

s3_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#s3_target GlueCrawler#s3_target}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}.

---

##### `schemaChangePolicy`<sup>Optional</sup> <a name="schemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.schemaChangePolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

schema_change_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.securityConfiguration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}.

---

##### `tablePrefix`<sup>Optional</sup> <a name="tablePrefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tablePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget">putCatalogTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget">putDeltaTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget">putDynamodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget">putJdbcTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration">putLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration">putLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget">putMongodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy">putRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target">putS3Target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy">putSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetCatalogTarget">resetCatalogTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetClassifiers">resetClassifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDeltaTarget">resetDeltaTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDynamodbTarget">resetDynamodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetJdbcTarget">resetJdbcTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLakeFormationConfiguration">resetLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLineageConfiguration">resetLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetMongodbTarget">resetMongodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetRecrawlPolicy">resetRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetS3Target">resetS3Target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchemaChangePolicy">resetSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSecurityConfiguration">resetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTablePrefix">resetTablePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCatalogTarget` <a name="putCatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget"></a>

```java
public void putCatalogTarget(IResolvable OR java.util.List<GlueCrawlerCatalogTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>>

---

##### `putDeltaTarget` <a name="putDeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget"></a>

```java
public void putDeltaTarget(IResolvable OR java.util.List<GlueCrawlerDeltaTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>>

---

##### `putDynamodbTarget` <a name="putDynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget"></a>

```java
public void putDynamodbTarget(IResolvable OR java.util.List<GlueCrawlerDynamodbTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>>

---

##### `putJdbcTarget` <a name="putJdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget"></a>

```java
public void putJdbcTarget(IResolvable OR java.util.List<GlueCrawlerJdbcTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>>

---

##### `putLakeFormationConfiguration` <a name="putLakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration"></a>

```java
public void putLakeFormationConfiguration(GlueCrawlerLakeFormationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `putLineageConfiguration` <a name="putLineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration"></a>

```java
public void putLineageConfiguration(GlueCrawlerLineageConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---

##### `putMongodbTarget` <a name="putMongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget"></a>

```java
public void putMongodbTarget(IResolvable OR java.util.List<GlueCrawlerMongodbTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>>

---

##### `putRecrawlPolicy` <a name="putRecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy"></a>

```java
public void putRecrawlPolicy(GlueCrawlerRecrawlPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `putS3Target` <a name="putS3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target"></a>

```java
public void putS3Target(IResolvable OR java.util.List<GlueCrawlerS3Target> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>>

---

##### `putSchemaChangePolicy` <a name="putSchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy"></a>

```java
public void putSchemaChangePolicy(GlueCrawlerSchemaChangePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `resetCatalogTarget` <a name="resetCatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetCatalogTarget"></a>

```java
public void resetCatalogTarget()
```

##### `resetClassifiers` <a name="resetClassifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetClassifiers"></a>

```java
public void resetClassifiers()
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDeltaTarget` <a name="resetDeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDeltaTarget"></a>

```java
public void resetDeltaTarget()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDynamodbTarget` <a name="resetDynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDynamodbTarget"></a>

```java
public void resetDynamodbTarget()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetId"></a>

```java
public void resetId()
```

##### `resetJdbcTarget` <a name="resetJdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetJdbcTarget"></a>

```java
public void resetJdbcTarget()
```

##### `resetLakeFormationConfiguration` <a name="resetLakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLakeFormationConfiguration"></a>

```java
public void resetLakeFormationConfiguration()
```

##### `resetLineageConfiguration` <a name="resetLineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLineageConfiguration"></a>

```java
public void resetLineageConfiguration()
```

##### `resetMongodbTarget` <a name="resetMongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetMongodbTarget"></a>

```java
public void resetMongodbTarget()
```

##### `resetRecrawlPolicy` <a name="resetRecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetRecrawlPolicy"></a>

```java
public void resetRecrawlPolicy()
```

##### `resetS3Target` <a name="resetS3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetS3Target"></a>

```java
public void resetS3Target()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetSchemaChangePolicy` <a name="resetSchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchemaChangePolicy"></a>

```java
public void resetSchemaChangePolicy()
```

##### `resetSecurityConfiguration` <a name="resetSecurityConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSecurityConfiguration"></a>

```java
public void resetSecurityConfiguration()
```

##### `resetTablePrefix` <a name="resetTablePrefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTablePrefix"></a>

```java
public void resetTablePrefix()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawler;

GlueCrawler.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawler;

GlueCrawler.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawler;

GlueCrawler.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTarget">catalogTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList">GlueCrawlerCatalogTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTarget">deltaTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList">GlueCrawlerDeltaTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTarget">dynamodbTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList">GlueCrawlerDynamodbTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTarget">jdbcTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList">GlueCrawlerJdbcTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfiguration">lakeFormationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfiguration">lineageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference">GlueCrawlerLineageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTarget">mongodbTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList">GlueCrawlerMongodbTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicy">recrawlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3Target">s3Target</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList">GlueCrawlerS3TargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicy">schemaChangePolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTargetInput">catalogTargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiersInput">classifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configurationInput">configurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTargetInput">deltaTargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTargetInput">dynamodbTargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTargetInput">jdbcTargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput">lakeFormationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfigurationInput">lineageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTargetInput">mongodbTargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicyInput">recrawlPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3TargetInput">s3TargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicyInput">schemaChangePolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfigurationInput">securityConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefixInput">tablePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiers">classifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `catalogTarget`<sup>Required</sup> <a name="catalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTarget"></a>

```java
public GlueCrawlerCatalogTargetList getCatalogTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList">GlueCrawlerCatalogTargetList</a>

---

##### `deltaTarget`<sup>Required</sup> <a name="deltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTarget"></a>

```java
public GlueCrawlerDeltaTargetList getDeltaTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList">GlueCrawlerDeltaTargetList</a>

---

##### `dynamodbTarget`<sup>Required</sup> <a name="dynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTarget"></a>

```java
public GlueCrawlerDynamodbTargetList getDynamodbTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList">GlueCrawlerDynamodbTargetList</a>

---

##### `jdbcTarget`<sup>Required</sup> <a name="jdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTarget"></a>

```java
public GlueCrawlerJdbcTargetList getJdbcTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList">GlueCrawlerJdbcTargetList</a>

---

##### `lakeFormationConfiguration`<sup>Required</sup> <a name="lakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfiguration"></a>

```java
public GlueCrawlerLakeFormationConfigurationOutputReference getLakeFormationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a>

---

##### `lineageConfiguration`<sup>Required</sup> <a name="lineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfiguration"></a>

```java
public GlueCrawlerLineageConfigurationOutputReference getLineageConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference">GlueCrawlerLineageConfigurationOutputReference</a>

---

##### `mongodbTarget`<sup>Required</sup> <a name="mongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTarget"></a>

```java
public GlueCrawlerMongodbTargetList getMongodbTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList">GlueCrawlerMongodbTargetList</a>

---

##### `recrawlPolicy`<sup>Required</sup> <a name="recrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicy"></a>

```java
public GlueCrawlerRecrawlPolicyOutputReference getRecrawlPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a>

---

##### `s3Target`<sup>Required</sup> <a name="s3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3Target"></a>

```java
public GlueCrawlerS3TargetList getS3Target();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList">GlueCrawlerS3TargetList</a>

---

##### `schemaChangePolicy`<sup>Required</sup> <a name="schemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicy"></a>

```java
public GlueCrawlerSchemaChangePolicyOutputReference getSchemaChangePolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a>

---

##### `catalogTargetInput`<sup>Optional</sup> <a name="catalogTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTargetInput"></a>

```java
public java.lang.Object getCatalogTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>>

---

##### `classifiersInput`<sup>Optional</sup> <a name="classifiersInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiersInput"></a>

```java
public java.util.List<java.lang.String> getClassifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configurationInput"></a>

```java
public java.lang.String getConfigurationInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `deltaTargetInput`<sup>Optional</sup> <a name="deltaTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTargetInput"></a>

```java
public java.lang.Object getDeltaTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dynamodbTargetInput`<sup>Optional</sup> <a name="dynamodbTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTargetInput"></a>

```java
public java.lang.Object getDynamodbTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jdbcTargetInput`<sup>Optional</sup> <a name="jdbcTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTargetInput"></a>

```java
public java.lang.Object getJdbcTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>>

---

##### `lakeFormationConfigurationInput`<sup>Optional</sup> <a name="lakeFormationConfigurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput"></a>

```java
public GlueCrawlerLakeFormationConfiguration getLakeFormationConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `lineageConfigurationInput`<sup>Optional</sup> <a name="lineageConfigurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfigurationInput"></a>

```java
public GlueCrawlerLineageConfiguration getLineageConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---

##### `mongodbTargetInput`<sup>Optional</sup> <a name="mongodbTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTargetInput"></a>

```java
public java.lang.Object getMongodbTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recrawlPolicyInput`<sup>Optional</sup> <a name="recrawlPolicyInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicyInput"></a>

```java
public GlueCrawlerRecrawlPolicy getRecrawlPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `s3TargetInput`<sup>Optional</sup> <a name="s3TargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3TargetInput"></a>

```java
public java.lang.Object getS3TargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `schemaChangePolicyInput`<sup>Optional</sup> <a name="schemaChangePolicyInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicyInput"></a>

```java
public GlueCrawlerSchemaChangePolicy getSchemaChangePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `securityConfigurationInput`<sup>Optional</sup> <a name="securityConfigurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfigurationInput"></a>

```java
public java.lang.String getSecurityConfigurationInput();
```

- *Type:* java.lang.String

---

##### `tablePrefixInput`<sup>Optional</sup> <a name="tablePrefixInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefixInput"></a>

```java
public java.lang.String getTablePrefixInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `classifiers`<sup>Required</sup> <a name="classifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiers"></a>

```java
public java.util.List<java.lang.String> getClassifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `securityConfiguration`<sup>Required</sup> <a name="securityConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfiguration"></a>

```java
public java.lang.String getSecurityConfiguration();
```

- *Type:* java.lang.String

---

##### `tablePrefix`<sup>Required</sup> <a name="tablePrefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefix"></a>

```java
public java.lang.String getTablePrefix();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCrawlerCatalogTarget <a name="GlueCrawlerCatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerCatalogTarget;

GlueCrawlerCatalogTarget.builder()
    .databaseName(java.lang.String)
    .tables(java.util.List<java.lang.String>)
//  .connectionName(java.lang.String)
//  .dlqEventQueueArn(java.lang.String)
//  .eventQueueArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.tables">tables</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tables GlueCrawler#tables}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.dlqEventQueueArn">dlqEventQueueArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.eventQueueArn">eventQueueArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.tables"></a>

```java
public java.util.List<java.lang.String> getTables();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tables GlueCrawler#tables}.

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `dlqEventQueueArn`<sup>Optional</sup> <a name="dlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.dlqEventQueueArn"></a>

```java
public java.lang.String getDlqEventQueueArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}.

---

##### `eventQueueArn`<sup>Optional</sup> <a name="eventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.eventQueueArn"></a>

```java
public java.lang.String getEventQueueArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}.

---

### GlueCrawlerConfig <a name="GlueCrawlerConfig" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerConfig;

GlueCrawlerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .databaseName(java.lang.String)
    .name(java.lang.String)
    .role(java.lang.String)
//  .catalogTarget(IResolvable)
//  .catalogTarget(java.util.List<GlueCrawlerCatalogTarget>)
//  .classifiers(java.util.List<java.lang.String>)
//  .configuration(java.lang.String)
//  .deltaTarget(IResolvable)
//  .deltaTarget(java.util.List<GlueCrawlerDeltaTarget>)
//  .description(java.lang.String)
//  .dynamodbTarget(IResolvable)
//  .dynamodbTarget(java.util.List<GlueCrawlerDynamodbTarget>)
//  .id(java.lang.String)
//  .jdbcTarget(IResolvable)
//  .jdbcTarget(java.util.List<GlueCrawlerJdbcTarget>)
//  .lakeFormationConfiguration(GlueCrawlerLakeFormationConfiguration)
//  .lineageConfiguration(GlueCrawlerLineageConfiguration)
//  .mongodbTarget(IResolvable)
//  .mongodbTarget(java.util.List<GlueCrawlerMongodbTarget>)
//  .recrawlPolicy(GlueCrawlerRecrawlPolicy)
//  .s3Target(IResolvable)
//  .s3Target(java.util.List<GlueCrawlerS3Target>)
//  .schedule(java.lang.String)
//  .schemaChangePolicy(GlueCrawlerSchemaChangePolicy)
//  .securityConfiguration(java.lang.String)
//  .tablePrefix(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.catalogTarget">catalogTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>></code> | catalog_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.classifiers">classifiers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.configuration">configuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.deltaTarget">deltaTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>></code> | delta_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dynamodbTarget">dynamodbTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>></code> | dynamodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.jdbcTarget">jdbcTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>></code> | jdbc_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration">lakeFormationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | lake_formation_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lineageConfiguration">lineageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | lineage_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.mongodbTarget">mongodbTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>></code> | mongodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy">recrawlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | recrawl_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.s3Target">s3Target</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>></code> | s3_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy">schemaChangePolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | schema_change_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}.

---

##### `catalogTarget`<sup>Optional</sup> <a name="catalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.catalogTarget"></a>

```java
public java.lang.Object getCatalogTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>>

catalog_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#catalog_target GlueCrawler#catalog_target}

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.classifiers"></a>

```java
public java.util.List<java.lang.String> getClassifiers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}.

---

##### `deltaTarget`<sup>Optional</sup> <a name="deltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.deltaTarget"></a>

```java
public java.lang.Object getDeltaTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>>

delta_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_target GlueCrawler#delta_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}.

---

##### `dynamodbTarget`<sup>Optional</sup> <a name="dynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dynamodbTarget"></a>

```java
public java.lang.Object getDynamodbTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>>

dynamodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dynamodb_target GlueCrawler#dynamodb_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jdbcTarget`<sup>Optional</sup> <a name="jdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.jdbcTarget"></a>

```java
public java.lang.Object getJdbcTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>>

jdbc_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#jdbc_target GlueCrawler#jdbc_target}

---

##### `lakeFormationConfiguration`<sup>Optional</sup> <a name="lakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration"></a>

```java
public GlueCrawlerLakeFormationConfiguration getLakeFormationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

lake_formation_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `lineageConfiguration`<sup>Optional</sup> <a name="lineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lineageConfiguration"></a>

```java
public GlueCrawlerLineageConfiguration getLineageConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

lineage_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lineage_configuration GlueCrawler#lineage_configuration}

---

##### `mongodbTarget`<sup>Optional</sup> <a name="mongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.mongodbTarget"></a>

```java
public java.lang.Object getMongodbTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>>

mongodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#mongodb_target GlueCrawler#mongodb_target}

---

##### `recrawlPolicy`<sup>Optional</sup> <a name="recrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy"></a>

```java
public GlueCrawlerRecrawlPolicy getRecrawlPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

recrawl_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `s3Target`<sup>Optional</sup> <a name="s3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.s3Target"></a>

```java
public java.lang.Object getS3Target();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>>

s3_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#s3_target GlueCrawler#s3_target}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}.

---

##### `schemaChangePolicy`<sup>Optional</sup> <a name="schemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy"></a>

```java
public GlueCrawlerSchemaChangePolicy getSchemaChangePolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

schema_change_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.securityConfiguration"></a>

```java
public java.lang.String getSecurityConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}.

---

##### `tablePrefix`<sup>Optional</sup> <a name="tablePrefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tablePrefix"></a>

```java
public java.lang.String getTablePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}.

---

### GlueCrawlerDeltaTarget <a name="GlueCrawlerDeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerDeltaTarget;

GlueCrawlerDeltaTarget.builder()
    .deltaTables(java.util.List<java.lang.String>)
    .writeManifest(java.lang.Boolean)
    .writeManifest(IResolvable)
//  .connectionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.deltaTables">deltaTables</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_tables GlueCrawler#delta_tables}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.writeManifest">writeManifest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#write_manifest GlueCrawler#write_manifest}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |

---

##### `deltaTables`<sup>Required</sup> <a name="deltaTables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.deltaTables"></a>

```java
public java.util.List<java.lang.String> getDeltaTables();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_tables GlueCrawler#delta_tables}.

---

##### `writeManifest`<sup>Required</sup> <a name="writeManifest" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.writeManifest"></a>

```java
public java.lang.Object getWriteManifest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#write_manifest GlueCrawler#write_manifest}.

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

### GlueCrawlerDynamodbTarget <a name="GlueCrawlerDynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerDynamodbTarget;

GlueCrawlerDynamodbTarget.builder()
    .path(java.lang.String)
//  .scanAll(java.lang.Boolean)
//  .scanAll(IResolvable)
//  .scanRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanAll">scanAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanRate">scanRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_rate GlueCrawler#scan_rate}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `scanAll`<sup>Optional</sup> <a name="scanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanAll"></a>

```java
public java.lang.Object getScanAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}.

---

##### `scanRate`<sup>Optional</sup> <a name="scanRate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanRate"></a>

```java
public java.lang.Number getScanRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_rate GlueCrawler#scan_rate}.

---

### GlueCrawlerJdbcTarget <a name="GlueCrawlerJdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerJdbcTarget;

GlueCrawlerJdbcTarget.builder()
    .connectionName(java.lang.String)
    .path(java.lang.String)
//  .enableAdditionalMetadata(java.util.List<java.lang.String>)
//  .exclusions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.enableAdditionalMetadata">enableAdditionalMetadata</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `enableAdditionalMetadata`<sup>Optional</sup> <a name="enableAdditionalMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.enableAdditionalMetadata"></a>

```java
public java.util.List<java.lang.String> getEnableAdditionalMetadata();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}.

---

### GlueCrawlerLakeFormationConfiguration <a name="GlueCrawlerLakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerLakeFormationConfiguration;

GlueCrawlerLakeFormationConfiguration.builder()
//  .accountId(java.lang.String)
//  .useLakeFormationCredentials(java.lang.Boolean)
//  .useLakeFormationCredentials(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#account_id GlueCrawler#account_id}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials">useLakeFormationCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#account_id GlueCrawler#account_id}.

---

##### `useLakeFormationCredentials`<sup>Optional</sup> <a name="useLakeFormationCredentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials"></a>

```java
public java.lang.Object getUseLakeFormationCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}.

---

### GlueCrawlerLineageConfiguration <a name="GlueCrawlerLineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerLineageConfiguration;

GlueCrawlerLineageConfiguration.builder()
//  .crawlerLineageSettings(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.property.crawlerLineageSettings">crawlerLineageSettings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}. |

---

##### `crawlerLineageSettings`<sup>Optional</sup> <a name="crawlerLineageSettings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.property.crawlerLineageSettings"></a>

```java
public java.lang.String getCrawlerLineageSettings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}.

---

### GlueCrawlerMongodbTarget <a name="GlueCrawlerMongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerMongodbTarget;

GlueCrawlerMongodbTarget.builder()
    .connectionName(java.lang.String)
    .path(java.lang.String)
//  .scanAll(java.lang.Boolean)
//  .scanAll(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.scanAll">scanAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `scanAll`<sup>Optional</sup> <a name="scanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.scanAll"></a>

```java
public java.lang.Object getScanAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}.

---

### GlueCrawlerRecrawlPolicy <a name="GlueCrawlerRecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerRecrawlPolicy;

GlueCrawlerRecrawlPolicy.builder()
//  .recrawlBehavior(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior">recrawlBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}. |

---

##### `recrawlBehavior`<sup>Optional</sup> <a name="recrawlBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior"></a>

```java
public java.lang.String getRecrawlBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}.

---

### GlueCrawlerS3Target <a name="GlueCrawlerS3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerS3Target;

GlueCrawlerS3Target.builder()
    .path(java.lang.String)
//  .connectionName(java.lang.String)
//  .dlqEventQueueArn(java.lang.String)
//  .eventQueueArn(java.lang.String)
//  .exclusions(java.util.List<java.lang.String>)
//  .sampleSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.dlqEventQueueArn">dlqEventQueueArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.eventQueueArn">eventQueueArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.sampleSize">sampleSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#sample_size GlueCrawler#sample_size}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `dlqEventQueueArn`<sup>Optional</sup> <a name="dlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.dlqEventQueueArn"></a>

```java
public java.lang.String getDlqEventQueueArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}.

---

##### `eventQueueArn`<sup>Optional</sup> <a name="eventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.eventQueueArn"></a>

```java
public java.lang.String getEventQueueArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}.

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.sampleSize"></a>

```java
public java.lang.Number getSampleSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#sample_size GlueCrawler#sample_size}.

---

### GlueCrawlerSchemaChangePolicy <a name="GlueCrawlerSchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerSchemaChangePolicy;

GlueCrawlerSchemaChangePolicy.builder()
//  .deleteBehavior(java.lang.String)
//  .updateBehavior(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior">deleteBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delete_behavior GlueCrawler#delete_behavior}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior">updateBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#update_behavior GlueCrawler#update_behavior}. |

---

##### `deleteBehavior`<sup>Optional</sup> <a name="deleteBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior"></a>

```java
public java.lang.String getDeleteBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delete_behavior GlueCrawler#delete_behavior}.

---

##### `updateBehavior`<sup>Optional</sup> <a name="updateBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior"></a>

```java
public java.lang.String getUpdateBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#update_behavior GlueCrawler#update_behavior}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCrawlerCatalogTargetList <a name="GlueCrawlerCatalogTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerCatalogTargetList;

new GlueCrawlerCatalogTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get"></a>

```java
public GlueCrawlerCatalogTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>>

---


### GlueCrawlerCatalogTargetOutputReference <a name="GlueCrawlerCatalogTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerCatalogTargetOutputReference;

new GlueCrawlerCatalogTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetDlqEventQueueArn">resetDlqEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetEventQueueArn">resetEventQueueArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetDlqEventQueueArn` <a name="resetDlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetDlqEventQueueArn"></a>

```java
public void resetDlqEventQueueArn()
```

##### `resetEventQueueArn` <a name="resetEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetEventQueueArn"></a>

```java
public void resetEventQueueArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArnInput">dlqEventQueueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArnInput">eventQueueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tablesInput">tablesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArn">dlqEventQueueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArn">eventQueueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tables">tables</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dlqEventQueueArnInput`<sup>Optional</sup> <a name="dlqEventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArnInput"></a>

```java
public java.lang.String getDlqEventQueueArnInput();
```

- *Type:* java.lang.String

---

##### `eventQueueArnInput`<sup>Optional</sup> <a name="eventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArnInput"></a>

```java
public java.lang.String getEventQueueArnInput();
```

- *Type:* java.lang.String

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tablesInput"></a>

```java
public java.util.List<java.lang.String> getTablesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dlqEventQueueArn`<sup>Required</sup> <a name="dlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArn"></a>

```java
public java.lang.String getDlqEventQueueArn();
```

- *Type:* java.lang.String

---

##### `eventQueueArn`<sup>Required</sup> <a name="eventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArn"></a>

```java
public java.lang.String getEventQueueArn();
```

- *Type:* java.lang.String

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tables"></a>

```java
public java.util.List<java.lang.String> getTables();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a> OR com.hashicorp.cdktf.IResolvable

---


### GlueCrawlerDeltaTargetList <a name="GlueCrawlerDeltaTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerDeltaTargetList;

new GlueCrawlerDeltaTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get"></a>

```java
public GlueCrawlerDeltaTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>>

---


### GlueCrawlerDeltaTargetOutputReference <a name="GlueCrawlerDeltaTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerDeltaTargetOutputReference;

new GlueCrawlerDeltaTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTablesInput">deltaTablesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifestInput">writeManifestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTables">deltaTables</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifest">writeManifest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `deltaTablesInput`<sup>Optional</sup> <a name="deltaTablesInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTablesInput"></a>

```java
public java.util.List<java.lang.String> getDeltaTablesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `writeManifestInput`<sup>Optional</sup> <a name="writeManifestInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifestInput"></a>

```java
public java.lang.Object getWriteManifestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `deltaTables`<sup>Required</sup> <a name="deltaTables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTables"></a>

```java
public java.util.List<java.lang.String> getDeltaTables();
```

- *Type:* java.util.List<java.lang.String>

---

##### `writeManifest`<sup>Required</sup> <a name="writeManifest" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifest"></a>

```java
public java.lang.Object getWriteManifest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a> OR com.hashicorp.cdktf.IResolvable

---


### GlueCrawlerDynamodbTargetList <a name="GlueCrawlerDynamodbTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerDynamodbTargetList;

new GlueCrawlerDynamodbTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get"></a>

```java
public GlueCrawlerDynamodbTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>>

---


### GlueCrawlerDynamodbTargetOutputReference <a name="GlueCrawlerDynamodbTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerDynamodbTargetOutputReference;

new GlueCrawlerDynamodbTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanAll">resetScanAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanRate">resetScanRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScanAll` <a name="resetScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanAll"></a>

```java
public void resetScanAll()
```

##### `resetScanRate` <a name="resetScanRate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanRate"></a>

```java
public void resetScanRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAllInput">scanAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRateInput">scanRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAll">scanAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRate">scanRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `scanAllInput`<sup>Optional</sup> <a name="scanAllInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAllInput"></a>

```java
public java.lang.Object getScanAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanRateInput`<sup>Optional</sup> <a name="scanRateInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRateInput"></a>

```java
public java.lang.Number getScanRateInput();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `scanAll`<sup>Required</sup> <a name="scanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAll"></a>

```java
public java.lang.Object getScanAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scanRate`<sup>Required</sup> <a name="scanRate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRate"></a>

```java
public java.lang.Number getScanRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a> OR com.hashicorp.cdktf.IResolvable

---


### GlueCrawlerJdbcTargetList <a name="GlueCrawlerJdbcTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerJdbcTargetList;

new GlueCrawlerJdbcTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get"></a>

```java
public GlueCrawlerJdbcTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>>

---


### GlueCrawlerJdbcTargetOutputReference <a name="GlueCrawlerJdbcTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerJdbcTargetOutputReference;

new GlueCrawlerJdbcTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetEnableAdditionalMetadata">resetEnableAdditionalMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableAdditionalMetadata` <a name="resetEnableAdditionalMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetEnableAdditionalMetadata"></a>

```java
public void resetEnableAdditionalMetadata()
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadataInput">enableAdditionalMetadataInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadata">enableAdditionalMetadata</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `enableAdditionalMetadataInput`<sup>Optional</sup> <a name="enableAdditionalMetadataInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadataInput"></a>

```java
public java.util.List<java.lang.String> getEnableAdditionalMetadataInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `enableAdditionalMetadata`<sup>Required</sup> <a name="enableAdditionalMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadata"></a>

```java
public java.util.List<java.lang.String> getEnableAdditionalMetadata();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a> OR com.hashicorp.cdktf.IResolvable

---


### GlueCrawlerLakeFormationConfigurationOutputReference <a name="GlueCrawlerLakeFormationConfigurationOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerLakeFormationConfigurationOutputReference;

new GlueCrawlerLakeFormationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials">resetUseLakeFormationCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetUseLakeFormationCredentials` <a name="resetUseLakeFormationCredentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials"></a>

```java
public void resetUseLakeFormationCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput">useLakeFormationCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials">useLakeFormationCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `useLakeFormationCredentialsInput`<sup>Optional</sup> <a name="useLakeFormationCredentialsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput"></a>

```java
public java.lang.Object getUseLakeFormationCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `useLakeFormationCredentials`<sup>Required</sup> <a name="useLakeFormationCredentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials"></a>

```java
public java.lang.Object getUseLakeFormationCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue"></a>

```java
public GlueCrawlerLakeFormationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---


### GlueCrawlerLineageConfigurationOutputReference <a name="GlueCrawlerLineageConfigurationOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerLineageConfigurationOutputReference;

new GlueCrawlerLineageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resetCrawlerLineageSettings">resetCrawlerLineageSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrawlerLineageSettings` <a name="resetCrawlerLineageSettings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resetCrawlerLineageSettings"></a>

```java
public void resetCrawlerLineageSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettingsInput">crawlerLineageSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettings">crawlerLineageSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crawlerLineageSettingsInput`<sup>Optional</sup> <a name="crawlerLineageSettingsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettingsInput"></a>

```java
public java.lang.String getCrawlerLineageSettingsInput();
```

- *Type:* java.lang.String

---

##### `crawlerLineageSettings`<sup>Required</sup> <a name="crawlerLineageSettings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettings"></a>

```java
public java.lang.String getCrawlerLineageSettings();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.internalValue"></a>

```java
public GlueCrawlerLineageConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---


### GlueCrawlerMongodbTargetList <a name="GlueCrawlerMongodbTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerMongodbTargetList;

new GlueCrawlerMongodbTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get"></a>

```java
public GlueCrawlerMongodbTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>>

---


### GlueCrawlerMongodbTargetOutputReference <a name="GlueCrawlerMongodbTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerMongodbTargetOutputReference;

new GlueCrawlerMongodbTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resetScanAll">resetScanAll</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScanAll` <a name="resetScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resetScanAll"></a>

```java
public void resetScanAll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAllInput">scanAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAll">scanAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `scanAllInput`<sup>Optional</sup> <a name="scanAllInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAllInput"></a>

```java
public java.lang.Object getScanAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `scanAll`<sup>Required</sup> <a name="scanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAll"></a>

```java
public java.lang.Object getScanAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a> OR com.hashicorp.cdktf.IResolvable

---


### GlueCrawlerRecrawlPolicyOutputReference <a name="GlueCrawlerRecrawlPolicyOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerRecrawlPolicyOutputReference;

new GlueCrawlerRecrawlPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior">resetRecrawlBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecrawlBehavior` <a name="resetRecrawlBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior"></a>

```java
public void resetRecrawlBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput">recrawlBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior">recrawlBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recrawlBehaviorInput`<sup>Optional</sup> <a name="recrawlBehaviorInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput"></a>

```java
public java.lang.String getRecrawlBehaviorInput();
```

- *Type:* java.lang.String

---

##### `recrawlBehavior`<sup>Required</sup> <a name="recrawlBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior"></a>

```java
public java.lang.String getRecrawlBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue"></a>

```java
public GlueCrawlerRecrawlPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---


### GlueCrawlerS3TargetList <a name="GlueCrawlerS3TargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerS3TargetList;

new GlueCrawlerS3TargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get"></a>

```java
public GlueCrawlerS3TargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>>

---


### GlueCrawlerS3TargetOutputReference <a name="GlueCrawlerS3TargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerS3TargetOutputReference;

new GlueCrawlerS3TargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetDlqEventQueueArn">resetDlqEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetEventQueueArn">resetEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetSampleSize">resetSampleSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetDlqEventQueueArn` <a name="resetDlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetDlqEventQueueArn"></a>

```java
public void resetDlqEventQueueArn()
```

##### `resetEventQueueArn` <a name="resetEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetEventQueueArn"></a>

```java
public void resetEventQueueArn()
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetSampleSize` <a name="resetSampleSize" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetSampleSize"></a>

```java
public void resetSampleSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArnInput">dlqEventQueueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArnInput">eventQueueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSizeInput">sampleSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArn">dlqEventQueueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArn">eventQueueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSize">sampleSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `dlqEventQueueArnInput`<sup>Optional</sup> <a name="dlqEventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArnInput"></a>

```java
public java.lang.String getDlqEventQueueArnInput();
```

- *Type:* java.lang.String

---

##### `eventQueueArnInput`<sup>Optional</sup> <a name="eventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArnInput"></a>

```java
public java.lang.String getEventQueueArnInput();
```

- *Type:* java.lang.String

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `sampleSizeInput`<sup>Optional</sup> <a name="sampleSizeInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSizeInput"></a>

```java
public java.lang.Number getSampleSizeInput();
```

- *Type:* java.lang.Number

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `dlqEventQueueArn`<sup>Required</sup> <a name="dlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArn"></a>

```java
public java.lang.String getDlqEventQueueArn();
```

- *Type:* java.lang.String

---

##### `eventQueueArn`<sup>Required</sup> <a name="eventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArn"></a>

```java
public java.lang.String getEventQueueArn();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `sampleSize`<sup>Required</sup> <a name="sampleSize" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSize"></a>

```java
public java.lang.Number getSampleSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a> OR com.hashicorp.cdktf.IResolvable

---


### GlueCrawlerSchemaChangePolicyOutputReference <a name="GlueCrawlerSchemaChangePolicyOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_crawler.GlueCrawlerSchemaChangePolicyOutputReference;

new GlueCrawlerSchemaChangePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior">resetDeleteBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior">resetUpdateBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteBehavior` <a name="resetDeleteBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior"></a>

```java
public void resetDeleteBehavior()
```

##### `resetUpdateBehavior` <a name="resetUpdateBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior"></a>

```java
public void resetUpdateBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput">deleteBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput">updateBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior">deleteBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior">updateBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteBehaviorInput`<sup>Optional</sup> <a name="deleteBehaviorInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput"></a>

```java
public java.lang.String getDeleteBehaviorInput();
```

- *Type:* java.lang.String

---

##### `updateBehaviorInput`<sup>Optional</sup> <a name="updateBehaviorInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput"></a>

```java
public java.lang.String getUpdateBehaviorInput();
```

- *Type:* java.lang.String

---

##### `deleteBehavior`<sup>Required</sup> <a name="deleteBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior"></a>

```java
public java.lang.String getDeleteBehavior();
```

- *Type:* java.lang.String

---

##### `updateBehavior`<sup>Required</sup> <a name="updateBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior"></a>

```java
public java.lang.String getUpdateBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue"></a>

```java
public GlueCrawlerSchemaChangePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---



