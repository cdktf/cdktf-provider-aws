# `glueCatalogTable` Submodule <a name="`glueCatalogTable` Submodule" id="@cdktf/provider-aws.glueCatalogTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogTable <a name="GlueCatalogTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table aws_glue_catalog_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTable(scope Construct, id *string, config GlueCatalogTableConfig) GlueCatalogTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig">GlueCatalogTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig">GlueCatalogTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex">PutPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys">PutPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor">PutStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable">PutTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionKeys">ResetPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetRetention">ResetRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetStorageDescriptor">ResetStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTableType">ResetTableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTargetTable">ResetTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewExpandedText">ResetViewExpandedText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewOriginalText">ResetViewOriginalText</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPartitionIndex` <a name="PutPartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex"></a>

```go
func PutPartitionIndex(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPartitionKeys` <a name="PutPartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys"></a>

```go
func PutPartitionKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStorageDescriptor` <a name="PutStorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor"></a>

```go
func PutStorageDescriptor(value GlueCatalogTableStorageDescriptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---

##### `PutTargetTable` <a name="PutTargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable"></a>

```go
func PutTargetTable(value GlueCatalogTableTargetTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetId"></a>

```go
func ResetId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionIndex"></a>

```go
func ResetPartitionIndex()
```

##### `ResetPartitionKeys` <a name="ResetPartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionKeys"></a>

```go
func ResetPartitionKeys()
```

##### `ResetRetention` <a name="ResetRetention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetRetention"></a>

```go
func ResetRetention()
```

##### `ResetStorageDescriptor` <a name="ResetStorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetStorageDescriptor"></a>

```go
func ResetStorageDescriptor()
```

##### `ResetTableType` <a name="ResetTableType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTableType"></a>

```go
func ResetTableType()
```

##### `ResetTargetTable` <a name="ResetTargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTargetTable"></a>

```go
func ResetTargetTable()
```

##### `ResetViewExpandedText` <a name="ResetViewExpandedText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewExpandedText"></a>

```go
func ResetViewExpandedText()
```

##### `ResetViewOriginalText` <a name="ResetViewOriginalText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewOriginalText"></a>

```go
func ResetViewOriginalText()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.GlueCatalogTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.GlueCatalogTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.GlueCatalogTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndex">PartitionIndex</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList">GlueCatalogTablePartitionIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeys">PartitionKeys</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList">GlueCatalogTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference">GlueCatalogTableStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference">GlueCatalogTableTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeysInput">PartitionKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retentionInput">RetentionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptorInput">StorageDescriptorInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableTypeInput">TableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTableInput">TargetTableInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedTextInput">ViewExpandedTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalTextInput">ViewOriginalTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retention">Retention</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableType">TableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedText">ViewExpandedText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalText">ViewOriginalText</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndex"></a>

```go
func PartitionIndex() GlueCatalogTablePartitionIndexList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList">GlueCatalogTablePartitionIndexList</a>

---

##### `PartitionKeys`<sup>Required</sup> <a name="PartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeys"></a>

```go
func PartitionKeys() GlueCatalogTablePartitionKeysList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList">GlueCatalogTablePartitionKeysList</a>

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptor"></a>

```go
func StorageDescriptor() GlueCatalogTableStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference">GlueCatalogTableStorageDescriptorOutputReference</a>

---

##### `TargetTable`<sup>Required</sup> <a name="TargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTable"></a>

```go
func TargetTable() GlueCatalogTableTargetTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference">GlueCatalogTableTargetTableOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndexInput"></a>

```go
func PartitionIndexInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionKeysInput`<sup>Optional</sup> <a name="PartitionKeysInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeysInput"></a>

```go
func PartitionKeysInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retentionInput"></a>

```go
func RetentionInput() *f64
```

- *Type:* *f64

---

##### `StorageDescriptorInput`<sup>Optional</sup> <a name="StorageDescriptorInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptorInput"></a>

```go
func StorageDescriptorInput() GlueCatalogTableStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---

##### `TableTypeInput`<sup>Optional</sup> <a name="TableTypeInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableTypeInput"></a>

```go
func TableTypeInput() *string
```

- *Type:* *string

---

##### `TargetTableInput`<sup>Optional</sup> <a name="TargetTableInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTableInput"></a>

```go
func TargetTableInput() GlueCatalogTableTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---

##### `ViewExpandedTextInput`<sup>Optional</sup> <a name="ViewExpandedTextInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedTextInput"></a>

```go
func ViewExpandedTextInput() *string
```

- *Type:* *string

---

##### `ViewOriginalTextInput`<sup>Optional</sup> <a name="ViewOriginalTextInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalTextInput"></a>

```go
func ViewOriginalTextInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retention"></a>

```go
func Retention() *f64
```

- *Type:* *f64

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableType"></a>

```go
func TableType() *string
```

- *Type:* *string

---

##### `ViewExpandedText`<sup>Required</sup> <a name="ViewExpandedText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedText"></a>

```go
func ViewExpandedText() *string
```

- *Type:* *string

---

##### `ViewOriginalText`<sup>Required</sup> <a name="ViewOriginalText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalText"></a>

```go
func ViewOriginalText() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogTableConfig <a name="GlueCatalogTableConfig" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

&gluecatalogtable.GlueCatalogTableConfig {
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
	Description: *string,
	Id: *string,
	Owner: *string,
	Parameters: *map[string]*string,
	PartitionIndex: interface{},
	PartitionKeys: interface{},
	Retention: *f64,
	StorageDescriptor: github.com/cdktf/cdktf-provider-aws-go/aws.glueCatalogTable.GlueCatalogTableStorageDescriptor,
	TableType: *string,
	TargetTable: github.com/cdktf/cdktf-provider-aws-go/aws.glueCatalogTable.GlueCatalogTableTargetTable,
	ViewExpandedText: *string,
	ViewOriginalText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#description GlueCatalogTable#description}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#id GlueCatalogTable#id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#owner GlueCatalogTable#owner}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionIndex">PartitionIndex</a></code> | <code>interface{}</code> | partition_index block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionKeys">PartitionKeys</a></code> | <code>interface{}</code> | partition_keys block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.retention">Retention</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#retention GlueCatalogTable#retention}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.tableType">TableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#table_type GlueCatalogTable#table_type}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | target_table block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewExpandedText">ViewExpandedText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewOriginalText">ViewOriginalText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#description GlueCatalogTable#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#id GlueCatalogTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#owner GlueCatalogTable#owner}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionIndex"></a>

```go
PartitionIndex interface{}
```

- *Type:* interface{}

partition_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#partition_index GlueCatalogTable#partition_index}

---

##### `PartitionKeys`<sup>Optional</sup> <a name="PartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionKeys"></a>

```go
PartitionKeys interface{}
```

- *Type:* interface{}

partition_keys block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#partition_keys GlueCatalogTable#partition_keys}

---

##### `Retention`<sup>Optional</sup> <a name="Retention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.retention"></a>

```go
Retention *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#retention GlueCatalogTable#retention}.

---

##### `StorageDescriptor`<sup>Optional</sup> <a name="StorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.storageDescriptor"></a>

```go
StorageDescriptor GlueCatalogTableStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#storage_descriptor GlueCatalogTable#storage_descriptor}

---

##### `TableType`<sup>Optional</sup> <a name="TableType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.tableType"></a>

```go
TableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#table_type GlueCatalogTable#table_type}.

---

##### `TargetTable`<sup>Optional</sup> <a name="TargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.targetTable"></a>

```go
TargetTable GlueCatalogTableTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

target_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#target_table GlueCatalogTable#target_table}

---

##### `ViewExpandedText`<sup>Optional</sup> <a name="ViewExpandedText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewExpandedText"></a>

```go
ViewExpandedText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}.

---

##### `ViewOriginalText`<sup>Optional</sup> <a name="ViewOriginalText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewOriginalText"></a>

```go
ViewOriginalText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}.

---

### GlueCatalogTablePartitionIndex <a name="GlueCatalogTablePartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

&gluecatalogtable.GlueCatalogTablePartitionIndex {
	IndexName: *string,
	Keys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.indexName">IndexName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#index_name GlueCatalogTable#index_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.keys">Keys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#keys GlueCatalogTable#keys}. |

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#index_name GlueCatalogTable#index_name}.

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.keys"></a>

```go
Keys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#keys GlueCatalogTable#keys}.

---

### GlueCatalogTablePartitionKeys <a name="GlueCatalogTablePartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

&gluecatalogtable.GlueCatalogTablePartitionKeys {
	Name: *string,
	Comment: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}.

---

### GlueCatalogTableStorageDescriptor <a name="GlueCatalogTableStorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

&gluecatalogtable.GlueCatalogTableStorageDescriptor {
	BucketColumns: *[]*string,
	Columns: interface{},
	Compressed: interface{},
	InputFormat: *string,
	Location: *string,
	NumberOfBuckets: *f64,
	OutputFormat: *string,
	Parameters: *map[string]*string,
	SchemaReference: github.com/cdktf/cdktf-provider-aws-go/aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference,
	SerDeInfo: github.com/cdktf/cdktf-provider-aws-go/aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo,
	SkewedInfo: github.com/cdktf/cdktf-provider-aws-go/aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo,
	SortColumns: interface{},
	StoredAsSubDirectories: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.bucketColumns">BucketColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.columns">Columns</a></code> | <code>interface{}</code> | columns block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.compressed">Compressed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#compressed GlueCatalogTable#compressed}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.inputFormat">InputFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#input_format GlueCatalogTable#input_format}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#location GlueCatalogTable#location}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.numberOfBuckets">NumberOfBuckets</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#output_format GlueCatalogTable#output_format}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.schemaReference">SchemaReference</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | schema_reference block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.serDeInfo">SerDeInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | ser_de_info block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.sortColumns">SortColumns</a></code> | <code>interface{}</code> | sort_columns block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.storedAsSubDirectories">StoredAsSubDirectories</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}. |

---

##### `BucketColumns`<sup>Optional</sup> <a name="BucketColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.bucketColumns"></a>

```go
BucketColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}.

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.columns"></a>

```go
Columns interface{}
```

- *Type:* interface{}

columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#columns GlueCatalogTable#columns}

---

##### `Compressed`<sup>Optional</sup> <a name="Compressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.compressed"></a>

```go
Compressed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#compressed GlueCatalogTable#compressed}.

---

##### `InputFormat`<sup>Optional</sup> <a name="InputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.inputFormat"></a>

```go
InputFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#input_format GlueCatalogTable#input_format}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#location GlueCatalogTable#location}.

---

##### `NumberOfBuckets`<sup>Optional</sup> <a name="NumberOfBuckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.numberOfBuckets"></a>

```go
NumberOfBuckets *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}.

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.outputFormat"></a>

```go
OutputFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#output_format GlueCatalogTable#output_format}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `SchemaReference`<sup>Optional</sup> <a name="SchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.schemaReference"></a>

```go
SchemaReference GlueCatalogTableStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

schema_reference block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_reference GlueCatalogTable#schema_reference}

---

##### `SerDeInfo`<sup>Optional</sup> <a name="SerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.serDeInfo"></a>

```go
SerDeInfo GlueCatalogTableStorageDescriptorSerDeInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

ser_de_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#ser_de_info GlueCatalogTable#ser_de_info}

---

##### `SkewedInfo`<sup>Optional</sup> <a name="SkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.skewedInfo"></a>

```go
SkewedInfo GlueCatalogTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_info GlueCatalogTable#skewed_info}

---

##### `SortColumns`<sup>Optional</sup> <a name="SortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.sortColumns"></a>

```go
SortColumns interface{}
```

- *Type:* interface{}

sort_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#sort_columns GlueCatalogTable#sort_columns}

---

##### `StoredAsSubDirectories`<sup>Optional</sup> <a name="StoredAsSubDirectories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.storedAsSubDirectories"></a>

```go
StoredAsSubDirectories interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}.

---

### GlueCatalogTableStorageDescriptorColumns <a name="GlueCatalogTableStorageDescriptorColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

&gluecatalogtable.GlueCatalogTableStorageDescriptorColumns {
	Name: *string,
	Comment: *string,
	Parameters: *map[string]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}.

---

### GlueCatalogTableStorageDescriptorSchemaReference <a name="GlueCatalogTableStorageDescriptorSchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

&gluecatalogtable.GlueCatalogTableStorageDescriptorSchemaReference {
	SchemaVersionNumber: *f64,
	SchemaId: github.com/cdktf/cdktf-provider-aws-go/aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId,
	SchemaVersionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionNumber">SchemaVersionNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaId">SchemaId</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | schema_id block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionId">SchemaVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}. |

---

##### `SchemaVersionNumber`<sup>Required</sup> <a name="SchemaVersionNumber" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```go
SchemaVersionNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}.

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaId"></a>

```go
SchemaId GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

schema_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_id GlueCatalogTable#schema_id}

---

##### `SchemaVersionId`<sup>Optional</sup> <a name="SchemaVersionId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```go
SchemaVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}.

---

### GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId <a name="GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

&gluecatalogtable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {
	RegistryName: *string,
	SchemaArn: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.registryName">RegistryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#registry_name GlueCatalogTable#registry_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_name GlueCatalogTable#schema_name}. |

---

##### `RegistryName`<sup>Optional</sup> <a name="RegistryName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```go
RegistryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#registry_name GlueCatalogTable#registry_name}.

---

##### `SchemaArn`<sup>Optional</sup> <a name="SchemaArn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```go
SchemaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_name GlueCatalogTable#schema_name}.

---

### GlueCatalogTableStorageDescriptorSerDeInfo <a name="GlueCatalogTableStorageDescriptorSerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

&gluecatalogtable.GlueCatalogTableStorageDescriptorSerDeInfo {
	Name: *string,
	Parameters: *map[string]*string,
	SerializationLibrary: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.serializationLibrary">SerializationLibrary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `SerializationLibrary`<sup>Optional</sup> <a name="SerializationLibrary" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.serializationLibrary"></a>

```go
SerializationLibrary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}.

---

### GlueCatalogTableStorageDescriptorSkewedInfo <a name="GlueCatalogTableStorageDescriptorSkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

&gluecatalogtable.GlueCatalogTableStorageDescriptorSkewedInfo {
	SkewedColumnNames: *[]*string,
	SkewedColumnValueLocationMaps: *map[string]*string,
	SkewedColumnValues: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnNames">SkewedColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">SkewedColumnValueLocationMaps</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValues">SkewedColumnValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}. |

---

##### `SkewedColumnNames`<sup>Optional</sup> <a name="SkewedColumnNames" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```go
SkewedColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}.

---

##### `SkewedColumnValueLocationMaps`<sup>Optional</sup> <a name="SkewedColumnValueLocationMaps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```go
SkewedColumnValueLocationMaps *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}.

---

##### `SkewedColumnValues`<sup>Optional</sup> <a name="SkewedColumnValues" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```go
SkewedColumnValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}.

---

### GlueCatalogTableStorageDescriptorSortColumns <a name="GlueCatalogTableStorageDescriptorSortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

&gluecatalogtable.GlueCatalogTableStorageDescriptorSortColumns {
	Column: *string,
	SortOrder: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.column">Column</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#column GlueCatalogTable#column}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.sortOrder">SortOrder</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#sort_order GlueCatalogTable#sort_order}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.column"></a>

```go
Column *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#column GlueCatalogTable#column}.

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.sortOrder"></a>

```go
SortOrder *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#sort_order GlueCatalogTable#sort_order}.

---

### GlueCatalogTableTargetTable <a name="GlueCatalogTableTargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

&gluecatalogtable.GlueCatalogTableTargetTable {
	CatalogId: *string,
	DatabaseName: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogTablePartitionIndexList <a name="GlueCatalogTablePartitionIndexList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTablePartitionIndexList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCatalogTablePartitionIndexList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get"></a>

```go
func Get(index *f64) GlueCatalogTablePartitionIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogTablePartitionIndexOutputReference <a name="GlueCatalogTablePartitionIndexOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTablePartitionIndexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCatalogTablePartitionIndexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexStatus">IndexStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keysInput">KeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keys">Keys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexStatus`<sup>Required</sup> <a name="IndexStatus" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexStatus"></a>

```go
func IndexStatus() *string
```

- *Type:* *string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `KeysInput`<sup>Optional</sup> <a name="KeysInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keysInput"></a>

```go
func KeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keys"></a>

```go
func Keys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogTablePartitionKeysList <a name="GlueCatalogTablePartitionKeysList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTablePartitionKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCatalogTablePartitionKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get"></a>

```go
func Get(index *f64) GlueCatalogTablePartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogTablePartitionKeysOutputReference <a name="GlueCatalogTablePartitionKeysOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTablePartitionKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCatalogTablePartitionKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogTableStorageDescriptorColumnsList <a name="GlueCatalogTableStorageDescriptorColumnsList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTableStorageDescriptorColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCatalogTableStorageDescriptorColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get"></a>

```go
func Get(index *f64) GlueCatalogTableStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogTableStorageDescriptorColumnsOutputReference <a name="GlueCatalogTableStorageDescriptorColumnsOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTableStorageDescriptorColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCatalogTableStorageDescriptorColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogTableStorageDescriptorOutputReference <a name="GlueCatalogTableStorageDescriptorOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTableStorageDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogTableStorageDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference">PutSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo">PutSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo">PutSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns">PutSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetBucketColumns">ResetBucketColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetCompressed">ResetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetInputFormat">ResetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetNumberOfBuckets">ResetNumberOfBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSchemaReference">ResetSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSerDeInfo">ResetSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSkewedInfo">ResetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSortColumns">ResetSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetStoredAsSubDirectories">ResetStoredAsSubDirectories</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns"></a>

```go
func PutColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchemaReference` <a name="PutSchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference"></a>

```go
func PutSchemaReference(value GlueCatalogTableStorageDescriptorSchemaReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---

##### `PutSerDeInfo` <a name="PutSerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo"></a>

```go
func PutSerDeInfo(value GlueCatalogTableStorageDescriptorSerDeInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---

##### `PutSkewedInfo` <a name="PutSkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo"></a>

```go
func PutSkewedInfo(value GlueCatalogTableStorageDescriptorSkewedInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---

##### `PutSortColumns` <a name="PutSortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns"></a>

```go
func PutSortColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBucketColumns` <a name="ResetBucketColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetBucketColumns"></a>

```go
func ResetBucketColumns()
```

##### `ResetColumns` <a name="ResetColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetColumns"></a>

```go
func ResetColumns()
```

##### `ResetCompressed` <a name="ResetCompressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetCompressed"></a>

```go
func ResetCompressed()
```

##### `ResetInputFormat` <a name="ResetInputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetInputFormat"></a>

```go
func ResetInputFormat()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetNumberOfBuckets` <a name="ResetNumberOfBuckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```go
func ResetNumberOfBuckets()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetOutputFormat"></a>

```go
func ResetOutputFormat()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSchemaReference` <a name="ResetSchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSchemaReference"></a>

```go
func ResetSchemaReference()
```

##### `ResetSerDeInfo` <a name="ResetSerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSerDeInfo"></a>

```go
func ResetSerDeInfo()
```

##### `ResetSkewedInfo` <a name="ResetSkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSkewedInfo"></a>

```go
func ResetSkewedInfo()
```

##### `ResetSortColumns` <a name="ResetSortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSortColumns"></a>

```go
func ResetSortColumns()
```

##### `ResetStoredAsSubDirectories` <a name="ResetStoredAsSubDirectories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```go
func ResetStoredAsSubDirectories()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList">GlueCatalogTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReference">SchemaReference</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo">SerDeInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference">GlueCatalogTableStorageDescriptorSerDeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference">GlueCatalogTableStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumns">SortColumns</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList">GlueCatalogTableStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumnsInput">BucketColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressedInput">CompressedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormatInput">InputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBucketsInput">NumberOfBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReferenceInput">SchemaReferenceInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfoInput">SerDeInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfoInput">SkewedInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumnsInput">SortColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">StoredAsSubDirectoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns">BucketColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressed">Compressed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets">NumberOfBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories">StoredAsSubDirectories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columns"></a>

```go
func Columns() GlueCatalogTableStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList">GlueCatalogTableStorageDescriptorColumnsList</a>

---

##### `SchemaReference`<sup>Required</sup> <a name="SchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReference"></a>

```go
func SchemaReference() GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `SerDeInfo`<sup>Required</sup> <a name="SerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo"></a>

```go
func SerDeInfo() GlueCatalogTableStorageDescriptorSerDeInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference">GlueCatalogTableStorageDescriptorSerDeInfoOutputReference</a>

---

##### `SkewedInfo`<sup>Required</sup> <a name="SkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```go
func SkewedInfo() GlueCatalogTableStorageDescriptorSkewedInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference">GlueCatalogTableStorageDescriptorSkewedInfoOutputReference</a>

---

##### `SortColumns`<sup>Required</sup> <a name="SortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumns"></a>

```go
func SortColumns() GlueCatalogTableStorageDescriptorSortColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList">GlueCatalogTableStorageDescriptorSortColumnsList</a>

---

##### `BucketColumnsInput`<sup>Optional</sup> <a name="BucketColumnsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```go
func BucketColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `CompressedInput`<sup>Optional</sup> <a name="CompressedInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressedInput"></a>

```go
func CompressedInput() interface{}
```

- *Type:* interface{}

---

##### `InputFormatInput`<sup>Optional</sup> <a name="InputFormatInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormatInput"></a>

```go
func InputFormatInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NumberOfBucketsInput`<sup>Optional</sup> <a name="NumberOfBucketsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```go
func NumberOfBucketsInput() *f64
```

- *Type:* *f64

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormatInput"></a>

```go
func OutputFormatInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SchemaReferenceInput`<sup>Optional</sup> <a name="SchemaReferenceInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```go
func SchemaReferenceInput() GlueCatalogTableStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---

##### `SerDeInfoInput`<sup>Optional</sup> <a name="SerDeInfoInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfoInput"></a>

```go
func SerDeInfoInput() GlueCatalogTableStorageDescriptorSerDeInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---

##### `SkewedInfoInput`<sup>Optional</sup> <a name="SkewedInfoInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```go
func SkewedInfoInput() GlueCatalogTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---

##### `SortColumnsInput`<sup>Optional</sup> <a name="SortColumnsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```go
func SortColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `StoredAsSubDirectoriesInput`<sup>Optional</sup> <a name="StoredAsSubDirectoriesInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```go
func StoredAsSubDirectoriesInput() interface{}
```

- *Type:* interface{}

---

##### `BucketColumns`<sup>Required</sup> <a name="BucketColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns"></a>

```go
func BucketColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Compressed`<sup>Required</sup> <a name="Compressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressed"></a>

```go
func Compressed() interface{}
```

- *Type:* interface{}

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormat"></a>

```go
func InputFormat() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NumberOfBuckets`<sup>Required</sup> <a name="NumberOfBuckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```go
func NumberOfBuckets() *f64
```

- *Type:* *f64

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StoredAsSubDirectories`<sup>Required</sup> <a name="StoredAsSubDirectories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```go
func StoredAsSubDirectories() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueCatalogTableStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---


### GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference <a name="GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId">PutSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">ResetSchemaVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaId` <a name="PutSchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```go
func PutSchemaId(value GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetSchemaVersionId` <a name="ResetSchemaVersionId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```go
func ResetSchemaVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId">SchemaId</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">SchemaVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">SchemaVersionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">SchemaVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">SchemaVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```go
func SchemaId() GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `SchemaVersionIdInput`<sup>Optional</sup> <a name="SchemaVersionIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```go
func SchemaVersionIdInput() *string
```

- *Type:* *string

---

##### `SchemaVersionNumberInput`<sup>Optional</sup> <a name="SchemaVersionNumberInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```go
func SchemaVersionNumberInput() *f64
```

- *Type:* *f64

---

##### `SchemaVersionId`<sup>Required</sup> <a name="SchemaVersionId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```go
func SchemaVersionId() *string
```

- *Type:* *string

---

##### `SchemaVersionNumber`<sup>Required</sup> <a name="SchemaVersionNumber" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```go
func SchemaVersionNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueCatalogTableStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---


### GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">ResetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">ResetSchemaArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegistryName` <a name="ResetRegistryName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```go
func ResetRegistryName()
```

##### `ResetSchemaArn` <a name="ResetSchemaArn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```go
func ResetSchemaArn()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">RegistryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">SchemaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">RegistryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegistryNameInput`<sup>Optional</sup> <a name="RegistryNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```go
func RegistryNameInput() *string
```

- *Type:* *string

---

##### `SchemaArnInput`<sup>Optional</sup> <a name="SchemaArnInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```go
func SchemaArnInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```go
func RegistryName() *string
```

- *Type:* *string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```go
func SchemaArn() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---


### GlueCatalogTableStorageDescriptorSerDeInfoOutputReference <a name="GlueCatalogTableStorageDescriptorSerDeInfoOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTableStorageDescriptorSerDeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogTableStorageDescriptorSerDeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary">ResetSerializationLibrary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSerializationLibrary` <a name="ResetSerializationLibrary" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary"></a>

```go
func ResetSerializationLibrary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput">SerializationLibraryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary">SerializationLibrary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SerializationLibraryInput`<sup>Optional</sup> <a name="SerializationLibraryInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput"></a>

```go
func SerializationLibraryInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SerializationLibrary`<sup>Required</sup> <a name="SerializationLibrary" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary"></a>

```go
func SerializationLibrary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueCatalogTableStorageDescriptorSerDeInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---


### GlueCatalogTableStorageDescriptorSkewedInfoOutputReference <a name="GlueCatalogTableStorageDescriptorSkewedInfoOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTableStorageDescriptorSkewedInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogTableStorageDescriptorSkewedInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">ResetSkewedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">ResetSkewedColumnValueLocationMaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">ResetSkewedColumnValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSkewedColumnNames` <a name="ResetSkewedColumnNames" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```go
func ResetSkewedColumnNames()
```

##### `ResetSkewedColumnValueLocationMaps` <a name="ResetSkewedColumnValueLocationMaps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```go
func ResetSkewedColumnValueLocationMaps()
```

##### `ResetSkewedColumnValues` <a name="ResetSkewedColumnValues" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```go
func ResetSkewedColumnValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">SkewedColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">SkewedColumnValueLocationMapsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">SkewedColumnValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">SkewedColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">SkewedColumnValueLocationMaps</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">SkewedColumnValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SkewedColumnNamesInput`<sup>Optional</sup> <a name="SkewedColumnNamesInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```go
func SkewedColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SkewedColumnValueLocationMapsInput`<sup>Optional</sup> <a name="SkewedColumnValueLocationMapsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```go
func SkewedColumnValueLocationMapsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SkewedColumnValuesInput`<sup>Optional</sup> <a name="SkewedColumnValuesInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```go
func SkewedColumnValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SkewedColumnNames`<sup>Required</sup> <a name="SkewedColumnNames" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```go
func SkewedColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `SkewedColumnValueLocationMaps`<sup>Required</sup> <a name="SkewedColumnValueLocationMaps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```go
func SkewedColumnValueLocationMaps() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SkewedColumnValues`<sup>Required</sup> <a name="SkewedColumnValues" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```go
func SkewedColumnValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueCatalogTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---


### GlueCatalogTableStorageDescriptorSortColumnsList <a name="GlueCatalogTableStorageDescriptorSortColumnsList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTableStorageDescriptorSortColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCatalogTableStorageDescriptorSortColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get"></a>

```go
func Get(index *f64) GlueCatalogTableStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogTableStorageDescriptorSortColumnsOutputReference <a name="GlueCatalogTableStorageDescriptorSortColumnsOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTableStorageDescriptorSortColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCatalogTableStorageDescriptorSortColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.columnInput">ColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">SortOrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder">SortOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```go
func ColumnInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```go
func SortOrderInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```go
func SortOrder() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogTableTargetTableOutputReference <a name="GlueCatalogTableTargetTableOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluecatalogtable"

gluecatalogtable.NewGlueCatalogTableTargetTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogTableTargetTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueCatalogTableTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---



