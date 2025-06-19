# `neptunegraphGraph` Submodule <a name="`neptunegraphGraph` Submodule" id="@cdktf/provider-aws.neptunegraphGraph"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptunegraphGraph <a name="NeptunegraphGraph" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph aws_neptunegraph_graph}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/neptunegraphgraph"

neptunegraphgraph.NewNeptunegraphGraph(scope Construct, id *string, config NeptunegraphGraphConfig) NeptunegraphGraph
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig">NeptunegraphGraphConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig">NeptunegraphGraphConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration">PutVectorSearchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphName">ResetGraphName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphNamePrefix">ResetGraphNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity">ResetPublicConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration">ResetVectorSearchConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putTimeouts"></a>

```go
func PutTimeouts(value NeptunegraphGraphTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>

---

##### `PutVectorSearchConfiguration` <a name="PutVectorSearchConfiguration" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration"></a>

```go
func PutVectorSearchConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetGraphName` <a name="ResetGraphName" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphName"></a>

```go
func ResetGraphName()
```

##### `ResetGraphNamePrefix` <a name="ResetGraphNamePrefix" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphNamePrefix"></a>

```go
func ResetGraphNamePrefix()
```

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier"></a>

```go
func ResetKmsKeyIdentifier()
```

##### `ResetPublicConnectivity` <a name="ResetPublicConnectivity" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity"></a>

```go
func ResetPublicConnectivity()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount"></a>

```go
func ResetReplicaCount()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVectorSearchConfiguration` <a name="ResetVectorSearchConfiguration" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration"></a>

```go
func ResetVectorSearchConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NeptunegraphGraph resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/neptunegraphgraph"

neptunegraphgraph.NeptunegraphGraph_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/neptunegraphgraph"

neptunegraphgraph.NeptunegraphGraph_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/neptunegraphgraph"

neptunegraphgraph.NeptunegraphGraph_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/neptunegraphgraph"

neptunegraphgraph.NeptunegraphGraph_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NeptunegraphGraph resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NeptunegraphGraph to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NeptunegraphGraph that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NeptunegraphGraph to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference">NeptunegraphGraphTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration">VectorSearchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList">NeptunegraphGraphVectorSearchConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput">GraphNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefixInput">GraphNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput">ProvisionedMemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput">PublicConnectivityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput">ReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput">VectorSearchConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphName">GraphName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefix">GraphNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory">ProvisionedMemory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity">PublicConnectivity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeouts"></a>

```go
func Timeouts() NeptunegraphGraphTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference">NeptunegraphGraphTimeoutsOutputReference</a>

---

##### `VectorSearchConfiguration`<sup>Required</sup> <a name="VectorSearchConfiguration" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration"></a>

```go
func VectorSearchConfiguration() NeptunegraphGraphVectorSearchConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList">NeptunegraphGraphVectorSearchConfigurationList</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `GraphNameInput`<sup>Optional</sup> <a name="GraphNameInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput"></a>

```go
func GraphNameInput() *string
```

- *Type:* *string

---

##### `GraphNamePrefixInput`<sup>Optional</sup> <a name="GraphNamePrefixInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefixInput"></a>

```go
func GraphNamePrefixInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput"></a>

```go
func KmsKeyIdentifierInput() *string
```

- *Type:* *string

---

##### `ProvisionedMemoryInput`<sup>Optional</sup> <a name="ProvisionedMemoryInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput"></a>

```go
func ProvisionedMemoryInput() *f64
```

- *Type:* *f64

---

##### `PublicConnectivityInput`<sup>Optional</sup> <a name="PublicConnectivityInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput"></a>

```go
func PublicConnectivityInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput"></a>

```go
func ReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VectorSearchConfigurationInput`<sup>Optional</sup> <a name="VectorSearchConfigurationInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput"></a>

```go
func VectorSearchConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `GraphName`<sup>Required</sup> <a name="GraphName" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphName"></a>

```go
func GraphName() *string
```

- *Type:* *string

---

##### `GraphNamePrefix`<sup>Required</sup> <a name="GraphNamePrefix" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefix"></a>

```go
func GraphNamePrefix() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier"></a>

```go
func KmsKeyIdentifier() *string
```

- *Type:* *string

---

##### `ProvisionedMemory`<sup>Required</sup> <a name="ProvisionedMemory" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory"></a>

```go
func ProvisionedMemory() *f64
```

- *Type:* *f64

---

##### `PublicConnectivity`<sup>Required</sup> <a name="PublicConnectivity" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity"></a>

```go
func PublicConnectivity() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCount"></a>

```go
func ReplicaCount() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptunegraphGraphConfig <a name="NeptunegraphGraphConfig" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/neptunegraphgraph"

&neptunegraphgraph.NeptunegraphGraphConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProvisionedMemory: *f64,
	DeletionProtection: interface{},
	GraphName: *string,
	GraphNamePrefix: *string,
	KmsKeyIdentifier: *string,
	PublicConnectivity: interface{},
	Region: *string,
	ReplicaCount: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.neptunegraphGraph.NeptunegraphGraphTimeouts,
	VectorSearchConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory">ProvisionedMemory</a></code> | <code>*f64</code> | The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | A value that indicates whether the graph has deletion protection enabled. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName">GraphName</a></code> | <code>*string</code> | The graph name. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphNamePrefix">GraphNamePrefix</a></code> | <code>*string</code> | Allows user to specify name prefix and have remainder of name automatically generated. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | Specifies a KMS key to use to encrypt data in the new graph. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity">PublicConnectivity</a></code> | <code>interface{}</code> | Specifies whether or not the graph can be reachable over the internet. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | The number of replicas in other AZs.  Value must be between 0 and 2. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration">VectorSearchConfiguration</a></code> | <code>interface{}</code> | vector_search_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProvisionedMemory`<sup>Required</sup> <a name="ProvisionedMemory" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory"></a>

```go
ProvisionedMemory *f64
```

- *Type:* *f64

The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

A value that indicates whether the graph has deletion protection enabled.

The graph can't be deleted when deletion protection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}

---

##### `GraphName`<sup>Optional</sup> <a name="GraphName" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName"></a>

```go
GraphName *string
```

- *Type:* *string

The graph name.

For example: my-graph-1.
The name must contain from 1 to 63 letters, numbers, or hyphens,
and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
If you don't specify a graph name, a unique graph name is generated for you using the prefix graph-for,
followed by a combination of Stack Name and a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}

---

##### `GraphNamePrefix`<sup>Optional</sup> <a name="GraphNamePrefix" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphNamePrefix"></a>

```go
GraphNamePrefix *string
```

- *Type:* *string

Allows user to specify name prefix and have remainder of name automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#graph_name_prefix NeptunegraphGraph#graph_name_prefix}

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier"></a>

```go
KmsKeyIdentifier *string
```

- *Type:* *string

Specifies a KMS key to use to encrypt data in the new graph.

Value must be ARN of KMS Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}

---

##### `PublicConnectivity`<sup>Optional</sup> <a name="PublicConnectivity" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity"></a>

```go
PublicConnectivity interface{}
```

- *Type:* interface{}

Specifies whether or not the graph can be reachable over the internet.

All access to graphs is IAM authenticated.
When the graph is publicly available, its domain name system (DNS) endpoint resolves to
the public IP address from the internet. When the graph isn't publicly available, you need
to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private
IP address that is reachable from the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#region NeptunegraphGraph#region}

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount"></a>

```go
ReplicaCount *f64
```

- *Type:* *f64

The number of replicas in other AZs.  Value must be between 0 and 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.timeouts"></a>

```go
Timeouts NeptunegraphGraphTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#timeouts NeptunegraphGraph#timeouts}

---

##### `VectorSearchConfiguration`<sup>Optional</sup> <a name="VectorSearchConfiguration" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration"></a>

```go
VectorSearchConfiguration interface{}
```

- *Type:* interface{}

vector_search_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}

---

### NeptunegraphGraphTimeouts <a name="NeptunegraphGraphTimeouts" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/neptunegraphgraph"

&neptunegraphgraph.NeptunegraphGraphTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#create NeptunegraphGraph#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#delete NeptunegraphGraph#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#update NeptunegraphGraph#update}

---

### NeptunegraphGraphVectorSearchConfiguration <a name="NeptunegraphGraphVectorSearchConfiguration" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/neptunegraphgraph"

&neptunegraphgraph.NeptunegraphGraphVectorSearchConfiguration {
	VectorSearchDimension: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension">VectorSearchDimension</a></code> | <code>*f64</code> | Specifies the number of dimensions for vector embeddings.  Value must be between 1 and 65,535. |

---

##### `VectorSearchDimension`<sup>Optional</sup> <a name="VectorSearchDimension" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension"></a>

```go
VectorSearchDimension *f64
```

- *Type:* *f64

Specifies the number of dimensions for vector embeddings.  Value must be between 1 and 65,535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/neptunegraph_graph#vector_search_dimension NeptunegraphGraph#vector_search_dimension}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptunegraphGraphTimeoutsOutputReference <a name="NeptunegraphGraphTimeoutsOutputReference" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/neptunegraphgraph"

neptunegraphgraph.NewNeptunegraphGraphTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NeptunegraphGraphTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NeptunegraphGraphVectorSearchConfigurationList <a name="NeptunegraphGraphVectorSearchConfigurationList" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/neptunegraphgraph"

neptunegraphgraph.NewNeptunegraphGraphVectorSearchConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NeptunegraphGraphVectorSearchConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.get"></a>

```go
func Get(index *f64) NeptunegraphGraphVectorSearchConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NeptunegraphGraphVectorSearchConfigurationOutputReference <a name="NeptunegraphGraphVectorSearchConfigurationOutputReference" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/neptunegraphgraph"

neptunegraphgraph.NewNeptunegraphGraphVectorSearchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NeptunegraphGraphVectorSearchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension">ResetVectorSearchDimension</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVectorSearchDimension` <a name="ResetVectorSearchDimension" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension"></a>

```go
func ResetVectorSearchDimension()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput">VectorSearchDimensionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension">VectorSearchDimension</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VectorSearchDimensionInput`<sup>Optional</sup> <a name="VectorSearchDimensionInput" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput"></a>

```go
func VectorSearchDimensionInput() *f64
```

- *Type:* *f64

---

##### `VectorSearchDimension`<sup>Required</sup> <a name="VectorSearchDimension" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension"></a>

```go
func VectorSearchDimension() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



