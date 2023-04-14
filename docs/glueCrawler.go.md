# `glueCrawler` Submodule <a name="`glueCrawler` Submodule" id="@cdktf/provider-aws.glueCrawler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCrawler <a name="GlueCrawler" id="@cdktf/provider-aws.glueCrawler.GlueCrawler"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler aws_glue_crawler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawler(scope Construct, id *string, config GlueCrawlerConfig) GlueCrawler
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig">GlueCrawlerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig">GlueCrawlerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget">PutCatalogTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget">PutDeltaTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget">PutDynamodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget">PutJdbcTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration">PutLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration">PutLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget">PutMongodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy">PutRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target">PutS3Target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy">PutSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetCatalogTarget">ResetCatalogTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetClassifiers">ResetClassifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDeltaTarget">ResetDeltaTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDynamodbTarget">ResetDynamodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetJdbcTarget">ResetJdbcTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLakeFormationConfiguration">ResetLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLineageConfiguration">ResetLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetMongodbTarget">ResetMongodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetRecrawlPolicy">ResetRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetS3Target">ResetS3Target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchemaChangePolicy">ResetSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTablePrefix">ResetTablePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCatalogTarget` <a name="PutCatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget"></a>

```go
func PutCatalogTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeltaTarget` <a name="PutDeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget"></a>

```go
func PutDeltaTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDynamodbTarget` <a name="PutDynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget"></a>

```go
func PutDynamodbTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `PutJdbcTarget` <a name="PutJdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget"></a>

```go
func PutJdbcTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLakeFormationConfiguration` <a name="PutLakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration"></a>

```go
func PutLakeFormationConfiguration(value GlueCrawlerLakeFormationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `PutLineageConfiguration` <a name="PutLineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration"></a>

```go
func PutLineageConfiguration(value GlueCrawlerLineageConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---

##### `PutMongodbTarget` <a name="PutMongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget"></a>

```go
func PutMongodbTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRecrawlPolicy` <a name="PutRecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy"></a>

```go
func PutRecrawlPolicy(value GlueCrawlerRecrawlPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `PutS3Target` <a name="PutS3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target"></a>

```go
func PutS3Target(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchemaChangePolicy` <a name="PutSchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy"></a>

```go
func PutSchemaChangePolicy(value GlueCrawlerSchemaChangePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `ResetCatalogTarget` <a name="ResetCatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetCatalogTarget"></a>

```go
func ResetCatalogTarget()
```

##### `ResetClassifiers` <a name="ResetClassifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetClassifiers"></a>

```go
func ResetClassifiers()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetDeltaTarget` <a name="ResetDeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDeltaTarget"></a>

```go
func ResetDeltaTarget()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDynamodbTarget` <a name="ResetDynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDynamodbTarget"></a>

```go
func ResetDynamodbTarget()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetId"></a>

```go
func ResetId()
```

##### `ResetJdbcTarget` <a name="ResetJdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetJdbcTarget"></a>

```go
func ResetJdbcTarget()
```

##### `ResetLakeFormationConfiguration` <a name="ResetLakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLakeFormationConfiguration"></a>

```go
func ResetLakeFormationConfiguration()
```

##### `ResetLineageConfiguration` <a name="ResetLineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLineageConfiguration"></a>

```go
func ResetLineageConfiguration()
```

##### `ResetMongodbTarget` <a name="ResetMongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetMongodbTarget"></a>

```go
func ResetMongodbTarget()
```

##### `ResetRecrawlPolicy` <a name="ResetRecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetRecrawlPolicy"></a>

```go
func ResetRecrawlPolicy()
```

##### `ResetS3Target` <a name="ResetS3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetS3Target"></a>

```go
func ResetS3Target()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetSchemaChangePolicy` <a name="ResetSchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchemaChangePolicy"></a>

```go
func ResetSchemaChangePolicy()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSecurityConfiguration"></a>

```go
func ResetSecurityConfiguration()
```

##### `ResetTablePrefix` <a name="ResetTablePrefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTablePrefix"></a>

```go
func ResetTablePrefix()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.GlueCrawler_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.GlueCrawler_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.GlueCrawler_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTarget">CatalogTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList">GlueCrawlerCatalogTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTarget">DeltaTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList">GlueCrawlerDeltaTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTarget">DynamodbTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList">GlueCrawlerDynamodbTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTarget">JdbcTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList">GlueCrawlerJdbcTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfiguration">LineageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference">GlueCrawlerLineageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTarget">MongodbTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList">GlueCrawlerMongodbTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicy">RecrawlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3Target">S3Target</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList">GlueCrawlerS3TargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicy">SchemaChangePolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTargetInput">CatalogTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiersInput">ClassifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configurationInput">ConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTargetInput">DeltaTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTargetInput">DynamodbTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTargetInput">JdbcTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput">LakeFormationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfigurationInput">LineageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTargetInput">MongodbTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicyInput">RecrawlPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3TargetInput">S3TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicyInput">SchemaChangePolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefixInput">TablePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiers">Classifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefix">TablePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CatalogTarget`<sup>Required</sup> <a name="CatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTarget"></a>

```go
func CatalogTarget() GlueCrawlerCatalogTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList">GlueCrawlerCatalogTargetList</a>

---

##### `DeltaTarget`<sup>Required</sup> <a name="DeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTarget"></a>

```go
func DeltaTarget() GlueCrawlerDeltaTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList">GlueCrawlerDeltaTargetList</a>

---

##### `DynamodbTarget`<sup>Required</sup> <a name="DynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTarget"></a>

```go
func DynamodbTarget() GlueCrawlerDynamodbTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList">GlueCrawlerDynamodbTargetList</a>

---

##### `JdbcTarget`<sup>Required</sup> <a name="JdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTarget"></a>

```go
func JdbcTarget() GlueCrawlerJdbcTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList">GlueCrawlerJdbcTargetList</a>

---

##### `LakeFormationConfiguration`<sup>Required</sup> <a name="LakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfiguration"></a>

```go
func LakeFormationConfiguration() GlueCrawlerLakeFormationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a>

---

##### `LineageConfiguration`<sup>Required</sup> <a name="LineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfiguration"></a>

```go
func LineageConfiguration() GlueCrawlerLineageConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference">GlueCrawlerLineageConfigurationOutputReference</a>

---

##### `MongodbTarget`<sup>Required</sup> <a name="MongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTarget"></a>

```go
func MongodbTarget() GlueCrawlerMongodbTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList">GlueCrawlerMongodbTargetList</a>

---

##### `RecrawlPolicy`<sup>Required</sup> <a name="RecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicy"></a>

```go
func RecrawlPolicy() GlueCrawlerRecrawlPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a>

---

##### `S3Target`<sup>Required</sup> <a name="S3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3Target"></a>

```go
func S3Target() GlueCrawlerS3TargetList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList">GlueCrawlerS3TargetList</a>

---

##### `SchemaChangePolicy`<sup>Required</sup> <a name="SchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicy"></a>

```go
func SchemaChangePolicy() GlueCrawlerSchemaChangePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a>

---

##### `CatalogTargetInput`<sup>Optional</sup> <a name="CatalogTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTargetInput"></a>

```go
func CatalogTargetInput() interface{}
```

- *Type:* interface{}

---

##### `ClassifiersInput`<sup>Optional</sup> <a name="ClassifiersInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiersInput"></a>

```go
func ClassifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configurationInput"></a>

```go
func ConfigurationInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DeltaTargetInput`<sup>Optional</sup> <a name="DeltaTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTargetInput"></a>

```go
func DeltaTargetInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DynamodbTargetInput`<sup>Optional</sup> <a name="DynamodbTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTargetInput"></a>

```go
func DynamodbTargetInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JdbcTargetInput`<sup>Optional</sup> <a name="JdbcTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTargetInput"></a>

```go
func JdbcTargetInput() interface{}
```

- *Type:* interface{}

---

##### `LakeFormationConfigurationInput`<sup>Optional</sup> <a name="LakeFormationConfigurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput"></a>

```go
func LakeFormationConfigurationInput() GlueCrawlerLakeFormationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `LineageConfigurationInput`<sup>Optional</sup> <a name="LineageConfigurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfigurationInput"></a>

```go
func LineageConfigurationInput() GlueCrawlerLineageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---

##### `MongodbTargetInput`<sup>Optional</sup> <a name="MongodbTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTargetInput"></a>

```go
func MongodbTargetInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecrawlPolicyInput`<sup>Optional</sup> <a name="RecrawlPolicyInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicyInput"></a>

```go
func RecrawlPolicyInput() GlueCrawlerRecrawlPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `S3TargetInput`<sup>Optional</sup> <a name="S3TargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3TargetInput"></a>

```go
func S3TargetInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `SchemaChangePolicyInput`<sup>Optional</sup> <a name="SchemaChangePolicyInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicyInput"></a>

```go
func SchemaChangePolicyInput() GlueCrawlerSchemaChangePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfigurationInput"></a>

```go
func SecurityConfigurationInput() *string
```

- *Type:* *string

---

##### `TablePrefixInput`<sup>Optional</sup> <a name="TablePrefixInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefixInput"></a>

```go
func TablePrefixInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Classifiers`<sup>Required</sup> <a name="Classifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiers"></a>

```go
func Classifiers() *[]*string
```

- *Type:* *[]*string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfiguration"></a>

```go
func SecurityConfiguration() *string
```

- *Type:* *string

---

##### `TablePrefix`<sup>Required</sup> <a name="TablePrefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefix"></a>

```go
func TablePrefix() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCrawlerCatalogTarget <a name="GlueCrawlerCatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

&gluecrawler.GlueCrawlerCatalogTarget {
	DatabaseName: *string,
	Tables: *[]*string,
	ConnectionName: *string,
	DlqEventQueueArn: *string,
	EventQueueArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.tables">Tables</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tables GlueCrawler#tables}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.eventQueueArn">EventQueueArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.tables"></a>

```go
Tables *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tables GlueCrawler#tables}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `DlqEventQueueArn`<sup>Optional</sup> <a name="DlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.dlqEventQueueArn"></a>

```go
DlqEventQueueArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}.

---

##### `EventQueueArn`<sup>Optional</sup> <a name="EventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.eventQueueArn"></a>

```go
EventQueueArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}.

---

### GlueCrawlerConfig <a name="GlueCrawlerConfig" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

&gluecrawler.GlueCrawlerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseName: *string,
	Name: *string,
	Role: *string,
	CatalogTarget: interface{},
	Classifiers: *[]*string,
	Configuration: *string,
	DeltaTarget: interface{},
	Description: *string,
	DynamodbTarget: interface{},
	Id: *string,
	JdbcTarget: interface{},
	LakeFormationConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.glueCrawler.GlueCrawlerLakeFormationConfiguration,
	LineageConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.glueCrawler.GlueCrawlerLineageConfiguration,
	MongodbTarget: interface{},
	RecrawlPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.glueCrawler.GlueCrawlerRecrawlPolicy,
	S3Target: interface{},
	Schedule: *string,
	SchemaChangePolicy: github.com/cdktf/cdktf-provider-aws-go/aws.glueCrawler.GlueCrawlerSchemaChangePolicy,
	SecurityConfiguration: *string,
	TablePrefix: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.catalogTarget">CatalogTarget</a></code> | <code>interface{}</code> | catalog_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.classifiers">Classifiers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.configuration">Configuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.deltaTarget">DeltaTarget</a></code> | <code>interface{}</code> | delta_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dynamodbTarget">DynamodbTarget</a></code> | <code>interface{}</code> | dynamodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.jdbcTarget">JdbcTarget</a></code> | <code>interface{}</code> | jdbc_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | lake_formation_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lineageConfiguration">LineageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | lineage_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.mongodbTarget">MongodbTarget</a></code> | <code>interface{}</code> | mongodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy">RecrawlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | recrawl_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.s3Target">S3Target</a></code> | <code>interface{}</code> | s3_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schedule">Schedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy">SchemaChangePolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | schema_change_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tablePrefix">TablePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}.

---

##### `CatalogTarget`<sup>Optional</sup> <a name="CatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.catalogTarget"></a>

```go
CatalogTarget interface{}
```

- *Type:* interface{}

catalog_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#catalog_target GlueCrawler#catalog_target}

---

##### `Classifiers`<sup>Optional</sup> <a name="Classifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.classifiers"></a>

```go
Classifiers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.configuration"></a>

```go
Configuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}.

---

##### `DeltaTarget`<sup>Optional</sup> <a name="DeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.deltaTarget"></a>

```go
DeltaTarget interface{}
```

- *Type:* interface{}

delta_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_target GlueCrawler#delta_target}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}.

---

##### `DynamodbTarget`<sup>Optional</sup> <a name="DynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dynamodbTarget"></a>

```go
DynamodbTarget interface{}
```

- *Type:* interface{}

dynamodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dynamodb_target GlueCrawler#dynamodb_target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JdbcTarget`<sup>Optional</sup> <a name="JdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.jdbcTarget"></a>

```go
JdbcTarget interface{}
```

- *Type:* interface{}

jdbc_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#jdbc_target GlueCrawler#jdbc_target}

---

##### `LakeFormationConfiguration`<sup>Optional</sup> <a name="LakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration"></a>

```go
LakeFormationConfiguration GlueCrawlerLakeFormationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

lake_formation_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `LineageConfiguration`<sup>Optional</sup> <a name="LineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lineageConfiguration"></a>

```go
LineageConfiguration GlueCrawlerLineageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

lineage_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lineage_configuration GlueCrawler#lineage_configuration}

---

##### `MongodbTarget`<sup>Optional</sup> <a name="MongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.mongodbTarget"></a>

```go
MongodbTarget interface{}
```

- *Type:* interface{}

mongodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#mongodb_target GlueCrawler#mongodb_target}

---

##### `RecrawlPolicy`<sup>Optional</sup> <a name="RecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy"></a>

```go
RecrawlPolicy GlueCrawlerRecrawlPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

recrawl_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `S3Target`<sup>Optional</sup> <a name="S3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.s3Target"></a>

```go
S3Target interface{}
```

- *Type:* interface{}

s3_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#s3_target GlueCrawler#s3_target}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}.

---

##### `SchemaChangePolicy`<sup>Optional</sup> <a name="SchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy"></a>

```go
SchemaChangePolicy GlueCrawlerSchemaChangePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

schema_change_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.securityConfiguration"></a>

```go
SecurityConfiguration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}.

---

##### `TablePrefix`<sup>Optional</sup> <a name="TablePrefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tablePrefix"></a>

```go
TablePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}.

---

### GlueCrawlerDeltaTarget <a name="GlueCrawlerDeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

&gluecrawler.GlueCrawlerDeltaTarget {
	DeltaTables: *[]*string,
	WriteManifest: interface{},
	ConnectionName: *string,
	CreateNativeDeltaTable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.deltaTables">DeltaTables</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_tables GlueCrawler#delta_tables}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.writeManifest">WriteManifest</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#write_manifest GlueCrawler#write_manifest}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.createNativeDeltaTable">CreateNativeDeltaTable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#create_native_delta_table GlueCrawler#create_native_delta_table}. |

---

##### `DeltaTables`<sup>Required</sup> <a name="DeltaTables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.deltaTables"></a>

```go
DeltaTables *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_tables GlueCrawler#delta_tables}.

---

##### `WriteManifest`<sup>Required</sup> <a name="WriteManifest" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.writeManifest"></a>

```go
WriteManifest interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#write_manifest GlueCrawler#write_manifest}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `CreateNativeDeltaTable`<sup>Optional</sup> <a name="CreateNativeDeltaTable" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.createNativeDeltaTable"></a>

```go
CreateNativeDeltaTable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#create_native_delta_table GlueCrawler#create_native_delta_table}.

---

### GlueCrawlerDynamodbTarget <a name="GlueCrawlerDynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

&gluecrawler.GlueCrawlerDynamodbTarget {
	Path: *string,
	ScanAll: interface{},
	ScanRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanAll">ScanAll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanRate">ScanRate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_rate GlueCrawler#scan_rate}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `ScanAll`<sup>Optional</sup> <a name="ScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanAll"></a>

```go
ScanAll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}.

---

##### `ScanRate`<sup>Optional</sup> <a name="ScanRate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanRate"></a>

```go
ScanRate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_rate GlueCrawler#scan_rate}.

---

### GlueCrawlerJdbcTarget <a name="GlueCrawlerJdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

&gluecrawler.GlueCrawlerJdbcTarget {
	ConnectionName: *string,
	Path: *string,
	EnableAdditionalMetadata: *[]*string,
	Exclusions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.enableAdditionalMetadata">EnableAdditionalMetadata</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}. |

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `EnableAdditionalMetadata`<sup>Optional</sup> <a name="EnableAdditionalMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.enableAdditionalMetadata"></a>

```go
EnableAdditionalMetadata *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}.

---

### GlueCrawlerLakeFormationConfiguration <a name="GlueCrawlerLakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

&gluecrawler.GlueCrawlerLakeFormationConfiguration {
	AccountId: *string,
	UseLakeFormationCredentials: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#account_id GlueCrawler#account_id}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials">UseLakeFormationCredentials</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#account_id GlueCrawler#account_id}.

---

##### `UseLakeFormationCredentials`<sup>Optional</sup> <a name="UseLakeFormationCredentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials"></a>

```go
UseLakeFormationCredentials interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}.

---

### GlueCrawlerLineageConfiguration <a name="GlueCrawlerLineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

&gluecrawler.GlueCrawlerLineageConfiguration {
	CrawlerLineageSettings: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.property.crawlerLineageSettings">CrawlerLineageSettings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}. |

---

##### `CrawlerLineageSettings`<sup>Optional</sup> <a name="CrawlerLineageSettings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.property.crawlerLineageSettings"></a>

```go
CrawlerLineageSettings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}.

---

### GlueCrawlerMongodbTarget <a name="GlueCrawlerMongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

&gluecrawler.GlueCrawlerMongodbTarget {
	ConnectionName: *string,
	Path: *string,
	ScanAll: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.scanAll">ScanAll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}. |

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `ScanAll`<sup>Optional</sup> <a name="ScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.scanAll"></a>

```go
ScanAll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}.

---

### GlueCrawlerRecrawlPolicy <a name="GlueCrawlerRecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

&gluecrawler.GlueCrawlerRecrawlPolicy {
	RecrawlBehavior: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior">RecrawlBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}. |

---

##### `RecrawlBehavior`<sup>Optional</sup> <a name="RecrawlBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior"></a>

```go
RecrawlBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}.

---

### GlueCrawlerS3Target <a name="GlueCrawlerS3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

&gluecrawler.GlueCrawlerS3Target {
	Path: *string,
	ConnectionName: *string,
	DlqEventQueueArn: *string,
	EventQueueArn: *string,
	Exclusions: *[]*string,
	SampleSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.eventQueueArn">EventQueueArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.sampleSize">SampleSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#sample_size GlueCrawler#sample_size}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `DlqEventQueueArn`<sup>Optional</sup> <a name="DlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.dlqEventQueueArn"></a>

```go
DlqEventQueueArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}.

---

##### `EventQueueArn`<sup>Optional</sup> <a name="EventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.eventQueueArn"></a>

```go
EventQueueArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}.

---

##### `SampleSize`<sup>Optional</sup> <a name="SampleSize" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.sampleSize"></a>

```go
SampleSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#sample_size GlueCrawler#sample_size}.

---

### GlueCrawlerSchemaChangePolicy <a name="GlueCrawlerSchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

&gluecrawler.GlueCrawlerSchemaChangePolicy {
	DeleteBehavior: *string,
	UpdateBehavior: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior">DeleteBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delete_behavior GlueCrawler#delete_behavior}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior">UpdateBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#update_behavior GlueCrawler#update_behavior}. |

---

##### `DeleteBehavior`<sup>Optional</sup> <a name="DeleteBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior"></a>

```go
DeleteBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delete_behavior GlueCrawler#delete_behavior}.

---

##### `UpdateBehavior`<sup>Optional</sup> <a name="UpdateBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior"></a>

```go
UpdateBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#update_behavior GlueCrawler#update_behavior}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCrawlerCatalogTargetList <a name="GlueCrawlerCatalogTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerCatalogTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerCatalogTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get"></a>

```go
func Get(index *f64) GlueCrawlerCatalogTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerCatalogTargetOutputReference <a name="GlueCrawlerCatalogTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerCatalogTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerCatalogTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetDlqEventQueueArn">ResetDlqEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetEventQueueArn">ResetEventQueueArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetDlqEventQueueArn` <a name="ResetDlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetDlqEventQueueArn"></a>

```go
func ResetDlqEventQueueArn()
```

##### `ResetEventQueueArn` <a name="ResetEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetEventQueueArn"></a>

```go
func ResetEventQueueArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArnInput">DlqEventQueueArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArnInput">EventQueueArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tablesInput">TablesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArn">EventQueueArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tables">Tables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DlqEventQueueArnInput`<sup>Optional</sup> <a name="DlqEventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArnInput"></a>

```go
func DlqEventQueueArnInput() *string
```

- *Type:* *string

---

##### `EventQueueArnInput`<sup>Optional</sup> <a name="EventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArnInput"></a>

```go
func EventQueueArnInput() *string
```

- *Type:* *string

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tablesInput"></a>

```go
func TablesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DlqEventQueueArn`<sup>Required</sup> <a name="DlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArn"></a>

```go
func DlqEventQueueArn() *string
```

- *Type:* *string

---

##### `EventQueueArn`<sup>Required</sup> <a name="EventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArn"></a>

```go
func EventQueueArn() *string
```

- *Type:* *string

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tables"></a>

```go
func Tables() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerDeltaTargetList <a name="GlueCrawlerDeltaTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerDeltaTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerDeltaTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get"></a>

```go
func Get(index *f64) GlueCrawlerDeltaTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerDeltaTargetOutputReference <a name="GlueCrawlerDeltaTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerDeltaTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerDeltaTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resetCreateNativeDeltaTable">ResetCreateNativeDeltaTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetCreateNativeDeltaTable` <a name="ResetCreateNativeDeltaTable" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resetCreateNativeDeltaTable"></a>

```go
func ResetCreateNativeDeltaTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.createNativeDeltaTableInput">CreateNativeDeltaTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTablesInput">DeltaTablesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifestInput">WriteManifestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.createNativeDeltaTable">CreateNativeDeltaTable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTables">DeltaTables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifest">WriteManifest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `CreateNativeDeltaTableInput`<sup>Optional</sup> <a name="CreateNativeDeltaTableInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.createNativeDeltaTableInput"></a>

```go
func CreateNativeDeltaTableInput() interface{}
```

- *Type:* interface{}

---

##### `DeltaTablesInput`<sup>Optional</sup> <a name="DeltaTablesInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTablesInput"></a>

```go
func DeltaTablesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WriteManifestInput`<sup>Optional</sup> <a name="WriteManifestInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifestInput"></a>

```go
func WriteManifestInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `CreateNativeDeltaTable`<sup>Required</sup> <a name="CreateNativeDeltaTable" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.createNativeDeltaTable"></a>

```go
func CreateNativeDeltaTable() interface{}
```

- *Type:* interface{}

---

##### `DeltaTables`<sup>Required</sup> <a name="DeltaTables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTables"></a>

```go
func DeltaTables() *[]*string
```

- *Type:* *[]*string

---

##### `WriteManifest`<sup>Required</sup> <a name="WriteManifest" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifest"></a>

```go
func WriteManifest() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerDynamodbTargetList <a name="GlueCrawlerDynamodbTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerDynamodbTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerDynamodbTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get"></a>

```go
func Get(index *f64) GlueCrawlerDynamodbTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerDynamodbTargetOutputReference <a name="GlueCrawlerDynamodbTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerDynamodbTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerDynamodbTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanAll">ResetScanAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanRate">ResetScanRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScanAll` <a name="ResetScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanAll"></a>

```go
func ResetScanAll()
```

##### `ResetScanRate` <a name="ResetScanRate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanRate"></a>

```go
func ResetScanRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAllInput">ScanAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRateInput">ScanRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAll">ScanAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRate">ScanRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ScanAllInput`<sup>Optional</sup> <a name="ScanAllInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAllInput"></a>

```go
func ScanAllInput() interface{}
```

- *Type:* interface{}

---

##### `ScanRateInput`<sup>Optional</sup> <a name="ScanRateInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRateInput"></a>

```go
func ScanRateInput() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ScanAll`<sup>Required</sup> <a name="ScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAll"></a>

```go
func ScanAll() interface{}
```

- *Type:* interface{}

---

##### `ScanRate`<sup>Required</sup> <a name="ScanRate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRate"></a>

```go
func ScanRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerJdbcTargetList <a name="GlueCrawlerJdbcTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerJdbcTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerJdbcTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get"></a>

```go
func Get(index *f64) GlueCrawlerJdbcTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerJdbcTargetOutputReference <a name="GlueCrawlerJdbcTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerJdbcTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerJdbcTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetEnableAdditionalMetadata">ResetEnableAdditionalMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableAdditionalMetadata` <a name="ResetEnableAdditionalMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetEnableAdditionalMetadata"></a>

```go
func ResetEnableAdditionalMetadata()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadataInput">EnableAdditionalMetadataInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadata">EnableAdditionalMetadata</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `EnableAdditionalMetadataInput`<sup>Optional</sup> <a name="EnableAdditionalMetadataInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadataInput"></a>

```go
func EnableAdditionalMetadataInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `EnableAdditionalMetadata`<sup>Required</sup> <a name="EnableAdditionalMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadata"></a>

```go
func EnableAdditionalMetadata() *[]*string
```

- *Type:* *[]*string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerLakeFormationConfigurationOutputReference <a name="GlueCrawlerLakeFormationConfigurationOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerLakeFormationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCrawlerLakeFormationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials">ResetUseLakeFormationCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetUseLakeFormationCredentials` <a name="ResetUseLakeFormationCredentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials"></a>

```go
func ResetUseLakeFormationCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput">UseLakeFormationCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials">UseLakeFormationCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `UseLakeFormationCredentialsInput`<sup>Optional</sup> <a name="UseLakeFormationCredentialsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput"></a>

```go
func UseLakeFormationCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `UseLakeFormationCredentials`<sup>Required</sup> <a name="UseLakeFormationCredentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials"></a>

```go
func UseLakeFormationCredentials() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueCrawlerLakeFormationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---


### GlueCrawlerLineageConfigurationOutputReference <a name="GlueCrawlerLineageConfigurationOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerLineageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCrawlerLineageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resetCrawlerLineageSettings">ResetCrawlerLineageSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrawlerLineageSettings` <a name="ResetCrawlerLineageSettings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resetCrawlerLineageSettings"></a>

```go
func ResetCrawlerLineageSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettingsInput">CrawlerLineageSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettings">CrawlerLineageSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrawlerLineageSettingsInput`<sup>Optional</sup> <a name="CrawlerLineageSettingsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettingsInput"></a>

```go
func CrawlerLineageSettingsInput() *string
```

- *Type:* *string

---

##### `CrawlerLineageSettings`<sup>Required</sup> <a name="CrawlerLineageSettings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettings"></a>

```go
func CrawlerLineageSettings() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueCrawlerLineageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---


### GlueCrawlerMongodbTargetList <a name="GlueCrawlerMongodbTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerMongodbTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerMongodbTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get"></a>

```go
func Get(index *f64) GlueCrawlerMongodbTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerMongodbTargetOutputReference <a name="GlueCrawlerMongodbTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerMongodbTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerMongodbTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resetScanAll">ResetScanAll</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScanAll` <a name="ResetScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resetScanAll"></a>

```go
func ResetScanAll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAllInput">ScanAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAll">ScanAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ScanAllInput`<sup>Optional</sup> <a name="ScanAllInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAllInput"></a>

```go
func ScanAllInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ScanAll`<sup>Required</sup> <a name="ScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAll"></a>

```go
func ScanAll() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerRecrawlPolicyOutputReference <a name="GlueCrawlerRecrawlPolicyOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerRecrawlPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCrawlerRecrawlPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior">ResetRecrawlBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRecrawlBehavior` <a name="ResetRecrawlBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior"></a>

```go
func ResetRecrawlBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput">RecrawlBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior">RecrawlBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecrawlBehaviorInput`<sup>Optional</sup> <a name="RecrawlBehaviorInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput"></a>

```go
func RecrawlBehaviorInput() *string
```

- *Type:* *string

---

##### `RecrawlBehavior`<sup>Required</sup> <a name="RecrawlBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior"></a>

```go
func RecrawlBehavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueCrawlerRecrawlPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---


### GlueCrawlerS3TargetList <a name="GlueCrawlerS3TargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerS3TargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerS3TargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get"></a>

```go
func Get(index *f64) GlueCrawlerS3TargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerS3TargetOutputReference <a name="GlueCrawlerS3TargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerS3TargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerS3TargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetDlqEventQueueArn">ResetDlqEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetEventQueueArn">ResetEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetSampleSize">ResetSampleSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetDlqEventQueueArn` <a name="ResetDlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetDlqEventQueueArn"></a>

```go
func ResetDlqEventQueueArn()
```

##### `ResetEventQueueArn` <a name="ResetEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetEventQueueArn"></a>

```go
func ResetEventQueueArn()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetSampleSize` <a name="ResetSampleSize" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetSampleSize"></a>

```go
func ResetSampleSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArnInput">DlqEventQueueArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArnInput">EventQueueArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSizeInput">SampleSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArn">EventQueueArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSize">SampleSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `DlqEventQueueArnInput`<sup>Optional</sup> <a name="DlqEventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArnInput"></a>

```go
func DlqEventQueueArnInput() *string
```

- *Type:* *string

---

##### `EventQueueArnInput`<sup>Optional</sup> <a name="EventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArnInput"></a>

```go
func EventQueueArnInput() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SampleSizeInput`<sup>Optional</sup> <a name="SampleSizeInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSizeInput"></a>

```go
func SampleSizeInput() *f64
```

- *Type:* *f64

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `DlqEventQueueArn`<sup>Required</sup> <a name="DlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArn"></a>

```go
func DlqEventQueueArn() *string
```

- *Type:* *string

---

##### `EventQueueArn`<sup>Required</sup> <a name="EventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArn"></a>

```go
func EventQueueArn() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SampleSize`<sup>Required</sup> <a name="SampleSize" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSize"></a>

```go
func SampleSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerSchemaChangePolicyOutputReference <a name="GlueCrawlerSchemaChangePolicyOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecrawler"

gluecrawler.NewGlueCrawlerSchemaChangePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCrawlerSchemaChangePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior">ResetDeleteBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior">ResetUpdateBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteBehavior` <a name="ResetDeleteBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior"></a>

```go
func ResetDeleteBehavior()
```

##### `ResetUpdateBehavior` <a name="ResetUpdateBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior"></a>

```go
func ResetUpdateBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput">DeleteBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput">UpdateBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior">DeleteBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior">UpdateBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteBehaviorInput`<sup>Optional</sup> <a name="DeleteBehaviorInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput"></a>

```go
func DeleteBehaviorInput() *string
```

- *Type:* *string

---

##### `UpdateBehaviorInput`<sup>Optional</sup> <a name="UpdateBehaviorInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput"></a>

```go
func UpdateBehaviorInput() *string
```

- *Type:* *string

---

##### `DeleteBehavior`<sup>Required</sup> <a name="DeleteBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior"></a>

```go
func DeleteBehavior() *string
```

- *Type:* *string

---

##### `UpdateBehavior`<sup>Required</sup> <a name="UpdateBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior"></a>

```go
func UpdateBehavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueCrawlerSchemaChangePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---



