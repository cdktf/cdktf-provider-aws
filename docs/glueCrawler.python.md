# `glueCrawler` Submodule <a name="`glueCrawler` Submodule" id="@cdktf/provider-aws.glueCrawler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCrawler <a name="GlueCrawler" id="@cdktf/provider-aws.glueCrawler.GlueCrawler"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler aws_glue_crawler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawler(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  name: str,
  role: str,
  catalog_target: typing.Union[IResolvable, typing.List[GlueCrawlerCatalogTarget]] = None,
  classifiers: typing.List[str] = None,
  configuration: str = None,
  delta_target: typing.Union[IResolvable, typing.List[GlueCrawlerDeltaTarget]] = None,
  description: str = None,
  dynamodb_target: typing.Union[IResolvable, typing.List[GlueCrawlerDynamodbTarget]] = None,
  id: str = None,
  jdbc_target: typing.Union[IResolvable, typing.List[GlueCrawlerJdbcTarget]] = None,
  lake_formation_configuration: GlueCrawlerLakeFormationConfiguration = None,
  lineage_configuration: GlueCrawlerLineageConfiguration = None,
  mongodb_target: typing.Union[IResolvable, typing.List[GlueCrawlerMongodbTarget]] = None,
  recrawl_policy: GlueCrawlerRecrawlPolicy = None,
  s3_target: typing.Union[IResolvable, typing.List[GlueCrawlerS3Target]] = None,
  schedule: str = None,
  schema_change_policy: GlueCrawlerSchemaChangePolicy = None,
  security_configuration: str = None,
  table_prefix: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.catalogTarget">catalog_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>]]</code> | catalog_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.classifiers">classifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.configuration">configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.deltaTarget">delta_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>]]</code> | delta_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.dynamodbTarget">dynamodb_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>]]</code> | dynamodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.jdbcTarget">jdbc_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>]]</code> | jdbc_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lakeFormationConfiguration">lake_formation_configuration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | lake_formation_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lineageConfiguration">lineage_configuration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | lineage_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.mongodbTarget">mongodb_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>]]</code> | mongodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.recrawlPolicy">recrawl_policy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | recrawl_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.s3Target">s3_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>]]</code> | s3_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.schemaChangePolicy">schema_change_policy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | schema_change_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.securityConfiguration">security_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tablePrefix">table_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}.

---

##### `catalog_target`<sup>Optional</sup> <a name="catalog_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.catalogTarget"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>]]

catalog_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#catalog_target GlueCrawler#catalog_target}

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.classifiers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.configuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}.

---

##### `delta_target`<sup>Optional</sup> <a name="delta_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.deltaTarget"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>]]

delta_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_target GlueCrawler#delta_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}.

---

##### `dynamodb_target`<sup>Optional</sup> <a name="dynamodb_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.dynamodbTarget"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>]]

dynamodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dynamodb_target GlueCrawler#dynamodb_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jdbc_target`<sup>Optional</sup> <a name="jdbc_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.jdbcTarget"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>]]

jdbc_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#jdbc_target GlueCrawler#jdbc_target}

---

##### `lake_formation_configuration`<sup>Optional</sup> <a name="lake_formation_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lakeFormationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

lake_formation_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `lineage_configuration`<sup>Optional</sup> <a name="lineage_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.lineageConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

lineage_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lineage_configuration GlueCrawler#lineage_configuration}

---

##### `mongodb_target`<sup>Optional</sup> <a name="mongodb_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.mongodbTarget"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>]]

mongodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#mongodb_target GlueCrawler#mongodb_target}

---

##### `recrawl_policy`<sup>Optional</sup> <a name="recrawl_policy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.recrawlPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

recrawl_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `s3_target`<sup>Optional</sup> <a name="s3_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.s3Target"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>]]

s3_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#s3_target GlueCrawler#s3_target}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.schedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}.

---

##### `schema_change_policy`<sup>Optional</sup> <a name="schema_change_policy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.schemaChangePolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

schema_change_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.securityConfiguration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}.

---

##### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tablePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget">put_catalog_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget">put_delta_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget">put_dynamodb_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget">put_jdbc_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration">put_lake_formation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration">put_lineage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget">put_mongodb_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy">put_recrawl_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target">put_s3_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy">put_schema_change_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetCatalogTarget">reset_catalog_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetClassifiers">reset_classifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDeltaTarget">reset_delta_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDynamodbTarget">reset_dynamodb_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetJdbcTarget">reset_jdbc_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLakeFormationConfiguration">reset_lake_formation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLineageConfiguration">reset_lineage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetMongodbTarget">reset_mongodb_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetRecrawlPolicy">reset_recrawl_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetS3Target">reset_s3_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchemaChangePolicy">reset_schema_change_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSecurityConfiguration">reset_security_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTablePrefix">reset_table_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_catalog_target` <a name="put_catalog_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget"></a>

```python
def put_catalog_target(
  value: typing.Union[IResolvable, typing.List[GlueCrawlerCatalogTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>]]

---

##### `put_delta_target` <a name="put_delta_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget"></a>

```python
def put_delta_target(
  value: typing.Union[IResolvable, typing.List[GlueCrawlerDeltaTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>]]

---

##### `put_dynamodb_target` <a name="put_dynamodb_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget"></a>

```python
def put_dynamodb_target(
  value: typing.Union[IResolvable, typing.List[GlueCrawlerDynamodbTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>]]

---

##### `put_jdbc_target` <a name="put_jdbc_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget"></a>

```python
def put_jdbc_target(
  value: typing.Union[IResolvable, typing.List[GlueCrawlerJdbcTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>]]

---

##### `put_lake_formation_configuration` <a name="put_lake_formation_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration"></a>

```python
def put_lake_formation_configuration(
  account_id: str = None,
  use_lake_formation_credentials: typing.Union[bool, IResolvable] = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#account_id GlueCrawler#account_id}.

---

###### `use_lake_formation_credentials`<sup>Optional</sup> <a name="use_lake_formation_credentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration.parameter.useLakeFormationCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}.

---

##### `put_lineage_configuration` <a name="put_lineage_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration"></a>

```python
def put_lineage_configuration(
  crawler_lineage_settings: str = None
) -> None
```

###### `crawler_lineage_settings`<sup>Optional</sup> <a name="crawler_lineage_settings" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration.parameter.crawlerLineageSettings"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}.

---

##### `put_mongodb_target` <a name="put_mongodb_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget"></a>

```python
def put_mongodb_target(
  value: typing.Union[IResolvable, typing.List[GlueCrawlerMongodbTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>]]

---

##### `put_recrawl_policy` <a name="put_recrawl_policy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy"></a>

```python
def put_recrawl_policy(
  recrawl_behavior: str = None
) -> None
```

###### `recrawl_behavior`<sup>Optional</sup> <a name="recrawl_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy.parameter.recrawlBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}.

---

##### `put_s3_target` <a name="put_s3_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target"></a>

```python
def put_s3_target(
  value: typing.Union[IResolvable, typing.List[GlueCrawlerS3Target]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>]]

---

##### `put_schema_change_policy` <a name="put_schema_change_policy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy"></a>

```python
def put_schema_change_policy(
  delete_behavior: str = None,
  update_behavior: str = None
) -> None
```

###### `delete_behavior`<sup>Optional</sup> <a name="delete_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy.parameter.deleteBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delete_behavior GlueCrawler#delete_behavior}.

---

###### `update_behavior`<sup>Optional</sup> <a name="update_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy.parameter.updateBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#update_behavior GlueCrawler#update_behavior}.

---

##### `reset_catalog_target` <a name="reset_catalog_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetCatalogTarget"></a>

```python
def reset_catalog_target() -> None
```

##### `reset_classifiers` <a name="reset_classifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetClassifiers"></a>

```python
def reset_classifiers() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_delta_target` <a name="reset_delta_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDeltaTarget"></a>

```python
def reset_delta_target() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dynamodb_target` <a name="reset_dynamodb_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDynamodbTarget"></a>

```python
def reset_dynamodb_target() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_jdbc_target` <a name="reset_jdbc_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetJdbcTarget"></a>

```python
def reset_jdbc_target() -> None
```

##### `reset_lake_formation_configuration` <a name="reset_lake_formation_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLakeFormationConfiguration"></a>

```python
def reset_lake_formation_configuration() -> None
```

##### `reset_lineage_configuration` <a name="reset_lineage_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLineageConfiguration"></a>

```python
def reset_lineage_configuration() -> None
```

##### `reset_mongodb_target` <a name="reset_mongodb_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetMongodbTarget"></a>

```python
def reset_mongodb_target() -> None
```

##### `reset_recrawl_policy` <a name="reset_recrawl_policy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetRecrawlPolicy"></a>

```python
def reset_recrawl_policy() -> None
```

##### `reset_s3_target` <a name="reset_s3_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetS3Target"></a>

```python
def reset_s3_target() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_schema_change_policy` <a name="reset_schema_change_policy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchemaChangePolicy"></a>

```python
def reset_schema_change_policy() -> None
```

##### `reset_security_configuration` <a name="reset_security_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSecurityConfiguration"></a>

```python
def reset_security_configuration() -> None
```

##### `reset_table_prefix` <a name="reset_table_prefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTablePrefix"></a>

```python
def reset_table_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawler.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawler.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawler.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTarget">catalog_target</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList">GlueCrawlerCatalogTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTarget">delta_target</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList">GlueCrawlerDeltaTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTarget">dynamodb_target</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList">GlueCrawlerDynamodbTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTarget">jdbc_target</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList">GlueCrawlerJdbcTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfiguration">lake_formation_configuration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfiguration">lineage_configuration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference">GlueCrawlerLineageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTarget">mongodb_target</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList">GlueCrawlerMongodbTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicy">recrawl_policy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3Target">s3_target</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList">GlueCrawlerS3TargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicy">schema_change_policy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTargetInput">catalog_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiersInput">classifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configurationInput">configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTargetInput">delta_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTargetInput">dynamodb_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTargetInput">jdbc_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput">lake_formation_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfigurationInput">lineage_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTargetInput">mongodb_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicyInput">recrawl_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3TargetInput">s3_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicyInput">schema_change_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfigurationInput">security_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefixInput">table_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiers">classifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefix">table_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `catalog_target`<sup>Required</sup> <a name="catalog_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTarget"></a>

```python
catalog_target: GlueCrawlerCatalogTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList">GlueCrawlerCatalogTargetList</a>

---

##### `delta_target`<sup>Required</sup> <a name="delta_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTarget"></a>

```python
delta_target: GlueCrawlerDeltaTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList">GlueCrawlerDeltaTargetList</a>

---

##### `dynamodb_target`<sup>Required</sup> <a name="dynamodb_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTarget"></a>

```python
dynamodb_target: GlueCrawlerDynamodbTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList">GlueCrawlerDynamodbTargetList</a>

---

##### `jdbc_target`<sup>Required</sup> <a name="jdbc_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTarget"></a>

```python
jdbc_target: GlueCrawlerJdbcTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList">GlueCrawlerJdbcTargetList</a>

---

##### `lake_formation_configuration`<sup>Required</sup> <a name="lake_formation_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfiguration"></a>

```python
lake_formation_configuration: GlueCrawlerLakeFormationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a>

---

##### `lineage_configuration`<sup>Required</sup> <a name="lineage_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfiguration"></a>

```python
lineage_configuration: GlueCrawlerLineageConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference">GlueCrawlerLineageConfigurationOutputReference</a>

---

##### `mongodb_target`<sup>Required</sup> <a name="mongodb_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTarget"></a>

```python
mongodb_target: GlueCrawlerMongodbTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList">GlueCrawlerMongodbTargetList</a>

---

##### `recrawl_policy`<sup>Required</sup> <a name="recrawl_policy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicy"></a>

```python
recrawl_policy: GlueCrawlerRecrawlPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a>

---

##### `s3_target`<sup>Required</sup> <a name="s3_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3Target"></a>

```python
s3_target: GlueCrawlerS3TargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList">GlueCrawlerS3TargetList</a>

---

##### `schema_change_policy`<sup>Required</sup> <a name="schema_change_policy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicy"></a>

```python
schema_change_policy: GlueCrawlerSchemaChangePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a>

---

##### `catalog_target_input`<sup>Optional</sup> <a name="catalog_target_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTargetInput"></a>

```python
catalog_target_input: typing.Union[IResolvable, typing.List[GlueCrawlerCatalogTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>]]

---

##### `classifiers_input`<sup>Optional</sup> <a name="classifiers_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiersInput"></a>

```python
classifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configurationInput"></a>

```python
configuration_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `delta_target_input`<sup>Optional</sup> <a name="delta_target_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTargetInput"></a>

```python
delta_target_input: typing.Union[IResolvable, typing.List[GlueCrawlerDeltaTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dynamodb_target_input`<sup>Optional</sup> <a name="dynamodb_target_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTargetInput"></a>

```python
dynamodb_target_input: typing.Union[IResolvable, typing.List[GlueCrawlerDynamodbTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `jdbc_target_input`<sup>Optional</sup> <a name="jdbc_target_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTargetInput"></a>

```python
jdbc_target_input: typing.Union[IResolvable, typing.List[GlueCrawlerJdbcTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>]]

---

##### `lake_formation_configuration_input`<sup>Optional</sup> <a name="lake_formation_configuration_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput"></a>

```python
lake_formation_configuration_input: GlueCrawlerLakeFormationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `lineage_configuration_input`<sup>Optional</sup> <a name="lineage_configuration_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfigurationInput"></a>

```python
lineage_configuration_input: GlueCrawlerLineageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---

##### `mongodb_target_input`<sup>Optional</sup> <a name="mongodb_target_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTargetInput"></a>

```python
mongodb_target_input: typing.Union[IResolvable, typing.List[GlueCrawlerMongodbTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recrawl_policy_input`<sup>Optional</sup> <a name="recrawl_policy_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicyInput"></a>

```python
recrawl_policy_input: GlueCrawlerRecrawlPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `s3_target_input`<sup>Optional</sup> <a name="s3_target_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3TargetInput"></a>

```python
s3_target_input: typing.Union[IResolvable, typing.List[GlueCrawlerS3Target]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>]]

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `schema_change_policy_input`<sup>Optional</sup> <a name="schema_change_policy_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicyInput"></a>

```python
schema_change_policy_input: GlueCrawlerSchemaChangePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `security_configuration_input`<sup>Optional</sup> <a name="security_configuration_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfigurationInput"></a>

```python
security_configuration_input: str
```

- *Type:* str

---

##### `table_prefix_input`<sup>Optional</sup> <a name="table_prefix_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefixInput"></a>

```python
table_prefix_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `classifiers`<sup>Required</sup> <a name="classifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiers"></a>

```python
classifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `security_configuration`<sup>Required</sup> <a name="security_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

---

##### `table_prefix`<sup>Required</sup> <a name="table_prefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCrawlerCatalogTarget <a name="GlueCrawlerCatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerCatalogTarget(
  database_name: str,
  tables: typing.List[str],
  connection_name: str = None,
  dlq_event_queue_arn: str = None,
  event_queue_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.tables">tables</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tables GlueCrawler#tables}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.dlqEventQueueArn">dlq_event_queue_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.eventQueueArn">event_queue_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.tables"></a>

```python
tables: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tables GlueCrawler#tables}.

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `dlq_event_queue_arn`<sup>Optional</sup> <a name="dlq_event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.dlqEventQueueArn"></a>

```python
dlq_event_queue_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}.

---

##### `event_queue_arn`<sup>Optional</sup> <a name="event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.eventQueueArn"></a>

```python
event_queue_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}.

---

### GlueCrawlerConfig <a name="GlueCrawlerConfig" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  name: str,
  role: str,
  catalog_target: typing.Union[IResolvable, typing.List[GlueCrawlerCatalogTarget]] = None,
  classifiers: typing.List[str] = None,
  configuration: str = None,
  delta_target: typing.Union[IResolvable, typing.List[GlueCrawlerDeltaTarget]] = None,
  description: str = None,
  dynamodb_target: typing.Union[IResolvable, typing.List[GlueCrawlerDynamodbTarget]] = None,
  id: str = None,
  jdbc_target: typing.Union[IResolvable, typing.List[GlueCrawlerJdbcTarget]] = None,
  lake_formation_configuration: GlueCrawlerLakeFormationConfiguration = None,
  lineage_configuration: GlueCrawlerLineageConfiguration = None,
  mongodb_target: typing.Union[IResolvable, typing.List[GlueCrawlerMongodbTarget]] = None,
  recrawl_policy: GlueCrawlerRecrawlPolicy = None,
  s3_target: typing.Union[IResolvable, typing.List[GlueCrawlerS3Target]] = None,
  schedule: str = None,
  schema_change_policy: GlueCrawlerSchemaChangePolicy = None,
  security_configuration: str = None,
  table_prefix: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.catalogTarget">catalog_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>]]</code> | catalog_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.classifiers">classifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.configuration">configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.deltaTarget">delta_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>]]</code> | delta_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dynamodbTarget">dynamodb_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>]]</code> | dynamodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.jdbcTarget">jdbc_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>]]</code> | jdbc_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration">lake_formation_configuration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | lake_formation_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lineageConfiguration">lineage_configuration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | lineage_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.mongodbTarget">mongodb_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>]]</code> | mongodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy">recrawl_policy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | recrawl_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.s3Target">s3_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>]]</code> | s3_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy">schema_change_policy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | schema_change_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tablePrefix">table_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}.

---

##### `catalog_target`<sup>Optional</sup> <a name="catalog_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.catalogTarget"></a>

```python
catalog_target: typing.Union[IResolvable, typing.List[GlueCrawlerCatalogTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>]]

catalog_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#catalog_target GlueCrawler#catalog_target}

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.classifiers"></a>

```python
classifiers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}.

---

##### `delta_target`<sup>Optional</sup> <a name="delta_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.deltaTarget"></a>

```python
delta_target: typing.Union[IResolvable, typing.List[GlueCrawlerDeltaTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>]]

delta_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_target GlueCrawler#delta_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}.

---

##### `dynamodb_target`<sup>Optional</sup> <a name="dynamodb_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dynamodbTarget"></a>

```python
dynamodb_target: typing.Union[IResolvable, typing.List[GlueCrawlerDynamodbTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>]]

dynamodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dynamodb_target GlueCrawler#dynamodb_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jdbc_target`<sup>Optional</sup> <a name="jdbc_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.jdbcTarget"></a>

```python
jdbc_target: typing.Union[IResolvable, typing.List[GlueCrawlerJdbcTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>]]

jdbc_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#jdbc_target GlueCrawler#jdbc_target}

---

##### `lake_formation_configuration`<sup>Optional</sup> <a name="lake_formation_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration"></a>

```python
lake_formation_configuration: GlueCrawlerLakeFormationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

lake_formation_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `lineage_configuration`<sup>Optional</sup> <a name="lineage_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lineageConfiguration"></a>

```python
lineage_configuration: GlueCrawlerLineageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

lineage_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lineage_configuration GlueCrawler#lineage_configuration}

---

##### `mongodb_target`<sup>Optional</sup> <a name="mongodb_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.mongodbTarget"></a>

```python
mongodb_target: typing.Union[IResolvable, typing.List[GlueCrawlerMongodbTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>]]

mongodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#mongodb_target GlueCrawler#mongodb_target}

---

##### `recrawl_policy`<sup>Optional</sup> <a name="recrawl_policy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy"></a>

```python
recrawl_policy: GlueCrawlerRecrawlPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

recrawl_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `s3_target`<sup>Optional</sup> <a name="s3_target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.s3Target"></a>

```python
s3_target: typing.Union[IResolvable, typing.List[GlueCrawlerS3Target]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>]]

s3_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#s3_target GlueCrawler#s3_target}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}.

---

##### `schema_change_policy`<sup>Optional</sup> <a name="schema_change_policy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy"></a>

```python
schema_change_policy: GlueCrawlerSchemaChangePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

schema_change_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}.

---

##### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}.

---

### GlueCrawlerDeltaTarget <a name="GlueCrawlerDeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerDeltaTarget(
  delta_tables: typing.List[str],
  write_manifest: typing.Union[bool, IResolvable],
  connection_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.deltaTables">delta_tables</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_tables GlueCrawler#delta_tables}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.writeManifest">write_manifest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#write_manifest GlueCrawler#write_manifest}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |

---

##### `delta_tables`<sup>Required</sup> <a name="delta_tables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.deltaTables"></a>

```python
delta_tables: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_tables GlueCrawler#delta_tables}.

---

##### `write_manifest`<sup>Required</sup> <a name="write_manifest" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.writeManifest"></a>

```python
write_manifest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#write_manifest GlueCrawler#write_manifest}.

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

### GlueCrawlerDynamodbTarget <a name="GlueCrawlerDynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerDynamodbTarget(
  path: str,
  scan_all: typing.Union[bool, IResolvable] = None,
  scan_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanAll">scan_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanRate">scan_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_rate GlueCrawler#scan_rate}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `scan_all`<sup>Optional</sup> <a name="scan_all" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanAll"></a>

```python
scan_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}.

---

##### `scan_rate`<sup>Optional</sup> <a name="scan_rate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanRate"></a>

```python
scan_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_rate GlueCrawler#scan_rate}.

---

### GlueCrawlerJdbcTarget <a name="GlueCrawlerJdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerJdbcTarget(
  connection_name: str,
  path: str,
  enable_additional_metadata: typing.List[str] = None,
  exclusions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.enableAdditionalMetadata">enable_additional_metadata</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}. |

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `enable_additional_metadata`<sup>Optional</sup> <a name="enable_additional_metadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.enableAdditionalMetadata"></a>

```python
enable_additional_metadata: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}.

---

### GlueCrawlerLakeFormationConfiguration <a name="GlueCrawlerLakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerLakeFormationConfiguration(
  account_id: str = None,
  use_lake_formation_credentials: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#account_id GlueCrawler#account_id}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials">use_lake_formation_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#account_id GlueCrawler#account_id}.

---

##### `use_lake_formation_credentials`<sup>Optional</sup> <a name="use_lake_formation_credentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials"></a>

```python
use_lake_formation_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}.

---

### GlueCrawlerLineageConfiguration <a name="GlueCrawlerLineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerLineageConfiguration(
  crawler_lineage_settings: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.property.crawlerLineageSettings">crawler_lineage_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}. |

---

##### `crawler_lineage_settings`<sup>Optional</sup> <a name="crawler_lineage_settings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.property.crawlerLineageSettings"></a>

```python
crawler_lineage_settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}.

---

### GlueCrawlerMongodbTarget <a name="GlueCrawlerMongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerMongodbTarget(
  connection_name: str,
  path: str,
  scan_all: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.scanAll">scan_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}. |

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `scan_all`<sup>Optional</sup> <a name="scan_all" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.scanAll"></a>

```python
scan_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}.

---

### GlueCrawlerRecrawlPolicy <a name="GlueCrawlerRecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerRecrawlPolicy(
  recrawl_behavior: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior">recrawl_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}. |

---

##### `recrawl_behavior`<sup>Optional</sup> <a name="recrawl_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior"></a>

```python
recrawl_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}.

---

### GlueCrawlerS3Target <a name="GlueCrawlerS3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerS3Target(
  path: str,
  connection_name: str = None,
  dlq_event_queue_arn: str = None,
  event_queue_arn: str = None,
  exclusions: typing.List[str] = None,
  sample_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.dlqEventQueueArn">dlq_event_queue_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.eventQueueArn">event_queue_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#sample_size GlueCrawler#sample_size}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `dlq_event_queue_arn`<sup>Optional</sup> <a name="dlq_event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.dlqEventQueueArn"></a>

```python
dlq_event_queue_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}.

---

##### `event_queue_arn`<sup>Optional</sup> <a name="event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.eventQueueArn"></a>

```python
event_queue_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}.

---

##### `sample_size`<sup>Optional</sup> <a name="sample_size" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#sample_size GlueCrawler#sample_size}.

---

### GlueCrawlerSchemaChangePolicy <a name="GlueCrawlerSchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerSchemaChangePolicy(
  delete_behavior: str = None,
  update_behavior: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior">delete_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delete_behavior GlueCrawler#delete_behavior}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior">update_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#update_behavior GlueCrawler#update_behavior}. |

---

##### `delete_behavior`<sup>Optional</sup> <a name="delete_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior"></a>

```python
delete_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delete_behavior GlueCrawler#delete_behavior}.

---

##### `update_behavior`<sup>Optional</sup> <a name="update_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior"></a>

```python
update_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#update_behavior GlueCrawler#update_behavior}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCrawlerCatalogTargetList <a name="GlueCrawlerCatalogTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerCatalogTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerCatalogTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCrawlerCatalogTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>]]

---


### GlueCrawlerCatalogTargetOutputReference <a name="GlueCrawlerCatalogTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerCatalogTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetDlqEventQueueArn">reset_dlq_event_queue_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetEventQueueArn">reset_event_queue_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_dlq_event_queue_arn` <a name="reset_dlq_event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetDlqEventQueueArn"></a>

```python
def reset_dlq_event_queue_arn() -> None
```

##### `reset_event_queue_arn` <a name="reset_event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetEventQueueArn"></a>

```python
def reset_event_queue_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArnInput">dlq_event_queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArnInput">event_queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tablesInput">tables_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArn">dlq_event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArn">event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tables">tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `dlq_event_queue_arn_input`<sup>Optional</sup> <a name="dlq_event_queue_arn_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArnInput"></a>

```python
dlq_event_queue_arn_input: str
```

- *Type:* str

---

##### `event_queue_arn_input`<sup>Optional</sup> <a name="event_queue_arn_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArnInput"></a>

```python
event_queue_arn_input: str
```

- *Type:* str

---

##### `tables_input`<sup>Optional</sup> <a name="tables_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tablesInput"></a>

```python
tables_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `dlq_event_queue_arn`<sup>Required</sup> <a name="dlq_event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArn"></a>

```python
dlq_event_queue_arn: str
```

- *Type:* str

---

##### `event_queue_arn`<sup>Required</sup> <a name="event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArn"></a>

```python
event_queue_arn: str
```

- *Type:* str

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tables"></a>

```python
tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueCrawlerCatalogTarget, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>, cdktf.IResolvable]

---


### GlueCrawlerDeltaTargetList <a name="GlueCrawlerDeltaTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerDeltaTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerDeltaTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCrawlerDeltaTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>]]

---


### GlueCrawlerDeltaTargetOutputReference <a name="GlueCrawlerDeltaTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerDeltaTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTablesInput">delta_tables_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifestInput">write_manifest_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTables">delta_tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifest">write_manifest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `delta_tables_input`<sup>Optional</sup> <a name="delta_tables_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTablesInput"></a>

```python
delta_tables_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `write_manifest_input`<sup>Optional</sup> <a name="write_manifest_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifestInput"></a>

```python
write_manifest_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `delta_tables`<sup>Required</sup> <a name="delta_tables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTables"></a>

```python
delta_tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `write_manifest`<sup>Required</sup> <a name="write_manifest" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifest"></a>

```python
write_manifest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueCrawlerDeltaTarget, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>, cdktf.IResolvable]

---


### GlueCrawlerDynamodbTargetList <a name="GlueCrawlerDynamodbTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerDynamodbTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerDynamodbTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCrawlerDynamodbTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>]]

---


### GlueCrawlerDynamodbTargetOutputReference <a name="GlueCrawlerDynamodbTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerDynamodbTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanAll">reset_scan_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanRate">reset_scan_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scan_all` <a name="reset_scan_all" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanAll"></a>

```python
def reset_scan_all() -> None
```

##### `reset_scan_rate` <a name="reset_scan_rate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanRate"></a>

```python
def reset_scan_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAllInput">scan_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRateInput">scan_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAll">scan_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRate">scan_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `scan_all_input`<sup>Optional</sup> <a name="scan_all_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAllInput"></a>

```python
scan_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_rate_input`<sup>Optional</sup> <a name="scan_rate_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRateInput"></a>

```python
scan_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `scan_all`<sup>Required</sup> <a name="scan_all" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAll"></a>

```python
scan_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scan_rate`<sup>Required</sup> <a name="scan_rate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRate"></a>

```python
scan_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueCrawlerDynamodbTarget, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>, cdktf.IResolvable]

---


### GlueCrawlerJdbcTargetList <a name="GlueCrawlerJdbcTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerJdbcTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerJdbcTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCrawlerJdbcTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>]]

---


### GlueCrawlerJdbcTargetOutputReference <a name="GlueCrawlerJdbcTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerJdbcTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetEnableAdditionalMetadata">reset_enable_additional_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_additional_metadata` <a name="reset_enable_additional_metadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetEnableAdditionalMetadata"></a>

```python
def reset_enable_additional_metadata() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadataInput">enable_additional_metadata_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadata">enable_additional_metadata</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `enable_additional_metadata_input`<sup>Optional</sup> <a name="enable_additional_metadata_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadataInput"></a>

```python
enable_additional_metadata_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `enable_additional_metadata`<sup>Required</sup> <a name="enable_additional_metadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadata"></a>

```python
enable_additional_metadata: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueCrawlerJdbcTarget, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>, cdktf.IResolvable]

---


### GlueCrawlerLakeFormationConfigurationOutputReference <a name="GlueCrawlerLakeFormationConfigurationOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials">reset_use_lake_formation_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_use_lake_formation_credentials` <a name="reset_use_lake_formation_credentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials"></a>

```python
def reset_use_lake_formation_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput">use_lake_formation_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials">use_lake_formation_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `use_lake_formation_credentials_input`<sup>Optional</sup> <a name="use_lake_formation_credentials_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput"></a>

```python
use_lake_formation_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `use_lake_formation_credentials`<sup>Required</sup> <a name="use_lake_formation_credentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials"></a>

```python
use_lake_formation_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GlueCrawlerLakeFormationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---


### GlueCrawlerLineageConfigurationOutputReference <a name="GlueCrawlerLineageConfigurationOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerLineageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resetCrawlerLineageSettings">reset_crawler_lineage_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_crawler_lineage_settings` <a name="reset_crawler_lineage_settings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resetCrawlerLineageSettings"></a>

```python
def reset_crawler_lineage_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettingsInput">crawler_lineage_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettings">crawler_lineage_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crawler_lineage_settings_input`<sup>Optional</sup> <a name="crawler_lineage_settings_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettingsInput"></a>

```python
crawler_lineage_settings_input: str
```

- *Type:* str

---

##### `crawler_lineage_settings`<sup>Required</sup> <a name="crawler_lineage_settings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettings"></a>

```python
crawler_lineage_settings: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GlueCrawlerLineageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---


### GlueCrawlerMongodbTargetList <a name="GlueCrawlerMongodbTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerMongodbTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerMongodbTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCrawlerMongodbTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>]]

---


### GlueCrawlerMongodbTargetOutputReference <a name="GlueCrawlerMongodbTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerMongodbTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resetScanAll">reset_scan_all</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scan_all` <a name="reset_scan_all" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resetScanAll"></a>

```python
def reset_scan_all() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAllInput">scan_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAll">scan_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `scan_all_input`<sup>Optional</sup> <a name="scan_all_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAllInput"></a>

```python
scan_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `scan_all`<sup>Required</sup> <a name="scan_all" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAll"></a>

```python
scan_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueCrawlerMongodbTarget, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>, cdktf.IResolvable]

---


### GlueCrawlerRecrawlPolicyOutputReference <a name="GlueCrawlerRecrawlPolicyOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerRecrawlPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior">reset_recrawl_behavior</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_recrawl_behavior` <a name="reset_recrawl_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior"></a>

```python
def reset_recrawl_behavior() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput">recrawl_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior">recrawl_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recrawl_behavior_input`<sup>Optional</sup> <a name="recrawl_behavior_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput"></a>

```python
recrawl_behavior_input: str
```

- *Type:* str

---

##### `recrawl_behavior`<sup>Required</sup> <a name="recrawl_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior"></a>

```python
recrawl_behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GlueCrawlerRecrawlPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---


### GlueCrawlerS3TargetList <a name="GlueCrawlerS3TargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerS3TargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerS3TargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCrawlerS3Target]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>]]

---


### GlueCrawlerS3TargetOutputReference <a name="GlueCrawlerS3TargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerS3TargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetDlqEventQueueArn">reset_dlq_event_queue_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetEventQueueArn">reset_event_queue_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetSampleSize">reset_sample_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_dlq_event_queue_arn` <a name="reset_dlq_event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetDlqEventQueueArn"></a>

```python
def reset_dlq_event_queue_arn() -> None
```

##### `reset_event_queue_arn` <a name="reset_event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetEventQueueArn"></a>

```python
def reset_event_queue_arn() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_sample_size` <a name="reset_sample_size" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetSampleSize"></a>

```python
def reset_sample_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArnInput">dlq_event_queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArnInput">event_queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSizeInput">sample_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArn">dlq_event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArn">event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `dlq_event_queue_arn_input`<sup>Optional</sup> <a name="dlq_event_queue_arn_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArnInput"></a>

```python
dlq_event_queue_arn_input: str
```

- *Type:* str

---

##### `event_queue_arn_input`<sup>Optional</sup> <a name="event_queue_arn_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArnInput"></a>

```python
event_queue_arn_input: str
```

- *Type:* str

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `sample_size_input`<sup>Optional</sup> <a name="sample_size_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSizeInput"></a>

```python
sample_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `dlq_event_queue_arn`<sup>Required</sup> <a name="dlq_event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArn"></a>

```python
dlq_event_queue_arn: str
```

- *Type:* str

---

##### `event_queue_arn`<sup>Required</sup> <a name="event_queue_arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArn"></a>

```python
event_queue_arn: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `sample_size`<sup>Required</sup> <a name="sample_size" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueCrawlerS3Target, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>, cdktf.IResolvable]

---


### GlueCrawlerSchemaChangePolicyOutputReference <a name="GlueCrawlerSchemaChangePolicyOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_crawler

glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior">reset_delete_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior">reset_update_behavior</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_behavior` <a name="reset_delete_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior"></a>

```python
def reset_delete_behavior() -> None
```

##### `reset_update_behavior` <a name="reset_update_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior"></a>

```python
def reset_update_behavior() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput">delete_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput">update_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior">delete_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior">update_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_behavior_input`<sup>Optional</sup> <a name="delete_behavior_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput"></a>

```python
delete_behavior_input: str
```

- *Type:* str

---

##### `update_behavior_input`<sup>Optional</sup> <a name="update_behavior_input" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput"></a>

```python
update_behavior_input: str
```

- *Type:* str

---

##### `delete_behavior`<sup>Required</sup> <a name="delete_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior"></a>

```python
delete_behavior: str
```

- *Type:* str

---

##### `update_behavior`<sup>Required</sup> <a name="update_behavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior"></a>

```python
update_behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GlueCrawlerSchemaChangePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---



