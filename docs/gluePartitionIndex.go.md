# `gluePartitionIndex` Submodule <a name="`gluePartitionIndex` Submodule" id="@cdktf/provider-aws.gluePartitionIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GluePartitionIndex <a name="GluePartitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index aws_glue_partition_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluepartitionindex"

gluepartitionindex.NewGluePartitionIndex(scope Construct, id *string, config GluePartitionIndexConfig) GluePartitionIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig">GluePartitionIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig">GluePartitionIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex">PutPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPartitionIndex` <a name="PutPartitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex"></a>

```go
func PutPartitionIndex(value GluePartitionIndexPartitionIndex)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts"></a>

```go
func PutTimeouts(value GluePartitionIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluepartitionindex"

gluepartitionindex.GluePartitionIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluepartitionindex"

gluepartitionindex.GluePartitionIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluepartitionindex"

gluepartitionindex.GluePartitionIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndex">PartitionIndex</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference">GluePartitionIndexPartitionIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference">GluePartitionIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndexInput">PartitionIndexInput</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndex"></a>

```go
func PartitionIndex() GluePartitionIndexPartitionIndexOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference">GluePartitionIndexPartitionIndexOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeouts"></a>

```go
func Timeouts() GluePartitionIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference">GluePartitionIndexTimeoutsOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndexInput"></a>

```go
func PartitionIndexInput() GluePartitionIndexPartitionIndex
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GluePartitionIndexConfig <a name="GluePartitionIndexConfig" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluepartitionindex"

&gluepartitionindex.GluePartitionIndexConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseName: *string,
	PartitionIndex: github.com/cdktf/cdktf-provider-aws-go/aws.gluePartitionIndex.GluePartitionIndexPartitionIndex,
	TableName: *string,
	CatalogId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.gluePartitionIndex.GluePartitionIndexTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#database_name GluePartitionIndex#database_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.partitionIndex">PartitionIndex</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | partition_index block. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#table_name GluePartitionIndex#table_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#catalog_id GluePartitionIndex#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#id GluePartitionIndex#id}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#database_name GluePartitionIndex#database_name}.

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.partitionIndex"></a>

```go
PartitionIndex GluePartitionIndexPartitionIndex
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

partition_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#partition_index GluePartitionIndex#partition_index}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#table_name GluePartitionIndex#table_name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#catalog_id GluePartitionIndex#catalog_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#id GluePartitionIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.timeouts"></a>

```go
Timeouts GluePartitionIndexTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#timeouts GluePartitionIndex#timeouts}

---

### GluePartitionIndexPartitionIndex <a name="GluePartitionIndexPartitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluepartitionindex"

&gluepartitionindex.GluePartitionIndexPartitionIndex {
	IndexName: *string,
	Keys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.indexName">IndexName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#index_name GluePartitionIndex#index_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.keys">Keys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#keys GluePartitionIndex#keys}. |

---

##### `IndexName`<sup>Optional</sup> <a name="IndexName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#index_name GluePartitionIndex#index_name}.

---

##### `Keys`<sup>Optional</sup> <a name="Keys" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.keys"></a>

```go
Keys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#keys GluePartitionIndex#keys}.

---

### GluePartitionIndexTimeouts <a name="GluePartitionIndexTimeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluepartitionindex"

&gluepartitionindex.GluePartitionIndexTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#create GluePartitionIndex#create}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#delete GluePartitionIndex#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#create GluePartitionIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#delete GluePartitionIndex#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GluePartitionIndexPartitionIndexOutputReference <a name="GluePartitionIndexPartitionIndexOutputReference" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluepartitionindex"

gluepartitionindex.NewGluePartitionIndexPartitionIndexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GluePartitionIndexPartitionIndexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetIndexName">ResetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetKeys">ResetKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIndexName` <a name="ResetIndexName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetIndexName"></a>

```go
func ResetIndexName()
```

##### `ResetKeys` <a name="ResetKeys" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetKeys"></a>

```go
func ResetKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexStatus">IndexStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keysInput">KeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keys">Keys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexStatus`<sup>Required</sup> <a name="IndexStatus" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexStatus"></a>

```go
func IndexStatus() *string
```

- *Type:* *string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `KeysInput`<sup>Optional</sup> <a name="KeysInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keysInput"></a>

```go
func KeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keys"></a>

```go
func Keys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.internalValue"></a>

```go
func InternalValue() GluePartitionIndexPartitionIndex
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

---


### GluePartitionIndexTimeoutsOutputReference <a name="GluePartitionIndexTimeoutsOutputReference" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluepartitionindex"

gluepartitionindex.NewGluePartitionIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GluePartitionIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



