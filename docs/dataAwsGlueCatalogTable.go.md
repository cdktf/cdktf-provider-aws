# `dataAwsGlueCatalogTable` Submodule <a name="`dataAwsGlueCatalogTable` Submodule" id="@cdktf/provider-aws.dataAwsGlueCatalogTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlueCatalogTable <a name="DataAwsGlueCatalogTable" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table aws_glue_catalog_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTable(scope Construct, id *string, config DataAwsGlueCatalogTableConfig) DataAwsGlueCatalogTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig">DataAwsGlueCatalogTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig">DataAwsGlueCatalogTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.resetQueryAsOfTime">ResetQueryAsOfTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.resetTransactionId">ResetTransactionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.resetId"></a>

```go
func ResetId()
```

##### `ResetQueryAsOfTime` <a name="ResetQueryAsOfTime" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.resetQueryAsOfTime"></a>

```go
func ResetQueryAsOfTime()
```

##### `ResetTransactionId` <a name="ResetTransactionId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.resetTransactionId"></a>

```go
func ResetTransactionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.DataAwsGlueCatalogTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.DataAwsGlueCatalogTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.DataAwsGlueCatalogTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.parameters">Parameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.partitionIndex">PartitionIndex</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList">DataAwsGlueCatalogTablePartitionIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.partitionKeys">PartitionKeys</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList">DataAwsGlueCatalogTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.retention">Retention</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList">DataAwsGlueCatalogTableStorageDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.tableType">TableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList">DataAwsGlueCatalogTableTargetTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.viewExpandedText">ViewExpandedText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.viewOriginalText">ViewOriginalText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.queryAsOfTimeInput">QueryAsOfTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.transactionIdInput">TransactionIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.queryAsOfTime">QueryAsOfTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.transactionId">TransactionId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.partitionIndex"></a>

```go
func PartitionIndex() DataAwsGlueCatalogTablePartitionIndexList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList">DataAwsGlueCatalogTablePartitionIndexList</a>

---

##### `PartitionKeys`<sup>Required</sup> <a name="PartitionKeys" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.partitionKeys"></a>

```go
func PartitionKeys() DataAwsGlueCatalogTablePartitionKeysList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList">DataAwsGlueCatalogTablePartitionKeysList</a>

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.retention"></a>

```go
func Retention() *f64
```

- *Type:* *f64

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.storageDescriptor"></a>

```go
func StorageDescriptor() DataAwsGlueCatalogTableStorageDescriptorList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList">DataAwsGlueCatalogTableStorageDescriptorList</a>

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.tableType"></a>

```go
func TableType() *string
```

- *Type:* *string

---

##### `TargetTable`<sup>Required</sup> <a name="TargetTable" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.targetTable"></a>

```go
func TargetTable() DataAwsGlueCatalogTableTargetTableList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList">DataAwsGlueCatalogTableTargetTableList</a>

---

##### `ViewExpandedText`<sup>Required</sup> <a name="ViewExpandedText" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.viewExpandedText"></a>

```go
func ViewExpandedText() *string
```

- *Type:* *string

---

##### `ViewOriginalText`<sup>Required</sup> <a name="ViewOriginalText" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.viewOriginalText"></a>

```go
func ViewOriginalText() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryAsOfTimeInput`<sup>Optional</sup> <a name="QueryAsOfTimeInput" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.queryAsOfTimeInput"></a>

```go
func QueryAsOfTimeInput() *string
```

- *Type:* *string

---

##### `TransactionIdInput`<sup>Optional</sup> <a name="TransactionIdInput" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.transactionIdInput"></a>

```go
func TransactionIdInput() *f64
```

- *Type:* *f64

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryAsOfTime`<sup>Required</sup> <a name="QueryAsOfTime" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.queryAsOfTime"></a>

```go
func QueryAsOfTime() *string
```

- *Type:* *string

---

##### `TransactionId`<sup>Required</sup> <a name="TransactionId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.transactionId"></a>

```go
func TransactionId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlueCatalogTableConfig <a name="DataAwsGlueCatalogTableConfig" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

&dataawsgluecatalogtable.DataAwsGlueCatalogTableConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseName: *string,
	Name: *string,
	CatalogId: *string,
	Id: *string,
	QueryAsOfTime: *string,
	TransactionId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#database_name DataAwsGlueCatalogTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#name DataAwsGlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#catalog_id DataAwsGlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#id DataAwsGlueCatalogTable#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.queryAsOfTime">QueryAsOfTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#query_as_of_time DataAwsGlueCatalogTable#query_as_of_time}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.transactionId">TransactionId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#transaction_id DataAwsGlueCatalogTable#transaction_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#database_name DataAwsGlueCatalogTable#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#name DataAwsGlueCatalogTable#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#catalog_id DataAwsGlueCatalogTable#catalog_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#id DataAwsGlueCatalogTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QueryAsOfTime`<sup>Optional</sup> <a name="QueryAsOfTime" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.queryAsOfTime"></a>

```go
QueryAsOfTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#query_as_of_time DataAwsGlueCatalogTable#query_as_of_time}.

---

##### `TransactionId`<sup>Optional</sup> <a name="TransactionId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableConfig.property.transactionId"></a>

```go
TransactionId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#transaction_id DataAwsGlueCatalogTable#transaction_id}.

---

### DataAwsGlueCatalogTablePartitionIndex <a name="DataAwsGlueCatalogTablePartitionIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

&dataawsgluecatalogtable.DataAwsGlueCatalogTablePartitionIndex {

}
```


### DataAwsGlueCatalogTablePartitionKeys <a name="DataAwsGlueCatalogTablePartitionKeys" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

&dataawsgluecatalogtable.DataAwsGlueCatalogTablePartitionKeys {

}
```


### DataAwsGlueCatalogTableStorageDescriptor <a name="DataAwsGlueCatalogTableStorageDescriptor" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

&dataawsgluecatalogtable.DataAwsGlueCatalogTableStorageDescriptor {

}
```


### DataAwsGlueCatalogTableStorageDescriptorColumns <a name="DataAwsGlueCatalogTableStorageDescriptorColumns" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

&dataawsgluecatalogtable.DataAwsGlueCatalogTableStorageDescriptorColumns {

}
```


### DataAwsGlueCatalogTableStorageDescriptorSchemaReference <a name="DataAwsGlueCatalogTableStorageDescriptorSchemaReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

&dataawsgluecatalogtable.DataAwsGlueCatalogTableStorageDescriptorSchemaReference {

}
```


### DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId <a name="DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

&dataawsgluecatalogtable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {

}
```


### DataAwsGlueCatalogTableStorageDescriptorSerDeInfo <a name="DataAwsGlueCatalogTableStorageDescriptorSerDeInfo" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

&dataawsgluecatalogtable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfo {

}
```


### DataAwsGlueCatalogTableStorageDescriptorSkewedInfo <a name="DataAwsGlueCatalogTableStorageDescriptorSkewedInfo" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

&dataawsgluecatalogtable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfo {

}
```


### DataAwsGlueCatalogTableStorageDescriptorSortColumns <a name="DataAwsGlueCatalogTableStorageDescriptorSortColumns" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

&dataawsgluecatalogtable.DataAwsGlueCatalogTableStorageDescriptorSortColumns {

}
```


### DataAwsGlueCatalogTableTargetTable <a name="DataAwsGlueCatalogTableTargetTable" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

&dataawsgluecatalogtable.DataAwsGlueCatalogTableTargetTable {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlueCatalogTablePartitionIndexList <a name="DataAwsGlueCatalogTablePartitionIndexList" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTablePartitionIndexList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogTablePartitionIndexList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogTablePartitionIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogTablePartitionIndexOutputReference <a name="DataAwsGlueCatalogTablePartitionIndexOutputReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTablePartitionIndexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogTablePartitionIndexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.indexStatus">IndexStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.keys">Keys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndex">DataAwsGlueCatalogTablePartitionIndex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `IndexStatus`<sup>Required</sup> <a name="IndexStatus" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.indexStatus"></a>

```go
func IndexStatus() *string
```

- *Type:* *string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.keys"></a>

```go
func Keys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndexOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogTablePartitionIndex
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionIndex">DataAwsGlueCatalogTablePartitionIndex</a>

---


### DataAwsGlueCatalogTablePartitionKeysList <a name="DataAwsGlueCatalogTablePartitionKeysList" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTablePartitionKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogTablePartitionKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogTablePartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogTablePartitionKeysOutputReference <a name="DataAwsGlueCatalogTablePartitionKeysOutputReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTablePartitionKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogTablePartitionKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeys">DataAwsGlueCatalogTablePartitionKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogTablePartitionKeys
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTablePartitionKeys">DataAwsGlueCatalogTablePartitionKeys</a>

---


### DataAwsGlueCatalogTableStorageDescriptorColumnsList <a name="DataAwsGlueCatalogTableStorageDescriptorColumnsList" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogTableStorageDescriptorColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference <a name="DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters">Parameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumns">DataAwsGlueCatalogTableStorageDescriptorColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogTableStorageDescriptorColumns
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumns">DataAwsGlueCatalogTableStorageDescriptorColumns</a>

---


### DataAwsGlueCatalogTableStorageDescriptorList <a name="DataAwsGlueCatalogTableStorageDescriptorList" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogTableStorageDescriptorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogTableStorageDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogTableStorageDescriptorOutputReference <a name="DataAwsGlueCatalogTableStorageDescriptorOutputReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogTableStorageDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns">BucketColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList">DataAwsGlueCatalogTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.compressed">Compressed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets">NumberOfBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.parameters">Parameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.schemaReference">SchemaReference</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList">DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo">SerDeInfo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList">DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList">DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.sortColumns">SortColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList">DataAwsGlueCatalogTableStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories">StoredAsSubDirectories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptor">DataAwsGlueCatalogTableStorageDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketColumns`<sup>Required</sup> <a name="BucketColumns" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns"></a>

```go
func BucketColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.columns"></a>

```go
func Columns() DataAwsGlueCatalogTableStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorColumnsList">DataAwsGlueCatalogTableStorageDescriptorColumnsList</a>

---

##### `Compressed`<sup>Required</sup> <a name="Compressed" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.compressed"></a>

```go
func Compressed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.inputFormat"></a>

```go
func InputFormat() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NumberOfBuckets`<sup>Required</sup> <a name="NumberOfBuckets" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```go
func NumberOfBuckets() *f64
```

- *Type:* *f64

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SchemaReference`<sup>Required</sup> <a name="SchemaReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.schemaReference"></a>

```go
func SchemaReference() DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList">DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList</a>

---

##### `SerDeInfo`<sup>Required</sup> <a name="SerDeInfo" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo"></a>

```go
func SerDeInfo() DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList">DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList</a>

---

##### `SkewedInfo`<sup>Required</sup> <a name="SkewedInfo" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```go
func SkewedInfo() DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList">DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList</a>

---

##### `SortColumns`<sup>Required</sup> <a name="SortColumns" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.sortColumns"></a>

```go
func SortColumns() DataAwsGlueCatalogTableStorageDescriptorSortColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList">DataAwsGlueCatalogTableStorageDescriptorSortColumnsList</a>

---

##### `StoredAsSubDirectories`<sup>Required</sup> <a name="StoredAsSubDirectories" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```go
func StoredAsSubDirectories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogTableStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptor">DataAwsGlueCatalogTableStorageDescriptor</a>

---


### DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList <a name="DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference <a name="DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId">SchemaId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList">DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">SchemaVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">SchemaVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReference">DataAwsGlueCatalogTableStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```go
func SchemaId() DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList">DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList</a>

---

##### `SchemaVersionId`<sup>Required</sup> <a name="SchemaVersionId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```go
func SchemaVersionId() *string
```

- *Type:* *string

---

##### `SchemaVersionNumber`<sup>Required</sup> <a name="SchemaVersionNumber" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```go
func SchemaVersionNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogTableStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReference">DataAwsGlueCatalogTableStorageDescriptorSchemaReference</a>

---


### DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList <a name="DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">RegistryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```go
func RegistryName() *string
```

- *Type:* *string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```go
func SchemaArn() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---


### DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList <a name="DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorSerDeInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference <a name="DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters">Parameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary">SerializationLibrary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfo">DataAwsGlueCatalogTableStorageDescriptorSerDeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SerializationLibrary`<sup>Required</sup> <a name="SerializationLibrary" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary"></a>

```go
func SerializationLibrary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogTableStorageDescriptorSerDeInfo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSerDeInfo">DataAwsGlueCatalogTableStorageDescriptorSerDeInfo</a>

---


### DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList <a name="DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorSkewedInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference <a name="DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">SkewedColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">SkewedColumnValueLocationMaps</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">SkewedColumnValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfo">DataAwsGlueCatalogTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SkewedColumnNames`<sup>Required</sup> <a name="SkewedColumnNames" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```go
func SkewedColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `SkewedColumnValueLocationMaps`<sup>Required</sup> <a name="SkewedColumnValueLocationMaps" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```go
func SkewedColumnValueLocationMaps() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SkewedColumnValues`<sup>Required</sup> <a name="SkewedColumnValues" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```go
func SkewedColumnValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSkewedInfo">DataAwsGlueCatalogTableStorageDescriptorSkewedInfo</a>

---


### DataAwsGlueCatalogTableStorageDescriptorSortColumnsList <a name="DataAwsGlueCatalogTableStorageDescriptorSortColumnsList" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorSortColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogTableStorageDescriptorSortColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference <a name="DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder">SortOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumns">DataAwsGlueCatalogTableStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```go
func SortOrder() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogTableStorageDescriptorSortColumns
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableStorageDescriptorSortColumns">DataAwsGlueCatalogTableStorageDescriptorSortColumns</a>

---


### DataAwsGlueCatalogTableTargetTableList <a name="DataAwsGlueCatalogTableTargetTableList" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableTargetTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogTableTargetTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogTableTargetTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogTableTargetTableOutputReference <a name="DataAwsGlueCatalogTableTargetTableOutputReference" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsgluecatalogtable"

dataawsgluecatalogtable.NewDataAwsGlueCatalogTableTargetTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogTableTargetTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTable">DataAwsGlueCatalogTableTargetTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogTableTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueCatalogTable.DataAwsGlueCatalogTableTargetTable">DataAwsGlueCatalogTableTargetTable</a>

---



